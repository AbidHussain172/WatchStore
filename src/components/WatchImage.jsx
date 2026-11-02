import { useId, useState } from "react";

// Lighten (amt > 0) or darken (amt < 0) a #rrggbb colour.
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const target = amt < 0 ? 0 : 255;
  const p = Math.abs(amt);
  const mix = (c) => Math.round(c + (target - c) * p);
  const r = mix(n >> 16);
  const g = mix((n >> 8) & 255);
  const b = mix(n & 255);
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function Strap({ look, uid }) {
  const narrow = look.scale && look.scale < 1;
  const w = narrow ? 52 : look.style === "digital" ? 60 : 64;
  const x = 100 - w / 2;
  const c = look.strapColor;
  const parts = [
    { y: 0, h: 80 },
    { y: 160, h: 80 },
  ];
  return (
    <g>
      {parts.map((p, i) => (
        <g key={i}>
          <rect x={x} y={p.y} width={w} height={p.h} rx="10" fill={`url(#${uid}-strap)`} />
          {look.strapType === "bracelet" &&
            Array.from({ length: 7 }).map((_, k) => (
              <line
                key={k}
                x1={x + 3}
                x2={x + w - 3}
                y1={p.y + 8 + k * 11}
                y2={p.y + 8 + k * 11}
                stroke={shade(c, -0.4)}
                strokeWidth="1"
              />
            ))}
          {look.strapType === "leather" && (
            <>
              <line x1={x + 6} x2={x + 6} y1={p.y + 4} y2={p.y + p.h - 4} stroke={shade(c, 0.45)} strokeDasharray="3 3" />
              <line x1={x + w - 6} x2={x + w - 6} y1={p.y + 4} y2={p.y + p.h - 4} stroke={shade(c, 0.45)} strokeDasharray="3 3" />
            </>
          )}
          {look.strapType === "rubber" && i === 1 &&
            [186, 198, 210, 222].map((cy) => (
              <circle key={cy} cx="100" cy={cy} r="3" fill={shade(c, -0.55)} />
            ))}
          {look.strapType === "rubber" && i === 0 &&
            [14, 26, 38].map((y) => (
              <line key={y} x1={x + 6} x2={x + w - 6} y1={y} y2={y} stroke={shade(c, 0.2)} strokeWidth="2" strokeLinecap="round" />
            ))}
        </g>
      ))}
    </g>
  );
}

function Analog({ look, uid }) {
  const s = look.scale || 1;
  const chrono = look.style === "chrono";
  const handColor = look.handColor;
  return (
    <g transform={`translate(100 120) scale(${s}) translate(-100 -120)`}>
      <rect x="160" y="113" width="10" height="14" rx="2" fill={shade(look.caseColor, -0.25)} />
      <circle cx="100" cy="120" r="64" fill={`url(#${uid}-case)`} />
      <circle cx="100" cy="120" r="58" fill={look.bezelColor} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={100 + 54 * Math.sin(a)}
            cy={120 - 54 * Math.cos(a)}
            r="1.7"
            fill={handColor}
            opacity="0.75"
          />
        );
      })}
      <circle cx="100" cy="120" r="50" fill={`url(#${uid}-dial)`} />

      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="74"
          x2="100"
          y2={i % 3 === 0 ? 86 : 81}
          stroke={handColor}
          strokeWidth={i % 3 === 0 ? 3 : 1.5}
          strokeLinecap="round"
          transform={`rotate(${i * 30} 100 120)`}
        />
      ))}

      {chrono ? (
        <>
          {[
            [100, 100],
            [80, 134],
            [120, 134],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="11" fill="none" stroke={handColor} strokeOpacity="0.55" />
              <line x1={cx} y1={cy} x2={cx + (i === 1 ? -6 : 5)} y2={cy - 7} stroke={look.accent} strokeWidth="1.5" strokeLinecap="round" />
            </g>
          ))}
        </>
      ) : (
        <g>
          <rect x="126" y="114" width="15" height="12" rx="1.5" fill="#f8fafc" stroke="#9ca3af" strokeWidth="0.8" />
          <text x="133.5" y="123.2" fontSize="8" fontWeight="700" fill="#111827" textAnchor="middle" fontFamily="Arial, sans-serif">
            26
          </text>
        </g>
      )}

      {/* hands set to 10:10:30 */}
      <line x1="100" y1="120" x2="100" y2="94" stroke={handColor} strokeWidth="4.5" strokeLinecap="round" transform="rotate(305 100 120)" />
      <line x1="100" y1="120" x2="100" y2="80" stroke={handColor} strokeWidth="3" strokeLinecap="round" transform="rotate(60 100 120)" />
      <line x1="100" y1="132" x2="100" y2="76" stroke={look.accent} strokeWidth="1.2" strokeLinecap="round" transform="rotate(180 100 120)" />
      <circle cx="100" cy="120" r="3.8" fill={look.accent} />

      <ellipse cx="80" cy="92" rx="30" ry="14" fill="#fff" opacity="0.1" transform="rotate(-35 80 92)" />
    </g>
  );
}

