import{j as r,M as m,T as a,A as i,S as n,D as p,P as c,C as d}from"./iframe-BcXNitKG.js";import{useMDXComponents as s}from"./index-DTWmRsKI.js";import"./index-DUA9IMpG.js";import{C as l}from"./Collapsable-GlVs_tGp.js";import{u as h}from"./List-5a0r18Ni.js";import{F as x,a as u}from"./FilteredList.stories-BIh6Mskn.js";import"./Tooltip-J_gHpl9C.js";import"./toArray-DlTuwiZT.js";import"./ButtonGroup-CZyLy_kH.js";import"./cloneElement-Bgycha4-.js";import"./Button-7R_E-GE9.js";import"./EmptyContent-CnA5ADIa.js";import"./_isEqual-JedAdon-.js";import"./Input-IeT5RECO.js";import"./InputWrapper-DVhr945a.js";import"./ColorPicker-0pYYboV3.js";import"./Google-DOYfq3v8.js";import"./createClass-B8xyeRfs.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./index-CqCs8NGq.js";import"./eventHandlers-JUcml5Fv.js";import"./floating-ui.react-CCZcFCqr.js";import"./useDebounce-rX8HuXnO.js";import"./Text-LNzV1gTO.js";import"./usePropToggle-Ck2VfQ2Q.js";import"./types-DXUe1Zpb.js";import"./Dropdown-DUHKUE_z.js";import"./Menu-CIViNpVY.js";import"./DateDisplay-CGmEnYvR.js";import"./Global-HPy1X0OU.js";import"./_getByPath-ibQb353G.js";import"./Divider-DB8bkHxO.js";import"./DropdownTool-C8jg9dyY.js";import"./_dedupe-Dul_0PfE.js";import"./_debounce-BHO_GiD4.js";import"./HeadFoot-DLpVmsEq.js";import"./Section-BAtoQgEv.js";import"./ErrorBoundary-C8J7aorp.js";import"./Card-Dr_pFzUd.js";import"./Title-C6-jD7DZ.js";import"./Viewport-y0mN7whU.js";function o(t){const e={code:"code",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:x}),`
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
