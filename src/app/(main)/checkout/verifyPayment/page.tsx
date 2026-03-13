import { Suspense } from "react";
import VerifyPaymentContent from "./VerifyPaymentContent";

function LoadingState() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-gray-500">Loading payment verification…</p>
      </div>
    </div>
  );
}

export default function VerifyPaymentPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <VerifyPaymentContent />
    </Suspense>
  );
}
