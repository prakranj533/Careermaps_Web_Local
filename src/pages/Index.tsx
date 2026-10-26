import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { CareerPs } from "@/components/CareerPs";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Reviews } from "@/components/Reviews";
import { Features } from "@/components/Features";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { SignatureSection } from "@/components/SignatureSection";

const Index = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" tabIndex={-1} className="min-h-screen w-full">
      <Hero />
      <ImpactStats />
      <CareerPs />
      <Problem />
      <Solution />
      <Reviews />
      <Features />
      <Team />
      <CTA />
      </main>
      <SignatureSection />
    </>
  );
};

export default Index;