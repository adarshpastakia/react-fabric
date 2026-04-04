import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{$t as i,Bt as a,Gt as o,Lt as s,M as c,Wt as l,Xt as u,Zt as d,nn as f,t as p,zt as m}from"./iframe-B-Wcw5ev.js";import{r as h}from"./react2.js";import{t as g}from"./mdx-react-shim.js";import{t as _,v}from"./src6.js";import{Multiple as y,Remote as b,Searchable as x,_Select as S,n as C,t as w}from"./Select.stories.js";function T(e){let t={code:`code`,pre:`pre`,...h(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{of:w}),`
`,(0,D.jsx)(i,{children:`Select`}),`
`,(0,D.jsx)(s,{storyId:`select`,children:(0,D.jsx)(`div`,{className:`hidden-anchor`,children:(0,D.jsx)(d,{children:`Select`})})}),`
`,(0,D.jsx)(o,{of:v}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:S}),`
`,(0,D.jsxs)(c,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(l,{of:S})]}),`
`,(0,D.jsx)(s,{storyId:`mutiple`,children:(0,D.jsx)(d,{children:`Multiple Select`})}),`
`,(0,D.jsx)(o,{of:y}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:y}),`
`,(0,D.jsxs)(c,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(l,{of:y})]}),`
`,(0,D.jsx)(s,{storyId:`searchable`,children:(0,D.jsx)(d,{children:`Searchable Select`})}),`
`,(0,D.jsx)(o,{of:x}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:x}),`
`,(0,D.jsxs)(c,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(l,{of:x})]}),`
`,(0,D.jsx)(s,{storyId:`remote`,children:(0,D.jsx)(d,{children:`Remote Query`})}),`
`,(0,D.jsx)(o,{of:b}),`
`,(0,D.jsx)(a,{withToolbar:!0,of:b}),`
`,(0,D.jsxs)(c,{className:`control-panel`,children:[(0,D.jsx)(`div`,{children:`Controls`}),(0,D.jsx)(l,{of:b})]}),`
`,(0,D.jsx)(`hr`,{}),`
`,(0,D.jsx)(s,{storyId:`props`,children:(0,D.jsx)(d,{children:`Props`})}),`
`,(0,D.jsx)(m,{sort:`requiredFirst`}),`
`,(0,D.jsx)(s,{storyId:`sample`,children:(0,D.jsx)(d,{children:`Example`})}),`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`import { Select } from "@react-fabric/form";

export const Example = () => {
  return (
    <Select
      label="Select label"
      options={[]}
      value={value}
      onChange={handleChange}
    />
  );
};
`})})]})}function E(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;t((()=>{D=r(),g(),p(),f(),e(n()),_(),C()}))();export{E as default};