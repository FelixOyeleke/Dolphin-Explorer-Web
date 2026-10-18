import type { Metadata } from "next";
import Link from "next/link";
import DataNav from "../_components/DataNav";
import PageHeader from "../_components/PageHeader";
import { surveyDataTypes } from "../_components/survey-data";

export const metadata: Metadata = {
  title: "Survey data",
  description: "Explore Dolphin Explorer workflows for side-scan sonar and sub-bottom profiler data, including demos, supported formats, profile inspection, and survey context.",
};

export default function DataPage() {
  return (
    <>
      <PageHeader eyebrow="Survey data" title="One survey. Different acoustic views.">
        Explore dedicated workflows for side-scan sonar and sub-bottom profiler data. Bring each source into a project and move between acoustic detail and survey context.
      </PageHeader>
      <DataNav current="/data" />
      <section className="section" aria-labelledby="data-types-title">
        <div className="container">
          <div className="section-intro"><p className="eyebrow">Choose your data</p><h2 id="data-types-title">Start with the view you need.</h2></div>
          <div className="data-type-grid">
            {surveyDataTypes.map((data, index) => (
              <Link className="data-type-card" href={data.href} key={data.href}>
                <div className="data-card-top"><span className="data-card-code">{data.abbreviation}</span><span>0{index + 1} / ACOUSTIC DATA</span></div>
                <h3>{data.name}</h3>
                <p>{data.summary}</p>
                <span className="data-card-action">Explore {data.abbreviation} data <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
          <Link className="more" href="/formats">Check file compatibility <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
