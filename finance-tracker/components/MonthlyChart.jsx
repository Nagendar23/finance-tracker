"use client";

import { useState, useEffect } from "react";

export default function MonthlyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((transactions) => {
        const grouped = {};

        transactions.forEach((tx) => {
          const date = new Date(tx.date);
          const month = `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}`;

          grouped[month] = (grouped[month] || 0) + tx.amount;
        });

        const groupedArray = Object.entries(grouped).map(([month, total]) => ({
          month,
          total,
        }));

        setData(groupedArray);
      });
  }, []);

  // Bar height scaling factor (adjust to control size)
  const maxHeight = 160;
  const maxAmount = Math.max(...data.map((d) => d.total), 1);

  return (
    <div className="max-w-2xl mx-auto mt-14 px-8 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-2xl rounded-3xl border border-blue-200 animate-fade-in">
      <h3 className="font-extrabold text-3xl mb-8 text-center text-blue-800 tracking-tight">
        Monthly Expenses
      </h3>

      {data.length === 0 ? (
        <p className="text-gray-500 text-center text-sm">No transaction data available.</p>
      ) : (
        <div className="flex items-end justify-center gap-6 h-64 border-t border-blue-200 pt-6 overflow-x-auto">
          {data.map((item) => {
            const heightPx = Math.max((item.total / maxAmount) * maxHeight, 20); // Min 20px

            return (
              <div key={item.month} className="text-center text-sm group relative w-12">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-blue-400 to-blue-600 shadow-md transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-800 relative"
                  style={{
                    height: `${heightPx}px`,
                  }}
                  title={`₹${item.total}`}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
                    ₹{item.total.toLocaleString()}
                  </span>
                </div>
                <div className="mt-3 text-xs text-blue-900 font-medium">
                  {item.month}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
