import{j as e,aO as m}from"./iframe-DpfJK_wQ.js";import{I as p}from"./Tooltip.js";import"./index.js";import{j as C,L as i}from"./DualList.js";import{m as c}from"./isEqual.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,v={component:i,subcomponents:{DualList:C},title:"@form/List",parameters:{layout:"centered",jest:["form/tests/List.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},o={render:r=>e.jsx(i,{...r,options:m.list,labelProperty:"name.common",valueProperty:"cca3",infoProperty:"name",renderer:n=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(p,{icon:`iconify-color circle-flags--${n.iconCode}`}),e.jsx("span",{className:"flex-1",children:n.name.common}),e.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:n.phone})]})}),args:{label:"List",placeholder:"List...",groupProperty:"alpha",allowClear:!0,searchable:!1,onEnterPressed:a(),onChange:a()}},s={render:r=>e.jsx(i,{...r,multiple:!0,options:m.list,labelProperty:"name.common",valueProperty:"cca3",renderer:n=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(p,{icon:`iconify-color circle-flags--${n.iconCode}`}),e.jsx("span",{className:"flex-1",children:n.name.common}),e.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:n.phone})]})}),args:{label:"List",placeholder:"List...",groupProperty:"alpha",allowClear:!0,onEnterPressed:a(),onChange:a()}},t={render:r=>e.jsx(i,{...r,labelProperty:"name.common",valueProperty:"cca2",renderer:n=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(p,{icon:`iconify-color circle-flags--${n.iconCode}`}),e.jsxs("span",{className:"flex-1",children:[e.jsx("div",{children:n.name.common}),e.jsx("div",{className:" group-data-[List-display]:hidden text-xs text-muted",children:n.name.official})]}),e.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:n.phone})]}),matcher:(n,l)=>c(n.name.common,l)||c(n.phone,l),onQuery:n=>new Promise(l=>{setTimeout(()=>{l(m.list.filter(d=>c(d.name.common,n)||c(d.name.official,n)))},1e3)})}),args:{label:"Combo",placeholder:"Search for country...",groupProperty:"alpha",allowClear:!0,searchable:!0,onEnterPressed:a(),onChange:a()}};var u,x,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <List {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca3" infoProperty="name" renderer={opt => <div className="flex gap-2 items-center">
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
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,P,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} labelProperty="name.common" valueProperty="cca2" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1">
              <div>{opt.name.common}</div>
              <div className=" group-data-[List-display]:hidden text-xs text-muted">
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
}`,...(j=(P=t.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const L=["_List","Multiple","Remote"],O=Object.freeze(Object.defineProperty({__proto__:null,Multiple:s,Remote:t,_List:o,__namedExportsOrder:L,default:v},Symbol.toStringTag,{value:"Module"}));export{O as L,s as M,t as R,o as _};
