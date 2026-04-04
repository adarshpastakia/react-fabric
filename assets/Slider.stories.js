import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{a as r,m as i,t as a}from"./src6.js";var o=t({_Slider:()=>u,__namedExportsOrder:()=>d,default:()=>l}),s,c,l,u,d,f=e((()=>{a(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={component:r,subcomponents:{RangeSlider:i},title:`@form/Slider`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`form/tests/Slider.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`max-w-[32rem] w-screen`,children:(0,s.jsx)(e,{})})]},u={render:e=>(0,s.jsx)(r,{...e}),args:{label:`Slider input`,min:-99,max:99,value:0,showValue:!0,showLabels:!0,onChange:c(),onEnterPressed:c()}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`_Slider`]}));f();export{u as _Slider,d as __namedExportsOrder,l as default,f as n,o as t};