import{j as e}from"./iframe-BcXNitKG.js";import{I as h}from"./Tooltip-J_gHpl9C.js";import{B as I}from"./Button-7R_E-GE9.js";import"./index-DUA9IMpG.js";import{I as a}from"./DualList-rWC3PaES.js";import"./HeadFoot-DLpVmsEq.js";import"./BasePanel-DkxgOkoR.js";import"./Google-DOYfq3v8.js";import"./createClass-B8xyeRfs.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./getDay-G_5ar-z-.js";import"./useDebounce-rX8HuXnO.js";import"./Content-BJKCk6Ue.js";import"./useResizeObserver-Cq2Z_pjG.js";import"./ErrorBoundary-C8J7aorp.js";import"./Global-HPy1X0OU.js";import"./ToggleButtonGroup-BKgoITDu.js";import"./cloneElement-Bgycha4-.js";import"./Collapsable-GlVs_tGp.js";import"./toArray-DlTuwiZT.js";import"./Avatar-CTJ9ye12.js";import"./floating-ui.react-CCZcFCqr.js";import"./index-CqCs8NGq.js";import"./DatePanel-DygvepWU.js";import"./ButtonGroup-CZyLy_kH.js";import"./EmptyContent-CnA5ADIa.js";import"./_isEqual-JedAdon-.js";import"./_dedupe-Dul_0PfE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,J={component:a,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/Input.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},n={render:r=>e.jsx(a,{...r,decorateStart:e.jsx(h,{icon:"mdi mdi-alien",className:"p-1 bg-tint-50 text-lg"}),decorateEnd:e.jsx(I,{children:"Go!"})}),args:{label:"Text input",placeholder:"Text input...",onChange:t(),onEnterPressed:t()}},o={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",invalid:!0,error:"Error message",onChange:t(),onEnterPressed:t()}},s={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",disabled:!0,onChange:t(),onEnterPressed:t()}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
