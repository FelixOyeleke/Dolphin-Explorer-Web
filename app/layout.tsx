import type { Metadata } from "next";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dolphin Explorer | AI, MCP and GPU survey analysis", template: "%s | Dolphin Explorer" },
  description:
    "AI-first marine survey analysis with offline Ollama assistance, built-in MCP, and GPU acceleration. Designed for gigabyte and terabyte workloads with indexed access and incremental processing.",
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
