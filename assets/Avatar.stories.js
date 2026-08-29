import{n as e}from"./rolldown-runtime.js";import{Q as t,et as n,nt as r,t as i}from"./src2.js";import{t as a}from"./jsx-runtime.js";import{n as o,t as s}from"./chunk-NAVWDHVN.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),o(),c=a(),l=a(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={component:r,tags:[`autodocs`],title:`@core/components/Avatar`,subcomponents:{AvatarGroup:n},parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/components/Avatar.test.tsx`]},decorators:[e=>(0,l.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,l.jsx)(e,{})})]},f=s.image.avatarGitHub(),p={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(r,{...e,variant:`text`}),(0,l.jsx)(r,{...e,fallbackIcon:`icon-[mdi--react]`}),(0,l.jsx)(r,{...e,avatar:f}),(0,l.jsx)(r,{...e,variant:`bauhaus`}),(0,l.jsx)(r,{...e,variant:`beam`}),(0,l.jsx)(r,{...e,variant:`pixel`}),(0,l.jsx)(t,{value:99,placement:`top-end`,children:(0,l.jsx)(r,{...e,fallbackIcon:`icon-[mdi--react]`})})]}),args:{name:`Hyacinth Bucket`,size:`2.5rem`,onClick:u()}},m={render:e=>(0,l.jsxs)(n,{...e,children:[(0,l.jsx)(r,{name:`Hyacinth Bucket`,variant:`text`}),(0,l.jsx)(r,{name:`Hyacinth Bucket`,fallbackIcon:`icon-[mdi--react]`}),(0,l.jsx)(r,{name:`Hyacinth Bucket`,avatar:f}),(0,l.jsx)(r,{name:`Hyacinth Bucket`,variant:`bauhaus`}),(0,l.jsx)(r,{name:`Hyacinth Bucket`,variant:`beam`}),(0,l.jsx)(r,{name:`Hyacinth Bucket`,variant:`pixel`})]}),args:{rounded:!0,max:3,size:`2.5rem`}},h={render:e=>(0,l.jsx)(r,{...e}),args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args} />,
  args: {}
}`,...h.parameters?.docs?.source}}},g=[`_Avatar`,`_AvatarGroup`,`Tester`]})))()}_();export{h as Tester,p as _Avatar,m as _AvatarGroup,g as __namedExportsOrder,d as default};