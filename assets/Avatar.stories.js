import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{Q as n,et as r,nt as i,t as a}from"./src2.js";import{n as o,t as s}from"./en.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a(),s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={component:i,tags:[`autodocs`],title:`@core/components/Avatar`,subcomponents:{AvatarGroup:r},parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/components/Avatar.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,c.jsx)(e,{})})]},d=o.image.avatarGitHub(),f={render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{...e,variant:`text`}),(0,c.jsx)(i,{...e,fallbackIcon:`icon-[mdi--react]`}),(0,c.jsx)(i,{...e,avatar:d}),(0,c.jsx)(i,{...e,variant:`bauhaus`}),(0,c.jsx)(i,{...e,variant:`beam`}),(0,c.jsx)(i,{...e,variant:`pixel`}),(0,c.jsx)(n,{value:99,placement:`top-end`,children:(0,c.jsx)(i,{...e,fallbackIcon:`icon-[mdi--react]`})})]}),args:{name:`Hyacinth Bucket`,size:`2.5rem`,onClick:l()}},p={render:e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(i,{name:`Hyacinth Bucket`,variant:`text`}),(0,c.jsx)(i,{name:`Hyacinth Bucket`,fallbackIcon:`icon-[mdi--react]`}),(0,c.jsx)(i,{name:`Hyacinth Bucket`,avatar:d}),(0,c.jsx)(i,{name:`Hyacinth Bucket`,variant:`bauhaus`}),(0,c.jsx)(i,{name:`Hyacinth Bucket`,variant:`beam`}),(0,c.jsx)(i,{name:`Hyacinth Bucket`,variant:`pixel`})]}),args:{rounded:!0,max:3,size:`2.5rem`}},m={render:e=>(0,c.jsx)(i,{...e}),args:{}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Avatar {...args} variant="text" />
        <Avatar {...args} fallbackIcon="icon-[mdi--react]" />
        <Avatar {...args} avatar={iconImg} />
        <Avatar {...args} variant="bauhaus" />
        <Avatar {...args} variant="beam" />
        <Avatar {...args} variant="pixel" />
        <Badge value={99} placement="top-end">
          <Avatar {...args} fallbackIcon="icon-[mdi--react]" />
        </Badge>
      </Fragment>;
  },
  args: {
    name: "Hyacinth Bucket",
    size: "2.5rem",
    onClick: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <AvatarGroup {...args}>
        <Avatar name="Hyacinth Bucket" variant="text" />
        <Avatar name="Hyacinth Bucket" fallbackIcon="icon-[mdi--react]" />
        <Avatar name="Hyacinth Bucket" avatar={iconImg} />
        <Avatar name="Hyacinth Bucket" variant="bauhaus" />
        <Avatar name="Hyacinth Bucket" variant="beam" />
        <Avatar name="Hyacinth Bucket" variant="pixel" />
      </AvatarGroup>;
  },
  args: {
    rounded: true,
    max: 3,
    size: "2.5rem"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args} />,
  args: {}
}`,...m.parameters?.docs?.source}}},h=[`_Avatar`,`_AvatarGroup`,`Tester`]})))()}g();export{m as Tester,f as _Avatar,p as _AvatarGroup,h as __namedExportsOrder,u as default};