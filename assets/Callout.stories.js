import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{n as r,r as i,t as a}from"./dist28.js";import{Y as o,a as s,f as c,m as l,t as u}from"./src3.js";var d=t({Colors:()=>_,Tester:()=>v,WithLegend:()=>g,_Callout:()=>h,__namedExportsOrder:()=>y,default:()=>m}),f,p,m,h,g,_,v,y,b=e((()=>{a(),f=n(),u(),p=n(),m={component:o,title:`@core/components/Callout`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/callout/Callout.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,p.jsx)(e,{})})]},h={render:e=>(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(o,{...e,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})}),(0,p.jsx)(o,{...e,title:r.commerce.productName(),children:(0,p.jsx)(s,{clamp:4,children:r.lorem.sentences(2)})})]}),args:{title:i.commerce.productName(),icon:`mdi mdi-react`}},g={render:e=>(0,p.jsx)(f.Fragment,{children:(0,p.jsx)(o,{...e,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),args:{title:i.commerce.productName(),legend:i.animal.cat(),icon:`mdi mdi-react`,border:`dashed`,color:`info`}},_={render:e=>(0,p.jsxs)(l,{children:[(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`default`,title:`Default`,icon:`mdi mdi-react`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`dimmed`,title:`Dimmed`,icon:`mdi mdi-react`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`muted`,title:`Muted`,icon:`mdi mdi-react`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`primary`,title:`Primary`,icon:`mdi mdi-react`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`accent`,title:`Accent`,icon:`mdi mdi-react`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`info`,title:`Info`,icon:`mdi mdi-information-outline`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`danger`,title:`Danger`,icon:`mdi mdi-close-circle-outline`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`success`,title:`Sucess`,icon:`mdi mdi-check-circle-outline`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})}),(0,p.jsx)(c,{className:`span-12`,stretchContent:!0,children:(0,p.jsx)(o,{...e,color:`warning`,title:`Warning`,icon:`mdi mdi-alert-outline`,children:(0,p.jsx)(s,{clamp:4,children:i.lorem.sentences(2)})})})]}),args:{}},v={render:e=>(0,p.jsx)(o,{...e}),args:{}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Callout {...args}>
          <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
        </Callout>
        <Callout {...args} title={fakerAR.commerce.productName()}>
          <Text clamp={4}>{fakerAR.lorem.sentences(2)}</Text>
        </Callout>
      </Fragment>;
  },
  args: {
    title: faker.commerce.productName(),
    icon: "mdi mdi-react"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Callout {...args}>
          <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
        </Callout>
      </Fragment>;
  },
  args: {
    title: faker.commerce.productName(),
    legend: faker.animal.cat(),
    icon: "mdi mdi-react",
    border: "dashed",
    color: "info"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Row>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="default" title="Default" icon="mdi mdi-react">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="dimmed" title="Dimmed" icon="mdi mdi-react">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="muted" title="Muted" icon="mdi mdi-react">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="primary" title="Primary" icon="mdi mdi-react">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="accent" title="Accent" icon="mdi mdi-react">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="info" title="Info" icon="mdi mdi-information-outline">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="danger" title="Danger" icon="mdi mdi-close-circle-outline">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="success" title="Sucess" icon="mdi mdi-check-circle-outline">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
        <Col className="span-12" stretchContent>
          <Callout {...args} color="warning" title="Warning" icon="mdi mdi-alert-outline">
            <Text clamp={4}>{faker.lorem.sentences(2)}</Text>
          </Callout>
        </Col>
      </Row>;
  },
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Callout {...args} />,
  args: {}
}`,...v.parameters?.docs?.source}}},y=[`_Callout`,`WithLegend`,`Colors`,`Tester`]}));b();export{_ as Colors,v as Tester,g as WithLegend,h as _Callout,y as __namedExportsOrder,m as default,b as n,d as t};