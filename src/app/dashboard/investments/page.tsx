import InvestmentTable from "@/components/dashboardInvestmentPage/InvestmentTable";
import PageHeader from "@/components/dashboardInvestmentPage/PageHeader";
import StatsSection from "@/components/dashboardInvestmentPage/tatsSection";

export default function InvestmentsPage() {
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
