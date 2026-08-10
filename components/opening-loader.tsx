"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark, Wordmark } from "@/components/ui/brand-mark";

export function OpeningLoader() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("shapehaus-loader-seen");
    if (seen || reduceMotion) return;
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("shapehaus-loader-seen", "true");
    }, 1050);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="opening-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="loader-brand">
            <BrandMark className="loader-mark" inverted />
            <Wordmark light />
          </div>
          <div className="loader-line"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .8, ease: "easeInOut" }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
