import { Globe, ClipboardList, Route, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "See All Careers",
    description: "Access a vast database of career options with detailed data, descriptions, and potential trajectories on one platform.",
  },
  {
    icon: ClipboardList,
    title: "App-Based Prescriptions",
    description: "Just like a doctor's prescription — personalized recommendations for skills and courses based on each student's profile.",
  },
  {
    icon: Route,
    title: "Search Your Path",
    description: "Find the shortest path to desired goals. Similar to Google Maps, visualize the route from current skills to career success.",
  },
  {
    icon: MapPin,
    title: "Best Skill Resources",
    description: "Don't just know 'what' to learn, but 'where'. We refer the best places and institutions for acquiring specific skills.",
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
            <h2 id="features-title" className="section-title">What is Career Maps?</h2>
          </div>
          <p className="section-intro">A comprehensive app that makes careers accessible — a GPS for your student's future.</p>
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
