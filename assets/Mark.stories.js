import{n as e}from"./rolldown-runtime.js";import{t,vt as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./chunk-NAVWDHVN.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),o=r(),s=r(),c={component:n,tags:[`autodocs`],title:`@core/typography/Mark`,parameters:{layout:`centered`,jest:[`core/tests/typography/Mark.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`max-w-lg`,children:(0,s.jsx)(e,{})})]},l=a.lorem.paragraphs(6,`
`),u={render(e){return(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(n,{...e,children:l})})},args:{mark:a.helpers.uniqueArray(l.split(` `),9).map(e=>[e,a.color.rgb()])}},d={tags:[`!autodocs`],render:e=>(0,s.jsx)(n,{...e}),args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Mark {...args}>{marktext}</Mark>
      </Fragment>;
  },
  args: {
    mark: faker.helpers.uniqueArray(marktext.split(" "), 9).map(w => [w, faker.color.rgb()])
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Mark {...args} />,
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`MarkedText`,`Tester`]})))()}p();export{u as MarkedText,d as Tester,f as __namedExportsOrder,c as default};