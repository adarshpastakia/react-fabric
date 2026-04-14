import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{n,r,t as i}from"./dist28.js";import{a,g as o,h as s,l as c,t as l}from"./src3.js";var u,d,f,p,m,h,g=e((()=>{i(),l(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={component:o,title:`@core/Application`,parameters:{layout:`fullscreen`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Content.test.tsx`]}},p=[...Array(10).fill(``).map(()=>r.lorem.sentences(10)+`
`+r.lorem.sentences(10)+`
`+r.lorem.sentences(10)),...Array(10).fill(``).map(()=>n.lorem.sentences(30))],m={render:e=>(0,u.jsx)(`div`,{className:`min-h-[600px]`,children:(0,u.jsx)(c,{children:(0,u.jsx)(s,{paper:!0,children:(0,u.jsx)(o,{...e,children:p.map((e,t)=>(0,u.jsx)(a,{clamp:3,align:`justify`,children:e},t))})})})}),args:{onResize:d(),onScroll:d()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`_Content`]}));g();export{m as _Content,h as __namedExportsOrder,f as default,g as t};