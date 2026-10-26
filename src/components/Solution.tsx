import { BookOpen, CheckCircle2, Compass, GaugeCircle, Laptop, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const onlinePillars = [
  { icon: Laptop, title: "Global Classrooms", description: "Connect with top mentors & premium content from anywhere." },
  { icon: Users, title: "Teacher Upskilling", description: "Structured training journeys for every school mentor." },
  { icon: GaugeCircle, title: "Data Dashboard", description: "Track mastery, attendance & pulse in real time." },
];

const offlinePillars = [
  { icon: Compass, title: "Personal Anchors", description: "Daily persona building, advisory & habit tracking." },
  { icon: BookOpen, title: "Rigorous Practice", description: "Studio sessions, mock drills & continuous feedback." },
  { icon: CheckCircle2, title: "Doubt Clinics", description: "One-to-one support to help every learner move forward." },
];

const pillars = [
  { label: "01 / Online infrastructure", title: "A connected learning environment", items: onlinePillars },
  { label: "02 / In-person support", title: "Human guidance, every day", items: offlinePillars },
];

export const Solution = () => {
  return (
    <section className="editorial-section" aria-labelledby="solution-title">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Our approach</p>
            <h2 id="solution-title" className="section-title">Better learning.<br />Built around people.</h2>
          </div>
          <p className="section-intro">CareerMaps brings digital classrooms and in-person guidance together, giving schools the tools to support each learner from ambition to action.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.label} className="surface-card p-6 md:p-10">
              <p className="section-kicker">{pillar.label}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
              <div className="mt-8 divide-y divide-slate-100">
                {pillar.items.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                    <div className="feature-icon"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                    <div>
                      <h4 className="text-base font-semibold">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="outcome-strip">
          {[
            { metric: "3x", label: "Higher engagement", description: "Student participation" },
            { metric: "90%", label: "Completion rate", description: "Personalised learning tracks" },
            { metric: "85%", label: "Goal achievement", description: "College and career milestones" },
          ].map((result) => (
            <div key={result.label} className="outcome-strip__item">
              <p className="outcome-strip__value">{result.metric}</p>
              <h3 className="mt-3 text-base font-semibold">{result.label}</h3>
              <p className="mt-1 text-sm text-slate-600">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
