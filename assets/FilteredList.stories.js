import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{L as r,X as i,lt as a}from"./ResizeObserver.es.js";import{H as o,I as s,R as c,d as l,it as u,p as d,t as f}from"./iframe-B-Wcw5ev.js";import{i as p,t as m}from"./esm.js";import{n as h,o as g,t as _}from"./src4.js";var v=t({FilteredList:()=>x,__namedExportsOrder:()=>S,default:()=>b}),y,b,x,S,C=e((()=>{f(),m(),r(),_(),y=n(),b={title:`@data/useFilteredList`,parameters:{layout:`fullscreen`,controls:{exclude:`data`}}},x={render:e=>{let{filteredList:t,isSearching:n,onSearch:r,query:f}=g(a.list,(e,t)=>i(e.name.common,t));return(0,y.jsx)(`div`,{className:`min-h-[600px]`,children:(0,y.jsx)(l,{children:(0,y.jsxs)(d,{children:[(0,y.jsx)(c,{className:`gap-2 p-2`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(p,{autoFocus:!0,searchOnChange:!0,value:f,onSearch:r,searching:n}),(0,y.jsxs)(`div`,{className:`py-2`,children:[`Showing `,t.length,`/`,a.list.length,` records`]})]})}),(0,y.jsx)(h,{items:t,hideScroller:!0,fullWidth:!0,children:({item:e})=>(0,y.jsx)(`div`,{className:`p-2 container max-w-96`,children:(0,y.jsxs)(s,{children:[(0,y.jsxs)(o,{className:`flex items-center gap-2`,children:[(0,y.jsx)(u,{className:`flex-content`,size:`2rem`,icon:`iconify-color circle-flags--${e.iconCode}`}),(0,y.jsx)(`span`,{className:`flex-1 truncate`,children:e.name.common}),(0,y.jsxs)(`span`,{className:`text-sm text-muted flex-content`,children:[e.cca2,`/`,e.cca3]})]}),(0,y.jsx)(`div`,{children:e.capital})]})})})]})})})},args:{}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`FilteredList`]}));C();export{x as FilteredList,S as __namedExportsOrder,b as default,C as n,v as t};