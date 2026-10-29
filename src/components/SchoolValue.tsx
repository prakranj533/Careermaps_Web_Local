import { GraduationCap, IndianRupee, TrendingUp, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: GraduationCap,
    label: "Academic",
    title: "Specialized Teachers",
    description: "Access top-tier expertise often unavailable in small towns or rural regions.",
    points: ["Focus on STEM (Science, Maths) & English", "Interactive live sessions with experts"],
  },
  {
    icon: IndianRupee,
    label: "Financial",
    title: "Revenue Opportunity",
    description: "Create new revenue streams while upgrading your school's technical capabilities.",
    points: ["Revenue sharing on Robotics & AI workshops", "Hosting inter-school competitions"],
  },
  {
    icon: TrendingUp,
    label: "Impact",
    title: "Higher Engagement",
    description: "Modernize the learning experience to capture student attention effectively.",
    points: ["Animated videos & visual tech aids", "Real-time engagement tracking"],
  },
  {
    icon: Compass,
    label: "Guidance",
    title: "Mentorship & Direction",
    description: "Provide students with a clear path to their future careers.",
    points: ["Dedicated mentors for school students", "Free app-based individual career mapping"],
  },
];

export const SchoolValue = () => {
  return (
    <section className="editorial-section editorial-section--muted" aria-labelledby="schoolvalue-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Partnership benefits</p>
            <h2 id="schoolvalue-title" className="section-title">Value to<br />your school.</h2>
          </div>
          <p className="section-intro">Tangible outcomes for growth — real engagement leads to better outcomes in partner schools. Classes can even be used to train other trainers, making it a low-cost way to build smart classes.</p>
        </div>

        {/* Value Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.label} className="surface-card feature-card">
              <div className="feature-icon"><value.icon className="h-5 w-5" aria-hidden="true" /></div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{value.label}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              <ul className="mt-5 space-y-2">
                {value.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
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
