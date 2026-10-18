import type { Metadata } from "next";
import Link from "next/link";
import { supportedFormats } from "../_components/formats";
import PageHeader from "../_components/PageHeader";

export const metadata: Metadata = { title: "Formats" };



const projectFiles = [
  { ext: ".dlp", title: "Project manifest", body: "JSON file storing project organization, sources, layers, contacts, features, manual seabed picks, and workflow state." },
  { ext: ".dlpd", title: "Parsed artifact store", body: "Indexed and decoded data used by the application. A durable workflow asset, not a disposable cache." },
  { ext: ".dsbp", title: "Automatic seabed picks", body: "Compact profile measurements saved in the project data folder. Manual picks remain in the project manifest." },
  { ext: ".dpcache", title: "Legacy artifact", body: "Older artifact extension, still accepted for backward-compatible reads." },
];

export default function FormatsPage() {
  return (
    <>
      <PageHeader eyebrow="Formats" title="Bring your survey stack together.">
        Connect the vendor formats, parsed artifacts, and georeferenced rasters that make up a modern survey. Keep source data intact while Dolphin Explorer builds a faster working model around it.
      </PageHeader>

      <section className="signal-strip" aria-label="Format support summary">
        <div className="container signal-grid signal-grid-compact">
          <div><span>SUPPORTED</span><strong>6 core format families</strong><p>Vendor sonar, parsed artifacts, and georeferenced imagery.</p></div>
          <div><span>RASTER ENGINE</span><strong>GDAL-backed I/O</strong><p>Use the codecs already present in the survey toolchain.</p></div>
          <div><span>POSITIONING</span><strong>PROJ coordinate handling</strong><p>Keep map products aligned as data moves through the workflow.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro"><p className="eyebrow">Compatibility reference</p><h2>Find your format.</h2><p>Select a format to see its extensions, intended use, and current support limits.</p></div>
          <nav className="format-navigation" aria-label="Jump to format">
            {supportedFormats.map((f) => <a key={f.id} href={`#${f.id}`}>{f.name}<span aria-hidden="true">↓</span></a>)}
          </nav>
          <div className="format-detail-grid">
            {supportedFormats.map((f) => <article className="format-detail" id={f.id} key={f.id}>
              <div className="format-detail-heading"><h3>{f.name}</h3><code>{f.ext}</code></div>
              <p>{f.use}</p><div className="format-note"><span>Support notes</span><p>{f.notes}</p></div>
            </article>)}
          </div>
          <p className="footnote">Availability of a particular raster codec can depend on the GDAL build installed through vcpkg.</p>
          <Link className="more" href="/docs">Set up your workspace <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Project files</p>
            <h2>Organization and survey data, kept separate.</h2>
            <p>Project artifacts live in a <code>data/</code> directory beside the manifest. Processing publishes replacements atomically and never modifies the original XTF or JSF source.</p>
          </div>
          <dl className="def-list">
            {projectFiles.map((f) => <div key={f.ext}><dt><code>{f.ext}</code></dt><dd><strong>{f.title}.</strong> {f.body}</dd></div>)}
          </dl>
        </div>
        <div className="container">
          <div className="callout spaced">
            <h3>Moving or backing up a project</h3>
            <p>Keep the <code>.dlp</code> manifest and its project data together, including <code>.dlpd</code> artifacts and <code>.dsbp</code> seabed-pick files. Deleting <code>.dlpd</code> files may remove parsed or processed work that is expensive or impossible to reproduce exactly.</p>
          </div>
        </div>
      </section>
    </>
  );
}
