import{n as e,r as t}from"./rolldown-runtime.js";import{r as n}from"./EmptyContent.js";import{t as r}from"./jsx-runtime.js";import{It as i,f as a,g as o,m as s,t as c,zt as l}from"./src2.js";import{n as u,t as d}from"./en.js";var f=t({PanelControls:()=>_,_Panel:()=>g,__namedExportsOrder:()=>v,default:()=>h}),p,m,h,g,_,v;function y(){return(y=e((()=>{c(),d(),p=r(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,subcomponents:{PanelGroup:a},title:`@core/components/Panel`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Panel.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`w-96 p-4`,children:(0,p.jsx)(e,{})})]},g={render:e=>(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(s,{...e,actions:(0,p.jsx)(o,{className:`self-center`,onNavigate:m()}),children:[(0,p.jsx)(l,{children:u.lorem.paragraphs(2)}),(0,p.jsxs)(i,{flex:!0,justify:`end`,className:`px-2 py-1`,children:[(0,p.jsx)(n,{variant:`link`,children:`Cancel`}),(0,p.jsx)(n,{variant:`solid`,children:`OK`})]})]})}),args:{title:u.animal.cat()}},_={render:e=>(0,p.jsx)(s,{...e,children:(0,p.jsx)(l,{children:u.lorem.paragraphs(2)})}),args:{title:u.animal.cat(),collapsable:!0,expandable:!0,onClose:m(),onExpand:m(),onCollapse:m()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`_Panel`,`PanelControls`]})))()}export{y as i,f as n,g as r,_ as t};