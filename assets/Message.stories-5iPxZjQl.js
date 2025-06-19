import{j as e,aD as l,aC as m,a3 as o}from"./iframe-DL5PLccW.js";import{f as a}from"./index-CaHJoDsz.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,h={component:l,title:"@core/components/Notifications",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Message.test.tsx"]},decorators:[n=>e.jsx("div",{className:"max-w-2xl p-4 flex gap-2 flex-wrap",children:e.jsx(n,{})})]},t={render:n=>{const{showMessage:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s({...n}).then(r()),children:"Simple Message"}),e.jsx(o,{onClick:()=>s({...n,color:"danger"}).then(r()),children:"Error Message"}),e.jsx(o,{onClick:()=>s({...n,color:"success"}).then(r()),children:"Success Message"}),e.jsx(o,{onClick:()=>s({...n,color:"warning"}).then(r()),children:"Warning Message"})]})},args:{title:a.commerce.productAdjective(),message:a.commerce.productName()}};var c,i,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(i=t.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const p=["_Message"];export{t as _Message,p as __namedExportsOrder,h as default};
