import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumbs() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
        <span>Select Asset</span>
        <FiChevronRight />
        <span>Review Details</span>
        <FiChevronRight />
        <span className="font-bold text-primary">Payment</span>
        <FiChevronRight />
        <span className="text-gray-400">Confirmation</span>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Secure Checkout
        </h1>
        <p className="text-gray-600">
          Complete your investment in the Cassava Plantation Cycle 2.
        </p>
      </div>
    </div>
  );
}
