import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{g as n,t as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a=t(),o=i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={component:n,tags:[`autodocs`],title:`@core/components/Navigator`,parameters:{layout:`centered`,jest:[`core/tests/components/Navigator.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`w-full max-w-2xl p-4`,children:(0,o.jsx)(e,{})})]},l={render:e=>{let[t,r]=(0,a.useState)(0);return(0,o.jsx)(n,{...e,current:t,length:9,onNavigate:e=>r(t=>t+e),children:(0,o.jsxs)(`span`,{children:[`Item `,t+1]})})},args:{}},u={tags:[`autodocs`],render:()=>(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`First item (prev disabled)`}),(0,o.jsx)(n,{length:5,current:0,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 1`})})]}),(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Middle item (both enabled)`}),(0,o.jsx)(n,{length:5,current:2,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 3`})})]}),(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Last item (next disabled)`}),(0,o.jsx)(n,{length:5,current:4,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 5`})})]})]})},d={tags:[`autodocs`],render:()=>{let[e,t]=(0,a.useState)(0);return(0,o.jsx)(n,{onNavigate:e=>t(t=>Math.max(0,t+e)),children:(0,o.jsxs)(`span`,{children:[`Item `,e+1]})})}},f={tags:[`autodocs`],render:e=>{let[t,r]=(0,a.useState)(0);return(0,o.jsx)(n,{...e,length:10,current:t,disableKeyHandlers:!0,onNavigate:e=>r(t=>t+e),children:(0,o.jsxs)(`span`,{children:[`Item `,t+1,` (keyboard disabled)`]})})},args:{}},p={tags:[`autodocs`],render:()=>(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Primary`}),(0,o.jsx)(n,{length:5,current:2,color:`primary`,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 3`})})]}),(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Info`}),(0,o.jsx)(n,{length:5,current:2,color:`info`,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 3`})})]}),(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Success`}),(0,o.jsx)(n,{length:5,current:2,color:`success`,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 3`})})]}),(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Danger`}),(0,o.jsx)(n,{length:5,current:2,color:`danger`,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 3`})})]}),(0,o.jsxs)(`div`,{className:`mb-4`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Warning`}),(0,o.jsx)(n,{length:5,current:2,color:`warning`,onNavigate:s(),children:(0,o.jsx)(`span`,{children:`Item 3`})})]})]})},m={tags:[`!autodocs`],render:e=>{let[t,r]=(0,a.useState)(0);return(0,o.jsx)(n,{...e,length:10,current:t,onNavigate:e=>r(t=>t+e),children:(0,o.jsxs)(`span`,{children:[`Item `,t+1]})})},args:{}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [current, setCurrent] = useState(0);
    return <Navigator {...args} current={current} length={9} onNavigate={dir => setCurrent(prev => prev + dir)}>
        <span>Item {current + 1}</span>
      </Navigator>;
  },
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["autodocs"],
  render: () => {
    return <Fragment>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">First item (prev disabled)</p>
          <Navigator length={5} current={0} onNavigate={fn()}>
            <span>Item 1</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Middle item (both enabled)</p>
          <Navigator length={5} current={2} onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Last item (next disabled)</p>
          <Navigator length={5} current={4} onNavigate={fn()}>
            <span>Item 5</span>
          </Navigator>
        </div>
      </Fragment>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["autodocs"],
  render: () => {
    const [current, setCurrent] = useState(0);
    return <Navigator onNavigate={dir => setCurrent(prev => Math.max(0, prev + dir))}>
        <span>Item {current + 1}</span>
      </Navigator>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["autodocs"],
  render: args => {
    const [current, setCurrent] = useState(0);
    return <Navigator {...args} length={10} current={current} disableKeyHandlers onNavigate={dir => setCurrent(prev => prev + dir)}>
        <span>Item {current + 1} (keyboard disabled)</span>
      </Navigator>;
  },
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["autodocs"],
  render: () => {
    return <Fragment>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Primary</p>
          <Navigator length={5} current={2} color="primary" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Info</p>
          <Navigator length={5} current={2} color="info" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Success</p>
          <Navigator length={5} current={2} color="success" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Danger</p>
          <Navigator length={5} current={2} color="danger" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted">Warning</p>
          <Navigator length={5} current={2} color="warning" onNavigate={fn()}>
            <span>Item 3</span>
          </Navigator>
        </div>
      </Fragment>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => {
    const [current, setCurrent] = useState(0);
    return <Navigator {...args} length={10} current={current} onNavigate={dir => setCurrent(prev => prev + dir)}>
        <span>Item {current + 1}</span>
      </Navigator>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}},h=[`_Navigator`,`FiniteNavigation`,`InfiniteNavigation`,`DisabledKeyHandlers`,`DifferentColors`,`Tester`]})))()}g();export{p as DifferentColors,f as DisabledKeyHandlers,u as FiniteNavigation,d as InfiniteNavigation,m as Tester,l as _Navigator,h as __namedExportsOrder,c as default};