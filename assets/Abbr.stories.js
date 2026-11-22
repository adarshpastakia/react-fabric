import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{St as n,t as r}from"./src2.js";import{n as i,t as a}from"./en.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),o=t(),s={component:n,tags:[`autodocs`],title:`@core/typography/Abbr`,parameters:{layout:`centered`,jest:[`core/tests/typography/Abbr.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`max-w-lg`,children:(0,o.jsx)(e,{})})]},c=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`+i.lorem.paragraphs(6,`
`),l={render(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n,{...e,children:c})})},args:{abbr:[[`lorem ipsum`,`Lorem Ipsum`,`primary`],[`tempor incididunt`,`Tempor Incididunt`,`secondary`],[`adipiscing elit`,`Adipiscing Elit`,`danger`],...i.helpers.uniqueArray(c.split(` `),9).map(e=>[e,i.lorem.sentence(),i.color.rgb()])]}},u={tags:[`!autodocs`],render:e=>(0,o.jsx)(n,{...e}),args:{}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Abbr {...args}>{abbrtext}</Abbr>
      </Fragment>;
  },
  args: {
    abbr: [["lorem ipsum", "Lorem Ipsum", "primary"], ["tempor incididunt", "Tempor Incididunt", "secondary"], ["adipiscing elit", "Adipiscing Elit", "danger"], ...(faker.helpers.uniqueArray(abbrtext.split(" "), 9).map(w => [w, faker.lorem.sentence(), faker.color.rgb()]) as [string, string, string][])]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Abbr {...args} />,
  args: {}
}`,...u.parameters?.docs?.source}}},d=[`Abbreviation`,`Tester`]})))()}f();export{l as Abbreviation,u as Tester,d as __namedExportsOrder,s as default};