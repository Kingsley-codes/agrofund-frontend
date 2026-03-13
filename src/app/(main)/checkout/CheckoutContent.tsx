"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Breadcrumbs from "@/components/checkout/Breadcrumbs";
import BillingInformation from "@/components/checkout/BillingInformation";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import TrustBadges from "@/components/checkout/TrustBadges";
import OrderSummary from "@/components/checkout/OrderSummary";

type Produce = {
  _id: string;
  name: string;
  title: string;
  price: number;
  image1: { url: string; publicId: string };
  farm?: string;
  description?: string;
};

type UserProfile = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
};

type BillingData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

export default function CheckoutContent() {
  const searchParams = useSearchParams();
  const produceId = searchParams.get("produceId");
  const units = Number(searchParams.get("units") || 1);

  const [produce, setProduce] = useState<Produce | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const [billingData, setBillingData] = useState<BillingData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "bank" | "wallet"
  >("card");
  const [loading, setLoading] = useState(true);

  // Fetch produce
  useEffect(() => {
    if (!produceId) return;
    const fetchProduce = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produce/${produceId}`,
        );
        if (!res.ok) throw new Error("Failed to fetch produce");
        const data = await res.json();
        setProduce(data.produce);
      } catch (err) {
        console.error("Produce fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduce();
  }, [produceId]);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching user profile...");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`,
          {
            credentials: "include", // sends auth cookie/token
          },
        );
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();

        const u: UserProfile = data.data.user;
        setUser(u);
        setWalletBalance(data.data.wallet ?? null);

        // Pre-populate billing fields
        setBillingData({
          firstName: u.firstName ?? "",
          lastName: u.lastName ?? "",
          email: u.email ?? "",
          address: u.address ?? "",
        });
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!produceId || loading) return null;

  if (!produce) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Failed to load checkout data.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light text-[#111b0d] font-display">
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs produceId={produceId} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <BillingInformation
              billingData={billingData}
              onChange={setBillingData}
            />
            <PaymentMethod
              method={paymentMethod}
              onMethodChange={setPaymentMethod}
              walletBalance={walletBalance}
            />
            <TrustBadges />
          </div>

          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <OrderSummary
              produce={produce}
              units={units}
              billingData={billingData}
              paymentMethod={paymentMethod}
              userId={user?._id}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
