import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../_components/PageHeader";
import SurveyVideo from "../_components/SurveyVideo";
import { processingVideo } from "../_components/survey-data";

export const metadata: Metadata = { title: "Features", description: "Explore offline local AI through Ollama, MCP connectivity, OpenGL GPU rendering, indexed data access, and incremental processing in Dolphin Explorer." };

const platformTools = [
  {
    title: "Indexed data access",
    items: [
      "Probe source files and build indexes before loading their full sample data.",
      "Activate layers and decode visible samples first, then refine the rest in the background.",
      "Preserve indexed and decoded .dlpd artifacts with the project for reuse.",
    ],
  },
  {
    title: "GPU-accelerated visualization",
    items: [
      "Use OpenGL to render dense survey views in the 3D map and sidescan waterfall.",
      "Review tracks, sonar coverage, contacts, and georeferenced rasters with coordinate-system support.",
      "Adjust lighting, shadows, ambient occlusion, and underwater display effects.",
    ],
  },
  {
    title: "Background jobs",
    items: [
      "Index first and prioritize visible samples before decoding the rest of a source.",
      "Track queued and running imports, processing, and seabed detection with progress and cancellation.",
      "Cap heavy import and decode work at two concurrent jobs to keep the interface responsive.",
    ],
  },
  {
    title: "Deliverables",
    items: [
      "Export derived raster products as GeoTIFF.",
      "Save map and application views as PNG images.",
      "Export processing results and side-scan seabed measurements as CSV.",
    ],
  },
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
      <PageHeader eyebrow="Features" title="Performance and AI at the foundation.">
        The goal is fast analysis at survey scale. Indexed access, GPU rendering, background execution, and MCP connectivity shape how the platform handles data.
      </PageHeader>

      <section className="section" id="assistants" aria-labelledby="assistants-title">
        <div className="container split">
          <div className="section-intro"><p className="eyebrow">Local AI + MCP</p><h2 id="assistants-title">AI assistance, even offline.</h2></div>
          <div className="feature-assistant-copy">
            <h3>Local AI with Ollama</h3>
            <p>Run the built-in assistant on your own machine through Ollama. Once Ollama and your selected model are installed, continue chatting without an internet connection.</p>
            <Link className="more" href="/docs#local-ai">Set up offline AI <span aria-hidden="true">→</span></Link>
            <h3>Connect other AI clients with MCP</h3>
            <p>MCP is a built-in interface to the survey workspace. Connect compatible AI clients to project structure, source metadata, sonar records, contacts, and features through the bundled server.</p>
            <p>The current tools provide read-only access. Generate client configuration and check the connection from the desktop AI Assistants settings page.</p>
            <Link className="more" href="/docs#mcp">Connect an AI client <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section" id="live-qc" aria-labelledby="platform-tools-title">
        <div className="container">
          <div className="section-intro"><p className="eyebrow">Data throughput</p><h2 id="platform-tools-title">Do the work that matters.</h2><p>Start with indexes, load the samples in view, and reuse completed work. The design targets large datasets by avoiding unnecessary decoding and recomputation.</p></div>
          <div className="engine-grid">
            {platformTools.map((group) => (
              <article key={group.title} className="feature-group">
                <h3>{group.title}</h3>
                <ul className="check-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <nav className="feature-data-links" aria-label="Data-specific inspection tools">
            <Link id="seabed" href="/data/side-scan-sonar#tools">Side-scan imagery and seabed tools <span aria-hidden="true">→</span></Link>
            <Link href="/data/sub-bottom-profiler#tools">Sub-bottom profile tools <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </section>

      <section className="section" id="automation" aria-labelledby="processing-title">
        <div className="container">
          <div className="data-demo-layout">
            <div className="section-intro">
              <p className="eyebrow">Processing graph</p>
              <h2 id="processing-title">Build a recipe. Reuse it.</h2>
              <p>Graphs validate their connections before running. Execution follows dependencies, and edits mark only downstream steps for recomputation.</p>
              <p>Save a recipe as JSON to reuse it across surveys.</p>
              <Link className="more" href="/architecture">Processing engine architecture <span aria-hidden="true">→</span></Link>
            </div>
            <SurveyVideo video={processingVideo} />
          </div>
          <details className="processing-reference">
            <summary>Processing node reference <span>{nodes.length} groups</span></summary>
            <dl className="def-list">{nodes.map((node) => <div key={node.role}><dt>{node.role}</dt><dd>{node.items}</dd></div>)}</dl>
          </details>
        </div>
      </section>

    </>
  );
}
