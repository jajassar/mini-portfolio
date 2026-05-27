/* Closing sections — Impact summary + Mental Model + Footer. */

function Impact() {
  return (
    <section id="impact">
      <div className="wrap">
        <div className="reveal">
          <span className="t-eyebrow"><span className="dot"></span>Impact</span>
          <h2 className="t-h2" style={{ marginTop: 16, maxWidth: 720 }}>
            Beyond time saved: this is how investment operations actually changed.
          </h2>
        </div>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 40 }}>
          <ImpactCard
            n="01"
            title="More inbound, same headcount"
            body="Partners review substantially more opportunities without increasing analyst bandwidth."
          />
          <ImpactCard
            n="02"
            title="Institutional knowledge → operational"
            body="Qualification moved from institutional knowledge to repeatable systems."
          />
          <ImpactCard
            n="03"
            title={<>Auditable<br/>decisions</>}
            body="Created auditable investment decision infrastructure where none previously existed."
          />
        </div>
      </div>
    </section>
  );
}

function ImpactCard({ n, title, body }) {
  return (
    <div className="card" style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 12, minHeight: 220, position: "relative", overflow: "hidden" }}>
      <span className="t-mono" style={{ color: "var(--fg-3)" }}>{n}</span>
      <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.15, marginTop: "auto" }}>{title}</div>
      <p style={{ margin: 0, color: "var(--fg-2)", fontSize: 19, lineHeight: 1.5 }}>{body}</p>
    </div>
  );
}

function MentalModel() {
  const principles = [
    "Deterministic systems should handle objective decisions; LLMs should handle ambiguity.",
    "Human trust matters most.",
    "Embed workflows into existing operational surfaces to drive adoption.",
    "Ambiguous cases should route to human review, not false negatives.",
  ];
  return (
    <section id="principles" style={{ background: "var(--paper)", color: "white" }}>
      <div className="wrap wrap--narrow">
        <span className="t-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
          <span className="dot"></span>Mental model
        </span>
        <h2 className="t-h2" style={{ marginTop: 16, color: "white" }}>
          Operational principles for <span className="t-serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>AI systems.</span>
        </h2>
        <ol className="reveal-stagger" style={{ listStyle: "none", padding: 0, margin: "48px 0 0", display: "flex", flexDirection: "column", gap: 0 }}>
          {principles.map((p, i) => (
            <li key={i} style={{ padding: "22px 0", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", gap: 28, alignItems: "baseline" }}>
              <span className="t-mono" style={{ color: "rgba(255,255,255,0.5)", flex: "0 0 36px" }}>0{i + 1}</span>
              <span style={{ fontSize: 22, fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{p}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="contact" style={{ paddingBottom: 64 }}>
      <div className="wrap">
        <div style={{ padding: "64px 0 40px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end" }}>
          <div>
            <span className="t-eyebrow"><span className="dot"></span>Contact</span>
            <div className="t-h2" style={{ marginTop: 16 }}>
              Building something that needs an <span className="t-serif" style={{ fontStyle: "italic", backgroundImage: "linear-gradient(180deg, transparent 12%, #E3FE57 12%, #E3FE57 92%, transparent 92%)", padding: "0 0.12em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>operator-shaped</span> PM?
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
              <a className="link-arrow" href="mailto:jessica.amar.shah@gmail.com">jessica.amar.shah@gmail.com <span className="arrow">→</span></a>
              <a className="link-arrow" href="https://www.linkedin.com/in/jessicaashah/" target="_blank" rel="noreferrer">LinkedIn <span className="arrow">↗</span></a>
              <a className="link-arrow" href="https://github.com/jajassar" target="_blank" rel="noreferrer">GitHub <span className="arrow">↗</span></a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, display: "flex", justifyContent: "space-between", color: "var(--fg-3)", fontSize: 12 }}>
          <span className="t-mono">© 2026 Jessica Shah</span>
          <span className="t-mono">Builder PM · VC operations</span>
        </div>
      </div>
    </section>
  );
}

window.Impact = Impact;
window.MentalModel = MentalModel;
window.Footer = Footer;
