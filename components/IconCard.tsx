"use client";

import React from "react";
import { motion } from "framer-motion";
import PremiumIcon from "./PremiumIcon";

interface IconCardProps {
  /** Path to the 3D icon image */
  image3d: string;
  /** Alt text for the icon */
  alt: string;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Optional badge text (e.g. "Earn Gold") */
  badge?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Icon size variant */
  iconSize?: "sm" | "md" | "lg" | "xl";
  /** Custom hover border color class */
  hoverBorder?: string;
  /** Custom hover shadow class */
  hoverShadow?: string;
}

/**
 * IconCard — premium card with dominant 3D icon, title, and description.
 *
 * Layout:
 *   [   large dominant icon   ]
 *   [        title            ]
 *   [      description        ]
 *
 * The icon occupies ~60-70% of the card space as the primary visual focus.
 */
export default function IconCard({
  image3d,
  alt,
  title,
  description,
  badge,
  delay = 0,
  iconSize = "lg",
  hoverBorder = "hover:border-amber-500/40",
  hoverShadow = "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
}: IconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-gold rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

      <div
        className={`relative flex flex-col items-center text-center p-8 pt-10 pb-8 glass-card rounded-3xl border border-white/5 ${hoverBorder} ${hoverShadow} transition-all duration-300 h-full`}
      >
        {/* Badge */}
        {badge && (
          <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-accent-500/10 px-2.5 py-1 text-[10px] font-semibold text-accent-400 ring-1 ring-inset ring-accent-500/20 uppercase tracking-wider">
            {badge}
          </span>
        )}

        {/* Dominant Icon */}
        <PremiumIcon image3d={image3d} alt={alt} size={iconSize} />

        {/* Title */}
        <h3 className="mt-5 text-lg font-bold text-white leading-tight group-hover:text-primary-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
