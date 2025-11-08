import{j as e,ah as s}from"./iframe-DwvN93Ge.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,p={component:s,title:"@core/components/ConfirmButton",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/buttons/ConfirmButton.test.tsx"]},decorators:[n=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(n,{})})]},r={render:n=>e.jsx(e.Fragment,{children:e.jsx(s,{...n,children:"Confirm Action"})}),args:{message:"Confirm done",onClick:C()}},o={render:n=>e.jsx(e.Fragment,{children:e.jsx(s,{...n,children:"Confirm with Completed Action"})}),args:{actionMessage:"Action completed",message:"Confirm done",onClick:C()}},t={render:n=>e.jsx(s,{...n}),args:{}};var a,c,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ConfirmButton {...args}>Confirm Action</ConfirmButton>
      </Fragment>;
  },
  args: {
    message: "Confirm done",
    onClick: fn() as any
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,l;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ConfirmButton {...args} />,
  args: {}
}`,...(l=(f=t.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};const _=["_ConfirmButton","ConfirmWithAction","Tester"],j=Object.freeze(Object.defineProperty({__proto__:null,ConfirmWithAction:o,Tester:t,_ConfirmButton:r,__namedExportsOrder:_,default:p},Symbol.toStringTag,{value:"Module"}));export{j as C,r as _,o as a};
