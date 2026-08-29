import{n as e,r as t}from"./rolldown-runtime.js";import{d as n}from"./EmptyContent.js";import{i as r,t as i}from"./src.js";import{t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{i as s,t as c}from"./src6.js";var l=t({_DualList:()=>f,__namedExportsOrder:()=>p,default:()=>d}),u,d,f,p;function m(){return(m=e((()=>{a(),i(),c(),u=o(),d={component:r,title:`@form/List`,parameters:{layout:`centered`,jest:[`form/tests/DualList.test.tsx`]},decorators:[e=>(0,u.jsx)(`div`,{className:`max-w-xl w-screen`,children:(0,u.jsx)(e,{})})]},f={render:e=>(0,u.jsx)(r,{...e,options:s.list,labelProperty:`name.common`,valueProperty:`cca3`,renderer:e=>(0,u.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,u.jsx)(n,{icon:`iconify-color circle-flags--${e.iconCode}`}),(0,u.jsx)(`span`,{className:`flex-1 truncate`,children:e.name.common}),(0,u.jsx)(`span`,{className:`rounded-full text-xs bg-tint-500/10 px-1 py-px`,children:e.phone})]})}),args:{label:`DualList`,groupProperty:`alpha`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <DualList {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1 truncate">{opt.name.common}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">{opt.phone}</span>
          </div>} />;
  },
  args: {
    label: "DualList",
    groupProperty: "alpha"
  }
}`,...f.parameters?.docs?.source}}},p=[`_DualList`]})))()}export{f as n,m as r,l as t};