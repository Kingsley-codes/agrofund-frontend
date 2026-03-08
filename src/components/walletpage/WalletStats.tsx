import { FaWallet, FaLeaf } from "react-icons/fa";
import { MdPayments } from "react-icons/md";

export default function WalletStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <FaWallet className="text-green-500 text-3xl mb-2" />
        <p className="text-gray-500">Total Balance</p>
        <p className="text-3xl font-bold">$12,450.00</p>
        <p className="text-green-500 text-sm font-bold">+12% vs last month</p>
      </div>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <FaLeaf className="text-blue-500 text-3xl mb-2" />
        <p className="text-gray-500">Active Investments</p>
        <p className="text-3xl font-bold">$8,200.00</p>
        <p className="text-sm text-gray-500">4 Active Cycles</p>
      </div>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <MdPayments className="text-orange-500 text-3xl mb-2" />
        <p className="text-gray-500">Withdrawable Earnings</p>
        <p className="text-3xl font-bold">$2,300.00</p>
        <p className="text-sm text-gray-500">Available now</p>
      </div>
    </div>
  );
}
