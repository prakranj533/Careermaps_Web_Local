import type { ReactNode } from "react";
import { User, School, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const audiences: { icon: typeof User; title: string; description: ReactNode; points: ReactNode[] }[] = [
  {
    icon: User,
    title: "For Individuals",
    description: <>Students and parents get <a href="https://careermaps.live" target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">unlimited career counseling</a>, a personal career GPS, and monthly mentorship from CAs, IITians, and Doctors — all on the app.</>,
    points: [<a href="https://careermaps.live" target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Unlimited counseling services</a>, "AI-powered career mapping", "Monthly expert mentor sessions"],
  },
  {
    icon: School,
    title: "For Schools",
    description: "Turn any classroom into an AI Smart classroom with the E-School Smart Kit — live specialized teachers, premium curriculum, and admin dashboards.",
    points: ["Smart TV + 2-way video classes", "STEM focus for Grades 9–10", "Real-time engagement tracking"],
  },
  {
    icon: Building2,
    title: "For Colleges",
    description: "Bring expert faculty and structured career guidance to small colleges — plus Robotics & AI workshops with revenue-sharing options.",
    points: ["Live expert lectures", "Career mapping for every student", "Hands-on AI & Robotics workshops"],
  },
];

export const Audiences = () => {
  return (
    <section className="editorial-section editorial-section--muted" aria-labelledby="audiences-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Who it’s for</p>
            <h2 id="audiences-title" className="section-title">Get AI Smart<br />with Career Maps.</h2>
          </div>
          <p className="section-intro">One ecosystem for individuals, schools, and colleges — purposeful learning, stronger outcomes, and clear career pathways for everyone.</p>
        </div>

        {/* Audiences Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((audience) => (
            <Card key={audience.title} className="surface-card feature-card">
              <div className="feature-icon"><audience.icon className="h-5 w-5" aria-hidden="true" /></div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{audience.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{audience.description}</p>
              <ul className="mt-6 space-y-2">
                {audience.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
