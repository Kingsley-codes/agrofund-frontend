import { FaWallet } from "react-icons/fa";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Invested */}
      <div className="flex flex-col gap-1 rounded-xl p-5 bg-white border border-[#d5e7cf] shadow-sm">
        <div className="flex justify-between items-start">
          <p className="text-[#5e9a4c] text-sm font-medium">Total Invested</p>
          <span className="bg-[#eaf3e7] text-[#5e9a4c] p-1.5 rounded-lg">
            <FaWallet className="text-xl" />
          </span>
        </div>
        <p className="text-[#111b0d] text-3xl font-bold tracking-tight mt-2">
          $12,500
        </p>
        <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
          +12% vs last month
        </p>
      </div>

      {/* Projected ROI */}
      <div className="flex flex-col gap-1 rounded-xl p-5 bg-white border border-[#d5e7cf] shadow-sm">
        <div className="flex justify-between items-start">
          <p className="text-[#5e9a4c] text-sm font-medium">Projected ROI</p>
        </div>
        <p className="text-[#111b0d] text-3xl font-bold tracking-tight mt-2">
          +18%
        </p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
          <div
            className="bg-[#46ec13] h-1.5 rounded-full"
            style={{ width: "78%" }}
          />
        </div>
      </div>

      {/* Active Cycles */}
      <div className="flex flex-col gap-1 rounded-xl p-5 bg-white border border-[#d5e7cf] shadow-sm">
        <div className="flex justify-between items-start">
          <p className="text-[#5e9a4c] text-sm font-medium">Active Cycles</p>
        </div>
        <p className="text-[#111b0d] text-3xl font-bold tracking-tight mt-2">
          4
        </p>
        <p className="text-xs text-[#5e9a4c] font-medium mt-1">
          Next harvest in 12 days
        </p>
      </div>
    </div>
  );
}
