"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { BrandMark, Wordmark } from "@/components/ui/brand-mark";
import { ConsultationTrigger } from "@/components/ui/consultation-trigger";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const panel = closeRef.current?.closest("[role='dialog']");
        const nodes = panel?.querySelectorAll<HTMLElement>('a, button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="mobile-menu-top">
            <a href="#top" className="brand brand-light" onClick={onClose}>
              <BrandMark className="brand-mark" inverted /><Wordmark light />
            </a>
            <button ref={closeRef} className="icon-button icon-button-light" onClick={onClose} aria-label="Close menu"><X /></button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .08 + index * .06 }}
              >
                <span>0{index + 1}</span>{link.label}
              </motion.a>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <p>Personalized recovery and intelligent strength for women and men.</p>
            <ConsultationTrigger className="button button-accent button-wide" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

