import{j as o,aA as u,aD as p,aE as d,aC as h,a3 as e}from"./iframe-DL5PLccW.js";import{f as a}from"./index-CaHJoDsz.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,m={component:d,subcomponents:{Message:p,Alert:u},title:"@core/components/Notifications",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Toast.test.tsx"]},decorators:[n=>o.jsx("div",{className:"max-w-2xl p-4 flex gap-2 flex-wrap",children:o.jsx(n,{})})]},s={render:n=>{const{showToast:t}=h();if(!t)throw Error("Application not wrapped in `ApplicationProvider`");return o.jsxs(o.Fragment,{children:[o.jsx(e,{onClick:()=>t({...n}).then(r()),children:"Toast"}),o.jsx(e,{onClick:()=>t({...n,color:"danger"}).then(r()),children:"Error Toast"}),o.jsx(e,{onClick:()=>t({...n,color:"success"}).then(r()),children:"Success Toast"}),o.jsx(e,{onClick:()=>t({...n,color:"warning"}).then(r()),children:"Warning Toast"}),o.jsx(e,{onClick:()=>t({...n,color:"accent",actions:o.jsx(e,{variant:"outline",color:"accent",value:"showLog",children:"View Logs"})},0).then(r()),children:"With Action"})]})},args:{title:a.commerce.productName(),message:a.commerce.productDescription()}};var c,i,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const T=["_Toast"],w=Object.freeze(Object.defineProperty({__proto__:null,_Toast:s,__namedExportsOrder:T,default:m},Symbol.toStringTag,{value:"Module"}));export{w as T,s as _};
