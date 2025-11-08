import{j as e,a3 as t,a4 as i,a5 as r,a6 as s,a7 as o}from"./iframe-DwvN93Ge.js";const h={component:t,title:"@core/components/Action Label",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/actionLabel/ActionLabel.test.tsx"]},decorators:[n=>e.jsx("div",{className:"p-4",children:e.jsx(n,{})})]},a={render:n=>e.jsxs("div",{className:"w-96 overflow-hidden outline p-4",children:[e.jsx(t,{...n,actions:[e.jsx(i,{icon:"mdi mdi-filter-minus-outline",color:"danger","aria-label":"Filter Negative"},"negative"),e.jsx(i,{icon:"mdi mdi-filter-plus-outline","aria-label":"Filter"},"positive")],children:"Display label"}),e.jsxs("div",{className:"flex gap-2 items-center overflow-hidden",children:[e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(i,{icon:"mdi mdi-filter-minus-outline",color:"danger","aria-label":"Filter Negative"},"negative"),e.jsx(i,{icon:"mdi mdi-filter-plus-outline","aria-label":"Filter"},"positive")],children:"Item on the left"}),e.jsx(r,{className:"flex-content",icon:s.arrowRight}),e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(i,{icon:"mdi mdi-filter-minus-outline",color:"danger","aria-label":"Filter Negative"},"negative"),e.jsx(i,{icon:"mdi mdi-filter-plus-outline","aria-label":"Filter"},"positive")],children:"Item on the right"})]}),e.jsxs("div",{className:"flex gap-2 items-center overflow-hidden",children:[e.jsx(o,{content:"Longer labeled item on the left",copyContent:!0,children:e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(o,{content:"View something",placement:"bottom",children:e.jsx(i,{icon:"mdi mdi-eye","aria-label":"View"})},"view"),e.jsx(i,{icon:"mdi mdi-thumb-up","aria-label":"open"},"like"),e.jsx(i,{icon:"mdi mdi-share","aria-label":"share"},"share")],children:e.jsx("span",{children:"Longer labeled item on the left"})})}),e.jsx(r,{className:"flex-content",icon:s.arrowRight}),e.jsx(o,{content:"Longer labeled item on the right",copyContent:!0,children:e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(i,{icon:"mdi mdi-eye","aria-label":"View"},"view"),e.jsx(i,{icon:"mdi mdi-thumb-up","aria-label":"open"},"like"),e.jsx(i,{icon:"mdi mdi-share","aria-label":"share"},"share")],children:"Longer labeled item on the right"})})]})]}),args:{}},l={render:n=>e.jsx(t,{...n}),args:{}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <div className="w-96 overflow-hidden outline p-4">
        <ActionLabel {...args} actions={[<Button key="negative" icon="mdi mdi-filter-minus-outline" color="danger" aria-label="Filter Negative" />, <Button key="positive" icon="mdi mdi-filter-plus-outline" aria-label="Filter" />]}>
          Display label
        </ActionLabel>

        <div className="flex gap-2 items-center overflow-hidden">
          <ActionLabel {...args} className="flex-initial" actions={[<Button key="negative" icon="mdi mdi-filter-minus-outline" color="danger" aria-label="Filter Negative" />, <Button key="positive" icon="mdi mdi-filter-plus-outline" aria-label="Filter" />]}>
            Item on the left
          </ActionLabel>
          <Icon className="flex-content" icon={CoreIcons.arrowRight} />
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
          <Icon className="flex-content" icon={CoreIcons.arrowRight} />
          <Tooltip content="Longer labeled item on the right" copyContent>
            <ActionLabel {...args} className="flex-initial" actions={[<Button key="view" icon="mdi mdi-eye" aria-label="View" />, <Button key="like" icon="mdi mdi-thumb-up" aria-label="open" />, <Button key="share" icon="mdi mdi-share" aria-label="share" />]}>
              Longer labeled item on the right
            </ActionLabel>
          </Tooltip>
        </div>
      </div>;
  },
  args: {}
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ActionLabel {...args} />,
  args: {}
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const g=["_ActionLabel","Tester"],f=Object.freeze(Object.defineProperty({__proto__:null,Tester:l,_ActionLabel:a,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{f as A,a as _};
