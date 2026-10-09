import type { ReactNode } from "react";

export default function HomeSurface({ children }: { children: ReactNode }) {
  return <div className="home-surface">{children}</div>;
}
