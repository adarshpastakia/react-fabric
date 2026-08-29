import{n as e}from"./rolldown-runtime.js";import{t,v as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{t(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Password.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(n,{...e}),args:{label:`Password input`,placeholder:`Password input...`,allowClear:!0,showToggle:!0,strength:.45,onChange:a(),onEnterPressed:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Password {...args} />;
  },
  args: {
    label: "Password input",
    placeholder: "Password input...",
    allowClear: true,
    showToggle: true,
    strength: 0.45,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Password`]})))()}l();export{s as _Password,c as __namedExportsOrder,o as default};