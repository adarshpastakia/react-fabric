import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{$ as r,Q as i,at as a,ft as o,t as s}from"./src3.js";var c=t({Tester:()=>f,_ActionLabel:()=>d,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p,m=e((()=>{s(),l=n(),u={component:o,title:`@core/components/Action Label`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/actionLabel/ActionLabel.test.tsx`]},decorators:[e=>(0,l.jsx)(`div`,{className:`p-4`,children:(0,l.jsx)(e,{})})]},d={render:e=>(0,l.jsxs)(`div`,{className:`w-96 overflow-hidden outline p-4`,children:[(0,l.jsx)(o,{...e,actions:[(0,l.jsx)(i,{icon:`mdi mdi-filter-minus-outline`,color:`danger`,"aria-label":`Filter Negative`},`negative`),(0,l.jsx)(i,{icon:`mdi mdi-filter-plus-outline`,"aria-label":`Filter`},`positive`)],children:`Display label`}),(0,l.jsxs)(`div`,{className:`flex gap-2 items-center overflow-hidden`,children:[(0,l.jsx)(o,{...e,className:`flex-initial`,actions:[(0,l.jsx)(i,{icon:`mdi mdi-filter-minus-outline`,color:`danger`,"aria-label":`Filter Negative`},`negative`),(0,l.jsx)(i,{icon:`mdi mdi-filter-plus-outline`,"aria-label":`Filter`},`positive`)],children:`Item on the left`}),(0,l.jsx)(a,{className:`flex-content`,icon:`icon-[mdi--arrow-right]`}),(0,l.jsx)(o,{...e,className:`flex-initial`,actions:[(0,l.jsx)(i,{icon:`mdi mdi-filter-minus-outline`,color:`danger`,"aria-label":`Filter Negative`},`negative`),(0,l.jsx)(i,{icon:`mdi mdi-filter-plus-outline`,"aria-label":`Filter`},`positive`)],children:`Item on the right`})]}),(0,l.jsxs)(`div`,{className:`flex gap-2 items-center overflow-hidden`,children:[(0,l.jsx)(r,{content:`Longer labeled item on the left`,copyContent:!0,children:(0,l.jsx)(o,{...e,className:`flex-initial`,actions:[(0,l.jsx)(r,{content:`View something`,placement:`bottom`,children:(0,l.jsx)(i,{icon:`mdi mdi-eye`,"aria-label":`View`})},`view`),(0,l.jsx)(i,{icon:`mdi mdi-thumb-up`,"aria-label":`open`},`like`),(0,l.jsx)(i,{icon:`mdi mdi-share`,"aria-label":`share`},`share`)],children:(0,l.jsx)(`span`,{children:`Longer labeled item on the left`})})}),(0,l.jsx)(a,{className:`flex-content`,icon:`icon-[mdi--arrow-right]`}),(0,l.jsx)(r,{content:`Longer labeled item on the right`,copyContent:!0,children:(0,l.jsx)(o,{...e,className:`flex-initial`,actions:[(0,l.jsx)(i,{icon:`mdi mdi-eye`,"aria-label":`View`},`view`),(0,l.jsx)(i,{icon:`mdi mdi-thumb-up`,"aria-label":`open`},`like`),(0,l.jsx)(i,{icon:`mdi mdi-share`,"aria-label":`share`},`share`)],children:`Longer labeled item on the right`})})]})]}),args:{}},f={render:e=>(0,l.jsx)(o,{...e}),args:{}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="w-96 overflow-hidden outline p-4">
        <ActionLabel {...args} actions={[<Button key="negative" icon="mdi mdi-filter-minus-outline" color="danger" aria-label="Filter Negative" />, <Button key="positive" icon="mdi mdi-filter-plus-outline" aria-label="Filter" />]}>
          Display label
        </ActionLabel>

        <div className="flex gap-2 items-center overflow-hidden">
          <ActionLabel {...args} className="flex-initial" actions={[<Button key="negative" icon="mdi mdi-filter-minus-outline" color="danger" aria-label="Filter Negative" />, <Button key="positive" icon="mdi mdi-filter-plus-outline" aria-label="Filter" />]}>
            Item on the left
          </ActionLabel>
          <Icon className="flex-content" icon="icon-[mdi--arrow-right]" />
          <ActionLabel {...args} className="flex-initial" actions={[<Button key="negative" icon="mdi mdi-filter-minus-outline" color="danger" aria-label="Filter Negative" />, <Button key="positive" icon="mdi mdi-filter-plus-outline" aria-label="Filter" />]}>
            Item on the right
          </ActionLabel>
        </div>

        <div className="flex gap-2 items-center overflow-hidden">
          <Tooltip content="Longer labeled item on the left" copyContent>
            <ActionLabel {...args} className="flex-initial" actions={[<Tooltip key="view" content="View something" placement="bottom">
                  <Button icon="mdi mdi-eye" aria-label="View" />
                </Tooltip>, <Button key="like" icon="mdi mdi-thumb-up" aria-label="open" />, <Button key="share" icon="mdi mdi-share" aria-label="share" />]}>
              <span>Longer labeled item on the left</span>
            </ActionLabel>
          </Tooltip>
          <Icon className="flex-content" icon="icon-[mdi--arrow-right]" />
          <Tooltip content="Longer labeled item on the right" copyContent>
            <ActionLabel {...args} className="flex-initial" actions={[<Button key="view" icon="mdi mdi-eye" aria-label="View" />, <Button key="like" icon="mdi mdi-thumb-up" aria-label="open" />, <Button key="share" icon="mdi mdi-share" aria-label="share" />]}>
              Longer labeled item on the right
            </ActionLabel>
          </Tooltip>
        </div>
      </div>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ActionLabel {...args} />,
  args: {}
}`,...f.parameters?.docs?.source}}},p=[`_ActionLabel`,`Tester`]}));m();export{f as Tester,d as _ActionLabel,p as __namedExportsOrder,u as default,m as n,c as t};