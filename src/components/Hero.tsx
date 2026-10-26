import { ManagedVideo } from "@/components/ManagedVideo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const Hero = () => {
  const reducedMotion = useReducedMotion();
  const handleScrollCue = () => {
    const scrollTarget = window.innerHeight * 0.85;
    window.scrollBy({ top: scrollTarget, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden bg-black text-white"
      style={{ aspectRatio: "16 / 9", maxHeight: "100vh", minHeight: "100vh" }}
      aria-labelledby="hero-title"
    >
      <h1 id="hero-title" className="sr-only">Career Maps: AI-powered career guidance and blended learning for schools</h1>
      <ManagedVideo src="/hero-background.mp4" poster="/hero-poster.jpg" label="Career Maps introduction" eager className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      <button
        type="button"
        onClick={handleScrollCue}
        aria-label="Scroll down"
        className="group absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-md transition-all group-hover:bg-white/30">
          <svg className="h-5 w-5 motion-safe:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 10l6 6 6-6" />
          </svg>
        </span>
      </button>
    </section>
  );
};
