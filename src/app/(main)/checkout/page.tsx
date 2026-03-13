import { Suspense } from "react";
import CheckoutContent from "./CheckoutContent";

function CheckoutLoading() {
  return (
    <div className="flex justify-center items-center py-20">
      <p className="text-sm text-gray-500">Loading checkout…</p>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
