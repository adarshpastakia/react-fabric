import{g as o,j as e,V as p,d,e as m}from"./iframe-6XIGnDH8.js";import{f as x,m as u}from"./index4.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,h={component:o,title:"@core/Application",parameters:{layout:"fullscreen",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Aside.test.tsx"]}},f=[...new Array(5).fill("").map(()=>x.lorem.sentences(5)),...new Array(5).fill("").map(()=>u.lorem.sentences(5))],n={render:i=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(p,{children:e.jsx(d,{paper:!0,children:e.jsx(o,{...i,children:e.jsx(m,{children:f.map((l,c)=>e.jsx("p",{children:l},c))})})})})}),args:{title:"Sidebar title",icon:"mdi mdi-react",onFlyout:r(),onCollapse:r()}};var s,t,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["_Aside"];export{n as _Aside,j as __namedExportsOrder,h as default};
