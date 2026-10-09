import HeroWaves from "./HeroWaves";

export default function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="page-header">
      <HeroWaves variant="header" />
      <div className="container">
        <div className="page-header-top"><p className="eyebrow">{eyebrow}</p><span>DE / PLATFORM SYSTEM</span></div>
        <h1>{title}</h1>
        {children && <p className="lede">{children}</p>}
      </div>
    </section>
  );
}
