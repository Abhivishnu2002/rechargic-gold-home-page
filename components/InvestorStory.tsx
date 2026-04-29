"use client";

import { motion } from "framer-motion";
import { LineChart, Smartphone, Coins } from "lucide-react";
import PremiumIcon from "./PremiumIcon";

export default function InvestorStory() {
  const stats = [
    {
      label: "Annual Gold Imports in India",
      value: "800+ Tons",
      icon: Coins,
      image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Coin/3D/coin_3d.png",
      trend: "Consistent growth"
    },
    {
      label: "Monthly Recharges/Payments",
      value: "15 Billion+",
      icon: Smartphone,
      image3d: "/mobile-recharge-3d.png",
      trend: "High frequency"
    },
    {
      label: "Our Market Potential",
      value: "$400B+",
      icon: LineChart,
      image3d: "/chart-3d.png",
      trend: "Untapped intersection"
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-accent-400 ring-1 ring-accent-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              The Opportunity
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 leading-tight">
              Why This <span className="text-gradient-gold">Matters.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted">
              <p>
                <strong className="text-white font-medium">Indians inherently save in gold.</strong> It's deeply cultural, representing security and prosperity. Yet, digital accumulation remains fragmented.
              </p>
              <p>
                <strong className="text-white font-medium">Utility payments are a daily habit.</strong> Everyone pays bills, recharges phones, and manages utilities on a recurring basis.
              </p>
              <p className="pl-4 border-l-2 border-primary-500 text-white italic">
                "Rechargic Gold sits at the massive intersection of high-frequency transactions and culturally ingrained wealth creation."
              </p>
            </div>
          </motion.div>
          
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>

                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <p className="text-sm font-medium text-muted mb-2 uppercase tracking-wider">{stat.label}</p>
                    <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-sm text-primary-400 flex items-center gap-1">
                      <img src="/chart-3d.png" alt="" className="w-5 h-5 object-contain" /> {stat.trend}
                    </p>
                  </div>
                  <PremiumIcon icon={stat.icon} image3d={stat.image3d} size={32} className="w-14 h-14" colorClass="text-white" glowColor="rgba(249,115,22,0.5)" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
