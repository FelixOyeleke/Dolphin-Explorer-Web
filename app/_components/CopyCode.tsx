"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyCode({ code }: { code: string }) {
  const [status, setStatus] = useState("Copy");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("Copied");
    } catch {
      setStatus("Select text to copy");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("Copy"), 3000);
  }
  return <button className="copy-code" type="button" onClick={copy} aria-label="Copy code"><span aria-live="polite">{status}</span></button>;
}
