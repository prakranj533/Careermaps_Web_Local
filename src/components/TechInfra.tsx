import type { ReactNode } from "react";
import { Gamepad2, UserPlus, LayoutDashboard, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const tech: { icon: typeof Gamepad2; title: string; description: ReactNode }[] = [
  {
    icon: Gamepad2,
    title: "Tech Animated Quizzes",
    description: "In-house developed computer-based quizzes that turn assessment into an engaging, gamified experience.",
  },
  {
    icon: UserPlus,
    title: "Centralized Enrollment",
    description: <>Seamlessly onboard all students onto the <a href="https://careermaps-ai-dashboard.web.app/" target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Career Maps portal</a> for instant access to resources.</>,
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboarding",
    description: "Real-time monitoring of SHG clusters, attendance, and performance metrics for administrators.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description: "Visual artifacts and data visualization to track progress and identify areas for improvement.",
  },
];

export const TechInfra = () => {
  return (
    <section className="editorial-section editorial-section--muted" aria-labelledby="tech-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Innovation hub</p>
            <h2 id="tech-title" className="section-title">Technology &amp;<br />infrastructure.</h2>
          </div>
          <p className="section-intro">Scalable, data-driven tools designed to empower administrators and engage students — with iPrep integration driving 85% engagement.</p>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {tech.map((item, index) => (
            <Card key={item.title} className="surface-card feature-card">
              <div className="flex items-center justify-between">
                <div className="feature-icon"><item.icon className="h-5 w-5" aria-hidden="true" /></div>
                <span className="text-xs font-medium tabular-nums text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
