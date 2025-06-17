"use client";
import React, { useState, useRef, useEffect } from "react";
import { MainImage } from "@/components/Gallery/MainImage";
import { ThumbnailBar } from "@/components/Gallery/ThumbnailBar";

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
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsHovered(true);
    startHoverTimer();
  };

  const handleMouseMove = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsHovered(true);
    startHoverTimer();
  };

  const startHoverTimer = () => {
    hoverTimerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  const handleMouseLeave = () => {
    // 타이머는 그대로 유지
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-full min-h-screen flex flex-col bg-white overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MainImage image={images[selected]} prefix={PREFIX} />
      <ThumbnailBar
        images={images}
        selected={selected}
        onSelect={setSelected}
        isHovered={isHovered}
        prefix={PREFIX}
      />
    </div>
  );
}
