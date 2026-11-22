import{n as e,r as t}from"./rolldown-runtime.js";import{d as n}from"./EmptyContent.js";import{A as r,t as i}from"./src.js";import{t as a}from"./jsx-runtime.js";import{t as o}from"./src2.js";import{i as s,t as c}from"./src6.js";import{n as l,t as u}from"./matchString.js";var d=t({Multiple:()=>g,Remote:()=>v,Searchable:()=>_,_Select:()=>h,__namedExportsOrder:()=>y,default:()=>m}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),i(),u(),c(),f=a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={component:r,title:`@form/Select`,parameters:{layout:`centered`,jest:[`form/tests/Select.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,f.jsx)(e,{})})]},h={render:e=>(0,f.jsx)(r,{...e,options:s.list,labelProperty:`name.common`,valueProperty:`cca2`,infoProperty:`name.official`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(n,{icon:`icon-[circle-flags--${e.iconCode}]`}),(0,f.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`Select`,placeholder:`Select...`,groupProperty:`alpha`,allowClear:!0,onEnterPressed:p(),onChange:p()}},g={render:e=>(0,f.jsx)(r,{...e,multiple:!0,options:s.list,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,f.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`Select`,placeholder:`Select...`,groupProperty:`alpha`,allowClear:!0,onEnterPressed:p(),onChange:p()}},_={render:e=>(0,f.jsx)(r,{...e,options:s.list,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,f.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]}),matcher:(e,t)=>l(e.name.common,t)||l(e.phone,t)}),args:{label:`Combo`,placeholder:`Combo...`,groupProperty:`alpha`,allowClear:!0,searchable:!0,onEnterPressed:p(),onChange:p()}},v={render:e=>(0,f.jsx)(r,{...e,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,f.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,f.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,f.jsxs)(`span`,{className:`flex-1`,children:[(0,f.jsx)(`div`,{children:e.name.common}),(0,f.jsx)(`div`,{className:` group-data-select-display:hidden text-xs text-muted`,children:e.name.official})]}),(0,f.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]}),matcher:(e,t)=>l(e.name.common,t)||l(e.phone,t),onQuery:e=>new Promise(t=>{setTimeout(()=>{t(s.list.filter(t=>l(t.name.common,e)||l(t.name.official,e)))},1e3)})}),args:{label:`Combo`,placeholder:`Search for country...`,groupProperty:`alpha`,allowClear:!0,searchable:!0,onEnterPressed:p(),onChange:p()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca2" infoProperty="name.official" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`icon-[circle-flags--\${opt.iconCode}]\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
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
    return <Select {...args} multiple options={Countries.list} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">
              <div>{opt.name.common}</div>
              <div className=" group-data-select-display:hidden text-xs text-muted">{opt.name.official}</div>
            </span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
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
}`,...v.parameters?.docs?.source}}},y=[`_Select`,`Multiple`,`Searchable`,`Remote`]})))()}export{h as a,d as i,v as n,b as o,_ as r,g as t};