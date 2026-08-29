import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{It as n,K as r,N as i,P as a,S as o,f as s,gt as c,m as l,t as u,w as d,zt as f}from"./src2.js";import{t as p}from"./jsx-runtime.js";var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),m=p(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:i,tags:[`autodocs`],title:`@core/components/Dropdown`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Dropdown.test.tsx`]},decorators:[e=>(0,m.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,m.jsx)(e,{})})]},_={render:e=>(0,m.jsxs)(i,{...e,className:`overflow-auto`,children:[(0,m.jsx)(t,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Menu`}),(0,m.jsxs)(o,{onClick:h(),className:`overflow-auto scroll-thin`,children:[(0,m.jsx)(d,{id:`1`,label:`Item One`}),(0,m.jsx)(d,{id:`2`,label:`Item Two`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`,active:!0}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`}),(0,m.jsx)(d,{id:`3`,label:`Item Three`})]})]}),args:{onClose:h(),onOpen:h()}},v={render:e=>(0,m.jsxs)(i,{...e,children:[(0,m.jsx)(t,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Card`}),(0,m.jsxs)(r,{children:[(0,m.jsx)(f,{children:(0,m.jsx)(c,{children:`Some content`})}),(0,m.jsx)(n,{className:`p-2`,flex:!0,justify:`end`,children:(0,m.jsx)(a,{children:(0,m.jsx)(t,{onClick:h(),children:`Close`})})})]})]}),args:{onClose:h(),onOpen:h()}},y={render:e=>(0,m.jsxs)(i,{...e,children:[(0,m.jsx)(t,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Panel`}),(0,m.jsxs)(s,{children:[(0,m.jsxs)(l,{title:`Some panel`,children:[(0,m.jsx)(f,{children:(0,m.jsx)(c,{children:`Some content`})}),(0,m.jsx)(n,{className:`p-2`,flex:!0,justify:`end`,children:(0,m.jsx)(a,{children:(0,m.jsx)(t,{children:`Close`})})})]}),(0,m.jsxs)(l,{title:`Some panel`,children:[(0,m.jsx)(f,{children:(0,m.jsx)(c,{children:`Some content`})}),(0,m.jsx)(n,{className:`p-2`,flex:!0,justify:`end`,children:(0,m.jsx)(a,{children:(0,m.jsx)(t,{children:`Close`})})})]}),(0,m.jsxs)(l,{title:`Some panel`,children:[(0,m.jsx)(f,{children:(0,m.jsx)(c,{children:`Some content`})}),(0,m.jsx)(n,{className:`p-2`,flex:!0,justify:`end`,children:(0,m.jsx)(a,{children:(0,m.jsx)(t,{children:`Close`})})})]})]})]}),args:{onClose:h(),onOpen:h()}},b={render:e=>(0,m.jsxs)(i,{...e,children:[(0,m.jsx)(t,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Panel`}),(0,m.jsxs)(r,{children:[(0,m.jsx)(f,{children:`Nested dropdowns`}),(0,m.jsxs)(n,{flex:!0,justify:`end`,children:[(0,m.jsx)(a,{children:(0,m.jsx)(t,{children:`Dismiss Parent`})}),(0,m.jsxs)(i,{children:[(0,m.jsx)(t,{children:`Child`}),(0,m.jsx)(r,{children:(0,m.jsx)(n,{children:(0,m.jsx)(a,{children:(0,m.jsx)(t,{children:`Dismiss Child`})})})})]})]})]})]}),args:{onClose:h(),onOpen:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args} className="overflow-auto">
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Menu</Button>
        <Menu onClick={fn()} className="overflow-auto scroll-thin">
          <MenuItem id="1" label="Item One" />
          <MenuItem id="2" label="Item Two" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" active />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
        </Menu>
      </Dropdown>;
  },
  args: {
    onClose: fn(),
    onOpen: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Card</Button>
        <Card>
          <Content>
            <Text>Some content</Text>
          </Content>
          <Footer className="p-2" flex justify="end">
            <DropdownDismiss>
              <Button onClick={fn()}>Close</Button>
            </DropdownDismiss>
          </Footer>
        </Card>
      </Dropdown>;
  },
  args: {
    onClose: fn(),
    onOpen: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Panel</Button>
        <PanelGroup>
          <Panel title="Some panel">
            <Content>
              <Text>Some content</Text>
            </Content>
            <Footer className="p-2" flex justify="end">
              <DropdownDismiss>
                <Button>Close</Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
          <Panel title="Some panel">
            <Content>
              <Text>Some content</Text>
            </Content>
            <Footer className="p-2" flex justify="end">
              <DropdownDismiss>
                <Button>Close</Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
          <Panel title="Some panel">
            <Content>
              <Text>Some content</Text>
            </Content>
            <Footer className="p-2" flex justify="end">
              <DropdownDismiss>
                <Button>Close</Button>
              </DropdownDismiss>
            </Footer>
          </Panel>
        </PanelGroup>
      </Dropdown>;
  },
  args: {
    onClose: fn(),
    onOpen: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Panel</Button>
        <Card>
          <Content>Nested dropdowns</Content>
          <Footer flex justify="end">
            <DropdownDismiss>
              <Button>Dismiss Parent</Button>
            </DropdownDismiss>
            <Dropdown>
              <Button>Child</Button>
              <Card>
                <Footer>
                  <DropdownDismiss>
                    <Button>Dismiss Child</Button>
                  </DropdownDismiss>
                </Footer>
              </Card>
            </Dropdown>
          </Footer>
        </Card>
      </Dropdown>;
  },
  args: {
    onClose: fn(),
    onOpen: fn()
  }
}`,...b.parameters?.docs?.source}}},x=[`_Dropdown`,`CardContent`,`PanelContent`,`NestedDropdown`]})))()}S();export{v as CardContent,b as NestedDropdown,y as PanelContent,_ as _Dropdown,x as __namedExportsOrder,g as default};