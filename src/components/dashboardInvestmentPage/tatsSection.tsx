import { FaWallet } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-6 rounded-xl bg-white border shadow-sm">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Total Invested</p>
          <FaWallet />
        </div>

        <p className="text-3xl text-gray-800 font-bold">$12,500</p>

        <p className="text-green-500 text-sm font-bold">+12% vs last month</p>
      </div>

      <div className="p-6 rounded-xl bg-white border shadow-sm">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Projected ROI</p>
        </div>

        <p className="text-3xl text-gray-800 font-bold">+18%</p>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
          <div className="bg-green-500 h-2 rounded-full w-[78%]" />
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white border shadow-sm">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Active Cycles</p>
        </div>

        <p className="text-3xl text-gray-800 font-bold">4</p>

        <p className="text-sm text-gray-500">Next harvest in 12 days</p>
      </div>
    </div>
  );
}
