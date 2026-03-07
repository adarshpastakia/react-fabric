import{j as a,ae as s,ad as r}from"./iframe-BmpICDQJ.js";import{f as p}from"./index4.js";const h={component:s,title:"@core/components/Avatar",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/avatar/AvatarGroup.test.tsx"]},decorators:[e=>a.jsx("div",{className:"flex gap-md items-center p-md",children:a.jsx(e,{})})]},v=p.image.avatarGitHub(),t={render:e=>a.jsxs(s,{...e,children:[a.jsx(r,{name:"Hyacinth Bucket",variant:"text"}),a.jsx(r,{name:"Hyacinth Bucket",fallbackIcon:"mdi mdi-react"}),a.jsx(r,{name:"Hyacinth Bucket",avatar:v}),a.jsx(r,{name:"Hyacinth Bucket",variant:"bauhaus"}),a.jsx(r,{name:"Hyacinth Bucket",variant:"beam"}),a.jsx(r,{name:"Hyacinth Bucket",variant:"pixel"})]}),args:{rounded:!0,totalCount:99,size:"2.5rem"}},n={render:e=>a.jsx(s,{...e}),args:{}};var c,o,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,u,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args} />,
  args: {}
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const A=["_AvatarGroup","GroupTester"];export{n as GroupTester,t as _AvatarGroup,A as __namedExportsOrder,h as default};
