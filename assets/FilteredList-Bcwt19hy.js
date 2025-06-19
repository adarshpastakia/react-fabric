import{j as r,M as m,T as a,A as i,S as n,D as p,P as c,C as d}from"./iframe-DcfUrZ2L.js";import{useMDXComponents as s}from"./index-DNW5OiL-.js";import"./index-Bl9sirez.js";import{C as l}from"./Collapsable-iyaaLFnt.js";import{u as h}from"./List-cGuqJBjF.js";import{F as x,a as u}from"./FilteredList.stories-BIK8B03k.js";import"./toArray-BwHKXXJA.js";import"./Tooltip-Dv6V4Byx.js";import"./ButtonGroup-87GcGUAF.js";import"./cloneElement-B4wm8_Ia.js";import"./Button-7pM1lgGA.js";import"./EmptyContent-6xVjGj3J.js";import"./_isEqual-PxFgnGsO.js";import"./Input-DcUtB-oZ.js";import"./InputWrapper-Bmbugn7q.js";import"./ColorPicker-B2sfWfiP.js";import"./Google-DSP-6Nrb.js";import"./createClass-D99gLwRj.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./index-Iz_3oi3Q.js";import"./eventHandlers-BDcAz1uA.js";import"./floating-ui.react-DaYvvi0U.js";import"./useDebounce-oR1dm03r.js";import"./Text-BAk0flt3.js";import"./usePropToggle-DoIYClWc.js";import"./types-DXUe1Zpb.js";import"./Dropdown-Cqgvd0wk.js";import"./Menu-BypgFP0F.js";import"./DateDisplay-D_9FGt-M.js";import"./Global-CmkQSaMP.js";import"./_getByPath-DLgtPcy8.js";import"./Divider-DRJ3j7C2.js";import"./DropdownTool-CCLyIfh9.js";import"./_dedupe-BYXvNVJ3.js";import"./_debounce-BHO_GiD4.js";import"./HeadFoot-BdfsRs4J.js";import"./Section-Dbs60dt2.js";import"./ErrorBoundary-CbzvQFF-.js";import"./Card-CZJ0ddcV.js";import"./Title-YO6WK8jo.js";import"./Viewport-CcMKmxve.js";function o(t){const e={code:"code",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:x}),`
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
