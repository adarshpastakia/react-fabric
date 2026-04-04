import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{r as n,t as r}from"./dist28.js";import{ot as i,st as a,t as o}from"./src3.js";var s,c,l,u,d,f,p=e((()=>{r(),o(),s=t(),c={component:i,title:`@core/components/Avatar`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/avatar/AvatarGroup.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`flex gap-md items-center p-md`,children:(0,s.jsx)(e,{})})]},l=n.image.avatarGitHub(),u={render:e=>(0,s.jsxs)(i,{...e,children:[(0,s.jsx)(a,{name:`Hyacinth Bucket`,variant:`text`}),(0,s.jsx)(a,{name:`Hyacinth Bucket`,fallbackIcon:`mdi mdi-react`}),(0,s.jsx)(a,{name:`Hyacinth Bucket`,avatar:l}),(0,s.jsx)(a,{name:`Hyacinth Bucket`,variant:`bauhaus`}),(0,s.jsx)(a,{name:`Hyacinth Bucket`,variant:`beam`}),(0,s.jsx)(a,{name:`Hyacinth Bucket`,variant:`pixel`})]}),args:{rounded:!0,totalCount:99,size:`2.5rem`}},d={render:e=>(0,s.jsx)(i,{...e}),args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <AvatarGroup {...args}>
        <Avatar name="Hyacinth Bucket" variant="text" />
        <Avatar name="Hyacinth Bucket" fallbackIcon="mdi mdi-react" />
        <Avatar name="Hyacinth Bucket" avatar={iconImg} />
        <Avatar name="Hyacinth Bucket" variant="bauhaus" />
        <Avatar name="Hyacinth Bucket" variant="beam" />
        <Avatar name="Hyacinth Bucket" variant="pixel" />
      </AvatarGroup>;
  },
  args: {
    rounded: true,
    totalCount: 99,
    size: "2.5rem"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args} />,
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`_AvatarGroup`,`GroupTester`]}));p();export{d as GroupTester,u as _AvatarGroup,f as __namedExportsOrder,c as default,p as t};