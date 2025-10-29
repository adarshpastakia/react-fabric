/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import DOMPurify from "dompurify";
import hljs from "highlight.js";
import { Marked } from "marked";
import * as admonition from "marked-admonition-extension";
import { markedEmoji } from "marked-emoji";
import { markedHighlight } from "marked-highlight";

import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
import { emojiMap } from "./emojis";
hljs.registerLanguage("javascript", js);
hljs.registerLanguage("typescript", ts);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("html", html);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("default", html);
const LANGS = [
  "javascript",
  "typescript",
  "css",
  "json",
  "bash",
  "html",
  "yaml",
];
const LANG_MAP: KeyValue = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
};
const _marked = new Marked(
  admonition.default,
  markedEmoji({
    emojis: emojiMap,
  }),
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, language) {
      const lang = LANG_MAP[language] ?? language;
      return hljs.highlight(code, {
        language: LANGS.includes(lang) ? lang : "default",
      }).value;
    },
  }),
);
_marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    code(code) {
      return `<pre class="hljs language-${code.lang}"><code>${code.text}</code><button class="hljs-copy">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg></button>
      <div class="hljs-copy-success">Copied!</div>
      </pre>`;
    },
  },

  hooks: {
    postprocess: (source: string) => DOMPurify.sanitize(source),
  } as AnyObject,
});

export const marked = _marked;
