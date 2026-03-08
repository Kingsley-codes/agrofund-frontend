type Props = {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  status: string;
  amount: string;
  positive?: boolean;
};

export default function TransactionRow({
  title,
  subtitle,
  date,
  time,
  status,
  amount,
  positive,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </td>

      <td className="p-4">
        <p className="text-sm">{date}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </td>

      <td className="p-4">
        <span className="text-sm">{status}</span>
      </td>

      <td
        className={`p-4 text-right font-bold ${positive ? "text-green-600" : ""}`}
      >
        {amount}
      </td>
    </tr>
  );
}
