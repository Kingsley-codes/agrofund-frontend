import { FaPlusCircle, FaArrowUp } from "react-icons/fa";

export default function WalletActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="flex-1 min-w-[200px] h-14 bg-green-500 text-black font-bold rounded-xl flex items-center justify-center gap-2">
        <FaPlusCircle />
        Top Up Wallet
      </button>

      <button className="flex-1 min-w-[200px] h-14 border rounded-xl flex items-center justify-center gap-2 font-bold">
        <FaArrowUp />
        Withdraw Funds
      </button>
    </div>
  );
}
