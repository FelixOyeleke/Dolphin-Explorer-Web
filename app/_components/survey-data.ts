export type SurveyVideoSource = {
  src: string;
  width: number;
  height: number;
  label: string;
  badge: string;
  caption: string;
};

export type SurveyDataType = {
  href: string;
  name: string;
  abbreviation: string;
  title: string;
  description: string;
  summary: string;
  overviewTitle: string;
  overview: string;
  formatIds: readonly string[];
  video: SurveyVideoSource;
  toolsTitle: string;
  tools: readonly { title: string; body: string }[];
};

export const sideScanData = {
  href: "/data/side-scan-sonar",
  name: "Side-scan sonar",
  abbreviation: "SSS",
  title: "Read the detail in every sonar line.",
  description: "Inspect side-scan sonar data with waterfall and map views, seabed interpretation, reusable processing graphs, and survey-wide gain normalization in Dolphin Explorer.",
  summary: "Review sonar imagery, interpret the seabed, and turn recorded survey lines into useful products.",
  overviewTitle: "From survey coverage to acoustic detail.",
  overview: "Bring recorded side-scan data into a project, review its coverage on the map, and inspect individual lines in the waterfall. Keep contacts, seabed picks, and processing work connected to the source.",
  formatIds: ["xtf", "jsf", "dlpd"],
  video: {
    src: "/dolphin-explorer-console.mp4",
    width: 1876,
    height: 1266,
    label: "Dolphin Explorer side-scan sonar data demo",
    badge: "SSS DEMO",
    caption: "Side-scan sonar data in Dolphin Explorer.",
  },
  toolsTitle: "Inspect, interpret, and refine your imagery.",
  tools: [
    { title: "Waterfall inspection", body: "Review long lines in the OpenGL waterfall renderer. Adjust palettes and radiometric controls, and use the review-coverage strip to track which portions you have inspected." },
    { title: "Full-line seabed detection", body: "Detect an opened line or all lines in the survey with threshold and first-return methods, port/starboard agreement, and continuity checks. Track progress in the Jobs panel and skip profiles whose inputs have not changed." },
    { title: "Survey-wide consistency", body: "Use empirical gain normalization (EGN) across a survey and apply correction, filtering, and enhancement steps through a reusable processing graph." },
    { title: "Contacts and evidence", body: "Create and review contacts, capture snapshots, and make measurements while keeping each observation in its survey context." },
    { title: "Manual interpretation and export", body: "Keep manual picks as detection anchors and save profile settings with the project. Review overlays on the map or waterfall, then export time, position, range, confidence, pick source, and altitude as CSV." },
    { title: "Navigation quality", body: "Apply smoothing and repair to noisy or dropped navigation positions before reviewing the survey coverage." },
  ],
} satisfies SurveyDataType;

export const subBottomData = {
  href: "/data/sub-bottom-profiler",
  name: "Sub-bottom profiler",
  abbreviation: "SBP",
  title: "See beneath the seabed.",
  description: "Bring sub-bottom profiler data into Dolphin Explorer. Import SEG-Y, supported JSF and XTF records, inspect acoustic sections, and review profiles in survey context.",
  summary: "Inspect acoustic profiles and review sub-bottom sections alongside the rest of your survey.",
  overviewTitle: "A dedicated view of the sub-bottom profile.",
  overview: "Bring recorded sub-bottom data into the same workspace as your tracks and rasters. Use profile display and correction tools to review acoustic sections, then return to the map for survey context.",
  formatIds: ["segy", "jsf", "xtf", "dlpd"],
  video: {
    src: "/dolphin-explorer-sbp-demo.mp4",
    width: 1876,
    height: 1266,
    label: "Dolphin Explorer sub-bottom profiler (SBP) data demo",
    badge: "SBP DEMO",
    caption: "Sub-bottom profiler data in Dolphin Explorer.",
  },
  toolsTitle: "Explore the section. Keep the context.",
  tools: [
    { title: "Dedicated profile views", body: "Review recorded sub-bottom data in its acoustic section view, with profile display and correction tools." },
    { title: "Precise section navigation", body: "Use wheel and trackpad navigation, fractional zoom, and cursor-anchored scaling to move through the section." },
    { title: "Source and layer inspection", body: "Inspect imported source and layer metadata, and organize the profiles as part of your project’s data library." },
    { title: "Shared survey context", body: "Keep sub-bottom profiles alongside survey tracks, side-scan layers, and georeferenced rasters in one project." },
  ],
} satisfies SurveyDataType;

export const processingVideo: SurveyVideoSource = {
  src: "/dolphin-explorer-sbp-nodes.mp4",
  width: 1280,
  height: 926,
  label: "Dolphin Explorer processing node graph demo",
  badge: "NODES DEMO",
  caption: "Node graph processing in Dolphin Explorer.",
};

export const surveyDataTypes = [sideScanData, subBottomData];
