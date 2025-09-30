import{f as c,j as e,V as p,d as x,g as a,e as s,H as h,h as j}from"./iframe-Ctw5u0Cj.js";import{f as r,m as g}from"./index4.js";const v={component:c,title:"@core/Application",parameters:{layout:"fullscreen",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Section.test.tsx"]}},u=[...new Array(10).fill("").map(()=>r.lorem.sentences(10)+`
`+r.lorem.sentences(10)+`
`+r.lorem.sentences(10)),...new Array(10).fill("").map(()=>g.lorem.sentences(30))],n={render:l=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(p,{children:e.jsxs(x,{paper:!0,children:[e.jsx(a,{children:e.jsx(s,{children:"Page level aside"})}),e.jsxs(c,{...l,children:[e.jsx(h,{className:"p-4 bg-dimmed",children:"Inner section header"}),e.jsx(a,{children:e.jsx(s,{children:"Inner section level aside"})}),e.jsx(s,{children:u.map((d,m)=>e.jsx(j,{clamp:3,align:"justify",children:d},m))})]})]})})}),args:{}};var t,i,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <Page paper>
            <Aside>
              <Content>Page level aside</Content>
            </Aside>
            <Section {...args}>
              <Header className="p-4 bg-dimmed">Inner section header</Header>
              <Aside>
                <Content>Inner section level aside</Content>
              </Aside>
              <Content>
                {fakeParas.map((p, i) => <Text clamp={3} key={i} align="justify">
                    {p}
                  </Text>)}
              </Content>
            </Section>
          </Page>
        </Viewport>
      </div>;
  },
  args: {}
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const C=["_Section"];export{n as _Section,C as __namedExportsOrder,v as default};
