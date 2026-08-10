"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/constants";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="page-width faq-grid">
        <div className="faq-intro"><p className="eyebrow">Good to Know</p><h2 id="faq-title">Questions, answered with care.</h2><p>Every body and recovery story is different. Your consultation is the best place for a more personal conversation.</p></div>
        <div className="accordion">
          {FAQS.map((item, index) => {
            const expanded = open === index;
            return <div className="accordion-item" key={item.question}>
              <h3><button type="button" aria-expanded={expanded} aria-controls={`faq-panel-${index}`} id={`faq-button-${index}`} onClick={() => setOpen(expanded ? null : index)}><span>{item.question}</span>{expanded ? <Minus /> : <Plus />}</button></h3>
              <AnimatePresence initial={false}>
                {expanded && <motion.div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .32 }} className="accordion-panel"><p>{item.answer}</p></motion.div>}
              </AnimatePresence>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

