import { BadgeCheck, Megaphone, BrainCircuit, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: BrainCircuit,
    title: "AI-integrated curriculum",
    description: "From Nursery to Class 10 — AI education woven into daily learning, not bolted on.",
  },
  {
    icon: Megaphone,
    title: "A story parents notice",
    description: "Schools advertise 'AI Shiksha' on their own banners — a real admissions differentiator in your neighbourhood.",
  },
  {
    icon: Sparkles,
    title: "Zero new infrastructure",
    description: "Affordable smart kits turn existing classrooms into AI smart classes in weeks, not years.",
  },
];

export const AISchool = () => {
  return (
    <section className="editorial-section" aria-labelledby="aischool-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Proven in the real world</p>
            <h2 id="aischool-title" className="section-title">Make your school<br />an AI School.</h2>
          </div>
          <p className="section-intro">CareerMaps is the go-to way for schools to become AI-savvy — and to show it off. Partner schools are already advertising AI education to parents.</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Photo proof */}
          <figure className="relative">
            <img
              src="/ai-school-patna.jpg"
              alt="Shri Geeta Prasad Singh Gurukul Public School in Patna displaying an 'AI Shiksha — Nayi Shuruaat' banner powered by CareerMaps"
              className="w-full rounded-2xl border border-slate-200 object-cover shadow-xl"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 px-4 py-3 text-white backdrop-blur-md">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                Live deployment — Shri Geeta Prasad Singh Gurukul Public School, Patna (Estd. 1983)
              </p>
              <p className="mt-1 text-xs text-white">"AI शिक्षा — नई शुरुआत" · Nursery to Class 10 (CBSE curriculum)</p>
            </figcaption>
          </figure>

          {/* Benefits */}
          <div className="space-y-5">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="surface-card flex gap-4 p-6">
                <div className="feature-icon shrink-0"><benefit.icon className="h-5 w-5" aria-hidden="true" /></div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
            <Button size="lg" className="rounded-full" asChild>
              <a href="https://wa.me/918971890397" target="_blank" rel="noreferrer">Become an AI School</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
