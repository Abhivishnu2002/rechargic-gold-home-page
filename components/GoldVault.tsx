"use client";

import { Target, TrendingUp, Sparkles, Heart, Gift, Baby } from "lucide-react";
import { motion } from "framer-motion";

import PremiumIcon from "./PremiumIcon";

export default function GoldVault() {
  const chartPoints = [20, 35, 25, 45, 60, 50, 80, 70, 95];
  
  return (
    <section id="vault" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-accent-400 ring-1 ring-accent-500/30 mb-6">
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Sparkles/3D/sparkles_3d.png" alt="" className="h-5 w-5 object-contain" /> 24K Digital Gold
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
            Your Personal <br/>
            <span className="text-gradient-gold">Gold Vault.</span>
          </h2>
          <p className="text-lg text-muted mb-10 leading-relaxed max-w-xl">
            Watch your wealth grow seamlessly. Track real-time gold prices and set automated savings goals for your future milestones.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl border border-white/5 group"
            >
              <PremiumIcon image3d="/chart-3d.png" size={40} className="mb-6 h-16 w-16" colorClass="text-primary-500" glowColor="rgba(249,115,22,0.5)" />
              <h4 className="text-lg font-bold text-white mb-2">Live Tracking</h4>
              <p className="text-sm text-muted">Monitor your portfolio with real-time 24K gold market rates.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl border border-white/5 group"
            >
              <PremiumIcon image3d="/target-3d.png" size={40} className="mb-6 h-16 w-16" colorClass="text-accent-500" glowColor="rgba(245,158,11,0.5)" />
              <h4 className="text-lg font-bold text-white mb-2">Auto-Save</h4>
              <p className="text-sm text-muted">Let your daily recharges automatically fund your future goals.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full relative"
        >
          {/* Main Vault Card */}
          <div className="glass-card rounded-[2.5rem] p-8 border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden">
            {/* Glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 blur-[80px]"></div>

            <div className="relative z-10">
              <p className="text-muted text-sm font-medium mb-1">Total Vault Balance</p>
              <div className="flex items-end gap-3 mb-2">
                <h3 className="text-5xl font-bold text-white tracking-tight">₹45,280<span className="text-2xl text-muted">.50</span></h3>
              </div>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-accent-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> +12.4%
                </span>
                <span className="text-muted text-sm border-l border-white/20 pl-2">6.25 grams</span>
              </div>

              {/* Animated Mock Chart */}
              <div className="h-32 flex items-end justify-between gap-1 mb-8 relative border-b border-white/10 pb-2">
                {chartPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${point}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" as const }}
                    className="w-full bg-gradient-to-t from-primary-500/20 to-accent-500 rounded-t-sm"
                  ></motion.div>
                ))}
              </div>

              {/* Goals */}
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-muted">Active Goals</h4>
              <div className="space-y-3">
                {[
                  { name: "Wedding Fund", icon: Heart, image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Sparkling%20heart/3D/sparkling_heart_3d.png", progress: 65, color: "from-pink-500 to-rose-400" },
                  { name: "Diwali Festival", icon: Gift, image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Wrapped%20gift/3D/wrapped_gift_3d.png", progress: 40, color: "from-amber-500 to-orange-400" },
                  { name: "Child's Future", icon: Baby, image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Baby/3D/baby_3d.png", progress: 15, color: "from-blue-500 to-cyan-400" }
                ].map((goal, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <PremiumIcon icon={goal.icon} image3d={goal.image3d} size={24} className="w-10 h-10 flex-shrink-0" colorClass="text-white" glowColor="rgba(255,255,255,0.3)" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium text-white">{goal.name}</p>
                        <p className="text-xs text-muted">{goal.progress}%</p>
                      </div>
                      <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                          className={`h-full bg-gradient-to-r ${goal.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
