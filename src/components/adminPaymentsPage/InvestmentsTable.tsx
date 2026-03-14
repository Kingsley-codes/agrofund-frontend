"use client";

import Image from "next/image";
import {
  MdSearch,
  MdFilterList,
  MdExpandMore,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import StatusBadge from "./StatusBadge";
import ProduceBadge from "./ProduceBadge";
import { investments } from "@/lib/investments";

export default function InvestmentsTable() {
  const formatAmount = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="bg-white border border-primary/10 rounded-xl shadow-sm overflow-hidden mb-6">
      {/* ── Filters & Search ── */}
      <div className="p-4 flex flex-col gap-3">
        {/* Search — full width on all sizes */}
        <div className="relative w-full">
          <MdSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            className="w-full pl-10 pr-4 py-2 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none"
            placeholder="Search investors or projects..."
            type="text"
          />
        </div>

        {/* Selects + More Filters — wrap on small screens */}
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-35">
            <select className="w-full appearance-none pl-4 pr-10 py-2 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary text-sm font-medium outline-none cursor-pointer">
              <option>Produce Type: All</option>
              <option>Crop</option>
              <option>Animal</option>
            </select>
            <MdExpandMore
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>

          <div className="relative flex-1 min-w-32.5">
            <select className="w-full appearance-none pl-4 pr-10 py-2 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary text-sm font-medium outline-none cursor-pointer">
              <option>Status: All</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
            <MdExpandMore
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>

          <button className="px-4 py-2 border border-primary/20 text-slate-600 rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium flex items-center gap-2 whitespace-nowrap">
            <MdFilterList size={16} />
            More Filters
          </button>
        </div>
      </div>

      {/* ── Desktop Table (md+) ── */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-background-light border-y border-primary/10">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Investor Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Produce
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Inv. Date
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5">
            {investments.map((investment) => (
              <tr
                key={investment.id}
                className="hover:bg-primary/5 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <Image
                        src={investment.investorImage}
                        alt={investment.investorName}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      {investment.investorName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {investment.projectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ProduceBadge type={investment.produceType} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                  {formatAmount(investment.amount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {investment.investmentDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <StatusBadge status={investment.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Card List (below md) ── */}
      <div className="md:hidden border-t border-primary/10 divide-y divide-primary/5">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="p-4 flex flex-col gap-3 hover:bg-primary/5 transition-colors"
          >
            {/* Row 1: Avatar + name + status */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <Image
                    src={investment.investorImage}
                    alt={investment.investorName}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {investment.investorName}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {investment.projectName}
                  </p>
                </div>
              </div>
              <StatusBadge status={investment.status} />
            </div>

            {/* Row 2: Produce + amount + date */}
            <div className="flex items-center justify-between text-sm">
              <ProduceBadge type={investment.produceType} />
              <span className="font-bold text-slate-900">
                {formatAmount(investment.amount)}
              </span>
              <span className="text-slate-400 text-xs">
                {investment.investmentDate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Pagination ── */}
      <div className="p-4 border-t border-primary/10 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500 whitespace-nowrap">
          <span className="hidden sm:inline">Showing 1 to 5 of </span>
          <span className="sm:hidden">1–5 / </span>
          428 investors
        </p>

        <div className="flex gap-1 items-center">
          <button className="p-2 border border-primary/20 rounded-lg hover:bg-primary/5 disabled:opacity-50 transition-colors touch-manipulation">
            <MdChevronLeft size={18} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`min-w-9 h-9 text-xs font-bold rounded-lg transition-colors touch-manipulation ${
                page === 1
                  ? "bg-primary text-slate-900"
                  : "hover:bg-primary/5 text-slate-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors touch-manipulation">
            <MdChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
