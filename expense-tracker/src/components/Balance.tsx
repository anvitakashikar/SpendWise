import type { Expense } from "../types";

type Props = {
  expenses: Expense[];
};

export default function Balance({ expenses }: Props) {
  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div className="balance">
      <h2>Total Balance</h2>
      <h1>₹{total}</h1>
    </div>
  );
}
