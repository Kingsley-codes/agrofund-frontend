type Props = {
  image: string;
  name: string;
  farm: string;
  invested: string;
  progress: number;
  status: string;
  roi: string;
};

export default function InvestmentRow({
  image,
  name,
  farm,
  invested,
  progress,
  status,
  roi,
}: Props) {
  return (
    <tr className="hover:bg-gray-50 border-b">
      <td className="px-6 py-4">
        <div
          className="size-12 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </td>

      <td className="px-6 py-4">
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">{farm}</p>
        </div>
      </td>

      <td className="px-6 py-4">{invested}</td>

      <td className="px-6 py-4">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </td>

      <td className="px-6 py-4">{status}</td>

      <td className="px-6 py-4 text-green-500 font-bold">{roi}</td>

      <td className="px-6 py-4 text-right">
        <button className="px-4 py-2 text-sm font-bold border rounded-lg">
          Details
        </button>
      </td>
    </tr>
  );
}
