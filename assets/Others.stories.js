import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{C as n,Tt as r,gt as i}from"./iframe-Du5FrOxJ.js";import{t as a,w as o}from"./src6.js";var s,c,l,u,d,f,p,m=e((()=>{n(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={component:o,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Input.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`max-w-[32rem] w-screen`,children:(0,s.jsx)(e,{})})]},u={render:e=>(0,s.jsx)(o,{...e,decorateStart:(0,s.jsx)(r,{icon:`mdi mdi-alien`,className:`p-1 bg-tint-50 text-lg`}),decorateEnd:(0,s.jsx)(i,{children:`Go!`})}),args:{label:`Text input`,placeholder:`Text input...`,onChange:c(),onEnterPressed:c()}},d={render:e=>(0,s.jsx)(o,{...e}),args:{label:`Text input`,placeholder:`Text input...`,invalid:!0,error:`Error message`,onChange:c(),onEnterPressed:c()}},f={render:e=>(0,s.jsx)(o,{...e}),args:{label:`Text input`,placeholder:`Text input...`,disabled:!0,onChange:c(),onEnterPressed:c()}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} decorateStart={<Icon icon="mdi mdi-alien" className="p-1 bg-tint-50 text-lg" />} decorateEnd={<Button>Go!</Button>} />;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} />;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    invalid: true,
    error: "Error message",
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} />;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    disabled: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...f.parameters?.docs?.source}}},p=[`WithDecorators`,`InvalidInput`,`DisabledInput`]}));m();export{f as DisabledInput,d as InvalidInput,u as WithDecorators,p as __namedExportsOrder,l as default,m as t};