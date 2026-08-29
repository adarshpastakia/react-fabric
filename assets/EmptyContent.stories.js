import{n as e}from"./rolldown-runtime.js";import{i as t,n,r,t as i}from"./EmptyContent.js";import{t as a}from"./jsx-runtime.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),n(),o=a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={component:i,tags:[`autodocs`],title:`@core/components/EmptyContent`,parameters:{layout:`centered`,jest:[`core/tests/components/EmptyContent.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`w-full max-w-lg`,children:(0,o.jsx)(e,{})})]},l={args:{title:`No Data Available`,message:`Please check back later when data is available.`}},u={args:{title:`No Results`,message:`Try adjusting your search criteria.`,icon:`icon-[mdi--magnify]`,iconColor:`tint`}},d={args:{title:`Custom Icon`,message:`This uses a custom React element as the icon.`,icon:(0,o.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-8 h-8`,children:(0,o.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),iconColor:`primary`}},f={args:{title:`Small`,message:`This is a small empty state.`,size:`sm`}},p={args:{title:`Medium`,message:`This is a medium empty state.`,size:`md`}},m={args:{title:`Get Started`,message:`You haven't created any projects yet. Start by creating your first project.`,icon:`icon-[mdi--folder-plus-outline]`,iconColor:`tint`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{onClick:s(),color:`primary`,variant:`solid`,children:`Create Project`}),(0,o.jsx)(r,{onClick:s(),variant:`link`,children:`Learn More`})]})}},h={args:{title:(0,o.jsxs)(`span`,{className:`text-primary`,children:[`Custom `,(0,o.jsx)(`em`,{children:`Title`})]}),message:`This uses a custom React element as the title.`,iconColor:`secondary`}},g={args:{title:`Minimal`,message:`This empty state has no icon displayed.`,icon:void 0}},_={render:e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{...e,title:`Tint`,message:`Icon color: tint`,iconColor:`tint`}),(0,o.jsx)(i,{...e,title:`Primary`,message:`Icon color: primary`,iconColor:`primary`}),(0,o.jsx)(i,{...e,title:`Secondary`,message:`Icon color: secondary`,iconColor:`secondary`}),(0,o.jsx)(i,{...e,title:`Danger`,message:`Icon color: danger`,iconColor:`danger`})]})},v={tags:[`!autodocs`],args:{},render:e=>(0,o.jsx)(i,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No Data Available",
    message: "Please check back later when data is available."
  }
}`,...l.parameters?.docs?.source},description:{story:`Default story showing EmptyContent with title, message, and default icon.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No Results",
    message: "Try adjusting your search criteria.",
    icon: "icon-[mdi--magnify]",
    iconColor: "tint"
  }
}`,...u.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with a custom icon string.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Custom Icon",
    message: "This uses a custom React element as the icon.",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>,
    iconColor: "primary"
  }
}`,...d.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with a custom React element as icon.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Small",
    message: "This is a small empty state.",
    size: "sm"
  }
}`,...f.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with small size.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Medium",
    message: "This is a medium empty state.",
    size: "md"
  }
}`,...p.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with medium size.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Get Started",
    message: "You haven't created any projects yet. Start by creating your first project.",
    icon: "icon-[mdi--folder-plus-outline]",
    iconColor: "tint",
    children: <>
        <Button onClick={fn()} color="primary" variant="solid">
          Create Project
        </Button>
        <Button onClick={fn()} variant="link">
          Learn More
        </Button>
      </>
  }
}`,...m.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with children (action buttons).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: <span className="text-primary">
        Custom <em>Title</em>
      </span>,
    message: "This uses a custom React element as the title.",
    iconColor: "secondary"
  }
}`,...h.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with a custom React element as title.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Minimal",
    message: "This empty state has no icon displayed.",
    icon: undefined
  }
}`,...g.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with no icon.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <EmptyContent {...args} title="Tint" message="Icon color: tint" iconColor="tint" />
      <EmptyContent {...args} title="Primary" message="Icon color: primary" iconColor="primary" />
      <EmptyContent {...args} title="Secondary" message="Icon color: secondary" iconColor="secondary" />
      <EmptyContent {...args} title="Danger" message="Icon color: danger" iconColor="danger" />
    </>
}`,..._.parameters?.docs?.source},description:{story:`Story demonstrating EmptyContent with different icon colors.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {},
  render: args => <EmptyContent {...args} />
}`,...v.parameters?.docs?.source},description:{story:`Story for interactive component testing — passes arbitrary props to EmptyContent.`,...v.parameters?.docs?.description}}},y=[`Default`,`WithCustomIcon`,`WithElementIcon`,`SmallSize`,`MediumSize`,`WithActions`,`WithElementTitle`,`NoIcon`,`IconColors`,`Tester`]})))()}b();export{l as Default,_ as IconColors,p as MediumSize,g as NoIcon,f as SmallSize,v as Tester,m as WithActions,u as WithCustomIcon,d as WithElementIcon,h as WithElementTitle,y as __namedExportsOrder,c as default};