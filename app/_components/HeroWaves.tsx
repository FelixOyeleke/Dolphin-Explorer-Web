"use client";

import { useEffect, useRef } from "react";

export default function HeroWaves({ variant = "hero" }: { variant?: "hero" | "header" | "section" | "footer" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    // Each visit starts with a different color field; layered frequencies keep
    // the movement organic without abrupt random changes between frames.
    const colorPhases = Array.from({ length: 4 }, () => Math.random() * Math.PI * 2);
    let width = 0, height = 0, frame = 0, time = 0, previous = 0;
    let visible = false;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const columns = width < 600 ? 76 : variant === "hero" ? 150 : 110;
      const rows = variant === "hero" ? 48 : 36;
      const amplitude = variant === "hero" ? 1 : Math.min(height / 550, 0.8);
      for (let row = 0; row < rows; row++) {
        const depth = row / (rows - 1);
        const perspective = 0.58 + depth * 0.7;
        for (let col = 0; col < columns; col++) {
          const u = col / (columns - 1);
          const x = (u - 0.5) * width * 1.65 * perspective + width / 2;
          const swell = Math.sin(u * 9 + depth * 3 - time * 0.32) * 66
            + Math.sin(u * 15 - depth * 5 + time * 0.23) * 29
            + Math.cos(depth * 8 + u * 4 + time * 0.18) * 22;
          const y = height * (variant === "hero" ? 0.20 : 0.32) + depth * height * 0.34 + swell * perspective * amplitude;
          const edge = Math.sin(Math.PI * u) * Math.sin(Math.PI * depth);
          const center = Math.exp(-Math.pow((x - width / 2) / (width * 0.3), 2));
          const alpha = (0.2 + depth * 0.7) * edge * (1 - center * 0.76);
          const colorField = Math.sin(u * 7.3 + depth * 3.7 + time * 0.19 + colorPhases[0])
            + 0.65 * Math.sin(u * 13.1 - depth * 8.3 - time * 0.13 + colorPhases[1])
            + 0.4 * Math.cos(u * 3.9 + depth * 11.7 + time * 0.29 + colorPhases[2]);
          const hue = ((215 + colorField * 145 + time * 2.3) % 360 + 360) % 360;
          const shimmer = 0.5 + 0.5 * Math.sin(u * 9.7 - depth * 6.1 + time * 0.23 + colorPhases[3]);
          ctx.fillStyle = `hsla(${hue}, ${78 + shimmer * 16}%, ${62 + shimmer * 12}%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 0.45 + depth * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    function animate(stamp: number) {
      if (previous) time += Math.min((stamp - previous) / 1000, 0.05);
      previous = stamp;
      draw();
      frame = requestAnimationFrame(animate);
    }
    function sync() {
      cancelAnimationFrame(frame);
      previous = 0;
      draw();
      if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(animate);
    }
    const resize = new ResizeObserver(() => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      sync();
    });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    resize.observe(canvas);
    observer.observe(canvas);
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      reduced.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [variant]);
  return <div className={`hero-waves wave-${variant}`} aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
