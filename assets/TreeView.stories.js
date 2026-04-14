import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{R as r,ct as i,ut as a}from"./ResizeObserver.es.js";import{t as o}from"./jsx-runtime.js";import{$ as s,C as c,X as l,Z as u}from"./iframe-Du5FrOxJ.js";import{i as d,t as f}from"./src4.js";var p,m,h,g,_,v,y;t((()=>{c(),r(),p=e(n()),f(),m=o(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:d,title:`@data/Tree Panel`,parameters:{controls:{exclude:/^(children|as)/}},decorators:[e=>(0,m.jsx)(`div`,{className:`w-96 h-96 outline bg-default overflow-hidden`,style:{display:`grid`,gridTemplate:`"head" auto "content" 1fr / 1fr`},children:(0,m.jsx)(e,{})})]},_=Object.entries(i(a.list,`region`)).map(([e,t])=>({id:e,label:e,leaf:!1,children:Object.entries(i(t,`cca2`)).map(([t,n])=>({id:`${e}-${t}`,label:t,leaf:!1,data:{label:t,type:`group`},children:n.map(e=>({id:e.cca2,icon:`iconify-color circle-flags--${e.iconCode}`,label:`${e.name}`,badge:e.cca3,leaf:!0,data:e}))}))})),v={render:e=>{let t=(0,p.useMemo)(()=>_.map(({children:e,...t})=>t),[]),n=(0,p.useCallback)(e=>new Promise(t=>{setTimeout(()=>{let n=_.find(t=>t.id===e.split(`-`)[0]);return n&&e.includes(`-`)?t(n.children.find(t=>t.id===e)?.children):t(n?.children.map(({children:e,...t})=>t))},1e3)}),[]);return(0,m.jsx)(d,{...e,items:t,onLoad:n,defaultExpanded:[`Asia`,`Asia-B`],makeLabel:e=>e.type==`group`?(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[(0,m.jsx)(`div`,{className:`flex-initial truncate`,children:e.label}),(0,m.jsx)(s,{groupHover:!0,children:(0,m.jsxs)(l,{children:[(0,m.jsx)(u,{label:`Show in map`}),(0,m.jsx)(u,{label:`Major cities`}),(0,m.jsx)(u,{label:`History...`})]})})]}),(0,m.jsx)(`div`,{className:`text-sm text-muted`,children:`Something extra`})]}):(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[(0,m.jsx)(`div`,{className:`flex-initial truncate`,children:e.name}),(0,m.jsx)(s,{groupHover:!0,children:(0,m.jsxs)(l,{children:[(0,m.jsx)(u,{label:`Show in map`}),(0,m.jsx)(u,{label:`Major cities`}),(0,m.jsx)(u,{label:`History...`})]})})]}),(0,m.jsx)(`div`,{className:`text-sm text-muted`,children:e.fullname})]})})},args:{selectable:!0,searchable:!0,checkable:!0,onSelect:h(),filterPlaceholder:`Search country...`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const initialTree = useMemo(() => treeItems.map(({
      children,
      ...item
    }) => item), []);
    const loadTreeNodes = useCallback((id: string) => {
      return new Promise<any>(resolve => {
        setTimeout(() => {
          const node = treeItems.find(i => i.id === id.split("-")[0]);
          if (node && id.includes("-")) {
            return resolve(node.children.find(c => c.id === id)?.children);
          }
          return resolve(node?.children.map(({
            children,
            ...item
          }) => item));
        }, 1000);
      });
    }, []);
    return <TreePanel {...args} items={initialTree as AnyObject} onLoad={loadTreeNodes} defaultExpanded={["Asia", "Asia-B"]} makeLabel={data => {
      if (data.type == "group") {
        return <div>
                <div className="flex items-center gap-1 overflow-hidden">
                  <div className="flex-initial truncate">{data.label}</div>
                  <DropdownTool groupHover>
                    <Menu>
                      <MenuItem label="Show in map" />
                      <MenuItem label="Major cities" />
                      <MenuItem label="History..." />
                    </Menu>
                  </DropdownTool>
                </div>
                <div className="text-sm text-muted">Something extra</div>
              </div>;
      }
      return <div>
              <div className="flex items-center gap-1 overflow-hidden">
                <div className="flex-initial truncate">{data.name}</div>
                <DropdownTool groupHover>
                  <Menu>
                    <MenuItem label="Show in map" />
                    <MenuItem label="Major cities" />
                    <MenuItem label="History..." />
                  </Menu>
                </DropdownTool>
              </div>
              <div className="text-sm text-muted">{data.fullname}</div>
            </div>;
    }} />;
  },
  args: {
    selectable: true,
    searchable: true,
    checkable: true,
    onSelect: fn(),
    filterPlaceholder: "Search country..."
  }
}`,...v.parameters?.docs?.source}}},y=[`_TreePanel`]}))();export{v as _TreePanel,y as __namedExportsOrder,g as default};