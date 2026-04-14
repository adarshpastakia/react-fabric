import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{C as i,_ as a,b as o,c as s,h as c,i as l,l as u,m as d,t as f,tt as p}from"./iframe-Du5FrOxJ.js";import{r as m}from"./react2.js";import{t as h}from"./mdx-react-shim.js";import{o as g,t as _}from"./src4.js";import{FilteredList as v,n as y,t as b}from"./FilteredList.stories.js";function x(e){let t={code:`code`,pre:`pre`,...m(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{of:b}),`
`,(0,C.jsx)(a,{children:`useFilteredList`}),`
`,(0,C.jsx)(f,{storyId:`animations`,children:(0,C.jsx)(`div`,{className:`hidden-anchor`,children:(0,C.jsx)(c,{children:`useFilteredList`})})}),`
`,(0,C.jsx)(u,{of:g}),`
`,(0,C.jsx)(l,{withToolbar:!0,of:void 0}),`
`,(0,C.jsxs)(p,{className:`control-panel`,children:[(0,C.jsx)(`div`,{children:`Controls`}),(0,C.jsx)(s,{of:v})]}),`
`,(0,C.jsx)(`hr`,{}),`
`,(0,C.jsx)(f,{storyId:`props`,children:(0,C.jsx)(c,{children:`Usage`})}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-ts`,children:`useFilteredList<P, Q>(
    recordList: P[],
    matcher: (item:P, query:Q) => boolean
) => {
    filteredList:P[],
    query:Q,
    searching: boolean,
    onSearch: (query:Q)=>void,
}
`})}),`
`,(0,C.jsx)(f,{storyId:`sample`,children:(0,C.jsx)(c,{children:`Example`})}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`import { useFilteredList } from "@react-fabric/data";
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
`})})]})}function S(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;t((()=>{C=r(),h(),i(),o(),e(n()),_(),y()}))();export{S as default};