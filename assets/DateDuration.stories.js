import{n as e,r as t}from"./rolldown-runtime.js";import{At as n,Mt as r,S as i,t as a,w as o}from"./src2.js";import{t as s}from"./jsx-runtime.js";import{o as c,t as l}from"./src7.js";var u=t({_DateDuration:()=>p,__namedExportsOrder:()=>m,default:()=>f}),d,f,p,m;function h(){return(h=e((()=>{a(),l(),d=s(),f={component:c,title:`@date/Date Display`,parameters:{layout:`centered`,controls:{exclude:`children`,matchers:{date:/value|min|max/}}}},p={render:e=>(0,d.jsx)(`div`,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(n,{className:`span-6`,children:`Date duration`}),(0,d.jsx)(n,{className:`span-6`,children:(0,d.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`})}),(0,d.jsx)(n,{className:`span-6`,children:`Formatted tooltip`}),(0,d.jsx)(n,{className:`span-6`,children:(0,d.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`})}),(0,d.jsx)(n,{className:`span-6`,children:`With dropdown menu`}),(0,d.jsx)(n,{className:`span-6`,children:(0,d.jsx)(c,{...e,className:`flex-1 whitespace-nowrap`,format:`P p`,children:(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{label:`Previous month`}),(0,d.jsx)(o,{label:`Next month`})]})})})]})}),args:{date:`2022-01-01`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`_DateDuration`]})))()}export{p as n,h as r,u as t};