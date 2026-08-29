import{n as e,r as t}from"./rolldown-runtime.js";import{o as n,t as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";var a=t({CircleColors:()=>d,CircleSizes:()=>u,TesterCircle:()=>l,_ProgressCircle:()=>c,__namedExportsOrder:()=>f,default:()=>s}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=i(),s={component:n,title:`@core/components/Progress`,parameters:{layout:`centered`,jest:[`core/tests/progress/Progress.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`max-w-full w-2xl p-4`,children:(0,o.jsx)(e,{})})]},c={render:e=>(0,o.jsx)(n,{...e}),args:{value:.5,size:`md`,color:`primary-500`}},l={tags:[`!autodocs`],render:e=>(0,o.jsx)(n,{...e}),args:{value:.5,size:`md`,color:`primary-500`}},u={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,o.jsx)(n,{value:.75,size:`sm`,color:`primary-500`}),(0,o.jsx)(`span`,{className:`text-sm`,children:`sm`})]}),(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,o.jsx)(n,{value:.75,size:`md`,color:`primary-500`}),(0,o.jsx)(`span`,{className:`text-sm`,children:`md`})]}),(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,o.jsx)(n,{value:.75,size:`lg`,color:`primary-500`}),(0,o.jsx)(`span`,{className:`text-sm`,children:`lg`})]}),(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,o.jsx)(n,{value:.75,size:`xl`,color:`primary-500`}),(0,o.jsx)(`span`,{className:`text-sm`,children:`xl`})]})]})},d={render:()=>(0,o.jsx)(`div`,{className:`flex items-center gap-6`,children:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`].map(e=>(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,o.jsx)(n,{value:.75,size:`md`,color:e}),(0,o.jsx)(`span`,{className:`text-sm`,children:e})]},e))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ProgressCircle {...args} />,
  args: {
    value: 0.5,
    size: "md",
    color: "primary-500"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <ProgressCircle {...args} />,
  args: {
    value: 0.5,
    size: "md",
    color: "primary-500"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="sm" color="primary-500" />
        <span className="text-sm">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="md" color="primary-500" />
        <span className="text-sm">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="lg" color="primary-500" />
        <span className="text-sm">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={0.75} size="xl" color="primary-500" />
        <span className="text-sm">xl</span>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = ["primary", "secondary", "success", "warning", "danger", "info"] as const;
    return <div className="flex items-center gap-6">
        {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
            <ProgressCircle value={0.75} size="md" color={color} />
            <span className="text-sm">{color}</span>
          </div>)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`_ProgressCircle`,`TesterCircle`,`CircleSizes`,`CircleColors`]})))()}export{p as a,c as i,u as n,a as r,d as t};