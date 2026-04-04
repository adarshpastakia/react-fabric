import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{Z as r,t as i}from"./src3.js";var a=t({ConfirmWithAction:()=>d,Tester:()=>f,_ConfirmButton:()=>u,__namedExportsOrder:()=>p,default:()=>l}),o,s,c,l,u,d,f,p,m=e((()=>{o=n(),i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={component:r,title:`@core/components/ConfirmButton`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/buttons/ConfirmButton.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,s.jsx)(e,{})})]},u={render:e=>(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(r,{...e,children:`Confirm Action`})}),args:{message:`Confirm done`,onClick:c()}},d={render:e=>(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(r,{...e,children:`Confirm with Completed Action`})}),args:{actionMessage:`Action completed`,message:`Confirm done`,onClick:c()}},f={render:e=>(0,s.jsx)(r,{...e}),args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ConfirmButton {...args}>Confirm Action</ConfirmButton>
      </Fragment>;
  },
  args: {
    message: "Confirm done",
    onClick: fn() as any
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ConfirmButton {...args}>Confirm with Completed Action</ConfirmButton>
      </Fragment>;
  },
  args: {
    actionMessage: "Action completed",
    message: "Confirm done",
    onClick: fn() as any
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ConfirmButton {...args} />,
  args: {}
}`,...f.parameters?.docs?.source}}},p=[`_ConfirmButton`,`ConfirmWithAction`,`Tester`]}));m();export{d as ConfirmWithAction,f as Tester,u as _ConfirmButton,p as __namedExportsOrder,l as default,m as n,a as t};