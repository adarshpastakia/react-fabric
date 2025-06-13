import{j as e,aj as s,a3 as r,a5 as h,ap as O,aq as n,ae as u,h as I,ar as c,au as m,av as _,aw as p,e as x}from"./iframe-CVyMRGSP.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,v={component:s,title:"@core/components/Dropdown",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Dropdown.test.tsx"]},decorators:[t=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(t,{})})]},l={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:h.chevronDown,children:"Dropdown Menu"}),e.jsxs(O,{onClick:o(),children:[e.jsx(n,{id:"1",label:"Item One"}),e.jsx(n,{id:"2",label:"Item Two"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"})]})]}),args:{onClose:o(),onOpen:o()}},a={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:h.chevronDown,children:"Dropdown Card"}),e.jsxs(u,{children:[e.jsx(I,{children:"Some content"}),e.jsx(c,{className:"p-2",flex:!0,justify:"end",children:e.jsx(m,{children:e.jsx(r,{onClick:o(),children:"Close"})})})]})]}),args:{onClose:o(),onOpen:o()}},d={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:h.chevronDown,children:"Dropdown Panel"}),e.jsxs(_,{children:[e.jsxs(p,{title:"Some panel",children:[e.jsx(x,{children:e.jsx(I,{children:"Some content"})}),e.jsx(c,{className:"p-2",flex:!0,justify:"end",children:e.jsx(m,{children:e.jsx(r,{children:"Close"})})})]}),e.jsxs(p,{title:"Some panel",children:[e.jsx(x,{children:e.jsx(I,{children:"Some content"})}),e.jsx(c,{className:"p-2",flex:!0,justify:"end",children:e.jsx(m,{children:e.jsx(r,{children:"Close"})})})]})]})]}),args:{onClose:o(),onOpen:o()}},i={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:h.chevronDown,children:"Dropdown Panel"}),e.jsxs(u,{children:[e.jsx(x,{children:"Nested dropdowns"}),e.jsxs(c,{flex:!0,justify:"end",children:[e.jsx(m,{children:e.jsx(r,{children:"Dismiss Parent"})}),e.jsxs(s,{children:[e.jsx(r,{children:"Child"}),e.jsx(u,{children:e.jsx(m,{children:e.jsx(r,{children:"Dismiss Child"})})})]})]})]})]}),args:{onClose:o(),onOpen:o()}};var j,T,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Menu</Button>
        <Menu onClick={fn()}>
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
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var b,w,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Card</Button>
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
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var M,f,g;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Panel</Button>
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var B,S,P;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon={CoreIcons.chevronDown}>Dropdown Panel</Button>
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
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const y=["_Dropdown","CardContent","PanelContent","NestedDropdown"],F=Object.freeze(Object.defineProperty({__proto__:null,CardContent:a,NestedDropdown:i,PanelContent:d,_Dropdown:l,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{a as C,F as D,d as P,l as _};
