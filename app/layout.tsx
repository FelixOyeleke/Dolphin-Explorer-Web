import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolphin Explorer | Explore the ocean with clarity",
  description:
    "Process, visualize, and analyze marine survey data with Dolphin Explorer, an open-source platform for hydrographers and ocean researchers.",
  icons: { icon: "/dolphin-explorer.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
