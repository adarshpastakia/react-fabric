import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{$ as r,Q as i,it as a,t as o}from"./src3.js";var s=t({ActionState:()=>v,Badges:()=>_,Colors:()=>p,Sizes:()=>m,States:()=>g,Styles:()=>h,Tester:()=>y,_Button:()=>f,__namedExportsOrder:()=>b,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{c=n(),o(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={component:i,title:`@core/components/Button`,parameters:{layout:`centered`,controls:{exclude:/^(children|as)/},jest:[`core/tests/buttons/Button.test.tsx`]},decorators:[e=>(0,l.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,l.jsx)(e,{})})]},f={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(i,{...e,spinOnHover:!0,icon:`mdi mdi-react`,"aria-label":`Click Me!`}),(0,l.jsx)(i,{...e,as:`a`,children:`Click Me!`}),(0,l.jsx)(i,{...e,icon:`mdi mdi-react`,children:`Click Me!`}),(0,l.jsx)(i,{...e,icon:`mdi mdi-react`,altIcon:`mdi mdi-chevron-down`,children:`Click Me!`})]}),args:{}},p={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(i,{...e}),(0,l.jsx)(i,{...e,color:`muted`}),(0,l.jsx)(i,{...e,color:`primary`}),(0,l.jsx)(i,{...e,color:`accent`}),(0,l.jsx)(i,{...e,color:`info`}),(0,l.jsx)(i,{...e,color:`danger`}),(0,l.jsx)(i,{...e,color:`success`}),(0,l.jsx)(i,{...e,color:`warning`})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`}},m={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(i,{...e,size:`xs`}),(0,l.jsx)(i,{...e,size:`sm`}),(0,l.jsx)(i,{...e}),(0,l.jsx)(i,{...e,size:`md`}),(0,l.jsx)(i,{...e,size:`lg`}),(0,l.jsx)(i,{...e,size:`xl`})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`}},h={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(i,{...e,variant:void 0}),(0,l.jsx)(i,{...e,variant:`outline`}),(0,l.jsx)(i,{...e,variant:`soft`}),(0,l.jsx)(i,{...e,variant:`solid`}),(0,l.jsx)(i,{...e,variant:`link`})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`}},g={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(i,{...e,disabled:!0}),(0,l.jsx)(i,{...e,loading:!0}),(0,l.jsx)(i,{...e,active:!0})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`}},_={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(i,{...e,badge:{value:999,max:99},altIcon:`mdi mdi-chevron-down`}),(0,l.jsx)(a,{value:`TS`,placement:`top-start`,children:(0,l.jsx)(r,{content:`Tooltip`,children:(0,l.jsx)(i,{...e})})}),(0,l.jsx)(r,{content:`Tooltip`,children:(0,l.jsx)(a,{ping:!0,className:`bg-success-500`,children:(0,l.jsx)(i,{...e})})})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`}},v={render:e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(r,{content:`Tooltip`,children:(0,l.jsx)(i,{...e})}),(0,l.jsx)(i,{...e,color:`success`}),(0,l.jsx)(i,{...e,color:`danger`})]}),args:{children:`Click Me!`,icon:`mdi mdi-react`,actionMessage:`Action completed`,onClick:e=>(u()(e),new Promise(e=>{setTimeout(()=>{e(1)},2e3)}))}},y={render:e=>(0,l.jsx)(i,{...e}),args:{}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} spinOnHover icon="mdi mdi-react" aria-label="Click Me!" />
        <Button {...args} as="a">
          Click Me!
        </Button>
        <Button {...args} icon="mdi mdi-react">
          Click Me!
        </Button>
        <Button {...args} icon="mdi mdi-react" altIcon="mdi mdi-chevron-down">
          Click Me!
        </Button>
      </Fragment>;
  },
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} />
        <Button {...args} color="muted" />
        <Button {...args} color="primary" />
        <Button {...args} color="accent" />
        <Button {...args} color="info" />
        <Button {...args} color="danger" />
        <Button {...args} color="success" />
        <Button {...args} color="warning" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} size="xs" />
        <Button {...args} size="sm" />
        <Button {...args} />
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} variant={undefined} />
        <Button {...args} variant="outline" />
        <Button {...args} variant="soft" />
        <Button {...args} variant="solid" />
        <Button {...args} variant="link" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} disabled />
        <Button {...args} loading />
        <Button {...args} active />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Button {...args} badge={{
        value: 999,
        max: 99
      }} altIcon="mdi mdi-chevron-down" />
        <Badge value="TS" placement="top-start">
          <Tooltip content="Tooltip">
            <Button {...args} />
          </Tooltip>
        </Badge>
        <Tooltip content="Tooltip">
          <Badge ping className="bg-success-500">
            <Button {...args} />
          </Badge>
        </Tooltip>
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip content="Tooltip">
          <Button {...args} />
        </Tooltip>
        <Button {...args} color="success" />
        <Button {...args} color="danger" />
      </Fragment>;
  },
  args: {
    children: "Click Me!",
    icon: "mdi mdi-react",
    actionMessage: "Action completed",
    onClick: (e: AnyObject) => {
      fn()(e);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      });
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Show action completed animation`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} />,
  args: {}
}`,...y.parameters?.docs?.source}}},b=[`_Button`,`Colors`,`Sizes`,`Styles`,`States`,`Badges`,`ActionState`,`Tester`]}));x();export{v as ActionState,_ as Badges,p as Colors,m as Sizes,g as States,h as Styles,y as Tester,f as _Button,b as __namedExportsOrder,d as default,x as n,s as t};