import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{S as n,_ as r,c as i,g as a,i as o,l as s,t as c,y as l}from"./blocks.js";import{R as u,t as d}from"./src2.js";import{t as f}from"./jsx-runtime.js";import{i as p,r as m}from"./react2.js";import{d as h,t as g}from"./src5.js";import{n as _,r as v,t as y}from"./FilteredList.stories.js";function b(e){let t={code:`code`,pre:`pre`,...p(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{of:_}),`
`,(0,S.jsx)(l,{children:`useFilteredList`}),`
`,(0,S.jsx)(c,{storyId:`animations`,children:(0,S.jsx)(`div`,{className:`hidden-anchor`,children:(0,S.jsx)(r,{children:`useFilteredList`})})}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(o,{withToolbar:!0,of:void 0}),`
`,(0,S.jsxs)(u,{className:`control-panel`,children:[(0,S.jsx)(`div`,{children:`Controls`}),(0,S.jsx)(i,{of:y})]}),`
`,(0,S.jsx)(`hr`,{}),`
`,(0,S.jsx)(c,{storyId:`props`,children:(0,S.jsx)(r,{children:`Usage`})}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-ts`,children:`useFilteredList<P, Q>(
    recordList: P[],
    matcher: (item:P, query:Q) => boolean
) => {
    filteredList:P[],
    query:Q,
    searching: boolean,
    onSearch: (query:Q)=>void,
}
`})}),`
`,(0,S.jsx)(c,{storyId:`sample`,children:(0,S.jsx)(r,{children:`Example`})}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { useFilteredList } from "@react-fabric/data";
import { Search } from "@react-fabric/form";

export const Example = () => {
  const { filteredList, isSearching, onSearch, search } = useFilteredList(recordList, (item, query) =>
    matchString(item.name, query),
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
`})})]})}function x(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=f(),m(),d(),g(),n(),t(),v()})))()}C();export{x as default};