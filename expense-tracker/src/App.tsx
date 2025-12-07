import { useEffect, useState } from "react";
import type { Expense } from "./types";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Balance from "./components/Balance";
import "./index.css";

export default function App() {
  // ✅ Load from localStorage safely (NO useEffect needed)
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  // ✅ Only syncing outward is correct useEffect usage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="container">
      <h1>💰 Finance Tracker</h1>

      <Balance expenses={expenses} />

      <ExpenseForm onAdd={addExpense} />

      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
