import measurements from "../../public/benchmarks/import-2026-10-18.json";

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

const results = measurements.datasets.map((dataset) => ({
  ...dataset,
  size: (dataset.bytes / 1_000_000).toFixed(2),
  first: (dataset.runs[0].totalMs / 1000).toFixed(2),
  median: (median(dataset.runs.map((run) => run.totalMs)) / 1000).toFixed(2),
}));

export const importBenchmarkHighlight = results[0];

export default function ImportBenchmarks() {
  return (
    <section className="section benchmark-section" id="performance" aria-labelledby="benchmark-title">
      <div className="container">
        <div className="benchmark-layout">
          <div className="section-intro benchmark-intro">
            <p className="eyebrow">Measured performance</p>
            <h2 id="benchmark-title">Real surveys.<br />Measured speed.</h2>
            <p>Original survey files, indexed, fully decoded, and saved. Every run validated against the source samples.</p>
            <p className="benchmark-machine">{measurements.machine.cpu} · {measurements.machine.ram} RAM · SSD storage</p>
          </div>
          <div>
            <div className="benchmark-panel">
              <table className="benchmark-table">
                <caption>Import time <span>3 runs per file</span></caption>
                <thead>
                  <tr><th scope="col">Survey file</th><th scope="col">First run</th><th scope="col">Median</th></tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr key={result.id}>
                      <th scope="row"><span className="benchmark-format">{result.format}</span><span>{result.size} <small>MB</small></span></th>
                      <td>{result.first} <span>s</span></td>
                      <td><strong>{result.median} <span>s</span></strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="benchmark-note">Optimized CPU import. Windows disk cache was not cleared. Display and GPU processing are excluded.</p>
          </div>
        </div>
        <details className="benchmark-method">
          <summary>Test setup and all run times <span aria-hidden="true" /></summary>
          <div className="benchmark-method-content">
            <div>
              <h3>Test conditions</h3>
              <p>Tested <time dateTime={measurements.date}>{measurements.displayDate}</time> on {measurements.machine.os}, using optimized production importer code.</p>
              <dl className="benchmark-storage">
                <div><dt>Source drive</dt><dd>{measurements.machine.inputStorage}</dd></div>
                <div><dt>Output drive</dt><dd>{measurements.machine.outputStorage}</dd></div>
              </dl>
              <p>Each run wrote a fresh artifact store. The workstation remained in normal use and disk caching was allowed. Timings include indexing, decoding, and saving; application startup, display updates, and processing nodes are excluded.</p>
            </div>
            <div>
              <h3>Every run, in seconds</h3>
              <ul className="benchmark-trials">
                {results.map((result) => (
                  <li key={result.id}>
                    <span>{result.size} MB {result.format}</span>
                    <strong>{result.runs.map((run) => (run.totalMs / 1000).toFixed(2)).join(" / ")}</strong>
                  </li>
                ))}
              </ul>
              <p>All nine runs passed sample validation. Validation is outside the timed import. These measurements describe the files tested; larger surveys require separate testing.</p>
              <a className="benchmark-download" href="/benchmarks/import-2026-10-18.json" download>Download measurements (JSON) <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
