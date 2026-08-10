import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IMAGE_ASSETS } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

const pathways = [
  {
    number: "01",
    title: "Postpartum Recovery",
    copy: "Rebuild connection, stability, and confidence through progressive, professionally guided movement designed for life after birth.",
    cta: "Explore Postpartum Care",
    href: "#postpartum",
    image: IMAGE_ASSETS.postpartum,
    alt: "A mother sharing a calm moment with her baby during postpartum recovery",
  },
  {
    number: "02",
    title: "Core & Body Revitalization",
    copy: "For women and men ready to improve core strength, mobility, posture, energy, and everyday performance.",
    cta: "Explore Revitalization",
    href: "#programs",
    image: IMAGE_ASSETS.man,
    alt: "A man performing controlled Pilates ring core work",
  },
] as const;

export function Pathways() {
  return (
    <section className="section pathways" aria-labelledby="pathways-title">
      <div className="page-width">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">Built Around Your Body</p><h2 id="pathways-title">Different bodies. Different chapters.</h2></div>
          <p>One intelligent approach—shaped around your history, your comfort, and the life you want to move through.</p>
        </Reveal>
        <div className="pathway-grid">
          {pathways.map((pathway, index) => (
            <Reveal key={pathway.title} className="pathway-card" delay={index * .1}>
              <a href={pathway.href} aria-label={pathway.cta}>
                <div className="pathway-image">
                  <Image src={pathway.image} alt={pathway.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="cover-image" />
                  <span className="pathway-number">{pathway.number}</span>
                </div>
                <div className="pathway-copy">
                  <h3>{pathway.title}</h3>
                  <p>{pathway.copy}</p>
                  <span className="text-link">{pathway.cta}<ArrowUpRight size={17} /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

