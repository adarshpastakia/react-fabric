import{j as e,ad as r,a3 as g,ae as c,a4 as C,ab as v}from"./iframe-CVyMRGSP.js";const N={component:r,title:"@core/components/Badge",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/badge/Badge.test.tsx"]},decorators:[a=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(a,{})})]},n={render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,children:e.jsx(g,{as:"a",children:"Button with Badge"})}),e.jsx(r,{...a,children:e.jsx(c,{children:"Card with Badge"})}),e.jsx(r,{...a,children:e.jsx(C,{size:"3rem",icon:"mdi mdi-react"})}),e.jsx(r,{...a,children:e.jsx(v,{size:"3rem",name:"Avatar"})})]}),args:{value:"New",placement:"top"}},s={render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,children:e.jsx(g,{as:"a",children:"Button with Badge"})}),e.jsx(r,{...a,children:e.jsx(c,{children:"Card with Badge"})})]}),args:{value:99,max:45,className:"bg-accent-500 text-invert"}},t={render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,className:"bg-danger-500",children:e.jsx(g,{as:"a",children:"Button with Badge"})}),e.jsx(r,{...a,icon:"mdi mdi-star",className:"bg-transparent before:bg-warning-500",children:e.jsx(c,{children:"Card with Badge"})})]}),args:{ping:!0}},d={render:a=>e.jsx(r,{...a}),args:{}};var o,i,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Badge {...args}>
          <Button as="a">Button with Badge</Button>
        </Badge>
        <Badge {...args}>
          <Card>Card with Badge</Card>
        </Badge>
        <Badge {...args}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Badge>
        <Badge {...args}>
          <Avatar size="3rem" name="Avatar" />
        </Badge>
      </Fragment>;
  },
  args: {
    value: "New",
    placement: "top"
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var B,l,u;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Badge {...args}>
          <Button as="a">Button with Badge</Button>
        </Badge>
        <Badge {...args}>
          <Card>Card with Badge</Card>
        </Badge>
      </Fragment>;
  },
  args: {
    value: 99,
    max: 45,
    className: "bg-accent-500 text-invert"
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,x,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Badge {...args} className="bg-danger-500">
          <Button as="a">Button with Badge</Button>
        </Badge>
        <Badge {...args} icon="mdi mdi-star" className="bg-transparent before:bg-warning-500">
          <Card>Card with Badge</Card>
        </Badge>
      </Fragment>;
  },
  args: {
    ping: true
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,b,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Badge {...args} />,
  args: {}
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const F=["_Badge","Numbers","Ping","Tester"],f=Object.freeze(Object.defineProperty({__proto__:null,Numbers:s,Ping:t,Tester:d,_Badge:n,__namedExportsOrder:F,default:N},Symbol.toStringTag,{value:"Module"}));export{f as B,s as N,t as P,n as _};
