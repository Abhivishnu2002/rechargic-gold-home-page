"use client";

import { motion } from "framer-motion";
import IconCard from "./IconCard";

const features = [
  {
    image3d: "/icons/smartphone-3d.png",
    name: "Mobile Recharge",
    desc: "Prepaid & Postpaid",
  },
  {
    image3d: "/icons/lightning-3d.png",
    name: "Electricity Bills",
    desc: "All state boards",
  },
  {
    image3d: "/icons/television-3d.png",
    name: "DTH",
    desc: "Tata Play, Airtel, etc.",
  },
  {
    image3d: "/icons/creditcard-3d.png",
    name: "Credit Cards",
    desc: "Pay all bank bills",
  },
  {
    image3d: "/icons/wifi-3d.png",
    name: "Broadband",
    desc: "Jio, Airtel, BSNL",
  },
  {
    image3d: "/icons/waterdrop-3d.png",
    name: "Utility Bills",
    desc: "Water & Gas",
  },
];

export default function FeaturesGrid() {
  return (
    <section
      id="features"
      className="py-24 bg-background relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Pay Anything. <span className="text-gradient-gold">Earn Gold.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            A unified payment experience for all your bills. Secure, instant,
            and rewarding.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <IconCard
              key={feature.name}
              image3d={feature.image3d}
              alt={feature.name}
              title={feature.name}
              description={feature.desc}
              badge="Earn Gold"
              delay={index * 0.1}
              iconSize="lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
