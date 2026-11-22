import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{B as n,t as r}from"./src2.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,tags:[`autodocs`],title:`@core/components/Chip`,parameters:{layout:`centered`,jest:[`core/tests/components/Chip.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,i.jsx)(e,{})})]},s={render:({onClick:e,onRemove:t,...r})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...r,children:`Label`}),(0,i.jsx)(n,{...r,icon:`icon-[mdi--react]`,children:`Label with icon`}),(0,i.jsx)(n,{...r,icon:`icon-[mdi--react]`}),(0,i.jsx)(n,{...r,icon:`icon-[mdi--react]`,onClick:e,children:`Clickable`}),(0,i.jsx)(n,{...r,icon:`icon-[mdi--react]`,onRemove:t,children:`Remove Me`})]}),args:{onClick:a(),onRemove:a()}},c={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e,children:`Default`}),(0,i.jsx)(n,{...e,variant:`outlined`,children:`Outlined`}),(0,i.jsx)(n,{...e,color:`primary`,variant:`soft`,children:`Soft`}),(0,i.jsx)(n,{...e,color:`primary`,variant:`solid`,children:`Solid`})]}),args:{}},l={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e,color:`primary`,children:`Primary`}),(0,i.jsx)(n,{...e,color:`secondary`,children:`Secondary`}),(0,i.jsx)(n,{...e,color:`scarlet`,children:`Scarlet`}),(0,i.jsx)(n,{...e,color:`pumpkin`,children:`Pumpkin`}),(0,i.jsx)(n,{...e,color:`#148B69`,children:`#148B69`}),(0,i.jsx)(n,{...e,color:`#A7207F`,children:`#A7207F`})]}),args:{}},u={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e,color:`primary`,children:`Primary`}),(0,i.jsx)(n,{...e,color:`secondary`,children:`Secondary`}),(0,i.jsx)(n,{...e,color:`info`,children:`Info`}),(0,i.jsx)(n,{...e,color:`danger`,children:`Danger`}),(0,i.jsx)(n,{...e,color:`success`,children:`Success`}),(0,i.jsx)(n,{...e,color:`warning`,children:`Warning`})]}),args:{value:99}},d={tags:[`!autodocs`],render:e=>(0,i.jsx)(n,{...e}),args:{}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Chip {...args} />,
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`_Chip`,`Variants`,`Colors`,`SegmentValue`,`Tester`]})))()}p();export{l as Colors,u as SegmentValue,d as Tester,c as Variants,s as _Chip,f as __namedExportsOrder,o as default};