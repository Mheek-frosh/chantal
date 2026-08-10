export function TrustStrip() {
  const markers = ["Tailored Assessment", "Low-Impact Strength", "Progress-Led Care", "Inclusive Coaching"];
  return (
    <section className="trust-strip" aria-label="ShapeHaus approach">
      <div className="page-width trust-inner">
        <p>Trusted pathways for postpartum recovery, core strength, mobility, posture, and renewed vitality.</p>
        <ul>{markers.map((marker) => <li key={marker}><span />{marker}</li>)}</ul>
      </div>
    </section>
  );
}

