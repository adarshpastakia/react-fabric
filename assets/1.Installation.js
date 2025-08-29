import{j as s,M as t,T as i,S as r}from"./iframe-DvMcemLF.js";import{useMDXComponents as a}from"./index.js";function c(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...a(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Using the library"}),`
`,s.jsx(i,{children:"Using the library"}),`
`,s.jsx(r,{children:"Installing"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-bash",children:`# core components
yarn add @react-fabric/core @react-fabric/utilities

# data components
yarn add @react-fabric/data

# form components
yarn add @react-fabric/form

# advanced media viewers
yarn add @react-fabric/media

# comprehensive searchbar for data tools
yarn add @react-fabric/searchbar

# relative date selector with event calendar
yarn add @react-fabric/superdate

# eCharts wrappers
yarn add @react-fabric/chart

# lexical editor
yarn add @react-fabric/lexical

# mdx editor for markdown input
yarn add @react-fabric/mdx

# monaco editor
yarn add @react-fabric/monaco

`})}),`
`,s.jsx(r,{children:"Setup"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["Setup postcss for processing ",s.jsx(n.code,{children:"TailwindCss"})]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-js",children:`// .postcssrc.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["Include ",s.jsx(n.code,{children:"TailwindCss"})," and ",s.jsx(n.code,{children:"React Fabric"})," styles in main stylesheet"]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`/* main.css */
@import url("tailwindcss");
@import url("@react-fabric/core/css/styles.css");
@import url("@react-fabric/data/css/styles.css");
@import url("@react-fabric/date/css/styles.css");
@import url("@react-fabric/form/css/styles.css");
@import url("@react-fabric/lexical/css/styles.css");
@import url("@react-fabric/mdx/css/styles.css");
@import url("@react-fabric/media/css/styles.css");
@import url("@react-fabric/monaco/css/styles.css");
@import url("@react-fabric/superdate/css/styles.css");

/* helper css with base64 flag images for windows */
@import "@react-fabric/core/css/flags.rect.css";
@import "@react-fabric/core/css/flags.wavy.css";
`})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["Include ",s.jsx(n.code,{children:"main.css"})," in react root file"]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-tsx",children:`// main.tsx
import "./main.css";

import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
`})})]})}function d(e={}){const{wrapper:n}={...a(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(c,{...e})}):c(e)}export{d as default};
