import React from "react";

interface MainImageProps {
  image: string;
  prefix: string;
}

export const MainImage: React.FC<MainImageProps> = ({ image, prefix }) => {
  return (
    <div className="flex-[0.9] md:flex-1 flex items-center justify-center bg-black/90 min-h-0">
      <img
        src={`${prefix}${image}`}
        alt="gallery-main"
        className="max-h-full max-w-full object-contain shadow-xl transition-all duration-300"
      />
    </div>
  );
};
