import{j as r,aR as m}from"./iframe-DvMcemLF.js";import{I as d}from"./Tooltip.js";import"./index2.js";import{k as i}from"./DualList.js";import{m as t}from"./isEqual.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,_={component:i,title:"@form/Select",parameters:{layout:"centered",jest:["form/tests/Select.test.tsx"]},decorators:[n=>r.jsx("div",{className:"max-w-[32rem] w-screen",children:r.jsx(n,{})})]},l={render:n=>r.jsx(i,{...n,options:m.list,labelProperty:"name",valueProperty:"iso3",renderer:e=>r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx(d,{icon:`flag ${e.iso2}`}),r.jsx("span",{className:"flex-1",children:e.name}),r.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]})}),args:{label:"Select",placeholder:"Select...",groupProperty:"alpha",allowClear:!0,onEnterPressed:a(),onChange:a()}},o={render:n=>r.jsx(i,{...n,multiple:!0,options:m.list,labelProperty:"name",valueProperty:"iso3",renderer:e=>r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx(d,{icon:`flag ${e.iso2}`}),r.jsx("span",{className:"flex-1",children:e.name}),r.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]})}),args:{label:"Select",placeholder:"Select...",groupProperty:"alpha",allowClear:!0,onEnterPressed:a(),onChange:a()}},p={render:n=>r.jsx(i,{...n,options:m.list,labelProperty:"name",valueProperty:"iso3",renderer:e=>r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx(d,{icon:`flag ${e.iso2}`}),r.jsx("span",{className:"flex-1",children:e.name}),r.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]}),matcher:(e,s)=>t(e.name,s)||t(e.phone,s)}),args:{label:"Combo",placeholder:"Combo...",groupProperty:"alpha",allowClear:!0,searchable:!0,onEnterPressed:a(),onChange:a()}},c={render:n=>r.jsx(i,{...n,labelProperty:"name",valueProperty:"iso3",renderer:e=>r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx(d,{icon:`flag ${e.iso2}`}),r.jsxs("span",{className:"flex-1",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:" group-data-[select-display]:hidden text-xs text-muted",children:e.fullname})]}),r.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]}),matcher:(e,s)=>t(e.name,s)||t(e.phone,s),onQuery:e=>new Promise(s=>{setTimeout(()=>{s(m.list.filter(u=>t(u.name,e)||t(u.fullname,e)))},1e3)})}),args:{label:"Combo",placeholder:"Search for country...",groupProperty:"alpha",allowClear:!0,searchable:!0,onEnterPressed:a(),onChange:a()}};var x,h,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args} options={Countries.list} labelProperty="name" valueProperty="iso3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">{opt.name}</span>
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
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} multiple options={Countries.list} labelProperty="name" valueProperty="iso3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">{opt.name}</span>
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
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,P,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} options={Countries.list} labelProperty="name" valueProperty="iso3" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">{opt.name}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} matcher={(opt: Country, query) => matchString(opt.name, query) || matchString(opt.phone, query)} />;
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
}`,...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,v,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    return <Select {...args} labelProperty="name" valueProperty="iso3" renderer={(opt: Country) => <div className="flex gap-2 items-center">
            <Icon icon={\`flag \${opt.iso2}\`} />
            <span className="flex-1">
              <div>{opt.name}</div>
              <div className=" group-data-[select-display]:hidden text-xs text-muted">
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
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const w=["_Select","Multiple","Searchable","Remote"],R=Object.freeze(Object.defineProperty({__proto__:null,Multiple:o,Remote:c,Searchable:p,_Select:l,__namedExportsOrder:w,default:_},Symbol.toStringTag,{value:"Module"}));export{o as M,c as R,R as S,l as _,p as a};
