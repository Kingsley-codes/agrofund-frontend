import {
  MdGroup,
  MdAttachMoney,
  MdHourglassEmpty,
  MdBlock,
  MdTrendingUp,
} from "react-icons/md";

const stats = [
  {
    label: "Total Users",
    value: "1,240",
    icon: MdGroup,
    iconBg: "bg-[#eaf3e7]",
    iconColor: "text-[#5e9a4c]",
    footer: (
      <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
        <MdTrendingUp className="text-base" /> +12% this month
      </p>
    ),
  },
  {
    label: "Active Investors",
    value: "850",
    icon: MdAttachMoney,
    iconBg: "bg-[#eaf3e7]",
    iconColor: "text-[#5e9a4c]",
    footer: (
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
        <div
          className="bg-[#46ec13] h-1.5 rounded-full"
          style={{ width: "70%" }}
        />
      </div>
    ),
  },
  {
    label: "Top Investor",
    value: "John Doe",
    icon: MdHourglassEmpty,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    footer: (
      <p className="text-xs text-orange-600 font-medium mt-1">
        Requires attention
      </p>
    ),
  },
  {
    label: "Deactivated",
    value: "45",
    icon: MdBlock,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    footer: (
      <p className="text-xs text-[#5e9a4c] font-medium mt-1">Since launch</p>
    ),
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map(({ label, value, icon: Icon, iconBg, iconColor, footer }) => (
        <div
          key={label}
          className="flex flex-col gap-1 rounded-xl p-5 bg-white border border-[#d5e7cf] shadow-sm"
        >
          <div className="flex justify-between items-start">
            <p className="text-[#5e9a4c] text-sm font-medium">{label}</p>
            <span className={`${iconBg} ${iconColor} p-1.5 rounded-lg`}>
              <Icon className="text-xl" />
            </span>
          </div>
          <p className="text-[#111b0d] text-3xl font-bold tracking-tight mt-2">
            {value}
          </p>
          {footer}
        </div>
      ))}
    </div>
  );
}
