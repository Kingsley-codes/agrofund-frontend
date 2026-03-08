import { FaPlus } from "react-icons/fa";

export default function PageHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <h2 className="text-4xl font-extrabold">My Investments</h2>
        <p className="text-gray-500">Track your farm portfolio performance</p>
      </div>

      <button className="flex items-center gap-2 bg-green-500 text-black font-bold px-6 py-3 rounded-xl">
        <FaPlus />
        New Investment
      </button>
    </div>
  );
}
