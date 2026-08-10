import { ConsultationTrigger } from "@/components/ui/consultation-trigger";
import { Reveal } from "@/components/ui/reveal";

export function ConsultationCta() {
  return (
    <section className="consultation-section">
      <div className="page-width">
        <Reveal className="consultation-card">
          <div><p className="eyebrow eyebrow-sage">Your Next Chapter</p><h2>Start with a conversation.</h2></div>
          <div><p>Tell us where you are, how you want to feel, and what support would make the difference. We will help you find the right ShapeHaus pathway.</p><ConsultationTrigger className="button button-accent">Book Your Consultation</ConsultationTrigger></div>
        </Reveal>
      </div>
    </section>
  );
}

