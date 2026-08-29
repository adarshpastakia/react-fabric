import{n as e}from"./rolldown-runtime.js";import{d as t,r as n}from"./EmptyContent.js";import{B as r,E as i,t as a}from"./src.js";import{t as o}from"./src2.js";import{t as s}from"./jsx-runtime.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{o(),a(),c=s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={component:r,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Input.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,c.jsx)(e,{})})]},d={render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i,{label:`Multiple input`,children:[(0,c.jsx)(t,{icon:`icon-[mdi--alien]`,className:`p-1 px-2 bg-tint-50 text-lg`}),(0,c.jsx)(r,{...e,width:`12rem`}),(0,c.jsx)(r,{...e}),(0,c.jsx)(n,{children:`Go!`})]}),(0,c.jsxs)(i,{label:`Multiple vertical input`,vertical:!0,children:[(0,c.jsx)(r,{...e}),(0,c.jsx)(r,{...e})]})]}),args:{label:`Text input`,placeholder:`Text input...`,onChange:l(),onEnterPressed:l()}},f={render:e=>(0,c.jsx)(r,{...e,decorateStart:(0,c.jsx)(t,{icon:`icon-[mdi--alien]`,className:`p-1 bg-tint-50 text-lg`}),decorateEnd:(0,c.jsx)(n,{children:`Go!`})}),args:{label:`Text input`,placeholder:`Text input...`,onChange:l(),onEnterPressed:l()}},p={render:e=>(0,c.jsx)(r,{...e}),args:{label:`Text input`,placeholder:`Text input...`,invalid:!0,error:`Error message`,onChange:l(),onEnterPressed:l()}},m={render:e=>(0,c.jsx)(r,{...e}),args:{label:`Text input`,placeholder:`Text input...`,disabled:!0,onChange:l(),onEnterPressed:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <>
        <Field label="Multiple input">
          <Icon icon="icon-[mdi--alien]" className="p-1 px-2 bg-tint-50 text-lg" />
          <Input {...args} width="12rem" />
          <Input {...args} />
          <Button>Go!</Button>
        </Field>
        <Field label="Multiple vertical input" vertical>
          <Input {...args} />
          <Input {...args} />
        </Field>
      </>;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} decorateStart={<Icon icon="icon-[mdi--alien]" className="p-1 bg-tint-50 text-lg" />} decorateEnd={<Button>Go!</Button>} />;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`MultiField`,`WithDecorators`,`InvalidInput`,`DisabledInput`]})))()}g();export{m as DisabledInput,p as InvalidInput,d as MultiField,f as WithDecorators,h as __namedExportsOrder,u as default};