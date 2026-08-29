import{n as e,r as t}from"./rolldown-runtime.js";import{At as n,Mt as r,S as i,t as a,w as o}from"./src2.js";import{t as s}from"./jsx-runtime.js";import{c,o as l,t as u}from"./src7.js";var d=t({_DateDisplay:()=>m,__namedExportsOrder:()=>h,default:()=>p}),f,p,m,h;function g(){return(g=e((()=>{a(),u(),f=s(),p={component:c,subcomponents:{DateDuration:l},title:`@date/Date Display`,parameters:{layout:`centered`,controls:{exclude:`children`,matchers:{date:/value|min|max/}}}},m={render:e=>(0,f.jsx)(`div`,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(n,{className:`span-6`,children:`Simple date`}),(0,f.jsx)(n,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`})}),(0,f.jsx)(n,{className:`span-6`,children:`Formatted date`}),(0,f.jsx)(n,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`})}),(0,f.jsx)(n,{className:`span-6`,children:`With tooltip`}),(0,f.jsx)(n,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,showAlternateDate:!0})}),(0,f.jsx)(n,{className:`span-6`,children:`With dropdown menu`}),(0,f.jsx)(n,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`,children:(0,f.jsxs)(i,{children:[(0,f.jsx)(o,{label:`± 1 Hour`}),(0,f.jsx)(o,{label:`± 1 Day`}),(0,f.jsx)(o,{label:`± 1 Week`})]})})})]})}),args:{date:new Date}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <Row>
          <Col className="span-6">Simple date</Col>
          <Col className="span-6">
            <DateDisplay {...args} className="flex-1 whitespace-nowrap" />
          </Col>
          <Col className="span-6">Formatted date</Col>
          <Col className="span-6">
            <DateDisplay {...args} className="flex-1 whitespace-nowrap" format="P p" />
          </Col>
          <Col className="span-6">With tooltip</Col>
          <Col className="span-6">
            <DateDisplay {...args} className="flex-1 whitespace-nowrap" showAlternateDate />
          </Col>
          <Col className="span-6">With dropdown menu</Col>
          <Col className="span-6">
            <DateDisplay {...args} className="flex-1 whitespace-nowrap" format="P p">
              <Menu>
                <MenuItem label="± 1 Hour" />
                <MenuItem label="± 1 Day" />
                <MenuItem label="± 1 Week" />
              </Menu>
            </DateDisplay>
          </Col>
        </Row>
      </div>;
  },
  args: {
    date: new Date()
  }
}`,...m.parameters?.docs?.source}}},h=[`_DateDisplay`]})))()}export{m as n,g as r,d as t};