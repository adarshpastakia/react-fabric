import{n as e}from"./rolldown-runtime.js";import{St as t,t as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./chunk-NAVWDHVN.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=r(),s=r(),c={component:t,tags:[`autodocs`],title:`@core/typography/Abbr`,parameters:{layout:`centered`,jest:[`core/tests/typography/Abbr.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`max-w-lg`,children:(0,s.jsx)(e,{})})]},l=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`+a.lorem.paragraphs(6,`
`),u={render(e){return(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(t,{...e,children:l})})},args:{abbr:[[`lorem ipsum`,`Lorem Ipsum`,`primary`],[`tempor incididunt`,`Tempor Incididunt`,`secondary`],[`adipiscing elit`,`Adipiscing Elit`,`danger`],...a.helpers.uniqueArray(l.split(` `),9).map(e=>[e,a.lorem.sentence(),a.color.rgb()])]}},d={tags:[`!autodocs`],render:e=>(0,s.jsx)(t,{...e}),args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Abbr {...args}>{abbrtext}</Abbr>
      </Fragment>;
  },
  args: {
    abbr: [["lorem ipsum", "Lorem Ipsum", "primary"], ["tempor incididunt", "Tempor Incididunt", "secondary"], ["adipiscing elit", "Adipiscing Elit", "danger"], ...(faker.helpers.uniqueArray(abbrtext.split(" "), 9).map(w => [w, faker.lorem.sentence(), faker.color.rgb()]) as [string, string, string][])]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Abbr {...args} />,
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`Abbreviation`,`Tester`]})))()}p();export{u as Abbreviation,d as Tester,f as __namedExportsOrder,c as default};