"use client";

import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, src, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-4 rounded-lg max-w-3xl w-full text-center"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <h2 className="text-white text-xl mb-3">{title}</h2>

        <Image
          src={src}
          alt={title}
          width={900}
          height={700}
          className="mx-auto rounded-lg"
        />

        <button
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
