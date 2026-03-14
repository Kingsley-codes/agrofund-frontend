import { MdPayments, MdWorkspacePremium, MdArrowUpward, MdTrendingUp } from "react-icons/md";

export default function SummaryBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Total Active Investments */}
      <div className="bg-white border border-primary/10 p-6 rounded-xl flex items-center justify-between shadow-sm">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Total Active Investments
          </p>
          <h3 className="text-3xl font-bold mt-1 text-slate-900">$1,240,500.00</h3>
          <div className="flex items-center gap-1 mt-2 text-primary font-bold text-sm">
            <MdArrowUpward size={14} />
            <span>12.5% increase this month</span>
          </div>
        </div>
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <MdPayments size={36} />
        </div>
      </div>

      {/* Most Popular Project */}
      <div className="bg-white border border-primary/10 p-6 rounded-xl flex items-center justify-between shadow-sm">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Most Popular Project
          </p>
          <h3 className="text-3xl font-bold mt-1 text-slate-900">Broiler Phase 2</h3>
          <div className="flex items-center gap-1 mt-2 text-primary font-bold text-sm">
            <MdTrendingUp size={14} />
            <span>428 Active Investors</span>
          </div>
        </div>
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <MdWorkspacePremium size={36} />
        </div>
      </div>
    </div>
  );
}
