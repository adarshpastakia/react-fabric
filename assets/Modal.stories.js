import{j as e,aE as p,aF as d,a4 as u,e as M,h as x}from"./iframe-DwvN93Ge.js";import{f as t}from"./index4.js";import{u as h}from"./useOverlayService.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,_={component:d,subcomponents:{Flyout:p},title:"@core/components/Overlays",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Modal.test.tsx"]},decorators:[n=>e.jsx("div",{className:"max-w-2xl p-4",children:e.jsx(n,{})})]},o={render:n=>{const c=i=>e.jsx(d,{...i,children:e.jsx(M,{children:e.jsx(x,{children:t.lorem.paragraphs(9)})})}),[l,m]=h(c);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>m({...n}).then(j()),children:"Open Modal"}),l]})},args:{title:t.commerce.productAdjective(),icon:"mdi mdi-react",size:"md"}};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        {ModalNode}
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    icon: "mdi mdi-react",
    size: "md"
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const O=["_Modal"],y=Object.freeze(Object.defineProperty({__proto__:null,_Modal:o,__namedExportsOrder:O,default:_},Symbol.toStringTag,{value:"Module"}));export{y as M,o as _};
