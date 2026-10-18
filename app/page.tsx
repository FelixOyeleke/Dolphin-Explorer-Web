import HeroWaves from "./_components/HeroWaves";
import HomeSurface from "./_components/HomeSurface";
import Link from "next/link";
import SurveyVideo from "./_components/SurveyVideo";
import { processingVideo, subBottomData } from "./_components/survey-data";
import DesktopDownloads from "./_components/DesktopDownloads";
import ImportBenchmarks, { importBenchmarkHighlight } from "./_components/ImportBenchmarks";
import HomeAssistants from "./_components/HomeAssistants";
import { supportedFormats } from "./_components/formats";
import { repo } from "./_components/site";

const heroFacts = [
  { value: "Local AI", label: "Ollama assistance, even offline" },
  { value: "MCP built in", label: "Structured survey access for AI clients" },
  { value: "GPU acceleration", label: "OpenGL maps and sidescan waterfalls" },
  { value: "GB to TB", label: "Designed for large survey workloads" },
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
              <h1>AI-first analysis.<br /><span>Built for scale.</span></h1>
              <p className="lede">Explore side-scan sonar and sub-bottom surveys in one desktop workspace. Fast imports, GPU visualization, and reusable processing take you from raw data to interpretation.</p>
              <a className="hero-benchmark" href="#performance">
                <span className="hero-benchmark-dot" aria-hidden="true" />
                <span><strong>{importBenchmarkHighlight.size} MB XTF</strong> imported in <strong>{importBenchmarkHighlight.median} s</strong> median</span>
                <span aria-hidden="true">↓</span>
              </a>
              <DesktopDownloads />
              <div className="hero-actions hero-secondary-actions">
                <Link href="/features">Explore the platform <span aria-hidden="true">↗</span></Link>
                <Link href="/data">SSS and SBP workflows <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <div className="product-stage">
              <figure className="hero-console">
                <video
                  src="/dolphin-explorer-console.mp4"
                  width="1876"
                  height="1266"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="Dolphin Explorer side-scan sonar (SSS) data demo"
                />
                <figcaption>
                  <p className="console-caption-title"><span className="console-caption-label">SSS DEMO</span><Link className="console-caption-link" href="/data/side-scan-sonar">Explore side-scan sonar data <span aria-hidden="true">↗</span></Link></p>
                  <span className="console-caption-detail">Inspect · Review · Interpret</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <dl className="hero-facts">
            {heroFacts.map((fact) => <div key={fact.label}><dt>{fact.value}</dt><dd>{fact.label}</dd></div>)}
          </dl>
        </div>
      </section>

      <ImportBenchmarks />

      <HomeAssistants />

      <section className="section sbp-section" id="sub-bottom" aria-labelledby="sbp-title">
        <div className="container sbp-layout">
          <div className="section-intro sbp-intro">
            <p className="eyebrow">Sub-bottom profiler</p>
            <h2 id="sbp-title">See beneath<br />the seabed.</h2>
            <p>Inspect acoustic sections with dedicated profile tools, then return to the map for survey context.</p>
            <Link className="more" href="/data/sub-bottom-profiler">Explore sub-bottom data <span aria-hidden="true">→</span></Link>
          </div>
          <SurveyVideo video={subBottomData.video} className="sbp-console" />
        </div>
      </section>

      <section className="section section-with-wave" id="automation">
        <HeroWaves variant="section" />
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Automation</p>
            <h2>Make every workflow repeatable.</h2>
            <p>Connect processing nodes into a reusable graph. Watch the workflow in the desktop workspace.</p>
          </div>
          <SurveyVideo video={processingVideo} className="data-video automation-video" />
          <Link className="more" href="/features#automation">Processing tools and outputs <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section get-started" id="get-started" aria-labelledby="get-started-title">
        <div className="container">
          <div className="section-intro get-started-intro">
            <p className="eyebrow">Bring your own survey</p>
            <h2 id="get-started-title">Open your data. Start exploring.</h2>
            <p>Import recorded sonar and profiler files directly, alongside georeferenced rasters for survey context.</p>
          </div>
          <ul className="home-formats" aria-label="Supported formats">
            {supportedFormats.map((format) => (
              <li key={format.id}>
                <Link href={`/formats#${format.id}`}>
                  <strong>{format.name}</strong>
                  <code>{format.ext}</code>
                  <span>{format.use}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="get-started-actions">
            <Link className="button" href="/docs#build">Build on Windows</Link>
            <Link className="button button-secondary" href="/docs">Read the docs</Link>
            <a className="get-started-repo" href={repo} target="_blank" rel="noreferrer">Desktop repository <small>(access required)</small> <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </HomeSurface>
  );
}
