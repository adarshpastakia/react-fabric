import{n as e}from"./rolldown-runtime.js";import{P as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Switch.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-2`,children:[(0,i.jsx)(t,{...e}),(0,i.jsx)(t,{...e,color:`warning`}),(0,i.jsx)(t,{...e,color:`success`,defaultColor:`danger`})]}),args:{label:`Switch input`,onChange:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`_Switch`]})))()}l();export{s as _Switch,c as __namedExportsOrder,o as default};