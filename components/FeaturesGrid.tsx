"use client";

import { Smartphone, Zap, Droplet, Wifi, Tv, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Smartphone, name: "Mobile Recharge", desc: "Prepaid & Postpaid" },
  { icon: Zap, name: "Electricity Bills", desc: "All state boards" },
  { icon: Tv, name: "DTH", desc: "Tata Play, Airtel, etc." },
  { icon: CreditCard, name: "Credit Cards", desc: "Pay all bank bills" },
  { icon: Wifi, name: "Broadband", desc: "Jio, Airtel, BSNL" },
  { icon: Droplet, name: "Utility Bills", desc: "Water & Gas" },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
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
            A unified payment experience for all your bills. Secure, instant, and rewarding.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect that appears on hover */}
                <div className="absolute -inset-0.5 bg-gradient-gold rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                
                <div className="relative flex items-start gap-4 p-6 glass-card rounded-2xl border border-white/5 hover:border-transparent transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-primary-500 transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start lg:items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {feature.name}
                      </h3>
                      <span className="inline-flex flex-shrink-0 whitespace-nowrap items-center rounded-full bg-accent-500/10 px-2 py-1 text-[10px] font-medium text-accent-400 ring-1 ring-inset ring-accent-500/20">
                        Earn Gold
                      </span>
                    </div>
                    <p className="text-sm text-muted">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
