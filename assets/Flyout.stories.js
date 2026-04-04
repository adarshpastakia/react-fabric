import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{r as i,t as a}from"./dist28.js";import{Q as o,h as s,i as c,k as l,n as u,t as d}from"./src3.js";var f,p,m,h,g,_,v,y=t((()=>{a(),f=e(n()),p=r(),d(),m=r(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:l,title:`@core/components/Overlays`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Flyout.test.tsx`]},decorators:[e=>(0,m.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,m.jsx)(e,{})})]},_={render:e=>{let[t,n]=u((0,f.useCallback)(e=>(0,m.jsx)(l,{...e,children:(0,m.jsx)(s,{children:(0,m.jsx)(c,{children:i.lorem.paragraphs(9)})})}),[]));return(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(o,{onClick:()=>n({...e}).then(h()),children:`Open Flyout`}),(0,m.jsx)(t,{})]})},args:{title:i.commerce.productAdjective(),icon:`mdi mdi-react`,size:`md`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        <FlyoutNode />
      </Fragment>;
  },
  args: {
    title: faker.commerce.productAdjective(),
    icon: "mdi mdi-react",
    size: "md"
  }
}`,..._.parameters?.docs?.source}}},v=[`_Flyout`]}));y();export{_ as _Flyout,v as __namedExportsOrder,g as default,y as t};