"use client";

import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { ReactNode } from "react";

type ConsultationTriggerProps = {
  children?: ReactNode;
  className?: string;
  iconOnly?: boolean;
};

export function ConsultationTrigger({
  children = "Book a Consultation",
  className = "button button-primary",
  iconOnly = false,
}: ConsultationTriggerProps) {
  const open = () => window.dispatchEvent(new CustomEvent("open-consultation"));

  return (
    <button
      type="button"
      className={className}
      onClick={open}
      aria-label={iconOnly ? "Book a consultation" : undefined}
    >
      {iconOnly ? <CalendarDays size={19} /> : children}
      {!iconOnly && <ArrowUpRight className="button-arrow" size={18} />}
    </button>
  );
}

