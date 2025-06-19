import{j as e}from"./iframe-DcfUrZ2L.js";import{I as h}from"./Tooltip-Dv6V4Byx.js";import{B as I}from"./Button-7pM1lgGA.js";import"./index-Bl9sirez.js";import{I as a}from"./DualList-DiU7ycQJ.js";import"./HeadFoot-BdfsRs4J.js";import"./BasePanel-CZJafQ4J.js";import"./Google-DSP-6Nrb.js";import"./createClass-D99gLwRj.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./getDay-B6LYz-AP.js";import"./useDebounce-oR1dm03r.js";import"./Content-Cwxt_19N.js";import"./useResizeObserver-L_IFJsPD.js";import"./ErrorBoundary-CbzvQFF-.js";import"./Global-CmkQSaMP.js";import"./ToggleButtonGroup-CVNQsquy.js";import"./cloneElement-B4wm8_Ia.js";import"./Collapsable-iyaaLFnt.js";import"./toArray-BwHKXXJA.js";import"./Avatar-5xRpn6_B.js";import"./floating-ui.react-DaYvvi0U.js";import"./index-Iz_3oi3Q.js";import"./DatePanel-2KNianNU.js";import"./ButtonGroup-87GcGUAF.js";import"./EmptyContent-6xVjGj3J.js";import"./_isEqual-PxFgnGsO.js";import"./_dedupe-BYXvNVJ3.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,J={component:a,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/Input.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},n={render:r=>e.jsx(a,{...r,decorateStart:e.jsx(h,{icon:"mdi mdi-alien",className:"p-1 bg-tint-50 text-lg"}),decorateEnd:e.jsx(I,{children:"Go!"})}),args:{label:"Text input",placeholder:"Text input...",onChange:t(),onEnterPressed:t()}},o={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",invalid:!0,error:"Error message",onChange:t(),onEnterPressed:t()}},s={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",disabled:!0,onChange:t(),onEnterPressed:t()}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Q=["WithDecorators","InvalidInput","DisabledInput"];export{s as DisabledInput,o as InvalidInput,n as WithDecorators,Q as __namedExportsOrder,J as default};
