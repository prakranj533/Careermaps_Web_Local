import { useState, type FormEvent } from "react";
import { LayoutDashboard, BarChart3, Users, Handshake, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PARTNER_EMAIL = "careermaps@careermaps.co.in";

const features = [
  { icon: BarChart3, label: "Attendance & performance analytics" },
  { icon: Users, label: "Student & class monitoring" },
  { icon: LayoutDashboard, label: "Real-time engagement tracking" },
];

const PartnerForm = ({ onDone }: { onDone: () => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PARTNER_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          phone,
          _subject: "New partner enquiry — careermaps.co.in",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      onDone();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div className="space-y-2">
        <Label htmlFor="partner-name">Your name</Label>
        <Input id="partner-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="partner-phone">Phone number</Label>
        <Input id="partner-phone" required type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 …" />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Couldn't send right now — please email us directly at{" "}
          <a href={`mailto:${PARTNER_EMAIL}?subject=Partner%20enquiry`} className="font-semibold underline underline-offset-2">{PARTNER_EMAIL}</a>
        </p>
      )}
      <Button type="submit" className="w-full rounded-full" disabled={status === "sending"}>
        {status === "sending" && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
        Submit
      </Button>
    </form>
  );
};

export const PartnerLogin = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
                <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSubmitted(false); }}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">Become a partner</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Become a partner</DialogTitle>
                      <DialogDescription>Leave your name and number — our team will call you back to set up your school as an AI School.</DialogDescription>
                    </DialogHeader>
                    {submitted ? (
                      <p className="py-6 text-center text-sm text-slate-600">Thanks! We've received your details and will reach out shortly.</p>
                    ) : (
                      <PartnerForm onDone={() => setSubmitted(true)} />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
