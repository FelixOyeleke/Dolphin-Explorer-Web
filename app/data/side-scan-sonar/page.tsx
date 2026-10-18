import type { Metadata } from "next";
import DataTypePage from "../../_components/DataTypePage";
import { sideScanData } from "../../_components/survey-data";

export const metadata: Metadata = { title: sideScanData.name, description: sideScanData.description };

export default function SideScanSonarPage() {
  return <DataTypePage data={sideScanData} />;
}
