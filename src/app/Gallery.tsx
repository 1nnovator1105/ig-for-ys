"use client";
import React, { useState } from "react";

const PREFIX = "http://d3vjsxcgl1ot8s.cloudfront.net/";

const images = [
  "IMG_0011.JPG",
  "IMG_0031.JPG",
  "IMG_0065.JPG",
  "IMG_0069.JPG",
  "IMG_0091.JPG",
  "IMG_0094.JPG",
  "IMG_0169.JPG",
  "IMG_0178.JPG",
  "IMG_0186.JPG",
  "IMG_0219.JPG",
  "IMG_0327.JPG",
  "IMG_0331.JPG",
  "IMG_0339.JPG",
  "IMG_0385.JPG",
  "IMG_0410.JPG",
  "IMG_0415.JPG",
  "IMG_0417.JPG",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="w-full h-screen flex flex-col bg-white overflow-hidden">
      {/* 상단 90%: 메인 이미지 */}
      <div className="flex-1 flex items-center justify-center h-[90vh] bg-black/90">
        <img
          src={`${PREFIX}${images[selected]}`}
          alt={`gallery-main-${selected}`}
          className="max-h-[90vh] max-w-full object-contain shadow-xl transition-all duration-300"
        />
      </div>
      {/* 하단 10%: 썸네일 슬라이드 */}
      <div className="h-[10vh] bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="flex gap-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-0 ${
                  selected === idx
                    ? "border-blue-500 scale-105 shadow"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                style={{ minWidth: 80, minHeight: 80 }}
              >
                <img
                  src={`${PREFIX}${src}`}
                  alt={`gallery-thumb-${idx}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
