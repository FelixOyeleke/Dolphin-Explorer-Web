import type { Metadata } from "next";
import DataTypePage from "../../_components/DataTypePage";
import { subBottomData } from "../../_components/survey-data";

export const metadata: Metadata = { title: subBottomData.name, description: subBottomData.description };

export default function SubBottomProfilerPage() {
  return <DataTypePage data={subBottomData} />;
}
