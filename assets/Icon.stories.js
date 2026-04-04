import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{at as r,it as i,t as a}from"./src3.js";var o=t({Colors:()=>f,Sizes:()=>p,Tester:()=>m,_Icon:()=>d,__namedExportsOrder:()=>h,default:()=>u}),s,c,l,u,d,f,p,m,h,g=e((()=>{s=n(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={component:r,title:`@core/components/Icon`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/icons/Icon.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,c.jsx)(e,{})})]},d={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(r,{...e}),(0,c.jsx)(r,{...e,icon:`W`}),(0,c.jsx)(r,{...e,icon:`WW`}),(0,c.jsx)(r,{...e,icon:`WWW`}),(0,c.jsx)(r,{...e,icon:`WWWW`}),(0,c.jsx)(i,{value:99,placement:`top-end`,children:(0,c.jsx)(r,{...e})})]}),args:{size:`2.5rem`,icon:`mdi mdi-react`,onClick:l()}},f={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(r,{...e,color:`primary`}),(0,c.jsx)(r,{...e,color:`accent`}),(0,c.jsx)(r,{...e,color:`info`}),(0,c.jsx)(r,{...e,color:`danger`}),(0,c.jsx)(r,{...e,color:`success`}),(0,c.jsx)(r,{...e,color:`warning`}),(0,c.jsx)(r,{...e,className:`bg-invert text-invert`}),(0,c.jsx)(r,{...e,color:`#9333ea`})]}),args:{size:`2.5rem`,icon:`mdi mdi-react`,onClick:l()}},p={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(r,{...e,size:`xs`}),(0,c.jsx)(r,{...e,size:`sm`}),(0,c.jsx)(r,{...e}),(0,c.jsx)(r,{...e,size:`md`}),(0,c.jsx)(r,{...e,size:`lg`}),(0,c.jsx)(r,{...e,size:`xl`}),(0,c.jsx)(r,{...e,size:`2.5rem`})]}),args:{icon:`mdi mdi-react`,onClick:l()}},m={render:e=>(0,c.jsx)(r,{...e}),args:{icon:`mdi mdi-react`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Icon {...args} />
        <Icon {...args} icon="W" />
        <Icon {...args} icon="WW" />
        <Icon {...args} icon="WWW" />
        <Icon {...args} icon="WWWW" />
        <Badge value={99} placement="top-end">
          <Icon {...args} />
        </Badge>
      </Fragment>;
  },
  args: {
    size: "2.5rem",
    icon: "mdi mdi-react",
    onClick: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Icon {...args} color="primary" />
        <Icon {...args} color="accent" />
        <Icon {...args} color="info" />
        <Icon {...args} color="danger" />
        <Icon {...args} color="success" />
        <Icon {...args} color="warning" />
        <Icon {...args} className="bg-invert text-invert" />
        <Icon {...args} color="#9333ea" />
      </Fragment>;
  },
  args: {
    size: "2.5rem",
    icon: "mdi mdi-react",
    onClick: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Icon {...args} size="xs" />
        <Icon {...args} size="sm" />
        <Icon {...args} />
        <Icon {...args} size="md" />
        <Icon {...args} size="lg" />
        <Icon {...args} size="xl" />
        <Icon {...args} size="2.5rem" />
      </Fragment>;
  },
  args: {
    icon: "mdi mdi-react",
    onClick: fn()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Icon {...args} />,
  args: {
    icon: "mdi mdi-react"
  }
}`,...m.parameters?.docs?.source}}},h=[`_Icon`,`Colors`,`Sizes`,`Tester`]}));g();export{f as Colors,p as Sizes,m as Tester,d as _Icon,h as __namedExportsOrder,u as default,g as n,o as t};