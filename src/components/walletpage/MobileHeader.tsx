import { FaBars } from "react-icons/fa";

export default function MobileHeader() {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-green-500 rounded-full"></div>
        <span className="font-bold text-lg">Agrofund Hub</span>
      </div>

      <FaBars />
    </div>
  );
}
