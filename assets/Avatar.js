import{j as r,M as d,T as j,A as s,S as e,D as t,ab as p,P as m,c,C as i,b as h,a as v}from"./iframe-wCO-hNtP.js";import{useMDXComponents as x}from"./index.js";import{A as u,_ as A}from"./Avatar.stories.js";import{_AvatarGroup as o}from"./AvatarGroup.stories.js";import"./index4.js";function l(a){const n={code:"code",pre:"pre",...x(),...a.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{of:u}),`
`,r.jsx(j,{children:"Avatar"}),`
`,r.jsx(s,{storyId:"avatar",children:r.jsx("div",{className:"hidden-anchor",children:r.jsx(e,{children:"Avatar"})})}),`
`,r.jsx(t,{of:p}),`
`,r.jsx(m,{}),`
`,r.jsxs(c,{className:"control-panel",children:[r.jsx("div",{children:"Controls"}),r.jsx(i,{of:A})]}),`
`,r.jsx(s,{storyId:"group",children:r.jsx(e,{children:"Group"})}),`
`,r.jsx(t,{of:o}),`
`,r.jsx(h,{withToolbar:!0,of:o}),`
`,r.jsxs(c,{className:"control-panel",children:[r.jsx("div",{children:"Controls"}),r.jsx(i,{of:o})]}),`
`,r.jsx("hr",{}),`
`,r.jsx(s,{storyId:"props",children:r.jsx(e,{children:"Props"})}),`
`,r.jsx(v,{sort:"requiredFirst"}),`
`,r.jsx(s,{storyId:"sample",children:r.jsx(e,{children:"Example"})}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import { Avatar, AvatarGroup } from "@react-fabric/core";

export const Example = () => {
  return (
    <AvatarGroup>
      <Avatar
        name="Avatar Name"
        avatar="Avatar image"
        fallbackIcon="Fallback svg"
      />
    </AvatarGroup>
  );
};
`})})]})}function M(a={}){const{wrapper:n}={...x(),...a.components};return n?r.jsx(n,{...a,children:r.jsx(l,{...a})}):l(a)}export{M as default};
