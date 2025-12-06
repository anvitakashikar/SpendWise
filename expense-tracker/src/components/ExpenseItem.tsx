import type { Expense } from "../types";

type Props = {
  expense: Expense;
  onDelete: (id: number) => void;
};

export default function ExpenseItem({ expense, onDelete }: Props) {
  return (
    <li className="item">
      <span>{expense.title}</span>
      <span>₹{expense.amount}</span>
      <button onClick={() => onDelete(expense.id)}>❌</button>
    </li>
  );
}
