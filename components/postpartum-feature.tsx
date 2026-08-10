import Image from "next/image";
import { Check } from "lucide-react";
import { IMAGE_ASSETS } from "@/lib/constants";
import { ConsultationTrigger } from "@/components/ui/consultation-trigger";
import { Reveal } from "@/components/ui/reveal";

const features = [
  "Deep core and breath reconnection",
  "Pelvic stability and postural support",
  "Gentle return to functional strength",
  "Progressive movement matched to your stage",
  "Supportive sessions without comparison or pressure",
];

export function PostpartumFeature() {
  return (
    <section id="postpartum" className="section postpartum" aria-labelledby="postpartum-title">
      <div className="page-width postpartum-grid">
        <Reveal className="postpartum-visual">
          <div className="postpartum-main-image">
            <Image src={IMAGE_ASSETS.woman} alt="A woman moving calmly in a warm, neutral studio" fill sizes="(max-width: 900px) 100vw, 48vw" className="cover-image" />
          </div>
          <div className="postpartum-note-card"><span>Care over pressure</span><strong>Your pace is part of the plan.</strong></div>
        </Reveal>
        <Reveal className="postpartum-content" delay={.08}>
          <p className="eyebrow">The Postpartum Chapter</p>
          <h2 id="postpartum-title">Recovery deserves more than “bounce back.”</h2>
          <p className="lead">Your body has done extraordinary work. ShapeHaus supports a thoughtful return to strength through breath, deep-core reconnection, mobility, posture, and progressive movement—at a pace that respects your experience.</p>
          <ul className="feature-list">{features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
          <div className="medical-note"><span>Important note</span><p>Postpartum programs begin after appropriate medical clearance and do not replace individualized medical or pelvic-health care.</p></div>
          <ConsultationTrigger className="button button-primary">Talk to a Recovery Specialist</ConsultationTrigger>
        </Reveal>
      </div>
    </section>
  );
}

