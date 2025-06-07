import{j as o,M as c,T as d,A as e,S as n,D as i,P as x,C as p,b as u,a as h}from"./iframe-BcXNitKG.js";import{useMDXComponents as a}from"./index-DTWmRsKI.js";import"./index-DUA9IMpG.js";import{C as l}from"./Collapsable-GlVs_tGp.js";import{A as j}from"./DualList-rWC3PaES.js";import{A as C,_ as f,M as s}from"./AutoComplete.stories-pW3k0eX1.js";import"./Tooltip-J_gHpl9C.js";import"./toArray-DlTuwiZT.js";import"./HeadFoot-DLpVmsEq.js";import"./BasePanel-DkxgOkoR.js";import"./Button-7R_E-GE9.js";import"./Google-DOYfq3v8.js";import"./createClass-B8xyeRfs.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./getDay-G_5ar-z-.js";import"./useDebounce-rX8HuXnO.js";import"./Content-BJKCk6Ue.js";import"./useResizeObserver-Cq2Z_pjG.js";import"./ErrorBoundary-C8J7aorp.js";import"./Global-HPy1X0OU.js";import"./ToggleButtonGroup-BKgoITDu.js";import"./cloneElement-Bgycha4-.js";import"./Avatar-CTJ9ye12.js";import"./floating-ui.react-CCZcFCqr.js";import"./index-CqCs8NGq.js";import"./DatePanel-DygvepWU.js";import"./ButtonGroup-CZyLy_kH.js";import"./EmptyContent-CnA5ADIa.js";import"./_isEqual-JedAdon-.js";import"./_dedupe-Dul_0PfE.js";import"./useStorage-VRxlaZRS.js";function m(t){const r={code:"code",pre:"pre",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:C}),`
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
