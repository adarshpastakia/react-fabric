import{n as e,r as t}from"./rolldown-runtime.js";import{r as n}from"./EmptyContent.js";import{t as r}from"./jsx-runtime.js";import{It as i,Pt as a,Vt as o,f as s,m as c,t as l,zt as u}from"./src2.js";import{n as d,t as f}from"./en.js";var p=t({AsideContent:()=>v,_PanelGroup:()=>_,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y;function b(){return(b=e((()=>{l(),f(),m=r(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:s,title:`@core/components/Panel`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Panel.test.tsx`]}},_={render:e=>(0,m.jsx)(`div`,{className:`w-96 max-w-full`,children:(0,m.jsxs)(s,{...e,children:[(0,m.jsxs)(c,{title:d.animal.cat(),children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]}),(0,m.jsxs)(c,{title:d.animal.cat(),children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]}),(0,m.jsxs)(c,{title:d.animal.cat(),children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]})]})}),args:{onActiveChange:h()}},v={render:e=>(0,m.jsx)(`div`,{className:`max-w-2xl w-screen h-screen max-h-128 grid outline`,style:{gridTemplate:`"content" 1fr / 1fr`},children:(0,m.jsx)(a,{children:(0,m.jsx)(o,{width:`24rem`,title:`Aside Panel Group`,collapsable:!0,enableFlyout:!0,children:(0,m.jsxs)(s,{...e,children:[(0,m.jsxs)(c,{title:d.animal.cat(),classNames:{titlebar:`border-b border-b-info-500`},children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]}),(0,m.jsxs)(c,{title:d.animal.cat(),classNames:{titlebar:`border-b border-b-success-500`},children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]}),(0,m.jsxs)(c,{title:d.animal.cat(),classNames:{titlebar:`border-b border-b-danger-500`},children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]}),(0,m.jsxs)(c,{title:d.animal.cat(),classNames:{titlebar:`border-b border-b-warning-500`},children:[(0,m.jsx)(u,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]})]})})})}),args:{onActiveChange:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="w-96 max-w-full">
        <PanelGroup {...args}>
          <Panel title={faker.animal.cat()}>
            <Content>{faker.lorem.paragraphs(2)}</Content>
            <Footer flex justify="end" className="px-2 py-1">
              <Button variant="link">Cancel</Button>
              <Button variant="solid">OK</Button>
            </Footer>
          </Panel>
          <Panel title={faker.animal.cat()}>
            <Content>{faker.lorem.paragraphs(2)}</Content>
            <Footer flex justify="end" className="px-2 py-1">
              <Button variant="link">Cancel</Button>
              <Button variant="solid">OK</Button>
            </Footer>
          </Panel>
          <Panel title={faker.animal.cat()}>
            <Content>{faker.lorem.paragraphs(2)}</Content>
            <Footer flex justify="end" className="px-2 py-1">
              <Button variant="link">Cancel</Button>
              <Button variant="solid">OK</Button>
            </Footer>
          </Panel>
        </PanelGroup>
      </div>;
  },
  args: {
    onActiveChange: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="max-w-2xl w-screen h-screen max-h-128 grid outline" style={{
      gridTemplate: '"content" 1fr / 1fr'
    }}>
        <Layout>
          <Aside width="24rem" title="Aside Panel Group" collapsable enableFlyout>
            <PanelGroup {...args}>
              <Panel title={faker.animal.cat()} classNames={{
              titlebar: "border-b border-b-info-500"
            }}>
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel title={faker.animal.cat()} classNames={{
              titlebar: "border-b border-b-success-500"
            }}>
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel title={faker.animal.cat()} classNames={{
              titlebar: "border-b border-b-danger-500"
            }}>
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel title={faker.animal.cat()} classNames={{
              titlebar: "border-b border-b-warning-500"
            }}>
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
            </PanelGroup>
          </Aside>
        </Layout>
      </div>;
  },
  args: {
    onActiveChange: fn()
  }
}`,...v.parameters?.docs?.source}}},y=[`_PanelGroup`,`AsideContent`]})))()}export{b as i,p as n,_ as r,v as t};