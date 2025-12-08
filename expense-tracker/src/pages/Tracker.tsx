import { useEffect, useState } from "react";
import type{ Expense } from "../types";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Balance from "../components/Balance";
import MonthFilter from "../components/MonthFilter";

export default function Tracker() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  const [selectedMonth, setSelectedMonth] = useState(
    new Date().getMonth()
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const filteredExpenses = expenses.filter((exp) => {
    const expenseMonth = new Date(exp.date).getMonth();
    return expenseMonth === selectedMonth;
  });

  return (
    <div className="tracker-page">
      <div className="tracker-header">
        <h1>💰 Finance Tracker</h1>
        <MonthFilter
          selectedMonth={selectedMonth}
          onChange={setSelectedMonth}
        />
      </div>

      <div className="tracker-grid">
        {/* ✅ LEFT SIDE */}
        <div className="tracker-left">
          <Balance expenses={filteredExpenses} />
          <ExpenseForm onAdd={addExpense} />
        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="tracker-right">
          <h2>Transactions</h2>
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}
