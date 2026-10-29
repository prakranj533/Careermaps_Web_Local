import { Card } from "@/components/ui/card";

const comparisons = [
  {
    title: "Students who never discussed goals",
    note: "Lower is better — 20% improvement",
    other: "80%",
    ours: "60%",
  },
  {
    title: "Doctor / Engineer aspirations",
    note: "High-difficulty science paths — +18% increase",
    other: "2%",
    ours: "20%",
  },
];

const initiatives = [
  { name: "Parent Meetings", detail: "Structured engagement sessions" },
  { name: "20+ Revision Classes", detail: "Extra academic reinforcement" },
  { name: "Staff IT Training", detail: "Upskilling school faculty" },
  { name: <a href="https://careermaps.live" target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Counseling Sessions</a>, detail: "Dedicated career guidance" },
];

export const ProvenResults = () => {
  return (
    <section className="editorial-section" aria-labelledby="results-title">
      <div className="section-shell">
        {/* Section Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Survey data &amp; impact</p>
            <h2 id="results-title" className="section-title">Proven results.</h2>
          </div>
          <p className="section-intro">Initial survey of Grades 5–6 comparing Career Maps (SHG) schools with other schools — the gap highlights the critical need for <a href="https://careermaps.live" target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">structured counseling</a>.</p>
        </div>

        {/* Comparison Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {comparisons.map((item) => (
            <Card key={item.title} className="surface-card p-6 md:p-10">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.note}</p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Other schools</p>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-400">{item.other}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Career Maps</p>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-emerald-900">{item.ours}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional gains */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Card className="surface-card p-6">
            <p className="text-sm text-slate-600"><span className="font-semibold text-emerald-800">+4% interest</span> in Police / Army careers</p>
          </Card>
          <Card className="surface-card p-6">
            <p className="text-sm text-slate-600"><span className="font-semibold text-emerald-800">+3% interest</span> in private company careers</p>
          </Card>
        </div>

        {/* Initiatives */}
        <Card className="mt-12 p-6 md:p-10 surface-card">
          <h3 className="text-xl font-semibold tracking-tight">School initiatives driving success</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {initiatives.map((initiative, i) => (
              <div key={i}>
                <h4 className="text-base font-semibold">{initiative.name}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{initiative.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-slate-100 pt-6 text-sm leading-6 text-slate-600">
            Schools implementing these initiatives saw significantly higher student engagement and retention rates compared to control groups.
          </p>
        </Card>
      </div>
    </section>
  );
};
