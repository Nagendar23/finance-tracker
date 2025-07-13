"use client";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#38bdf8", "#6366f1", "#fbbf24", "#34d399", "#f472b6"];

export default function CategoryChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        const grouped = {};
        transactions.forEach((tx) => {
          grouped[tx.category] = (grouped[tx.category] || 0) + tx.amount;
        });
        const formatted = Object.entries(grouped).map(([name, value]) => ({
          name,
          value,
        }));
        setData(formatted);
      });
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-lg rounded-2xl border border-blue-200 animate-fade-in">
      <h3 className="font-extrabold text-2xl mb-6 text-center text-blue-700 tracking-tight">Category Wise Expenses</h3>
      <div className="w-full h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#3b82f6"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#eff6ff",
                border: "1px solid #3b82f6",
                borderRadius: "8px",
                color: "#1e3a8a"
              }}
            />
            <Legend
              wrapperStyle={{
                fontWeight: 600,
                color: "#1e3a8a"
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
