import type { CSSProperties } from "react";
import { layers } from "@/lib/content";

export function SystemScene() {
  return (
    <div className="system-visual" aria-hidden="true">
      <div className="system-orbit orbit-one" />
      <div className="system-orbit orbit-two" />
      <div className="system-stack">
        {layers.map((layer, index) => (
          <div
            key={layer.id}
            className={`system-plane plane-${layer.id}`}
            style={{ "--layer": index } as CSSProperties}
          >
            <div className="plane-topline">
              <span>{layer.name}</span>
              <span>0{index + 1}</span>
            </div>
            {index === 0 ? (
              <div className="interface-study">
                <div className="interface-brand">
                  <span className="mini-mark" />
                  BeneHom<span className="interface-menu">Overview</span>
                </div>
                <div className="interface-heading">A clearer picture.</div>
                <div className="interface-subheading">
                  Your finances, in perspective.
                </div>
                <div className="interface-body">
                  <div className="interface-chart">
                    {[35, 52, 44, 70, 60, 82, 72, 95].map((height, i) => (
                      <i key={i} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="interface-categories">
                    <span>
                      <i />
                      Income
                    </span>
                    <span>
                      <i />
                      Essentials
                    </span>
                    <span>
                      <i />
                      Flexible
                    </span>
                  </div>
                </div>
                <div className="interface-footer">
                  <span>One visible experience</span>
                  <span>Many connected layers</span>
                </div>
              </div>
            ) : (
              <div className="plane-structure">
                <div className="structure-path" />
                {[0, 1, 2].map((node) => (
                  <span className={`structure-node node-${node}`} key={node} />
                ))}
                <span className="plane-tech">
                  {index === 1
                    ? "controllers / services"
                    : index === 2
                      ? "relational / user-scoped"
                      : index === 3
                        ? "Numa / MCP / n8n"
                        : index === 4
                          ? "test / analyse / validate"
                          : "release / check / rollback"}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="visual-caption">
        <span className="caption-line" />
        <span>One product. Six connected layers.</span>
      </div>
      <span className="study-note">
        Conceptual cutaway · not a product screenshot
      </span>
    </div>
  );
}