function Digital({ look, uid }) {
  const screen = look.screen || "#c8d4b0";
  const text = look.text || "#1f2937";
  return (
    <g>
      {[
        [30, 96],
        [162, 96],
        [162, 136],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="8" height="18" rx="3" fill={shade(look.caseColor, -0.3)} />
      ))}
      <rect x="38" y="52" width="124" height="136" rx="28" fill={`url(#${uid}-case)`} />
      <rect x="48" y="62" width="104" height="116" rx="20" fill={shade(look.caseColor, -0.3)} />
      <rect x="58" y="84" width="84" height="72" rx="8" fill={screen} stroke={shade(screen, -0.35)} strokeWidth="1.5" />
      <text x="100" y="100" fontSize="9" fontWeight="700" textAnchor="middle" fill={text} fontFamily="monospace">
        FRI 26
      </text>
      <text x="100" y="134" fontSize="32" fontWeight="700" textAnchor="middle" fill={text} fontFamily="monospace">
        10:10
      </text>
      <text x="72" y="148" fontSize="8" fontWeight="700" textAnchor="middle" fill={text} fontFamily="monospace">
        AM
      </text>
      <text x="130" y="148" fontSize="9" fontWeight="700" textAnchor="middle" fill={text} fontFamily="monospace">
        30
      </text>
      <rect x="56" y="70" width="88" height="8" rx="4" fill={look.accent} opacity="0.85" />
      <ellipse cx="78" cy="76" rx="26" ry="8" fill="#fff" opacity="0.08" transform="rotate(-15 78 76)" />
    </g>
  );
}

/**
 * Shows a drawn watch for every product. If you add a real photo named
 * public/images/watch-<id>.jpg it automatically replaces the drawing.
 */
export default function WatchImage({ watch, className = "" }) {
  const uid = "w" + useId().replace(/:/g, "");
  const [photo, setPhoto] = useState(false);
  const look = watch.look;

  return (
    <div className={`watch-img ${className}`}>
      <svg viewBox="0 0 200 240" role="img" aria-label={`${watch.brand} ${watch.name}`}>
        <defs>
          <linearGradient id={`${uid}-strap`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={shade(look.strapColor, -0.3)} />
            <stop offset="0.5" stopColor={shade(look.strapColor, 0.15)} />
            <stop offset="1" stopColor={shade(look.strapColor, -0.3)} />
          </linearGradient>
          <linearGradient id={`${uid}-case`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={shade(look.caseColor, 0.4)} />
            <stop offset="0.5" stopColor={look.caseColor} />
            <stop offset="1" stopColor={shade(look.caseColor, -0.3)} />
          </linearGradient>
          <radialGradient id={`${uid}-dial`} cx="50%" cy="35%" r="75%">
            <stop offset="0" stopColor={shade(look.dialColor || "#111827", 0.18)} />
            <stop offset="1" stopColor={look.dialColor || "#111827"} />
          </radialGradient>
        </defs>

        <Strap look={look} uid={uid} />
        {look.style === "digital" ? (
          <Digital look={look} uid={uid} />
        ) : (
          <Analog look={look} uid={uid} />
        )}
      </svg>

      <img
        className={`photo ${photo ? "show" : ""}`}
        src={`/images/watch-${watch.id}.jpg`}
        alt={`${watch.brand} ${watch.name}`}
        onLoad={() => setPhoto(true)}
        onError={() => setPhoto(false)}
      />
    </div>
  );
}
