import { UserInvestment } from "@/app/dashboard/investments/page";
import InvestmentRow from "./InvestmentRow";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=200&q=80";

// Safely read the first produce image, falling back gracefully
function getProduceImage(inv: UserInvestment): string {
  return inv.produce?.image1?.url ?? FALLBACK_IMAGE;
}

function getStatusLabel(status: string): string {
  if (status === "ongoing") return "Growing";
  if (status === "completed") return "Sold";
  if (status === "pending") return "Pending";
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function getStageProgress(stage: string): number {
  const stages: Record<string, number> = {
    "pre-harvest": 35,
    growing: 60,
    harvest: 85,
    completed: 100,
  };
  return stages[stage] ?? 30;
}

interface InvestmentTableProps {
  investments: UserInvestment[];
}

export default function InvestmentTable({ investments }: InvestmentTableProps) {
  return (
    <div className="w-full rounded-xl border overflow-hidden border-[#d5e7cf] bg-white shadow-sm">
      {/* ── Desktop table ── */}
      <table className="w-full text-left hidden lg:table">
        <thead className="bg-gray-50 border-b border-[#d5e7cf]">
          <tr className="text-xs uppercase text-gray-500">
            <th className="px-6 py-4">Asset</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Invested</th>
            <th className="px-6 py-4">Current Stage</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">ROI</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#d5e7cf]">
          {investments.map((inv) => (
            <InvestmentRow
              key={inv._id}
              id={inv._id}
              image={getProduceImage(inv)}
              name={inv.title}
              farm={`${inv.units} unit${inv.units !== 1 ? "s" : ""} · ${inv.duration} months`}
              invested={`₦${inv.totalPrice.toLocaleString()}`}
              progress={getStageProgress(inv.stage)}
              status={getStatusLabel(inv.status)}
              roi={`+${inv.ROI}%`}
            />
          ))}
        </tbody>
      </table>

      {/* ── Mobile cards ── */}
      <div className="lg:hidden divide-y divide-[#d5e7cf]">
        {investments.map((inv) => (
          <InvestmentRow
            key={inv._id}
            id={inv._id}
            image={getProduceImage(inv)}
            name={inv.title}
            farm={`${inv.units} unit${inv.units !== 1 ? "s" : ""} · ${inv.duration} months`}
            invested={`₦${inv.totalPrice.toLocaleString()}`}
            progress={getStageProgress(inv.stage)}
            status={getStatusLabel(inv.status)}
            roi={`+${inv.ROI}%`}
            mobileCard
          />
        ))}
      </div>
    </div>
  );
}
