import{j as s,a0 as c,h as p}from"./iframe-DC4r-n7i.js";import{f as a,m as l}from"./index4.js";const k={component:c,title:"@core/Typography",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Typpography.test.tsx"]},decorators:[r=>s.jsx("div",{className:"max-w-2xl p-4",children:s.jsx(r,{})})]},m=a.lorem.sentences(10)+`

`+l.lorem.sentences(10),d=a.helpers.arrayElements(m.replaceAll(`
`,"").split(" ").filter(Boolean),9).map(r=>[r,a.color.rgb()]),e={render:r=>s.jsx(p,{children:s.jsx(c,{...r,children:m})}),args:{mark:d}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <Text>
        <Mark {...args}>{paras}</Mark>
      </Text>;
  },
  args: {
    mark: marks
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["_Mark"];export{e as _Mark,g as __namedExportsOrder,k as default};
