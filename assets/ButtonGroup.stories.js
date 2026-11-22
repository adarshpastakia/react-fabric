import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{t as n}from"./jsx-runtime.js";import{mt as r,t as i}from"./src2.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),a=n(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={component:r,tags:[`autodocs`],title:`@core/components/ButtonGroup`,parameters:{layout:`centered`,jest:[`core/tests/components/ButtonGroup.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,a.jsx)(e,{})})]},c={render:e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(t,{value:`left`,children:`Left`}),(0,a.jsx)(t,{value:`center`,children:`Center`}),(0,a.jsx)(t,{value:`right`,children:`Right`}),(0,a.jsx)(t,{value:`justify`,children:`Justify`})]})}),args:{onClick:o()}},l={tags:[`!autodocs`],render:e=>(0,a.jsx)(r,{...e}),args:{}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <ButtonGroup {...args} />,
  args: {}
}`,...l.parameters?.docs?.source}}},u=[`_ButtonGroup`,`Tester`]})))()}d();export{l as Tester,c as _ButtonGroup,u as __namedExportsOrder,s as default};