import Link from "next/link";
import { surveyDataTypes } from "./survey-data";

export default function DataNav({ current }: { current: string }) {
  const links = [{ href: "/data", name: "Overview" }, ...surveyDataTypes];

  return (
    <div className="data-nav-wrap">
      <nav className="container data-nav" aria-label="Survey data">
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={current === link.href ? "page" : undefined}>{link.name}</Link>
        ))}
      </nav>
    </div>
  );
}
