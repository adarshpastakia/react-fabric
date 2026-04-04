import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{it as a,ot as o,st as s,t as c}from"./src3.js";var l=t({Tester:()=>g,_Avatar:()=>h,__namedExportsOrder:()=>_,default:()=>p}),u,d,f,p,m,h,g,_,v=e((()=>{i(),u=n(),c(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={component:s,title:`@core/components/Avatar`,subcomponents:{AvatarGroup:o},parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/avatar/Avatar.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,d.jsx)(e,{})})]},m=r.image.avatarGitHub(),h={render:e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(s,{...e,variant:`text`}),(0,d.jsx)(s,{...e,fallbackIcon:`mdi mdi-react`}),(0,d.jsx)(s,{...e,avatar:m}),(0,d.jsx)(s,{...e,variant:`bauhaus`}),(0,d.jsx)(s,{...e,variant:`beam`}),(0,d.jsx)(s,{...e,variant:`pixel`}),(0,d.jsx)(a,{value:99,placement:`top-end`,children:(0,d.jsx)(s,{...e,fallbackIcon:`mdi mdi-react`})})]}),args:{name:`Hyacinth Bucket`,size:`2.5rem`,onClick:f()}},g={render:e=>(0,d.jsx)(s,{...e}),args:{}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Avatar {...args} variant="text" />
        <Avatar {...args} fallbackIcon="mdi mdi-react" />
        <Avatar {...args} avatar={iconImg} />
        <Avatar {...args} variant="bauhaus" />
        <Avatar {...args} variant="beam" />
        <Avatar {...args} variant="pixel" />
        <Badge value={99} placement="top-end">
          <Avatar {...args} fallbackIcon="mdi mdi-react" />
        </Badge>
      </Fragment>;
  },
  args: {
    name: "Hyacinth Bucket",
    size: "2.5rem",
    onClick: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`_Avatar`,`Tester`]}));v();export{g as Tester,h as _Avatar,_ as __namedExportsOrder,p as default,v as n,l as t};