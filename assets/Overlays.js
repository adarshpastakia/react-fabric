import{j as n,M as x,T as m,A as r,S as s,D as a,P as j,c as l,C as c,b as p,a as u}from"./iframe-BTaJxP5y.js";import{useMDXComponents as d}from"./index.js";import{u as h}from"./useOverlayService.js";import{_Flyout as t}from"./Flyout.stories.js";import{M as f,_ as y}from"./Modal.stories.js";import"./index4.js";function i(e){const o={code:"code",pre:"pre",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:f}),`
`,n.jsx(m,{children:"Overlays"}),`
`,n.jsx(r,{storyId:"modal",children:n.jsx(s,{children:"Modal"})}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(j,{}),`
`,n.jsxs(l,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(c,{of:y})]}),`
`,n.jsx(r,{storyId:"flyout",children:n.jsx(s,{children:"Flyouts"})}),`
`,n.jsx(a,{of:t}),`
`,n.jsx(p,{withToolbar:!0,of:t}),`
`,n.jsxs(l,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(c,{of:t})]}),`
`,n.jsx("hr",{}),`
`,n.jsx(r,{storyId:"props",children:n.jsx(s,{children:"Props"})}),`
`,n.jsx(u,{sort:"requiredFirst"}),`
`,n.jsx(r,{storyId:"sample",children:n.jsx(s,{children:"Example"})}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Button, useOverlayService } from "@react-fabric/core";

export const Example = () => {
  const [ModelNode, openModal] = useOverlayService(ModalComponent);

  return (
    <Fragment>
      <Button
        onClick={() =>
          openModal({
            ...anyargs,
          }).then((ret) => {
            // return value modal.onClose
          })
        }
      >
        Modal
      </Button>
    </Fragment>
  );
};
`})})]})}function b(e={}){const{wrapper:o}={...d(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{b as default};
