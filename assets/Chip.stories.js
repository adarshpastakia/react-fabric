import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{it as r,t as i,z as a}from"./src3.js";var o=t({Colors:()=>f,Sizes:()=>p,States:()=>h,Styles:()=>m,Tester:()=>g,_Chip:()=>d,__namedExportsOrder:()=>_,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{s=n(),i(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={component:a,title:`@core/components/Chip`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/chip/Chip.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,c.jsx)(e,{})})]},d={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(a,{...e,icon:`mdi mdi-react`}),(0,c.jsx)(a,{...e,children:`Tag Label`}),(0,c.jsx)(a,{...e,icon:`mdi mdi-react`,children:`Tag Label`}),(0,c.jsx)(r,{value:99,placement:`top-end`,children:(0,c.jsx)(a,{...e,children:`Tag Label`})})]}),args:{}},f={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(a,{...e,color:`primary`}),(0,c.jsx)(a,{...e,color:`accent`}),(0,c.jsx)(a,{...e,color:`info`}),(0,c.jsx)(a,{...e,color:`danger`}),(0,c.jsx)(a,{...e,color:`success`}),(0,c.jsx)(a,{...e,color:`warning`}),(0,c.jsx)(a,{...e,color:`#9c88ff`})]}),args:{children:`Tag Label`,icon:`mdi mdi-react`}},p={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(a,{...e,size:`xs`}),(0,c.jsx)(a,{...e,size:`sm`}),(0,c.jsx)(a,{...e}),(0,c.jsx)(a,{...e,size:`md`}),(0,c.jsx)(a,{...e,size:`lg`}),(0,c.jsx)(a,{...e,size:`xl`})]}),args:{children:`Tag Label`,icon:`mdi mdi-react`}},m={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(a,{...e,variant:void 0}),(0,c.jsx)(a,{...e,variant:`outline`}),(0,c.jsx)(a,{...e,variant:`solid`})]}),args:{children:`Tag Label`,icon:`mdi mdi-react`}},h={render:e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(a,{...e,disabled:!0,onRemove:void 0,children:`Disabled`}),(0,c.jsx)(a,{...e,onClick:void 0,onRemove:void 0,children:`Normal`}),(0,c.jsx)(a,{...e,onRemove:void 0,children:`Clickable`}),(0,c.jsx)(a,{...e,onClick:void 0,children:`Removable`})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`,onClick:l(),onRemove:l()}},g={render:e=>(0,c.jsx)(a,{...e}),args:{}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} icon="mdi mdi-react" />
        <Chip {...args}>Tag Label</Chip>
        <Chip {...args} icon="mdi mdi-react">
          Tag Label
        </Chip>
        <Badge value={99} placement="top-end">
          <Chip {...args}>Tag Label</Chip>
        </Badge>
      </Fragment>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} color="primary" />
        <Chip {...args} color="accent" />
        <Chip {...args} color="info" />
        <Chip {...args} color="danger" />
        <Chip {...args} color="success" />
        <Chip {...args} color="warning" />
        <Chip {...args} color="#9c88ff" />
      </Fragment>;
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} size="xs" />
        <Chip {...args} size="sm" />
        <Chip {...args} />
        <Chip {...args} size="md" />
        <Chip {...args} size="lg" />
        <Chip {...args} size="xl" />
      </Fragment>;
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} variant={undefined} />
        <Chip {...args} variant="outline" />
        <Chip {...args} variant="solid" />
      </Fragment>;
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} disabled onRemove={undefined}>
          Disabled
        </Chip>
        <Chip {...args} onClick={undefined} onRemove={undefined}>
          Normal
        </Chip>
        <Chip {...args} onRemove={undefined}>
          Clickable
        </Chip>
        <Chip {...args} onClick={undefined}>
          Removable
        </Chip>
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
    onClick: fn(),
    onRemove: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Chip {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`_Chip`,`Colors`,`Sizes`,`Styles`,`States`,`Tester`]}));v();export{f as Colors,p as Sizes,h as States,m as Styles,g as Tester,d as _Chip,_ as __namedExportsOrder,u as default,v as n,o as t};