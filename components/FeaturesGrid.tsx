import { Smartphone, Zap, Droplet, Wifi, Tv, CreditCard } from "lucide-react";

const features = [
  { icon: Smartphone, name: "Mobile Recharge" },
  { icon: Zap, name: "Electricity Bills" },
  { icon: Tv, name: "DTH" },
  { icon: CreditCard, name: "Credit Card Bills" },
  { icon: Wifi, name: "Broadband" },
  { icon: Droplet, name: "Water Bill" },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One App for All Your Payments
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pay any bill or recharge your services instantly, and earn digital gold on every successful transaction.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.name}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-orange-50 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-sm font-medium text-slate-900 text-center">
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
