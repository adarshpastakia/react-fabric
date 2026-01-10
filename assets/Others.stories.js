import{j as e}from"./iframe-qDaPDssc.js";import{I as h}from"./Tooltip.js";import{B as I}from"./Button.js";import"./index.js";import{I as a}from"./DualList.js";import"./HeadFoot.js";import"./BasePanel.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./useDebounce.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./index2.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./dedupe.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,H={component:a,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/Input.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},n={render:r=>e.jsx(a,{...r,decorateStart:e.jsx(h,{icon:"mdi mdi-alien",className:"p-1 bg-tint-50 text-lg"}),decorateEnd:e.jsx(I,{children:"Go!"})}),args:{label:"Text input",placeholder:"Text input...",onChange:t(),onEnterPressed:t()}},o={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",invalid:!0,error:"Error message",onChange:t(),onEnterPressed:t()}},s={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",disabled:!0,onChange:t(),onEnterPressed:t()}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} decorateStart={<Icon icon="mdi mdi-alien" className="p-1 bg-tint-50 text-lg" />} decorateEnd={<Button>Go!</Button>} />;
  },
  args: {
    label: "Text input",
    placeholder: "Text input...",
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const J=["WithDecorators","InvalidInput","DisabledInput"];export{s as DisabledInput,o as InvalidInput,n as WithDecorators,J as __namedExportsOrder,H as default};
