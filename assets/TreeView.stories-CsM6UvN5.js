import{j as e,r as c,aQ as T}from"./iframe-BcXNitKG.js";import"./index-DUA9IMpG.js";import{D as p}from"./DropdownTool-C8jg9dyY.js";import{M as u,a as i}from"./Menu-CIViNpVY.js";import{T as j}from"./List-5a0r18Ni.js";import{g as x}from"./_dedupe-Dul_0PfE.js";import"./Tooltip-J_gHpl9C.js";import"./Dropdown-DUHKUE_z.js";import"./cloneElement-Bgycha4-.js";import"./Button-7R_E-GE9.js";import"./ButtonGroup-CZyLy_kH.js";import"./EmptyContent-CnA5ADIa.js";import"./_isEqual-JedAdon-.js";import"./Input-IeT5RECO.js";import"./InputWrapper-DVhr945a.js";import"./ColorPicker-0pYYboV3.js";import"./Google-DOYfq3v8.js";import"./createClass-B8xyeRfs.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./index-CqCs8NGq.js";import"./eventHandlers-JUcml5Fv.js";import"./floating-ui.react-CCZcFCqr.js";import"./useDebounce-rX8HuXnO.js";import"./Text-LNzV1gTO.js";import"./usePropToggle-Ck2VfQ2Q.js";import"./types-DXUe1Zpb.js";import"./DateDisplay-CGmEnYvR.js";import"./Global-HPy1X0OU.js";import"./_getByPath-ibQb353G.js";import"./Divider-DB8bkHxO.js";import"./_debounce-BHO_GiD4.js";import"./HeadFoot-DLpVmsEq.js";import"./Section-BAtoQgEv.js";import"./ErrorBoundary-C8J7aorp.js";const ie={component:j,title:"@data/Tree Panel",parameters:{controls:{exclude:/^(children|as)/}},decorators:[t=>e.jsx("div",{className:"w-96 h-96 outline bg-base overflow-hidden",style:{display:"grid",gridTemplate:'"head" auto "content" 1fr / 1fr'},children:e.jsx(t,{})})]},h=Object.entries(x(T.list,"continent")).map(([t,d])=>({id:t,label:t,leaf:!1,children:Object.entries(x(d,"alpha")).map(([a,r])=>({id:`${t}-${a}`,label:a,leaf:!1,data:{label:a,type:"group"},children:r.map(n=>({id:n.iso2,icon:`flag ${n.iso2}`,label:`${n.name}`,badge:n.iso3,leaf:!0,data:n}))}))})),l={render:t=>{const d=c.useMemo(()=>h.map(({children:r,...n})=>n),[]),a=c.useCallback(r=>new Promise(n=>{setTimeout(()=>{var m;const o=h.find(s=>s.id===r.split("-")[0]);return o&&r.includes("-")?n((m=o.children.find(s=>s.id===r))==null?void 0:m.children):n(o==null?void 0:o.children.map(({children:s,...g})=>g))},1e3)}),[]);return e.jsx(j,{...t,items:d,onLoad:a,selected:"BH",defaultExpanded:["Asia","Asia-B"],renderer:r=>r.type=="group"?e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 overflow-hidden",children:[e.jsx("div",{className:"flex-initial truncate",children:r.label}),e.jsx(p,{groupHover:!0,children:e.jsxs(u,{children:[e.jsx(i,{label:"Show in map"}),e.jsx(i,{label:"Major cities"}),e.jsx(i,{label:"History..."})]})})]}),e.jsx("div",{className:"text-sm text-muted",children:"Something extra"})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 overflow-hidden",children:[e.jsx("div",{className:"flex-initial truncate",children:r.name}),e.jsx(p,{groupHover:!0,children:e.jsxs(u,{children:[e.jsx(i,{label:"Show in map"}),e.jsx(i,{label:"Major cities"}),e.jsx(i,{label:"History..."})]})})]}),e.jsx("div",{className:"text-sm text-muted",children:r.fullname})]})})},args:{selectable:!0,searchable:!0,filterPlaceholder:"Search country..."}};var f,v,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <TreePanel {...args} items={initialTree as AnyObject} onLoad={loadTreeNodes} selected="BH" defaultExpanded={["Asia", "Asia-B"]} renderer={data => {
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
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const ae=["_TreePanel"];export{l as _TreePanel,ae as __namedExportsOrder,ie as default};
