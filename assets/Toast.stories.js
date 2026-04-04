import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{D as a,G as o,K as s,Q as c,U as l,W as u,q as d,t as f}from"./src3.js";var p=t({_Toast:()=>v,__namedExportsOrder:()=>y,default:()=>_}),m,h,g,_,v,y,b=e((()=>{i(),m=n(),f(),a(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={component:o,subcomponents:{Message:s,Alert:d},title:`@core/components/Notifications`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Toast.test.tsx`]},decorators:[e=>(0,h.jsx)(l,{children:(0,h.jsx)(`div`,{className:`max-w-2xl p-4 flex gap-2 flex-wrap`,children:(0,h.jsx)(e,{})})})]},v={render:e=>{let{showToast:t}=u();if(!t)throw Error("Application not wrapped in `ApplicationProvider`");return(0,h.jsxs)(m.Fragment,{children:[(0,h.jsx)(c,{onClick:()=>t({...e}).then(g()),children:`Toast`}),(0,h.jsx)(c,{onClick:()=>t({...e,color:`danger`}).then(g()),children:`Error Toast`}),(0,h.jsx)(c,{onClick:()=>t({...e,color:`success`}).then(g()),children:`Success Toast`}),(0,h.jsx)(c,{onClick:()=>t({...e,color:`warning`}).then(g()),children:`Warning Toast`}),(0,h.jsx)(c,{onClick:()=>t({...e,color:`accent`,actions:(0,h.jsx)(c,{variant:`outline`,color:`accent`,value:`showLog`,children:`View Logs`})},0).then(g()),children:`With Action`})]})},args:{title:r.commerce.productName(),message:r.commerce.productDescription()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      showToast
    } = useNotificationService();
    if (!showToast) throw Error("Application not wrapped in \`ApplicationProvider\`");
    return <Fragment>
        <Button onClick={() => showToast({
        ...args
      }).then(fn())}>Toast</Button>
        <Button onClick={() => showToast({
        ...args,
        color: "danger"
      }).then(fn())}>
          Error Toast
        </Button>
        <Button onClick={() => showToast({
        ...args,
        color: "success"
      }).then(fn())}>
          Success Toast
        </Button>
        <Button onClick={() => showToast({
        ...args,
        color: "warning"
      }).then(fn())}>
          Warning Toast
        </Button>
        <Button onClick={() => showToast({
        ...args,
        color: "accent",
        actions: <Button variant="outline" color="accent" value="showLog">
                    View Logs
                  </Button>
      }, 0).then(fn())}>
          With Action
        </Button>
      </Fragment>;
  },
  args: {
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription()
  }
}`,...v.parameters?.docs?.source}}},y=[`_Toast`]}));b();export{v as _Toast,y as __namedExportsOrder,_ as default,b as n,p as t};