import{n as e}from"./rolldown-runtime.js";import{t,u as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:n,tags:[`autodocs`],title:`@core/components/Pillbox`,parameters:{layout:`centered`,jest:[`core/tests/pillbox/Pillbox.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`w-full max-w-2xl p-4`,children:(0,i.jsx)(e,{})})]},s=[{value:`all`,label:`All`},{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`archived`,label:`Archived`}],c={render:e=>(0,i.jsx)(n,{...e}),args:{options:s,value:`active`,onChange:a()}},l={render:e=>(0,i.jsx)(n,{...e}),args:{options:[{value:`all`,icon:`icon-[mdi--home]`},{value:`active`,label:`Active`,icon:`icon-[mdi--check-decagram]`},{value:`inactive`,label:`Inactive`,icon:`icon-[mdi--circle-off-outline]`},{value:`archived`,label:`Archived`,icon:`icon-[mdi--archive]`}],value:`active`,onChange:a()}},u={render:e=>(0,i.jsx)(n,{...e}),args:{options:[{value:`all`,label:`All`},{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`,disabled:!0},{value:`archived`,label:`Archived`,disabled:!0}],value:`active`,onChange:a()}},d={render:e=>(0,i.jsx)(n,{...e}),args:{options:s,value:`active`,block:!0,onChange:a()}},f={render:e=>(0,i.jsx)(n,{...e}),args:{options:[{value:`off`,label:`Off`,bg:`--bg-color-muted`,color:`--fabric-text`},{value:`on`,label:`On`}],value:`on`,toggle:!0,onChange:a()}},p={render:e=>(0,i.jsx)(n,{...e}),args:{options:[{value:`light`,icon:`icon-[solar--sun-2-linear]`,bg:`marigold-500`,color:`black`},{value:`dark`,icon:`icon-[solar--moon-linear]`,bg:`#191970`}],value:`light`,toggle:!0,autoHide:!0,onChange:a()}},m={render:e=>(0,i.jsx)(n,{...e}),args:{options:[{value:`success`,label:`Success`,bg:`success-500`,color:`black`},{value:`warning`,label:`Warning`,bg:`warning-500`,color:`black`},{value:`error`,label:`Error`,bg:`danger-500`,color:`white`},{value:`info`,label:`Info`,bg:`info-500`,color:`white`}],value:`success`,onChange:a()}},h={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col items-start gap-4 w-full max-w-2xl`,children:[(0,i.jsx)(n,{options:[{value:`red`,label:`Red`,bg:`scarlet-500`,color:`white`},{value:`green`,label:`Green`,bg:`avocado-500`,color:`white`},{value:`blue`,label:`Blue`,bg:`denim-500`,color:`white`}],value:`green`,onChange:a()}),(0,i.jsx)(n,{options:[{value:`on`,label:`Enabled`,bg:`success-500`,color:`black`},{value:`off`,label:`Disabled`,bg:`tint-500`,color:`tint-200`}],value:`on`,toggle:!0,onChange:a()})]})},g={tags:[`!autodocs`],render:e=>(0,i.jsx)(n,{...e}),args:{options:[{value:`all`,label:`All`,icon:{icon:`list`}},{value:`active`,label:`Active`,icon:{icon:`check`},bg:`primary-500`,color:`white`},{value:`inactive`,label:`Inactive`},{value:`archived`,label:`Archived`,disabled:!0}],value:`active`,onChange:a()}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: baseOptions,
    value: "active",
    onChange: fn()
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: [{
      value: "all",
      icon: "icon-[mdi--home]"
    }, {
      value: "active",
      label: "Active",
      icon: "icon-[mdi--check-decagram]"
    }, {
      value: "inactive",
      label: "Inactive",
      icon: "icon-[mdi--circle-off-outline]"
    }, {
      value: "archived",
      label: "Archived",
      icon: "icon-[mdi--archive]"
    }],
    value: "active",
    onChange: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: [{
      value: "all",
      label: "All"
    }, {
      value: "active",
      label: "Active"
    }, {
      value: "inactive",
      label: "Inactive",
      disabled: true
    }, {
      value: "archived",
      label: "Archived",
      disabled: true
    }],
    value: "active",
    onChange: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: baseOptions,
    value: "active",
    block: true,
    onChange: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: [{
      value: "off",
      label: "Off",
      bg: "--bg-color-muted",
      color: "--fabric-text"
    }, {
      value: "on",
      label: "On"
    }],
    value: "on",
    toggle: true,
    onChange: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: [{
      value: "light",
      icon: "icon-[solar--sun-2-linear]",
      bg: "marigold-500",
      color: "black"
    }, {
      value: "dark",
      icon: "icon-[solar--moon-linear]",
      bg: "#191970"
    }],
    value: "light",
    toggle: true,
    autoHide: true,
    onChange: fn()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Pillbox {...args} />,
  args: {
    options: [{
      value: "success",
      label: "Success",
      bg: "success-500",
      color: "black"
    }, {
      value: "warning",
      label: "Warning",
      bg: "warning-500",
      color: "black"
    }, {
      value: "error",
      label: "Error",
      bg: "danger-500",
      color: "white"
    }, {
      value: "info",
      label: "Info",
      bg: "info-500",
      color: "white"
    }],
    value: "success",
    onChange: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-4 w-full max-w-2xl">
      <Pillbox options={[{
      value: "red",
      label: "Red",
      bg: "scarlet-500",
      color: "white"
    }, {
      value: "green",
      label: "Green",
      bg: "avocado-500",
      color: "white"
    }, {
      value: "blue",
      label: "Blue",
      bg: "denim-500",
      color: "white"
    }]} value="green" onChange={fn()} />
      <Pillbox options={[{
      value: "on",
      label: "Enabled",
      bg: "success-500",
      color: "black"
    }, {
      value: "off",
      label: "Disabled",
      bg: "tint-500",
      color: "tint-200"
    }]} value="on" toggle onChange={fn()} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <Pillbox {...args} />,
  args: {
    options: [{
      value: "all",
      label: "All",
      icon: {
        icon: "list"
      }
    }, {
      value: "active",
      label: "Active",
      icon: {
        icon: "check"
      },
      bg: "primary-500",
      color: "white"
    }, {
      value: "inactive",
      label: "Inactive"
    }, {
      value: "archived",
      label: "Archived",
      disabled: true
    }],
    value: "active",
    onChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_=[`_Pillbox`,`WithIcons`,`DisabledPills`,`BlockMode`,`ToggleMode`,`AutoHide`,`CustomColors`,`ColorVariations`,`Tester`]})))()}v();export{p as AutoHide,d as BlockMode,h as ColorVariations,m as CustomColors,u as DisabledPills,g as Tester,f as ToggleMode,l as WithIcons,c as _Pillbox,_ as __namedExportsOrder,o as default};