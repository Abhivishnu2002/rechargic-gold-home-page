"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PremiumIcon from "./PremiumIcon";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Choose Service",
      description:
        "Select from mobile recharge, DTH, electricity or FASTag from our vast list of providers.",
      image3d: "/icons/smartphone-3d.png",
    },
    {
      id: 2,
      title: "Pay Instantly",
      description:
        "Pay securely via UPI, Cards, or Net Banking in just a few taps.",
      image3d: "/icons/lightning-3d.png",
    },
    {
      id: 3,
      title: "Earn Gold",
      description:
        "Watch your digital gold balance grow automatically after every successful transaction.",
      image3d: "/icons/goldbars-3d.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Simple. Fast.{" "}
            <span className="text-gradient-gold">Rewarding.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            Start earning 24K digital gold in 3 easy steps.
          </motion.p>
        </div>

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[70px] left-[15%] right-[15%] h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" as const }}
              className="w-full h-full bg-gradient-gold"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Premium Icon */}
                <div className="mb-8 relative">
                  <PremiumIcon
                    image3d={step.image3d}
                    alt={step.title}
                    size="lg"
                  />

                  {/* Completion checkmark (decorative) */}
                  <div className="absolute -bottom-2 -right-2 bg-background rounded-full z-20">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
