"use client";

import { RiMapLine, RiFileTextLine } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi2";

interface DocumentUploadProps {
  onFileUpload: (type: string, file: File) => void;
}

export default function DocumentUpload({ onFileUpload }: DocumentUploadProps) {
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(type, e.target.files[0]);
    }
  };

  const documents = [
    {
      type: "nin",
      label: "NIN/Identity Card",
      icon: HiIdentification,
      accept: ".pdf,.jpg,.jpeg,.png",
    },
    {
      type: "land",
      label: "Land Titles/Lease",
      icon: RiMapLine,
      accept: ".pdf,.jpg,.jpeg,.png",
    },
    {
      type: "business",
      label: "Business Registration",
      icon: RiFileTextLine,
      accept: ".pdf,.jpg,.jpeg,.png",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#1a2e15] rounded-xl shadow-sm border border-[#eaf3e7] dark:border-[#2a3d24]">
      <h2 className="text-[#111b0d] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-6">
        Step 2: Document Upload
      </h2>
      <p className="px-6 text-sm text-[#5e9a4c] mb-4">
        Please upload scanned copies of your legal documents.
      </p>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {documents.map((doc) => {
          const Icon = doc.icon;
          return (
            <label
              key={doc.type}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[#d5e7cf] dark:border-[#2a3d24] rounded-xl p-6 hover:border-primary transition-colors cursor-pointer bg-background-light/50 dark:bg-background-dark/50"
            >
              <input
                type="file"
                className="hidden"
                accept={doc.accept}
                onChange={(e) => handleFileChange(e, doc.type)}
              />
              <Icon className="text-4xl text-[#5e9a4c] mb-2" />
              <p className="text-xs font-bold text-center">{doc.label}</p>
              <p className="text-[10px] text-gray-500 mt-1">
                PDF, JPG up to 5MB
              </p>
            </label>
          );
        })}
      </div>
    </section>
  );
}
