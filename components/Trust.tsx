import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
          
          <div className="relative px-6 py-16 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bank-Grade Security for Your Gold & Payments
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Trusted by millions of users. Your transactions are 100% secure, encrypted, and your digital gold is safely stored with regulated partners.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <div className="glass-dark p-6 rounded-2xl flex items-center gap-4 text-white">
                <ShieldCheck className="w-10 h-10 text-primary-500" />
                <div className="text-left">
                  <p className="font-semibold text-lg">256-bit</p>
                  <p className="text-sm text-slate-400">Encryption</p>
                </div>
              </div>
              <div className="glass-dark p-6 rounded-2xl flex items-center gap-4 text-white">
                <Lock className="w-10 h-10 text-accent-400" />
                <div className="text-left">
                  <p className="font-semibold text-lg">100%</p>
                  <p className="text-sm text-slate-400">Secure Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
