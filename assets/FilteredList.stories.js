import{aO as a,j as e}from"./iframe-DpfJK_wQ.js";import{I as u}from"./Tooltip.js";import"./index.js";import{C as p}from"./Card2.js";import{T as h}from"./Title.js";import{H as x}from"./HeadFoot.js";import{S as f}from"./Section.js";import{V as g}from"./Viewport.js";import"./ColorPicker.js";import"./Google.js";import{u as S,S as j,a as v}from"./List.js";import{m as N}from"./isEqual.js";const y={title:"@data/useFilteredList",parameters:{layout:"fullscreen",controls:{exclude:"data"}}},n={render:C=>{const{filteredList:r,isSearching:o,onSearch:l,query:m}=S(a.list,(s,d)=>N(s.name.common,d));return e.jsx("div",{className:"min-h-[600px]",children:e.jsx(g,{children:e.jsxs(f,{children:[e.jsx(x,{className:"gap-2 p-2",children:e.jsxs("div",{className:"container",children:[e.jsx(j,{autoFocus:!0,searchOnChange:!0,value:m,onSearch:l,searching:o}),e.jsxs("div",{className:"py-2",children:["Showing ",r.length,"/",a.list.length," records"]})]})}),e.jsx(v,{items:r,hideScroller:!0,fullWidth:!0,children:({item:s})=>e.jsx("div",{className:"p-2 container max-w-96",children:e.jsxs(p,{children:[e.jsxs(h,{className:"flex items-center gap-2",children:[e.jsx(u,{className:"flex-content",size:"2rem",icon:`iconify-color circle-flags--${s.iconCode}`}),e.jsx("span",{className:"flex-1 truncate",children:s.name.common}),e.jsxs("span",{className:"text-sm text-muted flex-content",children:[s.cca2,"/",s.cca3]})]}),e.jsx("div",{children:s.capital})]})})})]})})})},args:{}};var t,i,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const {
      filteredList,
      isSearching,
      onSearch,
      query
    } = useFilteredList(Countries.list, (country, query) => matchString(country.name.common, query));
    return <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header className="gap-2 p-2">
              <div className="container">
                <Search autoFocus searchOnChange value={query} onSearch={onSearch} searching={isSearching} />
                <div className="py-2">
                  Showing {filteredList.length}/{Countries.list.length} records
                </div>
              </div>
            </Header>
            <VirtualList items={filteredList} hideScroller fullWidth>
              {({
              item
            }) => <div className="p-2 container max-w-96">
                  <Card>
                    <Title className="flex items-center gap-2">
                      <Icon className="flex-content" size="2rem" icon={\`iconify-color circle-flags--\${item.iconCode}\`} />
                      <span className="flex-1 truncate">
                        {item.name.common}
                      </span>
                      <span className="text-sm text-muted flex-content">
                        {item.cca2}/{item.cca3}
                      </span>
                    </Title>
                    <div>{item.capital}</div>
                  </Card>
                </div>}
            </VirtualList>
          </Section>
        </Viewport>
      </div>;
  },
  args: {}
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const L=["FilteredList"],W=Object.freeze(Object.defineProperty({__proto__:null,FilteredList:n,__namedExportsOrder:L,default:y},Symbol.toStringTag,{value:"Module"}));export{W as F,n as a};
