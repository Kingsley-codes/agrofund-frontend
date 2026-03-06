import Sidebar from "@/components/dashboard/Sidebar";
import TopMobileHeader from "@/components/dashboard/TopMobileHeader";
import StatsGrid from "@/components/dashboard/StatsGrid";
import YieldChart from "@/components/dashboard/YieldChart";
import ActiveInvestments from "@/components/dashboard/ActiveInvestments";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopMobileHeader />

        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:px-12 pb-20">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Welcome back, Alex 👋
              </h2>
              <p className="text-secondary-text font-medium">
                Here is an overview of your agricultural portfolio.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-bold">
                Report
              </button>

              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white text-sm font-bold">
                Deposit
              </button>
            </div>
          </div>

          <StatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <YieldChart />
              <ActiveInvestments />
            </div>

            {/* Right column – you can extract later */}
            <div />
          </div>
        </div>
      </main>
    </div>
  );
}
