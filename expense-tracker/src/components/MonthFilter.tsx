type Props = {
  selectedMonth: number;
  onChange: (month: number) => void;
};

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function MonthFilter({ selectedMonth, onChange }: Props) {
  return (
    <select
      className="month-select"
      value={selectedMonth}
      onChange={(e) => onChange(+e.target.value)}
    >
      {months.map((month, index) => (
        <option key={month} value={index}>
          {month}
        </option>
      ))}
    </select>
  );
}
