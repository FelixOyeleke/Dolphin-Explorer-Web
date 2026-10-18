import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import { GitHubMark, navLinks, repo } from "./site";

export default function SiteHeader() {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link className="brand" href="/"><img src="/dolphin-explorer.png" alt="" /><span>Dolphin Explorer</span></Link>
        <NavLinks />
        <a className="nav-github" href={repo} title="Desktop repository (access required)" target="_blank" rel="noreferrer"><GitHubMark /> GitHub</a>
        <MobileMenu links={[...navLinks, { href: repo, label: "GitHub (access required)" }]} />
      </div>
    </header>
  );
}
