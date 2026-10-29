import { CalendarCheck, FlaskConical, FileSignature, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: CalendarCheck,
    step: "Step 1",
    time: "Day 1",
    title: "Schedule Demo",
    description: "Book a 30-minute walkthrough for your leadership team to see the platform in action.",
  },
  {
    icon: FlaskConical,
    step: "Step 2",
    time: "Week 1–2",
    title: "Pilot Program",
    description: "Run a risk-free 2-week pilot with one selected grade or section to validate outcomes.",
  },
  {
    icon: FileSignature,
    step: "Step 3",
    time: "Week 3",
    title: "Sign MoU",
    description: "Finalize the partnership agreement, rollout plan, and revenue sharing details.",
  },
  {
    icon: Rocket,
    step: "Step 4",
    time: "Week 4",
    title: "Onboard & Go Live",
    description: "Full student enrollment, teacher training, and immediate access to Career Maps services.",
  },
];

export const Roadmap = () => {
  return (
    <section className="editorial-section editorial-section--muted" aria-labelledby="roadmap-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Roadmap</p>
            <h2 id="roadmap-title" className="section-title">Implementation plan.</h2>
          </div>
          <p className="section-intro">Four simple steps to transform your school — from first demo to full go-live in about a month.</p>
        </div>

        {/* Steps */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <Card key={item.title} className="surface-card feature-card">
              <div className="flex items-center justify-between">
                <div className="feature-icon"><item.icon className="h-5 w-5" aria-hidden="true" /></div>
                <span className="text-xs font-medium tabular-nums text-slate-500">0{index + 1}</span>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{item.step} · {item.time}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-base text-slate-600">
          "The best way to predict the future is to create it. Let's create a brighter future for your students together."
        </p>
      </div>
    </section>
  );
};
