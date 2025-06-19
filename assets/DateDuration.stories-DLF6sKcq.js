import{j as a}from"./iframe-DcfUrZ2L.js";import"./index-Bl9sirez.js";import{M as p,a as r}from"./Menu-BypgFP0F.js";import{R as i,C as e}from"./Responsive-B-3sWBW3.js";import{a as n}from"./RangePanel-UGOHeYgx.js";import"./cloneElement-B4wm8_Ia.js";import"./Button-7pM1lgGA.js";import"./Tooltip-Dv6V4Byx.js";import"./Dropdown-Cqgvd0wk.js";import"./Global-CmkQSaMP.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./useDebounce-oR1dm03r.js";import"./getDay-B6LYz-AP.js";const g={component:n,title:"@date/Date Display",parameters:{layout:"centered",controls:{exclude:"children",matchers:{date:/value|min|max/}}}},s={render:t=>a.jsx("div",{children:a.jsxs(i,{children:[a.jsx(e,{className:"span-6",children:"Date duration"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap"})}),a.jsx(e,{className:"span-6",children:"Formatted tooltip"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap",format:"P p"})}),a.jsx(e,{className:"span-6",children:"With dropdown menu"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap",format:"P p",children:a.jsxs(p,{children:[a.jsx(r,{label:"Previous month"}),a.jsx(r,{label:"Next month"})]})})})]})}),args:{date:"2022-01-01"}};var o,l,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
