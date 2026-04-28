import { Zap, Coins, TrendingUp } from "lucide-react";

const valueProps = [
  {
    name: "Instant Recharge",
    description: "Lightning fast payments for mobile, DTH, electricity and more with zero processing fees.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    name: "Earn Digital Gold",
    description: "Get assured 24K digital gold on every successful transaction. No useless scratch cards.",
    icon: Coins,
    color: "text-accent-500",
    bg: "bg-amber-50"
  },
  {
    name: "Build Smart Savings",
    description: "Watch your gold accumulate over time. Sell or redeem for physical coins whenever you want.",
    icon: TrendingUp,
    color: "text-primary-500",
    bg: "bg-orange-50"
  }
];

export default function ValueProp() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Why Rechargic Gold?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            More than just a payment app
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We're transforming how you pay bills by turning your everyday expenses into a growing wealth portfolio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {valueProps.map((prop) => (
              <div key={prop.name} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <dt className="flex flex-col items-center gap-y-4 text-xl font-semibold leading-7 text-slate-900">
                  <div className={`mb-2 flex h-16 w-16 items-center justify-center rounded-2xl ${prop.bg}`}>
                    <prop.icon className={`h-8 w-8 ${prop.color}`} aria-hidden="true" />
                  </div>
                  {prop.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{prop.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
