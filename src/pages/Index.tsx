import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { CareerPs } from "@/components/CareerPs";
import { Audiences } from "@/components/Audiences";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Pillars } from "@/components/Pillars";
import { SmartClassroom } from "@/components/SmartClassroom";
import { SchoolValue } from "@/components/SchoolValue";
import { ProvenResults } from "@/components/ProvenResults";
import { TechInfra } from "@/components/TechInfra";
import { Pricing } from "@/components/Pricing";
import { Roadmap } from "@/components/Roadmap";
import { Reviews } from "@/components/Reviews";
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
      <Audiences />
      <Problem />
      <Solution />
      <Features />
      <Pillars />
      <SmartClassroom />
      <SchoolValue />
      <ProvenResults />
      <TechInfra />
      <Pricing />
      <Roadmap />
      <Reviews />
      <Team />
      <CTA />
      </main>
      <SignatureSection />
    </>
  );
};

export default Index;
