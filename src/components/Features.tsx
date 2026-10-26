import { Brain, Users, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Guidance",
    description: "Personalized career recommendations based on interests, skills, and real-time job market data.",
  },
  {
    icon: Users,
    title: "Blended Learning",
    description: "Seamless integration of online and offline resources for comprehensive educational support.",
  },
  {
    icon: TrendingUp,
    title: "Career Mapping",
    description: "Visual career pathways showing realistic steps from current position to dream careers.",
  },
  {
    icon: Zap,
    title: "Real-Time Mentorship",
    description: "Connect with experienced mentors and counselors for guidance at every step of your journey.",
  }
];

export const Features = () => {
  return (
    <section className="editorial-section editorial-section--muted" aria-labelledby="features-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">The platform</p>
            <h2 id="features-title" className="section-title">Clarity at every step.<br />Support that stays.</h2>
          </div>
          <p className="section-intro">One connected platform for career discovery, purposeful learning, and the guidance students need to move forward.</p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={feature.title} className="surface-card feature-card">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="feature-icon"><feature.icon className="h-5 w-5" aria-hidden="true" /></div>
                <span className="text-xs font-medium tabular-nums text-slate-500">0{index + 1}</span>
              </div>
              {/* Content */}
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-600">{feature.description}</p>
              {/* Hover Effect Overlay */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
