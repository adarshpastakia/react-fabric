import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{mt as n,t as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a=i(),o=i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={component:n,tags:[`autodocs`],title:`@core/components/ButtonGroup`,parameters:{layout:`centered`,jest:[`core/tests/components/ButtonGroup.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,o.jsx)(e,{})})]},l={render:e=>(0,o.jsx)(a.Fragment,{children:(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(t,{value:`left`,children:`Left`}),(0,o.jsx)(t,{value:`center`,children:`Center`}),(0,o.jsx)(t,{value:`right`,children:`Right`}),(0,o.jsx)(t,{value:`justify`,children:`Justify`})]})}),args:{onClick:s()}},u={tags:[`!autodocs`],render:e=>(0,o.jsx)(n,{...e}),args:{}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ButtonGroup {...args}>
          <Button value="left">Left</Button>
          <Button value="center">Center</Button>
          <Button value="right">Right</Button>
          <Button value="justify">Justify</Button>
        </ButtonGroup>
      </Fragment>;
  },
  args: {
    onClick: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <ButtonGroup {...args} />,
  args: {}
}`,...u.parameters?.docs?.source}}},d=[`_ButtonGroup`,`Tester`]})))()}f();export{u as Tester,l as _ButtonGroup,d as __namedExportsOrder,c as default};