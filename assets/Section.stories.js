import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{n,r,t as i}from"./dist28.js";import{V as a,c as o,g as s,h as c,i as l,m as u,t as d,u as f}from"./src3.js";var p,m,h,g,_,v=e((()=>{i(),d(),p=t(),m={component:f,title:`@core/Application`,parameters:{layout:`fullscreen`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Section.test.tsx`]}},h=[...Array(10).fill(``).map(()=>r.lorem.sentences(10)+`
`+r.lorem.sentences(10)+`
`+r.lorem.sentences(10)),...Array(10).fill(``).map(()=>n.lorem.sentences(30))],g={render:e=>(0,p.jsx)(`div`,{className:`min-h-[600px]`,children:(0,p.jsx)(o,{children:(0,p.jsxs)(u,{paper:!0,children:[(0,p.jsx)(s,{children:(0,p.jsx)(c,{children:`Page level aside`})}),(0,p.jsxs)(f,{...e,children:[(0,p.jsx)(a,{className:`p-4 bg-dimmed`,children:`Inner section header`}),(0,p.jsx)(s,{children:(0,p.jsx)(c,{children:`Inner section level aside`})}),(0,p.jsx)(c,{children:h.map((e,t)=>(0,p.jsx)(l,{clamp:3,align:`justify`,children:e},t))})]})]})})}),args:{}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`_Section`]}));v();export{g as _Section,_ as __namedExportsOrder,m as default,v as t};