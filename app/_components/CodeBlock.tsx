import CopyCode from "./CopyCode";

// Lines starting with "#" render as comments.
export default function CodeBlock({ code, label }: { code: string; label?: string }) {
  const lines = code.trim().split("\n");

  return (
    <div className="terminal" role="figure" aria-label={label ?? "Code"}>
      <div className="terminal-label"><span>{label ?? "Command Prompt"}</span><CopyCode code={code.trim()} /></div>
      <pre><code>{lines.map((line, i) => <span key={i} className={(line.startsWith("#") || line.startsWith("REM ")) ? "c" : undefined}>{line}{i < lines.length - 1 ? "\n" : ""}</span>)}</code></pre>
    </div>
  );
}
