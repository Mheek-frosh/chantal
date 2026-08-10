import Image from "next/image";
import { IMAGE_ASSETS } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

const spaces = [
  ["Private Coaching Suites", "Room to focus, ask questions, and move without an audience."],
  ["Movement & Reformer Studio", "Considered equipment in a calm, beautifully restrained setting."],
  ["Recovery Lounge", "A soft landing before and after the work—never a rushed handover."],
] as const;

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="page-width">
        <Reveal className="experience-panel">
          <Image src={IMAGE_ASSETS.studio} alt="A serene, naturally lit Pilates and recovery studio" fill sizes="100vw" className="cover-image" />
          <div className="experience-overlay" />
          <div className="experience-copy">
            <p className="eyebrow eyebrow-light">The ShapeHaus Experience</p>
            <h2 id="experience-title">A space designed for your return.</h2>
            <p>Private attention, considered equipment, clean changing areas, and an atmosphere that restores rather than intimidates. ShapeHaus gives you room to arrive as you are—and move forward with intention.</p>
          </div>
        </Reveal>
        <div className="space-cards">
          {spaces.map(([title, copy], index) => <Reveal className="space-card" key={title} delay={index * .08}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

