import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{r as n,t as r}from"./dist28.js";import{C as i,G as a,Q as o,S as s,_ as c,d as l,g as u,t as d}from"./src3.js";var f,p,m,h,g,_,v=e((()=>{r(),d(),f=t(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={component:s,title:`@core/components/Panel`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Panel.test.tsx`]}},h={render:e=>(0,f.jsx)(`div`,{className:`max-w-96`,children:(0,f.jsxs)(s,{...e,children:[(0,f.jsxs)(i,{title:n.animal.cat(),children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]}),(0,f.jsxs)(i,{title:n.animal.cat(),children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]}),(0,f.jsxs)(i,{title:n.animal.cat(),children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]})]})}),args:{onActiveChange:p()}},g={render:e=>(0,f.jsx)(`div`,{className:`max-w-2xl w-screen h-screen max-h-96 grid outline`,style:{gridTemplate:`"content" 1fr / 1fr`},children:(0,f.jsx)(l,{children:(0,f.jsx)(c,{width:`24rem`,title:`Aside Panel Group`,collapsable:!0,flyout:!0,children:(0,f.jsxs)(s,{...e,children:[(0,f.jsxs)(i,{title:n.animal.cat(),headerClassName:`border-b border-b-info-500`,children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]}),(0,f.jsxs)(i,{title:n.animal.cat(),headerClassName:`border-b border-b-success-500`,children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]}),(0,f.jsxs)(i,{title:n.animal.cat(),headerClassName:`border-b border-b-danger-500`,children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]}),(0,f.jsxs)(i,{title:n.animal.cat(),headerClassName:`border-b border-b-warning-500`,children:[(0,f.jsx)(u,{children:n.lorem.paragraphs(2)}),(0,f.jsxs)(a,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,f.jsx)(o,{variant:`link`,children:`Cancel`}),(0,f.jsx)(o,{variant:`solid`,children:`OK`})]})]})]})})})}),args:{onActiveChange:p()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="max-w-96">
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="max-w-2xl w-screen h-screen max-h-96 grid outline" style={{
      gridTemplate: '"content" 1fr / 1fr'
    }}>
        <Section>
          <Aside width="24rem" title="Aside Panel Group" collapsable flyout>
            <PanelGroup {...args}>
              <Panel title={faker.animal.cat()} headerClassName="border-b border-b-info-500">
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel title={faker.animal.cat()} headerClassName="border-b border-b-success-500">
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel title={faker.animal.cat()} headerClassName="border-b border-b-danger-500">
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
              <Panel title={faker.animal.cat()} headerClassName="border-b border-b-warning-500">
                <Content>{faker.lorem.paragraphs(2)}</Content>
                <Footer flex justify="end" className="px-2 py-1">
                  <Button variant="link">Cancel</Button>
                  <Button variant="solid">OK</Button>
                </Footer>
              </Panel>
            </PanelGroup>
          </Aside>
        </Section>
      </div>;
  },
  args: {
    onActiveChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_=[`_PanelGroup`,`AsideContent`]}));v();export{g as AsideContent,h as _PanelGroup,_ as __namedExportsOrder,m as default,v as t};