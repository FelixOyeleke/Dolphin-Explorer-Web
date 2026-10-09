import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "../_components/PageHeader";
import { repo } from "../_components/site";

export const metadata: Metadata = { title: "Project status" };

const limitations = [
  "Windows with MSVC is the only supported build path at present.",
  "There are no packaged binary releases yet.",
  "Compressed JSF sonar samples are not supported.",
  "SEG-Y is interpreted as single-channel sub-bottom data.",
  "Legacy .dpcache artifacts are read for compatibility; new artifacts use .dlpd.",
];

const involve = [
  { href: `${repo}/issues`, title: "Browse issues", body: "See what is being worked on and what is known." },
  { href: `${repo}/issues/new`, title: "Report a bug", body: "Include the file format, the steps, and what you expected." },
  { href: `${repo}/stargazers`, title: "Star the repository", body: "Follow the project as it moves toward a stable release." },
];

export default function ProjectPage() {
  return (
    <>
      <PageHeader eyebrow="Project" title="An ambitious platform, being built in the open.">
        Dolphin Explorer is under active development. The product direction is clear, while interfaces, file compatibility, and saved project structures continue to mature in public.
      </PageHeader>

      <section className="signal-strip" aria-label="Project status summary">
        <div className="container signal-grid signal-grid-compact">
          <div><span>STATUS</span><strong className="status-live">Active development</strong><p>Core workflows are being built and validated continuously.</p></div>
          <div><span>RELEASE</span><strong>Source available</strong><p>No packaged binary release yet.</p></div>
          <div><span>COMMUNITY</span><strong>Open repository</strong><p>Issues, architecture, and progress are visible on GitHub.</p></div>
        </div>
      </section>

      <section className="section"><div className="container project-overview"><div><p className="eyebrow">Development preview</p><h2>Explore the work.<br />Understand the limits.</h2><p>The current experience is built from source. Start with the setup guide, review compatibility, and follow development in the repository.</p><div className="project-actions"><Link className="button" href="/docs">Build from source <span aria-hidden="true">→</span></Link><a className="button button-secondary" href={repo} target="_blank" rel="noreferrer">View repository ↗</a></div></div><div className="project-release"><div className="release-heading"><span className="dot" /> CURRENT DISTRIBUTION</div><h3>Source available</h3><p>Windows desktop · MSVC + Ninja</p><dl><div><dt>Install method</dt><dd>Build locally</dd></div><div><dt>Packaged installer</dt><dd>Not available yet</dd></div><div><dt>Project status</dt><dd>Active development</dd></div></dl><Link className="more" href="/formats">Check format support →</Link></div></div></section>

      <section className="section" id="limitations">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Status</p>
            <h2>Current limitations.</h2>
            <p>Known gaps in the current build. These are tracked as the product model matures.</p>
          </div>
          <ol className="limitation-list">{limitations.map((l, i) => <li key={l}><span>0{i + 1}</span><p>{l}</p></li>)}</ol>
        </div>
      </section>

      <section className="section" id="license">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">License</p>
            <h2>No license published yet.</h2>
          </div>
          <div className="callout">
            <p>The repository does not currently publish a license. Unless one is added, all rights are reserved by the copyright holder. Check the repository before reusing any code.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Get involved</p>
            <h2>Follow and contribute.</h2>
          </div>
          <ul className="link-grid three">
            {involve.map((item) => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer"><h3>{item.title} <span aria-hidden="true">↗</span></h3><p>{item.body}</p></a></li>)}
          </ul>
          <div className="issue-guide"><div><p className="eyebrow">A useful bug report</p><h3>Help make the next build better.</h3></div><p>Include your Windows version, build revision, file format, steps to reproduce, and expected versus actual behavior. Share a small reproducible sample only when you have permission to share the data.</p></div>
        </div>
      </section>
    </>
  );
}
