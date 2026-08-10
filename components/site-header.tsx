"use client";

import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { BrandMark, Wordmark } from "@/components/ui/brand-mark";
import { ConsultationTrigger } from "@/components/ui/consultation-trigger";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a href="#top" className="brand" aria-label="ShapeHaus home">
          <BrandMark className="brand-mark" /><Wordmark />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <ConsultationTrigger className="button button-header desktop-cta" />
          <ConsultationTrigger className="icon-button mobile-book" iconOnly />
          <button className="icon-button" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

