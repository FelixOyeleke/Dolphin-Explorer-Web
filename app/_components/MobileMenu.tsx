"use client";

import { useEffect, useRef, useState } from "react";

export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [open]);

  return (
    <div className="mobile-menu" ref={ref}>
      <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu-links" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      {open && (
        <nav id="mobile-menu-links" className="mobile-menu-links">
          {links.map((link) => <a key={link.label} href={link.href} onClick={() => setOpen(false)} {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}</a>)}
        </nav>
      )}
    </div>
  );
}
