import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{p as n,t as r}from"./src6.js";var i,a,o,s,c,l=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Switch.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-[32rem] w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-2`,children:[(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{...e,color:`warning`}),(0,i.jsx)(n,{...e,color:`success`,defaultColor:`danger`})]}),args:{label:`Switch input`,onChange:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-2">
        <Switch {...args} />
        <Switch {...args} color="warning" />
        <Switch {...args} color="success" defaultColor="danger" />
      </div>;
  },
  args: {
    label: "Switch input",
    onChange: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Switch`]}));l();export{s as _Switch,c as __namedExportsOrder,o as default,l as t};