import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{_ as i,b as a,c as o,h as s,i as c,l,m as u,r as d,t as f}from"./iframe-BBjx9o_X.js";import{r as p}from"./react2.js";import{t as m}from"./mdx-react-shim.js";import{J as h,R as g,t as _}from"./src3.js";import{_Alert as v,t as y}from"./Alert.stories.js";import{_Message as b,t as x}from"./Message.stories.js";import{_Toast as S,n as C,t as w}from"./Toast.stories.js";function T(e){let t={code:`code`,pre:`pre`,...p(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{of:w}),`
`,(0,D.jsx)(i,{children:`Notifications`}),`
`,(0,D.jsx)(f,{storyId:`notifications`,children:(0,D.jsx)(s,{children:`Toasts`})}),`
`,(0,D.jsx)(l,{of:h}),`
`,(0,D.jsx)(c,{withToolbar:!0,of:S}),`
`,(0,D.jsxs)(g,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(o,{of:S})]}),`
`,(0,D.jsx)(f,{storyId:`messages`,children:(0,D.jsx)(s,{children:`Messages`})}),`
`,(0,D.jsx)(l,{of:b}),`
`,(0,D.jsx)(c,{withToolbar:!0,of:b}),`
`,(0,D.jsxs)(g,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(o,{of:b})]}),`
`,(0,D.jsx)(f,{storyId:`alerts`,children:(0,D.jsx)(s,{children:`Alerts`})}),`
`,(0,D.jsx)(l,{of:v}),`
`,(0,D.jsx)(c,{withToolbar:!0,of:v}),`
`,(0,D.jsxs)(g,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(o,{of:v})]}),`
`,(0,D.jsx)(`hr`,{}),`
`,(0,D.jsx)(f,{storyId:`props`,children:(0,D.jsx)(s,{children:`Props`})}),`
`,(0,D.jsx)(d,{sort:`requiredFirst`}),`
`,(0,D.jsx)(f,{storyId:`sample`,children:(0,D.jsx)(s,{children:`Example`})}),`
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
`})})]})}function E(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;t((()=>{D=r(),m(),a(),e(n()),_(),y(),x(),C()}))();export{E as default};