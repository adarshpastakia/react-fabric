import{j as s,M as h,T as m,A as n,S as o,D as t,aJ as p,P as f,c as a,C as l,b as x,a as g}from"./iframe-DZ_tjZ0H.js";import{useMDXComponents as j}from"./index.js";import{P as C,_ as u,C as c}from"./Progress.stories.js";import{_ProgressCircle as i}from"./Circle.stories.js";function d(r){const e={code:"code",pre:"pre",...j(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(h,{of:C}),`
`,s.jsx(m,{children:"Progress"}),`
`,s.jsx(n,{storyId:"Progress",children:s.jsx("div",{className:"hidden-anchor",children:s.jsx(o,{children:"Progress Bar"})})}),`
`,s.jsx(t,{of:p}),`
`,s.jsx(f,{}),`
`,s.jsxs(a,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:u})]}),`
`,s.jsx(n,{storyId:"circle",children:s.jsx(o,{children:"Circular"})}),`
`,s.jsx(t,{of:i}),`
`,s.jsx(x,{withToolbar:!0,of:i}),`
`,s.jsxs(a,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:i})]}),`
`,s.jsx(n,{storyId:"colors",children:s.jsx(o,{children:"Colors"})}),`
`,s.jsx(t,{of:c}),`
`,s.jsx(x,{withToolbar:!0,of:c}),`
`,s.jsxs(a,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:c})]}),`
`,s.jsx("hr",{}),`
`,s.jsx(n,{storyId:"props",children:s.jsx(o,{children:"Props"})}),`
`,s.jsx(g,{sort:"requiredFirst"}),`
`,s.jsx(n,{storyId:"sample",children:s.jsx(o,{children:"Example"})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { Progress } from "@react-fabric/core";

export const Example = () => {
  return (
    <Progress title="Empty title" legend="Legend">
      {...message text}
    </Progress>
  );
};
`})})]})}function v(r={}){const{wrapper:e}={...j(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(d,{...r})}):d(r)}export{v as default};
