import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{L as r,X as i,lt as a}from"./ResizeObserver.es.js";import{it as o,t as s}from"./iframe-B-Wcw5ev.js";import{t as c,v as l}from"./src6.js";var u=t({Multiple:()=>h,Remote:()=>_,Searchable:()=>g,_Select:()=>m,__namedExportsOrder:()=>v,default:()=>p}),d,f,p,m,h,g,_,v,y=e((()=>{s(),r(),c(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={component:l,title:`@form/Select`,parameters:{layout:`centered`,jest:[`form/tests/Select.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,d.jsx)(e,{})})]},m={render:e=>(0,d.jsx)(l,{...e,options:a.list,labelProperty:`name.common`,valueProperty:`cca2`,infoProperty:`name.official`,renderer:e=>(0,d.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,d.jsx)(o,{icon:`icon-[circle-flags--${e.iconCode}]`}),(0,d.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,d.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`Select`,placeholder:`Select...`,groupProperty:`alpha`,allowClear:!0,onEnterPressed:f(),onChange:f()}},h={render:e=>(0,d.jsx)(l,{...e,multiple:!0,options:a.list,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,d.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,d.jsx)(o,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,d.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,d.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`Select`,placeholder:`Select...`,groupProperty:`alpha`,allowClear:!0,onEnterPressed:f(),onChange:f()}},g={render:e=>(0,d.jsx)(l,{...e,options:a.list,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,d.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,d.jsx)(o,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,d.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,d.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]}),matcher:(e,t)=>i(e.name.common,t)||i(e.phone,t)}),args:{label:`Combo`,placeholder:`Combo...`,groupProperty:`alpha`,allowClear:!0,searchable:!0,onEnterPressed:f(),onChange:f()}},_={render:e=>(0,d.jsx)(l,{...e,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,d.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,d.jsx)(o,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,d.jsxs)(`span`,{className:`flex-1`,children:[(0,d.jsx)(`div`,{children:e.name.common}),(0,d.jsx)(`div`,{className:` group-data-select-display:hidden text-xs text-muted`,children:e.name.official})]}),(0,d.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]}),matcher:(e,t)=>i(e.name.common,t)||i(e.phone,t),onQuery:e=>new Promise(t=>{setTimeout(()=>{t(a.list.filter(t=>i(t.name.common,e)||i(t.name.official,e)))},1e3)})}),args:{label:`Combo`,placeholder:`Search for country...`,groupProperty:`alpha`,allowClear:!0,searchable:!0,onEnterPressed:f(),onChange:f()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca2" infoProperty="name.official" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`icon-[circle-flags--\${opt.iconCode}]\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} />;
  },
  args: {
    label: "Select",
    placeholder: "Select...",
    groupProperty: "alpha",
    allowClear: true,
    onEnterPressed: fn(),
    onChange: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} multiple options={Countries.list} labelProperty="name.common" valueProperty="cca2" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} />;
  },
  args: {
    label: "Select",
    placeholder: "Select...",
    groupProperty: "alpha",
    allowClear: true,
    onEnterPressed: fn(),
    onChange: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} matcher={(opt: Country, query) => matchString(opt.name.common, query) || matchString(opt.phone, query)} />;
  },
  args: {
    label: "Combo",
    placeholder: "Combo...",
    groupProperty: "alpha",
    allowClear: true,
    searchable: true,
    onEnterPressed: fn(),
    onChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">
              <div>{opt.name.common}</div>
              <div className=" group-data-select-display:hidden text-xs text-muted">
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
}`,..._.parameters?.docs?.source}}},v=[`_Select`,`Multiple`,`Searchable`,`Remote`]}));y();export{h as Multiple,_ as Remote,g as Searchable,m as _Select,v as __namedExportsOrder,p as default,y as n,u as t};