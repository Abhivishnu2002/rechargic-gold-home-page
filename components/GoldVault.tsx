import { Target, TrendingUp, Sparkles } from "lucide-react";

export default function GoldVault() {
  return (
    <section id="vault" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-accent-400 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-primary-500 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 text-accent-600 font-semibold mb-4 bg-accent-100 w-max px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" /> 24K Digital Gold
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Your Personal Gold Vault
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Watch your wealth grow seamlessly. Track real-time gold prices and set savings goals for your future needs like a wedding, child's education, or festivals.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary-500">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Live Price Tracking</h4>
                <p className="text-slate-600">Monitor your portfolio value with real-time 24K gold market rates.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-accent-500">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Goal-based Savings</h4>
                <p className="text-slate-600">Create custom goals and let your daily recharges fund your future.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center w-full">
          {/* Mockup Container */}
          <div className="relative w-full max-w-sm rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-2xl overflow-hidden aspect-[1/1.1]">
            <img src="/mockups/gold_vault_mockup.png" alt="Gold Vault Mockup" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
