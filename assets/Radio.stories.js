import{n as e}from"./rolldown-runtime.js";import{g as t,m as n,t as r}from"./src.js";import{At as i,Mt as a,t as o}from"./src2.js";import{t as s}from"./jsx-runtime.js";var c,l,u,d,f;function p(){return(p=e((()=>{o(),r(),c=s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Radio.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,c.jsx)(e,{})})]},d={render:e=>(0,c.jsx)(n,{children:(0,c.jsxs)(a,{children:[(0,c.jsx)(i,{children:(0,c.jsx)(t,{...e,value:`1`})}),(0,c.jsx)(i,{children:(0,c.jsx)(t,{...e,value:`2`,icon:`icon-[mdi--bell]`})}),(0,c.jsx)(i,{children:(0,c.jsx)(t,{...e,value:`3`,icon:`icon-[mdi--eye-outline]`,iconChecked:`icon-[mdi--eye]`})})]})}),args:{label:`Radio input`,name:`radio`,onChange:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <RadioGroup>
        <Row>
          <Col>
            <Radio {...args} value="1" />
          </Col>
          <Col>
            <Radio {...args} value="2" icon="icon-[mdi--bell]" />
          </Col>
          <Col>
            <Radio {...args} value="3" icon="icon-[mdi--eye-outline]" iconChecked="icon-[mdi--eye]" />
          </Col>
        </Row>
      </RadioGroup>;
  },
  args: {
    label: "Radio input",
    name: "radio",
    onChange: fn() as AnyObject
  }
}`,...d.parameters?.docs?.source}}},f=[`_Radio`]})))()}p();export{d as _Radio,f as __namedExportsOrder,u as default};