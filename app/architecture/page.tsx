import Link from "next/link";
import type { Metadata } from "next";
import CodeBlock from "../_components/CodeBlock";
import PageHeader from "../_components/PageHeader";

export const metadata: Metadata = { title: "Architecture" };

const layers = [
  { name: "core", path: "src/core", body: "Header-only survey and spatial data model: pings, traces, navigation, contacts, artifact indexes, raster grids." },
  { name: "util · io · geo · render", path: "src/io, src/geo, src/render", body: "Format probing, readers, indexing, decoding, parsed artifacts, GDAL raster I/O, CRS handling, and display logic." },
  { name: "pipeline", path: "src/pipeline", body: "Node registry, graph structure, serialization, dirty tracking, and the topological runner." },
  { name: "app", path: "src/app", body: "Project state, sources, layers, contacts, import classification, processing services, and workers." },
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
|   |-- app/          Projects, layers, services, and workers
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
      <PageHeader eyebrow="Architecture" title="Built to scale from one line to the whole survey.">
        Dolphin Explorer is organized into five strict layers. The result is a platform where readers, geodesy, rendering, and processing can evolve independently without turning the application into a fragile monolith.
      </PageHeader>

      <section className="signal-strip" aria-label="Architecture principles">
        <div className="container signal-grid">
          <div><span>01</span><strong>Strict boundaries</strong><p>Dependencies point down. Product policy stays out of the rendering and data layers.</p></div>
          <div><span>02</span><strong>Durable artifacts</strong><p>Indexed data and processing outputs are preserved with the project across sessions.</p></div>
          <div><span>03</span><strong>Visible-first loading</strong><p>The application becomes useful before every byte of a source file is decoded.</p></div>
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
            <p>CMake subdirectories are ordered <code>util → core → io → geo → pipeline → render → app → ui</code>.</p>
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
