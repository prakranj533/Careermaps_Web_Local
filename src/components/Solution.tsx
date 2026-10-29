import type { ReactNode } from "react";
import { Compass, GraduationCap, MonitorSmartphone, UserCheck, Video, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const eschoolPillars = [
  { icon: MonitorSmartphone, title: "Live Specialized Teachers", description: "Smart TVs enabling access to expert educators otherwise unavailable in local regions." },
  { icon: BookOpen, title: "Premium Curriculum", description: "Best-in-class courses for Grades 9–10 with special focus on English, Science, and Maths." },
  { icon: Video, title: "Interactive Remote Learning", description: "Two-way interactive video calls ensuring real-time engagement and doubt resolution." },
];

const careerMapsPillars: { icon: typeof Compass; title: string; description: ReactNode }[] = [
  { icon: Compass, title: "Career Navigation App", description: "Explore careers and map distinct paths to success — just like Google Maps for your future." },
  { icon: GraduationCap, title: "Expert Mentorship", description: "Monthly sessions with CAs, IITians, and Doctors to bridge the gap between aspiration and reality." },
  { icon: UserCheck, title: "Personalized Guidance", description: <><a href="https://careermaps.live" target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Unlimited counseling</a> tailored to individual student goals, strengths, and local context.</> },
];

const pillars = [
  { label: "01 / E-School", title: "Assisted learning via Smart Kit", items: eschoolPillars },
  { label: "02 / Career Maps", title: "Career navigation & mentorship", items: careerMapsPillars },
];

export const Solution = () => {
  return (
    <section className="editorial-section" aria-labelledby="solution-title">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Our approach</p>
            <h2 id="solution-title" className="section-title">A comprehensive<br />dual solution.</h2>
          </div>
          <p className="section-intro">Bridging technology with human guidance — E-School smart classrooms plus the Career Maps app for mentorship and career navigation.</p>
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
