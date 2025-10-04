import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import { syncUser } from "@/lib/actions/users";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

    await syncUser();

  if (user) {
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;

    // user is not the admin
    if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");

    redirect("/admin");
  }
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
