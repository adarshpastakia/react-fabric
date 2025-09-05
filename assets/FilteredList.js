import{j as r,M as m,T as a,A as i,S as o,D as p,P as c,C as d}from"./iframe-6XIGnDH8.js";import{useMDXComponents as s}from"./index.js";import"./index2.js";import{C as l}from"./Collapsable.js";import{u as h}from"./List.js";import{F as x,a as u}from"./FilteredList.stories.js";import"./toArray.js";import"./Tooltip.js";import"./ButtonGroup2.js";import"./cloneElement.js";import"./Button.js";import"./EmptyContent.js";import"./isEqual.js";import"./memoize-one.esm.js";import"./Copy.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./useDebounce.js";import"./Dropdown.js";import"./Menu.js";import"./nodeCheck.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./DateDisplay.js";import"./Global.js";import"./getByPath.js";import"./Divider.js";import"./DropdownTool.js";import"./ColorPicker.js";import"./index3.js";import"./ErrorIcon.js";import"./Input.js";import"./InputWrapper.js";import"./eventHandlers.js";import"./floating-ui.react.js";import"./dedupe.js";import"./debounce.js";import"./HeadFoot.js";import"./Section.js";import"./ErrorBoundary.js";import"./Card2.js";import"./Title.js";import"./Viewport.js";function n(e){const t={code:"code",pre:"pre",...s(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:x}),`
`,r.jsx(a,{children:"useFilteredList"}),`
`,r.jsx(i,{storyId:"animations",children:r.jsx("div",{className:"hidden-anchor",children:r.jsx(o,{children:"useFilteredList"})})}),`
`,r.jsx(p,{of:h}),`
`,r.jsx(c,{}),`
`,r.jsxs(l,{className:"control-panel",children:[r.jsx("div",{children:"Controls"}),r.jsx(d,{of:u})]}),`
`,r.jsx("hr",{}),`
`,r.jsx(i,{storyId:"props",children:r.jsx(o,{children:"Usage"})}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-ts",children:`useFilteredList<P, Q>(
    recordList: P[],
    matcher: (item:P, query:Q) => boolean
) => {
    filteredList:P[],
    query:Q,
    searching: boolean,
    onSearch: (query:Q)=>void,
}
`})}),`
`,r.jsx(i,{storyId:"sample",children:r.jsx(o,{children:"Example"})}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-tsx",children:`import { useFilteredList } from "@react-fabric/data";
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
`})})]})}function pr(e={}){const{wrapper:t}={...s(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(n,{...e})}):n(e)}export{pr as default};
