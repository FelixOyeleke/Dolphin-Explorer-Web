import Link from "next/link";

const mcpTools = [
  { group: "Discover", tools: ["list_open_projects"] },
  { group: "Inspect", tools: ["probe_survey_file", "get_project_summary", "get_layer_metadata"] },
  { group: "Decode", tools: ["inspect_sidescan_pings", "inspect_subbottom_traces"] },
  { group: "Annotate", tools: ["list_contacts", "list_features", "get_feature_vertices"] },
];

export default function HomeAssistants() {
  return (
    <section className="section ai-section" id="ai" aria-labelledby="ai-title">
      <div className="container ai-layout">
        <div className="section-intro ai-intro">
          <p className="eyebrow">Local AI + MCP</p>
          <h2 id="ai-title">AI that works where your data lives.</h2>
          <p>Ask questions about a survey without sending it anywhere. Use the built-in assistant, or connect the AI client you already use.</p>
          <div className="ai-points">
            <article>
              <h3>Offline assistant with Ollama</h3>
              <p>Run a local model on your own machine. Once the model is downloaded, keep working without an internet connection.</p>
              <Link className="more" href="/docs#local-ai">Set up local AI <span aria-hidden="true">→</span></Link>
            </article>
            <article>
              <h3>Built-in MCP server</h3>
              <p>Give compatible AI clients structured access to projects, layers, decoded records, contacts, and features.</p>
              <Link className="more" href="/docs#mcp">Connect an AI client <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </div>
        <figure className="mcp-panel">
          <div className="mcp-panel-head">
            <span className="mcp-panel-title">DolphinExplorerMcp</span>
            <span className="mcp-panel-badge">Read-only</span>
          </div>
          <dl className="mcp-tools">
            {mcpTools.map((group) => (
              <div key={group.group}>
                <dt>{group.group}</dt>
                {group.tools.map((tool) => <dd key={tool}><code>{tool}</code></dd>)}
              </div>
            ))}
          </dl>
          <figcaption>Every tool is read-only. List results are paged, and values missing from a source are returned as null.</figcaption>
        </figure>
      </div>
    </section>
  );
}
