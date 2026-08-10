type BrandMarkProps = {
  className?: string;
  inverted?: boolean;
};

export function BrandMark({ className = "", inverted = false }: BrandMarkProps) {
  const stroke = inverted ? "currentColor" : "currentColor";
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.5 9.5C27 3.5 11.5 8 12.2 17.4c.7 9.2 22.5 3.7 22.7 13.5.2 8-12.7 11.8-23.4 6.1"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M31.5 12.5c-8.3-3.4-15.1.2-14.8 5.8.5 7.3 15.2 4.2 15.6 11.9.3 5.3-7.2 7.9-14 5.3"
        stroke={stroke}
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity=".62"
      />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark ${light ? "wordmark-light" : ""}`}>ShapeHaus</span>
  );
}

