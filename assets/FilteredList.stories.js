import{n as e,r as t}from"./rolldown-runtime.js";import{d as n}from"./EmptyContent.js";import{o as r,r as i}from"./esm.js";import{H as a,U as o}from"./esm2.js";import{f as s,t as c}from"./src.js";import{t as l}from"./jsx-runtime.js";import{Et as u,K as d,Lt as f,Pt as p,Yt as m,t as h,zt as g}from"./src2.js";import{d as _,n as v,t as y}from"./src5.js";var b=t({FilteredList:()=>C,__namedExportsOrder:()=>w,default:()=>S}),x,S,C,w;function T(){return(T=e((()=>{h(),y(),c(),a(),i(),x=l(),S={title:`@data/useFilteredList`,parameters:{layout:`fullscreen`,controls:{exclude:`data`}}},C={render:e=>{let{filteredList:t,isSearching:i,onSearch:a,query:c}=_(r.list,(e,t)=>o(e.name.common,t));return(0,x.jsx)(`div`,{className:`min-h-150`,children:(0,x.jsx)(u,{children:(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{className:`gap-2 p-2 bg-dimmed`,children:(0,x.jsxs)(`div`,{className:`container`,children:[(0,x.jsx)(s,{autoFocus:!0,searchOnChange:!0,value:c,onSearch:a,searching:i}),(0,x.jsxs)(`div`,{className:`py-2`,children:[`Showing `,t.length,`/`,r.list.length,` records`]})]})}),(0,x.jsx)(v,{items:t,hideScroller:!0,fullWidth:!0,children:({item:e})=>(0,x.jsx)(`div`,{className:`p-2 container max-w-96`,children:(0,x.jsx)(d,{children:(0,x.jsxs)(g,{children:[(0,x.jsxs)(m,{className:`flex items-center gap-2`,children:[(0,x.jsx)(n,{className:`flex-content`,size:`2rem`,icon:`iconify-color circle-flags--${e.iconCode}`}),(0,x.jsx)(`span`,{className:`flex-1 truncate`,children:e.name.common}),(0,x.jsxs)(`span`,{className:`text-sm text-muted flex-content`,children:[e.cca2,`/`,e.cca3]})]}),(0,x.jsx)(`div`,{children:e.capital})]})})})})]})})})},args:{}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`FilteredList`]})))()}export{b as n,T as r,C as t};