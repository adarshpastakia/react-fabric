import{j as n,a4 as r,ad as _}from"./iframe-DZ_tjZ0H.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,S={component:r,title:"@core/components/Icon",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/icons/Icon.test.tsx"]},decorators:[e=>n.jsx("div",{className:"flex gap-2 items-center p-4",children:n.jsx(e,{})})]},s={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e}),n.jsx(r,{...e,icon:"W"}),n.jsx(r,{...e,icon:"WW"}),n.jsx(r,{...e,icon:"WWW"}),n.jsx(r,{...e,icon:"WWWW"}),n.jsx(_,{value:99,placement:"top-end",children:n.jsx(r,{...e})})]}),args:{size:"2.5rem",icon:"mdi mdi-react",onClick:t()}},o={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,color:"primary"}),n.jsx(r,{...e,color:"accent"}),n.jsx(r,{...e,color:"info"}),n.jsx(r,{...e,color:"danger"}),n.jsx(r,{...e,color:"success"}),n.jsx(r,{...e,color:"warning"}),n.jsx(r,{...e,className:"bg-invert text-invert"}),n.jsx(r,{...e,color:"#9333ea"})]}),args:{size:"2.5rem",icon:"mdi mdi-react",onClick:t()}},c={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,size:"xs"}),n.jsx(r,{...e,size:"sm"}),n.jsx(r,{...e}),n.jsx(r,{...e,size:"md"}),n.jsx(r,{...e,size:"lg"}),n.jsx(r,{...e,size:"xl"}),n.jsx(r,{...e,size:"2.5rem"})]}),args:{icon:"mdi mdi-react",onClick:t()}},a={render:e=>n.jsx(r,{...e}),args:{icon:"mdi mdi-react"}};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Icon {...args} />
        <Icon {...args} icon="W" />
        <Icon {...args} icon="WW" />
        <Icon {...args} icon="WWW" />
        <Icon {...args} icon="WWWW" />
        <Badge value={99} placement="top-end">
          <Icon {...args} />
        </Badge>
      </Fragment>;
  },
  args: {
    size: "2.5rem",
    icon: "mdi mdi-react",
    onClick: fn()
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,g,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Icon {...args} color="primary" />
        <Icon {...args} color="accent" />
        <Icon {...args} color="info" />
        <Icon {...args} color="danger" />
        <Icon {...args} color="success" />
        <Icon {...args} color="warning" />
        <Icon {...args} className="bg-invert text-invert" />
        <Icon {...args} color="#9333ea" />
      </Fragment>;
  },
  args: {
    size: "2.5rem",
    icon: "mdi mdi-react",
    onClick: fn()
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var j,p,u;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Icon {...args} size="xs" />
        <Icon {...args} size="sm" />
        <Icon {...args} />
        <Icon {...args} size="md" />
        <Icon {...args} size="lg" />
        <Icon {...args} size="xl" />
        <Icon {...args} size="2.5rem" />
      </Fragment>;
  },
  args: {
    icon: "mdi mdi-react",
    onClick: fn()
  }
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var I,W,z;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Icon {...args} />,
  args: {
    icon: "mdi mdi-react"
  }
}`,...(z=(W=a.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const f=["_Icon","Colors","Sizes","Tester"],F=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Sizes:c,Tester:a,_Icon:s,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{o as C,F as I,c as S,s as _};
