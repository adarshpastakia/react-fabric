import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{m as n,t as r}from"./src6.js";var i,a,o,s,c,l=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,title:`@form/Slider`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`form/tests/Range.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-[32rem] w-screen`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(n,{...e}),args:{label:`Range input`,min:-99,max:99,value:[-9,9],showValue:!0,showLabels:!0,onChange:a(),onEnterPressed:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <RangeSlider {...args} />;
  },
  args: {
    label: "Range input",
    min: -99,
    max: 99,
    value: [-9, 9],
    showValue: true,
    showLabels: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`_Range`]}));l();export{s as _Range,c as __namedExportsOrder,o as default,l as t};