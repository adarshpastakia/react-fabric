import{j as r,M as m,T as a,A as i,S as n,D as p,P as c,C as d}from"./iframe-DL5PLccW.js";import{useMDXComponents as s}from"./index-C24dvQkY.js";import"./index-DPKHNOa8.js";import{C as l}from"./Collapsable-DQ_FQmYr.js";import{u as h}from"./List-CyyUMcj7.js";import{F as x,a as u}from"./FilteredList.stories-BxrhwyVh.js";import"./toArray-CuTPFbH_.js";import"./Tooltip-BPKa3gaw.js";import"./ButtonGroup-CcmBan6Y.js";import"./cloneElement-_d6a3Gjs.js";import"./Button-B4MR9BdT.js";import"./EmptyContent-1ZSnSbmB.js";import"./_isEqual-Q02tGGHK.js";import"./Input-C2J8r03n.js";import"./InputWrapper-M6su9Q9e.js";import"./ColorPicker-Cc5ydKIF.js";import"./Google-B5-g4RDV.js";import"./createClass-DjEsl4fx.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./index-HqHJXvHv.js";import"./eventHandlers-CcecLcKh.js";import"./floating-ui.react-CT9AAP4P.js";import"./useDebounce-DUBqCfh2.js";import"./Text-CwzsJ7bo.js";import"./usePropToggle-D4M8sFrj.js";import"./types-DXUe1Zpb.js";import"./Dropdown-BkPoAgTO.js";import"./Menu-CcUoW62j.js";import"./DateDisplay-DV58skfQ.js";import"./Global-Dhvrkiym.js";import"./_getByPath-TSIqsuP9.js";import"./Divider-DeNf5KPC.js";import"./DropdownTool-DuZpCV3J.js";import"./_dedupe-SnwC8TxO.js";import"./_debounce-BHO_GiD4.js";import"./HeadFoot-BOKBTLfn.js";import"./Section-m1pcBAPK.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./Card-C61MeKDX.js";import"./Title-B0hOC-55.js";import"./Viewport-v3RQO1q4.js";function o(t){const e={code:"code",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:x}),`
`,r.jsx(a,{children:"useFilteredList"}),`
`,r.jsx(i,{storyId:"animations",children:r.jsx("div",{className:"hidden-anchor",children:r.jsx(n,{children:"useFilteredList"})})}),`
`,r.jsx(p,{of:h}),`
`,r.jsx(c,{}),`
`,r.jsxs(l,{className:"control-panel",children:[r.jsx("div",{children:"Controls"}),r.jsx(d,{of:u})]}),`
`,r.jsx("hr",{}),`
`,r.jsx(i,{storyId:"props",children:r.jsx(n,{children:"Usage"})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`useFilteredList<P, Q>(
    recordList: P[],
    matcher: (item:P, query:Q) => boolean
) => {
    filteredList:P[],
    query:Q,
    searching: boolean,
    onSearch: (query:Q)=>void,
}
`})}),`
`,r.jsx(i,{storyId:"sample",children:r.jsx(n,{children:"Example"})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { useFilteredList } from "@react-fabric/data";
import { Search } from "@react-fabric/form";

export const Example = () => {
  const { filteredList, isSearching, onSearch, search } = useFilteredList(
    recordList,
    (item, query) => matchString(item.name, query),
  );

  return (
    <div>
      <Search value={query} onSearch={onSearch} searching={isSearching} />
      {filteredList.map((item) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </div>
  );
};
`})})]})}function or(t={}){const{wrapper:e}={...s(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(o,{...t})}):o(t)}export{or as default};
