import React from "react";
import { LucideIcon } from "lucide-react";

interface PremiumIconProps {
  icon?: LucideIcon | React.ElementType;
  image3d?: string;
  className?: string;
  size?: number;
  colorClass?: string;
  glowColor?: string;
}

export default function PremiumIcon({ 
  icon: Icon, 
  image3d,
  className = "", 
  size = 24, 
  colorClass = "text-accent-400",
  glowColor = "rgba(245,158,11,0.5)" // default accent gold
}: PremiumIconProps) {
  return (
    <div className={`group relative inline-flex items-center justify-center p-3.5 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:border-white/20 ${className}`}>
      {/* Container Glow Layer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" 
        style={{ boxShadow: `0 0 20px ${glowColor}` }}
      />
      
      {/* Semi-3D Icon or Actual 3D Image */}
      {image3d ? (
        <img 
          src={image3d} 
          alt="3D Icon" 
          width={size} 
          height={size} 
          className="relative z-10 transition-transform duration-300 group-hover:scale-110 object-contain drop-shadow-xl"
          style={{ width: size, height: size }}
        />
      ) : Icon ? (
        <Icon 
          size={size} 
          strokeWidth={2.5}
          className={`${colorClass} relative z-10 transition-all duration-300`} 
          style={{ 
            fill: "currentColor", 
            fillOpacity: 0.25,
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        />
      ) : null}
    </div>
  );
}
