import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{C as n,L as r,R as i,X as a,Z as o}from"./iframe-BBjx9o_X.js";import{i as s,t as c}from"./src5.js";var l,u,d,f,p=e((()=>{n(),c(),l=t(),u={component:s,title:`@date/Date Display`,parameters:{layout:`centered`,controls:{exclude:`children`,matchers:{date:/value|min|max/}}}},d={render:e=>(0,l.jsx)(`div`,{children:(0,l.jsxs)(i,{children:[(0,l.jsx)(r,{className:`span-6`,children:`Date duration`}),(0,l.jsx)(r,{className:`span-6`,children:(0,l.jsx)(s,{...e,className:`flex-1 whitespace-nowrap`})}),(0,l.jsx)(r,{className:`span-6`,children:`Formatted tooltip`}),(0,l.jsx)(r,{className:`span-6`,children:(0,l.jsx)(s,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`})}),(0,l.jsx)(r,{className:`span-6`,children:`With dropdown menu`}),(0,l.jsx)(r,{className:`span-6`,children:(0,l.jsx)(s,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{label:`Previous month`}),(0,l.jsx)(o,{label:`Next month`})]})})})]})}),args:{date:`2022-01-01`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <Row>
          <Col className="span-6">Date duration</Col>
          <Col className="span-6">
            <DateDuration {...args} className="flex-1 whitespace-nowrap" />
          </Col>
          <Col className="span-6">Formatted tooltip</Col>
          <Col className="span-6">
            <DateDuration {...args} className="flex-1 whitespace-nowrap" format="P p" />
          </Col>
          <Col className="span-6">With dropdown menu</Col>
          <Col className="span-6">
            <DateDuration {...args} className="flex-1 whitespace-nowrap" format="P p">
              <Menu>
                <MenuItem label="Previous month" />
                <MenuItem label="Next month" />
              </Menu>
            </DateDuration>
          </Col>
        </Row>
      </div>;
  },
  args: {
    date: "2022-01-01"
  }
}`,...d.parameters?.docs?.source}}},f=[`_DateDuration`]}));p();export{d as _DateDuration,f as __namedExportsOrder,u as default,p as t};