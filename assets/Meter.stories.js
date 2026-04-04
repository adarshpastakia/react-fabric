import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{t as r,w as i}from"./src3.js";var a=t({Colors:()=>u,Sizes:()=>d,_Meter:()=>l,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f,p=e((()=>{o=n(),r(),s=n(),c={component:i,title:`@core/components/Meter`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Meter.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`w-screen max-w-sm p-4 flex flex-col gap-2`,children:(0,s.jsx)(e,{})})]},l={render:e=>(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(i,{...e})}),args:{value:94.2}},u={render:e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(i,{...e,className:`text-primary-600`}),(0,s.jsx)(i,{...e,className:`text-accent-600`}),(0,s.jsx)(i,{...e,className:`text-danger-600`})]}),args:{value:94.2}},d={render:e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(i,{...e,className:`text-xs`}),(0,s.jsx)(i,{...e,className:`text-md`}),(0,s.jsx)(i,{...e,className:`text-2xl`})]}),args:{value:94.2}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Meter {...args} />
      </Fragment>;
  },
  args: {
    value: 94.2
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Meter {...args} className="text-primary-600" />
        <Meter {...args} className="text-accent-600" />
        <Meter {...args} className="text-danger-600" />
      </Fragment>;
  },
  args: {
    value: 94.2
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Meter {...args} className="text-xs" />
        <Meter {...args} className="text-md" />
        <Meter {...args} className="text-2xl" />
      </Fragment>;
  },
  args: {
    value: 94.2
  }
}`,...d.parameters?.docs?.source}}},f=[`_Meter`,`Colors`,`Sizes`]}));p();export{u as Colors,d as Sizes,l as _Meter,f as __namedExportsOrder,c as default,p as n,a as t};