"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";

import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutClient />
    </Suspense>
  );
}