import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{$t as i,Bt as a,Gt as o,Lt as s,M as c,Wt as l,Xt as u,Zt as d,nn as f,t as p,zt as m}from"./iframe-B-Wcw5ev.js";import{r as h}from"./react2.js";import{t as g}from"./mdx-react-shim.js";import{i as _,t as v}from"./src6.js";import{Multiple as y,_AutoComplete as b,n as x,t as S}from"./AutoComplete.stories.js";function C(e){let t={code:`code`,pre:`pre`,...h(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{of:S}),`
`,(0,T.jsx)(i,{children:`AutoComplete`}),`
`,(0,T.jsx)(s,{storyId:`AutoComplete`,children:(0,T.jsx)(`div`,{className:`hidden-anchor`,children:(0,T.jsx)(d,{children:`AutoComplete`})})}),`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(a,{withToolbar:!0,of:b}),`
`,(0,T.jsxs)(c,{className:`control-panel`,children:[(0,T.jsx)(`div`,{children:`Controls`}),(0,T.jsx)(l,{of:b})]}),`
`,(0,T.jsx)(s,{storyId:`mutiple`,children:(0,T.jsx)(d,{children:`Multiple AutoComplete`})}),`
`,(0,T.jsx)(o,{of:y}),`
`,(0,T.jsx)(a,{withToolbar:!0,of:y}),`
`,(0,T.jsxs)(c,{className:`control-panel`,children:[(0,T.jsx)(`div`,{children:`Controls`}),(0,T.jsx)(l,{of:y})]}),`
`,(0,T.jsx)(`hr`,{}),`
`,(0,T.jsx)(s,{storyId:`props`,children:(0,T.jsx)(d,{children:`Props`})}),`
`,(0,T.jsx)(m,{sort:`requiredFirst`}),`
`,(0,T.jsx)(s,{storyId:`sample`,children:(0,T.jsx)(d,{children:`Example`})}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`import { AutoComplete } from "@react-fabric/form";

export const Example = () => {
  const [history, setHistory] = useLocalStorage<string[]>(
    "autocomplete:history",
    [],
  );
  const updateHistory = (values: string[] = []) => {
    setHistory(dedupe([...values, ...history]).slice(50));
  };

  return (
    <AutoComplete
      label="AutoComplete label"
      history={history}
      value={value}
      onChange={handleChange}
      onSelect={updateHistory}
    />
  );
};
`})})]})}function w(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;t((()=>{T=r(),g(),p(),f(),e(n()),v(),x()}))();export{w as default};