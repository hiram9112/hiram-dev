"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SystemDrawing } from "./system-drawing";

const layers = [
  { id: "application", label: "Application" },
  { id: "numa", label: "Numa" },
  { id: "mcp", label: "MCP" },
  { id: "automation", label: "Automation" },
  { id: "delivery", label: "Delivery" },
];

export function SystemStory({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chapters = Array.from(
      root.current?.querySelectorAll<HTMLElement>(".system-chapter") ?? [],
    );
    let frame = 0;
    const update = () => {
      const stageBottom = root.current
        ?.querySelector(".system-stage")
        ?.getBoundingClientRect().bottom;
      const marker =
        window.innerWidth < 760
          ? (stageBottom ?? 342) + 40
          : window.innerHeight * 0.5;
      let next = 0;
      chapters.forEach((chapter, index) => {
        if (chapter.getBoundingClientRect().top <= marker) next = index;
      });
      setActive(next);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="system-story" ref={root}>
      <div className="system-stage">
        <div className="stage-heading">
          <span className="stage-name">BeneHom, opened up.</span>
          <span className="stage-counter">
            0{active + 1}
            <span> / 05</span>
          </span>
        </div>
        <SystemDrawing active={active} />
        <div className="stage-bottom">
          <p>One product. Five connected layers.</p>
          <nav className="layer-nav" aria-label="Explore BeneHom layers">
            {layers.map((layer, index) => (
              <a
                key={layer.id}
                href={`#${layer.id}`}
                aria-current={active === index ? "step" : undefined}
              >
                <span className="layer-nav-dot" />
                {layer.label}
              </a>
            ))}
          </nav>
          <span className="diagram-note">
            Conceptual system view, not a live dashboard.
          </span>
        </div>
      </div>
      <div className="system-chapters">{children}</div>
    </div>
  );
}
