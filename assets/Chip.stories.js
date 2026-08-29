import{n as e}from"./rolldown-runtime.js";import{B as t,t as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=r(),a=r(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={component:t,tags:[`autodocs`],title:`@core/components/Chip`,parameters:{layout:`centered`,jest:[`core/tests/components/Chip.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,a.jsx)(e,{})})]},c={render:({onClick:e,onRemove:n,...r})=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...r,children:`Label`}),(0,a.jsx)(t,{...r,icon:`icon-[mdi--react]`,children:`Label with icon`}),(0,a.jsx)(t,{...r,icon:`icon-[mdi--react]`}),(0,a.jsx)(t,{...r,icon:`icon-[mdi--react]`,onClick:e,children:`Clickable`}),(0,a.jsx)(t,{...r,icon:`icon-[mdi--react]`,onRemove:n,children:`Remove Me`})]}),args:{onClick:o(),onRemove:o()}},l={render:e=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...e,children:`Default`}),(0,a.jsx)(t,{...e,variant:`outlined`,children:`Outlined`}),(0,a.jsx)(t,{...e,color:`primary`,variant:`soft`,children:`Soft`}),(0,a.jsx)(t,{...e,color:`primary`,variant:`solid`,children:`Solid`})]}),args:{}},u={render:e=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...e,color:`primary`,children:`Primary`}),(0,a.jsx)(t,{...e,color:`secondary`,children:`Secondary`}),(0,a.jsx)(t,{...e,color:`scarlet`,children:`Scarlet`}),(0,a.jsx)(t,{...e,color:`pumpkin`,children:`Pumpkin`}),(0,a.jsx)(t,{...e,color:`#148B69`,children:`#148B69`}),(0,a.jsx)(t,{...e,color:`#A7207F`,children:`#A7207F`})]}),args:{}},d={render:e=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...e,color:`primary`,children:`Primary`}),(0,a.jsx)(t,{...e,color:`secondary`,children:`Secondary`}),(0,a.jsx)(t,{...e,color:`info`,children:`Info`}),(0,a.jsx)(t,{...e,color:`danger`,children:`Danger`}),(0,a.jsx)(t,{...e,color:`success`,children:`Success`}),(0,a.jsx)(t,{...e,color:`warning`,children:`Warning`})]}),args:{value:99}},f={tags:[`!autodocs`],render:e=>(0,a.jsx)(t,{...e}),args:{}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    onClick,
    onRemove,
    ...args
  }) => {
    return <Fragment>
        <Chip {...args}>Label</Chip>
        <Chip {...args} icon="icon-[mdi--react]">
          Label with icon
        </Chip>
        <Chip {...args} icon="icon-[mdi--react]" />
        <Chip {...args} icon="icon-[mdi--react]" onClick={onClick}>
          Clickable
        </Chip>
        <Chip {...args} icon="icon-[mdi--react]" onRemove={onRemove}>
          Remove Me
        </Chip>
      </Fragment>;
  },
  args: {
    onClick: fn(),
    onRemove: fn()
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args}>Default</Chip>
        <Chip {...args} variant="outlined">
          Outlined
        </Chip>
        <Chip {...args} color="primary" variant="soft">
          Soft
        </Chip>
        <Chip {...args} color="primary" variant="solid">
          Solid
        </Chip>
      </Fragment>;
  },
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} color="primary">
          Primary
        </Chip>
        <Chip {...args} color="secondary">
          Secondary
        </Chip>
        <Chip {...args} color="scarlet">
          Scarlet
        </Chip>
        <Chip {...args} color="pumpkin">
          Pumpkin
        </Chip>
        <Chip {...args} color="#148B69">
          #148B69
        </Chip>
        <Chip {...args} color="#A7207F">
          #A7207F
        </Chip>
      </Fragment>;
  },
  args: {}
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} color="primary">
          Primary
        </Chip>
        <Chip {...args} color="secondary">
          Secondary
        </Chip>
        <Chip {...args} color="info">
          Info
        </Chip>
        <Chip {...args} color="danger">
          Danger
        </Chip>
        <Chip {...args} color="success">
          Success
        </Chip>
        <Chip {...args} color="warning">
          Warning
        </Chip>
      </Fragment>;
  },
  args: {
    value: 99
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Chip {...args} />,
  args: {}
}`,...f.parameters?.docs?.source}}},p=[`_Chip`,`Variants`,`Colors`,`SegmentValue`,`Tester`]})))()}m();export{u as Colors,d as SegmentValue,f as Tester,l as Variants,c as _Chip,p as __namedExportsOrder,s as default};