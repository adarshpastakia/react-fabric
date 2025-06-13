import{j as e}from"./iframe-CVyMRGSP.js";import{I as h}from"./Tooltip-D82JqM4y.js";import{B as I}from"./Button-DAqx1TyP.js";import"./index-D3XXfjI1.js";import{I as a}from"./DualList-DCn26jaf.js";import"./HeadFoot-gLuWE0O1.js";import"./BasePanel-9ehr4Bks.js";import"./Google-DJpRc7c-.js";import"./createClass-eMtQ1dFD.js";import"./zh-CN-FLa9i-pX.js";import"./endOfDay-CyHfuoBH.js";import"./index-BJLwolNv.js";import"./getDay-Cl8EDKbu.js";import"./useDebounce-Bpvok1Zz.js";import"./Content-BDvcrf-C.js";import"./useResizeObserver-CzVPFDEQ.js";import"./ErrorBoundary-1v1ksgaq.js";import"./Global-BZCLuW51.js";import"./ToggleButtonGroup-DJgg-62g.js";import"./cloneElement-Ch-Lp1Ig.js";import"./Collapsable-DPnPevm1.js";import"./toArray-DwQWYzJ7.js";import"./Avatar-mNhz2Qn6.js";import"./floating-ui.react-DNZDxEHZ.js";import"./index-iLbIT3XK.js";import"./DatePanel-CZSFYBtt.js";import"./ButtonGroup-g9nz5iah.js";import"./EmptyContent-qLuxBqO2.js";import"./_isEqual-C0Ek68wL.js";import"./_dedupe-Z-qx8K2g.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,J={component:a,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/Input.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},n={render:r=>e.jsx(a,{...r,decorateStart:e.jsx(h,{icon:"mdi mdi-alien",className:"p-1 bg-tint-50 text-lg"}),decorateEnd:e.jsx(I,{children:"Go!"})}),args:{label:"Text input",placeholder:"Text input...",onChange:t(),onEnterPressed:t()}},o={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",invalid:!0,error:"Error message",onChange:t(),onEnterPressed:t()}},s={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",disabled:!0,onChange:t(),onEnterPressed:t()}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
