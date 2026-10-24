import{n as e}from"./rolldown-runtime.js";import{S as t,_ as n,g as r,y as i}from"./blocks.js";import{t as a}from"./jsx-runtime.js";import{i as o,r as s}from"./react2.js";function c(e){let t={code:`code`,li:`li`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{title:`Using the library`}),`
`,(0,u.jsx)(i,{children:`Using the library`}),`
`,(0,u.jsx)(n,{children:`Installing`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-bash`,children:`# core components
npm install @react-fabric/core @react-fabric/utilities

# data components
npm install @react-fabric/data

# form components
npm install @react-fabric/form

# advanced media viewers
npm install @react-fabric/media

# comprehensive searchbar for data tools
npm install @react-fabric/searchbar

# relative date selector with event calendar
npm install @react-fabric/superdate

# eCharts wrappers
npm install @react-fabric/chart

# lexical editor
npm install @react-fabric/lexical

# whietboard drawing canvas
npm install @react-fabric/draw

# mdx editor for markdown editor and renderer
npm install @react-fabric/markdown

# monaco editor
npm install @react-fabric/monaco

`})}),`
`,(0,u.jsx)(n,{children:`Setup`}),`
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
@import url("@react-fabric/markdown/css/styles.css");
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
`})})]})}function l(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=a(),s(),t()})))()}d();export{l as default};