import {
  FiGrid,
  FiPieChart,
  FiShoppingBag,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-72 flex-col justify-between border-r border-gray-200 bg-card-light p-6">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg text-primary text-2xl">
            <GiPlantRoots />
          </div>

          <div>
            <h1 className="text-xl font-bold">Agrofund Hub</h1>
            <p className="text-xs text-secondary-text font-medium">
              Grow your wealth
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-black font-bold text-sm">
            <FiGrid />
            Dashboard
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 text-sm">
            <FiPieChart />
            Portfolio
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 text-sm">
            <FiShoppingBag />
            Marketplace
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 text-sm">
            <FiCreditCard />
            Wallet
          </a>
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 text-sm">
          <FiSettings />
          Settings
        </a>

        <div className="flex items-center gap-3 px-2 py-2 border-t pt-4">
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCntPHF6qMp6gyYvcm-Rgw8pNGMaPFbuwa2N3Lzela10HQjjDvmCw51KUm-MAoJggGZJ8uL9SmWgCk594O0Pdp0bxxpPTh_nZ-Mds7NzIc-0HjBWB9gs0NY_UIObfAep0LyCf0QyFzdaAn2OAPccUYfRqS9TbzWz4yZe40To0Ze8IFnGwLB2wbasTeUwW83YN6OO-irltA062GSvTFkXmKBm-8vfMWk6zGM1jR6bA2vQTaoJf16PtGSNo5L2M4XmlBo2L8B1NvUMHk)",
            }}
          />

          <div>
            <p className="text-sm font-bold">Alex M.</p>
            <p className="text-xs text-gray-500">Investor</p>
          </div>
        </div>
      </div>
    </aside>
  );
}