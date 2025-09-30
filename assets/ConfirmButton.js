import{j as n,M as x,T as m,A as r,S as e,D as a,ah as j,P as h,c as i,C as c,b as f,a as u}from"./iframe-Ctw5u0Cj.js";import{useMDXComponents as d}from"./index.js";import{C as p,_ as C,a as t}from"./ConfirmButton.stories.js";function l(o){const s={code:"code",pre:"pre",...d(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:p}),`
`,n.jsx(m,{children:"Confirm Button"}),`
`,n.jsx(r,{storyId:"confirmButton",children:n.jsx("div",{className:"hidden-anchor",children:n.jsx(e,{children:"Confirm Button"})})}),`
`,n.jsx(a,{of:j}),`
`,n.jsx(h,{}),`
`,n.jsxs(i,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(c,{of:C})]}),`
`,n.jsx(r,{storyId:"withAction",children:n.jsx(e,{children:"With Action"})}),`
`,n.jsx(a,{of:t}),`
`,n.jsx(f,{withToolbar:!0,of:t}),`
`,n.jsxs(i,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(c,{of:t})]}),`
`,n.jsx("hr",{}),`
`,n.jsx(r,{storyId:"props",children:n.jsx(e,{children:"Props"})}),`
`,n.jsx(u,{sort:"requiredFirst"}),`
`,n.jsx(r,{storyId:"sample",children:n.jsx(e,{children:"Example"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { ConfirmButton } from "@react-fabric/core";

export const Example = () => {
  return (
    <ConfirmButton
      icon="icon svg path"
      altIcon="caret icon"
      color="color"
      variant="style"
      loading={boolean}
      disabled={boolean}
      message="Confirmation message"
      okLabel="Yes"
      cancelLabel="No"
    >
      Button Label
    </Button>
  );
};
`})})]})}function y(o={}){const{wrapper:s}={...d(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(l,{...o})}):l(o)}export{y as default};
