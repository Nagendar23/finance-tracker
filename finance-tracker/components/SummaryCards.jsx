"use client"
import { useState, useEffect } from "react"

export default function SummaryCards(){
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        fetch('/api/transactions')
        .then((res)=>res.json())
        .then(setTransactions);
    },[]);

    const total = transactions.reduce((sum,tx)=>sum + tx.amount, 0);
    const recent = transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0];


    return(
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
          <h4 className="font-extrabold text-blue-700 text-lg mb-2 tracking-tight">Total Expenses</h4>
          <p className="text-3xl font-bold text-blue-900">₹{total}</p>
        </div>
        <div className="bg-gradient-to-br from-green-100 via-blue-50 to-blue-200 border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
          <h4 className="font-extrabold text-green-700 text-lg mb-2 tracking-tight">Total Transactions</h4>
          <p className="text-3xl font-bold text-green-900">{transactions.length}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-100 via-blue-50 to-blue-200 border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
          <h4 className="font-extrabold text-yellow-700 text-lg mb-2 tracking-tight">Last Transaction</h4>
          <p className="text-base font-semibold text-blue-900">{recent ? recent.description : 'N/A'}</p>
          <span className="text-xs text-blue-400 mt-1">{recent ? new Date(recent.date).toLocaleDateString() : ''}</span>
        </div>
      </div>
    )
}