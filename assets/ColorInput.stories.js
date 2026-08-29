import{n as e}from"./rolldown-runtime.js";import{W as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/ColorInput.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-24 w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(t,{...e}),args:{label:`Color input`,placeholder:`Color input...`,allowClear:!0,showPicker:!0,onChange:a(),onEnterPressed:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ColorInput {...args} />;
  },
  args: {
    label: "Color input",
    placeholder: "Color input...",
    allowClear: true,
    showPicker: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_ColorInput`]})))()}l();export{s as _ColorInput,c as __namedExportsOrder,o as default};