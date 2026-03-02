import { IconType } from "react-icons";

interface Props {
  title: string;
  value: string;
  badge?: string;
  icon: IconType;
}

export default function StatCard({
  title,
  value,
  badge,
  icon: Icon,
}: Props) {
  return (
    <div className="bg-card-light p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-lg bg-[#eaf3e7] text-primary text-xl">
          <Icon />
        </div>

        {badge && (
          <span className="text-xs font-bold text-[#078821] bg-[#eaf3e7] px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}