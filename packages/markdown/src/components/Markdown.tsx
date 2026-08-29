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

/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { CssProp } from "@react-fabric/core/dist/types/types";
import { cn } from "@react-fabric/utilities";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
// @ts-expect-error ignore
import abbr from "markdown-it-abbr";
// @ts-expect-error ignore
import container from "markdown-it-container";
// @ts-expect-error ignore
import deflist from "markdown-it-deflist";
// @ts-expect-error ignore
import { full as emoji } from "markdown-it-emoji";
// @ts-expect-error ignore
import footnote from "markdown-it-footnote";
// @ts-expect-error ignore
import ins from "markdown-it-ins";
// @ts-expect-error ignore
import mark from "markdown-it-mark";
// @ts-expect-error ignore
import sub from "markdown-it-sub";
// @ts-expect-error ignore
import sup from "markdown-it-sup";
import { useCallback, useMemo } from "react";
import { emojiMap } from "../utils/emojis";

export interface MdxProps extends CssProp {
  text: string;
}

export function Markdown({ text, className }: MdxProps) {
  const copySuccess = useCallback((el: HTMLElement) => {
    el.dataset.show = "true";
    setTimeout(() => (el.dataset.show = "false"), 1000);
  }, []);

  // Initialize parser inside useMemo to avoid recreating it on every render
  const md = useMemo(() => {
    return new MarkdownIt({
      html: true, // Enable HTML tags in source
      linkify: true, // Autoconvert URL-like text to links
      typographer: true, // Enable smartquotes and other typographic replacements
      highlight: (str: string, lang: string): string => {
        let value = str;
        if (lang && hljs.getLanguage(lang)) {
          try {
            value = hljs.highlight(str, { language: lang }).value;
          } catch (error) {
            console.error("Syntax highlighting error:", error);
          }
        }
        return `<pre class="hljs language-${lang}"><code>${value}</code><button class="hljs-copy">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg></button>
      <div class="hljs-copy-success">Copied!</div></pre>`;
      },
    })
      .use(sub)
      .use(sup)
      .use(ins)
      .use(abbr)
      .use(mark)
      .use(deflist)
      .use(footnote)
      .use(container, "tip", {
        render: function (tokens: Array<{ info: string; nesting: number }>, idx: number) {
          const m = tokens[idx].info.trim().match(/^tip\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            // opening tag
            return `<div class="markdown-alert markdown-alert-${m?.[1] ?? "tip"}">\n`;
          } else {
            // closing tag
            return "</div>\n";
          }
        },
      })
      .use(emoji, { defs: emojiMap });
  }, []);

  // Render markdown string to HTML string safely
  const renderedHtml = useMemo(() => md.render(text), [md, text]);

  return (
    <div
      role="none"
      className={cn("fabric-mdx", className)}
      // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
      dangerouslySetInnerHTML={{
        __html: renderedHtml,
      }}
      onClick={(e) => {
        const el = (e.target as HTMLElement)?.closest(".hljs-copy");
        if (el)
          void navigator.clipboard
            .writeText((el.previousElementSibling as HTMLElement).innerText)
            .then(() => copySuccess(el.nextElementSibling as HTMLElement));
      }}
    />
  );
}
