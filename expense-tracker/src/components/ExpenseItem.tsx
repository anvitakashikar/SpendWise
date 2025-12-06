import type { Expense } from "../types";

type Props = {
  expense: Expense;
  onDelete: (id: number) => void;
};

export default function ExpenseItem({ expense, onDelete }: Props) {
  return (
    <li className="item">
      <div>
        <strong>{expense.title}</strong>
        <p className={`category ${expense.category.toLowerCase()}`}>
  {expense.category}
</p>

      </div>

      <span>₹{expense.amount}</span>

      <button onClick={() => onDelete(expense.id)}>❌</button>
    </li>
  );
}
