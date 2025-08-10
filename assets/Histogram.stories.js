import{j as a}from"./iframe-BTaJxP5y.js";import{f as t}from"./index4.js";import{H as n}from"./List.js";import"./index2.js";const i={component:n,title:"@data/Histogram",parameters:{controls:{exclude:/^(children|as)/}},decorators:[e=>a.jsx("div",{className:"w-96 p-4 max-h-96 overflow-auto",children:a.jsx(e,{})})]},c=new Array(18).fill(0).map(()=>({id:t.number.hex(2048),label:t.animal.cat(),count:t.number.int({min:0,max:999})})),r={render:e=>a.jsx(n,{...e,items:c}),args:{}};var o,s,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <Histogram {...args} items={items} />;
  },
  args: {}
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const l=["_Histogram"],x=Object.freeze(Object.defineProperty({__proto__:null,_Histogram:r,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{x as H,r as _};
