import{j as a}from"./iframe-DwvN93Ge.js";import"./index.js";import{M as p,a as r}from"./Menu.js";import{R as i,C as e}from"./Responsive.js";import{a as n}from"./RangePanel.js";import"./cloneElement.js";import"./nodeCheck.js";import"./Button.js";import"./Tooltip.js";import"./Dropdown.js";import"./Global.js";import"./zh-CN.js";import"./endOfDay.js";import"./useDebounce.js";import"./getDay.js";const R={component:n,title:"@date/Date Display",parameters:{layout:"centered",controls:{exclude:"children",matchers:{date:/value|min|max/}}}},s={render:t=>a.jsx("div",{children:a.jsxs(i,{children:[a.jsx(e,{className:"span-6",children:"Date duration"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap"})}),a.jsx(e,{className:"span-6",children:"Formatted tooltip"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap",format:"P p"})}),a.jsx(e,{className:"span-6",children:"With dropdown menu"}),a.jsx(e,{className:"span-6",children:a.jsx(n,{...t,className:"flex-1 whitespace-nowrap",format:"P p",children:a.jsxs(p,{children:[a.jsx(r,{label:"Previous month"}),a.jsx(r,{label:"Next month"})]})})})]})}),args:{date:"2022-01-01"}};var o,l,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const b=["_DateDuration"];export{s as _DateDuration,b as __namedExportsOrder,R as default};
