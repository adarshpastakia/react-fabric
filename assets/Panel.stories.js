import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{r,t as i}from"./dist28.js";import{C as a,G as o,Q as s,S as c,g as l,t as u,w as d}from"./src3.js";var f=t({PanelControls:()=>v,_Panel:()=>_,__namedExportsOrder:()=>y,default:()=>g}),p,m,h,g,_,v,y,b=e((()=>{i(),p=n(),u(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:a,subcomponents:{PanelGroup:c},title:`@core/components/Panel`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Panel.test.tsx`]},decorators:[e=>(0,m.jsx)(`div`,{className:`w-96 p-4`,children:(0,m.jsx)(e,{})})]},_={render:e=>(0,m.jsx)(p.Fragment,{children:(0,m.jsxs)(a,{...e,actions:(0,m.jsx)(d,{className:`self-center`,onNavigate:h()}),children:[(0,m.jsx)(l,{children:r.lorem.paragraphs(2)}),(0,m.jsxs)(o,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(s,{variant:`link`,children:`Cancel`}),(0,m.jsx)(s,{variant:`solid`,children:`OK`})]})]})}),args:{title:r.animal.cat()}},v={render:e=>(0,m.jsx)(a,{...e,children:(0,m.jsx)(l,{children:r.lorem.paragraphs(2)})}),args:{title:r.animal.cat(),collapsable:!0,expandable:!0,onClose:h(),onExpand:h(),onCollapse:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Panel {...args} actions={<Navigator className="self-center" onNavigate={fn()} />}>
          <Content>{faker.lorem.paragraphs(2)}</Content>
          <Footer flex justify="end" className="px-2 py-1">
            <Button variant="link">Cancel</Button>
            <Button variant="solid">OK</Button>
          </Footer>
        </Panel>
      </Fragment>;
  },
  args: {
    title: faker.animal.cat()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Panel {...args}>
        <Content>{faker.lorem.paragraphs(2)}</Content>
      </Panel>;
  },
  args: {
    title: faker.animal.cat(),
    collapsable: true,
    expandable: true,
    onClose: fn(),
    onExpand: fn(),
    onCollapse: fn()
  }
}`,...v.parameters?.docs?.source}}},y=[`_Panel`,`PanelControls`]}));b();export{v as PanelControls,_ as _Panel,y as __namedExportsOrder,g as default,b as n,f as t};