import { useState } from "react";
import type { Expense } from "../types";

type Props = {
  onAdd: (expense: Expense) => void;
};

// ✅ Category Options
const categories = ["Food", "Travel", "Shopping", "Rent", "Bills", "Other"];

export default function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !amount.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount: +amount,
      category,
    };

    onAdd(newExpense);

    // ✅ Reset after submit
    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      {/* ✅ Title Input */}
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* ✅ Amount Input */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* ✅ Styled Category Dropdown */}
      <div className="select-wrapper">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Submit Button */}
      <button type="submit">Add Expense</button>
    </form>
  );
}
