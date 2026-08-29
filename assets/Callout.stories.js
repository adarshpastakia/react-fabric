import{n as e}from"./rolldown-runtime.js";import{J as t,t as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=r(),a=r(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={component:t,tags:[`autodocs`],title:`@core/components/Callout`,parameters:{layout:`centered`,jest:[`core/tests/components/Callout.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`w-full max-w-2xl p-4 flex flex-col gap-2`,children:(0,a.jsx)(e,{})})]},c={render:e=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...e,children:`This is a basic callout with some content.`}),(0,a.jsx)(t,{...e,legend:`Important`,title:`With Legend and Title`,icon:`icon-[mdi--info]`,children:`This callout includes a legend, title, and icon.`}),(0,a.jsx)(t,{...e,icon:`icon-[mdi--alert]`,children:`This callout has an icon but no legend or title.`}),(0,a.jsx)(t,{...e,onClose:o(),children:`This callout has a close button.`})]}),args:{}},l={render:e=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...e,color:`default`,children:`Default`}),(0,a.jsx)(t,{...e,color:`primary`,children:`Primary`}),(0,a.jsx)(t,{...e,color:`secondary`,children:`Secondary`}),(0,a.jsx)(t,{...e,color:`info`,children:`Info`}),(0,a.jsx)(t,{...e,color:`success`,children:`Success`}),(0,a.jsx)(t,{...e,color:`warning`,children:`Warning`}),(0,a.jsx)(t,{...e,color:`danger`,children:`Danger`})]}),args:{}},u={render:e=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t,{...e,border:`solid`,children:`Solid Border`}),(0,a.jsx)(t,{...e,border:`dotted`,children:`Dotted Border`}),(0,a.jsx)(t,{...e,border:`dashed`,children:`Dashed Border`})]}),args:{}},d={tags:[`!autodocs`],render:e=>(0,a.jsx)(t,{...e}),args:{}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Callout {...args}>This is a basic callout with some content.</Callout>
        <Callout {...args} legend="Important" title="With Legend and Title" icon="icon-[mdi--info]">
          This callout includes a legend, title, and icon.
        </Callout>
        <Callout {...args} icon="icon-[mdi--alert]">
          This callout has an icon but no legend or title.
        </Callout>
        <Callout {...args} onClose={fn()}>
          This callout has a close button.
        </Callout>
      </Fragment>;
  },
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Callout {...args} color="default">
          Default
        </Callout>
        <Callout {...args} color="primary">
          Primary
        </Callout>
        <Callout {...args} color="secondary">
          Secondary
        </Callout>
        <Callout {...args} color="info">
          Info
        </Callout>
        <Callout {...args} color="success">
          Success
        </Callout>
        <Callout {...args} color="warning">
          Warning
        </Callout>
        <Callout {...args} color="danger">
          Danger
        </Callout>
      </Fragment>;
  },
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Callout {...args} border="solid">
          Solid Border
        </Callout>
        <Callout {...args} border="dotted">
          Dotted Border
        </Callout>
        <Callout {...args} border="dashed">
          Dashed Border
        </Callout>
      </Fragment>;
  },
  args: {}
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Callout {...args} />,
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`_Callout`,`Colors`,`Borders`,`Tester`]})))()}p();export{u as Borders,l as Colors,d as Tester,c as _Callout,f as __namedExportsOrder,s as default};