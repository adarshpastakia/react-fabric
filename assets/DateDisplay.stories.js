import{j as a}from"./iframe-DvMcemLF.js";import"./index2.js";import{M as c,a as t}from"./Menu.js";import{R as m,C as e}from"./Responsive.js";import{a as i,D as s}from"./RangePanel.js";const d={component:s,subcomponents:{DateDuration:i},title:"@date/Date Display",parameters:{layout:"centered",controls:{exclude:"children",matchers:{date:/value|min|max/}}}},n={render:l=>a.jsx("div",{children:a.jsxs(m,{children:[a.jsx(e,{className:"span-6",children:"Simple date"}),a.jsx(e,{className:"span-6",children:a.jsx(s,{...l,className:"flex-1 whitespace-nowrap"})}),a.jsx(e,{className:"span-6",children:"Formatted date"}),a.jsx(e,{className:"span-6",children:a.jsx(s,{...l,className:"flex-1 whitespace-nowrap",format:"P p"})}),a.jsx(e,{className:"span-6",children:"With tooltip"}),a.jsx(e,{className:"span-6",children:a.jsx(s,{...l,className:"flex-1 whitespace-nowrap",showAlternateDate:!0})}),a.jsx(e,{className:"span-6",children:"With dropdown menu"}),a.jsx(e,{className:"span-6",children:a.jsx(s,{...l,className:"flex-1 whitespace-nowrap",format:"P p",children:a.jsxs(c,{children:[a.jsx(t,{label:"± 1 Hour"}),a.jsx(t,{label:"± 1 Day"}),a.jsx(t,{label:"± 1 Week"})]})})})]})}),args:{date:new Date}};var o,r,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const x=["_DateDisplay"],j=Object.freeze(Object.defineProperty({__proto__:null,_DateDisplay:n,__namedExportsOrder:x,default:d},Symbol.toStringTag,{value:"Module"}));export{j as D,n as _};
