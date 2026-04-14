import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{_ as i,b as a,c as o,h as s,i as c,l,m as u,r as d,t as f}from"./iframe-Du5FrOxJ.js";import{r as p}from"./react2.js";import{t as m}from"./mdx-react-shim.js";import{R as h,Z as g,t as _}from"./src3.js";import{ConfirmWithAction as v,_ConfirmButton as y,n as b,t as x}from"./ConfirmButton.stories.js";function S(e){let t={code:`code`,pre:`pre`,...p(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{of:x}),`
`,(0,w.jsx)(i,{children:`Confirm Button`}),`
`,(0,w.jsx)(f,{storyId:`confirmButton`,children:(0,w.jsx)(`div`,{className:`hidden-anchor`,children:(0,w.jsx)(s,{children:`Confirm Button`})})}),`
`,(0,w.jsx)(l,{of:g}),`
`,(0,w.jsx)(c,{withToolbar:!0,of:y}),`
`,(0,w.jsxs)(h,{className:`control-panel`,children:[(0,w.jsx)(`div`,{children:`Controls`}),(0,w.jsx)(o,{of:y})]}),`
`,(0,w.jsx)(f,{storyId:`withAction`,children:(0,w.jsx)(s,{children:`With Action`})}),`
`,(0,w.jsx)(l,{of:v}),`
`,(0,w.jsx)(c,{withToolbar:!0,of:v}),`
`,(0,w.jsxs)(h,{className:`control-panel`,children:[(0,w.jsx)(`div`,{children:`Controls`}),(0,w.jsx)(o,{of:v})]}),`
`,(0,w.jsx)(`hr`,{}),`
`,(0,w.jsx)(f,{storyId:`props`,children:(0,w.jsx)(s,{children:`Props`})}),`
`,(0,w.jsx)(d,{sort:`requiredFirst`}),`
`,(0,w.jsx)(f,{storyId:`sample`,children:(0,w.jsx)(s,{children:`Example`})}),`
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
`})})]})}function C(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;t((()=>{w=r(),m(),a(),e(n()),_(),b()}))();export{C as default};