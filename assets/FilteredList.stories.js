import{n as e,r as t}from"./chunk.js";import{R as n,Z as r,ut as i}from"./ResizeObserver.es.js";import{t as a}from"./jsx-runtime.js";import{C as o,I as s,M as c,P as l,Tt as u,at as d,st as f}from"./iframe-BBjx9o_X.js";import{i as p,t as m}from"./esm.js";import{n as h,o as g,t as _}from"./src4.js";var v=t({FilteredList:()=>x,__namedExportsOrder:()=>S,default:()=>b}),y,b,x,S,C=e((()=>{o(),m(),n(),_(),y=a(),b={title:`@data/useFilteredList`,parameters:{layout:`fullscreen`,controls:{exclude:`data`}}},x={render:e=>{let{filteredList:t,isSearching:n,onSearch:a,query:o}=g(i.list,(e,t)=>r(e.name.common,t));return(0,y.jsx)(`div`,{className:`min-h-[600px]`,children:(0,y.jsx)(l,{children:(0,y.jsxs)(s,{children:[(0,y.jsx)(f,{className:`gap-2 p-2`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(p,{autoFocus:!0,searchOnChange:!0,value:o,onSearch:a,searching:n}),(0,y.jsxs)(`div`,{className:`py-2`,children:[`Showing `,t.length,`/`,i.list.length,` records`]})]})}),(0,y.jsx)(h,{items:t,hideScroller:!0,fullWidth:!0,children:({item:e})=>(0,y.jsx)(`div`,{className:`p-2 container max-w-96`,children:(0,y.jsxs)(d,{children:[(0,y.jsxs)(c,{className:`flex items-center gap-2`,children:[(0,y.jsx)(u,{className:`flex-content`,size:`2rem`,icon:`iconify-color circle-flags--${e.iconCode}`}),(0,y.jsx)(`span`,{className:`flex-1 truncate`,children:e.name.common}),(0,y.jsxs)(`span`,{className:`text-sm text-muted flex-content`,children:[e.cca2,`/`,e.cca3]})]}),(0,y.jsx)(`div`,{children:e.capital})]})})})]})})})},args:{}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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