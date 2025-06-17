import React from "react";

interface ThumbnailBarProps {
  images: string[];
  selected: number;
  onSelect: (index: number) => void;
  isHovered: boolean;
  prefix: string;
}

export const ThumbnailBar: React.FC<ThumbnailBarProps> = ({
  images,
  selected,
  onSelect,
  isHovered,
  prefix,
}) => {
  return (
    <div
      className={`flex-[0.1] md:absolute md:bottom-0 md:left-0 md:right-0 md:transform md:transition-transform md:duration-300 bg-gray-100 flex items-center justify-center px-6 py-4 min-h-[120px] ${
        isHovered ? "md:translate-y-0" : "md:translate-y-full"
      }`}
    >
      <div className="w-full md:w-full mx-auto">
        <div className="flex gap-6 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-2">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-0 ${
                selected === idx
                  ? "border-transparent scale-105 shadow-lg"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              style={{ minWidth: 80, minHeight: 80 }}
            >
              <img
                src={`${prefix}${src}`}
                alt={`gallery-thumb-${idx}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
