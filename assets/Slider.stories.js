import{n as e}from"./rolldown-runtime.js";import{I as t,t as n,u as r}from"./src.js";import{t as i}from"./jsx-runtime.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),a=i(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={component:r,subcomponents:{RangeSlider:t},title:`@form/Inputs`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`form/tests/Slider.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,a.jsx)(e,{})})]},c={render:e=>(0,a.jsx)(r,{...e}),args:{label:`Slider input`,min:-99,max:99,value:0,showValue:!0,showLabels:!0,onChange:o(),onEnterPressed:o()}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Slider {...args} />;
  },
  args: {
    label: "Slider input",
    min: -99,
    max: 99,
    value: 0,
    showValue: true,
    showLabels: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...c.parameters?.docs?.source}}},l=[`_Slider`]})))()}u();export{c as _Slider,l as __namedExportsOrder,s as default};