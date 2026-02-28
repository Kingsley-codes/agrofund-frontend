// app/page.tsx
"use client";

import Sidebar from "@/components/adminDashboard/Sidebar";
import Header from "@/components/adminDashboard/Header";
import StatsCards from "@/components/adminDashboard/StatsCards";
import InvestmentChart from "@/components/adminDashboard/InvestmentChart";
import PortfolioMix from "@/components/adminDashboard/PortfolioMix";
import RecentTransactions from "@/components/adminDashboard/RecentTransactions";
import { useAuth } from "@/hooks/useAuth";


export default function Home() {
  const { loading } = useAuth({ allowedRoles: ["admin", "super-admin"]});

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      <Sidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
          <StatsCards />
          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <InvestmentChart />
            <PortfolioMix />
          </div>
          <RecentTransactions />
          <div className="pb-10"></div> {/* Bottom spacer */}
        </div>
      </main>
    </div>
  );
}
