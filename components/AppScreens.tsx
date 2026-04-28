export default function AppScreens() {
  const screens = [
    {
      id: "dashboard",
      title: "Home Dashboard",
      imgSrc: "/mockups/home_dashboard_mockup.png"
    },
    {
      id: "recharge",
      title: "Recharge Screen",
      imgSrc: "/mockups/recharge_screen_mockup.png"
    },
    {
      id: "vault",
      title: "Gold Vault",
      imgSrc: "/mockups/gold_vault_mockup.png"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-800 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Beautifully Designed for You
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A premium fintech experience that feels smooth, fast, and completely secure.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory hide-scrollbar justify-start md:justify-center px-4">
          {screens.map((screen) => (
            <div key={screen.id} className="snap-center shrink-0 flex flex-col items-center group">
              <div className="relative w-[280px] aspect-[1/2.1] rounded-[2rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden group-hover:-translate-y-4 transition-transform duration-500 ring-1 ring-white/10">
                <img src={screen.imgSrc} alt={screen.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 inset-x-0 h-5 bg-slate-800 rounded-b-2xl w-32 mx-auto"></div>
              </div>
              <h3 className="mt-6 text-lg font-medium text-slate-300">{screen.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
