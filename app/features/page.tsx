import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../_components/PageHeader";
import PipelineDiagram from "../_components/PipelineDiagram";

export const metadata: Metadata = { title: "Features" };

const liveQc = [
  { title: "Folder monitoring", items: ["Watches survey folders for new XTF, JSF, and SEG-Y lines.", "Ingests new lines automatically as they land, using the same probe-and-index import as manual loading.", "Duplicate detection keeps a line from being imported twice."] },
  { title: "Live QA/QC", items: ["Seabed auto-detection with threshold and first-return methods, port/starboard agreement, and continuity gating.", "Navigation smoothing and repair for noisy or dropped positions.", "Review-coverage strip beside the waterfall shows which parts of each line have been inspected."] },
];

const engine = [
  { title: "GPU rendering", items: ["OpenGL 3D map with an interactive camera for tracks, coverage, contacts, and draped rasters.", "OpenGL sidescan waterfall renderer for reviewing long lines.", "Palette and radiometric controls for sidescan display."] },
  { title: "Automated processing", items: ["Node graphs validated before they run and executed in topological order.", "Graphs serialize to JSON, so a processing recipe can be saved and reused across surveys.", "Dirty tracking re-runs only the nodes downstream of a change."] },
  { title: "Worker execution", items: ["Processing, QC, reporting, and custom workers with typed input and output contracts.", "Execution policies for parallel runs, result caching, run-on-dirty-only, and priority.", "Clear lifecycle states: idle, dirty, running, cached, completed, failed, blocked."] },
  { title: "Background by default", items: ["Import and decode run in the background with progress reporting and cancellation.", "Visible data is decoded first; the rest is refined while you work.", "Heavy import and decode work is capped at two concurrent jobs to keep the UI responsive."] },
];

const roadmap = [
  { status: "In development", title: "Dolphin assistant", body: "An in-app conversation panel for asking Dolphin to open a layer, run processing, or change a setting in plain language. The interface is in the app today; the language backend is being built." },
  { status: "Planned", title: "MCP server", body: "A Model Context Protocol interface so AI agents and external tools can open projects, run processing graphs, and read results programmatically." },
];

const groups = [
  {
    title: "Survey import and organization",
    items: [
      "Probes supported survey files automatically before import.",
      "Classifies available modalities and creates one or more project layers from a source file.",
      "Prevents duplicate imports using the normalized path, file size, and modification time.",
      "Builds indexes before full sample hydration so large files become visible quickly.",
      "Prioritizes visible data and decodes the rest in the background.",
      "Supports cancellation and progress reporting for long-running import and processing jobs.",
      "Limits heavy import and decode work to two concurrent jobs by default.",
    ],
  },
  {
    title: "Visualization and interpretation",
    items: [
      "2D and 3D map display for survey tracks, sonar coverage, contacts, and georeferenced rasters.",
      "Sidescan waterfall display with palette and radiometric controls.",
      "Sub-bottom profile display and correction tools.",
      "Metadata inspection for imported sources and layers.",
      "Contact creation, review, snapshots, and measurements.",
      "Data-library and layer-management workflows.",
      "Coordinate reference system and geodesy utilities.",
    ],
  },
  {
    title: "Processing and export",
    items: [
      "Directed acyclic graph processing with validation, topological execution, dirty tracking, and JSON serialization.",
      "Sidescan correction, filtering, enhancement, and analysis nodes.",
      "Navigation smoothing and repair workflows.",
      "GeoTIFF output for georeferenced elevation or imagery products.",
      "PNG export for map and application views.",
      "CSV output through the processing graph.",
    ],
  },
];

const flow = [
  { title: "Probe and classify", body: "Detect the format and the modalities a file contains." },
  { title: "Index and extents", body: "Establish what the dataset holds and where it belongs." },
  { title: "Source and layers", body: "Register the source in the project as one or more layers." },
];

const outputs = [
  { title: "Visible-first decode", body: "Map, waterfall, and sub-bottom views" },
  { title: "Background refinement", body: "Durable .dlpd artifact" },
  { title: "Processing graph", body: "Derived artifacts and exports" },
];

