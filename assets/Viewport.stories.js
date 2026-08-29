import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{Et as n,It as r,Lt as i,Pt as a,Vt as o,t as s,zt as c}from"./src2.js";import{t as l}from"./jsx-runtime.js";import{n as u,t as d}from"./chunk-NAVWDHVN.js";var f,p,m,h,g;function _(){return(_=e((()=>{s(),u(),f=t(),p=l(),m={component:n,tags:[`autodocs`],title:`@core/core/Viewport`,parameters:{layout:`fullscreen`,jest:[`core/tests/core/Viewport.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`min-h-96`,children:(0,p.jsx)(e,{})})]},h={render:({showLoader:e,...t})=>{let[s,l]=(0,f.useState)(()=>d.color.rgb());return(0,p.jsxs)(n,{children:[(0,p.jsx)(i,{className:`p-4 bg-default border-b border-soft`,children:`Viewport header`}),(0,p.jsx)(`div`,{className:`area-breadcrumbs px-4 py-1 bg-default border-b border-soft`,children:`Viewport breadcrumbs`}),(0,p.jsxs)(a,{children:[(0,p.jsxs)(a,{className:`m-2 ms-0 rounded-2xl paper bg-content`,children:[(0,p.jsx)(i,{...t,className:`area-header p-4 border-b border-soft`,children:`This is the Viewport content header.`}),(0,p.jsx)(c,{children:`This is the Viewport content area.`})]}),(0,p.jsx)(o,{...t,margin:2,enableFlyout:!0,title:`Tester`,icon:`icon-[mdi--home]`,classNames:{root:`rounded-2xl`},children:(0,p.jsx)(c,{children:(0,p.jsx)(`h3`,{children:`This is the Viewport side panel.`})})}),(0,p.jsx)(o,{...t,align:`end`,title:`Tester`,margin:2,icon:`icon-[mdi--home]`,classNames:{root:`rounded-2xl`},children:(0,p.jsx)(c,{children:`This is the Viewport side panel.`})})]}),(0,p.jsx)(r,{className:`p-1 text-xs bg-dark text-white`,children:`Viewport footer`})]})},args:{resizeable:!0,collapsable:!0,showLoader:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ({
    showLoader,
    ...args
  }: any) => {
    const [color, setColor] = useState(() => faker.color.rgb());
    return <Viewport>
        <Header className="p-4 bg-default border-b border-soft">Viewport header</Header>
        <div className="area-breadcrumbs px-4 py-1 bg-default border-b border-soft">Viewport breadcrumbs</div>
        <Layout>
          <Layout className="m-2 ms-0 rounded-2xl paper bg-content">
            <Header {...args} className="area-header p-4 border-b border-soft">
              This is the Viewport content header.
            </Header>
            <Content>This is the Viewport content area.</Content>
          </Layout>
          <Aside {...args} margin={2} enableFlyout title="Tester" icon="icon-[mdi--home]" classNames={{
          root: "rounded-2xl"
        }}>
            <Content>
              <h3>This is the Viewport side panel.</h3>
            </Content>
          </Aside>
          <Aside {...args} align="end" title="Tester" margin={2} icon="icon-[mdi--home]" classNames={{
          root: "rounded-2xl"
        }}>
            <Content>This is the Viewport side panel.</Content>
          </Aside>
        </Layout>
        <Footer className="p-1 text-xs bg-dark text-white">Viewport footer</Footer>
      </Viewport>;
  },
  args: {
    resizeable: true,
    collapsable: true,
    showLoader: true
  } as any
}`,...h.parameters?.docs?.source}}},g=[`_Viewport`]})))()}_();export{h as _Viewport,g as __namedExportsOrder,m as default};