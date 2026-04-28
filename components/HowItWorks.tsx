export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Choose Service",
      description: "Select from mobile recharge, DTH, electricity or FASTag from our vast list of providers."
    },
    {
      id: 2,
      title: "Complete Payment",
      description: "Pay securely via UPI, Cards, or Net Banking in just a few taps."
    },
    {
      id: 3,
      title: "Earn Gold Instantly",
      description: "Watch your digital gold balance grow automatically after every successful transaction."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple. Fast. Rewarding.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start earning digital gold in 3 easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary-200 via-accent-300 to-primary-200 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-xl border-4 border-slate-50 flex items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
