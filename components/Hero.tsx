import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate pt-24 overflow-hidden bg-slate-50">
      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#f59e0b] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-x-12 gap-y-16">
        <div className="max-w-2xl lg:w-1/2 lg:flex-shrink-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <div className="mb-8 flex">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-primary-600 ring-1 ring-primary-500/20 hover:ring-primary-500/40 bg-orange-50 font-medium">
              New: Auto-invest in 24K Gold. <a href="#vault" className="font-semibold text-primary-600"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
            Recharge Today. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Own Gold Tomorrow.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The smartest way to pay your bills. Every mobile recharge, every utility bill gives you pure 24K digital gold. Build your savings effortlessly.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#download" className="rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all hover:scale-105">
              Get Started
            </a>
            <a href="#how-it-works" className="text-sm font-semibold leading-6 text-slate-900 hover:text-primary-500 transition-colors">
              How it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        <div className="mx-auto lg:w-1/2 lg:max-w-none flex justify-center lg:justify-end animate-[float_6s_ease-in-out_infinite]">
          <div className="relative w-[300px] sm:w-[350px] aspect-[1/2] rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-2xl overflow-hidden ring-1 ring-slate-900/5 flex flex-col">
            <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center pt-6 pb-2 px-2">
               <img src="/hero_mockup.jpg" alt="Rechargic Gold Dashboard" className="w-full h-full object-contain object-center" />
            </div>
            
            {/* Decorative notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-40 mx-auto z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
