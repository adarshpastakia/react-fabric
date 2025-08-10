import{j as e,aR as c}from"./iframe-DZ_tjZ0H.js";import{I as m}from"./Tooltip.js";import"./index2.js";import{j as v,L as i}from"./DualList.js";import{m as p}from"./isEqual.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,L={component:i,subcomponents:{DualList:v},title:"@form/List",parameters:{layout:"centered",jest:["form/tests/List.test.tsx"]},decorators:[n=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(n,{})})]},a={render:n=>e.jsx(i,{...n,options:c.list,labelProperty:"name",valueProperty:"iso3",renderer:r=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(m,{icon:`flag ${r.iso2}`}),e.jsx("span",{className:"flex-1",children:r.name}),e.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:r.phone})]})}),args:{label:"List",placeholder:"List...",groupProperty:"alpha",allowClear:!0,onEnterPressed:s(),onChange:s()}},t={render:n=>e.jsx(i,{...n,multiple:!0,options:c.list,labelProperty:"name",valueProperty:"iso3",renderer:r=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(m,{icon:`flag ${r.iso2}`}),e.jsx("span",{className:"flex-1",children:r.name}),e.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:r.phone})]})}),args:{label:"List",placeholder:"List...",groupProperty:"alpha",allowClear:!0,onEnterPressed:s(),onChange:s()}},o={render:n=>e.jsx(i,{...n,labelProperty:"name",valueProperty:"iso3",renderer:r=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(m,{icon:`flag ${r.iso2}`}),e.jsxs("span",{className:"flex-1",children:[e.jsx("div",{children:r.name}),e.jsx("div",{className:" group-data-[List-display]:hidden text-xs text-muted",children:r.fullname})]}),e.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:r.phone})]}),matcher:(r,l)=>p(r.name,l)||p(r.phone,l),onQuery:r=>new Promise(l=>{setTimeout(()=>{l(c.list.filter(d=>p(d.name,r)||p(d.fullname,r)))},1e3)})}),args:{label:"Combo",placeholder:"Search for country...",groupProperty:"alpha",allowClear:!0,searchable:!0,onEnterPressed:s(),onChange:s()}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <List {...args} options={Countries.list} labelProperty="name" valueProperty="iso3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">{opt.name}</span>
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
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} multiple options={Countries.list} labelProperty="name" valueProperty="iso3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">{opt.name}</span>
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
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,j,P;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <List {...args} labelProperty="name" valueProperty="iso3" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">
              <div>{opt.name}</div>
              <div className=" group-data-[List-display]:hidden text-xs text-muted">
                {opt.fullname}
              </div>
            </span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} matcher={(opt: Country, query) => matchString(opt.name, query) || matchString(opt.phone, query)} onQuery={query => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(Countries.list.filter(ctr => matchString(ctr.name, query) || matchString(ctr.fullname, query)));
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
}`,...(P=(j=o.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const N=["_List","Multiple","Remote"],O=Object.freeze(Object.defineProperty({__proto__:null,Multiple:t,Remote:o,_List:a,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{O as L,t as M,o as R,a as _};
