import{j as e,av as g,aw as o,e as x,ar as f,a3 as l,ai as j}from"./iframe-CVyMRGSP.js";import{f as s}from"./index-CaHJoDsz.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,P={component:o,subcomponents:{PanelGroup:g},title:"@core/components/Panel",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Panel.test.tsx"]},decorators:[a=>e.jsx("div",{className:"w-96 p-4",children:e.jsx(a,{})})]},n={render:a=>e.jsx(e.Fragment,{children:e.jsxs(o,{...a,actions:e.jsx(j,{className:"self-center",onNavigate:t()}),children:[e.jsx(x,{children:s.lorem.paragraphs(2)}),e.jsxs(f,{flex:!0,justify:"end",className:"px-2 py-1",children:[e.jsx(l,{variant:"link",children:"Cancel"}),e.jsx(l,{variant:"solid",children:"OK"})]})]})}),args:{title:s.animal.cat()}},r={render:a=>e.jsx(o,{...a,children:e.jsx(x,{children:s.lorem.paragraphs(2)})}),args:{title:s.animal.cat(),collapsable:!0,expandable:!0,onClose:t(),onExpand:t(),onCollapse:t()}};var c,i,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const _=["_Panel","PanelControls"],v=Object.freeze(Object.defineProperty({__proto__:null,PanelControls:r,_Panel:n,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{v as P,n as _,r as a};
