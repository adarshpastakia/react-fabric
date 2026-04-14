import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{C as r,D as i,E as a,G as o,Q as s,S as c,W as l,a as u,g as d,nt as f,t as p,tt as m}from"./src3.js";var h=t({CardContent:()=>b,NestedDropdown:()=>S,PanelContent:()=>x,_Dropdown:()=>y,__namedExportsOrder:()=>C,default:()=>v}),g,_,v,y,b,x,S,C,w=e((()=>{p(),g=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={component:m,title:`@core/components/Dropdown`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Dropdown.test.tsx`]},decorators:[e=>(0,g.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,g.jsx)(e,{})})]},y={render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(s,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Menu`}),(0,g.jsxs)(a,{onClick:_(),className:`overflow-auto scroll-thin`,children:[(0,g.jsx)(i,{id:`1`,label:`Item One`}),(0,g.jsx)(i,{id:`2`,label:`Item Two`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`}),(0,g.jsx)(i,{id:`3`,label:`Item Three`})]})]}),args:{onClose:_(),onOpen:_()}},b={render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(s,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Card`}),(0,g.jsxs)(l,{children:[(0,g.jsx)(u,{children:`Some content`}),(0,g.jsx)(o,{className:`p-2`,flex:!0,justify:`end`,children:(0,g.jsx)(f,{children:(0,g.jsx)(s,{onClick:_(),children:`Close`})})})]})]}),args:{onClose:_(),onOpen:_()}},x={render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(s,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Panel`}),(0,g.jsxs)(c,{children:[(0,g.jsxs)(r,{title:`Some panel`,children:[(0,g.jsx)(d,{children:(0,g.jsx)(u,{children:`Some content`})}),(0,g.jsx)(o,{className:`p-2`,flex:!0,justify:`end`,children:(0,g.jsx)(f,{children:(0,g.jsx)(s,{children:`Close`})})})]}),(0,g.jsxs)(r,{title:`Some panel`,children:[(0,g.jsx)(d,{children:(0,g.jsx)(u,{children:`Some content`})}),(0,g.jsx)(o,{className:`p-2`,flex:!0,justify:`end`,children:(0,g.jsx)(f,{children:(0,g.jsx)(s,{children:`Close`})})})]})]})]}),args:{onClose:_(),onOpen:_()}},S={render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(s,{altIcon:`icon-[mdi--chevron-down]`,children:`Dropdown Panel`}),(0,g.jsxs)(l,{children:[(0,g.jsx)(d,{children:`Nested dropdowns`}),(0,g.jsxs)(o,{flex:!0,justify:`end`,children:[(0,g.jsx)(f,{children:(0,g.jsx)(s,{children:`Dismiss Parent`})}),(0,g.jsxs)(m,{children:[(0,g.jsx)(s,{children:`Child`}),(0,g.jsx)(l,{children:(0,g.jsx)(f,{children:(0,g.jsx)(s,{children:`Dismiss Child`})})})]})]})]})]}),args:{onClose:_(),onOpen:_()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Menu</Button>
        <Menu onClick={fn()} className="overflow-auto scroll-thin">
          <MenuItem id="1" label="Item One" />
          <MenuItem id="2" label="Item Two" />
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
          <MenuItem id="3" label="Item Three" />
          <MenuItem id="3" label="Item Three" />
        </Menu>
      </Dropdown>;
  },
  args: {
    onClose: fn(),
    onOpen: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Card</Button>
        <Card>
          <Text>Some content</Text>
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        </PanelGroup>
      </Dropdown>;
  },
  args: {
    onClose: fn(),
    onOpen: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
                <DropdownDismiss>
                  <Button>Dismiss Child</Button>
                </DropdownDismiss>
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
}`,...S.parameters?.docs?.source}}},C=[`_Dropdown`,`CardContent`,`PanelContent`,`NestedDropdown`]}));w();export{b as CardContent,S as NestedDropdown,x as PanelContent,y as _Dropdown,C as __namedExportsOrder,v as default,w as n,h as t};