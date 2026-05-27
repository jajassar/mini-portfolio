/* Project 01 — LP Vetting Automation. */

const LP_VETTING_SPEC = {
  lanes: [
    {
      label: "Input",
      nodes: [
        { id: "slack-in",     label: "Slack: URL posted",       kind: "io" },
        { type: "edge" },
        { id: "ack",          label: "Ack reply",                kind: "io" },
        { type: "edge" },
        { id: "qual-report",  label: "AI qualification report",  kind: "llm" },
      ],
    },
    {
      label: "Fan-out",
      branch: true,
      nodes: [
        { id: "sosl",         label: "SOSL fuzzy search",        kind: "det" },
        { type: "edge" },
        { id: "sf-account",   label: "Update / create SF account", kind: "det" },
      ],
    },
    {
      branch: true,
      nodes: [
        { id: "rocket",       label: "RocketReach search",       kind: "det" },
        { type: "edge" },
        { id: "profile",      label: "Profile lookup",           kind: "det" },
        { type: "edge" },
        { id: "sf-contact",   label: "Create SF contact",        kind: "det" },
      ],
    },
    {
      label: "Output",
      nodes: [
        { id: "post-table",   label: "Post contacts table → Slack", kind: "io" },
      ],
    },
  ],
};

function ProjectLPVetting() {
  return (
    <section id="project-01">
      <div className="wrap">
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, marginBottom: 40 }}>
          <div>
            <span className="t-eyebrow"><span className="dot"></span>Project 01</span>
            <h2 className="t-h2" style={{ marginTop: 16 }}>LP vetting,<br/>automated.</h2>
          </div>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 10 }}>The problem</div>
            <p className="t-lead" style={{ marginBottom: 28 }}>
              The Investor Relations team spent ~1 hour per LP manually researching and logging
              to Salesforce, 10&ndash;20 times a week. Inconsistent depth, no audit trail, high cost.
            </p>
            <div className="t-eyebrow" style={{ marginBottom: 10 }}>The solution</div>
            <p style={{ color: "var(--fg-2)", fontSize: 19, lineHeight: 1.55 }}>
              An AI qualification workflow evaluates sector fit, capital signals, and strategic
              alignment, integrated directly into Slack and Salesforce to minimize operational
              friction. Ambiguous cases flag for analyst review before any record is written.
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 22 }}>
              {["n8n", "Anthropic API", "Salesforce", "RocketReach", "Slack"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <Workflow title="How it works · LP Vetting Pipeline" spec={LP_VETTING_SPEC} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56 }}>
          <ImpactList
            title="Operational impact"
            items={[
              "Reduced LP research from ~1 hour to <1 minute",
              "Standardized qualification depth across the Investor Relations team",
              "Centralized institutional knowledge directly in Salesforce",
              "Eliminated manual data entry and duplicate account creation",
            ]}
          />
          <ImpactList
            title="Reliability & safeguards"
            items={[
              "Salesforce fuzzy matching before account creation, to prevent duplicate entities",
              "Structured outputs written to normalized fields for downstream reporting and auditability",
              "Accounts with insufficient data are flagged for human review",
            ]}
          />
        </div>

        <div className="card" style={{ marginTop: 40, padding: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 8 }}>My role</div>
            <p style={{ margin: 0, color: "var(--fg-2)", maxWidth: 720 }}>
              Designed the architecture, wrote the qualification prompt calibrated to Fund IV thesis,
              configured all integrations, and shipped end-to-end. Iterated prompt logic through
              analyst feedback to reduce false positives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactList({ title, items }) {
  return (
    <div>
      <div className="t-eyebrow" style={{ marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 19, lineHeight: 1.5, color: "var(--fg-2)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)", marginTop: 9, flex: "0 0 6px" }}></span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.ProjectLPVetting = ProjectLPVetting;
window.ImpactList = ImpactList;
