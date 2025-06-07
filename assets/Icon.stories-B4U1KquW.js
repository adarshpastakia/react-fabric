import{j as e,a4 as r,ad as _}from"./iframe-BcXNitKG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,S={component:r,title:"@core/components/Icon",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/icons/Icon.test.tsx"]},decorators:[n=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(n,{})})]},s={render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n}),e.jsx(r,{...n,icon:"W"}),e.jsx(r,{...n,icon:"WW"}),e.jsx(r,{...n,icon:"WWW"}),e.jsx(r,{...n,icon:"WWWW"}),e.jsx(_,{value:99,placement:"top-end",children:e.jsx(r,{...n})})]}),args:{size:"2.5rem",icon:"mdi mdi-react",onClick:t()}},o={render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,color:"primary"}),e.jsx(r,{...n,color:"accent"}),e.jsx(r,{...n,color:"info"}),e.jsx(r,{...n,color:"danger"}),e.jsx(r,{...n,color:"success"}),e.jsx(r,{...n,color:"warning"}),e.jsx(r,{...n,className:"bg-invert text-invert"}),e.jsx(r,{...n,color:"#9333ea"})]}),args:{size:"2.5rem",icon:"mdi mdi-react",onClick:t()}},c={render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,size:"xs"}),e.jsx(r,{...n,size:"sm"}),e.jsx(r,{...n}),e.jsx(r,{...n,size:"md"}),e.jsx(r,{...n,size:"lg"}),e.jsx(r,{...n,size:"xl"}),e.jsx(r,{...n,size:"2.5rem"})]}),args:{icon:"mdi mdi-react",onClick:t()}},a={render:n=>e.jsx(r,{...n}),args:{}};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  args: {}
}`,...(z=(W=a.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const f=["_Icon","Colors","Sizes","Tester"],F=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Sizes:c,Tester:a,_Icon:s,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{o as C,F as I,c as S,s as _};
