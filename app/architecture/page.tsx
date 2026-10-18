import Link from "next/link";
import type { Metadata } from "next";
import CodeBlock from "../_components/CodeBlock";
import PageHeader from "../_components/PageHeader";

export const metadata: Metadata = { title: "Architecture", description: "A native C++20 survey architecture designed for gigabyte and terabyte workloads, with indexed I/O, GPU rendering, incremental processing, and a built-in MCP interface for AI tools." };

const layers = [
  { name: "core", path: "src/core", body: "Header-only survey and spatial data model: pings, traces, navigation, contacts, artifact indexes, raster grids." },
  { name: "util · io · geo · render", path: "src/io, src/geo, src/render", body: "Format probing, readers, indexing, decoding, parsed artifacts, GDAL raster I/O, CRS handling, and display logic." },
  { name: "pipeline", path: "src/pipeline", body: "Node registry, graph structure, serialization, dirty tracking, and the topological runner." },
  { name: "app", path: "src/app", body: "Project state, sources, layers, contacts, import classification, processing services, seabed profiles, and workers." },
  { name: "ui", path: "src/ui", body: "Self-contained Qt features and the application composition root." },
];

const uiFeatures = [
  { name: "map", body: "2D/3D spatial display, survey geometry, raster surfaces, and overlays" },
  { name: "waterfall", body: "Sidescan waterfall rendering, tools, and contact interaction" },
  { name: "subbottom", body: "Sub-bottom profile viewing and interpretation" },
  { name: "nodegraph", body: "Visual processing-graph editing" },
  { name: "processing", body: "Processing setup, progress, and execution" },
  { name: "import", body: "Project entry points and survey import setup" },
  { name: "metadata", body: "Source and layer metadata presentation" },
  { name: "geodesy", body: "Coordinate-system and geospatial workflows" },
  { name: "contacts", body: "Contact browsing, reporting, snapshots, and measurements" },
  { name: "datalibrary", body: "Project data and layer organization" },
  { name: "export", body: "Image, raster, and related export workflows" },
  { name: "mainwindow/rightpanel", body: "Local Ollama assistant, model selection, and streamed responses" },
];

const tree = `Dolphin-Explorer/
|-- cmake/            CMake support and safety checks
|-- resources/        Icons and Qt resources
|-- src/
|   |-- core/         Shared data model
|   |-- util/         General utilities
|   |-- io/           Survey readers, raster I/O, parsed artifacts
|   |-- geo/          CRS and sonar geospatial algorithms
|   |-- render/       Rendering support
|   |-- pipeline/     Processing engine and nodes
|   |-- app/          Projects, layers, services, seabed profiles, workers
|   |-- mcp/          Read-only server, client configuration, and tools
|   \`-- ui/           Qt UI features and composition
|-- tests/            Unit, integration, smoke, perf tests
|-- CMakeLists.txt    Root CMake configuration
|-- build_mingw.bat   Primary configure/build script
|-- build_quick.bat   Incremental build helper
|-- build.bat         Alternative MSBuild workflow
\`-- launch.bat        Runtime deployment and launcher`;

const conventions = [
  "Use C++20 and the existing Qt and CMake patterns.",
  "Preserve the strict dependency direction: io and pipeline never depend on app, and app never depends on ui.",
  "Keep business policy out of MainWindow; prefer coordinators or application services.",
  "Preserve index-first, visible-first loading. Never require full-file decoding just to activate a layer.",
  "Treat .dlpd files as durable artifacts, not temporary caches.",
  "Keep unfinished UI actions hidden or disabled instead of shipping clickable placeholders.",
  "Keep the default concurrency cap of two for heavy import and decode jobs.",
  "Add or update focused tests when changing readers, persistence, processing nodes, geospatial behavior, or UI policy.",
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader eyebrow="Architecture" title="Throughput is an architectural choice.">
        The design goal is to move quickly through gigabyte and terabyte survey workloads. A native C++20 core combines indexed I/O, GPU rendering, and incremental processing with a built-in MCP interface for AI tools.
      </PageHeader>

      <section className="signal-strip" aria-label="Architecture principles">
        <div className="container signal-grid">
          <div><span>AI + MCP</span><strong>Structured survey access</strong><p>The MCP server exposes project and survey records independently of the Qt interface.</p></div>
          <div><span>GPU</span><strong>OpenGL rendering</strong><p>The 3D map and sidescan waterfall use the GPU to draw dense survey views.</p></div>
          <div><span>DATA SCALE</span><strong>Index first. Decode on demand.</strong><p>Open layers before full decoding and prioritize the data currently in view.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro"><p className="eyebrow">System map</p><h2>Five layers. Clear responsibilities.</h2><p>Read from the interface down to the shared data model. Higher layers use lower layers; lower layers stay independent of the application above them.</p></div>
          <div className="architecture-label"><span>APPLICATION SURFACE</span><span>↓ DEPENDENCY DIRECTION</span></div>
          <ol className="layer-stack architecture-stack">
            {[...layers].reverse().map((layer, index) => <li key={layer.name}><span className="layer-number">0{index + 1}</span><div><h3>{layer.name}</h3><code>{layer.path}</code></div><p>{layer.body}</p></li>)}
          </ol>
          <p className="architecture-footnote">SHARED FOUNDATION <span>Business policy belongs in services and coordinators.</span></p>
          <div className="callout spaced"><h3>AI interfaces</h3><p><code>src/mcp/</code> provides a read-only server, stdio transport, tool registry, and client configuration for external AI clients.</p><p>The built-in Assistant panel uses a separate Ollama backend at <code>localhost:11434</code>. It manages local server startup, downloads missing models, and streams replies. Downloaded local models remain usable without an internet connection.</p><Link className="more" href="/docs#local-ai">Local AI and MCP setup →</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">User interface</p>
            <h2>Self-contained features.</h2>
            <p>Application-wide state and events are coordinated through <code>AppState</code>, <code>ProjectEventBus</code>, and <code>WindowRegistry</code>. <code>src/ui/mainwindow/</code> is the composition root.</p>
          </div>
          <dl className="module-grid">
            {uiFeatures.map((f) => <div key={f.name}><dt><code>{f.name}</code></dt><dd>{f.body}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Repository</p>
            <h2>Repository layout.</h2>
            <p>CMake subdirectories are ordered <code>util → core → io → geo → pipeline → render → app → mcp → ui</code>.</p>
          </div>
          <CodeBlock label="Tree" code={tree} />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Conventions</p>
            <h2>Development conventions.</h2>
            <p>Dataset identity is based on the normalized absolute path plus a file size and modification-time fingerprint, not a content hash.</p>
          </div>
          <ul className="check-list convention-panel">{conventions.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </section>
      <section className="section"><div className="container page-next"><div><p className="eyebrow">From structure to source</p><h2>Build it. Explore it.</h2><p>Set up the toolchain and see how the layers work together.</p></div><Link className="button" href="/docs">Open setup guide <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}
