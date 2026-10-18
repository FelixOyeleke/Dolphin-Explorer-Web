import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "../_components/PageHeader";
import { repo } from "../_components/site";

export const metadata: Metadata = { title: "Project status" };

const limitations = [
  "Windows with MSVC is the only supported build path at present.",
  "Interfaces, file compatibility, and saved project structures may change between development revisions.",
];

export default function ProjectPage() {
  return (
    <>
      <PageHeader eyebrow="Project" title="Development preview.">
        Release availability, current limitations, and ways to follow the project.
      </PageHeader>

      <section className="section"><div className="container project-overview"><div><p className="eyebrow">Getting access</p><h2>Build the current version.</h2><p>Collaborators with repository access can follow the setup guide to build the active development branch.</p><div className="project-actions"><Link className="button" href="/docs">Build from source <span aria-hidden="true">→</span></Link><a className="button button-secondary" href={repo} target="_blank" rel="noreferrer">View repository ↗</a></div></div><div className="project-release"><div className="release-heading"><span className="dot" /> CURRENT DISTRIBUTION</div><h3>Source build</h3><p>Windows desktop · MSVC + Ninja</p><dl><div><dt>Desktop source</dt><dd>Private repository</dd></div><div><dt>Packaged installer</dt><dd>Not available yet</dd></div><div><dt>Project status</dt><dd>Active development</dd></div></dl></div></div></section>

      <section className="section" id="limitations">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">Status</p>
            <h2>Current limitations.</h2>
            <p>Known gaps in the current build. These are tracked as the product model matures.</p>
            <Link className="more" href="/formats">File compatibility notes <span aria-hidden="true">→</span></Link>
          </div>
          <ol className="limitation-list">{limitations.map((l, i) => <li key={l}><span>0{i + 1}</span><p>{l}</p></li>)}</ol>
        </div>
      </section>

      <section className="section" id="license">
        <div className="container split">
          <div className="section-intro">
            <p className="eyebrow">License</p>
            <h2>Licensing information.</h2>
          </div>
          <div className="callout">
            <p>The desktop repository does not currently include a published license file. Check the project’s current licensing information before reusing or distributing source code.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Get involved</p>
            <h2>Help improve the next build.</h2>
          </div>
          <div className="project-actions"><a className="button button-secondary" href={`${repo}/issues`} target="_blank" rel="noreferrer">Browse issues ↗</a><a className="button button-secondary" href={`${repo}/issues/new`} target="_blank" rel="noreferrer">Report a bug ↗</a></div>
          <div className="issue-guide"><div><p className="eyebrow">A useful bug report</p><h3>Help make the next build better.</h3></div><p>Include your Windows version, build revision, file format, steps to reproduce, and expected versus actual behavior. Share a small reproducible sample only when you have permission to share the data.</p></div>
        </div>
      </section>
    </>
  );
}
