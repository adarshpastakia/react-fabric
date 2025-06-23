import{j as n,M as c,T as i,A as o,S as r,D as l,a2 as d,P as x,c as m,C as j,a as h}from"./iframe-wCO-hNtP.js";import{useMDXComponents as t}from"./index.js";import{A as p,_ as b}from"./ActionLabel.stories.js";function a(e){const s={code:"code",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:p}),`
`,n.jsx(i,{children:"Action Label"}),`
`,n.jsx(o,{storyId:"ActionLabel",children:n.jsx("div",{className:"hidden-anchor",children:n.jsx(r,{children:"Action Label"})})}),`
`,n.jsx(l,{of:d}),`
`,n.jsx(x,{}),`
`,n.jsxs(m,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(j,{of:b})]}),`
`,n.jsx("hr",{}),`
`,n.jsx(o,{storyId:"props",children:n.jsx(r,{children:"Props"})}),`
`,n.jsx(h,{sort:"requiredFirst"}),`
`,n.jsx(o,{storyId:"sample",children:n.jsx(r,{children:"Example"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { ActionLabel, Button } from "@react-fabric/core";

export const Example = () => {
  return (
    <ActionLabel actions={[<Button icon="mdi mdi-share" aria-label="Share" />]}>
      Some label
    </ActionLabel>
  );
};
`})})]})}function L(e={}){const{wrapper:s}={...t(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(a,{...e})}):a(e)}export{L as default};
