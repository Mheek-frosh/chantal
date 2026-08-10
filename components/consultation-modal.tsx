"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, CheckCircle2, LoaderCircle, X } from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { consultationSchema } from "@/lib/validations";

type Errors = Record<string, string>;

const interests = ["Postpartum Recovery", "Core Strength", "Men’s Revitalization", "Mobility & Posture", "Private Coaching", "Not Sure Yet"];
const sessionTypes = ["In Studio", "Virtual", "Either"];

export function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => {
    setOpen(false);
    setStatus("idle");
    setErrors({});
  }, []);

  useEffect(() => {
    const show = () => {
      openerRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener("open-consultation", show);
    return () => window.removeEventListener("open-consultation", show);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>('a, button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", keydown);
      openerRef.current?.focus();
    };
  }, [close, open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const payload = { ...raw, consent: raw.consent === "on" };
    const parsed = consultationSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
      setErrors(fieldErrors);
      const firstField = String(parsed.error.issues[0]?.path[0] ?? "");
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/consultation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && <motion.div className="modal-backdrop" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
        <motion.div ref={dialogRef} className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" initial={reduceMotion ? false : { opacity: 0, y: 32, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .99 }} transition={{ duration: .45, ease: [0.22, 1, 0.36, 1] }}>
          <button ref={closeRef} className="modal-close" type="button" onClick={close} aria-label="Close consultation form"><X /></button>
          <div className="modal-intro"><p className="eyebrow">A Thoughtful First Step</p><h2 id="consultation-title">Let’s begin with where you are.</h2><p>No pressure, no assumptions. Share a little about what you need and we’ll help you find the most supportive next step.</p><div className="modal-promise"><span>01</span>Private and considered<br /><span>02</span>Reply within two business days<br /><span>03</span>No obligation to book</div></div>
          <div className="modal-form-wrap">
            {status === "success" ? <div className="form-success" role="status"><CheckCircle2 /><p className="eyebrow">Request Received</p><h3>Thank you for reaching out.</h3><p>We’ll review your note and get back to you within two business days with a thoughtful next step.</p><button className="button button-primary" type="button" onClick={close}>Close <ArrowLeft size={17} /></button></div> : <form onSubmit={submit} noValidate>
              <div className="form-grid">
                <Field label="Full name" name="fullName" error={errors.fullName}><input id="fullName" name="fullName" autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} /></Field>
                <Field label="Email" name="email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /></Field>
                <Field label="Phone number" name="phone" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} /></Field>
                <Field label="I am interested in" name="interest" error={errors.interest}><select id="interest" name="interest" defaultValue=""><option value="" disabled>Select a pathway</option>{interests.map((item) => <option key={item}>{item}</option>)}</select></Field>
              </div>
              <fieldset><legend>Preferred session type</legend><div className="radio-row">{sessionTypes.map((item) => <label key={item}><input type="radio" name="sessionType" value={item} /><span>{item}</span></label>)}</div>{errors.sessionType && <p className="field-error">{errors.sessionType}</p>}</fieldset>
              <Field label="Optional message" name="message" error={errors.message}><textarea id="message" name="message" rows={3} placeholder="Tell us what support would make the difference." /></Field>
              <div className="honeypot" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="company" tabIndex={-1} autoComplete="off" /></div>
              <label className="consent"><input type="checkbox" name="consent" aria-invalid={!!errors.consent} /><span>I agree that ShapeHaus may contact me about this consultation request.</span></label>{errors.consent && <p id="consent-error" className="field-error">{errors.consent}</p>}
              {status === "error" && <p className="form-status-error" role="alert">Something went wrong. Please try again or email us directly.</p>}
              <button type="submit" className="button button-primary button-wide" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin" />Sending your request…</> : "Request a Consultation"}</button>
            </form>}
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return <label className="field" htmlFor={name}><span>{label}</span>{children}{error && <small id={`${name}-error`} className="field-error">{error}</small>}</label>;
}
