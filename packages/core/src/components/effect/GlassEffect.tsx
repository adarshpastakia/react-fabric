/**
 * GlassEffect — frosted glass overlay using SVG.
 *
 * Creates a frosted glass appearance by layering:
 * 1. A blurred fractal noise texture (frosted glass refraction/caustics effect)
 * 2. A subtle blue-tinted overlay
 * 3. A white specular highlight at the top edge
 * 4. A diagonal gradient border: white at corners, blue in middle
 *
 * Border radius is captured from the parent via ResizeObserver.
 *
 * @example
 * ```tsx
 * <div className="relative rounded-xl overflow-hidden">
 *   <BackgroundImage />
 *   <GlassEffect />
 *   <Content />
 * </div>
 * ```
 */
import { useEffect, useId, useRef, useState } from "react";
import { useApplicationContext } from "../../context/context";

export interface GlassEffectProps {
  /** Border width style (default: "medium") */
  showBorder?: boolean;
}

export function GlassEffect({ showBorder = true }: GlassEffectProps) {
  const { currentColorScheme } = useApplicationContext();
  const isDark = currentColorScheme === "dark";

  const [dimensions, setDimensions] = useState(() => ({ width: 1, height: 1, borderRadius: "0" }));

  const containerRef = useRef<SVGSVGElement>(null);

  const id = useId();
  const clipId = `${id}glassClip`;
  const borderGradId = `${id}glassBorder`;

  const strokeW = showBorder ? 1.5 : 0;

  // Capture parent dimensions & border-radius
  useEffect(() => {
    const el = containerRef.current?.parentElement as HTMLElement;
    if (!el) return;

    const observe = () => {
      setDimensions({
        width: Math.max(1, el.offsetWidth),
        height: Math.max(1, el.offsetHeight),
        borderRadius: "0",
      });
    };

    const ro = new ResizeObserver(observe);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      className="fabric-style-effect fabric-glassEffect overflow-hidden rounded-[inherit]"
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Base tint layer - subtle blue wash */}
        <linearGradient id={`${id}glassBgBase`} x1="0" y1="0" x2="1" y2="1">
          {isDark ? (
            <>
              <stop offset="0%" stopColor="rgba(180,220,255,0.03)" />
              <stop offset="50%" stopColor="rgba(140,200,240,0.02)" />
              <stop offset="100%" stopColor="rgba(120,180,230,0.025)" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="rgba(200,235,255,0.20)" />
              <stop offset="50%" stopColor="rgba(180,225,250,0.15)" />
              <stop offset="100%" stopColor="rgba(160,215,245,0.18)" />
            </>
          )}
        </linearGradient>

        {/* Top-left light refraction - warm highlight */}
        <radialGradient id={`${id}glassSpot1`} cx="15%" cy="10%" r="55%">
          {isDark ? (
            <>
              <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="rgba(255,255,255,0.30)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </>
          )}
        </radialGradient>

        {/* Center iridescent sheen - cyan tint */}
        <radialGradient id={`${id}glassSpot2`} cx="50%" cy="45%" r="50%">
          {isDark ? (
            <>
              <stop offset="0%" stopColor="rgba(180,240,255,0.06)" />
              <stop offset="100%" stopColor="rgba(180,240,255,0)" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="rgba(220,250,255,0.15)" />
              <stop offset="100%" stopColor="rgba(220,250,255,0)" />
            </>
          )}
        </radialGradient>

        {/* Bottom-right cool highlight */}
        <radialGradient id={`${id}glassSpot3`} cx="85%" cy="90%" r="50%">
          {isDark ? (
            <>
              <stop offset="0%" stopColor="rgba(160,220,255,0.05)" />
              <stop offset="100%" stopColor="rgba(160,220,255,0)" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="rgba(200,240,255,0.12)" />
              <stop offset="100%" stopColor="rgba(200,240,255,0)" />
            </>
          )}
        </radialGradient>

        <linearGradient id={borderGradId} x1="0" y1="0" x2="1" y2="1">
          {isDark ? (
            <>
              {/* Top-left white highlight */}
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="15%" stopColor="rgba(255,255,255,0.15)" />
              {/* Transition to blue - subtle */}
              <stop offset="35%" stopColor="rgba(139,226,249,0.18)" />
              <stop offset="50%" stopColor="rgba(139,226,249,0.15)" />
              <stop offset="65%" stopColor="rgba(139,226,249,0.18)" />
              {/* Transition back to white */}
              <stop offset="85%" stopColor="rgba(255,255,255,0.15)" />
              {/* Bottom-right white highlight */}
              <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
            </>
          ) : (
            <>
              {/* Top-left white highlight */}
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="15%" stopColor="rgba(255,255,255,0.75)" />
              {/* Transition to blue */}
              <stop offset="35%" stopColor="rgba(139,226,249,0.65)" />
              <stop offset="50%" stopColor="rgba(139,226,249,0.50)" />
              <stop offset="65%" stopColor="rgba(139,226,249,0.65)" />
              {/* Transition back to white */}
              <stop offset="85%" stopColor="rgba(255,255,255,0.75)" />
              {/* Bottom-right white highlight */}
              <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
            </>
          )}
        </linearGradient>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {/* Liquid glass background - layered gradients for iridescent effect */}
        <rect
          x="0"
          y="0"
          width={dimensions.width}
          height={dimensions.height}
          rx={dimensions.borderRadius}
          ry={dimensions.borderRadius}
          fill={`url(#${id}glassBgBase)`}
        />
        <rect
          x="0"
          y="0"
          width={dimensions.width}
          height={dimensions.height}
          rx={dimensions.borderRadius}
          ry={dimensions.borderRadius}
          fill={`url(#${id}glassSpot1)`}
        />
        <rect
          x="0"
          y="0"
          width={dimensions.width}
          height={dimensions.height}
          rx={dimensions.borderRadius}
          ry={dimensions.borderRadius}
          fill={`url(#${id}glassSpot2)`}
        />
        <rect
          x="0"
          y="0"
          width={dimensions.width}
          height={dimensions.height}
          rx={dimensions.borderRadius}
          ry={dimensions.borderRadius}
          fill={`url(#${id}glassSpot3)`}
        />
        {/* Glass border — gradient with white highlight at top */}
        {strokeW > 0 && (
          <rect
            x="0.5"
            y="0.5"
            width={dimensions.width - 1}
            height={dimensions.height - 1}
            rx={dimensions.borderRadius}
            ry={dimensions.borderRadius}
            fill="none"
            stroke={`url(#${borderGradId})`}
            strokeWidth={strokeW}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </g>
    </svg>
  );
}
