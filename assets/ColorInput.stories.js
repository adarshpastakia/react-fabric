import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{h as n,t as r}from"./src6.js";var i,a,o,s,c,l=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/ColorInput.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-[6rem] w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(n,{...e}),args:{label:`Color input`,placeholder:`Color input...`,allowClear:!0,showPicker:!0,onChange:a(),onEnterPressed:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`_ColorInput`]}));l();export{s as _ColorInput,c as __namedExportsOrder,o as default,l as t};