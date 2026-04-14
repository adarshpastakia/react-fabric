import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{n,r,t as i}from"./dist28.js";import{a,o,t as s}from"./src3.js";var c,l,u,d,f,p,m=e((()=>{i(),s(),c=t(),l={component:o,title:`@core/Typography`,parameters:{controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Mark.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,c.jsx)(e,{})})]},u=r.lorem.sentences(10)+`

`+n.lorem.sentences(10),d=r.helpers.arrayElements(u.replaceAll(`
`,``).split(` `).filter(Boolean),9).map(e=>[e,r.color.rgb()]),f={render:e=>(0,c.jsx)(a,{children:(0,c.jsx)(o,{...e,children:u})}),args:{mark:d}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Text>
        <Mark {...args}>{paras}</Mark>
      </Text>;
  },
  args: {
    mark: marks
  }
}`,...f.parameters?.docs?.source}}},p=[`_Mark`]}));m();export{f as _Mark,p as __namedExportsOrder,l as default,m as t};