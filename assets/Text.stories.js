import{n as e}from"./rolldown-runtime.js";import{Yt as t,gt as n,t as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";import{n as a,t as o}from"./chunk-NAVWDHVN.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),s=i(),c=i(),l={component:n,tags:[`autodocs`],title:`@core/typography/Text`,parameters:{layout:`centered`,jest:[`core/tests/typography/Text.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-lg`,children:(0,c.jsx)(e,{})})]},u={render(e){return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(t,{children:`San Serif`}),(0,c.jsx)(n,{...e,className:`font-sans`}),(0,c.jsx)(t,{children:`Serif`}),(0,c.jsx)(n,{...e,className:`font-serif`}),(0,c.jsx)(t,{children:`Mono`}),(0,c.jsx)(n,{...e,className:`font-mono`})]})},args:{children:`${o.lorem.sentence()}
${o.helpers.uniqueArray(()=>o.internet.emoji({types:[`food`,`object`]}),9).join(` `)}
${o.lorem.paragraph()}`}},d={render(e){return(0,c.jsx)(n,{...e,clamp:2})},args:{children:o.lorem.paragraphs()}},f={tags:[`!autodocs`],render:e=>(0,c.jsx)(n,{...e}),args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Text {...args} clamp={2} />;
  },
  args: {
    children: faker.lorem.paragraphs()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Text {...args} />,
  args: {}
}`,...f.parameters?.docs?.source}}},p=[`_Text`,`Clamped`,`Tester`]})))()}m();export{d as Clamped,f as Tester,u as _Text,p as __namedExportsOrder,l as default};