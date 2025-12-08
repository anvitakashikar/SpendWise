import { useEffect, useState } from "react";
import type { Expense } from "../types";
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
    <div className="container">
      <h1>💰 Finance Tracker</h1>

      <MonthFilter
        selectedMonth={selectedMonth}
        onChange={setSelectedMonth}
      />

      <Balance expenses={filteredExpenses} />

      <ExpenseForm onAdd={addExpense} />

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
      />
    </div>
  );
}
