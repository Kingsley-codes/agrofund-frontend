import { FiMenu } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";

export default function TopMobileHeader() {
  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-card-light border-b">
      <div className="flex items-center gap-2 font-bold text-lg">
        <GiPlantRoots className="text-primary" />
        Agrofund
      </div>

      <button className="p-2 rounded-lg hover:bg-gray-100">
        <FiMenu />
      </button>
    </div>
  );
}