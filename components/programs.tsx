"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PROGRAMS, type ProgramCategory } from "@/lib/constants";

type Filter = "All" | ProgramCategory;
const filters: Filter[] = ["All", "Postpartum", "Women", "Men", "Private"];

export function Programs() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();
  const visible = filter === "All" ? PROGRAMS : PROGRAMS.filter((program) => program.categories.includes(filter));

  return (
    <section id="programs" className="section programs" aria-labelledby="programs-title">
      <div className="page-width">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Personalized Pathways</p><h2 id="programs-title">Care that meets you where you are.</h2></div>
          <p>Every program is a starting point, then shaped around your body, schedule, and goals.</p>
        </div>
        <div className="program-filters" role="tablist" aria-label="Filter programs">
          {filters.map((item) => (
            <button key={item} role="tab" aria-selected={filter === item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <motion.div className="program-grid" layout={!reduceMotion}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((program, index) => (
              <motion.article
                key={program.title}
                id={program.title === "Men’s Core Revitalization" ? "for-men" : undefined}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: .35 }}
                className="program-card"
              >
                <div className="program-card-top"><span>0{index + 1}</span><ArrowUpRight size={18} /></div>
                <h3>{program.title}</h3><p>{program.description}</p>
                <dl><div><dt>For</dt><dd>{program.audience}</dd></div><div><dt>Format</dt><dd>{program.format}</dd></div></dl>
                <button type="button" className="text-link" onClick={() => window.dispatchEvent(new CustomEvent("open-consultation"))}>Learn More<ArrowUpRight size={16} /></button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
