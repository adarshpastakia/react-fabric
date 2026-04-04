import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{$t as i,Bt as a,Gt as o,Lt as s,Wt as c,Xt as l,Zt as u,nn as d,zt as f}from"./iframe-B-Wcw5ev.js";import{r as p}from"./react2.js";import{t as m}from"./mdx-react-shim.js";import{N as h,n as g,t as _}from"./src3.js";import{_Flyout as v,t as y}from"./Flyout.stories.js";import{_Modal as b,n as x,t as S}from"./Modal.stories.js";function C(e){let t={code:`code`,pre:`pre`,...p(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l,{of:S}),`
`,(0,T.jsx)(i,{children:`Overlays`}),`
`,(0,T.jsx)(s,{storyId:`modal`,children:(0,T.jsx)(u,{children:`Modal`})}),`
`,(0,T.jsx)(o,{of:g}),`
`,(0,T.jsx)(a,{withToolbar:!0,of:b}),`
`,(0,T.jsxs)(h,{className:`control-panel`,children:[(0,T.jsx)(`div`,{children:`Controls`}),(0,T.jsx)(c,{of:b})]}),`
`,(0,T.jsx)(s,{storyId:`flyout`,children:(0,T.jsx)(u,{children:`Flyouts`})}),`
`,(0,T.jsx)(o,{of:v}),`
`,(0,T.jsx)(a,{withToolbar:!0,of:v}),`
`,(0,T.jsxs)(h,{className:`control-panel`,children:[(0,T.jsx)(`div`,{children:`Controls`}),(0,T.jsx)(c,{of:v})]}),`
`,(0,T.jsx)(`hr`,{}),`
`,(0,T.jsx)(s,{storyId:`props`,children:(0,T.jsx)(u,{children:`Props`})}),`
`,(0,T.jsx)(f,{sort:`requiredFirst`}),`
`,(0,T.jsx)(s,{storyId:`sample`,children:(0,T.jsx)(u,{children:`Example`})}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`import { Button, useOverlayService } from "@react-fabric/core";

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
`})})]})}function w(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;t((()=>{T=r(),m(),d(),e(n()),_(),y(),x()}))();export{w as default};