"use client";

import { RiAccountBoxLine } from "react-icons/ri";
import { Guarantor } from "@/lib/index";

interface GuarantorsProps {
  guarantors: Guarantor[];
  onUpdate: (
    index: number,
    field: keyof Guarantor,
    value: string | File,
  ) => void;
}

export default function Guarantors({ guarantors, onUpdate }: GuarantorsProps) {
  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      onUpdate(index, "photo", e.target.files[0]);
    }
  };

  return (
    <section className="bg-white dark:bg-[#1a2e15] rounded-xl shadow-sm border border-[#eaf3e7] dark:border-[#2a3d24]">
      <h2 className="text-[#111b0d] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-6">
        Step 4: Guarantors
      </h2>
      <div className="p-6 space-y-8">
        {guarantors.map((guarantor, index) => (
          <div
            key={guarantor.id}
            className={`border-b border-[#eaf3e7] dark:border-[#2a3d24] pb-6 ${
              index === guarantors.length - 1 ? "border-b-0 pb-0" : ""
            }`}
          >
            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                {index + 1}
              </span>
              {index === 0 ? "First Guarantor" : "Second Guarantor"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  className="w-full rounded-lg border-[#eaf3e7] dark:border-[#2a3d24] dark:bg-background-dark focus:ring-primary focus:border-primary text-sm p-3"
                  placeholder="Full Name"
                  type="text"
                  value={guarantor.name}
                  onChange={(e) => onUpdate(index, "name", e.target.value)}
                />
                <input
                  className="w-full rounded-lg border-[#eaf3e7] dark:border-[#2a3d24] dark:bg-background-dark focus:ring-primary focus:border-primary text-sm p-3"
                  placeholder="Phone Number"
                  type="tel"
                  value={guarantor.phone}
                  onChange={(e) => onUpdate(index, "phone", e.target.value)}
                />
                <input
                  className="w-full rounded-lg border-[#eaf3e7] dark:border-[#2a3d24] dark:bg-background-dark focus:ring-primary focus:border-primary text-sm p-3"
                  placeholder="NIN Number"
                  type="text"
                  value={guarantor.nin}
                  onChange={(e) => onUpdate(index, "nin", e.target.value)}
                />
              </div>
              <label className="flex items-center justify-center border-2 border-dashed border-[#d5e7cf] dark:border-[#2a3d24] rounded-xl p-4 bg-background-light/30 h-full cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e)}
                />
                <div className="text-center">
                  <RiAccountBoxLine className="text-3xl text-[#5e9a4c] mx-auto" />
                  <p className="text-xs font-bold">Upload Photo</p>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
