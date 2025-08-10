import{j as a,Y as c,h as m}from"./iframe-BTaJxP5y.js";import{f as s,m as b}from"./index4.js";const i={component:c,title:"@core/Typography",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Abbr.test.tsx"]},decorators:[r=>a.jsx("div",{className:"max-w-2xl p-4",children:a.jsx(r,{})})]},l=s.lorem.sentences(10)+`

`+b.lorem.sentences(10),p=s.helpers.arrayElements(l.replaceAll(`
`,"").split(" ").filter(Boolean),9).map(r=>[r,s.animal.cat(),s.color.rgb()]),e={render:r=>a.jsx(m,{children:a.jsx(c,{...r,children:l})}),args:{abbr:p}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <Text>
        <Abbr {...args}>{paras}</Abbr>
      </Text>;
  },
  args: {
    abbr: abbrs
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const u=["_Abbr"];export{e as _Abbr,u as __namedExportsOrder,i as default};
