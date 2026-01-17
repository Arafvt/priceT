import { useEffect } from "react";

export default function useProblemAutoSlider(rootRef, trackRef, opts = {}) {
  const SPEED = typeof opts.speed === "number" ? opts.speed : 35;

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    let running = true;
    const pause = () => { running = false; };
    const resume = () => { running = true; };

    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);
    root.addEventListener("touchstart", pause, { passive: true });
    root.addEventListener("touchend", resume, { passive: true });

    let dir = 1;
    let lastTs = 0;
    let rafId = 0;

    function tick(ts) {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (running) {
        const max = track.scrollWidth - track.clientWidth;
        if (max > 2) {
          track.scrollLeft += dir * SPEED * dt;
          if (track.scrollLeft <= 0) dir = 1;
          if (track.scrollLeft >= max) dir = -1;
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      root.removeEventListener("mouseenter", pause);
      root.removeEventListener("mouseleave", resume);
      root.removeEventListener("touchstart", pause);
      root.removeEventListener("touchend", resume);
    };
  }, [rootRef, trackRef, SPEED]);
}
