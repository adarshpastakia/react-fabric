import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{n as r,r as i,t as a}from"./dist28.js";import{P as o,a as s,c,o as l,rt as u,s as d,t as f}from"./src3.js";var p=t({Clamped:()=>y,_Text:()=>v,__namedExportsOrder:()=>b,default:()=>h}),m,h,g,_,v,y,b,x=e((()=>{a(),f(),m=n(),h={component:s,subcomponents:{Title:o,Abbr:c,Mark:l,Anchor:u,Copy:d},title:`@core/Typography`,parameters:{controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Text.test.tsx`]},decorators:[e=>(0,m.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,m.jsx)(e,{})})]},g=i.lorem.sentences(5)+`

`+r.lorem.sentences(5),_=i.lorem.sentences(10)+`

`+r.lorem.sentences(10),v={render:e=>(0,m.jsx)(s,{...e,children:g}),args:{className:`mixed-lang`}},y={render:e=>(0,m.jsx)(s,{...e,children:_}),args:{clamp:5,className:`mixed-lang`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Text {...args}>{para}</Text>;
  },
  args: {
    className: "mixed-lang"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Text {...args}>{paras}</Text>;
  },
  args: {
    clamp: 5,
    className: "mixed-lang"
  }
}`,...y.parameters?.docs?.source}}},b=[`_Text`,`Clamped`]}));x();export{y as Clamped,v as _Text,b as __namedExportsOrder,h as default,x as n,p as t};