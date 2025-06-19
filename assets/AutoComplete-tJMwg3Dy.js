import{j as o,M as c,T as d,A as e,S as n,D as i,P as x,C as p,b as u,a as h}from"./iframe-DL5PLccW.js";import{useMDXComponents as a}from"./index-C24dvQkY.js";import"./index-DPKHNOa8.js";import{C as l}from"./Collapsable-DQ_FQmYr.js";import{A as j}from"./DualList-BWd_coxF.js";import{A as C,_ as f,M as s}from"./AutoComplete.stories-CEXOeygU.js";import"./toArray-CuTPFbH_.js";import"./Tooltip-BPKa3gaw.js";import"./HeadFoot-BOKBTLfn.js";import"./BasePanel-CXQucVik.js";import"./Button-B4MR9BdT.js";import"./Google-B5-g4RDV.js";import"./createClass-DjEsl4fx.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./getDay-wNg2b-WG.js";import"./useDebounce-DUBqCfh2.js";import"./Content-BWk5dK7X.js";import"./useResizeObserver-Bn-Pa1XM.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./Global-Dhvrkiym.js";import"./ToggleButtonGroup-D0cpnvS6.js";import"./cloneElement-_d6a3Gjs.js";import"./Avatar-2qoU-_h2.js";import"./floating-ui.react-CT9AAP4P.js";import"./index-HqHJXvHv.js";import"./DatePanel-DQBUsAH4.js";import"./ButtonGroup-CcmBan6Y.js";import"./EmptyContent-1ZSnSbmB.js";import"./_isEqual-Q02tGGHK.js";import"./_dedupe-SnwC8TxO.js";import"./useStorage-C1NvOMlr.js";function m(t){const r={code:"code",pre:"pre",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:C}),`
`,o.jsx(d,{children:"AutoComplete"}),`
`,o.jsx(e,{storyId:"AutoComplete",children:o.jsx("div",{className:"hidden-anchor",children:o.jsx(n,{children:"AutoComplete"})})}),`
`,o.jsx(i,{of:j}),`
`,o.jsx(x,{}),`
`,o.jsxs(l,{className:"control-panel",children:[o.jsx("div",{children:"Controls"}),o.jsx(p,{of:f})]}),`
`,o.jsx(e,{storyId:"mutiple",children:o.jsx(n,{children:"Multiple AutoComplete"})}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(u,{withToolbar:!0,of:s}),`
`,o.jsxs(l,{className:"control-panel",children:[o.jsx("div",{children:"Controls"}),o.jsx(p,{of:s})]}),`
`,o.jsx("hr",{}),`
`,o.jsx(e,{storyId:"props",children:o.jsx(n,{children:"Props"})}),`
`,o.jsx(h,{sort:"requiredFirst"}),`
`,o.jsx(e,{storyId:"sample",children:o.jsx(n,{children:"Example"})}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-tsx",children:`import { AutoComplete } from "@react-fabric/form";

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
`})})]})}function Z(t={}){const{wrapper:r}={...a(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(m,{...t})}):m(t)}export{Z as default};
