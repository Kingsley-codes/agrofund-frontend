"use client";

interface BusinessInfoProps {
  formData: {
    businessName: string;
    nin: string;
    businessType: string;
    primaryCrop: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function BusinessInfo({
  formData,
  onChange,
}: BusinessInfoProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#eaf3e7] dark:border-[#2a3d24]">
      <h2 className="text-gray-800 text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-6">
        Step 1: Business Details
      </h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            Business Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-500 focus:ring-primary focus:border-primary text-sm p-3"
            placeholder="e.g. Green Valley Farms"
            type="text"
            value={formData.businessName}
            onChange={(e) => onChange("businessName", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-white">
            National Identification Number (NIN)
          </label>
          <input
            className="w-full rounded-lg border border-gray-500 focus:ring-primary focus:border-primary text-sm p-3"
            placeholder="11-digit NIN"
            type="text"
            maxLength={11} // optional: enforce 11 digits
            value={formData.nin}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 11);
              onChange("nin", value);
            }}
          />
        </div>
      </div>
    </section>
  );
}
