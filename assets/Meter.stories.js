import{n as e}from"./rolldown-runtime.js";import{b as t,t as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=r(),a=r(),o={component:t,tags:[`autodocs`],title:`@core/components/Meter`,parameters:{layout:`centered`,jest:[`core/tests/components/Meter.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`w-2xs max-w-full p-4`,children:(0,a.jsx)(e,{})})]},s={render:e=>(0,a.jsx)(t,{...e}),args:{value:60}},c={render:()=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:0})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:16.67})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:33.34})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:50,className:`text-2xl`})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:66.68})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:83.35})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:100})})]})},l={render:()=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:95,color:`jade-600`})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:95,color:`danger-600`})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:95,color:`warning-600`})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:95,color:`primary-600`})})]})},u={render:e=>(0,a.jsx)(t,{...e,hideLabel:!0}),args:{value:75}},d={render:()=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:-10})}),(0,a.jsx)(`div`,{className:`mb-2`,children:(0,a.jsx)(t,{value:150})})]})},f={tags:[`!autodocs`],render:e=>(0,a.jsx)(t,{...e}),args:{value:50}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Meter {...args} />;
  },
  args: {
    value: 60
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Fragment>
        <div className="mb-2">
          <Meter value={0} />
        </div>
        <div className="mb-2">
          <Meter value={16.67} />
        </div>
        <div className="mb-2">
          <Meter value={33.34} />
        </div>
        <div className="mb-2">
          <Meter value={50} className="text-2xl" />
        </div>
        <div className="mb-2">
          <Meter value={66.68} />
        </div>
        <div className="mb-2">
          <Meter value={83.35} />
        </div>
        <div className="mb-2">
          <Meter value={100} />
        </div>
      </Fragment>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Fragment>
        <div className="mb-2">
          <Meter value={95} color="jade-600" />
        </div>
        <div className="mb-2">
          <Meter value={95} color="danger-600" />
        </div>
        <div className="mb-2">
          <Meter value={95} color="warning-600" />
        </div>
        <div className="mb-2">
          <Meter value={95} color="primary-600" />
        </div>
      </Fragment>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Meter {...args} hideLabel />;
  },
  args: {
    value: 75
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Fragment>
        <div className="mb-2">
          <Meter value={-10} />
        </div>
        <div className="mb-2">
          <Meter value={150} />
        </div>
      </Fragment>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Meter {...args} />,
  args: {
    value: 50
  }
}`,...f.parameters?.docs?.source}}},p=[`_Meter`,`AllStates`,`Colors`,`WithoutLabel`,`EdgeCases`,`Tester`]})))()}m();export{c as AllStates,l as Colors,d as EdgeCases,f as Tester,u as WithoutLabel,s as _Meter,p as __namedExportsOrder,o as default};