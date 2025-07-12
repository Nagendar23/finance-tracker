import MonthlyChart from "@/components/MonthlyChart";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";

export default function Home(){
  return(
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4 mt-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Personal Finance Visualizer</h1>
      <TransactionForm/>
      <TransactionList/>
      <MonthlyChart/>
    </main>
  )
}