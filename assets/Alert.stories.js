import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{r as n,t as r}from"./dist28.js";import{J as i,N as a,O as o,Q as s,n as c,t as l}from"./src3.js";var u,d,f,p,m,h,g=e((()=>{r(),u=t(),l(),o(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={component:a,title:`@core/components/Notifications`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Alert.test.tsx`]},decorators:[e=>(0,d.jsx)(c,{children:(0,d.jsx)(`div`,{className:`max-w-2xl p-4 flex gap-2 flex-wrap`,children:(0,d.jsx)(e,{})})})]},m={render:e=>{let{showAlert:t}=i();return(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(s,{onClick:()=>t({...e}).then(f()),children:`Simple Alert`}),(0,d.jsx)(s,{onClick:()=>t({...e,color:`danger`}).then(f()),children:`Error Alert`}),(0,d.jsx)(s,{onClick:()=>t({...e,color:`success`}).then(f()),children:`Success Alert`}),(0,d.jsx)(s,{onClick:()=>t({...e,color:`warning`}).then(f()),children:`Warning Alert`})]})},args:{title:n.commerce.productAdjective(),message:n.commerce.productName()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      showAlert
    } = useNotificationService();
    return <Fragment>
        <Button onClick={() => showAlert({
        ...args
      }).then(fn())}>
          Simple Alert
        </Button>
        <Button onClick={() => showAlert({
        ...args,
        color: "danger"
      }).then(fn())}>
          Error Alert
        </Button>
        <Button onClick={() => showAlert({
        ...args,
        color: "success"
      }).then(fn())}>
          Success Alert
        </Button>
        <Button onClick={() => showAlert({
        ...args,
        color: "warning"
      }).then(fn())}>
          Warning Alert
        </Button>
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    message: faker.commerce.productName()
  }
}`,...m.parameters?.docs?.source}}},h=[`_Alert`]}));g();export{m as _Alert,h as __namedExportsOrder,p as default,g as t};