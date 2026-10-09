// Illustrative graph built from real node and worker-status names in the Dolphin Explorer pipeline.
const nodes = [
  { role: "Input", name: "Sidescan input", status: "Cached" },
  { role: "Correction", name: "Slant-range correction", status: "Cached" },
  { role: "Filter", name: "Speckle filter", status: "Running" },
  { role: "Enhancement", name: "Gain normalization", status: "Dirty" },
  { role: "Output", name: "GeoTIFF export", status: "Idle" },
];

const workers = [
  { kind: "Processing", body: "Runs correction, filter, and enhancement graphs" },
  { kind: "QC", body: "Runs quality-control graphs over processed layers" },
  { kind: "Reporting", body: "Turns graph outputs into report artifacts" },
];

export default function PipelineDiagram() {
  return (
    <figure className="pipeline" aria-label="Example processing graph">
      <div className="pipeline-head">
        <span>sidescan_cleanup.graph.json</span>
        <span className="pipeline-legend"><i className="s-cached" /> Cached <i className="s-running" /> Running <i className="s-dirty" /> Dirty</span>
      </div>
      <ol className="pipeline-nodes">
        {nodes.map((n) => (
          <li key={n.name} className={`s-${n.status.toLowerCase()}`}>
            <small>{n.role}</small>
            <strong>{n.name}</strong>
            <em>{n.status}</em>
          </li>
        ))}
      </ol>
      <ul className="pipeline-workers">
        {workers.map((w) => <li key={w.kind}><code>{w.kind.toLowerCase()}</code><span>{w.body}</span></li>)}
      </ul>
    </figure>
  );
}
