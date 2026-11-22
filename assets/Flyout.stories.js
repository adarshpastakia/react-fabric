import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{r as n}from"./EmptyContent.js";import{t as r}from"./jsx-runtime.js";import{Kt as i,gt as a,k as o,t as s,zt as c}from"./src2.js";import{n as l,t as u}from"./en.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{s(),u(),d=t(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={component:o,title:`@core/components/Overlays`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Flyout.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,f.jsx)(e,{})})]},h={render:e=>{let t=(0,d.useCallback)(e=>(0,f.jsx)(o,{...e,children:(0,f.jsx)(c,{children:(0,f.jsx)(a,{children:l.lorem.paragraphs(9)})})}),[]),[r,s]=i(t);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{onClick:()=>s({...e}).then(p()),children:`Open Flyout`}),r()]})},args:{title:l.commerce.productAdjective(),icon:`mdi mdi-react`,size:`md`,align:`end`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`_Flyout`]})))()}_();export{h as _Flyout,g as __namedExportsOrder,m as default};