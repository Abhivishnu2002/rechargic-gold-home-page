import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import AppScreens from "@/components/AppScreens";
import GoldVault from "@/components/GoldVault";
import Rewards from "@/components/Rewards";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProp />
      <FeaturesGrid />
      <HowItWorks />
      <AppScreens />
      <GoldVault />
      <Rewards />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}
