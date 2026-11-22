import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{Yt as n,gt as r,t as i}from"./src2.js";import{n as a,t as o}from"./en.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{i(),o(),s=t(),c={component:r,tags:[`autodocs`],title:`@core/typography/Text`,parameters:{layout:`centered`,jest:[`core/tests/typography/Text.test.tsx`]},decorators:[e=>(0,s.jsx)(`div`,{className:`max-w-lg`,children:(0,s.jsx)(e,{})})]},l={render(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:`San Serif`}),(0,s.jsx)(r,{...e,className:`font-sans`}),(0,s.jsx)(n,{children:`Serif`}),(0,s.jsx)(r,{...e,className:`font-serif`}),(0,s.jsx)(n,{children:`Mono`}),(0,s.jsx)(r,{...e,className:`font-mono`})]})},args:{children:`${a.lorem.sentence()}
${a.helpers.uniqueArray(()=>a.internet.emoji({types:[`food`,`object`]}),9).join(` `)}
${a.lorem.paragraph()}`}},u={render(e){return(0,s.jsx)(r,{...e,clamp:2})},args:{children:a.lorem.paragraphs()}},d={tags:[`!autodocs`],render:e=>(0,s.jsx)(r,{...e}),args:{}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Title>San Serif</Title>
        <Text {...args} className="font-sans" />
        <Title>Serif</Title>
        <Text {...args} className="font-serif" />
        <Title>Mono</Title>
        <Text {...args} className="font-mono" />
      </Fragment>;
  },
  args: {
    children: \`\${faker.lorem.sentence()}
\${faker.helpers.uniqueArray(() => faker.internet.emoji({
      types: ["food", "object"]
    }), 9).join(" ")}
\${faker.lorem.paragraph()}\`
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Text {...args} clamp={2} />;
  },
  args: {
    children: faker.lorem.paragraphs()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Text {...args} />,
  args: {}
}`,...d.parameters?.docs?.source}}},f=[`_Text`,`Clamped`,`Tester`]})))()}p();export{u as Clamped,d as Tester,l as _Text,f as __namedExportsOrder,c as default};