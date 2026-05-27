/* Hero / intro. */

function Intro() {
  return (
    <section id="intro" style={{ paddingTop: 88, paddingBottom: 64 }}>
      <div className="wrap">
        <Nav />
        <div style={{ height: 56 }}></div>
        <span className="t-eyebrow"><span className="dot"></span>AI workflow portfolio · 2026</span>
        <h1 className="t-display" style={{ marginTop: 18 }}>
          Builder PM streamlining<br/>
          <span className="t-serif" style={{ fontStyle: "italic", color: "var(--fg-1)", backgroundImage: "linear-gradient(180deg, transparent 12%, #E3FE57 12%, #E3FE57 92%, transparent 92%)", padding: "0 0.12em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>operations</span> across<br/>
          venture capital firms.
        </h1>
        <p className="t-lead" style={{ maxWidth: 680, marginTop: 28 }}>
          I design and ship AI workflows for investment teams, turning manual research,
          deal triage, and qualification into auditable systems that partners and analysts
          actually trust.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 36, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#project-01" className="link-arrow">See the work <span className="arrow">↓</span></a>
          <span style={{ color: "var(--line-strong)" }}>·</span>
          <a href="#contact" className="link-arrow">Get in touch <span className="arrow">→</span></a>
        </div>

        {/* Quick stats strip */}
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 64 }}>
          <Stat n="~1 hr → <1 min" sub="LP research time, per record" />
          <Stat n="Deals scored" sub="for every inbound against fund thesis" />
          <Stat n="2 systems" sub="shipped end-to-end, in production" />
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 28, height: 28, borderRadius: 999, background: "var(--accent)", color: "var(--node-fg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13, letterSpacing: "-0.04em" }}>JS</span>
        <span style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>Jessica Shah</span>
      </div>
      <nav style={{ display: "flex", gap: 24, fontSize: 14, color: "var(--fg-2)" }}>
        <a href="#project-01" className="hover-ink">Work</a>
        <a href="#impact" className="hover-ink">Impact</a>
        <a href="#principles" className="hover-ink">Principles</a>
        <a href="#contact" className="hover-ink">Contact</a>
      </nav>
    </header>
  );
}

function Stat({ n, sub }) {
  return (
    <div style={{ padding: "20px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{n}</div>
      <div style={{ fontSize: 16, color: "var(--fg-2)", marginTop: 6 }}>{sub}</div>
    </div>
  );
}

window.Intro = Intro;
