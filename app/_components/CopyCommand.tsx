"use client";

import { useState } from "react";

export default function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="copy-command">
      <code><span aria-hidden="true">$</span>{command}</code>
      <button type="button" onClick={copy} aria-label={copied ? "Copied" : "Copy command"}>{copied ? "Copied" : "Copy"}</button>
    </div>
  );
}
