import{j as o,M as c,T as d,A as e,S as n,D as i,P as x,C as p,b as u,a as h}from"./iframe-6XIGnDH8.js";import{useMDXComponents as a}from"./index.js";import"./index2.js";import{C as l}from"./Collapsable.js";import{A as j}from"./DualList.js";import{A as C,_ as f,M as s}from"./AutoComplete.stories.js";import"./toArray.js";import"./Tooltip.js";import"./HeadFoot.js";import"./BasePanel.js";import"./Button.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./useDebounce.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Avatar2.js";import"./floating-ui.react.js";import"./index3.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./dedupe.js";import"./useStorage.js";function m(t){const r={code:"code",pre:"pre",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:C}),`
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
