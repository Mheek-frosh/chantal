"use client";

import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  ["1:1", "Personalized Guidance"],
  ["4", "Stages in the ShapeHaus Method"],
  ["360°", "Whole-Body Approach"],
  ["All", "Levels Welcomed"],
] as const;

export function Results() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section results" aria-labelledby="results-title">
      <div className="page-width results-grid">
        <div className="results-intro">
          <p className="eyebrow">Meaningful Progress</p>
          <h2 id="results-title">Progress you can feel in everyday life.</h2>
          <p>Our shared goals often include steadier movement, improved body awareness, stronger foundations, greater mobility, and renewed confidence. Your path and pace remain individual.</p>
        </div>
        <div className="metrics-grid">
          {metrics.map(([value, label], index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08, duration: .6 }}>
              <strong>{value}</strong><span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

