"use client";


import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Breadcrumbs from "@/components/checkout/Breadcrumbs";
import BillingInformation from "@/components/checkout/BillingInformation";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import TrustBadges from "@/components/checkout/TrustBadges";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const produceId = searchParams.get("produceId");
  const unitsParam = searchParams.get("units");

  const units = Number(unitsParam || 1);

  const [produce, setProduce] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!produceId) return;

    const fetchProduce = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/produce/${produceId}`,
      );

      const data = await res.json();
      setProduce(data.data || data);
      setLoading(false);
    };

    fetchProduce();
  }, [produceId]);

  if (!produceId || loading) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background-light text-[#111b0d] font-display">
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs produceId={produceId} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <BillingInformation />
            <PaymentMethod />
            <TrustBadges />
          </div>

          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <OrderSummary produce={produce} units={units} />
          </div>
        </div>
      </main>
    </div>
  );
}