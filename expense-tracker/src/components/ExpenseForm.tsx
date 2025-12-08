import { useState } from "react";
import type { Expense } from "../types";

type Props = {
  onAdd: (expense: Expense) => void;
};

const categories = ["Food", "Travel", "Shopping", "Rent", "Bills", "Other"];

export default function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState<"income" | "expense">("expense");

  // ✅ TODAY AS DEFAULT DATE
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !amount.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount: +amount,
      category,
      type,
      date, // ✅ saved
    };

    onAdd(newExpense);

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("expense");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* ✅ Date Picker */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* ✅ Type Toggle */}
      <div className="type-toggle">
        <button
          type="button"
          className={type === "expense" ? "active expense-btn" : "expense-btn"}
          onClick={() => setType("expense")}
        >
          Expense
        </button>

        <button
          type="button"
          className={type === "income" ? "active income-btn" : "income-btn"}
          onClick={() => setType("income")}
        >
          Income
        </button>
      </div>

      {/* ✅ Category */}
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

      <button type="submit">Add {type}</button>
    </form>
  );
}
