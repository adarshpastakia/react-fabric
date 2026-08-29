import{n as e}from"./rolldown-runtime.js";import{B as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Input.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(t,{...e}),args:{label:`Text input`,placeholder:`Text input...`,allowClear:!0,onChange:a(),onEnterPressed:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} />;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    allowClear: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Input`]})))()}l();export{s as _Input,c as __namedExportsOrder,o as default};