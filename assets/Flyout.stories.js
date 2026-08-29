import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{r as n}from"./EmptyContent.js";import{Kt as r,gt as i,k as a,t as o,zt as s}from"./src2.js";import{t as c}from"./jsx-runtime.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),l(),d=t(),f=c(),p=c(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:a,title:`@core/components/Overlays`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Flyout.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,p.jsx)(e,{})})]},g={render:e=>{let t=(0,d.useCallback)(e=>(0,p.jsx)(a,{...e,children:(0,p.jsx)(s,{children:(0,p.jsx)(i,{children:u.lorem.paragraphs(9)})})}),[]),[o,c]=r(t);return(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(n,{onClick:()=>c({...e}).then(m()),children:`Open Flyout`}),o()]})},args:{title:u.commerce.productAdjective(),icon:`mdi mdi-react`,size:`md`,align:`end`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const FlyoutComponent = useCallback((props: AnyObject) => <Flyout {...props}>
          <Content>
            <Text>{faker.lorem.paragraphs(9)}</Text>
          </Content>
        </Flyout>, []);
    const [renderFlyout, showFlyout] = useOverlayService(FlyoutComponent);
    return <Fragment>
        <Button onClick={() => showFlyout({
        ...args
      }).then(fn())}>Open Flyout</Button>
        {renderFlyout()}
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    icon: "mdi mdi-react",
    size: "md",
    align: "end"
  }
}`,...g.parameters?.docs?.source}}},_=[`_Flyout`]})))()}v();export{g as _Flyout,_ as __namedExportsOrder,h as default};