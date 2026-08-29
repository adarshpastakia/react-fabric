import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{S as n,j as r,t as i,w as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{o as s,t as c}from"./src5.js";import{i as l,t as u}from"./src6.js";function d(e,t,n){return e.reduce((e,r)=>{let i=r[t]??n;return e[i]||(e[i]=[]),e[i].push(r),e},{})}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),c(),u(),f=t(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,title:`@data/Tree Panel`,parameters:{controls:{exclude:/^(children|as)/}},decorators:[e=>(0,p.jsx)(`div`,{className:`w-96 h-96 outline bg-default overflow-hidden`,style:{display:`grid`,gridTemplate:`"head" auto "content" 1fr / 1fr`},children:(0,p.jsx)(e,{})})]},g=Object.entries(d(l.list,`region`)).map(([e,t])=>({id:e,label:e,leaf:!1,children:Object.entries(d(t,`cca2`)).map(([t,n])=>({id:`${e}-${t}`,label:t,leaf:!1,data:{label:t,type:`group`},children:n.map(e=>({id:e.cca2,icon:`iconify-color circle-flags--${e.iconCode}`,label:`${e.name}`,badge:e.cca3,leaf:!0,data:e}))}))})),_={render:e=>{let t=(0,f.useMemo)(()=>g.map(({children:e,...t})=>t),[]),i=(0,f.useCallback)(e=>new Promise(t=>{setTimeout(()=>{let n=g.find(t=>t.id===e.split(`-`)[0]);return n&&e.includes(`-`)?t(n.children.find(t=>t.id===e)?.children):t(n?.children.map(({children:e,...t})=>t))},1e3)}),[]);return(0,p.jsx)(s,{...e,items:t,onLoad:i,defaultExpanded:[`Asia`,`Asia-B`],makeLabel:e=>e.type==`group`?(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[(0,p.jsx)(`div`,{className:`flex-initial truncate`,children:e.label}),(0,p.jsx)(r,{groupHover:!0,children:(0,p.jsxs)(n,{children:[(0,p.jsx)(a,{label:`Show in map`}),(0,p.jsx)(a,{label:`Major cities`}),(0,p.jsx)(a,{label:`History...`})]})})]}),(0,p.jsx)(`div`,{className:`text-sm text-muted`,children:`Something extra`})]}):(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[(0,p.jsx)(`div`,{className:`flex-initial truncate`,children:e.name}),(0,p.jsx)(r,{groupHover:!0,children:(0,p.jsxs)(n,{children:[(0,p.jsx)(a,{label:`Show in map`}),(0,p.jsx)(a,{label:`Major cities`}),(0,p.jsx)(a,{label:`History...`})]})})]}),(0,p.jsx)(`div`,{className:`text-sm text-muted`,children:e.fullname})]})})},args:{selectable:!0,searchable:!0,checkable:!0,onSelect:m(),filterPlaceholder:`Search country...`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`_TreePanel`]})))()}y();export{_ as _TreePanel,v as __namedExportsOrder,h as default};