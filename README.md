# 💰 Personal Finance Visualizer

A modern web application to track and visualize personal finances. Built using **Next.js**, **React**, **MongoDB**, **TailwindCSS**, **Recharts**, and **shadcn/ui**.

## 🌟 Features

### ✅ Stage 1: Basic Transaction Tracking
- Add, edit, and delete transactions
- Fields: `Amount`, `Description`, `Date`
- Monthly expenses bar chart
- Transaction list view
- Basic form validation
- Responsive design with TailwindCSS

### ✅ Stage 2: Categories and Insights
- Predefined categories for transactions
- Category-wise **Pie Chart** using Recharts
- Dashboard **Summary Cards**:
  - Total expenses
  - Category-wise breakdown
  - Most recent transactions

---

## 📁 Project Structure

finance-tracker/
├── app/
│ ├── page.js # Main dashboard
│ └── api/
│ └── transactions/
│ ├── route.js # GET and POST
│ └── [id]/
│ └── route.js # PUT and DELETE
│
├── components/
│ ├── TransactionForm.jsx # Add/Edit transaction form
│ ├── TransactionList.jsx # List of all transactions
│ ├── MonthlyChart.jsx # Monthly bar chart
│ ├── CategoryChart.jsx # Pie chart by category
│ └── SummaryCards.jsx # Dashboard insights
│
├── models/
│ └── transaction.js # Mongoose schema
│
├── lib/
│ └── db.js # MongoDB connection
│
├── styles/
│ └── globals.css
├── .env.local # MongoDB URI
├── next.config.js
├── tailwind.config.js
└── package.json
