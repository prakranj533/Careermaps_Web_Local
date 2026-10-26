import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "CareerMaps helped us show each learner's readiness in a language parents instantly trust. The flow of insights feels luxe.",
    school: "Aurora Public School",
    location: "Jaipur, Rajasthan",
    board: "CBSE",
    rating: 4.9
  },
  {
    quote:
      "We replaced five spreadsheets with this single board. Counselors glide through decisions in half the time.",
    school: "Riverstone Residential",
    location: "Indore, Madhya Pradesh",
    board: "ICSE",
    rating: 4.8
  },
  {
    quote:
      "The clarity of star ratings and growth notes mean our parent reviews feel like premium product launches.",
    school: "Beacon Valley School",
    location: "Kochi, Kerala",
    board: "CBSE",
    rating: 5
  },
  {
    quote:
      "CareerMaps visualizes aspirations vs. action with so much calm. It's our north star review ritual now.",
    school: "Heritage International",
    location: "Gurugram, Haryana",
    board: "IB",
    rating: 4.85
  },
  {
    quote:
      "From scholarships to skill badges, everything scrolls in one canvas. Teachers finally feel like strategists.",
    school: "Sunrise Global",
    location: "Pune, Maharashtra",
    board: "Cambridge",
    rating: 4.95
  },
  {
    quote:
      "We projected the review wall during PTMs. Families literally applauded the data stories.",
    school: "Spruce Valley",
    location: "Shillong, Meghalaya",
    board: "State Board",
    rating: 4.75
  },
  {
    quote:
      "Admissions teams love how the cards float by cluster. It's cinematic but incredibly practical.",
    school: "Lotus World Academy",
    location: "Bengaluru, Karnataka",
    board: "IB",
    rating: 4.8
  },
  {
    quote:
      "We quantify soft skills in the same breath as academics. CareerMaps makes holistic reviews believable.",
    school: "Cedar High",
    location: "Lucknow, Uttar Pradesh",
    board: "CBSE",
    rating: 4.7
  },
  {
    quote:
      "The pacing of the wall keeps our leadership glued. Each card is like a micro keynote.",
    school: "Casa d'Or",
    location: "Goa",
    board: "State Board",
    rating: 4.9
  },
  {
    quote:
      "Counselors in small towns now share the exact same visual as metro schools. That's huge for equity.",
    school: "Evergreen Public",
    location: "Bhopal, Madhya Pradesh",
    board: "State Board",
    rating: 4.7
  },
  {
    quote:
      "We track opportunities, alumni mentors, and wellbeing nudges without feeling overwhelmed.",
    school: "Ronak Academy",
    location: "Ahmedabad, Gujarat",
    board: "CBSE",
    rating: 4.88
  },
  {
    quote:
      "Every rolling review now looks like the inspirational shot you shared. Except it's our real data.",
    school: "Northstar International",
    location: "Hyderabad, Telangana",
    board: "Cambridge",
    rating: 5
  }
];

const renderStars = (rating: number) => (
  <div className="flex items-center gap-1 text-amber-400">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${rating >= index + 1 ? "fill-current" : "fill-transparent stroke-current text-amber-200"}`}
        strokeWidth={1.5}
      />
    ))}
    <span className="text-xs font-semibold text-slate-500 ml-1">{rating.toFixed(2)}</span>
  </div>
);

const columns = Array.from({ length: 4 }, (_, columnIndex) =>
  reviews.filter((_, reviewIndex) => reviewIndex % 4 === columnIndex)
);

const columnDurations = [45, 35, 28, 35];

export const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="editorial-section editorial-section--muted" aria-labelledby="reviews-title">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="section-kicker">School perspectives</p>
          <h2 id="reviews-title" className="section-title">In their own words.</h2>
          <p className="section-intro mt-5">Perspectives on career guidance, learning, and supporting every student’s next step.</p>
        </div>

        <div className="mb-5 flex justify-end">
          <button
            type="button"
            className="reviews-motion-control text-sm font-semibold text-emerald-800 underline underline-offset-4"
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? "Resume animation" : "Pause animation"}
          </button>
        </div>
        <div className={`reviews-wall grid gap-5 sm:grid-cols-2 lg:grid-cols-4${isPaused ? " reviews-wall--paused" : ""}`}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="reviews-window">
              <div className="reviews-track" style={{ animationDuration: `${columnDurations[columnIndex]}s` }}>
                {[0, 1].map((copy) => (
                  <div key={copy} className="reviews-group" aria-hidden={copy === 1 ? true : undefined}>
                    {column.map((review) => (
                      <Card key={review.school} className="surface-card review-card">
                        {renderStars(review.rating)}
                        <blockquote className="my-7 flex-1 text-sm leading-6 text-slate-700">“{review.quote}”</blockquote>
                        <div className="border-t border-slate-100 pt-5">
                          <p className="text-sm font-semibold">{review.school}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">{review.location} · {review.board}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
