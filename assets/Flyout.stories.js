import{j as e,aH as c,r as i,e as p,h as y,a4 as F}from"./iframe-Ctw5u0Cj.js";import{f as n}from"./index4.js";import{u as x}from"./useOverlayService.js";const C={component:c,title:"@core/components/Overlays",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Flyout.test.tsx"]},decorators:[o=>e.jsx("div",{className:"max-w-2xl p-4",children:e.jsx(o,{})})]},t={render:o=>{const l=i.useCallback(d=>e.jsx(c,{...d,children:e.jsx(p,{children:e.jsx(y,{children:n.lorem.paragraphs(9)})})}),[]),[m,u]=x(l);return e.jsxs(e.Fragment,{children:[e.jsx(F,{onClick:()=>u({...o}).then(fn()),children:"Open Flyout"}),m]})},args:{title:n.commerce.productAdjective(),icon:"mdi mdi-react",size:"md"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const FlyoutComponent = useCallback((props: AnyObject) => <Flyout {...props}>
          <Content>
            <Text>{faker.lorem.paragraphs(9)}</Text>
          </Content>
        </Flyout>, []);
    const [FlyoutNode, showFlyout] = useOverlayService(FlyoutComponent);
    return <Fragment>
        <Button onClick={() => showFlyout({
        ...args
      }).then(fn())}>
          Open Flyout
        </Button>
        {FlyoutNode}
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    icon: "mdi mdi-react",
    size: "md"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const f=["_Flyout"];export{t as _Flyout,f as __namedExportsOrder,C as default};
