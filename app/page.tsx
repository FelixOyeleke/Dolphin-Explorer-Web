import HeroWaves from "./_components/HeroWaves";
import HomeSurface from "./_components/HomeSurface";
import Link from "next/link";
import { supportedFormats } from "./_components/formats";
import PipelineDemo from "./_components/PipelineDemo";
import { GitHubMark, repo } from "./_components/site";

// Drop the product recording into /public and set this to its path (e.g. "/dolphin-explorer-demo.mp4")
// to show a product walkthrough below the hero.
const previewVideo: string | null = null;

const heroFacts = [
  { value: "Index-first", label: "activate layers without full-file waits" },
  { value: "Quality control", label: "inspect data during and after acquisition" },
  { value: "GPU-native", label: "explore dense coverage at full speed" },
  { value: "Automation", label: "repeat validated workflows on every line" },
];

const surveySteps = [
  { title: "Bring in your survey", body: "Import recorded XTF, JSF, and SEG-Y files, or monitor a survey folder for incoming lines during acquisition. Organize sources and layers in one project." },
  { title: "Inspect and interpret", body: "Review navigation, coverage, sidescan imagery, and sub-bottom profiles. Use quality-control tools while collecting data or during a detailed review back in the office." },
  { title: "Process and deliver", body: "Apply saved processing graphs to survey data, reuse cached results, and export derived products for further analysis and reporting." },
];

const pillars = [
  { title: "GPU rendering", body: "The 3D map and sidescan waterfall draw through OpenGL, so survey coverage, rasters, and sonar imagery stay responsive as you explore." },
  { title: "Automated pipelines", body: "Build processing as a node graph once, save it as JSON, and run it again on the next survey. Validation catches broken graphs before they run." },
  { title: "Workers with contracts", body: "Processing, QC, and reporting run as workers with typed inputs and outputs, so each step knows exactly what it consumes and produces." },
  { title: "Incremental by default", body: "Workers cache results and run only when their inputs are dirty. Change one parameter and only the affected branch recomputes." },
];

const roadmap = [
  { status: "In development", title: "Dolphin assistant", body: "An in-app conversation panel for asking Dolphin to open a layer, run processing, or change a setting in plain language." },
  { status: "Planned", title: "MCP server", body: "A Model Context Protocol interface so AI agents and external tools can drive projects, run graphs, and read results programmatically." },
];


const explore = [
  { href: "/features", title: "Features", body: "Rendering, automation, interpretation, and the processing graph." },
  { href: "/formats", title: "Formats", body: "Supported survey and raster files, with format-specific notes." },
  { href: "/docs", title: "Docs", body: "Requirements, dependency setup, building, running, and testing." },
  { href: "/architecture", title: "Architecture", body: "The layer model, UI features, and repository layout." },
];

