import MobileHeader from "@/components/walletpage/MobileHeader";
import TransactionTable from "@/components/walletpage/TransactionTable";
import WalletActions from "@/components/walletpage/WalletActions";
import WalletHeader from "@/components/walletpage/WalletHeader";
import WalletStats from "@/components/walletpage/WalletStats";

export default function WalletPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f6f8f6] font-[Manrope]">
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <MobileHeader />

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            <WalletHeader />

            <WalletStats />

            <WalletActions />

            <TransactionTable />
          </div>
        </div>
      </main>
    </div>
  );
}
