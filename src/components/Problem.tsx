import { useEffect, useState } from "react";
import { AlertCircle, Target, Lightbulb } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Card } from "@/components/ui/card";
import { ManagedVideo } from "@/components/ManagedVideo";

const TypewriterLine = ({ text, delay = 0, speed = 45, className = "", cursorClassName = "" }: { text: string; delay?: number; speed?: number; className?: string; cursorClassName?: string }) => {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        index += 1;
        setProgress(index);
        if (index >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [text, delay, speed, reducedMotion]);
  const complete = reducedMotion || progress >= text.length;
  return (
    <span className="inline-flex items-end gap-2">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={`font-handwriting tracking-[0.05em] ${className}`}>{reducedMotion ? text : text.slice(0, progress)}</span>
      <span aria-hidden="true" className={`block w-[2px] bg-white ${cursorClassName} ${complete ? "opacity-0" : "opacity-100 motion-safe:animate-blink"}`} />
    </span>
  );
};

const challenges = [
  "Limited access to career counseling resources",
  "Students lack understanding of available career paths",
  "No personalized guidance based on individual strengths",
  "Disconnect between education and real-world opportunities",
];

export const Problem = () => {
  const headingText = "The Reality for Small Schools";
  const headingDelay = 200;
  const headingSpeed = 55;
  const bulletSpeed = 40;
  let nextDelay = headingDelay + headingText.length * headingSpeed + 400;
  const bulletTimings = challenges.map((text) => {
    const delay = nextDelay;
    nextDelay += text.length * bulletSpeed + 400;
    return { text, delay };
  });
  return (
    <section className="editorial-section" aria-labelledby="challenge-title">
      <div className="section-shell">
        {/* Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">The challenge</p>
            <h2 id="challenge-title" className="section-title">Potential needs direction.</h2>
          </div>
          <p className="section-intro">Our research shows that 80% of students from underserved communities have never discussed their career goals.</p>
        </div>
        {/* Stats Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {[
            { value: "80%", label: "Never Discussed Goals", icon: Target },
            { value: "60%", label: "Unrealistic Expectations", icon: AlertCircle },
            { value: "95%", label: "Need Proper Guidance", icon: Lightbulb },
          ].map((stat) => (
            <Card key={stat.label} className="surface-card p-7 md:p-9">
              <div className="feature-icon"><stat.icon className="h-5 w-5" aria-hidden="true" /></div>
              <div className="mt-7 text-5xl font-semibold tracking-tight text-emerald-900">{stat.value}</div>
              <div className="mt-3 text-sm font-medium text-slate-600">{stat.label}</div>
            </Card>
          ))}
        </div>
        <div className="h-4 md:h-8" />
        {/* Problem Statement */}
        <Card className="p-6 md:p-12 bg-gradient-secondary text-white border-0 motion-safe:animate-scale-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <TypewriterLine text={headingText} delay={headingDelay} speed={headingSpeed} className="text-4xl md:text-5xl font-bold text-white" cursorClassName="h-[1.6em] bg-accent" />
              <ul className="space-y-5 text-white/80">
                {bulletTimings.map(({ text, delay }) => (
                  <li key={text} className="flex items-start gap-3 min-h-[1.75rem]">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                    <TypewriterLine text={text} delay={delay} speed={bulletSpeed} className="text-lg md:text-xl text-white/90" cursorClassName="h-[1.2em] bg-accent/80" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <ManagedVideo src="/problem-highlight.mp4" poster="/problem-poster.jpg" label="School guidance illustration" className="aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/20" />
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-20 -z-10" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
