import{j as s,M as m,T as C,A as e,S as r,D as a,ae as p,P as f,c as t,C as l,b as c,a as u}from"./iframe-DC4r-n7i.js";import{useMDXComponents as h}from"./index.js";import{C as T,_ as b,a as d,H as i,b as x}from"./Card.stories.js";import"./index4.js";import"./small_video.js";function j(n){const o={code:"code",pre:"pre",...h(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(m,{of:T}),`
`,s.jsx(C,{children:"Card"}),`
`,s.jsx(e,{storyId:"card",children:s.jsx("div",{className:"hidden-anchor",children:s.jsx(r,{children:"Card"})})}),`
`,s.jsx(a,{of:p}),`
`,s.jsx(f,{}),`
`,s.jsxs(t,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:b})]}),`
`,s.jsx(e,{storyId:"clickable",children:s.jsx(r,{children:"Clickable"})}),`
`,s.jsx(a,{of:d}),`
`,s.jsx(c,{withToolbar:!0,of:d}),`
`,s.jsxs(t,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:d})]}),`
`,s.jsx(e,{storyId:"headFoot",children:s.jsx(r,{children:"Header Footer"})}),`
`,s.jsx(a,{of:i}),`
`,s.jsx(c,{withToolbar:!0,of:i}),`
`,s.jsxs(t,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:i})]}),`
`,s.jsx(e,{storyId:"cardCover",children:s.jsx(r,{children:"Card Cover"})}),`
`,s.jsx(a,{of:x}),`
`,s.jsx(c,{withToolbar:!0,of:x}),`
`,s.jsxs(t,{className:"control-panel",children:[s.jsx("div",{children:"Controls"}),s.jsx(l,{of:x})]}),`
`,s.jsx("hr",{}),`
`,s.jsx(e,{storyId:"props",children:s.jsx(r,{children:"Props"})}),`
`,s.jsx(u,{sort:"requiredFirst"}),`
`,s.jsx(e,{storyId:"sample",children:s.jsx(r,{children:"Example"})}),`
`,s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-tsx",children:`import { Card } from "@react-fabric/core";

export const Example = () => {
  return (
    <Card
      className=""
      bodyClassName=""
      onClick={handler}
    >
        <Title as="h3">Card Title</Title>
        <Title className="text-dimmed">Card description goes here</Title>
        <Text clamp={4}>{faker.lorem.sentences(10)}</Text>
    </Button>
  );
};
`})})]})}function M(n={}){const{wrapper:o}={...h(),...n.components};return o?s.jsx(o,{...n,children:s.jsx(j,{...n})}):j(n)}export{M as default};