export default function Home() {
  return (
    <HomeSurface>
      <section className="hero">
        <HeroWaves />
        <div className="hero-atmosphere" aria-hidden="true"><span /><span /><span /></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-status"><span className="dot" /> HYDROGRAPHIC INTELLIGENCE</p>
              <h1>Turn survey data<br /><span>into decisions.</span></h1>
              <p className="lede">One workspace for hydrographic survey data—from vessel-based acquisition to post-survey analysis. Import sonar, inspect quality, interpret the seabed, and turn raw data into deliverables with repeatable processing.</p>
              <div className="hero-actions">
                <Link className="button" href="/features">Explore the platform <span aria-hidden="true">↗</span></Link>
                <Link className="button button-secondary" href="/formats">Supported formats <span aria-hidden="true">→</span></Link>
                <a className="button button-secondary" href={repo} target="_blank" rel="noreferrer"><GitHubMark className="button-icon" /> View source</a>
              </div>
            </div>
            <div className="product-stage"><div className="stage-orbit" aria-hidden="true" /><figure className="hero-console"><div className="showcase-bar"><span>DOLPHIN EXPLORER / WORKSPACE</span><span>PRODUCT CONCEPT</span></div><img src="/dolphin-explorer-console.png" width="1586" height="992" fetchPriority="high" alt="Illustrative Dolphin Explorer software mock-up with bathymetric mapping, survey tracks, and sonar panels" /><figcaption>From the first survey line to a clearer picture.<span>Map · Inspect · Process</span></figcaption></figure><div className="intelligence-path" aria-label="Survey workflow"><span>01 <strong>Ingest</strong></span><i aria-hidden="true" /><span>02 <strong>Validate</strong></span><i aria-hidden="true" /><span>03 <strong>Process</strong></span><i aria-hidden="true" /><span>04 <strong>Explore</strong></span></div></div>
          </div>
          <dl className="hero-facts">
            {heroFacts.map((fact) => <div key={fact.label}><dt>{fact.value}</dt><dd>{fact.label}</dd></div>)}
          </dl>
        </div>
      </section>

      {previewVideo && (
        <section className="preview">
          <div className="container"><video src={previewVideo} autoPlay muted loop playsInline aria-label="Dolphin Explorer product walkthrough" /></div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Survey workflows</p>
            <h2>From the field to the final review.</h2>
            <p>Work with data from crewed survey vessels and USVs, inspect incoming lines during acquisition, or revisit recorded surveys in the office. The same workspace supports quality control, interpretation, and processing throughout the survey workflow.</p>
          </div>
          <div className="survey-flow" aria-label="Example survey workflow"><div><small>IMPORT</small><code>Recorded + incoming data</code><span>Load survey files or monitor a folder</span></div><span aria-hidden="true">→</span><div><small>REVIEW</small><code>Navigation + sonar + coverage</code><span>Inspect during acquisition or afterward</span></div><span aria-hidden="true">→</span><div><small>PROCESS</small><code>Saved processing graph</code><span>Produce repeatable results and exports</span></div></div>
          <ol className="steps">
            {surveySteps.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}
          </ol>
          <Link className="more" href="/features">Explore survey capabilities <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Platform</p>
            <h2>Performance where the survey demands it.</h2>
            <p>A native C++20 and Qt 6 foundation keeps dense spatial data responsive while the processing engine takes repetitive work off the operator.</p>
          </div>
          <div className="platform-showcase">
            <article className="platform-primary"><div className="platform-visual"><img src="/dolphin-explorer-console.png" width="1586" height="992" loading="lazy" alt="Concept preview of the survey map, sonar imagery, and inspection panels" /><span>ILLUSTRATIVE WORKSPACE</span></div><div className="platform-copy"><p className="eyebrow">01 / Spatial context</p><h3>See the survey as a whole.</h3><p>Bring survey tracks, rasters, and sonar imagery into one workspace, with GPU rendering for dense spatial data.</p><Link className="more" href="/features">Explore the workspace →</Link></div></article>
            <article className="platform-secondary"><div className="platform-copy"><p className="eyebrow">02 / Inspection</p><h3>Get closer to the detail.</h3><p>Sidescan waterfall and sub-bottom views support interpretation alongside the map.</p><Link className="more" href="/features#live-qc">Explore quality control →</Link></div><div className="inspection-preview" aria-hidden="true"><img src="/dolphin-explorer-console.png" width="1586" height="992" loading="lazy" alt="" /><span>SONAR VIEW / CONCEPT DETAIL</span></div></article>
            <article className="platform-secondary platform-processing"><div className="platform-copy"><p className="eyebrow">03 / Processing</p><h3>Repeat the work that works.</h3><p>Save processing recipes and reuse cached results when inputs have not changed.</p><Link className="more" href="#automation">Try the processing example ↓</Link></div><div className="recipe-preview" aria-hidden="true"><span>01 <b>Correct</b><i>→</i></span><span>02 <b>Enhance</b><i>→</i></span><span>03 <b>Export</b><i>✓</i></span></div></article>
          </div>
          <div className="platform-foundations">{pillars.map((p) => <div key={p.title}><h3>{p.title}</h3><p>{p.body}</p></div>)}</div>
        </div>
      </section>

      <section className="section section-with-wave" id="automation">
        <HeroWaves variant="section" />
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Automation</p>
            <h2>Make every workflow repeatable.</h2>
            <p>Correction, filtering, enhancement, and export nodes chain into a graph that runs in dependency order, with cached steps skipped automatically.</p>
          </div>
          <PipelineDemo />
          <Link className="more" href="/features#automation">How automation works <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Roadmap</p>
            <h2>A platform ready for its next interface.</h2>
            <p>Every action already flows through typed services and serializable graphs, the foundation for driving Dolphin Explorer with language and agents.</p>
            <div className="roadmap-foundation"><span className="eyebrow">Current foundation</span><p>Native workspace · Processing graphs · Typed services</p><Link className="more" href="/project">Review project status →</Link></div>
          </div>
          <ul className="roadmap">
            {roadmap.map((r) => <li key={r.title}><span className={`badge ${r.status === "Planned" ? "planned" : ""}`}>{r.status}</span><h3>{r.title}</h3><p>{r.body}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Formats</p>
            <h2>Reads the files your survey already produces.</h2>
            <p>Raster I/O is backed by GDAL, and coordinate transforms by PROJ.</p>
            <Link className="more" href="/formats">Format details <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="format-chips">{supportedFormats.map((f) => <li key={f.id}><Link href={`/formats#${f.id}`}><span>{f.name}</span><span aria-hidden="true">↗</span></Link></li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Explore</p>
            <h2>Go deeper.</h2>
          </div>
          <ul className="link-grid">
            {explore.map((item) => <li key={item.href}><Link href={item.href}><h3>{item.title} <span aria-hidden="true">→</span></h3><p>{item.body}</p></Link></li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Quickstart</p>
            <h2>Build from source.</h2>
            <p>Set up the Windows toolchain, compile the source, and open your first survey. The docs walk through each step.</p>
            <Link className="more" href="/docs">Full setup guide <span aria-hidden="true">→</span></Link>
          </div>
          <div className="quickstart-path"><Link href="/docs#requirements"><span>01</span><div><strong>Prepare your machine</strong><p>MSVC, Qt, CMake, and geospatial dependencies</p></div><span>↗</span></Link><Link href="/docs#build"><span>02</span><div><strong>Build Dolphin Explorer</strong><p>Clone the source and compile with Ninja</p></div><span>↗</span></Link><Link href="/docs#run"><span>03</span><div><strong>Launch your workspace</strong><p>Deploy runtime files and open a project</p></div><span>↗</span></Link></div>
        </div>
      </section>
    </HomeSurface>
  );
}
