import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const included = [
  "Career Maps App — unlimited career exploration access",
  "Expert Mentorship — 1 session per month (CAs, IITians, Doctors)",
  "E-School Smart Kit — live specialized STEM teachers",
  "Skill Workshops — monthly Robotics, AI & skills sessions",
];

const facts = [
  { label: "Batch size", value: "Min 60 students", note: "Per class/unit for enrollment" },
  { label: "Asset deposit", value: "₹3,000", note: "100% refundable" },
  { label: "Hardware", value: "Available", note: "Smart kit provided if the school needs it" },
];

export const Pricing = () => {
  return (
    <section className="editorial-section" aria-labelledby="pricing-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Pricing &amp; enrollment</p>
            <h2 id="pricing-title" className="section-title">Simple, affordable<br />access.</h2>
          </div>
          <p className="section-intro">High-quality education tools for less than the cost of a cup of tea — just ₹1 per student per day.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          {/* Price card */}
          <Card className="p-6 md:p-10 bg-gradient-secondary text-white border-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Per student subscription</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-semibold tracking-tight">₹365</span>
              <span className="pb-2 text-white/80">/ year</span>
            </div>
            <p className="mt-3 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold">Best value — just ₹1 per day per student</p>
            <p className="mt-6 text-white/80 leading-7">This annual fee unlocks the entire Career Maps ecosystem for a student.</p>
            <Button size="lg" className="mt-8 rounded-full bg-white text-slate-900 hover:bg-white/90" asChild>
              <a href="https://wa.me/918971890397" target="_blank" rel="noreferrer">Get started</a>
            </Button>
          </Card>

          {/* What's included */}
          <Card className="surface-card p-6 md:p-10">
            <h3 className="text-xl font-semibold tracking-tight">What's included</h3>
            <ul className="mt-6 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{fact.label}</p>
                    <p className="text-xs text-slate-500">{fact.note}</p>
                  </div>
                  <p className="text-sm font-semibold text-emerald-800">{fact.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
