"use client";

import { useEffect } from "react";

// Native scroll is the source of truth; no wheel/touch interception or timed playback.
export function ScrollController() {
  useEffect(() => {
    const journey = document.querySelector<HTMLElement>(".journey");
    if (!journey) return;
    const chapters = [...journey.querySelectorAll<HTMLElement>(".chapter")];
    const stops = [
      ...journey.querySelectorAll<HTMLAnchorElement>(".depth-stop"),
    ];
    const motion = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-height: 520px)",
    );
    let frame = 0;
    let active = -1;

    const render = () => {
      frame = 0;
      if (motion.matches) {
        active = -1;
        journey.dataset.enhanced = "false";
        chapters.forEach((chapter) => {
          chapter.inert = false;
          chapter.removeAttribute("aria-hidden");
        });
        return;
      }
      journey.dataset.enhanced = "true";
      const stage = journey.querySelector<HTMLElement>(".journey-stage")!;
      const distance = journey.offsetHeight - stage.offsetHeight;
      const progress = Math.max(
        0,
        Math.min(1, -journey.getBoundingClientRect().top / distance),
      );
      const position = progress * 6.4;
      const next = Math.min(6, Math.floor(position + 0.15));
      const expansion = Math.min(1, progress / 0.85);
      journey.style.setProperty("--expansion", expansion.toFixed(4));
      journey.style.setProperty("--progress", progress.toFixed(4));
      journey.style.setProperty("--turn", `${-24 + expansion * 9}deg`);
      if (next !== active) {
        active = next;
        journey.dataset.active = String(active);
        chapters.forEach((chapter, index) => {
          chapter.dataset.active = String(index === active);
          chapter.inert = index !== active;
          chapter.setAttribute("aria-hidden", String(index !== active));
        });
        stops.forEach((stop, index) => {
          if (index === active) stop.setAttribute("aria-current", "step");
          else stop.removeAttribute("aria-current");
        });
      }
      chapters.forEach((chapter, index) => {
        const offset = position - index;
        const opacity =
          index === 6
            ? Math.min(1, (offset + 0.15) * 5)
            : Math.min(1, (offset + 0.15) * 6, (1 - offset) * 6);
        chapter.style.setProperty(
          "--chapter-opacity",
          String(index === 0 && position < 0.1 ? 1 : Math.max(0, opacity)),
        );
        chapter.style.setProperty(
          "--chapter-offset",
          `${Math.max(-10, Math.min(10, -offset * 10))}px`,
        );
      });
    };
    const requestRender = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    motion.addEventListener("change", requestRender);
    const observer = new ResizeObserver(requestRender);
    observer.observe(journey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      motion.removeEventListener("change", requestRender);
      observer.disconnect();
    };
  }, []);

  return null;
}
