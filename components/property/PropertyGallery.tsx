"use client";

import Image from "next/image";

type PropertyGalleryProps = {
  images: string[];
  alt: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export default function PropertyGallery({
  images,
  alt,
  selectedIndex,
  onSelect,
}: PropertyGalleryProps) {
  return (
    <section className="relative">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={image}
              onClick={() => onSelect(index)}
              className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300 ${
                isActive
                  ? "opacity-100 scale-100 ring-1 ring-slate-900/15 shadow-md"
                  : "opacity-60 scale-[0.98] hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${alt} ${index + 1}`}
                width={220}
                height={140}
                className="h-[120px] w-[180px] object-cover md:h-[130px] md:w-[210px]"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
