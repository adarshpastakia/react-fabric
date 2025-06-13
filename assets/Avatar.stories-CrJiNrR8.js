import{j as a,ac as l,ab as r,ad as v}from"./iframe-CVyMRGSP.js";import{f as p}from"./index-CaHJoDsz.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={component:r,title:"@core/components/Avatar",subcomponents:{AvatarGroup:l},parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/avatar/Avatar.test.tsx"]},decorators:[e=>a.jsx("div",{className:"flex gap-2 items-center p-4",children:a.jsx(e,{})})]},g=p.image.avatarGitHub(),t={render:e=>a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,variant:"text"}),a.jsx(r,{...e,fallbackIcon:"mdi mdi-react"}),a.jsx(r,{...e,avatar:g}),a.jsx(r,{...e,variant:"bauhaus"}),a.jsx(r,{...e,variant:"beam"}),a.jsx(r,{...e,variant:"pixel"}),a.jsx(v,{value:99,placement:"top-end",children:a.jsx(r,{...e,fallbackIcon:"mdi mdi-react"})})]}),args:{name:"Hyacinth Bucket",size:"2.5rem",onClick:u()}},n={render:e=>a.jsx(r,{...e}),args:{}};var s,o,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Avatar {...args} />,
  args: {}
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["_Avatar","Tester"],b=Object.freeze(Object.defineProperty({__proto__:null,Tester:n,_Avatar:t,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{b as A,t as _};
