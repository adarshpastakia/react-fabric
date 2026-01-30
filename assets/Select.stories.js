import{j as n,aO as i}from"./iframe-DpfJK_wQ.js";import{I as d}from"./Tooltip.js";import"./index.js";import{k as m}from"./DualList.js";import{m as s}from"./isEqual.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,_={component:m,title:"@form/Select",parameters:{layout:"centered",jest:["form/tests/Select.test.tsx"]},decorators:[r=>n.jsx("div",{className:"max-w-[32rem] w-screen",children:n.jsx(r,{})})]},t={render:r=>n.jsx(m,{...r,options:i.list,labelProperty:"name.common",valueProperty:"cca2",infoProperty:"name.official",renderer:e=>n.jsxs("div",{className:"flex gap-2 items-center",children:[n.jsx(d,{icon:`icon-[circle-flags--${e.iconCode}]`}),n.jsx("span",{className:"flex-1",children:e.name.common}),n.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]})}),args:{label:"Select",placeholder:"Select...",groupProperty:"alpha",allowClear:!0,onEnterPressed:a(),onChange:a()}},l={render:r=>n.jsx(m,{...r,multiple:!0,options:i.list,labelProperty:"name.common",valueProperty:"cca2",renderer:e=>n.jsxs("div",{className:"flex gap-2 items-center",children:[n.jsx(d,{icon:`iconify-color circle-flags--${e.iconCode}`}),n.jsx("span",{className:"flex-1",children:e.name.common}),n.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]})}),args:{label:"Select",placeholder:"Select...",groupProperty:"alpha",allowClear:!0,onEnterPressed:a(),onChange:a()}},c={render:r=>n.jsx(m,{...r,options:i.list,labelProperty:"name.common",valueProperty:"cca2",renderer:e=>n.jsxs("div",{className:"flex gap-2 items-center",children:[n.jsx(d,{icon:`iconify-color circle-flags--${e.iconCode}`}),n.jsx("span",{className:"flex-1",children:e.name.common}),n.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]}),matcher:(e,o)=>s(e.name.common,o)||s(e.phone,o)}),args:{label:"Combo",placeholder:"Combo...",groupProperty:"alpha",allowClear:!0,searchable:!0,onEnterPressed:a(),onChange:a()}},p={render:r=>n.jsx(m,{...r,labelProperty:"name.common",valueProperty:"cca2",renderer:e=>n.jsxs("div",{className:"flex gap-2 items-center",children:[n.jsx(d,{icon:`iconify-color circle-flags--${e.iconCode}`}),n.jsxs("span",{className:"flex-1",children:[n.jsx("div",{children:e.name.common}),n.jsx("div",{className:" group-data-select-display:hidden text-xs text-muted",children:e.name.official})]}),n.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]}),matcher:(e,o)=>s(e.name.common,o)||s(e.phone,o),onQuery:e=>new Promise(o=>{setTimeout(()=>{o(i.list.filter(u=>s(u.name.common,e)||s(u.name.official,e)))},1e3)})}),args:{label:"Combo",placeholder:"Search for country...",groupProperty:"alpha",allowClear:!0,searchable:!0,onEnterPressed:a(),onChange:a()}};var x,f,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,S,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var j,v,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const w=["_Select","Multiple","Searchable","Remote"],T=Object.freeze(Object.defineProperty({__proto__:null,Multiple:l,Remote:p,Searchable:c,_Select:t,__namedExportsOrder:w,default:_},Symbol.toStringTag,{value:"Module"}));export{l as M,p as R,T as S,t as _,c as a};
