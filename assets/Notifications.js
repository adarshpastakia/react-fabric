import{j as n,M as m,T as h,A as o,S as t,D as r,aD as f,P as u,c as a,C as i,b as x,a as p}from"./iframe-DZ_tjZ0H.js";import{useMDXComponents as j}from"./index.js";import{_Alert as c}from"./Alert.stories.js";import{_Message as l}from"./Message.stories.js";import{T as g,_ as C}from"./Toast.stories.js";import"./index4.js";function d(s){const e={code:"code",pre:"pre",...j(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:g}),`
`,n.jsx(h,{children:"Notifications"}),`
`,n.jsx(o,{storyId:"notifications",children:n.jsx(t,{children:"Toasts"})}),`
`,n.jsx(r,{of:f}),`
`,n.jsx(u,{}),`
`,n.jsxs(a,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(i,{of:C})]}),`
`,n.jsx(o,{storyId:"messages",children:n.jsx(t,{children:"Messages"})}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(x,{withToolbar:!0,of:l}),`
`,n.jsxs(a,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(i,{of:l})]}),`
`,n.jsx(o,{storyId:"alerts",children:n.jsx(t,{children:"Alerts"})}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(x,{withToolbar:!0,of:c}),`
`,n.jsxs(a,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(i,{of:c})]}),`
`,n.jsx("hr",{}),`
`,n.jsx(o,{storyId:"props",children:n.jsx(t,{children:"Props"})}),`
`,n.jsx(p,{sort:"requiredFirst"}),`
`,n.jsx(o,{storyId:"sample",children:n.jsx(t,{children:"Example"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, useNotificationService } from "@react-fabric/core";

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
`})})]})}function A(s={}){const{wrapper:e}={...j(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{A as default};
