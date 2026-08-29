/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { cn, isSvgPath } from "@react-fabric/utilities";
import BoringAvatar from "boring-avatars";
import { useMemo, useState } from "react";
import type { CssProp, CustomColors, HtmlEvents, RefProp, SizeType, TestProps } from "../../types";
import { getColor } from "../../utils";

export interface AvatarProps extends CssProp, TestProps, RefProp, HtmlEvents {
  /**
   * Display name used for generating the fallback avatar (required).
   * When no `avatar` image is provided, this name is used to generate
   * a Boring Avatar pattern or extract text initials as a placeholder.
   */
  name: string;
  /**
   * SVG path string or CSS class name for a custom fallback icon.
   * Used when no `avatar` image is provided and the variant is not `"text"`.
   */
  fallbackIcon?: string;
  /**
   * URL of the avatar image to display.
   * Falls back to a Boring Avatar, text initials, or custom icon when
   * the image fails to load or is not provided.
   */
  avatar?: string;
  /**
   * Fallback avatar style applied when no `avatar` image is provided.
   * Defaults to `"beam"`. Options: `"text"` (text initials), `"beam"`,
   * `"pixel"`, `"bauhaus"` (Boring Avatar variants).
   */
  variant?: "text" | "beam" | "pixel" | "bauhaus";
  /**
   * Background color applied to the avatar container.
   * Accepts Tailwind palette tokens or any CSS color.
   */
  bg?: CustomColors;
  /**
   * Text/icon color applied to the avatar.
   * Accepts Tailwind palette tokens or any CSS color.
   */
  color?: CustomColors;
  /**
   * Avatar size. Accepts predefined tokens `"xs"`–`"xl"` or a custom CSS size value.
   */
  size?: SizeType | number | (string & {});
  /**
   * SVG viewBox attribute for `fallbackIcon` when it is an SVG path.
   * Defaults to `"0 0 24 24"`.
   */
  viewBox?: string;
  /**
   * When true, applies a fully rounded (circular) shape to the avatar.
   * Otherwise, a standard rounded rectangle is used.
   */
  rounded?: boolean;
  /**
   * When true, prevents the default click action on the avatar.
   * Useful when the avatar is nested inside an `<a>` element to avoid
   * navigating away from the page.
   */
  preventDefault?: boolean;
}

const SizeMap: KeyValue<string> = {
  xs: "0.875rem",
  sm: "1.125rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
};

/**
 * User avatar that renders an image with a Boring Avatar fallback.
 *
 * Displays a user image, falling back to a Boring Avatar (or text initials)
 * when no image is provided or the image fails to load. Supports four
 * Boring Avatar variants (beam, text, pixel, bauhaus) and custom SVG/icon fallbacks.
 *
 * @see {@link https://boringavatars.com/}
 *
 *  @example
 * ```tsx
 * import { Avatar } from "@react-fabric/core";
 *
 * <Avatar name="Ada Lovelace" avatar="/ada.jpg" />
 * <Avatar name="John Doe" variant="pixel" size="lg" />
 * <Avatar name="Jane" fallbackIcon="icon-[mdi--user]" variant="text" />
 * ```
 */
export function Avatar({
  ref,
  name,
  avatar,
  fallbackIcon,
  bg,
  color,
  size = "",
  rounded,
  variant = "beam",
  className,
  viewBox = "0 0 24 24",
  preventDefault,
  onClick,
  ...props
}: AvatarProps) {
  const [fallback, setFallback] = useState(true);

  // Compute inline styles from props (memoized to prevent re-renders)
  const styles = useMemo(() => {
    const s: KeyValue = {};
    if (bg) {
      s.backgroundColor = getColor(bg);
    }
    if (color) {
      s.color = getColor(color);
    }
    if (size && !(size in SizeMap)) {
      s.fontSize = size;
    }
    if (size && size in SizeMap) {
      s.fontSize = SizeMap[size];
    }
    return s;
  }, [bg, color, size]);

  // Render avatar image with a fade-in placeholder behind it
  const avatarImage = useMemo(() => {
    setFallback(!avatar);
    return (
      avatar && (
        <div className="contents">
          <div className="fabric-imgPlaceholder absolute inset-0 bg-gray animate-fade -z-1" />
          <img
            src={avatar}
            alt={avatar}
            className="align-baseline"
            onError={() => setFallback(true)}
            onLoad={(e) => e.currentTarget.previousElementSibling?.remove()}
          />
        </div>
      )
    );
  }, [avatar]);

  // Render fallback: custom icon, text initials, or Boring Avatar
  const fallbackAvatar = useMemo(() => {
    if (fallbackIcon) {
      return isSvgPath(fallbackIcon) ? (
        <svg viewBox={viewBox} className="p-[0.125em]">
          <path fill="currentColor" d={fallbackIcon.toString()} />
        </svg>
      ) : (
        <i className={fallbackIcon} />
      );
    }
    if (variant === "text") {
      // Extract initials: "John Doe" -> "JD", "Jane" -> "JA"
      const [, first, second, group] = name.match(/(?=(\w).* (\w).*)|(?=(\w\w).*)/) as string[];
      return (
        <svg role="img">
          <text
            x="50%"
            y="50%"
            dy=".1em"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{ fontSize: ".5em", fontWeight: 500 }}
          >
            {group ?? `${first}${second}`}
          </text>
        </svg>
      );
    }
    // Default: generate a Boring Avatar from the name
    return <BoringAvatar square size={64} variant={variant} name={name} />;
  }, [fallbackIcon, variant, name, viewBox]);

  return (
    <dfn
      role="presentation"
      className={cn(
        "fabric-avatar",
        rounded ? "rounded-full" : "rounded",
        "select-none relative overflow-hidden inline-block box-content leading-none not-italic text-center is-clickable:cursor-pointer",
        className,
      )}
      onClick={(e) => {
        if (preventDefault) e.preventDefault();
        onClick?.(e);
      }}
      style={styles}
      data-clickable={!!onClick}
      ref={ref}
      {...props}
    >
      {!fallback && avatarImage}
      {fallback && fallbackAvatar}
    </dfn>
  );
}
