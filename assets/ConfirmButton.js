import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{$t as i,Bt as a,Gt as o,Lt as s,Wt as c,Xt as l,Zt as u,nn as d,zt as f}from"./iframe-B-Wcw5ev.js";import{r as p}from"./react2.js";import{t as m}from"./mdx-react-shim.js";import{N as h,Z as g,t as _}from"./src3.js";import{ConfirmWithAction as v,_ConfirmButton as y,n as b,t as x}from"./ConfirmButton.stories.js";function S(e){let t={code:`code`,pre:`pre`,...p(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{of:x}),`
`,(0,w.jsx)(i,{children:`Confirm Button`}),`
`,(0,w.jsx)(s,{storyId:`confirmButton`,children:(0,w.jsx)(`div`,{className:`hidden-anchor`,children:(0,w.jsx)(u,{children:`Confirm Button`})})}),`
`,(0,w.jsx)(o,{of:g}),`
`,(0,w.jsx)(a,{withToolbar:!0,of:y}),`
`,(0,w.jsxs)(h,{className:`control-panel`,children:[(0,w.jsx)(`div`,{children:`Controls`}),(0,w.jsx)(c,{of:y})]}),`
`,(0,w.jsx)(s,{storyId:`withAction`,children:(0,w.jsx)(u,{children:`With Action`})}),`
`,(0,w.jsx)(o,{of:v}),`
`,(0,w.jsx)(a,{withToolbar:!0,of:v}),`
`,(0,w.jsxs)(h,{className:`control-panel`,children:[(0,w.jsx)(`div`,{children:`Controls`}),(0,w.jsx)(c,{of:v})]}),`
`,(0,w.jsx)(`hr`,{}),`
`,(0,w.jsx)(s,{storyId:`props`,children:(0,w.jsx)(u,{children:`Props`})}),`
`,(0,w.jsx)(f,{sort:`requiredFirst`}),`
`,(0,w.jsx)(s,{storyId:`sample`,children:(0,w.jsx)(u,{children:`Example`})}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-tsx`,children:`import { ConfirmButton } from "@react-fabric/core";

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
`})})]})}function C(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;t((()=>{w=r(),m(),d(),e(n()),_(),b()}))();export{C as default};