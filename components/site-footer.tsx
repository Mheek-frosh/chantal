import { Camera, CirclePlay } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { BrandMark, Wordmark } from "@/components/ui/brand-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand"><a href="#top" className="brand brand-light"><BrandMark className="brand-mark" inverted /><Wordmark light /></a><p>Expert-guided recovery and intelligent strength, delivered with privacy, care, and purpose.</p><div className="socials"><a href="#" aria-label="Instagram"><Camera /></a><a href="#" aria-label="YouTube"><CirclePlay /></a></div></div>
          <div className="footer-links"><div><h3>Programs</h3><a href="#postpartum">Postpartum Recovery</a><a href="#programs">Core Foundations</a><a href="#postpartum">For Women</a><a href="#programs">Private Coaching</a></div><div><h3>ShapeHaus</h3>{NAV_LINKS.slice(0, 4).map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div><div><h3>Support</h3><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a><span>{CONTACT.address}</span></div></div>
        </div>
        <div className="footer-legal"><p>ShapeHaus provides fitness, movement, and wellness services and does not replace medical diagnosis or treatment.</p><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a><span>© 2026 ShapeHaus. All rights reserved.</span></div></div>
      </div>
    </footer>
  );
}
