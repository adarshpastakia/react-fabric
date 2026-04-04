import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{J as a,N as o,h as s,t as c}from"./src3.js";var l=t({Multiple:()=>m,Tester:()=>h,_Collapsable:()=>p,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g,_=e((()=>{i(),u=n(),c(),d=n(),f={component:o,title:`@core/components/Collapsable`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Collapsable.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`max-w-2xl w-screen p-4`,children:(0,d.jsx)(e,{})})]},p={render:e=>(0,d.jsx)(u.Fragment,{children:(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(a,{children:r.commerce.productName()}),(0,d.jsxs)(s,{children:[(0,d.jsx)(`p`,{children:r.commerce.productDescription()}),(0,d.jsx)(`p`,{children:r.lorem.sentences(2)})]})]})}),args:{}},m={render:e=>(0,d.jsxs)(`div`,{className:`divide-y outline rounded-capped`,children:[(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(`p`,{children:r.commerce.productName()}),(0,d.jsxs)(s,{className:`p-2`,children:[(0,d.jsx)(`p`,{children:r.commerce.productDescription()}),(0,d.jsx)(`p`,{children:r.lorem.sentences(2)})]})]}),(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(`p`,{children:r.commerce.productName()}),(0,d.jsxs)(s,{className:`p-2`,children:[(0,d.jsx)(`p`,{children:r.commerce.productDescription()}),(0,d.jsx)(`p`,{children:r.lorem.sentences(2)})]})]}),(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(`p`,{children:r.commerce.productName()}),(0,d.jsxs)(s,{className:`p-2`,children:[(0,d.jsx)(`p`,{children:r.commerce.productDescription()}),(0,d.jsx)(`p`,{children:r.lorem.sentences(2)})]})]})]}),args:{iconAlign:`end`}},h={render:e=>(0,d.jsx)(o,{...e}),args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Collapsable {...args} />,
  args: {}
}`,...h.parameters?.docs?.source}}},g=[`_Collapsable`,`Multiple`,`Tester`]}));_();export{m as Multiple,h as Tester,p as _Collapsable,g as __namedExportsOrder,f as default,_ as n,l as t};