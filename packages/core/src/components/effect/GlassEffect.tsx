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
import { useId } from "react";
import { useApplicationContext } from "../../context/context";

export interface GlassEffectProps {
  /** Border width style (default: true) */
  showBorder?: boolean;
}

export function GlassEffect({ showBorder = true }: GlassEffectProps) {
  const { currentColorScheme } = useApplicationContext();
  const isDark = currentColorScheme === "dark";

  const id = useId();
  const bgGradId = `${id}glassBg`;
  const borderGradId = `${id}glassBorder`;

  return (
    <svg
      className="fabric-style-effect fabric-glassEffect overflow-hidden rounded-[inherit]"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <defs>
        {/* Base Translucent Layer - Subtle Slate/Cool Gray Tint */}
        <linearGradient id={bgGradId} x1="0" y1="0" x2="0" y2="1">
          {isDark ? (
            <>
              {/* Ultra subtle deep dark slate highlight */}
              <stop offset="0%" stopColor="rgba(215, 230, 255, 0.08)" />
              <stop offset="100%" stopColor="rgba(215, 230, 255, 0.02)" />
            </>
          ) : (
            <>
              {/* Premium, desaturated cool gray-blue wash instead of baby blue */}
              <stop offset="0%" stopColor="rgba(225, 235, 245, 0.40)" />
              <stop offset="50%" stopColor="rgba(220, 230, 240, 0.25)" />
              <stop offset="100%" stopColor="rgba(215, 225, 238, 0.20)" />
            </>
          )}
        </linearGradient>

        {/* Dynamic Light Stroke Border */}
        <linearGradient id={borderGradId} x1="0" y1="0" x2="1" y2="1">
          {isDark ? (
            <>
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.22)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.04)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.08)" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.75)" />
              {/* Subtle slate transition in the middle border */}
              <stop offset="50%" stopColor="rgba(220, 230, 245, 0.35)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.40)" />
            </>
          )}
        </linearGradient>
      </defs>

      {/* Main Glass Backdrop Fill */}
      <rect width="100%" height="100%" fill={`url(#${bgGradId})`} />

      {/* Non-Scaling Outer Edge Border */}
      {showBorder && <rect width="100%" height="100%" fill="none" stroke={`url(#${borderGradId})`} strokeWidth="2" vectorEffect="non-scaling-stroke" />}
    </svg>
  );
}
