import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{Q as r,at as i,it as a,st as o,t as s,z as c}from"./src3.js";var l=t({Numbers:()=>m,Ping:()=>h,Tester:()=>g,_Badge:()=>p,__namedExportsOrder:()=>_,default:()=>f}),u,d,f,p,m,h,g,_,v=e((()=>{u=n(),s(),d=n(),f={component:a,title:`@core/components/Badge`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/badge/Badge.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,d.jsx)(e,{})})]},p={render:e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{...e,children:(0,d.jsx)(r,{as:`a`,children:`Button with Badge`})}),(0,d.jsx)(a,{...e,children:(0,d.jsx)(c,{children:`Card with Badge`})}),(0,d.jsx)(a,{...e,children:(0,d.jsx)(i,{size:`3rem`,icon:`mdi mdi-react`})}),(0,d.jsx)(a,{...e,children:(0,d.jsx)(o,{size:`3rem`,name:`Avatar`})})]}),args:{value:`New`,placement:`top`}},m={render:e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{...e,children:(0,d.jsx)(r,{as:`a`,children:`Button with Badge`})}),(0,d.jsx)(a,{...e,children:(0,d.jsx)(c,{children:`Card with Badge`})})]}),args:{value:99,max:45,className:`bg-accent-500 text-invert`}},h={render:e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{...e,className:`bg-danger-500`,children:(0,d.jsx)(r,{as:`a`,children:`Button with Badge`})}),(0,d.jsx)(a,{...e,icon:`mdi mdi-star`,className:`bg-transparent before:bg-warning-500`,children:(0,d.jsx)(c,{children:`Card with Badge`})})]}),args:{ping:!0}},g={render:e=>(0,d.jsx)(a,{...e}),args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Badge {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`_Badge`,`Numbers`,`Ping`,`Tester`]}));v();export{m as Numbers,h as Ping,g as Tester,p as _Badge,_ as __namedExportsOrder,f as default,v as n,l as t};