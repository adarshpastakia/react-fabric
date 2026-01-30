import{j as e,ak as s,a5 as r,ap as P,aq as n,af as h,h as u,ar as c,as as m,at as O,au as x,e as I}from"./iframe-DpfJK_wQ.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,_={component:s,title:"@core/components/Dropdown",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Dropdown.test.tsx"]},decorators:[t=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(t,{})})]},l={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:"icon-[mdi--chevron-down]",children:"Dropdown Menu"}),e.jsxs(P,{onClick:o(),children:[e.jsx(n,{id:"1",label:"Item One"}),e.jsx(n,{id:"2",label:"Item Two"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"}),e.jsx(n,{id:"3",label:"Item Three"})]})]}),args:{onClose:o(),onOpen:o()}},d={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:"icon-[mdi--chevron-down]",children:"Dropdown Card"}),e.jsxs(h,{children:[e.jsx(u,{children:"Some content"}),e.jsx(c,{className:"p-2",flex:!0,justify:"end",children:e.jsx(m,{children:e.jsx(r,{onClick:o(),children:"Close"})})})]})]}),args:{onClose:o(),onOpen:o()}},a={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:"icon-[mdi--chevron-down]",children:"Dropdown Panel"}),e.jsxs(O,{children:[e.jsxs(x,{title:"Some panel",children:[e.jsx(I,{children:e.jsx(u,{children:"Some content"})}),e.jsx(c,{className:"p-2",flex:!0,justify:"end",children:e.jsx(m,{children:e.jsx(r,{children:"Close"})})})]}),e.jsxs(x,{title:"Some panel",children:[e.jsx(I,{children:e.jsx(u,{children:"Some content"})}),e.jsx(c,{className:"p-2",flex:!0,justify:"end",children:e.jsx(m,{children:e.jsx(r,{children:"Close"})})})]})]})]}),args:{onClose:o(),onOpen:o()}},i={render:t=>e.jsxs(s,{...t,children:[e.jsx(r,{altIcon:"icon-[mdi--chevron-down]",children:"Dropdown Panel"}),e.jsxs(h,{children:[e.jsx(I,{children:"Nested dropdowns"}),e.jsxs(c,{flex:!0,justify:"end",children:[e.jsx(m,{children:e.jsx(r,{children:"Dismiss Parent"})}),e.jsxs(s,{children:[e.jsx(r,{children:"Child"}),e.jsx(h,{children:e.jsx(m,{children:e.jsx(r,{children:"Dismiss Child"})})})]})]})]})]}),args:{onClose:o(),onOpen:o()}};var p,j,T;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Dropdown {...args}>
        <Button altIcon="icon-[mdi--chevron-down]">Dropdown Menu</Button>
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
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var b,D,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,M,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(M=a.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var g,B,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const y=["_Dropdown","CardContent","PanelContent","NestedDropdown"],v=Object.freeze(Object.defineProperty({__proto__:null,CardContent:d,NestedDropdown:i,PanelContent:a,_Dropdown:l,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{d as C,v as D,a as P,l as _};
