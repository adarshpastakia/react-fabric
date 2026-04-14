import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{A as a,M as o,Q as s,a as c,g as l,r as u,t as d}from"./src3.js";var f=t({_Modal:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v,y=e((()=>{i(),p=n(),d(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:a,subcomponents:{Flyout:o},title:`@core/components/Overlays`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Modal.test.tsx`]},decorators:[e=>(0,m.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,m.jsx)(e,{})})]},_={render:e=>{let[t,n]=u(e=>(0,m.jsx)(a,{...e,children:(0,m.jsx)(l,{children:(0,m.jsx)(c,{children:r.lorem.paragraphs(9)})})}));return(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(s,{onClick:()=>n({...e}).then(h()),children:`Open Modal`}),(0,m.jsx)(t,{})]})},args:{title:r.commerce.productAdjective(),icon:`mdi mdi-react`,size:`md`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ModalComponent = (props: AnyObject) => <Modal {...props}>
        <Content>
          <Text>{faker.lorem.paragraphs(9)}</Text>
        </Content>
      </Modal>;
    const [ModalNode, showModal] = useOverlayService(ModalComponent);
    return <Fragment>
        <Button onClick={() => showModal({
        ...args
      }).then(fn())}>
          Open Modal
        </Button>
        <ModalNode />
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    icon: "mdi mdi-react",
    size: "md"
  }
}`,..._.parameters?.docs?.source}}},v=[`_Modal`]}));y();export{_ as _Modal,v as __namedExportsOrder,g as default,y as n,f as t};