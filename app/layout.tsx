import type { Metadata } from "next";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dolphin Explorer | Hydrographic survey analysis and processing", template: "%s | Dolphin Explorer" },
  description:
    "Explore, inspect, and process hydrographic survey data with Dolphin Explorer. Support vessel-based acquisition, quality control, interpretation, and post-survey analysis in one workspace.",
  icons: { icon: "/dolphin-explorer.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
