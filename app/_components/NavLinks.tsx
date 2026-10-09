"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./site";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" aria-label="Primary">
      {navLinks.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return <Link key={link.href} href={link.href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>{link.label}</Link>;
      })}
    </nav>
  );
}
