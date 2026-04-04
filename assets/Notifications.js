import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{$t as i,Bt as a,Gt as o,Lt as s,Wt as c,Xt as l,Zt as u,nn as d,zt as f}from"./iframe-B-Wcw5ev.js";import{r as p}from"./react2.js";import{t as m}from"./mdx-react-shim.js";import{N as h,W as g,t as _}from"./src3.js";import{_Alert as v,t as y}from"./Alert.stories.js";import{_Message as b,t as x}from"./Message.stories.js";import{_Toast as S,n as C,t as w}from"./Toast.stories.js";function T(e){let t={code:`code`,pre:`pre`,...p(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(l,{of:w}),`
`,(0,D.jsx)(i,{children:`Notifications`}),`
`,(0,D.jsx)(s,{storyId:`notifications`,children:(0,D.jsx)(u,{children:`Toasts`})}),`
`,(0,D.jsx)(o,{of:g}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:S}),`
`,(0,D.jsxs)(h,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(c,{of:S})]}),`
`,(0,D.jsx)(s,{storyId:`messages`,children:(0,D.jsx)(u,{children:`Messages`})}),`
`,(0,D.jsx)(o,{of:b}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:b}),`
`,(0,D.jsxs)(h,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(c,{of:b})]}),`
`,(0,D.jsx)(s,{storyId:`alerts`,children:(0,D.jsx)(u,{children:`Alerts`})}),`
`,(0,D.jsx)(o,{of:v}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:v}),`
`,(0,D.jsxs)(h,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(c,{of:v})]}),`
`,(0,D.jsx)(`hr`,{}),`
`,(0,D.jsx)(s,{storyId:`props`,children:(0,D.jsx)(u,{children:`Props`})}),`
`,(0,D.jsx)(f,{sort:`requiredFirst`}),`
`,(0,D.jsx)(s,{storyId:`sample`,children:(0,D.jsx)(u,{children:`Example`})}),`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`import { Button, useNotificationService } from "@react-fabric/core";

export const Example = () => {
  const { showToast } = useNotificationService();

  return (
    <Fragment>
      <Button
        onClick={() =>
          showToast({
            message: "Message text...",
            actions: <Button value="extra">Action</Button>,
          }).then((ret) => {
            // return of true/fale or action value
          })
        }
      >
        Toast
      </Button>
    </Fragment>
  );
};
`})})]})}function E(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;t((()=>{D=r(),m(),d(),e(n()),_(),y(),x(),C()}))();export{E as default};