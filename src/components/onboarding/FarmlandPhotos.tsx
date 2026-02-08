"use client";

import { RiAddCircleLine, RiDeleteBinLine } from "react-icons/ri";

interface FarmlandPhotosProps {
  photos: File[];
  onAddPhoto: (file: File) => void;
  onRemovePhoto: (index: number) => void;
}

export default function FarmlandPhotos({
  photos,
  onAddPhoto,
  onRemovePhoto,
}: FarmlandPhotosProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onAddPhoto(e.target.files[0]);
    }
  };

  return (
    <section className="bg-white dark:bg-[#1a2e15] rounded-xl shadow-sm border border-[#eaf3e7] dark:border-[#2a3d24]">
      <h2 className="text-[#111b0d] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-6">
        Step 3: Farmland Pictures
      </h2>
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {photos.map((photo, index) => {
            const previewUrl = URL.createObjectURL(photo);

            return (
              <div
                key={index}
                className="aspect-square rounded-lg bg-cover bg-center border border-primary relative group"
                style={{ backgroundImage: `url(${previewUrl})` }}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
                  <button
                    onClick={() => onRemovePhoto(index)}
                    className="text-white hover:text-red-400"
                  >
                    <RiDeleteBinLine className="text-2xl" />
                  </button>
                </div>
              </div>
            );
          })}

          <label className="aspect-square rounded-lg border-2 border-dashed border-[#d5e7cf] flex flex-col items-center justify-center hover:bg-primary/10 cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <RiAddCircleLine className="text-2xl text-[#5e9a4c]" />
            <span className="text-[10px] font-bold mt-1">Add More</span>
          </label>
        </div>
        <p className="text-xs text-[#5e9a4c]">
          Upload current photos of your farmland to help our team verify your
          production capacity.
        </p>
      </div>
    </section>
  );
}
