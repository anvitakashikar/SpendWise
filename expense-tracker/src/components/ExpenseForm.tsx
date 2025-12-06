import { useState } from "react";
import type { Expense } from "../types";

type Props = {
  onAdd: (expense: Expense) => void;
};

export default function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount: +amount,
    };

    onAdd(newExpense);
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add Expense</button>
    </form>
  );
}