const nodes = [
  { role: "Input", items: "Sidescan, sub-bottom, and multibeam inputs" },
  { role: "Correction", items: "Slant-range correction, TVG, bottom detection, navigation smoothing, geocorrection, ARC, band-pass" },
  { role: "Filter", items: "Range clipping, decimation, speckle filtering" },
  { role: "Enhancement", items: "Gain normalization, contrast enhancement, histogram equalization, sidescan enhancement" },
  { role: "Analysis", items: "Acoustic-shadow detection" },
  { role: "Merge", items: "Combines compatible processing branches" },
  { role: "Output", items: "GeoTIFF and CSV export" },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader eyebrow="Features" title="One workspace. The whole survey workflow.">
        Import, inspect, interpret, process, and export hydrographic data in one native workspace—from incoming vessel data to detailed post-survey analysis.
      </PageHeader>

      <section className="product-showcase" aria-label="Dolphin Explorer workspace preview">
        <div className="container">
          <div className="showcase-frame">
            <div className="showcase-bar"><span><i /> WORKSPACE CONCEPT</span><span>MAP / COVERAGE / PROCESSING</span></div>
            <img src="/dolphin-explorer-console.png" width="1586" height="992" loading="lazy" alt="Illustrative Dolphin Explorer software mock-up with bathymetric mapping, survey tracks, and sonar views" />
          </div>
          <div className="showcase-caption"><span>One workspace for the entire survey loop.</span><span>Ingest → inspect → process → publish</span></div>
        </div>
      </section>

      <section className="section" id="live-qc">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Acquisition and quality control</p>
            <h2>Inspect in the field. Review in the office.</h2>
            <p>Monitor incoming files from crewed vessels or USVs, or inspect recorded survey lines after acquisition. Folder monitoring supports live workflows; navigation, seabed, and review-coverage tools support quality checks throughout the project.</p>
          </div>
          <div className="engine-grid">
            {liveQc.map((group) => (
              <div key={group.title} className="feature-group">
                <h3>{group.title}</h3>
                <ul className="check-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Engine</p>
            <h2>GPU on screen. Automation underneath.</h2>
          </div>
          <div className="engine-grid">
            {engine.map((group) => (
              <div key={group.title} className="feature-group">
                <h3>{group.title}</h3>
                <ul className="check-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="automation">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Automation</p>
            <h2>A processing recipe you can run again.</h2>
            <p>Chain nodes into a graph, save it, and apply it to the next survey. Workers pick up the graph, skip cached steps, and recompute only what a change affects.</p>
          </div>
          <PipelineDiagram />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Workflows</p>
            <h2>Import, interpret, and export.</h2>
          </div>
          <div className="feature-groups">
            {groups.map((group) => (
              <div key={group.title} className="feature-group">
                <h3>{group.title}</h3>
                <ul className="check-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Data flow</p>
            <h2>How data moves through the application.</h2>
            <p>Activating a layer should not require full-file decoding. Detailed samples load according to what you are viewing.</p>
          </div>
          <ol className="flow">
            {flow.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}
          </ol>
          <div className="flow-outputs">
            {outputs.map((out) => <div key={out.title}><h3>{out.title}</h3><p>{out.body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Processing graph</p>
            <h2>Processing nodes, grouped by role.</h2>
            <p>The graph runs nodes in topological order and propagates changes downstream, so only affected steps re-run.</p>
            <Link className="more" href="/architecture">How the pipeline fits in <span aria-hidden="true">→</span></Link>
          </div>
          <dl className="def-list">
            {nodes.map((n) => <div key={n.role}><dt>{n.role}</dt><dd>{n.items}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Roadmap</p>
            <h2>AI-ready, by design.</h2>
            <p>Typed services, serializable graphs, and worker contracts give language and agent interfaces a clean surface to drive.</p>
          </div>
          <ul className="roadmap">
            {roadmap.map((r) => <li key={r.title}><span className={`badge ${r.status === "Planned" ? "planned" : ""}`}>{r.status}</span><h3>{r.title}</h3><p>{r.body}</p></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
