import{E as d,j as e,V as c,d as l,g as t,f as p,e as m}from"./iframe-DwvN93Ge.js";const u={component:d,title:"@core/Application",parameters:{layout:"fullscreen",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/ErrorBoundary.test.tsx"]}},r=()=>{throw Error("Bad component call")},n={render:i=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(c,{children:e.jsxs(l,{...i,children:[e.jsx(t,{children:e.jsx(r,{})}),e.jsx(p,{children:e.jsx(r,{})}),e.jsx(t,{align:"end",children:e.jsx(m,{children:e.jsx(r,{})})})]})})}),args:{paper:!0,title:"Page title",icon:"mdi mdi-react"}};var s,o,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <Page {...args}>
            <Aside>
              <BadComponent />
            </Aside>
            <Section>
              <BadComponent />
            </Section>
            <Aside align="end">
              <Content>
                <BadComponent />
              </Content>
            </Aside>
          </Page>
        </Viewport>
      </div>;
  },
  args: {
    paper: true,
    title: "Page title",
    icon: "mdi mdi-react"
  }
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const g=["_ErrorBoundary"];export{n as _ErrorBoundary,g as __namedExportsOrder,u as default};
