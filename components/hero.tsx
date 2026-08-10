"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { IMAGE_ASSETS } from "@/lib/constants";
import { ConsultationTrigger } from "@/components/ui/consultation-trigger";

const CREDIBILITY = ["Personalized Plans", "Expert-Guided Movement", "Private, Supportive Care"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section id="top" ref={ref} className="hero-shell" aria-labelledby="hero-title">
      <motion.div className="hero-image" style={reduceMotion ? undefined : { y: imageY }}>
        <Image
          src={IMAGE_ASSETS.guided}
          alt="A coach guiding a woman through controlled reformer movement in a bright studio"
          fill
          priority
          sizes="100vw"
          className="cover-image"
        />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-content page-width">
        <motion.p className="eyebrow eyebrow-light" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .95, duration: .6 }}>Premium Recovery &amp; Core Wellness</motion.p>
        <h1 id="hero-title" className="hero-title">
          {["Come Back", "To Your Strength."].map((line, index) => (
            <span className="hero-line-mask" key={line}>
              <motion.span
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: .85 + index * .13, ease: [0.22, 1, 0.36, 1] }}
              >{line}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.18, duration: .7 }}>
          Personalized postpartum recovery, core restoration, and whole-body revitalization for women and men—guided with care, precision, and purpose.
        </motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.32, duration: .7 }}>
          <ConsultationTrigger className="button button-accent" />
          <a href="#method" className="button button-ghost-light">Discover the ShapeHaus Method <ArrowDown className="button-arrow" size={17} /></a>
        </motion.div>
        <motion.ul className="hero-credibility" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.52, duration: .7 }}>
          {CREDIBILITY.map((item) => <li key={item}><span />{item}</li>)}
        </motion.ul>
      </div>
      <motion.aside className="hero-quote" initial={reduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.55, duration: .8 }}>
        <ArrowUpRight size={19} />
        <p>Recovery is not about returning to who you were. It is about building what comes next.</p>
      </motion.aside>
    </section>
  );
}

