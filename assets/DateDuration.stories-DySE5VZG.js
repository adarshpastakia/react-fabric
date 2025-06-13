import{j as a}from"./iframe-CVyMRGSP.js";import"./index-D3XXfjI1.js";import{M as p,a as r}from"./Menu-D-52EtQQ.js";import{R as i,C as e}from"./Responsive-DFRuVR1v.js";import{a as n}from"./RangePanel-D7gG6Ohq.js";import"./Tooltip-D82JqM4y.js";import"./cloneElement-Ch-Lp1Ig.js";import"./Button-DAqx1TyP.js";import"./Dropdown-DQ3PjC0k.js";import"./Global-BZCLuW51.js";import"./zh-CN-FLa9i-pX.js";import"./endOfDay-CyHfuoBH.js";import"./useDebounce-Bpvok1Zz.js";import"./getDay-Cl8EDKbu.js";const g={component:n,title:"@date/Date Display",parameters:{layout:"centered",controls:{exclude:"children",matchers:{date:/value|min|max/}}}},s={render:t=>a.jsx("div",{children:a.jsxs(i,{children:[a.jsx(e,{className:"span-6",children:"Date duration"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap"})}),a.jsx(e,{className:"span-6",children:"Formatted tooltip"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap",format:"P p"})}),a.jsx(e,{className:"span-6",children:"With dropdown menu"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap",format:"P p",children:a.jsxs(p,{children:[a.jsx(r,{label:"Previous month"}),a.jsx(r,{label:"Next month"})]})})})]})}),args:{date:"2022-01-01"}};var o,l,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const R=["_DateDuration"];export{s as _DateDuration,R as __namedExportsOrder,g as default};
