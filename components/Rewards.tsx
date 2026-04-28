import { Gift, Users, Flame, Percent } from "lucide-react";

export default function Rewards() {
  const rewards = [
    {
      title: "Daily Cashback",
      description: "Earn up to 5% extra gold on your first transaction of the day.",
      icon: Percent,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Referral Rewards",
      description: "Invite friends and get ₹50 worth of gold for each successful referral.",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Recharge Streaks",
      description: "Pay bills for 3 consecutive months and unlock a multiplier bonus.",
      icon: Flame,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Spin the Wheel",
      description: "Test your luck weekly. Win up to 1 gram of 24K pure gold.",
      icon: Gift,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="rewards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Gamified Rewards & Benefits
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            More ways to earn. Because your loyalty deserves real value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rewards.map((reward) => (
            <div key={reward.title} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${reward.color}`}>
                <reward.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{reward.title}</h3>
              <p className="text-slate-600">{reward.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
