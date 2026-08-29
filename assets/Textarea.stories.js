import{n as e}from"./rolldown-runtime.js";import{M as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Textarea.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(t,{...e}),args:{label:`Textarea input`,placeholder:`Textarea input...`,rows:5,allowClear:!0,onChange:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Textarea {...args} />;
  },
  args: {
    label: "Textarea input",
    placeholder: "Textarea input...",
    rows: 5,
    allowClear: true,
    onChange: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Textarea`]})))()}l();export{s as _Textarea,c as __namedExportsOrder,o as default};