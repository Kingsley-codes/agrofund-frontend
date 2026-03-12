type Props = {
  image: string;
  name: string;
  farm: string;
  invested: string;
  progress: number;
  status: string;
  roi: string;
};

type StatusBadgeProps = {
  status: string;
};

function StatusBadge({ status }: StatusBadgeProps) {
  const colors: Record<string, string> = {
    Growing: "bg-green-100 text-green-700",
    Sold: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
        colors[status] ?? "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

type ProgressBarProps = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 h-2 rounded-full">
      <div
        className="bg-green-500 h-2 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

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
    <>
      {/* ── Mobile card (hidden on md+) ── */}
      <tr className="lg:hidden border-b border-gray-300 last:border-b-0">
        <td colSpan={7} className="p-4">
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 size-14 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-bold text-gray-800 truncate">{name}</p>
                  <p className="text-xs text-gray-500 truncate">{farm}</p>
                </div>
                <span className="shrink-0 text-sm font-bold text-green-500">
                  {roi}
                </span>
              </div>
              <div className="mt-2">
                <ProgressBar progress={progress} />
              </div>
              <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <StatusBadge status={status} />
                  <span className="text-xs text-gray-600 font-medium">
                    {invested}
                  </span>
                </div>
                <button className="px-3 py-1.5 text-gray-700 text-xs font-bold border rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>

      {/* ── Desktop row (hidden below md) ── */}
      <tr className="hidden lg:table-row hover:bg-gray-50 last:border-b-0 border-b">
        <td className="px-6 py-4">
          <div
            className="size-12 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </td>
        <td className="px-6 py-4">
          <p className="font-bold text-gray-700">{name}</p>
          <p className="text-sm text-gray-500">{farm}</p>
        </td>
        <td className="px-6 py-4 text-gray-700">{invested}</td>
        <td className="px-6 py-4">
          <div className="w-36">
            <ProgressBar progress={progress} />
          </div>
        </td>
        <td className="px-6 py-4">
          <StatusBadge status={status} />
        </td>
        <td className="px-6 py-4 text-green-500 font-bold">{roi}</td>
        <td className="px-6 py-4 text-right">
          <button className="px-4 py-2 text-gray-700 text-sm font-bold border rounded-lg hover:bg-gray-50 transition-colors">
            Details
          </button>
        </td>
      </tr>
    </>
  );
}
