import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="what-to-ask">
        <WhatToAsk />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
