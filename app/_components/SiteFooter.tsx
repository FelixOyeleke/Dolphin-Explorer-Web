import Link from "next/link";
import HeroWaves from "./HeroWaves";
import { external, repo, webRepo } from "./site";

const columns = [
  { title: "Product", links: [{ href: "/data", label: "Data workflows" }, { href: "/features", label: "Features" }, { href: "/formats", label: "Formats" }, { href: "/project", label: "Status" }] },
  { title: "Developers", links: [{ href: "/docs", label: "Getting started" }, { href: "/architecture", label: "Architecture" }, { href: repo, label: "Desktop repository" }, { href: webRepo, label: "Website source" }] },
  { title: "Community", links: [{ href: `${repo}/issues`, label: "Issues" }, { href: `${repo}/issues/new`, label: "Report a bug" }, { href: `${repo}/stargazers`, label: "Star on GitHub" }] },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <HeroWaves variant="footer" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" href="/"><img src="/dolphin-explorer.png" alt="" /><span>Dolphin Explorer</span></Link>
            <p>Survey intelligence, built for scale.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>{col.links.map((link) => <li key={link.label}>{link.href.startsWith("http") ? <a href={link.href} {...external(link.href)}>{link.label}</a> : <Link href={link.href}>{link.label}</Link>}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Felix Oyeleke</span><span>Windows desktop · Development preview</span></div>
      </div>
    </footer>
  );
}
