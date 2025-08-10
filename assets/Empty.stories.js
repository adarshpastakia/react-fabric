import{j as e,ax as c,a3 as r,ae as j,aw as y}from"./iframe-DZ_tjZ0H.js";import{f as n}from"./index4.js";const E={component:c,title:"@core/components/Empty Content",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/EmptyContent.test.tsx"]},decorators:[t=>e.jsx("div",{className:"max-w-xl p-4",children:e.jsx(t,{})})]},a={render:t=>e.jsx(e.Fragment,{children:e.jsxs(c,{...t,children:[e.jsx(r,{variant:"link",children:"Previous"}),e.jsx(r,{variant:"link",children:"Next"})]})}),args:{title:n.commerce.productName(),message:n.commerce.productDescription()}},o={render:t=>e.jsx(j,{children:e.jsxs(c,{...t,children:[e.jsx(r,{variant:"link",children:"Previous"}),e.jsx(r,{variant:"link",children:"Next"})]})}),args:{icon:"mdi mdi-react",title:n.commerce.productName(),message:n.commerce.productDescription()}},s={render:t=>e.jsx(y,{title:"Panel Title",children:e.jsxs(c,{...t,children:[e.jsx(r,{variant:"link",children:"Previous"}),e.jsx(r,{variant:"link",children:"Next"})]})}),args:{title:n.commerce.productName(),message:n.commerce.productDescription()}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <EmptyContent {...args}>
          <Button variant="link">Previous</Button>
          <Button variant="link">Next</Button>
        </EmptyContent>
      </Fragment>;
  },
  args: {
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription()
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <Card>
        <EmptyContent {...args}>
          <Button variant="link">Previous</Button>
          <Button variant="link">Next</Button>
        </EmptyContent>
      </Card>;
  },
  args: {
    icon: "mdi mdi-react",
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription()
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,g,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Panel title="Panel Title">
        <EmptyContent {...args}>
          <Button variant="link">Previous</Button>
          <Button variant="link">Next</Button>
        </EmptyContent>
      </Panel>;
  },
  args: {
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription()
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const k=["_EmptyContent","CardEmpty","PanelEmpty"],h=Object.freeze(Object.defineProperty({__proto__:null,CardEmpty:o,PanelEmpty:s,_EmptyContent:a,__namedExportsOrder:k,default:E},Symbol.toStringTag,{value:"Module"}));export{o as C,h as E,s as P,a as _};
