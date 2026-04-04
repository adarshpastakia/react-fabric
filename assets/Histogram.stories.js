import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{l as a,t as o}from"./src4.js";var s=t({_Histogram:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{i(),o(),c=n(),l={component:a,title:`@data/Histogram`,parameters:{controls:{exclude:/^(children|as)/}},decorators:[e=>(0,c.jsx)(`div`,{className:`w-96 p-4 max-h-96 overflow-auto`,children:(0,c.jsx)(e,{})})]},u=Array(18).fill(0).map(()=>({id:r.number.hex(2048),label:r.animal.cat(),count:r.number.int({min:0,max:999})})),d={render:e=>(0,c.jsx)(a,{...e,items:u}),args:{}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Histogram {...args} items={items} />;
  },
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`_Histogram`]}));p();export{d as _Histogram,f as __namedExportsOrder,l as default,p as n,s as t};