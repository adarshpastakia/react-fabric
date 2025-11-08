import{j as e,c as n,a2 as h,e as t}from"./iframe-DwvN93Ge.js";import{f as r}from"./index4.js";const g={component:n,title:"@core/components/Collapsable",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Collapsable.test.tsx"]},decorators:[s=>e.jsx("div",{className:"max-w-2xl w-screen p-4",children:e.jsx(s,{})})]},c={render:s=>e.jsx(e.Fragment,{children:e.jsxs(n,{...s,children:[e.jsx(h,{children:r.commerce.productName()}),e.jsxs(t,{children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]})}),args:{}},a={render:s=>e.jsxs("div",{className:"divide-y outline rounded-capped",children:[e.jsxs(n,{...s,children:[e.jsx("p",{children:r.commerce.productName()}),e.jsxs(t,{className:"p-2",children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]}),e.jsxs(n,{...s,children:[e.jsx("p",{children:r.commerce.productName()}),e.jsxs(t,{className:"p-2",children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]}),e.jsxs(n,{...s,children:[e.jsx("p",{children:r.commerce.productName()}),e.jsxs(t,{className:"p-2",children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]})]}),args:{iconAlign:"end"}},o={render:s=>e.jsx(n,{...s}),args:{}};var l,p,m;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Collapsable {...args}>
          <Title>{faker.commerce.productName()}</Title>
          <Content>
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
      </Fragment>;
  },
  args: {}
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <div className="divide-y outline rounded-capped">
        <Collapsable {...args}>
          <p>{faker.commerce.productName()}</p>
          <Content className="p-2">
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
        <Collapsable {...args}>
          <p>{faker.commerce.productName()}</p>
          <Content className="p-2">
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
        <Collapsable {...args}>
          <p>{faker.commerce.productName()}</p>
          <Content className="p-2">
            <p>{faker.commerce.productDescription()}</p>
            <p>{faker.lorem.sentences(2)}</p>
          </Content>
        </Collapsable>
      </div>;
  },
  args: {
    iconAlign: "end"
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var x,j,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Collapsable {...args} />,
  args: {}
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const b=["_Collapsable","Multiple","Tester"],k=Object.freeze(Object.defineProperty({__proto__:null,Multiple:a,Tester:o,_Collapsable:c,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{k as C,a as M,c as _};
