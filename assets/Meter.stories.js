import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{b as n,t as r}from"./src2.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i=t(),a={component:n,tags:[`autodocs`],title:`@core/components/Meter`,parameters:{layout:`centered`,jest:[`core/tests/components/Meter.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`w-2xs max-w-full p-4`,children:(0,i.jsx)(e,{})})]},o={render:e=>(0,i.jsx)(n,{...e}),args:{value:60}},s={render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:0})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:16.67})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:33.34})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:50,className:`text-2xl`})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:66.68})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:83.35})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:100})})]})},c={render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:95,color:`jade-600`})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:95,color:`danger-600`})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:95,color:`warning-600`})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:95,color:`primary-600`})})]})},l={render:e=>(0,i.jsx)(n,{...e,hideLabel:!0}),args:{value:75}},u={render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:-10})}),(0,i.jsx)(`div`,{className:`mb-2`,children:(0,i.jsx)(n,{value:150})})]})},d={tags:[`!autodocs`],render:e=>(0,i.jsx)(n,{...e}),args:{value:50}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Meter {...args} />;
  },
  args: {
    value: 60
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Meter {...args} hideLabel />;
  },
  args: {
    value: 75
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Meter {...args} />,
  args: {
    value: 50
  }
}`,...d.parameters?.docs?.source}}},f=[`_Meter`,`AllStates`,`Colors`,`WithoutLabel`,`EdgeCases`,`Tester`]})))()}p();export{s as AllStates,c as Colors,u as EdgeCases,d as Tester,l as WithoutLabel,o as _Meter,f as __namedExportsOrder,a as default};