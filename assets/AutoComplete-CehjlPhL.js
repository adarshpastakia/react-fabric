import{j as o,M as c,T as d,A as e,S as n,D as i,P as x,C as p,b as u,a as h}from"./iframe-CVyMRGSP.js";import{useMDXComponents as a}from"./index-BFESGooZ.js";import"./index-D3XXfjI1.js";import{C as l}from"./Collapsable-DPnPevm1.js";import{A as j}from"./DualList-DCn26jaf.js";import{A as C,_ as f,M as s}from"./AutoComplete.stories-B_kDgjNu.js";import"./Tooltip-D82JqM4y.js";import"./toArray-DwQWYzJ7.js";import"./HeadFoot-gLuWE0O1.js";import"./BasePanel-9ehr4Bks.js";import"./Button-DAqx1TyP.js";import"./Google-DJpRc7c-.js";import"./createClass-eMtQ1dFD.js";import"./zh-CN-FLa9i-pX.js";import"./endOfDay-CyHfuoBH.js";import"./index-BJLwolNv.js";import"./getDay-Cl8EDKbu.js";import"./useDebounce-Bpvok1Zz.js";import"./Content-BDvcrf-C.js";import"./useResizeObserver-CzVPFDEQ.js";import"./ErrorBoundary-1v1ksgaq.js";import"./Global-BZCLuW51.js";import"./ToggleButtonGroup-DJgg-62g.js";import"./cloneElement-Ch-Lp1Ig.js";import"./Avatar-mNhz2Qn6.js";import"./floating-ui.react-DNZDxEHZ.js";import"./index-iLbIT3XK.js";import"./DatePanel-CZSFYBtt.js";import"./ButtonGroup-g9nz5iah.js";import"./EmptyContent-qLuxBqO2.js";import"./_isEqual-C0Ek68wL.js";import"./_dedupe-Z-qx8K2g.js";import"./useStorage-D3i0Ot7K.js";function m(t){const r={code:"code",pre:"pre",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:C}),`
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
