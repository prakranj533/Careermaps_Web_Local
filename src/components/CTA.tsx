import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="editorial-section contact-section" aria-labelledby="contact-title">
      {/* Animated Background */}
      <div className="section-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <p className="section-kicker">Let’s work together</p>
            <h2 id="contact-title" className="section-title">A clearer future starts<br />with a conversation.</h2>
            <p className="section-intro mt-6">Tell us about your school. We’ll explore how career guidance and blended learning can support your students.</p>
          </div>
          <div className="contact-panel">
            <h3 className="text-xl font-semibold">Bring CareerMaps to your school</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">Connect with our team to discuss your needs or arrange a walkthrough of the platform.</p>
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <Button size="lg" className="contact-button contact-button--primary" asChild>
                <a href="https://wa.me/918971890397" target="_blank" rel="noreferrer">
                  Talk to our team <ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="contact-button contact-button--secondary" asChild>
                <a href="mailto:contact@careermaps.com?subject=CareerMaps%20demo%20request">
                  Request a demo <ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            {/* Contact Options */}
            <div className="mt-8 space-y-4 border-t border-white/20 pt-6 text-sm">
              <a href="mailto:contact@careermaps.com" className="contact-link"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" />contact@careermaps.com</a>
              <a href="tel:+918971890397" className="contact-link"><Phone className="h-4 w-4 shrink-0" aria-hidden="true" />+91 89718 90397</a>
            </div>
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="mt-14 border-t border-white/20 pt-6 text-sm text-white/70">
          {/* <div className="text-lg font-semibold">CASHPOR</div> */}
          Career guidance. Blended learning. Lasting opportunities.
        </div>
      </div>
    </section>
  );
};
