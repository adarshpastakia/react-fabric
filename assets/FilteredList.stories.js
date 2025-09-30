import{aR as a,j as e}from"./iframe-Ctw5u0Cj.js";import{I as p}from"./Tooltip.js";import"./index2.js";import{C as u}from"./Card2.js";import{T as h}from"./Title.js";import{H as x}from"./HeadFoot.js";import{S as f}from"./Section.js";import{V as g}from"./Viewport.js";import"./ColorPicker.js";import"./Google.js";import{u as S,S as j,a as v}from"./List.js";import{m as N}from"./isEqual.js";const L={title:"@data/useFilteredList",parameters:{layout:"fullscreen",controls:{exclude:"data"}}},r={render:F=>{const{filteredList:t,isSearching:l,onSearch:o,query:m}=S(a.list,(s,d)=>N(s.name,d));return e.jsx("div",{className:"min-h-[600px]",children:e.jsx(g,{children:e.jsxs(f,{children:[e.jsx(x,{className:"gap-2 p-2",children:e.jsxs("div",{className:"container",children:[e.jsx(j,{autoFocus:!0,value:m,onSearch:o,searching:l}),e.jsxs("div",{className:"py-2",children:["Showing ",t.length,"/",a.list.length," records"]})]})}),e.jsx(v,{items:t,hideScroller:!0,fullWidth:!0,children:({item:s})=>e.jsx("div",{className:"p-2 container max-w-96",children:e.jsxs(u,{children:[e.jsxs(h,{className:"flex items-center gap-2",children:[e.jsx(p,{className:"flex-content",size:"2rem",icon:`flag ${s.iso2}`}),e.jsx("span",{className:"flex-1 truncate",children:s.name}),e.jsxs("span",{className:"text-sm text-muted flex-content",children:[s.iso2,"/",s.iso3]})]}),e.jsx("div",{children:s.capital})]})})})]})})})},args:{}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const {
      filteredList,
      isSearching,
      onSearch,
      query
    } = useFilteredList(Countries.list, (country, query) => matchString(country.name, query));
    return <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header className="gap-2 p-2">
              <div className="container">
                <Search autoFocus value={query} onSearch={onSearch} searching={isSearching} />
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
                      <Icon className="flex-content" size="2rem" icon={\`flag \${item.iso2}\`} />
                      <span className="flex-1 truncate">{item.name}</span>
                      <span className="text-sm text-muted flex-content">
                        {item.iso2}/{item.iso3}
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
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["FilteredList"],R=Object.freeze(Object.defineProperty({__proto__:null,FilteredList:r,__namedExportsOrder:y,default:L},Symbol.toStringTag,{value:"Module"}));export{R as F,r as a};
