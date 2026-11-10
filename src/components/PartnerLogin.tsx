import { LayoutDashboard, BarChart3, Users, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  { icon: BarChart3, label: "Attendance & performance analytics" },
  { icon: Users, label: "Student & class monitoring" },
  { icon: LayoutDashboard, label: "Real-time engagement tracking" },
];

export const PartnerLogin = () => {
  return (
    <section className="editorial-section" aria-labelledby="partner-title">
      <div className="section-shell">
        <Card className="p-6 md:p-12 bg-gradient-secondary text-white border-0">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="section-kicker text-white/70">Add a partner</p>
              <h2 id="partner-title" className="section-title text-white">Already partnered?<br />Log in to your dashboard.</h2>
              <p className="mt-6 text-white/80 leading-7">Every partner school and college gets a live analytics dashboard — track student engagement, attendance, and learning outcomes all in one place.</p>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm text-white/85">
                    <f.icon className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <div className="feature-icon bg-white/15"><Handshake className="h-5 w-5" aria-hidden="true" /></div>
              <h3 className="mt-6 text-xl font-semibold">Partner Portal</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">Sign in with your partner account to check all your institution's activities on the Career Maps dashboard.</p>
              <div className="mt-8 flex flex-col gap-3">
                <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-white/90" asChild>
                  <a href="https://careermaps-b953d.web.app/" target="_blank" rel="noreferrer">Log in to your dashboard</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10" asChild>
                  <a href="https://wa.me/918971890397" target="_blank" rel="noreferrer">Become a partner</a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
