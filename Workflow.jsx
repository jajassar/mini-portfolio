/* ========================================================================
   Workflow.jsx — animated workflow diagram.
   <Workflow title spec={...} /> renders a multi-lane node graph that
   plays through sequentially when scrolled into view, with pause/play/restart.
   ======================================================================== */

function Workflow({ title, spec, autoplay = true }) {
  // spec is an array of "steps". Each step has an id and references which
  // nodes are active at that step. We pre-flatten to a list of node ids and
  // step through them.
  const allNodeIds = React.useMemo(() => {
    const ids = [];
    spec.lanes.forEach((lane) => {
      lane.nodes.forEach((n) => {
        if (n.type !== "edge" && n.id) ids.push(n.id);
      });
    });
    return ids;
  }, [spec]);

  const [stepIdx, setStepIdx]   = React.useState(0);  // -1 = idle, 0..N = current
  const [playing, setPlaying]   = React.useState(false);
  const [activated, setActivated] = React.useState(false); // has it ever started?
  const rootRef = React.useRef(null);

  // Kick off when scrolled into view
  React.useEffect(() => {
    if (!autoplay || activated) return;
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActivated(true);
          setPlaying(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [autoplay, activated]);

  // Step advance loop
  React.useEffect(() => {
    if (!playing) return;
    if (stepIdx >= allNodeIds.length) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStepIdx((s) => s + 1), 900);
    return () => clearTimeout(t);
  }, [playing, stepIdx, allNodeIds.length]);

  const stateFor = (id) => {
    if (!activated) return "idle";
    const pos = allNodeIds.indexOf(id);
    if (pos < stepIdx - 1) return "done";
    if (pos === stepIdx - 1) return "active";
    return "idle";
  };

  const restart = () => {
    setStepIdx(0);
    setPlaying(true);
  };

  const togglePlay = () => {
    if (stepIdx >= allNodeIds.length) {
      restart();
    } else {
      setPlaying((p) => !p);
    }
  };

  return (
    <div className="wf" ref={rootRef}>
      <div className="wf__head">
        <span className="wf__title">{title}</span>
        <div className="wf__controls">
          <span className="wf__progress">
            {Math.min(stepIdx, allNodeIds.length)} / {allNodeIds.length}
          </span>
          <button className="wf__btn" onClick={restart} aria-label="Restart">↻</button>
          <button className="wf__btn wf__btn--primary" onClick={togglePlay}>
            {playing ? "Pause" : (stepIdx >= allNodeIds.length ? "Replay" : "Play")}
          </button>
        </div>
      </div>

      <div className="wf__canvas-wrap">
        <div className="wf__canvas">
          {spec.lanes.map((lane, li) => (
            <div key={li} className={"lane " + (lane.branch ? "lane--branch" : "")}>
              {lane.label && <div className="lane__label">{lane.label}</div>}
              {lane.nodes.map((n, ni) => {
                if (n.type === "edge") return <span key={ni} className="edge"></span>;
                if (n.type === "outcome") {
                  return (
                    <div key={ni} className="outcome">
                      <span className="outcome__label">{n.label}</span>
                      <span className="outcome__value">{n.value}</span>
                    </div>
                  );
                }
                const state = stateFor(n.id);
                const kindClass = n.kind ? `node--${n.kind}` : "";
                const stateClass = `is-${state}`;
                return (
                  <span key={ni} className={`node ${kindClass} ${stateClass}`}>
                    {n.label}
                    {n.kind && n.kind !== "io" && (
                      <span className="node__kind">
                        {n.kind === "llm" ? "LLM" : n.kind === "det" ? "DET" : n.kind === "human" ? "HUMAN" : n.kind}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="wf__legend">
        <span className="wf__legend-item"><span className="wf__legend-chip wf__legend-chip--llm"></span>LLM judgment</span>
        <span className="wf__legend-item"><span className="wf__legend-chip wf__legend-chip--det"></span>Deterministic</span>
        <span className="wf__legend-item"><span className="wf__legend-chip wf__legend-chip--human"></span>Human checkpoint</span>
        <span className="wf__legend-item"><span className="wf__legend-chip wf__legend-chip--io"></span>I/O surface</span>
      </div>
    </div>
  );
}

window.Workflow = Workflow;
