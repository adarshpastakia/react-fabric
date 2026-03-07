import{j as a,a2 as i,a1 as g,a3 as u,a0 as T,a4 as j,h as n}from"./iframe-BmpICDQJ.js";import{f as d,m as x}from"./index4.js";const _={component:n,subcomponents:{Title:j,Abbr:T,Mark:u,Anchor:g,Copy:i},title:"@core/Typography",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Text.test.tsx"]},decorators:[e=>a.jsx("div",{className:"max-w-2xl p-4",children:a.jsx(e,{})})]},h=d.lorem.sentences(5)+`

`+x.lorem.sentences(5),b=d.lorem.sentences(10)+`

`+x.lorem.sentences(10),r={render:e=>a.jsx(n,{...e,children:h}),args:{className:"mixed-lang"}},s={render:e=>a.jsx(n,{...e,children:b}),args:{clamp:5,className:"mixed-lang"}};var t,o,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <Text {...args}>{para}</Text>;
  },
  args: {
    className: "mixed-lang"
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Text {...args}>{paras}</Text>;
  },
  args: {
    clamp: 5,
    className: "mixed-lang"
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const f=["_Text","Clamped"],S=Object.freeze(Object.defineProperty({__proto__:null,Clamped:s,_Text:r,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{s as C,S as T,r as _};
