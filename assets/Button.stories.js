import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{Jt as n,Q as r,t as i}from"./src2.js";import{t as a}from"./jsx-runtime.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),o=a(),s=a(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={component:t,tags:[`autodocs`],title:`@core/components/Button`,parameters:{layout:`centered`,jest:[`core/tests/components/Button.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,s.jsx)(e,{})})]},u={render:e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(t,{...e,children:`Click Me!`}),(0,s.jsx)(t,{...e,icon:`icon-[mdi--react]`,altIcon:`icon-[mdi--chevron-down]`,children:`Click Me!`}),(0,s.jsx)(t,{...e,icon:`icon-[mdi--react]`,"aria-label":`Click Me`}),(0,s.jsx)(t,{...e,icon:`icon-[mdi--react]`,rounded:!0,"aria-label":`Click`})]}),args:{onClick:c()}},d={render:e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(t,{...e,variant:`default`,children:`Default`}),(0,s.jsx)(t,{...e,variant:`soft`,children:`Soft`}),(0,s.jsx)(t,{...e,variant:`outlined`,children:`Outlined`}),(0,s.jsx)(t,{...e,variant:`dashed`,children:`Dashed`}),(0,s.jsx)(t,{...e,variant:`solid`,children:`Solid`}),(0,s.jsx)(t,{...e,variant:`link`,children:`Link`})]}),args:{}},f={render:e=>{let{promise:r,toast:i}=n();return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(t,{...e,color:`default`,children:`Default`}),(0,s.jsx)(t,{...e,color:`muted`,children:`Muted`}),(0,s.jsx)(t,{...e,color:`primary`,children:`Primary`}),(0,s.jsx)(t,{...e,color:`secondary`,children:`Secondary`}),(0,s.jsx)(t,{...e,color:`info`,children:`Info`}),(0,s.jsx)(t,{...e,color:`danger`,children:`Danger`}),(0,s.jsx)(t,{...e,color:`success`,children:`Success`}),(0,s.jsx)(t,{...e,color:`warning`,children:`Warning`})]})},args:{}},p={render:e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(t,{...e,disabled:!0,children:`Disabled`}),(0,s.jsx)(t,{...e,loading:!0,children:`Loading`}),(0,s.jsx)(t,{...e,active:!0,children:`Active`}),(0,s.jsx)(t,{...e,showActionDone:!0,showActionDoneEvent:`manual`,children:`Active`})]}),args:{}},m={render:e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(r,{value:`High`,color:`black`,bg:`info`,placement:`top`,children:(0,s.jsx)(t,{...e,children:`Simple badge`})}),(0,s.jsx)(r,{value:`9`,color:`white`,bg:`danger`,className:`flex-1`,children:(0,s.jsx)(t,{...e,className:`block`,children:`Value badge`})}),(0,s.jsx)(r,{icon:`icon-[mdi--bell]`,bg:`primary-500`,color:`white`,children:(0,s.jsx)(t,{...e,children:`Icon badge`})}),(0,s.jsx)(r,{ping:!0,color:`white`,bg:`success`,children:(0,s.jsx)(t,{...e,children:`Ping badge`})}),(0,s.jsx)(t,{...e,altIcon:(0,s.jsx)(r,{value:`9`,bg:`tint-100`,inline:!0}),children:`Inline badge`})]}),args:{onClick:c()}},h={render:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{...e,hotKey:[`Control+K`,`Q`],children:`Control K - Q`}),(0,s.jsx)(t,{...e,hotKey:`Meta+V`,children:`Meta V`}),(0,s.jsx)(t,{...e,hotKey:`Alt+B`,hideHotKeyLabel:!0,children:`Alt B`})]}),args:{onClick:c()}},g={tags:[`!autodocs`],render:e=>(0,s.jsx)(t,{...e}),args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args}>Click Me!</Button>
        <Button {...args} icon="icon-[mdi--react]" altIcon="icon-[mdi--chevron-down]">
          Click Me!
        </Button>
        <Button {...args} icon="icon-[mdi--react]" aria-label="Click Me" />
        <Button {...args} icon="icon-[mdi--react]" rounded aria-label="Click" />
      </Fragment>;
  },
  args: {
    onClick: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} variant="default">
          Default
        </Button>
        <Button {...args} variant="soft">
          Soft
        </Button>
        <Button {...args} variant="outlined">
          Outlined
        </Button>
        <Button {...args} variant="dashed">
          Dashed
        </Button>
        <Button {...args} variant="solid">
          Solid
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </Fragment>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      promise,
      toast
    } = useNotificationService();
    return <Fragment>
        <Button {...args} color="default">
          Default
        </Button>
        <Button {...args} color="muted">
          Muted
        </Button>
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="info">
          Info
        </Button>
        <Button {...args} color="danger">
          Danger
        </Button>
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
      </Fragment>;
  },
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} disabled>
          Disabled
        </Button>
        <Button {...args} loading>
          Loading
        </Button>
        <Button {...args} active>
          Active
        </Button>
        <Button {...args} showActionDone showActionDoneEvent="manual">
          Active
        </Button>
      </Fragment>;
  },
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Badge value="High" color="black" bg="info" placement="top">
          <Button {...args}>Simple badge</Button>
        </Badge>
        <Badge value="9" color="white" bg="danger" className="flex-1">
          <Button {...args} className="block">
            Value badge
          </Button>
        </Badge>
        <Badge icon="icon-[mdi--bell]" bg="primary-500" color="white">
          <Button {...args}>Icon badge</Button>
        </Badge>
        <Badge ping color="white" bg="success">
          <Button {...args}>Ping badge</Button>
        </Badge>
        <Button {...args} altIcon={<Badge value="9" bg="tint-100" inline />}>
          Inline badge
        </Button>
      </Fragment>;
  },
  args: {
    onClick: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <>
        <Button {...args} hotKey={["Control+K", "Q"]}>
          Control K - Q
        </Button>
        <Button {...args} hotKey="Meta+V">
          Meta V
        </Button>
        <Button {...args} hotKey="Alt+B" hideHotKeyLabel>
          Alt B
        </Button>
      </>;
  },
  args: {
    onClick: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Button {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`_Button`,`Variants`,`Colors`,`States`,`Badges`,`HotKeys`,`Tester`]})))()}v();export{m as Badges,f as Colors,h as HotKeys,p as States,g as Tester,d as Variants,u as _Button,_ as __namedExportsOrder,l as default};