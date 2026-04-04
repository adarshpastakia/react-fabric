import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{n,r,t as i}from"./dist28.js";import{c as a,g as o,h as s,m as c,t as l}from"./src3.js";var u,d,f,p,m,h,g=e((()=>{i(),l(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={component:o,title:`@core/Application`,parameters:{layout:`fullscreen`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Aside.test.tsx`]}},p=[...[,,,,,].fill(``).map(()=>r.lorem.sentences(5)),...[,,,,,].fill(``).map(()=>n.lorem.sentences(5))],m={render:e=>(0,u.jsx)(`div`,{className:`min-h-[600px]`,children:(0,u.jsx)(a,{children:(0,u.jsx)(c,{paper:!0,children:(0,u.jsx)(o,{...e,children:(0,u.jsx)(s,{children:p.map((e,t)=>(0,u.jsx)(`p`,{children:e},t))})})})})}),args:{title:`Sidebar title`,icon:`mdi mdi-react`,onFlyout:d(),onCollapse:d()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <Page paper>
            <Aside {...args}>
              <Content>
                {fakeParas.map((p, i) => <p key={i}>{p}</p>)}
              </Content>
            </Aside>
          </Page>
        </Viewport>
      </div>;
  },
  args: {
    title: "Sidebar title",
    icon: "mdi mdi-react",
    onFlyout: fn(),
    onCollapse: fn()
  }
}`,...m.parameters?.docs?.source}}},h=[`_Aside`]}));g();export{m as _Aside,h as __namedExportsOrder,f as default,g as t};