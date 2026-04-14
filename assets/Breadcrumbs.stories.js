import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{P as a,at as o,et as s,rt as c,t as l}from"./src3.js";var u=n({Styles:()=>h,Tester:()=>g,_Breadcrumbs:()=>m,__namedExportsOrder:()=>_,default:()=>p}),d,f,p,m,h,g,_,v=t((()=>{d=e(r()),l(),f=i(),p={component:s,title:`@core/components/Breadcrumbs`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/breadcrumbs/Breadcrumb.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`p-4`,children:(0,f.jsx)(e,{})})]},m={render:e=>(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(c,{children:(0,f.jsx)(o,{icon:`mdi mdi-home`})}),(0,f.jsx)(c,{children:`Page 1`}),(0,f.jsx)(c,{children:`Page 2`}),(0,f.jsx)(c,{children:`Page 3`}),(0,f.jsx)(c,{children:`Page 4`}),(0,f.jsx)(c,{children:`Page 5`}),(0,f.jsx)(c,{children:`Page 6`}),(0,f.jsx)(c,{children:`Page 7`}),(0,f.jsx)(c,{children:`Page 8`}),(0,f.jsx)(c,{children:`Page 9`}),(0,f.jsx)(c,{children:`Page 10`}),(0,f.jsx)(c,{children:`Page 11`}),(0,f.jsx)(c,{children:`Page 12`})]}),args:{}},h={render:e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(a,{children:`Classic`}),(0,f.jsxs)(s,{...e,variant:`classic`,children:[(0,f.jsx)(c,{children:(0,f.jsx)(o,{icon:`mdi mdi-home`})}),(0,f.jsx)(c,{children:`Page 1`}),(0,f.jsx)(c,{children:`Page 2`}),(0,f.jsx)(c,{children:`Page 3`}),(0,f.jsx)(c,{children:`Page 4`}),(0,f.jsx)(c,{children:`Page 5`}),(0,f.jsx)(c,{children:`Page 6`}),(0,f.jsx)(c,{children:`Page 7`}),(0,f.jsx)(c,{children:`Page 8`}),(0,f.jsx)(c,{children:`Page 9`}),(0,f.jsx)(c,{children:`Page 10`}),(0,f.jsx)(c,{children:`Page 11`}),(0,f.jsx)(c,{children:`Page 12`})]}),(0,f.jsx)(a,{className:`mt-6`,children:`Modern`}),(0,f.jsxs)(s,{...e,variant:`modern`,children:[(0,f.jsx)(c,{children:(0,f.jsx)(o,{icon:`mdi mdi-home`})}),(0,f.jsx)(c,{children:`Page 1`}),(0,f.jsx)(c,{children:`Page 2`}),(0,f.jsx)(c,{children:`Page 3`}),(0,f.jsx)(c,{children:`Page 4`}),(0,f.jsx)(c,{children:`Page 5`}),(0,f.jsx)(c,{children:`Page 6`}),(0,f.jsx)(c,{children:`Page 7`}),(0,f.jsx)(c,{children:`Page 8`}),(0,f.jsx)(c,{children:`Page 9`}),(0,f.jsx)(c,{children:`Page 10`}),(0,f.jsx)(c,{children:`Page 11`}),(0,f.jsx)(c,{children:`Page 12`})]})]}),args:{}},g={render:e=>(0,f.jsx)(s,{...e}),args:{}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Breadcrumbs {...args}>
        <Anchor>
          <Icon icon="mdi mdi-home" />
        </Anchor>
        <Anchor>Page 1</Anchor>
        <Anchor>Page 2</Anchor>
        <Anchor>Page 3</Anchor>
        <Anchor>Page 4</Anchor>
        <Anchor>Page 5</Anchor>
        <Anchor>Page 6</Anchor>
        <Anchor>Page 7</Anchor>
        <Anchor>Page 8</Anchor>
        <Anchor>Page 9</Anchor>
        <Anchor>Page 10</Anchor>
        <Anchor>Page 11</Anchor>
        <Anchor>Page 12</Anchor>
      </Breadcrumbs>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Title>Classic</Title>
        <Breadcrumbs {...args} variant="classic">
          <Anchor>
            <Icon icon="mdi mdi-home" />
          </Anchor>
          <Anchor>Page 1</Anchor>
          <Anchor>Page 2</Anchor>
          <Anchor>Page 3</Anchor>
          <Anchor>Page 4</Anchor>
          <Anchor>Page 5</Anchor>
          <Anchor>Page 6</Anchor>
          <Anchor>Page 7</Anchor>
          <Anchor>Page 8</Anchor>
          <Anchor>Page 9</Anchor>
          <Anchor>Page 10</Anchor>
          <Anchor>Page 11</Anchor>
          <Anchor>Page 12</Anchor>
        </Breadcrumbs>
        <Title className="mt-6">Modern</Title>
        <Breadcrumbs {...args} variant="modern">
          <Anchor>
            <Icon icon="mdi mdi-home" />
          </Anchor>
          <Anchor>Page 1</Anchor>
          <Anchor>Page 2</Anchor>
          <Anchor>Page 3</Anchor>
          <Anchor>Page 4</Anchor>
          <Anchor>Page 5</Anchor>
          <Anchor>Page 6</Anchor>
          <Anchor>Page 7</Anchor>
          <Anchor>Page 8</Anchor>
          <Anchor>Page 9</Anchor>
          <Anchor>Page 10</Anchor>
          <Anchor>Page 11</Anchor>
          <Anchor>Page 12</Anchor>
        </Breadcrumbs>
      </Fragment>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`_Breadcrumbs`,`Styles`,`Tester`]}));v();export{h as Styles,g as Tester,m as _Breadcrumbs,_ as __namedExportsOrder,p as default,v as n,u as t};