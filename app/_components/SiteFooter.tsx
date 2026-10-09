import Link from "next/link";
import HeroWaves from "./HeroWaves";
import { external, repo } from "./site";

const columns = [
  { title: "Product", links: [{ href: "/features", label: "Features" }, { href: "/formats", label: "Formats" }, { href: "/project", label: "Status" }] },
  { title: "Developers", links: [{ href: "/docs", label: "Getting started" }, { href: "/architecture", label: "Architecture" }, { href: repo, label: "Source code" }] },
  { title: "Community", links: [{ href: `${repo}/issues`, label: "Issues" }, { href: `${repo}/issues/new`, label: "Report a bug" }, { href: `${repo}/stargazers`, label: "Star on GitHub" }] },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <HeroWaves variant="footer" />
      <div className="container">
        <div className="footer-cta"><div><p className="eyebrow">Explore what comes next</p><h2>A clearer view.<br />A better survey workflow.</h2></div><div><Link className="button" href="/docs">Start building <span aria-hidden="true">↗</span></Link><p>Windows desktop · Source available</p></div></div>
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" href="/"><img src="/dolphin-explorer.png" alt="" /><span>Dolphin Explorer</span></Link>
            <p>Marine survey data, made legible.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>{col.links.map((link) => <li key={link.label}>{link.href.startsWith("http") ? <a href={link.href} {...external(link.href)}>{link.label}</a> : <Link href={link.href}>{link.label}</Link>}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Felix Oyeleke</span><a href={repo} target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
    </footer>
  );
}
