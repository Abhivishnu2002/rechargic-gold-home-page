"use client";

import { motion } from "framer-motion";
import { Wallet, CheckCircle2, TrendingUp, Target, Coins, IndianRupee } from "lucide-react";

export default function AppScreens() {
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const reverseFloatingAnimation = {
    animate: {
      y: [0, 15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-32 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-accent-400 ring-1 ring-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            Live Experience Concept
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Experience the <span className="text-gradient-gold">Platform.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            See how your everyday payments turn into real gold savings.
          </motion.p>
        </div>

        {/* Scattered UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-8 md:mt-24">
            
            {/* 1. Gold Wallet Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-[2rem] p-8 border border-white/10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <motion.div variants={floatingAnimation} animate="animate" className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center ring-1 ring-white/10">
                  <Wallet className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted uppercase tracking-wider">Total Gold Balance</h3>
                </div>
              </div>
              
              <div className="mb-2">
                <h2 className="text-4xl font-bold text-white flex items-baseline gap-2">
                  ₹2,450 <span className="text-xl font-medium text-muted">• 0.034g</span>
                </h2>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                <TrendingUp className="w-4 h-4" />
                +₹25 earned today
              </div>
            </motion.div>

            {/* 4. Savings Goals Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <motion.div variants={reverseFloatingAnimation} animate="animate" className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Target className="w-5 h-5 text-primary-500" />
                <h3 className="text-lg font-bold text-white">Savings Goals</h3>
              </div>
              
              <div className="space-y-5 relative z-10">
                {[
                  { name: "Wedding", progress: 60, color: "bg-pink-500" },
                  { name: "Festival", progress: 35, color: "bg-amber-500" },
                  { name: "Child Future", progress: 15, color: "bg-blue-500" }
                ].map((goal) => (
                  <div key={goal.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{goal.name}</span>
                      <span className="text-muted">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${goal.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 md:-mt-16">
            
            {/* 2. Recharge Success Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-[2rem] p-8 border border-white/10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center flex flex-col items-center"
            >
              <motion.div variants={reverseFloatingAnimation} animate="animate" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 ring-4 ring-green-500/10 relative">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Recharge Successful</h3>
              <p className="text-muted mb-6">Jio Prepaid Mobile • ₹299</p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-primary-500/30 text-white font-medium shadow-lg"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shadow-inner">
                  <Coins className="w-3 h-3 text-background" />
                </div>
                You earned <span className="text-accent-400">₹5 in gold</span>
              </motion.div>
            </motion.div>

            {/* 3. Gold Growth Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Your Gold is Growing</h3>
                  <div className="inline-flex items-center gap-1.5 text-accent-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    +18% this week
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10">
                  <IndianRupee className="w-5 h-5 text-muted" />
                </div>
              </div>

              {/* Mock Line Chart */}
              <div className="h-24 w-full flex items-end gap-2 relative z-10">
                {/* SVG Line curve simulation */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.path 
                    d="M 0 80 Q 20 70, 40 50 T 70 30 T 100 10" 
                    fill="none" 
                    stroke="url(#goldGradient)" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Decorative points on the line */}
                {[10, 30, 50, 70, 100].map((pos, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                    className="absolute w-3 h-3 bg-white rounded-full border-2 border-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                    style={{ 
                      left: `calc(${pos}% - 6px)`, 
                      top: pos === 10 ? '76%' : pos === 30 ? '56%' : pos === 50 ? '46%' : pos === 70 ? '26%' : '6%'
                    }}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
