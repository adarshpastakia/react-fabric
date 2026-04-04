import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{r as n,t as r}from"./dist28.js";import{D as i,K as a,Q as o,U as s,W as c,t as l}from"./src3.js";var u,d,f,p,m,h,g=e((()=>{r(),u=t(),l(),i(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={component:a,title:`@core/components/Notifications`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Message.test.tsx`]},decorators:[e=>(0,d.jsx)(s,{children:(0,d.jsx)(`div`,{className:`max-w-2xl p-4 flex gap-2 flex-wrap`,children:(0,d.jsx)(e,{})})})]},m={render:e=>{let{showMessage:t}=c();return(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(o,{onClick:()=>t({...e}).then(f()),children:`Simple Message`}),(0,d.jsx)(o,{onClick:()=>t({...e,color:`danger`}).then(f()),children:`Error Message`}),(0,d.jsx)(o,{onClick:()=>t({...e,color:`success`}).then(f()),children:`Success Message`}),(0,d.jsx)(o,{onClick:()=>t({...e,color:`warning`}).then(f()),children:`Warning Message`})]})},args:{title:n.commerce.productAdjective(),message:n.commerce.productName()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      showMessage
    } = useNotificationService();
    return <Fragment>
        <Button onClick={() => showMessage({
        ...args
      }).then(fn())}>
          Simple Message
        </Button>
        <Button onClick={() => showMessage({
        ...args,
        color: "danger"
      }).then(fn())}>
          Error Message
        </Button>
        <Button onClick={() => showMessage({
        ...args,
        color: "success"
      }).then(fn())}>
          Success Message
        </Button>
        <Button onClick={() => showMessage({
        ...args,
        color: "warning"
      }).then(fn())}>
          Warning Message
        </Button>
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    message: faker.commerce.productName()
  }
}`,...m.parameters?.docs?.source}}},h=[`_Message`]}));g();export{m as _Message,h as __namedExportsOrder,p as default,g as t};