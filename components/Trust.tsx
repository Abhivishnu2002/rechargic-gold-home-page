"use client";

import { ShieldCheck, Lock, Award, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Trust() {
  const badges = [
    { icon: ShieldCheck, title: "256-bit", desc: "Encryption", color: "text-green-400" },
    { icon: Lock, title: "100%", desc: "Secure Payments", color: "text-blue-400" },
    { icon: Award, title: "24K Pure", desc: "Digital Gold", color: "text-accent-400" },
    { icon: Server, title: "PCI DSS", desc: "Compliant", color: "text-purple-400" },
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[3rem] overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="relative px-8 py-20 sm:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/10 mb-6">
                <ShieldCheck className="h-4 w-4 text-green-400" /> Trust & Security
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Bank-Grade Security for Your Gold.
              </h2>
              <p className="text-xl text-muted leading-relaxed">
                Trusted by millions. Your transactions are fully encrypted, and your digital gold is safely stored with regulated, insured vault partners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto flex-shrink-0">
              {badges.map((badge, i) => (
                <motion.div 
                  key={badge.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
                >
                  <badge.icon className={`w-8 h-8 mb-3 ${badge.color} group-hover:scale-110 transition-transform`} />
                  <p className="font-bold text-white text-lg">{badge.title}</p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wider">{badge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
