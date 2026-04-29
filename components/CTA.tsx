"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="download" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden shadow-[0_0_80px_rgba(249,115,22,0.15)]"
        >
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-accent-400 ring-1 ring-white/10 mb-8 mx-auto">
            <Sparkles className="h-4 w-4" /> Ready to Upgrade?
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Stop Paying. <br/>
            <span className="text-gradient-gold">Start Earning.</span>
          </h2>
          
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the elite club of smart Indians who are turning their everyday utility bills into a growing gold portfolio. Early access is limited.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto"
            >
              {/* Glowing aura behind button */}
              <div className="absolute -inset-1 rounded-full bg-gradient-gold opacity-70 blur-lg group-hover:opacity-100 transition duration-300"></div>
              
              <div className="relative flex items-center justify-center gap-2 bg-background px-10 py-5 rounded-full text-lg font-bold text-white shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                Get Early Access
                <ArrowRight className="h-5 w-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>
          
          <p className="mt-8 text-sm text-muted">
            Includes ₹100 welcome gold on sign up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
