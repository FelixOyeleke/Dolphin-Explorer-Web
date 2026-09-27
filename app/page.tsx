const repo = "https://github.com/felixoyeleke10/Dolphin-Explorer";

function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return <span aria-hidden="true" className={`arrow arrow-${direction}`}>{direction === "down" ? "↓" : "→"}</span>;
}

function AppPreview() {
  return (
    <div className="app-preview" aria-label="Dolphin Explorer 3D workspace preview">
      <div className="app-chrome">
        <div className="app-brand"><img src="/dolphin-explorer.png" alt="" /><strong>Dolphin <span>Explorer</span></strong></div>
        <div className="app-tabs"><span className="selected">▣ 3D View</span><span>⌁ Map</span><span>▥ Analysis</span><span>◌ Processing</span><span>⚒ Tools</span></div>
        <div className="app-project">Survey 2024 <i /></div>
      </div>
      <div className="app-body">
        <aside className="layer-panel">
          <div className="panel-heading"><b>Project</b><span>×</span></div>
          <div className="tree-item folder"><span>⌄</span><b>▰</b> Norway_Shelf_2024</div>
          <div className="tree-item folder indent"><span>⌄</span><b>▰</b> Survey Data</div>
          <div className="tree-item indent-2 active"><span>✓</span> Multibeam (MBES)</div>
          <div className="tree-item indent-2"><span>✓</span> Point Cloud</div>
          <div className="tree-item indent-2 muted"><span>□</span> Backscatter</div>
          <div className="tree-item indent-2 muted"><span>□</span> Sidescan</div>
          <div className="tree-item folder indent"><span>⌄</span><b>▰</b> Vector Layers</div>
          <div className="tree-item indent-2"><span>✓</span> Contours (5 m)</div>
          <div className="tree-item indent-2"><span>✓</span> Survey Lines</div>
          <div className="tree-item indent-2 muted"><span>□</span> Boundaries</div>
          <div className="tree-item indent-2"><span>✓</span> Areas of Interest</div>
          <div className="tree-item folder indent"><span>⌄</span><b>▰</b> Basemaps</div>
          <div className="tree-item indent-2 muted"><span>□</span> World Ocean</div>
          <div className="tree-item indent-2 muted"><span>□</span> Coastline</div>
          <div className="tree-item indent-2"><span>✓</span> Hillshade</div>
        </aside>
        <div className="map-panel">
          <div className="map-toolbar"><span className="tool active">↖</span><span>✋</span><span>⌕</span><span>◉</span><span>⌁</span><span>⌗</span><span className="toolbar-spacer" /><b>3D</b><span>⚙</span></div>
          <div className="map-canvas">
            <div className="terrain terrain-a" /><div className="terrain terrain-b" /><div className="terrain terrain-c" />
            <div className="contour contour-a" /><div className="contour contour-b" /><div className="contour contour-c" /><div className="contour contour-d" />
            <div className="depth-label depth-one">-500</div><div className="depth-label depth-two">-1000</div><div className="depth-label depth-three">-1500</div><div className="depth-label depth-four">-2000</div>
            <div className="axis"><span>Z</span><i /><b>N</b><em>E</em></div>
            <div className="color-legend"><strong>Depth (m)</strong><div className="legend-gradient" /><span>0</span><span>-500</span><span>-1,000</span><span>-1,500</span><span>-2,000</span><span>-2,500</span></div>
            <div className="map-badge">Multibeam (MBES)<small>Point cloud · 12,487,321 points</small></div>
            <div className="map-controls"><span className="active">↖</span><span>✋</span><span>⊙</span><span>⌕</span><span>◌</span><span>⌁</span><span>⌑</span></div>
          </div>
          <div className="app-status"><span><i /> Processing point cloud...</span><div className="status-progress"><b /> <em>78%</em></div><span>Lat 68.4213° N&nbsp; | &nbsp;Lon 15.3271° E</span><span>Depth −1,842 m</span><span className="status-right">5.8 / 16.0 GB <b className="mini-progress" /></span></div>
        </div>
        <aside className="inspector-panel">
          <div className="inspector-tabs"><span className="active">Properties</span><span>Styling</span><span>Analysis</span></div>
          <div className="inspector-content"><div className="inspector-title"><span>▣</span><b>Multibeam (MBES)</b><span>◉</span></div><div className="inspector-rule" />
            <dl><div><dt>Type</dt><dd>Point Cloud</dd></div><div><dt>Points</dt><dd>12,487,321</dd></div><div><dt>Source</dt><dd>EM2040</dd></div><div><dt>Date</dt><dd>2024-06-18</dd></div><div><dt>CRS</dt><dd>EPSG:32633</dd></div><div><dt>Depth Range</dt><dd>−2,543 m – 12.4 m</dd></div></dl>
            <div className="inspector-section"><b>⌄ Visualization</b><label>Color by <span>Depth⌄</span></label><label>Colormap <span className="color-chip">Ocean Turbo</span></label><label>Point size <span className="slider"><i /></span></label><label>Opacity <span className="slider opacity"><i /></span></label></div>
            <div className="inspector-section collapsed"><b>› Filters</b></div><div className="inspector-section collapsed"><b>› Clipping</b></div><div className="inspector-section collapsed"><b>› Contour Generation</b></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return <article className="feature-card"><div className={`feature-icon ${icon}`} aria-hidden="true">{icon === "chip" ? "▦" : icon === "layers" ? "▱" : "◇"}</div><div><h3>{title}</h3><p>{children}</p></div></article>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <a className="brand" href="#top"><img src="/dolphin-explorer.png" alt="Dolphin Explorer logo" /><span>Dolphin <b>Explorer</b></span></a>
        <div className="nav-links"><a className="active" href="#product">Product</a><a href="#features">Features</a><a href="#docs">Documentation</a><a href="#community">Community</a><a href="#docs">Download</a></div>
        <a className="source-link" href={repo} target="_blank" rel="noreferrer"><span className="github-mark">●</span><span><b>Open Source</b><small>Built for a deeper understanding</small></span></a>
        <button className="menu-button" aria-label="Open navigation">☰</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" /><div className="wave-line" /><div className="hero-content">
          <div className="hero-kicker"><span /> OPEN-SOURCE MARINE SURVEY PLATFORM</div>
          <h1>Explore the ocean <span>with clarity</span><b>.</b></h1>
          <p>Process, visualize, and analyze marine survey data with an open-source platform<br className="desktop-break" /> built for hydrographers, ocean researchers, and the blue economy.</p>
          <div className="hero-actions"><a className="button primary" href={repo} target="_blank" rel="noreferrer"><span className="button-icon">↓</span> Download Dolphin Explorer</a><a className="button secondary" href="#docs"><span className="book-icon">▣</span> View documentation <Arrow /></a></div>
        </div>
        <div className="hero-preview-wrap"><AppPreview /><div className="preview-glow" /></div>
      </section>

      <section className="feature-strip" id="features"><FeatureCard icon="chip" title="GPU-accelerated processing">Handle massive bathymetry, backscatter, and point cloud datasets with high-performance processing and real-time rendering.</FeatureCard><FeatureCard icon="cube" title="3D visualization">Explore complex seafloor terrain with interactive 3D views, point clouds, contours, and multiple data layers.</FeatureCard><FeatureCard icon="layers" title="Open data workflows">Work with open standards and common marine formats. Integrate, analyze, and share data in a transparent, reproducible way.</FeatureCard></section>

      <section className="platform-section" id="product"><div className="section-eyebrow">A CLEARER VIEW OF COMPLEX DATA</div><h2>From first ping to final chart.</h2><p>Bring the whole survey into one workspace. Dolphin Explorer keeps layers, coordinates, processing, and interpretation connected so teams can move confidently from raw files to decisions.</p><div className="platform-points"><div><strong>01</strong><span>Import open formats</span></div><div><strong>02</strong><span>Inspect in 2D + 3D</span></div><div><strong>03</strong><span>Process and export</span></div></div></section>

      <section className="docs-section" id="docs"><div><div className="section-eyebrow">READY TO DIVE IN?</div><h2>Build your next<br /><span>survey workflow.</span></h2><p>Explore the source, read the current build notes, and follow the project as the platform grows.</p></div><div className="docs-actions"><a href={repo} target="_blank" rel="noreferrer">Read the documentation <Arrow /></a><a href={`${repo}/issues`} target="_blank" rel="noreferrer">Join the community <Arrow /></a></div></section>

      <footer id="community"><a className="brand" href="#top"><img src="/dolphin-explorer.png" alt="" /><span>Dolphin <b>Explorer</b></span></a><span>Open-source ocean mapping for deeper understanding.</span><a href={repo} target="_blank" rel="noreferrer">GitHub <Arrow /></a></footer>
    </main>
  );
}
