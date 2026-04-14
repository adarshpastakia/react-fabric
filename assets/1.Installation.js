import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{_ as n,b as r,h as i,m as a}from"./iframe-Du5FrOxJ.js";import{r as o}from"./react2.js";import{t as s}from"./mdx-react-shim.js";function c(e){let t={code:`code`,li:`li`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`Using the library`}),`
`,(0,u.jsx)(n,{children:`Using the library`}),`
`,(0,u.jsx)(i,{children:`Installing`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-bash`,children:`# core components
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

# whietboard drawing canvas
yarn add @react-fabric/draw

# mdx editor for markdown input
yarn add @react-fabric/mdx

# monaco editor
yarn add @react-fabric/monaco

`})}),`
`,(0,u.jsx)(i,{children:`Setup`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Setup postcss for processing `,(0,u.jsx)(t.code,{children:`TailwindCss`})]}),`
`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-js`,children:`// .postcssrc.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Include `,(0,u.jsx)(t.code,{children:`TailwindCss`}),` and `,(0,u.jsx)(t.code,{children:`React Fabric`}),` styles in main stylesheet`]}),`
`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* main.css */
@import url("tailwindcss");
@import url("@react-fabric/core/css/styles.css");
@import url("@react-fabric/data/css/styles.css");
@import url("@react-fabric/date/css/styles.css");
@import url("@react-fabric/draw/css/styles.css");
@import url("@react-fabric/form/css/styles.css");
@import url("@react-fabric/lexical/css/styles.css");
@import url("@react-fabric/mdx/css/styles.css");
@import url("@react-fabric/media/css/styles.css");
@import url("@react-fabric/monaco/css/styles.css");
@import url("@react-fabric/superdate/css/styles.css");
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Include `,(0,u.jsx)(t.code,{children:`main.css`}),` in react root file`]}),`
`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`// main.tsx
import "./main.css";

import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
`})})]})}function l(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),r()}))();export{l as default};