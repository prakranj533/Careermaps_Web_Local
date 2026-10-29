import { Wifi, FlaskConical, Presentation, Bot, Clapperboard, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Wifi,
    title: "Smart Connectivity",
    description: "Affordable Smart TV integration for internet-based curriculum.",
  },
  {
    icon: FlaskConical,
    title: "Grade 9–10 STEM",
    description: "Specialized focus on Science, English, and Mathematics.",
  },
  {
    icon: Presentation,
    title: "Live Expert Teachers",
    description: "Access to subject experts not typically available in rural schools.",
  },
  {
    icon: Bot,
    title: "Robotics & AI",
    description: "Hands-on technical workshops with revenue-sharing options.",
  },
  {
    icon: Clapperboard,
    title: "Animated Learning",
    description: "High-quality tech-enabled content and animated quizzes that boost engagement.",
  },
  {
    icon: Video,
    title: "2-Way Communication",
    description: "Video calls for real-time doubt clearing and mentorship.",
  },
];

const blended = [
  { title: "Connectivity", description: "Connecting learners to global resources and experts beyond the classroom." },
  { title: "Enhanced Dashboarding", description: "Real-time data tracking for personalized instruction and intervention." },
  { title: "Online-Offline Symbiosis", description: "Cyclical learning path leveraging both digital tools and teacher guidance." },
  { title: "Strategic Scalability", description: "Centralized digital curriculum enabling easy access across multiple schools." },
];

export const SmartClassroom = () => {
  return (
    <section className="editorial-section" aria-labelledby="smartclassroom-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">E-School solution</p>
            <h2 id="smartclassroom-title" className="section-title">A smart classroom<br />that works.</h2>
          </div>
          <p className="section-intro">Transforming traditional setups into connected learning hubs with affordable, high-impact technology — bringing the world's best teachers directly to every student.</p>
        </div>

        {/* Smart Classroom Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="surface-card feature-card">
              <div className="flex items-center justify-between">
                <div className="feature-icon"><feature.icon className="h-5 w-5" aria-hidden="true" /></div>
                <span className="text-xs font-medium tabular-nums text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Blended Learning */}
        <Card className="mt-12 p-6 md:p-10 bg-gradient-secondary text-white border-0">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div>
              <p className="section-kicker text-white/70">Supporting environment</p>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">Successful blended learning</h3>
              <p className="mt-4 text-white/80 leading-7">Combining the best of digital resources with physical classroom guidance for optimal outcomes.</p>
              <p className="mt-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">Outcome: 10x better engagement</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {blended.map((item) => (
                <div key={item.title}>
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
