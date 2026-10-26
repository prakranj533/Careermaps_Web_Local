import { ManagedVideo } from "@/components/ManagedVideo";

export const CareerPs = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black" aria-labelledby="overview-title">
      <h2 id="overview-title" className="sr-only">Career Maps platform overview</h2>
      <p className="sr-only">Career discovery, classroom learning, and personal guidance help students plan their next steps.</p>
      <ManagedVideo src="/overview-optimized.mp4" poster="/overview-poster.jpg" label="Career Maps platform overview" className="absolute inset-0" />
    </section>
  );
};
