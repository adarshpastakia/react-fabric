import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{t as n,vt as r}from"./src2.js";import{n as i,t as a}from"./en.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),o=t(),s={component:r,tags:[`autodocs`],title:`@core/typography/Mark`,parameters:{layout:`centered`,jest:[`core/tests/typography/Mark.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`max-w-lg`,children:(0,o.jsx)(e,{})})]},c=i.lorem.paragraphs(6,`
`),l={render(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r,{...e,children:c})})},args:{mark:i.helpers.uniqueArray(c.split(` `),9).map(e=>[e,i.color.rgb()])}},u={tags:[`!autodocs`],render:e=>(0,o.jsx)(r,{...e}),args:{}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Mark {...args}>{marktext}</Mark>
      </Fragment>;
  },
  args: {
    mark: faker.helpers.uniqueArray(marktext.split(" "), 9).map(w => [w, faker.color.rgb()])
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Mark {...args} />,
  args: {}
}`,...u.parameters?.docs?.source}}},d=[`MarkedText`,`Tester`]})))()}f();export{l as MarkedText,u as Tester,d as __namedExportsOrder,s as default};