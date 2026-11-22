import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{J as n,t as r}from"./src2.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,tags:[`autodocs`],title:`@core/components/Callout`,parameters:{layout:`centered`,jest:[`core/tests/components/Callout.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`w-full max-w-2xl p-4 flex flex-col gap-2`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e,children:`This is a basic callout with some content.`}),(0,i.jsx)(n,{...e,legend:`Important`,title:`With Legend and Title`,icon:`icon-[mdi--info]`,children:`This callout includes a legend, title, and icon.`}),(0,i.jsx)(n,{...e,icon:`icon-[mdi--alert]`,children:`This callout has an icon but no legend or title.`}),(0,i.jsx)(n,{...e,onClose:a(),children:`This callout has a close button.`})]}),args:{}},c={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e,color:`default`,children:`Default`}),(0,i.jsx)(n,{...e,color:`primary`,children:`Primary`}),(0,i.jsx)(n,{...e,color:`secondary`,children:`Secondary`}),(0,i.jsx)(n,{...e,color:`info`,children:`Info`}),(0,i.jsx)(n,{...e,color:`success`,children:`Success`}),(0,i.jsx)(n,{...e,color:`warning`,children:`Warning`}),(0,i.jsx)(n,{...e,color:`danger`,children:`Danger`})]}),args:{}},l={render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e,border:`solid`,children:`Solid Border`}),(0,i.jsx)(n,{...e,border:`dotted`,children:`Dotted Border`}),(0,i.jsx)(n,{...e,border:`dashed`,children:`Dashed Border`})]}),args:{}},u={tags:[`!autodocs`],render:e=>(0,i.jsx)(n,{...e}),args:{}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Callout {...args} />,
  args: {}
}`,...u.parameters?.docs?.source}}},d=[`_Callout`,`Colors`,`Borders`,`Tester`]})))()}f();export{l as Borders,c as Colors,u as Tester,s as _Callout,d as __namedExportsOrder,o as default};