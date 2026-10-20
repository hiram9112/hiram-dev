const names = ["BeneHom", "Numa", "MCP", "Automation", "Delivery"];

function PlateContent({ layer }: { layer: number }) {
  if (layer === 0) {
    return (
      <>
        <text x="-144" y="-76" className="plate-title">
          BeneHom
        </text>
        <circle cx="140" cy="-84" r="6" fill="currentColor" />
        <path d="M-145-55h290" className="plate-line" />
        <rect
          x="-144"
          y="-35"
          width="58"
          height="115"
          rx="3"
          className="plate-wash"
        />
        <path
          d="M-132-18h32m-32 18h24m-24 18h29m-29 18h19"
          className="plate-line"
        />
        <rect
          x="-68"
          y="-35"
          width="95"
          height="35"
          rx="3"
          className="plate-wash"
        />
        <rect
          x="40"
          y="-35"
          width="104"
          height="35"
          rx="3"
          className="plate-wash"
        />
        <path d="M-68 80V16h212" className="plate-line" />
        <path
          d="m-57 65 30-12 28 8 27-27 26 7 30-22 29 8 26-18"
          className="plate-chart"
        />
        <path d="M-57 80h195" className="plate-line" />
      </>
    );
  }
  if (layer === 1) {
    return (
      <>
        <text x="-144" y="-76" className="plate-title">
          Numa
        </text>
        <text x="106" y="-78" className="plate-small">
          AI
        </text>
        <path d="M-145-55h290" className="plate-line" />
        <circle cx="0" cy="24" r="45" className="plate-wash" />
        <path
          d="M0-8v64M-32 24h64M-23 1l46 46m0-46-46 46"
          className="plate-chart"
        />
        <rect
          x="-145"
          y="-2"
          width="64"
          height="54"
          rx="4"
          className="plate-box"
        />
        <rect
          x="81"
          y="-2"
          width="64"
          height="54"
          rx="4"
          className="plate-box"
        />
        <text x="-132" y="30" className="plate-small">
          data
        </text>
        <text x="94" y="30" className="plate-small">
          docs
        </text>
        <path d="M-81 24h36m90 0h36" className="plate-line" />
      </>
    );
  }
  if (layer === 2) {
    return (
      <>
        <text x="-144" y="-76" className="plate-title">
          MCP
        </text>
        <text x="75" y="-78" className="plate-small">
          read-only
        </text>
        <path d="M-145-55h290M-90 26H90" className="plate-line" />
        {[-105, 0, 105].map((x, i) => (
          <g key={x}>
            <rect
              x={x - 31}
              y="-5"
              width="62"
              height="62"
              rx="5"
              className="plate-box"
            />
            <text x={x} y="32" textAnchor="middle" className="plate-small">
              {["client", "PAT", "data"][i]}
            </text>
          </g>
        ))}
      </>
    );
  }
  if (layer === 3) {
    return (
      <>
        <text x="-144" y="-76" className="plate-title">
          Automation
        </text>
        <text x="105" y="-78" className="plate-small">
          n8n
        </text>
        <path
          d="M-145-55h290M-113 23h105v-35h102M-8 23v45H94"
          className="plate-line"
        />
        {[
          [-113, 23],
          [-8, 23],
          [108, -12],
          [108, 68],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x - 19}
              y={y - 19}
              width="38"
              height="38"
              rx="8"
              className="plate-box"
            />
            <circle cx={x} cy={y} r="5" fill="currentColor" />
          </g>
        ))}
      </>
    );
  }
  return (
    <>
      <text x="-144" y="-76" className="plate-title">
        Delivery
      </text>
      <path d="M-145-55h290M-115 22h230" className="plate-line" />
      {[-115, 0, 115].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="22" r="22" className="plate-box" />
          <path d={`m${x - 8} 22 6 6 11-12`} className="plate-chart" />
          <text x={x} y="68" textAnchor="middle" className="plate-small">
            {["verify", "release", "run"][i]}
          </text>
        </g>
      ))}
    </>
  );
}

export function SystemDrawing({
  active = 0,
  hero = false,
}: {
  active?: number;
  hero?: boolean;
}) {
  const order = hero
    ? [4, 3, 2, 1, 0]
    : [...[4, 3, 2, 1, 0].filter((layer) => layer !== active), active];

  return (
    <svg
      className={`system-drawing${hero ? " system-drawing-hero" : ""}`}
      viewBox="0 0 640 690"
      fill="none"
      aria-hidden="true"
    >
      <g className="drawing-guides">
        <path d="M32 492 320 326l288 166-288 166L32 492ZM32 524l288-166 288 166M320 326v332M176 409l288 166M464 409 176 575" />
        <path d="M68 173v319M572 173v319M320 30v628" strokeDasharray="3 7" />
        <circle
          cx="320"
          cy="492"
          r="182"
          transform="translate(0 246) scale(1 .5)"
        />
      </g>
      {order.map((layer) => (
        <g
          key={layer}
          className={`system-layer${active === layer ? " is-active" : ""}`}
          style={{
            transform: `translate(${hero ? 320 : layer === active ? 270 : 350}px, ${hero ? 173 + layer * 71 : 165 + layer * 80 + (layer < active ? -18 : layer > active ? 18 : 0)}px)`,
          }}
        >
          <g transform="matrix(.866 .5 -.866 .5 0 0)">
            <rect
              x="-170"
              y="-120"
              width="340"
              height="240"
              rx="7"
              transform="translate(7 7)"
              className="plate-edge"
            />
            <rect
              x="-170"
              y="-120"
              width="340"
              height="240"
              rx="7"
              className="plate-face"
            />
            <PlateContent layer={layer} />
          </g>
          <circle cx="-251" cy="-25" r="4" className="plate-pin" />
          {!hero && (
            <g className="layer-callout">
              <path d="M251 25h34" />
              <text x="294" y="30" textAnchor="end">
                {names[layer]}
              </text>
            </g>
          )}
        </g>
      ))}
      <g className="drawing-crosses">
        <path d="M38 86h12m-6-6v12M589 593h12m-6-6v12M44 593h12m-6-6v12M589 86h12m-6-6v12" />
      </g>
    </svg>
  );
}
