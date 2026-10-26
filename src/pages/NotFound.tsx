import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page not found | Career Maps";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.append(robots);
    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, []);

  return (
    <main className="editorial-section min-h-screen flex items-center">
      <div className="section-shell">
        <p className="section-kicker">404 / Career Maps</p>
        <h1 className="section-title">This page isn’t here.</h1>
        <p className="section-intro mt-6">The address may have changed. Head back to explore Career Maps.</p>
        <Link to="/" className="mt-6 inline-block font-semibold underline underline-offset-4">Return to home</Link>
      </div>
    </main>
  );
};

export default NotFound;
