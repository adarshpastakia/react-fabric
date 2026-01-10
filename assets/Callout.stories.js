import{j as e,an as r,h as s,R as S,i as c}from"./iframe-qDaPDssc.js";import{f as t,m}from"./index4.js";const _={component:r,title:"@core/components/Callout",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/callout/Callout.test.tsx"]},decorators:[n=>e.jsx("div",{className:"max-w-2xl p-4",children:e.jsx(n,{})})]},a={render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})}),e.jsx(r,{...n,title:m.commerce.productName(),children:e.jsx(s,{clamp:4,children:m.lorem.sentences(2)})})]}),args:{title:t.commerce.productName(),icon:"mdi mdi-react"}},o={render:n=>e.jsx(e.Fragment,{children:e.jsx(r,{...n,children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})}),args:{title:t.commerce.productName(),legend:t.animal.cat(),icon:"mdi mdi-react",border:"dashed",color:"info"}},l={render:n=>e.jsxs(S,{children:[e.jsx(c,{className:"span-12",stretchContent:!0,children:e.jsx(r,{...n,color:"primary",title:"Primary",icon:"mdi mdi-react",children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})}),e.jsx(c,{className:"span-12",stretchContent:!0,children:e.jsx(r,{...n,color:"accent",title:"Accent",icon:"mdi mdi-react",children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})}),e.jsx(c,{className:"span-12",stretchContent:!0,children:e.jsx(r,{...n,color:"info",title:"Info",icon:"mdi mdi-information-outline",children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})}),e.jsx(c,{className:"span-12",stretchContent:!0,children:e.jsx(r,{...n,color:"danger",title:"Danger",icon:"mdi mdi-close-circle-outline",children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})}),e.jsx(c,{className:"span-12",stretchContent:!0,children:e.jsx(r,{...n,color:"success",title:"Sucess",icon:"mdi mdi-check-circle-outline",children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})}),e.jsx(c,{className:"span-12",stretchContent:!0,children:e.jsx(r,{...n,color:"warning",title:"Warning",icon:"mdi mdi-alert-outline",children:e.jsx(s,{clamp:4,children:t.lorem.sentences(2)})})})]}),args:{}},i={render:n=>e.jsx(r,{...n}),args:{}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,C,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var g,j,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Row>
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
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var T,N,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Callout {...args} />,
  args: {}
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const y=["_Callout","WithLegend","Colors","Tester"],F=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Tester:i,WithLegend:o,_Callout:a,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{F as C,o as W,a as _,l as a};
