import{j as e,aA as m,aB as d,aC as u,a3 as t}from"./iframe-BcXNitKG.js";import{f as c}from"./index-CaHJoDsz.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,A={component:m,title:"@core/components/Notifications",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Alert.test.tsx"]},decorators:[n=>e.jsx(d,{children:e.jsx("div",{className:"max-w-2xl p-4 flex gap-2 flex-wrap",children:e.jsx(n,{})})})]},s={render:n=>{const{showAlert:r}=u();return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r({...n}).then(o()),children:"Simple Alert"}),e.jsx(t,{onClick:()=>r({...n,color:"danger"}).then(o()),children:"Error Alert"}),e.jsx(t,{onClick:()=>r({...n,color:"success"}).then(o()),children:"Success Alert"}),e.jsx(t,{onClick:()=>r({...n,color:"warning"}).then(o()),children:"Warning Alert"})]})},args:{title:c.commerce.productAdjective(),message:c.commerce.productName()}};var a,l,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const x=["_Alert"];export{s as _Alert,x as __namedExportsOrder,A as default};
