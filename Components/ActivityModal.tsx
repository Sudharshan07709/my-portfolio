"use client";

import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description: string;
}

export default function ActivityModal({
  isOpen,
  onClose,
  title,
  images,
  description,
}: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-6 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg object-contain w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
