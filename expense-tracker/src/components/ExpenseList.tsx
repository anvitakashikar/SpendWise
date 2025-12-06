import type { Expense } from "../types";
import ExpenseItem from "./ExpenseItem";

type Props = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

export default function ExpenseList({ expenses, onDelete }: Props) {
  return (
    <ul className="list">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </ul>
  );
}
