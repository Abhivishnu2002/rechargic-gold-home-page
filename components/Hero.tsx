"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Wallet, CheckCircle2, IndianRupee } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate min-h-screen pt-24 overflow-hidden bg-background flex items-center">
      
      {/* Global Background Particles/Dots */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 pointer-events-none" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Content (Text & CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="max-w-2xl lg:w-1/2 lg:flex-shrink-0 z-10 pt-10 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-primary-500 ring-1 ring-primary-500/30"
          >
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Sparkles/3D/sparkles_3d.png" alt="" className="h-5 w-5 object-contain" />
            <span>Premium Fintech Experience</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Turn Every <br /> Payment Into <br />
            <span className="text-gradient-gold">Gold.</span>
          </h1>
          
          <p className="mt-6 text-xl leading-relaxed text-muted max-w-xl">
            India’s first recharge platform that converts everyday payments into digital gold savings. Experience wealth creation on autopilot.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link href="#download" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-gold opacity-60 blur-md group-hover:opacity-100 transition duration-300"></div>
              <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-white transition-all group-hover:scale-[1.02]">
                Get Started
                <ArrowRight className="h-5 w-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="#download" className="group flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors w-full sm:w-auto">
              Download App
            </Link>
          </div>
        </motion.div>
        
        {/* Right Content (Visual System) */}
        <div className="relative lg:w-1/2 w-full max-w-lg mx-auto h-[500px] sm:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
          
          {/* LAYER 1: Abstract Gold Motion Background */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" as const }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          >
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-gold rounded-full blur-[120px] opacity-20 mix-blend-screen" />
            <div className="absolute top-10 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary-500/30 rounded-full blur-[100px] mix-blend-screen translate-x-1/4" />
          </motion.div>

          {/* LAYER 2 & 3: Floating Product UI Cards with Micro-Animations */}
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[360px]">
            
            {/* Card 1: Gold Wallet (Main Center Focus) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" as const }}
              className="relative z-30"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" as const }}
                whileHover={{ scale: 1.04 }}
                className="glass-card rounded-[2rem] p-6 sm:p-8 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-full relative overflow-hidden group bg-[#0f0f0f]/80 backdrop-blur-2xl"
              >
                {/* Inner Card Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-gold opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10">
                    <Wallet className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-muted uppercase tracking-wider">Total Gold Balance</h3>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-baseline gap-2">
                    ₹2,450 <span className="text-lg sm:text-xl font-medium text-muted">• 0.034g</span>
                  </h2>
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs sm:text-sm font-medium border border-green-500/20">
                  <TrendingUp className="w-4 h-4" />
                  +₹25 today
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2: Reward Card (Top Right Offset) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" as const }}
              className="absolute -top-28 -right-4 sm:-top-36 sm:-right-16 md:-top-32 md:-right-32 z-20 w-[200px] sm:w-[240px]"
            >
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" as const, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-[1.5rem] p-4 sm:p-5 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-[#141414]/90 backdrop-blur-xl rotate-[4deg] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-3 ring-2 ring-green-500/10">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">Recharge Successful</h3>
                <p className="text-xs sm:text-sm text-accent-400 font-medium">You earned ₹5 in gold</p>
              </motion.div>
            </motion.div>

            {/* Card 3: Growth Chart (Bottom Right Offset) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" as const }}
              className="absolute -bottom-28 -right-4 sm:-bottom-36 sm:-right-16 md:-bottom-32 md:-right-32 z-40 w-[220px] sm:w-[260px]"
            >
              <motion.div 
                animate={{ y: [-12, 12, -12] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" as const, delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-[1.5rem] p-4 sm:p-6 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-[#111111]/90 backdrop-blur-xl -rotate-[3deg] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Gold Growth</h3>
                    <div className="inline-flex items-center gap-1 text-green-400 text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      +18% this week
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <IndianRupee className="w-4 h-4 text-muted" />
                  </div>
                </div>

                {/* Minimal Line Chart Mock */}
                <div className="h-12 w-full relative mt-2">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <motion.path 
                      d="M 0 45 Q 20 40, 40 25 T 70 15 T 100 5" 
                      fill="none" 
                      stroke="url(#heroGoldGradient)" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" as const }}
                    />
                    <defs>
                      <linearGradient id="heroGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Highlight point */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.7 }}
                    className="absolute right-[-2px] top-[-2px] w-2 h-2 bg-white rounded-full border border-accent-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
