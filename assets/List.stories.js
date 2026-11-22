import{n as e,r as t}from"./rolldown-runtime.js";import{d as n}from"./EmptyContent.js";import{i as r,o as i,t as a}from"./src.js";import{t as o}from"./jsx-runtime.js";import{t as s}from"./src2.js";import{i as c,t as l}from"./src6.js";import{n as u,t as d}from"./matchString.js";var f=t({Multiple:()=>_,Remote:()=>v,_List:()=>g,__namedExportsOrder:()=>y,default:()=>h}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),a(),d(),l(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:i,subcomponents:{DualList:r},title:`@form/List`,parameters:{layout:`centered`,jest:[`form/tests/List.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,p.jsx)(e,{})})]},g={render:e=>(0,p.jsx)(i,{...e,options:c.list,labelProperty:`name.common`,valueProperty:`cca3`,infoProperty:`name.official`,renderer:e=>(0,p.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,p.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,p.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,p.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`List`,placeholder:`List...`,groupProperty:`alpha`,allowClear:!0,searchable:!1,onEnterPressed:m(),onChange:m()}},_={render:e=>(0,p.jsx)(i,{...e,multiple:!0,options:c.list,labelProperty:`name.common`,valueProperty:`cca3`,renderer:e=>(0,p.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,p.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,p.jsx)(`span`,{className:`flex-1`,children:e.name.common}),(0,p.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`List`,placeholder:`List...`,groupProperty:`alpha`,allowClear:!0,onEnterPressed:m(),onChange:m()}},v={render:e=>(0,p.jsx)(i,{...e,labelProperty:`name.common`,valueProperty:`cca2`,renderer:e=>(0,p.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,p.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,p.jsxs)(`span`,{className:`flex-1`,children:[(0,p.jsx)(`div`,{children:e.name.common}),(0,p.jsx)(`div`,{className:` group-data-List-display:hidden text-xs text-muted`,children:e.name.official})]}),(0,p.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]}),matcher:(e,t)=>u(e.name.common,t)||u(e.phone,t),onQuery:e=>new Promise(t=>{setTimeout(()=>{t(c.list.filter(t=>u(t.name.common,e)||u(t.name.official,e)))},1e3)})}),args:{label:`Combo`,placeholder:`Search for country...`,groupProperty:`alpha`,allowClear:!0,searchable:!0,onEnterPressed:m(),onChange:m()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <List {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca3" infoProperty="name.official" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} multiple options={Countries.list} labelProperty="name.common" valueProperty="cca3" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">
              <div>{opt.name.common}</div>
              <div className=" group-data-List-display:hidden text-xs text-muted">{opt.name.official}</div>
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
}`,...v.parameters?.docs?.source}}},y=[`_List`,`Multiple`,`Remote`]})))()}export{b as a,g as i,_ as n,v as r,f as t};