import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbsProps {
  produceId?: string | null;
}

export default function Breadcrumbs({ produceId }: BreadcrumbsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
        <Link
          href={`/opportunities/${produceId}`}
          className="hover:text-primary transition"
        >
          Select Asset
        </Link>

        <FiChevronRight />

        <Link href="/checkout/review" className="hover:text-primary transition">
          Review Details
        </Link>

        <FiChevronRight />

        {/* current page – not clickable */}
        <span className="font-bold text-primary">Payment</span>

        <FiChevronRight />

        <Link
          href="/checkout/confirmation"
          className="text-gray-400 hover:text-primary transition"
        >
          Confirmation
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Secure Checkout
        </h1>
        <p className="text-gray-600">
          Complete your investment in the Cassava Plantation Cycle 2.
        </p>
      </div>
    </div>
  );
}
