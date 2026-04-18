import{n as e,r as t}from"./chunk.js";import{R as n,Z as r,ut as i}from"./ResizeObserver.es.js";import{t as a}from"./jsx-runtime.js";import{C as o,Tt as s}from"./iframe-BBjx9o_X.js";import{n as c,r as l,t as u}from"./src6.js";var d=t({Multiple:()=>g,Remote:()=>_,_List:()=>h,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v,y=e((()=>{o(),n(),u(),f=a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={component:l,subcomponents:{DualList:c},title:`@form/List`,parameters:{layout:`centered`,jest:[`form/tests/List.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,f.jsx)(e,{})})]},h={render:e=>(0,f.jsx)(l,{...e,options:i.list,labelProperty:`name.common`,valueProperty:`cca3`,infoProperty:`name.official`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(s,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,f.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`List`,placeholder:`List...`,groupProperty:`alpha`,allowClear:!0,searchable:!1,onEnterPressed:p(),onChange:p()}},g={render:e=>(0,f.jsx)(l,{...e,multiple:!0,options:i.list,labelProperty:`name.common`,valueProperty:`cca3`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(s,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,f.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`List`,placeholder:`List...`,groupProperty:`alpha`,allowClear:!0,onEnterPressed:p(),onChange:p()}},_={render:e=>(0,f.jsx)(l,{...e,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(s,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,f.jsxs)(`span`,{className:`flex-1`,children:[(0,f.jsx)(`div`,{children:e.name.common}),(0,f.jsx)(`div`,{className:` group-data-List-display:hidden text-xs text-muted`,children:e.name.official})]}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]}),matcher:(e,t)=>r(e.name.common,t)||r(e.phone,t),onQuery:e=>new Promise(t=>{setTimeout(()=>{t(i.list.filter(t=>r(t.name.common,e)||r(t.name.official,e)))},1e3)})}),args:{label:`Combo`,placeholder:`Search for country...`,groupProperty:`alpha`,allowClear:!0,searchable:!0,onEnterPressed:p(),onChange:p()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <List {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca3" infoProperty="name.official" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} />;
  },
  args: {
    label: "List",
    placeholder: "List...",
    groupProperty: "alpha",
    allowClear: true,
    searchable: false,
    onEnterPressed: fn(),
    onChange: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} multiple options={Countries.list} labelProperty="name.common" valueProperty="cca3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} />;
  },
  args: {
    label: "List",
    placeholder: "List...",
    groupProperty: "alpha",
    allowClear: true,
    onEnterPressed: fn(),
    onChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">
              <div>{opt.name.common}</div>
              <div className=" group-data-List-display:hidden text-xs text-muted">
                {opt.name.official}
              </div>
            </span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} matcher={(opt: Country, query) => matchString(opt.name.common, query) || matchString(opt.phone, query)} onQuery={query => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(Countries.list.filter(ctr => matchString(ctr.name.common, query) || matchString(ctr.name.official, query)));
        }, 1000);
      });
    }} />;
  },
  args: {
    label: "Combo",
    placeholder: "Search for country...",
    groupProperty: "alpha",
    allowClear: true,
    searchable: true,
    onEnterPressed: fn(),
    onChange: fn()
  }
}`,..._.parameters?.docs?.source}}},v=[`_List`,`Multiple`,`Remote`]}));y();export{g as Multiple,_ as Remote,h as _List,v as __namedExportsOrder,m as default,y as n,d as t};