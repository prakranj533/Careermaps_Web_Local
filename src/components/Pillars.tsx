import { Target, HeartHandshake, GraduationCap, CalendarCheck, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Target,
    title: "Purposeful Learning",
    description: "Understanding the 'why' behind learning — clear short & long-term goals, early career thinking, and mentorship.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Environment",
    description: "An ecosystem where students feel safe to explore and fail — with teachers as guides, not just instructors.",
  },
  {
    icon: GraduationCap,
    title: "Best Teachers",
    description: "Access to top-tier educators regardless of geographical location, with audio-visual explanations that simplify concepts.",
  },
  {
    icon: CalendarCheck,
    title: "Regular Rhythm",
    description: "Consistency through daily sessions, assessments, quizzes, and revisions that keep progress on track.",
  },
  {
    icon: Cpu,
    title: "Computer & AI Integration",
    description: "Leveraging technology to personalize the learning journey for every student — adaptive and data-driven.",
  },
];

export const Pillars = () => {
  return (
    <section className="editorial-section" aria-labelledby="pillars-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Core framework</p>
            <h2 id="pillars-title" className="section-title">5 pillars of success.</h2>
          </div>
          <p className="section-intro">The foundations of Career Maps — a framework that turns classrooms into launchpads for clear career pathways.</p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Card key={pillar.title} className="surface-card feature-card">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="feature-icon"><pillar.icon className="h-5 w-5" aria-hidden="true" /></div>
                <span className="text-xs font-medium tabular-nums text-slate-500">0{index + 1}</span>
              </div>
              {/* Content */}
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-600">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
