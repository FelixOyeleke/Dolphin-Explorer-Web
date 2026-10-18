import Link from "next/link";
import DataNav from "./DataNav";
import PageHeader from "./PageHeader";
import SurveyVideo from "./SurveyVideo";
import { supportedFormats } from "./formats";
import type { SurveyDataType } from "./survey-data";

export default function DataTypePage({ data }: { data: SurveyDataType }) {
  const formats = data.formatIds.flatMap((id) => supportedFormats.filter((format) => format.id === id));

  return (
    <>
      <PageHeader eyebrow={`Survey data / ${data.abbreviation}`} title={data.title}>{data.summary}</PageHeader>
      <DataNav current={data.href} />

      <section className="section data-demo-section" aria-labelledby="data-overview-title">
        <div className="container data-demo-layout">
          <div className="section-intro">
            <p className="eyebrow">{data.name}</p>
            <h2 id="data-overview-title">{data.overviewTitle}</h2>
            <p>{data.overview}</p>
            <ul className="sbp-formats" aria-label={`${data.name} source formats`}>
              {formats.map((format) => <li key={format.id}><Link href={`/formats#${format.id}`}>{format.name}<span aria-hidden="true">↗</span></Link></li>)}
            </ul>
            <Link className="more" href="/formats">Compatibility notes <span aria-hidden="true">→</span></Link>
          </div>
          <SurveyVideo video={data.video} />
        </div>
      </section>

      <section className="section data-tools-section" id="tools" aria-labelledby="data-tools-title">
        <div className="container">
          <div className="section-intro"><p className="eyebrow">Working with {data.abbreviation}</p><h2 id="data-tools-title">{data.toolsTitle}</h2></div>
          <div className="data-tools-grid">
            {data.tools.map((tool, index) => (
              <article key={tool.title}>
                <span className="data-step-number">0{index + 1}</span>
                <div><h3>{tool.title}</h3><p>{tool.body}</p></div>
              </article>
            ))}
          </div>
          <Link className="more" href="/docs">Set up your workspace <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
