import Breadcrumbs from "@/components/checkout/Breadcrumbs";
import BillingInformation from "@/components/checkout/BillingInformation";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import TrustBadges from "@/components/checkout/TrustBadges";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light text-[#111b0d] font-display">
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <BillingInformation />
            <PaymentMethod />
            <TrustBadges />
          </div>

          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
