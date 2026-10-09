import Link from "next/link";
import type { Metadata } from "next";
import CodeBlock from "../_components/CodeBlock";
import PageHeader from "../_components/PageHeader";
import { repo } from "../_components/site";

export const metadata: Metadata = { title: "Getting started" };

const toc = [
  { id: "requirements", label: "Requirements" },
  { id: "qt", label: "Install Qt" },
  { id: "gdal", label: "Install GDAL" },
  { id: "build", label: "Build" },
  { id: "run", label: "Run" },
  { id: "test", label: "Test" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

const requirements = [
  "Windows 10 or 11, 64-bit",
  "Visual Studio 2022 or newer with Desktop development with C++",
  "CMake 3.20 or newer",
  "Ninja, supplied by Visual Studio or Qt",
  "Qt 6.7.2 or 6.7.3, msvc2019_64 kit",
  "vcpkg with 64-bit GDAL and its PROJ dependency",
  "Git",
];

const buildSteps = [
  "Refuses to build while DolphinExplorer.exe is running.",
  "Locates a supported Visual Studio installation.",
  "Locates Qt 6.7.x and Ninja.",
  "Initializes the 64-bit MSVC environment with vcvars64.bat.",
  "Configures a Debug build with CMake.",
  "Builds into build_mingw/.",
  "Runs windeployqt for the executable.",
];

const troubleshooting = [
  { q: "Visual Studio is not found", a: "Install the C++ workload and confirm that vcvars64.bat exists under a Visual Studio 2022 or compatible installation. The scripts search Community, Professional, and Build Tools editions in their standard locations." },
  { q: "Qt is not found", a: "Install the msvc2019_64 Qt 6.7.2 or 6.7.3 kit under C:\\Qt, or update the local build configuration if you use a different compatible Qt layout." },
  { q: "CMake cannot find GDAL or PROJ", a: "Confirm that %USERPROFILE%\\vcpkg\\installed\\x64-windows exists, rerun the vcpkg install command, and reconfigure the build directory." },
  { q: "The executable is locked during build", a: "Close Dolphin Explorer before compiling. The build includes a pre-link safety check, and the helper scripts also detect a running DolphinExplorer.exe." },
  { q: "The application starts but raster CRS or drivers fail", a: "Launch through launch.bat so the GDAL and PROJ DLLs and their data directories are placed beside the executable. Check the vcpkg Debug binaries and the share\\gdal and share\\proj data." },
  { q: "Clangd cannot resolve includes", a: "The root .clangd uses build_mingw/compile_commands.json. Run build_mingw.bat at least once; CMake exports compile commands by default." },
];

export default function DocsPage() {
  return (
    <div className="docs-page">
      <PageHeader eyebrow="Docs" title="Your first survey starts here.">
        Set up the Windows toolchain, build Dolphin Explorer from source, and run the verification suite with the same reproducible steps used by the project.
      </PageHeader>

      <section className="signal-strip" aria-label="Supported build profile">
        <div className="container signal-grid signal-grid-compact">
          <div><span>PLATFORM</span><strong>Windows 10 / 11</strong><p>64-bit desktop deployment</p></div>
          <div><span>TOOLCHAIN</span><strong>MSVC + Ninja</strong><p>Qt 6.7 with CMake</p></div>
          <div><span>VERIFICATION</span><strong>CTest suite</strong><p>Readers, processing, geodesy, and UI smoke checks</p></div>
        </div>
      </section>

      <section className="section docs-content">
        <div className="container docs-layout">
          <nav className="toc" aria-label="On this page">
            <p>Setup guide</p>
            <ul>{toc.map((item) => <li key={item.id}><a href={`#${item.id}`}><span className="toc-index">{String(toc.indexOf(item) + 1).padStart(2, "0")}</span>{item.label}</a></li>)}</ul>
            <div className="docs-sidebar-links"><Link href="/formats">Format compatibility ↗</Link><Link href="/architecture">Architecture ↗</Link><a href={`${repo}/issues`} target="_blank" rel="noreferrer">Get help on GitHub ↗</a></div>
          </nav>

          <div className="prose">
            <div className="docs-start"><p className="eyebrow">Build from source</p><h2>Choose your next step.</h2><p>Setting up for the first time? Start with the requirements. Already have the toolchain? Jump straight to the build.</p><div className="docs-shortcuts"><a href="#requirements"><span>01 / PREPARE</span><strong>Set up your machine</strong><small>Dependencies and supported kits →</small></a><a href="#build"><span>02 / BUILD</span><strong>Get Dolphin running</strong><small>Clone, compile, and launch →</small></a><a href="#troubleshooting"><span>03 / RESOLVE</span><strong>Find a fix</strong><small>Common setup issues →</small></a></div></div>
            <h2 id="requirements">Requirements</h2>
            <p>The primary build is tested around the following Windows toolchain:</p>
            <ul className="requirements-grid">{requirements.map((r) => <li key={r}><span aria-hidden="true">✓</span>{r}</li>)}</ul>
            <p>Qt components used: Core, Gui, Widgets, OpenGL, OpenGLWidgets, Concurrent, Svg, and Network.</p>
            <div className="callout"><p>The <code>build_mingw/</code> directory name is historical. The primary build invokes Microsoft <code>cl.exe</code>; do not configure that directory with MinGW or GCC.</p></div>

            <h2 id="qt">1. Install Qt</h2>
            <p>Use the Qt online installer and install one of the MSVC kits the build script recognizes:</p>
            <CodeBlock label="Supported installation paths" code={"C:\\Qt\\6.7.3\\msvc2019_64\nC:\\Qt\\6.7.2\\msvc2019_64"} />
            <p>The script looks for Ninja in Visual Studio first, then at <code>C:\Qt\Tools\Ninja\ninja.exe</code>.</p>

            <h2 id="gdal">2. Install GDAL with vcpkg</h2>
            <p>The build expects vcpkg under <code>%USERPROFILE%\vcpkg</code> and the <code>x64-windows</code> triplet:</p>
            <CodeBlock label="Command Prompt" code={"git clone https://github.com/microsoft/vcpkg %USERPROFILE%\\vcpkg\n%USERPROFILE%\\vcpkg\\bootstrap-vcpkg.bat\n%USERPROFILE%\\vcpkg\\vcpkg install \"gdal[core,png,jpeg]:x64-windows\""} />
            <p>GDAL supplies raster drivers; PROJ and supporting libraries install as dependencies. The launch workflow copies the required DLLs and data beside the executable.</p>

            <h2 id="build">3. Build</h2>
            <p>Clone the repository, then run the primary MSVC and Ninja build from Command Prompt at the repository root:</p>
            <CodeBlock label="Command Prompt" code={`git clone ${repo}.git\ncd Dolphin-Explorer\nbuild_mingw.bat`} />
            <p className="docs-step-caption">What happens during the build</p>
            <ol className="build-checklist">{buildSteps.map((s) => <li key={s}>{s}</li>)}</ol>
            <p>After the first configure, use the faster incremental build:</p>
            <CodeBlock code="build_quick.bat" />
            <p>An alternative Visual Studio and MSBuild configuration is available through <code>build.bat</code>, which builds into <code>build\Debug\</code>.</p>

            <h2 id="run">4. Run</h2>
            <CodeBlock code="launch.bat" />
            <p>The script deploys the GDAL and PROJ runtime files into <code>build_mingw/</code> and starts <code>DolphinExplorer.exe</code>. Create or open a <code>.dlp</code> project, then import survey data through the import workflow or by dragging a file onto the map view.</p>

            <h2 id="test">5. Test</h2>
            <p>Build first, then run every CTest-registered test, or a focused test by name:</p>
            <CodeBlock label="Command Prompt" code={"cd build_mingw\nctest --output-on-failure\n\nREM Run a single test\nctest -R ParsedCache --output-on-failure"} />
            <p>The suite covers the XTF, JSF, and SEG-Y readers, parsed artifacts and raster I/O, project storage, node graphs and processing, georeferencing, waterfall and sub-bottom algorithms, map geometry, task cancellation, and OpenGL smoke checks.</p>

            <div className="docs-next"><p className="eyebrow">Ready to explore</p><h3>Bring your first dataset.</h3><p>Check the supported formats and their current limitations before importing a survey.</p><Link className="more" href="/formats">Browse supported formats <span aria-hidden="true">→</span></Link></div>
            <h2 id="troubleshooting">Troubleshooting</h2>
            <div className="faq">
              {troubleshooting.map((t) => <details key={t.q}><summary>{t.q}</summary><p>{t.a}</p></details>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
