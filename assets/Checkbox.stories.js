import{n as e}from"./rolldown-runtime.js";import{S as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Checkbox.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsxs)(`div`,{className:`flex gap-2`,children:[(0,i.jsx)(t,{...e}),(0,i.jsx)(t,{...e,icon:`icon-[mdi--bell]`}),(0,i.jsx)(t,{...e,icon:`icon-[mdi--eye-outline]`,iconChecked:`icon-[mdi--eye]`})]}),args:{label:`Checkbox input`,onChange:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-2">
        <Checkbox {...args} />
        <Checkbox {...args} icon="icon-[mdi--bell]" />
        <Checkbox {...args} icon="icon-[mdi--eye-outline]" iconChecked="icon-[mdi--eye]" />
      </div>;
  },
  args: {
    label: "Checkbox input",
    onChange: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Checkbox`]})))()}l();export{s as _Checkbox,c as __namedExportsOrder,o as default};