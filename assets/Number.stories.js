import{n as e}from"./rolldown-runtime.js";import{R as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Number.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(t,{...e}),args:{label:`Number input`,placeholder:`Number input...`,allowClear:!0,min:-99,max:99,onChange:a(),onEnterPressed:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Number {...args} />;
  },
  args: {
    label: "Number input",
    placeholder: "Number input...",
    allowClear: true,
    min: -99,
    max: 99,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Number`]})))()}l();export{s as _Number,c as __namedExportsOrder,o as default};