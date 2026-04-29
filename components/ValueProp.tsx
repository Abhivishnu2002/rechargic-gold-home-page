"use client";

import { Zap, Coins, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const valueProps = [
  {
    name: "Instant Recharge",
    description: "Lightning fast payments for mobile, DTH, electricity and more with zero processing fees.",
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  {
    name: "Earn Digital Gold",
    description: "Get assured 24K digital gold on every successful transaction. No useless scratch cards.",
    icon: Coins,
    color: "text-accent-400",
    bg: "bg-accent-500/10",
    border: "group-hover:border-accent-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  },
  {
    name: "Build Smart Savings",
    description: "Watch your gold accumulate over time. Sell or redeem for physical coins whenever you want.",
    icon: TrendingUp,
    color: "text-primary-500",
    bg: "bg-primary-500/10",
    border: "group-hover:border-primary-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  }
];

export default function ValueProp() {
  return (
    <div className="bg-background py-24 sm:py-32 relative isolate overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500 uppercase tracking-widest">Why Rechargic Gold?</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            More than just a payment app
          </p>
          <p className="mt-6 text-lg leading-8 text-muted">
            We're transforming how you pay bills by turning your everyday expenses into a growing wealth portfolio.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {valueProps.map((prop, index) => (
              <motion.div 
                key={prop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`group flex flex-col items-center text-center p-10 rounded-3xl glass-card transition-all duration-500 hover:-translate-y-2 ${prop.border} ${prop.shadow} relative overflow-hidden h-full`}>
                  
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at center, var(--color-${prop.color.split('-')[1]}-500) 0%, transparent 70%)`, opacity: 0.05 }} />

                  <dt className="flex flex-col items-center gap-y-6 text-xl font-bold leading-7 text-white relative z-10">
                    <div className={`mb-2 flex h-20 w-20 items-center justify-center rounded-2xl ${prop.bg} ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500`}>
                      <prop.icon className={`h-10 w-10 ${prop.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} aria-hidden="true" />
                    </div>
                    {prop.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted relative z-10">
                    <p className="flex-auto">{prop.description}</p>
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
