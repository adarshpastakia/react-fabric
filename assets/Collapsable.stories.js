import{j as e,c as o,a2 as u,e as a}from"./iframe-Ctw5u0Cj.js";import{f as r}from"./index4.js";const x={component:o,title:"@core/components/Collapsable",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Collapsable.test.tsx"]},decorators:[n=>e.jsx("div",{className:"max-w-2xl w-screen p-4",children:e.jsx(n,{})})]},s={render:n=>e.jsx(e.Fragment,{children:e.jsxs(o,{...n,children:[e.jsx(u,{children:r.commerce.productName()}),e.jsxs(a,{children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]})}),args:{}},c={render:n=>e.jsxs("div",{className:"divide-y outline rounded-capped",children:[e.jsxs(o,{...n,children:[e.jsx("p",{children:r.commerce.productName()}),e.jsxs(a,{className:"p-2",children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]}),e.jsxs(o,{...n,children:[e.jsx("p",{children:r.commerce.productName()}),e.jsxs(a,{className:"p-2",children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]}),e.jsxs(o,{...n,children:[e.jsx("p",{children:r.commerce.productName()}),e.jsxs(a,{className:"p-2",children:[e.jsx("p",{children:r.commerce.productDescription()}),e.jsx("p",{children:r.lorem.sentences(2)})]})]})]}),args:{iconAlign:"end"}};var l,t,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(t=s.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var m,d,i;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(d=c.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const j=["_Collapsable","Multiple"],f=Object.freeze(Object.defineProperty({__proto__:null,Multiple:c,_Collapsable:s,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{f as C,c as M,s as _};
