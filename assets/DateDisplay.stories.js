import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{D as r,O as i,h as a,m as o,t as s}from"./iframe-B-Wcw5ev.js";import{a as c,i as l,t as u}from"./src5.js";var d=t({_DateDisplay:()=>m,__namedExportsOrder:()=>h,default:()=>p}),f,p,m,h,g=e((()=>{s(),u(),f=n(),p={component:c,subcomponents:{DateDuration:l},title:`@date/Date Display`,parameters:{layout:`centered`,controls:{exclude:`children`,matchers:{date:/value|min|max/}}}},m={render:e=>(0,f.jsx)(`div`,{children:(0,f.jsxs)(a,{children:[(0,f.jsx)(o,{className:`span-6`,children:`Simple date`}),(0,f.jsx)(o,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`})}),(0,f.jsx)(o,{className:`span-6`,children:`Formatted date`}),(0,f.jsx)(o,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`})}),(0,f.jsx)(o,{className:`span-6`,children:`With tooltip`}),(0,f.jsx)(o,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,showAlternateDate:!0})}),(0,f.jsx)(o,{className:`span-6`,children:`With dropdown menu`}),(0,f.jsx)(o,{className:`span-6`,children:(0,f.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`,children:(0,f.jsxs)(r,{children:[(0,f.jsx)(i,{label:`± 1 Hour`}),(0,f.jsx)(i,{label:`± 1 Day`}),(0,f.jsx)(i,{label:`± 1 Week`})]})})})]})}),args:{date:new Date}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`_DateDisplay`]}));g();export{m as _DateDisplay,h as __namedExportsOrder,p as default,g as n,d as t};