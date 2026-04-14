import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{_ as n,d as r,g as i,h as a,l as o,q as s,t as c}from"./src3.js";var l,u,d,f,p,m=e((()=>{c(),l=t(),u={component:s,title:`@core/Application`,parameters:{layout:`fullscreen`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/ErrorBoundary.test.tsx`]}},d=()=>{throw Error(`Bad component call`)},f={render:e=>(0,l.jsx)(`div`,{className:`min-h-[600px]`,children:(0,l.jsx)(o,{children:(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(n,{children:(0,l.jsx)(d,{})}),(0,l.jsx)(r,{children:(0,l.jsx)(d,{})}),(0,l.jsx)(n,{align:`end`,children:(0,l.jsx)(i,{children:(0,l.jsx)(d,{})})})]})})}),args:{paper:!0,title:`Page title`,icon:`mdi mdi-react`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`_ErrorBoundary`]}));m();export{f as _ErrorBoundary,p as __namedExportsOrder,u as default,m as t};