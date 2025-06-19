import{j as e}from"./iframe-DL5PLccW.js";import{I as h}from"./Tooltip-BPKa3gaw.js";import{B as I}from"./Button-B4MR9BdT.js";import"./index-DPKHNOa8.js";import{I as a}from"./DualList-BWd_coxF.js";import"./HeadFoot-BOKBTLfn.js";import"./BasePanel-CXQucVik.js";import"./Google-B5-g4RDV.js";import"./createClass-DjEsl4fx.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./getDay-wNg2b-WG.js";import"./useDebounce-DUBqCfh2.js";import"./Content-BWk5dK7X.js";import"./useResizeObserver-Bn-Pa1XM.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./Global-Dhvrkiym.js";import"./ToggleButtonGroup-D0cpnvS6.js";import"./cloneElement-_d6a3Gjs.js";import"./Collapsable-DQ_FQmYr.js";import"./toArray-CuTPFbH_.js";import"./Avatar-2qoU-_h2.js";import"./floating-ui.react-CT9AAP4P.js";import"./index-HqHJXvHv.js";import"./DatePanel-DQBUsAH4.js";import"./ButtonGroup-CcmBan6Y.js";import"./EmptyContent-1ZSnSbmB.js";import"./_isEqual-Q02tGGHK.js";import"./_dedupe-SnwC8TxO.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,J={component:a,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/Input.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},n={render:r=>e.jsx(a,{...r,decorateStart:e.jsx(h,{icon:"mdi mdi-alien",className:"p-1 bg-tint-50 text-lg"}),decorateEnd:e.jsx(I,{children:"Go!"})}),args:{label:"Text input",placeholder:"Text input...",onChange:t(),onEnterPressed:t()}},o={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",invalid:!0,error:"Error message",onChange:t(),onEnterPressed:t()}},s={render:r=>e.jsx(a,{...r}),args:{label:"Text input",placeholder:"Text input...",disabled:!0,onChange:t(),onEnterPressed:t()}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
