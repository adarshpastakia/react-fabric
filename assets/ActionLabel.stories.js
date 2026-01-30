import{j as e,a4 as t,a5 as i,a6 as r,a7 as o}from"./iframe-DpfJK_wQ.js";const b={component:t,title:"@core/components/Action Label",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/actionLabel/ActionLabel.test.tsx"]},decorators:[n=>e.jsx("div",{className:"p-4",children:e.jsx(n,{})})]},a={render:n=>e.jsxs("div",{className:"w-96 overflow-hidden outline p-4",children:[e.jsx(t,{...n,actions:[e.jsx(i,{icon:"mdi mdi-filter-minus-outline",color:"danger","aria-label":"Filter Negative"},"negative"),e.jsx(i,{icon:"mdi mdi-filter-plus-outline","aria-label":"Filter"},"positive")],children:"Display label"}),e.jsxs("div",{className:"flex gap-2 items-center overflow-hidden",children:[e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(i,{icon:"mdi mdi-filter-minus-outline",color:"danger","aria-label":"Filter Negative"},"negative"),e.jsx(i,{icon:"mdi mdi-filter-plus-outline","aria-label":"Filter"},"positive")],children:"Item on the left"}),e.jsx(r,{className:"flex-content",icon:"icon-[mdi--arrow-right]"}),e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(i,{icon:"mdi mdi-filter-minus-outline",color:"danger","aria-label":"Filter Negative"},"negative"),e.jsx(i,{icon:"mdi mdi-filter-plus-outline","aria-label":"Filter"},"positive")],children:"Item on the right"})]}),e.jsxs("div",{className:"flex gap-2 items-center overflow-hidden",children:[e.jsx(o,{content:"Longer labeled item on the left",copyContent:!0,children:e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(o,{content:"View something",placement:"bottom",children:e.jsx(i,{icon:"mdi mdi-eye","aria-label":"View"})},"view"),e.jsx(i,{icon:"mdi mdi-thumb-up","aria-label":"open"},"like"),e.jsx(i,{icon:"mdi mdi-share","aria-label":"share"},"share")],children:e.jsx("span",{children:"Longer labeled item on the left"})})}),e.jsx(r,{className:"flex-content",icon:"icon-[mdi--arrow-right]"}),e.jsx(o,{content:"Longer labeled item on the right",copyContent:!0,children:e.jsx(t,{...n,className:"flex-initial",actions:[e.jsx(i,{icon:"mdi mdi-eye","aria-label":"View"},"view"),e.jsx(i,{icon:"mdi mdi-thumb-up","aria-label":"open"},"like"),e.jsx(i,{icon:"mdi mdi-share","aria-label":"share"},"share")],children:"Longer labeled item on the right"})})]})]}),args:{}},l={render:n=>e.jsx(t,{...n}),args:{}};var s,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <ActionLabel {...args} />,
  args: {}
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const h=["_ActionLabel","Tester"],x=Object.freeze(Object.defineProperty({__proto__:null,Tester:l,_ActionLabel:a,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{x as A,a as _};
