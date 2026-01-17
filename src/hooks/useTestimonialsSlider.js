import { useEffect } from "react";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function useTestimonialsSlider({ viewportRef, prevRef, nextRef }) {
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const cards = Array.from(viewport.querySelectorAll("[data-card]"));
    const prev = prevRef.current;
    const next = nextRef.current;

    function scrollToIndex(i) {
      const idx = clamp(i, 0, cards.length - 1);
      const card = cards[idx];
      if (!card) return;
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    function updateActive() {
      const vpRect = viewport.getBoundingClientRect();
      const vpCenter = vpRect.left + vpRect.width / 2;

      let bestIdx = 0;
      let bestDist = Infinity;

      cards.forEach((card, idx) => {
        const r = card.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const dist = Math.abs(c - vpCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      cards.forEach((c, idx) => c.classList.toggle("is-active", idx === bestIdx));
      viewport.dataset.activeIndex = String(bestIdx);
    }

    function onPrev() {
      const cur = Number(viewport.dataset.activeIndex || "0");
      scrollToIndex(cur - 1);
    }

    function onNext() {
      const cur = Number(viewport.dataset.activeIndex || "0");
      scrollToIndex(cur + 1);
    }

    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    function onPointerDown(e) {
      isDown = true;
      startX = e.pageX ?? (e.touches?.[0]?.pageX ?? 0);
      startScroll = viewport.scrollLeft;
      viewport.style.cursor = "grabbing";
      viewport.style.userSelect = "none";
    }

    function onPointerUp() {
      isDown = false;
      viewport.style.cursor = "";
      viewport.style.userSelect = "";
    }

    function onPointerMove(e) {
      if (!isDown) return;
      const x = e.pageX ?? (e.touches?.[0]?.pageX ?? 0);
      const dx = x - startX;
      viewport.scrollLeft = startScroll - dx;
    }

    viewport.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("mousemove", onPointerMove);

    viewport.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchend", onPointerUp, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    const onScroll = () => requestAnimationFrame(updateActive);
    viewport.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => requestAnimationFrame(updateActive);
    window.addEventListener("resize", onResize);

    requestAnimationFrame(updateActive);

    return () => {
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);

      viewport.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("mousemove", onPointerMove);

      viewport.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchend", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);

      viewport.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [viewportRef, prevRef, nextRef]);
}
