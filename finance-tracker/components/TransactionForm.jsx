"use client";

import { useState } from "react";

export default function TransactionForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch('/api/transactions', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          description,
          date,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong");

      setAmount('');
      setDescription('');
      setDate('');
      setSuccess("Transaction added!");
    } catch (error) {
      console.error("Failed to submit transaction:", error);
      setSuccess("Failed to add transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-16 p-8 border border-blue-200 rounded-2xl shadow-lg bg-gradient-to-br from-white via-blue-50 to-blue-100 animate-fade-in"
    >
      <h4 className="text-2xl font-extrabold mb-6 text-center text-blue-700 tracking-tight">Add Transaction</h4>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-blue-900">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 placeholder:text-blue-400 transition"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-blue-900">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 transition"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-blue-900">Description</label>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 placeholder:text-blue-400 transition"
        />
      </div>

      {success && (
        <p className={`text-sm mb-4 ${success.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 shadow-md"
      >
        {loading ? "Submitting..." : "Add Transaction"}
      </button>
    </form>
  );
}
