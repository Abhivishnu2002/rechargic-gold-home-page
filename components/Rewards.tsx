"use client";

import { Gift, Users, Flame, Percent } from "lucide-react";
import { motion } from "framer-motion";

import PremiumIcon from "./PremiumIcon";

export default function Rewards() {
  const rewards = [
    {
      title: "Daily Cashback",
      description: "Earn up to 5% extra gold on your first transaction of the day.",
      icon: Percent,
      image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Money%20bag/3D/money_bag_3d.png",
      color: "text-green-400",
      glow: "rgba(74,222,128,0.5)",
      border: "hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]"
    },
    {
      title: "Referral Rewards",
      description: "Invite friends and get ₹50 worth of gold for each successful referral.",
      icon: Users,
      image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Handshake/3D/handshake_3d.png",
      color: "text-blue-400",
      glow: "rgba(96,165,250,0.5)",
      border: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
    },
    {
      title: "Recharge Streaks",
      description: "Pay bills for 3 consecutive months and unlock a multiplier bonus.",
      icon: Flame,
      image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Fire/3D/fire_3d.png",
      color: "text-orange-400",
      glow: "rgba(251,146,60,0.5)",
      border: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
    },
    {
      title: "Spin the Wheel",
      description: "Test your luck weekly. Win up to 1 gram of 24K pure gold.",
      icon: Gift,
      image3d: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Wrapped%20gift/3D/wrapped_gift_3d.png",
      color: "text-purple-400",
      glow: "rgba(192,132,252,0.5)",
      border: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]"
    }
  ];

  return (
    <section id="rewards" className="py-32 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Play to <span className="text-gradient-gold">Earn More.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            Gamified rewards designed to maximize your digital gold savings.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <motion.div 
              key={reward.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl glass-card border border-white/5 transition-all duration-300 ${reward.border} relative overflow-hidden group`}
            >
              {/* Floating coin effect background */}
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-gold opacity-10 blur-xl group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>

              <PremiumIcon 
                icon={reward.icon} 
                image3d={reward.image3d}
                size={36} 
                className="mb-8 h-16 w-16" 
                colorClass={reward.color} 
                glowColor={reward.glow} 
              />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">{reward.title}</h3>
              <p className="text-muted leading-relaxed">{reward.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
