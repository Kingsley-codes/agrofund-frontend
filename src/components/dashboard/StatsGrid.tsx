import StatCard from "./StatCard";
import {
  FiDollarSign,
  FiTrendingUp,
  FiCalendar,
  FiLayers,
} from "react-icons/fi";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Total Invested"
        value="$12,450"
        badge="+12%"
        icon={FiDollarSign}
      />

      <StatCard
        title="Active Projects"
        value="4"
        icon={FiLayers}
      />

      <StatCard
        title="Total ROI Earned"
        value="$3,200"
        badge="+5%"
        icon={FiTrendingUp}
      />

      <StatCard
        title="Next Payout"
        value="Oct 24, 2023"
        icon={FiCalendar}
      />
    </div>
  );
}