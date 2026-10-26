import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Glory Jain",
    role: "CEO & Co-Founder",
    education: "Masters in Computer Application",
    experience: [
      "Years of IT experience across different countries",
      "Strategy & Product Head at EduQuest"
    ]
  },
  {
    name: "Vikash Ranjan",
    role: "CTO",
    education: "15 years in AI & Blockchain",
    experience: [
      "Previously at Redmart, OCBC Bank & Affinidi",
      "Expert in building AI products"
    ]
  },
  {
    name: "B. Harshvardhan",
    role: "Director of Education",
    education: "IIT Madras & IISc Bangalore Alumnus",
    experience: [
      "10+ years of JEE teaching experience",
      "Research in Biotech & Mathematics"
    ]
  }
];

export const Team = () => {
  return (
    <section className="editorial-section" aria-labelledby="team-title">
      <div className="section-shell">
        {/* Header */}
        <div className="section-heading">
          <div>
            <p className="section-kicker">Our people</p>
            <h2 id="team-title" className="section-title">Experience with purpose.</h2>
          </div>
          <p className="section-intro">A team bringing together experience in education, technology, and operations to build better opportunities for students.</p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="surface-card team-card">
              {/* Avatar Placeholder */}
              <div className="team-monogram" aria-hidden="true">
                {member.name.split(" ").map((part) => part.charAt(0)).slice(0, 2).join("")}
              </div>
              {/* Info */}
              <div className="mt-8">
                <p className="section-kicker">{member.role}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-slate-700">{member.education}</p>
                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {member.experience.map((experience) => (
                    <li key={experience} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-emerald-700" aria-hidden="true" />
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
              {/* LinkedIn Icon */}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Experience across education and technology</p>
          <p className="text-sm font-medium text-slate-700">Built for schools. Focused on students.</p>
        </div>
      </div>
    </section>
  );
};
