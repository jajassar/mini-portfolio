/* Project 02 — Deal Scoring Engine. */

const DEAL_SCORING_SPEC = {
  lanes: [
    {
      label: "Layer 1",
      nodes: [
        { id: "bigquery",    label: "BigQuery: geo + scope SQL",  kind: "det" },
        { type: "edge" },
        { id: "scope-fit",   label: "Scope fit evaluation",       kind: "llm" },
        { type: "edge" },
        { id: "gate",        label: "Pass / review / fail",       kind: "human" },
      ],
    },
    {
      label: "Layer 2",
      nodes: [
        { id: "agent-session", label: "Claude Managed Agent session", kind: "llm" },
      ],
    },
    {
      branch: true,
      nodes: [
        { id: "team-quality",  label: "Founding team quality",    kind: "llm" },
      ],
    },
    {
      branch: true,
      nodes: [
        { id: "thesis-fit",    label: "Thesis fit",               kind: "llm" },
      ],
    },
    {
      branch: true,
      nodes: [
        { id: "uniqueness",    label: "Uniqueness",               kind: "llm" },
      ],
    },
    {
      branch: true,
      nodes: [
        { id: "syndicate",     label: "Syndicate quality",        kind: "det" },
      ],
    },
    {
      branch: true,
      nodes: [
        { id: "traction",      label: "Market traction",          kind: "det" },
      ],
    },
    {
      label: "Layer 3",
      nodes: [
        { id: "partner-brief", label: "AI: strengths · weaknesses · recommendation", kind: "llm" },
        { type: "edge" },
        { id: "write-scores",  label: "Write scores → Salesforce", kind: "det" },
      ],
    },
  ],
};

function ProjectDealScoring() {
  return (
    <section id="project-02">
      <div className="wrap">
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, marginBottom: 40 }}>
          <div>
            <span className="t-eyebrow"><span className="dot"></span>Project 02</span>
            <h2 className="t-h2" style={{ marginTop: 16 }}>Three-layer<br/>deal scoring.</h2>
          </div>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 10 }}>The problem</div>
            <p className="t-lead" style={{ marginBottom: 28 }}>
              Deal review was manual, inconsistent, and unscalable. No structured way to prioritize
              inbound; partners spent time on deals that shouldn&rsquo;t have made it past first look.
            </p>
            <div className="t-eyebrow" style={{ marginBottom: 10 }}>The solution</div>
            <p style={{ color: "var(--fg-2)", fontSize: 19, lineHeight: 1.55 }}>
              A three-layer scoring system evaluates every inbound. Binary mandate gates filter
              out-of-scope companies; a 5-dimension quality score ranks the rest; an AI-generated
              brief surfaces to partners. Designed for partner and analyst adoption within
              existing investment workflows.
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 22 }}>
              {["Claude Managed Agents", "BigQuery", "n8n", "Harmonic", "Salesforce"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Three layer summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 28 }}>
          <LayerCard num="01" name="Mandate gates"   sub="Binary pass / fail" detail="Geography fit + scope fit" />
          <LayerCard num="02" name="Quality scores"  sub="0–5 per dimension"  detail="5 dimensions, 3 LLM + 2 deterministic" />
          <LayerCard num="03" name="Partner summary" sub="Synthesis"          detail="Strengths, weaknesses, recommendation" />
        </div>

        <Workflow title="How it works · Deal Scoring Pipeline" spec={DEAL_SCORING_SPEC} />

        <div style={{ marginTop: 56 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>Design principles</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <Principle
              n="01"
              title="Deterministic where possible"
              body="Used hard logic for objective criteria (geo, stage, syndicate) to maximize consistency and auditability."
            />
            <Principle
              n="02"
              title="LLMs reserved for ambiguity"
              body="Thesis fit, founder quality, uniqueness: the qualitative calls where partners want a structured opinion."
            />
            <Principle
              n="03"
              title="Multi-dimensional, not composite"
              body="5 separate scores rather than one number, to preserve nuance and improve partner trust."
            />
            <Principle
              n="04"
              title="Score evolution tracked"
              body="Partners can see how new information changed the assessment over time."
            />
          </div>
        </div>

        <div className="card" style={{ marginTop: 40, padding: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 8 }}>My role</div>
            <p style={{ margin: 0, color: "var(--fg-2)", maxWidth: 720 }}>
              Defined the scoring methodology, separated deterministic from LLM-evaluated
              dimensions, built BigQuery geo / stage logic, designed agent prompts, and wired
              all three layers together in n8n.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerCard({ num, name, sub, detail }) {
  return (
    <div className="card" style={{ padding: 22 }}>
      <div className="t-mono" style={{ color: "var(--fg-3)" }}>{num}</div>
      <div className="t-h3" style={{ marginTop: 10 }}>{name}</div>
      <div className="t-mono" style={{ display: "inline-block", background: "var(--accent)", color: "#0A0A0A", marginTop: 8, padding: "3px 8px", borderRadius: 4, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>{sub}</div>
      <div style={{ fontSize: 13.5, color: "var(--fg-2)", marginTop: 12, lineHeight: 1.5 }}>{detail}</div>
    </div>
  );
}

function Principle({ n, title, body }) {
  return (
    <div style={{ padding: "22px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
        <span className="t-mono" style={{ color: "var(--fg-3)" }}>{n}</span>
        <div>
          <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</div>
          <p style={{ margin: "8px 0 0", color: "var(--fg-2)", fontSize: 19, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: body }}></p>
        </div>
      </div>
    </div>
  );
}

window.ProjectDealScoring = ProjectDealScoring;
window.LayerCard = LayerCard;
window.Principle = Principle;
