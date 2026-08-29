import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{Kt as n,gt as r,k as i,t as a,v as o,zt as s}from"./src2.js";import{t as c}from"./jsx-runtime.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{a(),l(),d=c(),f=c(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={component:o,subcomponents:{Flyout:i},title:`@core/components/Overlays`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Modal.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,f.jsx)(e,{})})]},h={render:e=>{let i=e=>(0,f.jsx)(o,{...e,title:`Inner`,size:`sm`,children:`Inner modal`}),[a,c]=n(a=>{let[c,l]=n(i);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{...a,...e,children:(0,f.jsxs)(s,{children:[(0,f.jsx)(t,{onClick:()=>l().then(p()),children:`Open Modal`}),(0,f.jsx)(r,{children:u.lorem.paragraphs(9)})]})}),c()]})});return(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(t,{onClick:()=>c().then(p()),children:`Open Modal`}),a()]})},args:{title:u.commerce.productAdjective(),icon:`mdi mdi-react`,size:`md`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`_Modal`]})))()}_();export{h as _Modal,g as __namedExportsOrder,m as default};