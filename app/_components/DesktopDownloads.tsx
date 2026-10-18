import Link from "next/link";

const platforms = ["Windows", "macOS", "Linux"] as const;
type Platform = (typeof platforms)[number];

function PlatformIcon({ platform }: { platform: Platform }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {platform === "Windows" ? (
        <><rect x="3" y="3" width="7" height="7" rx=".5" /><rect x="14" y="3" width="7" height="7" rx=".5" /><rect x="3" y="14" width="7" height="7" rx=".5" /><rect x="14" y="14" width="7" height="7" rx=".5" /></>
      ) : platform === "macOS" ? (
        <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M12 17v4M8 21h8" /></>
      ) : (
        <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>
      )}
    </svg>
  );
}

export default function DesktopDownloads() {
  return (
    <div className="desktop-downloads" id="downloads">
      <p className="download-label">Desktop downloads</p>
      <div className="platform-downloads" role="group" aria-label="Desktop downloads" aria-describedby="download-status">
        {platforms.map((platform) => (
          <button className="platform-download" type="button" key={platform} disabled aria-label={`Download for ${platform}: coming soon`}>
            <PlatformIcon platform={platform} />
            <span className="platform-download-copy"><strong>{platform}</strong><span>Coming soon</span></span>
          </button>
        ))}
      </div>
      <p className="download-note" id="download-status">Installers are coming soon. <Link href="/docs#build">Windows source build guide <span aria-hidden="true">→</span></Link></p>
    </div>
  );
}
