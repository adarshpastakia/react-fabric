import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{X as n,t as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a=i(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={component:n,tags:[`autodocs`],title:`@core/components/ToggleButtonGroup`,parameters:{layout:`centered`,jest:[`core/tests/components/ToggleButtonGroup.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,a.jsx)(e,{})})]},c={render:e=>(0,a.jsxs)(n,{...e,children:[(0,a.jsx)(t,{hotKey:`1`,value:`left`,children:`Left`}),(0,a.jsx)(t,{hotKey:`2`,value:`center`,children:`Center`}),(0,a.jsx)(t,{hotKey:`3`,value:`right`,children:`Right`}),(0,a.jsx)(t,{hotKey:`4`,value:`justify`,children:`Justify`})]}),args:{value:`center`,onChange:o()}},l={render:e=>(0,a.jsxs)(n,{...e,children:[(0,a.jsx)(t,{hotKey:`ctrl+b`,hideHotKeyLabel:!0,value:`bold`,icon:`icon-[mdi--format-bold]`,"aria-label":`bold`}),(0,a.jsx)(t,{hotKey:`ctrl+i`,hideHotKeyLabel:!0,value:`italic`,icon:`icon-[mdi--format-italic]`,"aria-label":`italic`}),(0,a.jsx)(t,{hotKey:`ctrl+u`,hideHotKeyLabel:!0,value:`underline`,icon:`icon-[mdi--format-underline]`,"aria-label":`underline`}),(0,a.jsx)(t,{hotKey:`ctrl+s`,hideHotKeyLabel:!0,value:`strikethrough`,icon:`icon-[mdi--format-strikethrough]`,"aria-label":`strikethrough`})]}),args:{value:[`bold`],onChange:o()}},u={tags:[`!autodocs`],render:e=>(0,a.jsx)(n,{...e}),args:{}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ToggleButtonGroup {...args}>
        <Button hotKey="1" value="left">
          Left
        </Button>
        <Button hotKey="2" value="center">
          Center
        </Button>
        <Button hotKey="3" value="right">
          Right
        </Button>
        <Button hotKey="4" value="justify">
          Justify
        </Button>
      </ToggleButtonGroup>;
  },
  args: {
    value: "center",
    onChange: fn()
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ToggleButtonGroup {...args}>
        <Button hotKey="ctrl+b" hideHotKeyLabel value="bold" icon="icon-[mdi--format-bold]" aria-label="bold" />
        <Button hotKey="ctrl+i" hideHotKeyLabel value="italic" icon="icon-[mdi--format-italic]" aria-label="italic" />
        <Button hotKey="ctrl+u" hideHotKeyLabel value="underline" icon="icon-[mdi--format-underline]" aria-label="underline" />
        <Button hotKey="ctrl+s" hideHotKeyLabel value="strikethrough" icon="icon-[mdi--format-strikethrough]" aria-label="strikethrough" />
      </ToggleButtonGroup>;
  },
  args: {
    value: ["bold"],
    onChange: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <ToggleButtonGroup {...args} />,
  args: {}
}`,...u.parameters?.docs?.source}}},d=[`Single`,`Multiple`,`Tester`]})))()}f();export{l as Multiple,c as Single,u as Tester,d as __namedExportsOrder,s as default};