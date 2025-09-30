import{j as e,r as c,aR as T}from"./iframe-Ctw5u0Cj.js";import"./index2.js";import{D as p}from"./DropdownTool.js";import{M as u,a as n}from"./Menu.js";import{T as j}from"./List.js";import{g as x}from"./dedupe.js";import"./Tooltip.js";import"./Dropdown.js";import"./cloneElement.js";import"./nodeCheck.js";import"./Button.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./memoize-one.esm.js";import"./Copy.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./useDebounce.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./DateDisplay.js";import"./Global.js";import"./getByPath.js";import"./Divider.js";import"./ColorPicker.js";import"./index3.js";import"./ErrorIcon.js";import"./Input.js";import"./InputWrapper.js";import"./eventHandlers.js";import"./floating-ui.react.js";import"./debounce.js";import"./HeadFoot.js";import"./Section.js";import"./ErrorBoundary.js";const se={component:j,title:"@data/Tree Panel",parameters:{controls:{exclude:/^(children|as)/}},decorators:[i=>e.jsx("div",{className:"w-96 h-96 outline bg-base overflow-hidden",style:{display:"grid",gridTemplate:'"head" auto "content" 1fr / 1fr'},children:e.jsx(i,{})})]},h=Object.entries(x(T.list,"continent")).map(([i,d])=>({id:i,label:i,leaf:!1,children:Object.entries(x(d,"alpha")).map(([a,r])=>({id:`${i}-${a}`,label:a,leaf:!1,data:{label:a,type:"group"},children:r.map(t=>({id:t.iso2,icon:`flag ${t.iso2}`,label:`${t.name}`,badge:t.iso3,leaf:!0,data:t}))}))})),s={render:i=>{const d=c.useMemo(()=>h.map(({children:r,...t})=>t),[]),a=c.useCallback(r=>new Promise(t=>{setTimeout(()=>{var m;const o=h.find(l=>l.id===r.split("-")[0]);return o&&r.includes("-")?t((m=o.children.find(l=>l.id===r))==null?void 0:m.children):t(o==null?void 0:o.children.map(({children:l,...g})=>g))},1e3)}),[]);return e.jsx(j,{...i,items:d,onLoad:a,selected:"BH",defaultExpanded:["Asia","Asia-B"],makeLabel:r=>r.type=="group"?e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 overflow-hidden",children:[e.jsx("div",{className:"flex-initial truncate",children:r.label}),e.jsx(p,{groupHover:!0,children:e.jsxs(u,{children:[e.jsx(n,{label:"Show in map"}),e.jsx(n,{label:"Major cities"}),e.jsx(n,{label:"History..."})]})})]}),e.jsx("div",{className:"text-sm text-muted",children:"Something extra"})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 overflow-hidden",children:[e.jsx("div",{className:"flex-initial truncate",children:r.name}),e.jsx(p,{groupHover:!0,children:e.jsxs(u,{children:[e.jsx(n,{label:"Show in map"}),e.jsx(n,{label:"Major cities"}),e.jsx(n,{label:"History..."})]})})]}),e.jsx("div",{className:"text-sm text-muted",children:r.fullname})]})})},args:{selectable:!0,searchable:!0,filterPlaceholder:"Search country..."}};var f,v,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <TreePanel {...args} items={initialTree as AnyObject} onLoad={loadTreeNodes} selected="BH" defaultExpanded={["Asia", "Asia-B"]} makeLabel={data => {
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
    filterPlaceholder: "Search country..."
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const de=["_TreePanel"];export{s as _TreePanel,de as __namedExportsOrder,se as default};
