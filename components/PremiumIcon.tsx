"use client";

import React from "react";

interface PremiumIconProps {
  image3d: string;
  alt: string;
  className?: string;
  /** Controls the size variant of the icon container */
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: { container: "w-14 h-14", img: "w-10 h-10" },
  md: { container: "w-24 h-24", img: "w-20 h-20" },
  lg: { container: "w-32 h-32", img: "w-28 h-28" },
  xl: { container: "w-40 h-40", img: "w-36 h-36" },
};

/**
 * PremiumIcon — a reusable, transparent 3D icon component.
 *
 * - NO glass-card / bordered container — icon floats naturally
 * - Consistent drop-shadow + gold glow for grounding
 * - Smooth hover: scale + lift + glow intensify
 * - Responsive sizing via predefined size tokens
 */
export default function PremiumIcon({
  image3d,
  alt,
  className = "",
  size = "md",
}: PremiumIconProps) {
  const s = sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${s.container} transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image3d}
        alt={alt}
        className={`${s.img} object-contain select-none pointer-events-none`}
        style={{
          filter:
            "drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 25px rgba(255,200,0,0.25))",
        }}
        draggable={false}
      />
    </div>
  );
}
