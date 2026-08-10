import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote: "I stopped measuring myself against where I was before birth. The sessions helped me feel calm, capable, and genuinely confident about moving again.",
    context: "Postpartum pathway",
  },
  {
    quote: "Years at a desk had made me disconnected from how I moved. The coaching was precise without being intimidating, and I now understand my posture and core far better.",
    context: "Men’s revitalization pathway",
  },
  {
    quote: "I wanted strength and mobility without the pressure of a conventional gym. ShapeHaus felt personal, considered, and sustainable from the first conversation.",
    context: "Core and mobility pathway",
  },
] as const;

export function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="page-width">
        <div className="testimonials-heading"><p className="eyebrow">Client Stories</p><h2 id="testimonials-title">Real people. Stronger chapters.</h2><span>Sample content · Replace with approved client stories</span></div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.context} className="testimonial-card" delay={index * .08}>
              <Quote size={25} strokeWidth={1.4} />
              <blockquote>“{item.quote}”</blockquote>
              <div><strong>Sample Client</strong><span>{item.context}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

