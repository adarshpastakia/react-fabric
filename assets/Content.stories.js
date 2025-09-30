import{e as c,j as e,V as m,d,h as x}from"./iframe-Ctw5u0Cj.js";import{f as r,m as f}from"./index4.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,_={component:c,title:"@core/Application",parameters:{layout:"fullscreen",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Content.test.tsx"]}},u=[...new Array(10).fill("").map(()=>r.lorem.sentences(10)+`
`+r.lorem.sentences(10)+`
`+r.lorem.sentences(10)),...new Array(10).fill("").map(()=>f.lorem.sentences(30))],n={render:l=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(m,{children:e.jsx(d,{paper:!0,children:e.jsx(c,{...l,children:u.map((i,p)=>e.jsx(x,{clamp:3,align:"justify",children:i},p))})})})}),args:{onResize:s(),onScroll:s()}};var t,a,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <Page paper>
            <Content {...args}>
              {fakeParas.map((p, i) => <Text clamp={3} key={i} align="justify">
                  {p}
                </Text>)}
            </Content>
          </Page>
        </Viewport>
      </div>;
  },
  args: {
    onResize: fn(),
    onScroll: fn()
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["_Content"];export{n as _Content,h as __namedExportsOrder,_ as default};
