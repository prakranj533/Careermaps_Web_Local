import { useEffect, useRef, useState } from "react";

export const SignatureSection = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`signature-footer${isVisible ? " signature-footer--visible" : ""}`}
      aria-labelledby="signature-title"
    >
      <div className="signature-footer__brand">
        <h2 id="signature-title" className="signature-footer__title">Career Maps</h2>
      </div>
      <div className="signature-footer__details">
        <p className="signature-footer__mission">
          Empowering students with AI-powered career counseling and blended learning
          for small schools and colleges across the country.
        </p>
        <dl className="signature-footer__contacts">
          <div>
            <dt>Social Media :</dt>
            <dd>@careermaps</dd>
          </div>
          <div>
            <dt>Website :</dt>
            <dd><a href="https://careermaps.co.in/">careermaps.co.in</a></dd>
          </div>
          <div>
            <dt>Phone Number :</dt>
            <dd><a href="tel:+918971890397">+91 89718 90397</a></dd>
          </div>
        </dl>
      </div>
    </footer>
  );
};
