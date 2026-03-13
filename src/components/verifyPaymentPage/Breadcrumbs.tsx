import { FiArrowRight } from "react-icons/fi";

export default function Breadcrumbs() {
  return (
    <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
      <span className="text-gray-400">Cart</span>
      <FiArrowRight size={10} />
      <span className="text-gray-400">Checkout</span>
      <FiArrowRight size={10} />
      <span className="font-semibold text-primary">Verify Payment</span>
    </nav>
  );
}
