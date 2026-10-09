"use client";

import { useEffect, useState } from "react";

const stages = ["Input", "Correction", "Filter", "Enhancement", "Export"];
const examples = [
  { label: "Original result", start: 5, body: "The graph has already completed. Every step has a cached result." },
  { label: "Change filter", start: 2, body: "Changing the filter preserves input and correction results. The filter, enhancement, and export need to run again." },
  { label: "Change enhancement", start: 3, body: "Changing enhancement preserves the first three results. Only enhancement and export need to run again." },
];

export default function PipelineDemo() {
  const [selected, setSelected] = useState(1);
  const [progress, setProgress] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const example = examples[selected];
  const complete = progress === stages.length;

  useEffect(() => {
    if (!running || progress === null) return;
    const timer = setTimeout(() => {
      if (progress + 1 >= stages.length) {
        setProgress(stages.length);
        setRunning(false);
      } else setProgress(progress + 1);
    }, 850);
    return () => clearTimeout(timer);
  }, [running, progress]);

  function choose(index: number) {
    setSelected(index);
    setProgress(null);
    setRunning(false);
  }

  function run() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(stages.length);
      return;
    }
    setProgress(example.start);
    setRunning(true);
  }

  return <div className="pipeline-demo">
    <div className="demo-heading"><span>PROCESSING LAB / INTERACTIVE EXAMPLE</span><span>SIDESCAN CLEANUP</span></div>
    <div className="automation-intro"><div><h3>One change. Only the work it affects.</h3><p>Choose an edit, then run the example to trace its effect through the graph.</p></div><span className="demo-mode">Simulated workflow</span></div>
    <div className="demo-controls" role="group" aria-label="Processing example">
      {examples.map((item, index) => <button key={item.label} type="button" aria-pressed={selected === index} onClick={() => choose(index)}>{item.label}</button>)}
    </div>
    <ol className="demo-stages">{stages.map((stage, index) => {
      const status = index < example.start ? "Cached" : progress !== null && index < progress ? "Complete" : running && index === progress ? "Running" : "Recompute";
      const style = status === "Running" ? "is-running" : status === "Recompute" ? "needs-update" : "is-cached";
      return <li key={stage} className={style}><span>0{index + 1}</span><strong>{stage}</strong><small>{status}</small></li>;
    })}</ol>
    <div className="automation-console"><div className="automation-summary"><div><strong>{example.start}</strong><span>cached steps reused</span></div><div><strong>{stages.length - example.start}</strong><span>steps affected</span></div><div><strong>{complete ? "Ready" : running ? "Running" : "Preview"}</strong><span>example status</span></div></div><div className="automation-run"><button type="button" className="button" disabled={running || example.start === stages.length} onClick={run}>{running ? "Running example…" : complete ? "Replay example ↻" : "Run example →"}</button><button type="button" className="demo-reset" onClick={() => choose(1)}>Reset</button></div></div>
    <p className="demo-explanation" aria-live="polite">{complete ? `Example complete. ${example.start} cached steps were reused; ${stages.length - example.start} affected steps were recomputed.` : running ? `Simulating ${stages[progress ?? 0].toLowerCase()}. Earlier cached results are retained.` : example.body}</p>
    <p className="demo-disclaimer">Illustrates dependency tracking. No survey data is processed in this example.</p>
  </div>;
}
