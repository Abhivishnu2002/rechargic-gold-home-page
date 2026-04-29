"use client";

import { motion } from "framer-motion";
import PremiumIcon from "./PremiumIcon";

export default function Trust() {
  const badges = [
    {
      image3d: "/icons/smartphone-3d.png",
      title: "256-bit",
      desc: "Encryption",
    },
    {
      image3d: "/icons/creditcard-3d.png",
      title: "100%",
      desc: "Secure Payments",
    },
    {
      image3d: "/icons/goldbars-3d.png",
      title: "24K Pure",
      desc: "Digital Gold",
    },
    {
      image3d: "/icons/lightning-3d.png",
      title: "PCI DSS",
      desc: "Compliant",
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[3rem] overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="relative px-8 py-20 sm:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/10 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/smartphone-3d.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 4px rgba(255,200,0,0.3))",
                  }}
                />
                Trust & Security
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Bank-Grade Security for Your Gold.
              </h2>
              <p className="text-xl text-muted leading-relaxed">
                Trusted by millions. Your transactions are fully encrypted, and
                your digital gold is safely stored with regulated, insured vault
                partners.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full lg:w-auto flex-shrink-0">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center group"
                >
                  <PremiumIcon
                    image3d={badge.image3d}
                    alt={badge.title}
                    size="md"
                    className="mb-4"
                  />
                  <p className="font-bold text-white text-lg">
                    {badge.title}
                  </p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                    {badge.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
