import{at as c,j as e,au as r,e as t,ar as s,a5 as a,f as j,g as C}from"./iframe-DpfJK_wQ.js";import{f as n}from"./index4.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,b={component:c,title:"@core/components/Panel",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Panel.test.tsx"]}},l={render:o=>e.jsx("div",{className:"max-w-96",children:e.jsxs(c,{...o,children:[e.jsxs(r,{title:n.animal.cat(),children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]}),e.jsxs(r,{title:n.animal.cat(),children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]}),e.jsxs(r,{title:n.animal.cat(),children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]})]})}),args:{onActiveChange:f()}},i={render:o=>e.jsx("div",{className:"max-w-2xl w-screen h-screen max-h-96 grid outline",style:{gridTemplate:'"content" 1fr / 1fr'},children:e.jsx(j,{children:e.jsx(C,{width:"24rem",title:"Aside Panel Group",collapsable:!0,flyout:!0,children:e.jsxs(c,{...o,children:[e.jsxs(r,{title:n.animal.cat(),headerClassName:"border-b border-b-info-500",children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]}),e.jsxs(r,{title:n.animal.cat(),headerClassName:"border-b border-b-success-500",children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]}),e.jsxs(r,{title:n.animal.cat(),headerClassName:"border-b border-b-danger-500",children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]}),e.jsxs(r,{title:n.animal.cat(),headerClassName:"border-b border-b-warning-500",children:[e.jsx(t,{children:n.lorem.paragraphs(2)}),e.jsxs(s,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(a,{variant:"link",children:"Cancel"}),e.jsx(a,{variant:"solid",children:"OK"})]})]})]})})})}),args:{onActiveChange:f()}};var d,p,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const y=["_PanelGroup","AsideContent"];export{i as AsideContent,l as _PanelGroup,y as __namedExportsOrder,b as default};
