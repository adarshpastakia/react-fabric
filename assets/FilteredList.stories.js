import{n as e,r as t}from"./rolldown-runtime.js";import{d as n}from"./EmptyContent.js";import{o as r,r as i}from"./esm.js";import{U as a}from"./es.js";import{f as o,t as s}from"./src.js";import{Et as c,K as l,Lt as u,Pt as d,Yt as f,t as p,zt as m}from"./src2.js";import{t as h}from"./jsx-runtime.js";import{d as g,n as _,t as v}from"./src5.js";var y=t({FilteredList:()=>S,__namedExportsOrder:()=>C,default:()=>x}),b,x,S,C;function w(){return(w=e((()=>{p(),v(),s(),i(),b=h(),x={title:`@data/useFilteredList`,parameters:{layout:`fullscreen`,controls:{exclude:`data`}}},S={render:e=>{let{filteredList:t,isSearching:i,onSearch:s,query:p}=g(r.list,(e,t)=>a(e.name.common,t));return(0,b.jsx)(`div`,{className:`min-h-150`,children:(0,b.jsx)(c,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(u,{className:`gap-2 p-2 bg-dimmed`,children:(0,b.jsxs)(`div`,{className:`container`,children:[(0,b.jsx)(o,{autoFocus:!0,searchOnChange:!0,value:p,onSearch:s,searching:i}),(0,b.jsxs)(`div`,{className:`py-2`,children:[`Showing `,t.length,`/`,r.list.length,` records`]})]})}),(0,b.jsx)(_,{items:t,hideScroller:!0,fullWidth:!0,children:({item:e})=>(0,b.jsx)(`div`,{className:`p-2 container max-w-96`,children:(0,b.jsx)(l,{children:(0,b.jsxs)(m,{children:[(0,b.jsxs)(f,{className:`flex items-center gap-2`,children:[(0,b.jsx)(n,{className:`flex-content`,size:`2rem`,icon:`iconify-color circle-flags--${e.iconCode}`}),(0,b.jsx)(`span`,{className:`flex-1 truncate`,children:e.name.common}),(0,b.jsxs)(`span`,{className:`text-sm text-muted flex-content`,children:[e.cca2,`/`,e.cca3]})]}),(0,b.jsx)(`div`,{children:e.capital})]})})})})]})})})},args:{}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      filteredList,
      isSearching,
      onSearch,
      query
    } = useFilteredList(Countries.list, (country, query) => matchString(country.name.common, query));
    return <div className="min-h-150">
        <Viewport>
          <Layout>
            <Header className="gap-2 p-2 bg-dimmed">
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
                    <Content>
                      <Title className="flex items-center gap-2">
                        <Icon className="flex-content" size="2rem" icon={\`iconify-color circle-flags--\${item.iconCode}\`} />
                        <span className="flex-1 truncate">{item.name.common}</span>
                        <span className="text-sm text-muted flex-content">
                          {item.cca2}/{item.cca3}
                        </span>
                      </Title>
                      <div>{item.capital}</div>
                    </Content>
                  </Card>
                </div>}
            </VirtualList>
          </Layout>
        </Viewport>
      </div>;
  },
  args: {}
}`,...S.parameters?.docs?.source}}},C=[`FilteredList`]})))()}export{y as n,w as r,S as t};