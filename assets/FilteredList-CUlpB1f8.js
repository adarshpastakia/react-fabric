import{j as r,M as m,T as a,A as i,S as n,D as p,P as c,C as d}from"./iframe-CVyMRGSP.js";import{useMDXComponents as s}from"./index-BFESGooZ.js";import"./index-D3XXfjI1.js";import{C as l}from"./Collapsable-DPnPevm1.js";import{u as h}from"./List-DspO0FFg.js";import{F as x,a as u}from"./FilteredList.stories-Bz3wfkq0.js";import"./Tooltip-D82JqM4y.js";import"./toArray-DwQWYzJ7.js";import"./ButtonGroup-g9nz5iah.js";import"./cloneElement-Ch-Lp1Ig.js";import"./Button-DAqx1TyP.js";import"./EmptyContent-qLuxBqO2.js";import"./_isEqual-C0Ek68wL.js";import"./Input-DhhAZSLP.js";import"./InputWrapper-DFXsbVS4.js";import"./ColorPicker-BwNyvkQX.js";import"./Google-DJpRc7c-.js";import"./createClass-eMtQ1dFD.js";import"./zh-CN-FLa9i-pX.js";import"./endOfDay-CyHfuoBH.js";import"./index-BJLwolNv.js";import"./index-iLbIT3XK.js";import"./eventHandlers-BD3d4itr.js";import"./floating-ui.react-DNZDxEHZ.js";import"./useDebounce-Bpvok1Zz.js";import"./Text-B9zAnOfL.js";import"./usePropToggle-BOifV6nf.js";import"./types-DXUe1Zpb.js";import"./Dropdown-DQ3PjC0k.js";import"./Menu-D-52EtQQ.js";import"./DateDisplay-BxOBcsBi.js";import"./Global-BZCLuW51.js";import"./_getByPath-CZ4477fi.js";import"./Divider-CVDW6mjR.js";import"./DropdownTool-CwJxuMgq.js";import"./_dedupe-Z-qx8K2g.js";import"./_debounce-BHO_GiD4.js";import"./HeadFoot-gLuWE0O1.js";import"./Section-BWnuMXLb.js";import"./ErrorBoundary-1v1ksgaq.js";import"./Card-DW5mIZq_.js";import"./Title-Cm6WFtyt.js";import"./Viewport-BXUQz2Et.js";function o(t){const e={code:"code",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:x}),`
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
