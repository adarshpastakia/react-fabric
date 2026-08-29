import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{S as n,_ as r,c as i,g as a,i as o,l as s,r as c,t as l,y as u}from"./blocks.js";import{R as d,t as f}from"./src2.js";import{t as p}from"./jsx-runtime.js";import{i as m,r as h}from"./react2.js";import{m as g,t as _}from"./src5.js";import{n as v,r as y,t as b}from"./JsonViewer.stories.js";function x(e){let t={code:`code`,pre:`pre`,...m(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{of:b}),`
`,(0,C.jsx)(u,{children:`Json Viewer`}),`
`,(0,C.jsx)(l,{storyId:`JsonViewer`,children:(0,C.jsx)(`div`,{className:`hidden-anchor`,children:(0,C.jsx)(r,{children:`Json Viewer`})})}),`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsx)(o,{withToolbar:!0,of:v}),`
`,(0,C.jsxs)(d,{className:`control-panel`,children:[(0,C.jsx)(`div`,{children:`Controls`}),(0,C.jsx)(i,{of:v})]}),`
`,(0,C.jsx)(`hr`,{}),`
`,(0,C.jsx)(l,{storyId:`props`,children:(0,C.jsx)(r,{children:`Props`})}),`
`,(0,C.jsx)(c,{sort:`requiredFirst`}),`
`,(0,C.jsx)(l,{storyId:`sample`,children:(0,C.jsx)(r,{children:`Example`})}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`import { JsonViewer } from "@react-fabric/data";

export const Example = () => {
  return <JsonViewer json={AnyObject} />;
};
`})})]})}function S(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=p(),h(),f(),_(),n(),t(),y()})))()}w();export{S as default};