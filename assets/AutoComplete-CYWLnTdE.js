import{j as o,M as c,T as d,A as e,S as n,D as i,P as x,C as p,b as u,a as h}from"./iframe-DcfUrZ2L.js";import{useMDXComponents as a}from"./index-DNW5OiL-.js";import"./index-Bl9sirez.js";import{C as l}from"./Collapsable-iyaaLFnt.js";import{A as j}from"./DualList-DiU7ycQJ.js";import{A as C,_ as f,M as s}from"./AutoComplete.stories-BHUQO86_.js";import"./toArray-BwHKXXJA.js";import"./Tooltip-Dv6V4Byx.js";import"./HeadFoot-BdfsRs4J.js";import"./BasePanel-CZJafQ4J.js";import"./Button-7pM1lgGA.js";import"./Google-DSP-6Nrb.js";import"./createClass-D99gLwRj.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./getDay-B6LYz-AP.js";import"./useDebounce-oR1dm03r.js";import"./Content-Cwxt_19N.js";import"./useResizeObserver-L_IFJsPD.js";import"./ErrorBoundary-CbzvQFF-.js";import"./Global-CmkQSaMP.js";import"./ToggleButtonGroup-CVNQsquy.js";import"./cloneElement-B4wm8_Ia.js";import"./Avatar-5xRpn6_B.js";import"./floating-ui.react-DaYvvi0U.js";import"./index-Iz_3oi3Q.js";import"./DatePanel-2KNianNU.js";import"./ButtonGroup-87GcGUAF.js";import"./EmptyContent-6xVjGj3J.js";import"./_isEqual-PxFgnGsO.js";import"./_dedupe-BYXvNVJ3.js";import"./useStorage-CEJPj8Xs.js";function m(t){const r={code:"code",pre:"pre",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:C}),`
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
