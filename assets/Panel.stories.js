import{n as e,r as t}from"./rolldown-runtime.js";import{r as n}from"./EmptyContent.js";import{It as r,f as i,g as a,m as o,t as s,zt as c}from"./src2.js";import{t as l}from"./jsx-runtime.js";import{n as u,t as d}from"./chunk-NAVWDHVN.js";var f=t({PanelControls:()=>v,_Panel:()=>_,__namedExportsOrder:()=>y,default:()=>g}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),u(),p=l(),m=l(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:o,subcomponents:{PanelGroup:i},title:`@core/components/Panel`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Panel.test.tsx`]},decorators:[e=>(0,m.jsx)(`div`,{className:`w-96 p-4`,children:(0,m.jsx)(e,{})})]},_={render:e=>(0,m.jsx)(p.Fragment,{children:(0,m.jsxs)(o,{...e,actions:(0,m.jsx)(a,{className:`self-center`,onNavigate:h()}),children:[(0,m.jsx)(c,{children:d.lorem.paragraphs(2)}),(0,m.jsxs)(r,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,m.jsx)(n,{variant:`link`,children:`Cancel`}),(0,m.jsx)(n,{variant:`solid`,children:`OK`})]})]})}),args:{title:d.animal.cat()}},v={render:e=>(0,m.jsx)(o,{...e,children:(0,m.jsx)(c,{children:d.lorem.paragraphs(2)})}),args:{title:d.animal.cat(),collapsable:!0,expandable:!0,onClose:h(),onExpand:h(),onCollapse:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`_Panel`,`PanelControls`]})))()}export{b as i,f as n,_ as r,v as t};