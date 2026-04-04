import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{Q as a,S as o,j as s,t as c,z as l}from"./src3.js";var u=t({CardEmpty:()=>h,PanelEmpty:()=>g,_EmptyContent:()=>m,__namedExportsOrder:()=>_,default:()=>p}),d,f,p,m,h,g,_,v=e((()=>{i(),d=n(),c(),f=n(),p={component:s,title:`@core/components/Empty Content`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/EmptyContent.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,f.jsx)(e,{})})]},m={render:e=>(0,f.jsx)(d.Fragment,{children:(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(a,{variant:`link`,children:`Previous`}),(0,f.jsx)(a,{variant:`link`,children:`Next`})]})}),args:{title:r.commerce.productName(),message:r.commerce.productDescription()}},h={render:e=>(0,f.jsx)(l,{children:(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(a,{variant:`link`,children:`Previous`}),(0,f.jsx)(a,{variant:`link`,children:`Next`})]})}),args:{icon:`mdi mdi-react`,title:r.commerce.productName(),message:r.commerce.productDescription()}},g={render:e=>(0,f.jsx)(o,{title:`Panel Title`,children:(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(a,{variant:`link`,children:`Previous`}),(0,f.jsx)(a,{variant:`link`,children:`Next`})]})}),args:{title:r.commerce.productName(),message:r.commerce.productDescription()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`_EmptyContent`,`CardEmpty`,`PanelEmpty`]}));v();export{h as CardEmpty,g as PanelEmpty,m as _EmptyContent,_ as __namedExportsOrder,p as default,v as n,u as t};