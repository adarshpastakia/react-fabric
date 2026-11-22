import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{t as n}from"./jsx-runtime.js";import{Kt as r,gt as i,k as a,t as o,v as s,zt as c}from"./src2.js";import{n as l,t as u}from"./en.js";var d,f,p,m,h;function g(){return(g=e((()=>{o(),u(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={component:s,subcomponents:{Flyout:a},title:`@core/components/Overlays`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Modal.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,d.jsx)(e,{})})]},m={render:e=>{let n=e=>(0,d.jsx)(s,{...e,title:`Inner`,size:`sm`,children:`Inner modal`}),[a,o]=r(a=>{let[o,u]=r(n);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{...a,...e,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(t,{onClick:()=>u().then(f()),children:`Open Modal`}),(0,d.jsx)(i,{children:l.lorem.paragraphs(9)})]})}),o()]})});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{onClick:()=>o().then(f()),children:`Open Modal`}),a()]})},args:{title:l.commerce.productAdjective(),icon:`mdi mdi-react`,size:`md`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const InnerModal = (props: ModalProps<{}, number>) => <Modal {...props} title="Inner" size="sm">
        Inner modal
      </Modal>;
    const ModalComponent = (props: ModalProps<{}, number>) => {
      const [renderInnerModal, showInnerModal] = useOverlayService(InnerModal);
      return <>
          <Modal {...props} {...args}>
            <Content>
              <Button onClick={() => showInnerModal().then(fn())}>Open Modal</Button>
              <Text>{faker.lorem.paragraphs(9)}</Text>
            </Content>
          </Modal>
          {renderInnerModal()}
        </>;
    };
    const [renderModal, showModal] = useOverlayService(ModalComponent);
    return <Fragment>
        <Button onClick={() => showModal().then(fn())}>Open Modal</Button>
        {renderModal()}
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    icon: "mdi mdi-react",
    size: "md"
  }
}`,...m.parameters?.docs?.source}}},h=[`_Modal`]})))()}g();export{m as _Modal,h as __namedExportsOrder,p as default};