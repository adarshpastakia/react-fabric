import{j as e,ao as n,ad as R}from"./iframe-DL5PLccW.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,k={component:n,title:"@core/components/Chip",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/chip/Chip.test.tsx"]},decorators:[r=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(r,{})})]},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,icon:"mdi mdi-react"}),e.jsx(n,{...r,children:"Tag Label"}),e.jsx(n,{...r,icon:"mdi mdi-react",children:"Tag Label"}),e.jsx(R,{value:99,placement:"top-end",children:e.jsx(n,{...r,children:"Tag Label"})})]}),args:{}},s={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,color:"primary"}),e.jsx(n,{...r,color:"accent"}),e.jsx(n,{...r,color:"info"}),e.jsx(n,{...r,color:"danger"}),e.jsx(n,{...r,color:"success"}),e.jsx(n,{...r,color:"warning"}),e.jsx(n,{...r,color:"#9c88ff"})]}),args:{children:"Tag Label",icon:"mdi mdi-react"}},i={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,size:"xs"}),e.jsx(n,{...r,size:"sm"}),e.jsx(n,{...r}),e.jsx(n,{...r,size:"md"}),e.jsx(n,{...r,size:"lg"}),e.jsx(n,{...r,size:"xl"})]}),args:{children:"Tag Label",icon:"mdi mdi-react"}},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,variant:void 0}),e.jsx(n,{...r,variant:"outline"}),e.jsx(n,{...r,variant:"solid"})]}),args:{children:"Tag Label",icon:"mdi mdi-react"}},c={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,disabled:!0,onRemove:void 0,children:"Disabled"}),e.jsx(n,{...r,onClick:void 0,onRemove:void 0,children:"Normal"}),e.jsx(n,{...r,onRemove:void 0,children:"Clickable"}),e.jsx(n,{...r,onClick:void 0,children:"Removable"})]}),args:{children:"Click Me!",icon:"mdi mdi-react",onClick:d(),onRemove:d()}},t={render:r=>e.jsx(n,{...r}),args:{}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} icon="mdi mdi-react" />
        <Chip {...args}>Tag Label</Chip>
        <Chip {...args} icon="mdi mdi-react">
          Tag Label
        </Chip>
        <Badge value={99} placement="top-end">
          <Chip {...args}>Tag Label</Chip>
        </Badge>
      </Fragment>;
  },
  args: {}
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} color="primary" />
        <Chip {...args} color="accent" />
        <Chip {...args} color="info" />
        <Chip {...args} color="danger" />
        <Chip {...args} color="success" />
        <Chip {...args} color="warning" />
        <Chip {...args} color="#9c88ff" />
      </Fragment>;
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react"
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var u,x,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} size="xs" />
        <Chip {...args} size="sm" />
        <Chip {...args} />
        <Chip {...args} size="md" />
        <Chip {...args} size="lg" />
        <Chip {...args} size="xl" />
      </Fragment>;
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react"
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,b,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} variant={undefined} />
        <Chip {...args} variant="outline" />
        <Chip {...args} variant="solid" />
      </Fragment>;
  },
  args: {
    children: "Tag Label",
    icon: "mdi mdi-react"
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,T,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Chip {...args} disabled onRemove={undefined}>
          Disabled
        </Chip>
        <Chip {...args} onClick={undefined} onRemove={undefined}>
          Normal
        </Chip>
        <Chip {...args} onRemove={undefined}>
          Clickable
        </Chip>
        <Chip {...args} onClick={undefined}>
          Removable
        </Chip>
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
    onClick: fn(),
    onRemove: fn()
  }
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var _,z,L;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Chip {...args} />,
  args: {}
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const y=["_Chip","Colors","Sizes","Styles","States","Tester"],B=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,Sizes:i,States:c,Styles:o,Tester:t,_Chip:a,__namedExportsOrder:y,default:k},Symbol.toStringTag,{value:"Module"}));export{B as C,o as S,a as _,s as a,i as b,c};
