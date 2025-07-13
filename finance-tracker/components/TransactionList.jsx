"use client";

import { useState, useEffect } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load transactions:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });

      setTransactions((prev) => prev.filter((tx) => tx._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-lg rounded-2xl border border-blue-200 animate-fade-in">
      <h4 className="text-2xl font-extrabold mb-6 text-center text-blue-700 tracking-tight">Transaction History</h4>

      {loading ? (
        <p className="text-center text-gray-500">Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p className="text-center text-gray-400">No transactions yet.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((tx) => {
            const formattedDate = new Date(tx.date).toLocaleDateString();

            return (
              <li
                key={tx._id}
                className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-xl p-4 hover:shadow-lg transition group"
              >
                <div>
                  <div className="font-bold text-blue-700 text-lg font-bold text-2xl">₹{tx.amount}</div>
                  <div className="text-sm text-black font-semibold">{tx.category}</div>
                  <div className="text-sm text-blue-900">[{tx.description}]</div>
                  <div className="text-xs text-blue-400">{formattedDate}</div>
                </div>
                <button
                  onClick={() => handleDelete(tx._id)}
                  className="text-red-500 hover:text-red-700 text-lg opacity-80 hover:scale-110 transition-transform duration-150"
                  title="Delete transaction"
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
