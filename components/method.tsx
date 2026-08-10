"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  ["Understand", "Personal consultation, goals, history, movement patterns, and current comfort level."],
  ["Reconnect", "Breath, alignment, mobility, and deep-core awareness."],
  ["Rebuild", "Progressive strength and stability with precise coaching."],
  ["Revitalize", "Sustainable movement, confidence, energy, and everyday resilience."],
] as const;

export function Method() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="method" ref={ref} className="section method" aria-labelledby="method-title">
      <div className="page-width">
        <p className="eyebrow eyebrow-sage">The ShapeHaus Method</p>
        <h2 id="method-title">Assess. Restore.<br />Strengthen. <em>Revitalize.</em></h2>
        <div className="method-steps">
          <div className="method-line"><motion.span style={reduceMotion ? { scaleX: 1 } : { scaleX: scale }} /></div>
          {steps.map(([title, copy], index) => (
            <motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .5 }}
              transition={{ delay: index * .08, duration: .65 }}
            >
              <span className="step-number">0{index + 1}</span>
              <h3>{title}</h3><p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

