"use client";

import InvestmentTable from "@/components/dashboardInvestmentPage/InvestmentTable";
import PageHeader from "@/components/dashboardInvestmentPage/PageHeader";
import StatsSection from "@/components/dashboardInvestmentPage/StatsSection";
import { useAuth } from "@/hooks/useAuth";

export default function InvestmentsPage() {
  const { loading } = useAuth({ allowedRoles: ["user"] });

  if (loading) {
    return (
      <div className="flex items-center bg-gray-100 justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="bg-[#f6f8f6] overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader />
        <StatsSection />
        <InvestmentTable />
      </div>
    </main>
  );
}
