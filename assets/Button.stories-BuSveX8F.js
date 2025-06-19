import{j as n,a3 as r,ad as u,a6 as m}from"./iframe-DL5PLccW.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,K={component:r,title:"@core/components/Button",parameters:{layout:"centered",controls:{exclude:/^(children|as)/},jest:["core/tests/buttons/Button.test.tsx"]},decorators:[e=>n.jsx("div",{className:"flex gap-2 items-center p-4",children:n.jsx(e,{})})]},s={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,spinOnHover:!0,icon:"mdi mdi-react","aria-label":"Click Me!"}),n.jsx(r,{...e,as:"a",children:"Click Me!"}),n.jsx(r,{...e,icon:"mdi mdi-react",children:"Click Me!"}),n.jsx(r,{...e,icon:"mdi mdi-react",altIcon:"mdi mdi-chevron-down",children:"Click Me!"})]}),args:{}},o={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e}),n.jsx(r,{...e,color:"accent"}),n.jsx(r,{...e,color:"info"}),n.jsx(r,{...e,color:"danger"}),n.jsx(r,{...e,color:"success"}),n.jsx(r,{...e,color:"warning"})]}),args:{children:"Click Me!",icon:"mdi mdi-react"}},a={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,size:"xs"}),n.jsx(r,{...e,size:"sm"}),n.jsx(r,{...e}),n.jsx(r,{...e,size:"md"}),n.jsx(r,{...e,size:"lg"}),n.jsx(r,{...e,size:"xl"})]}),args:{children:"Click Me!",icon:"mdi mdi-react"}},c={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,variant:void 0}),n.jsx(r,{...e,variant:"outline"}),n.jsx(r,{...e,variant:"soft"}),n.jsx(r,{...e,variant:"solid"}),n.jsx(r,{...e,variant:"link"})]}),args:{children:"Click Me!",icon:"mdi mdi-react"}},i={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,disabled:!0}),n.jsx(r,{...e,loading:!0}),n.jsx(r,{...e,active:!0})]}),args:{children:"Click Me!",icon:"mdi mdi-react"}},d={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...e,badge:{value:999,max:99},altIcon:"mdi mdi-chevron-down"}),n.jsx(u,{value:"TS",placement:"top-start",children:n.jsx(m,{content:"Tooltip",children:n.jsx(r,{...e})})}),n.jsx(m,{content:"Tooltip",children:n.jsx(u,{ping:!0,className:"bg-success-500",children:n.jsx(r,{...e})})})]}),args:{children:"Click Me!",icon:"mdi mdi-react"}},t={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(m,{content:"Tooltip",children:n.jsx(r,{...e})}),n.jsx(r,{...e,color:"success"}),n.jsx(r,{...e,color:"danger"})]}),args:{children:"Click Me!",icon:"mdi mdi-react",actionMessage:"Action completed",onClick:e=>(D()(e),new Promise(R=>{setTimeout(()=>{R(1)},2e3)}))}},l={render:e=>n.jsx(r,{...e}),args:{}};var g,p,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} spinOnHover icon="mdi mdi-react" aria-label="Click Me!" />
        <Button {...args} as="a">
          Click Me!
        </Button>
        <Button {...args} icon="mdi mdi-react">
          Click Me!
        </Button>
        <Button {...args} icon="mdi mdi-react" altIcon="mdi mdi-chevron-down">
          Click Me!
        </Button>
      </Fragment>;
  },
  args: {}
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var j,B,h;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} />
        <Button {...args} color="accent" />
        <Button {...args} color="info" />
        <Button {...args} color="danger" />
        <Button {...args} color="success" />
        <Button {...args} color="warning" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...(h=(B=o.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var v,C,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} size="xs" />
        <Button {...args} size="sm" />
        <Button {...args} />
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,M,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} variant={undefined} />
        <Button {...args} variant="outline" />
        <Button {...args} variant="soft" />
        <Button {...args} variant="solid" />
        <Button {...args} variant="link" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var F,_,b;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} disabled />
        <Button {...args} loading />
        <Button {...args} active />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var z,f,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} badge={{
        value: 999,
        max: 99
      }} altIcon="mdi mdi-chevron-down" />
        <Badge value="TS" placement="top-start">
          <Tooltip content="Tooltip">
            <Button {...args} />
          </Tooltip>
        </Badge>
        <Tooltip content="Tooltip">
          <Badge ping className="bg-success-500">
            <Button {...args} />
          </Badge>
        </Tooltip>
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...(O=(f=d.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var w,y,A,E,I;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip content="Tooltip">
          <Button {...args} />
        </Tooltip>
        <Button {...args} color="success" />
        <Button {...args} color="danger" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
    actionMessage: "Action completed",
    onClick: (e: AnyObject) => {
      fn()(e);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      });
    }
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"Show action completed animation",...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var N,P,H;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Button {...args} />,
  args: {}
}`,...(H=(P=l.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const L=["_Button","Colors","Sizes","Styles","States","Badges","ActionState","Tester"],Y=Object.freeze(Object.defineProperty({__proto__:null,ActionState:t,Badges:d,Colors:o,Sizes:a,States:i,Styles:c,Tester:l,_Button:s,__namedExportsOrder:L,default:K},Symbol.toStringTag,{value:"Module"}));export{t as A,Y as B,o as C,c as S,s as _,a,i as b,d as c};
