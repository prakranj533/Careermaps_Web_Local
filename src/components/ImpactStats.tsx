import { useEffect, useState } from "react";
import { ArrowUpRight, UserPlus } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const useSharedTypewriter = (maxLength: number) => {
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let delay = isDeleting ? 85 : 150;
    if (!isDeleting && progress >= maxLength) delay = 5000;
    else if (isDeleting && progress <= 0) delay = 600;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (progress < maxLength) setProgress(progress + 1);
        else setIsDeleting(true);
      } else if (progress > 0) setProgress(progress - 1);
      else setIsDeleting(false);
    }, delay);
    return () => clearTimeout(timeout);
  }, [progress, isDeleting, maxLength, reducedMotion]);

  return reducedMotion ? maxLength : progress;
};

const TypewriterBadge = ({ text, className = "", progress }: { text: string; className?: string; progress: number }) => (
  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 uppercase tracking-[0.2em] font-semibold whitespace-nowrap ${className}`} style={{ minWidth: `${text.length}ch` }}>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">{text.slice(0, Math.min(progress, text.length)) || "\u00A0"}</span>
    <span aria-hidden="true" className="block w-[2px] h-4 bg-current motion-safe:animate-pulse" />
  </span>
);

export const ImpactStats = () => {
  const sharedProgress = useSharedTypewriter(13);

  return (
    <section className="relative border-y border-border/40 overflow-hidden" aria-label="School partnerships">
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('/impact-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-white/5" />
      <div className="relative container px-6 py-14 mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-white">
        <div />
        <div className="flex-1 grid gap-6 sm:grid-cols-2">
          <div className="p-4 rounded-3xl border border-white/30 bg-white/10 backdrop-blur-md sm:col-start-2 sm:justify-self-end sm:w-[365px] sm:ml-auto">
            <div className="flex items-center gap-3 text-amber-200 font-semibold uppercase tracking-[0.3em] text-xs">
              <UserPlus className="w-5 h-5" aria-hidden="true" />Partner with us
            </div>
            <p className="text-sm text-white/90 mt-3 font-semibold tracking-[0.08em] flex flex-wrap items-center gap-1" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              <span>Looking to bring</span>
              <span className="flex items-center gap-1"><TypewriterBadge text="SMART CLASSES" className="bg-white/20 text-white" progress={sharedProgress} /><span className="whitespace-nowrap">&amp;</span></span>
              <span className="basis-full h-0" aria-hidden="true" />
              <span>AI guided journeys to your</span>
              <TypewriterBadge text="SCHOOLS" className="bg-white/15 text-amber-200" progress={sharedProgress} />
              <span>?</span>
            </p>
            <a href="https://wa.me/918971890397" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
              Contact us on WhatsApp <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
