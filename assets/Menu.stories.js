import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{D as a,E as o,F as s,G as c,L as l,P as u,Q as d,W as f,g as p,nt as m,t as h,tt as g}from"./src3.js";import{c as _,t as v}from"./esm.js";var y=n({Minimal:()=>E,_ContextMenu:()=>D,_Menu:()=>T,__namedExportsOrder:()=>O,default:()=>w}),b,x,S,C,w,T,E,D,O,k=t((()=>{v(),b=e(r()),x=i(),h(),S=i(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={component:o,subcomponents:{MenuItem:a,ContextMenu:s},title:`@core/components/Menu`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Menu.test.tsx`]},decorators:[e=>(0,S.jsx)(`div`,{className:`p-4`,children:(0,S.jsx)(e,{})})]},T={render:e=>(0,S.jsx)(x.Fragment,{children:(0,S.jsxs)(o,{...e,className:`outline rounded-capped min-h-80`,children:[(0,S.jsx)(a,{id:`appItem`,icon:`mdi mdi-react`,label:`Application Menu`,appendLabel:`NEW`}),(0,S.jsx)(a,{id:`newItem`,label:`New Menu Item`,badge:45}),(0,S.jsx)(l,{}),(0,S.jsx)(a,{id:`collapsable1`,label:`Collapsable Item`,disabled:!0}),(0,S.jsx)(a,{id:`collapsable2`,label:`Collapsable Item`,active:!0}),(0,S.jsx)(l,{}),(0,S.jsx)(a,{id:`sectionItem`,label:`Section Item`,appendLabel:(0,S.jsxs)(g,{children:[(0,S.jsx)(d,{variant:`link`,icon:`...`,"aria-label":`options`}),(0,S.jsxs)(o,{forDropdown:!0,children:[(0,S.jsx)(a,{label:`Clone...`}),(0,S.jsx)(o,{label:`Delete`,children:(0,S.jsxs)(f,{children:[(0,S.jsx)(p,{children:`Are you sure?`}),(0,S.jsx)(c,{flex:!0,justify:`end`,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(d,{variant:`link`,children:`No`}),(0,S.jsx)(d,{children:`Yes`})]})})]})})]})]})}),(0,S.jsxs)(o,{label:`Floating Item`,children:[(0,S.jsx)(o,{id:`inner1`,label:`Dropdown`,children:(0,S.jsxs)(f,{children:[(0,S.jsx)(p,{children:(0,S.jsx)(_,{})}),(0,S.jsx)(c,{flex:!0,justify:`end`,children:(0,S.jsx)(m,{children:(0,S.jsx)(d,{children:`Dismiss Child`})})})]})}),(0,S.jsx)(a,{id:`inner2`,label:`Inner Item`,appendLabel:(0,S.jsxs)(g,{children:[(0,S.jsx)(d,{icon:`...`,"aria-label":`dropdown`}),(0,S.jsx)(f,{children:`Tester`})]})}),(0,S.jsxs)(o,{label:`Floating Item`,disabled:!0,children:[(0,S.jsx)(a,{id:`inner1`,label:`Inner Item`}),(0,S.jsx)(a,{id:`inner2`,label:`Inner Item`})]})]}),(0,S.jsxs)(o,{label:`Floating Item`,children:[(0,S.jsx)(a,{id:`inner1`,label:`Inner Item`}),(0,S.jsx)(a,{id:`inner2`,label:`Inner Item`}),(0,S.jsxs)(o,{label:`Floating Item`,children:[(0,S.jsx)(a,{id:`inner1.1`,label:`Inner Item`}),(0,S.jsx)(a,{id:`inner1.2`,label:`Inner Item`})]})]}),(0,S.jsx)(`div`,{className:`flex-1`}),(0,S.jsx)(a,{id:`delete`,color:`danger`,label:`Danger Item`})]})}),args:{onClick:C()}},E={render:e=>(0,S.jsx)(x.Fragment,{children:(0,S.jsxs)(o,{...e,label:void 0,menuClassName:void 0,minimal:!0,className:`outline rounded-capped`,children:[(0,S.jsx)(a,{id:`appItem`,icon:`mdi mdi-react`,label:`Application Menu`,appendLabel:`NEW`}),(0,S.jsx)(a,{id:`newItem`,label:`New Menu Item`,badge:45}),(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(a,{id:`collapsable1`,label:`Collapsable Item`,disabled:!0}),(0,S.jsx)(a,{id:`collapsable2`,label:`Collapsable Item`,active:!0})]}),(0,S.jsx)(a,{id:`sectionItem`,label:`Section Item`}),(0,S.jsxs)(o,{label:`Floating Item`,children:[(0,S.jsx)(a,{id:`inner1`,label:`Inner Item`}),(0,S.jsx)(a,{id:`inner2`,label:`Inner Item`})]}),(0,S.jsx)(a,{id:`delete`,icon:`mdi mdi-trash-can-outline`,color:`danger`,label:`Danger Item`})]})}),args:{onClick:C()}},D={render:e=>(0,S.jsx)(`div`,{className:`w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center`,children:(0,S.jsx)(s,{menu:(0,b.useMemo)(()=>(0,S.jsxs)(o,{onClick:e.onClick,children:[(0,S.jsx)(a,{id:`appItem`,icon:`mdi mdi-react`,label:`Application Menu`,appendLabel:`NEW`}),(0,S.jsx)(a,{id:`newItem`,label:`New Menu Item`,badge:45}),(0,S.jsx)(a,{id:`collapsable1`,label:`Collapsable Item`}),(0,S.jsx)(a,{id:`collapsable2`,label:`Collapsable Item`}),(0,S.jsx)(a,{id:`sectionItem`,label:`Section Item`}),(0,S.jsxs)(o,{label:`Floating Item`,className:`text-xs`,children:[(0,S.jsx)(a,{id:`inner1`,label:`Inner Item`}),(0,S.jsx)(a,{id:`inner2`,label:`Inner Item`})]})]}),[e]),disabled:e.disabled,children:(0,S.jsx)(u,{children:`Context menu for container`})})}),args:{onClick:C()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Menu {...args} className="outline rounded-capped min-h-80">
          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <Divider />
          <MenuItem id="collapsable1" label="Collapsable Item" disabled />
          <MenuItem id="collapsable2" label="Collapsable Item" active />
          <Divider />
          <MenuItem id="sectionItem" label="Section Item" appendLabel={<Dropdown>
                <Button variant="link" icon="..." aria-label="options" />
                <Menu forDropdown>
                  <MenuItem label="Clone..." />
                  <Menu label="Delete">
                    <Card>
                      <Content>Are you sure?</Content>
                      <Footer flex justify="end">
                        <DropdownDismiss>
                          <Button variant="link">No</Button>
                          <Button>Yes</Button>
                        </DropdownDismiss>
                      </Footer>
                    </Card>
                  </Menu>
                </Menu>
              </Dropdown>} />
          <Menu label="Floating Item">
            <Menu id="inner1" label="Dropdown">
              <Card>
                <Content>
                  <Switch />
                </Content>
                <Footer flex justify="end">
                  <DropdownDismiss>
                    <Button>Dismiss Child</Button>
                  </DropdownDismiss>
                </Footer>
              </Card>
            </Menu>
            <MenuItem id="inner2" label="Inner Item" appendLabel={<Dropdown>
                  <Button icon="..." aria-label="dropdown" />
                  <Card>Tester</Card>
                </Dropdown>} />
            <Menu label="Floating Item" disabled>
              <MenuItem id="inner1" label="Inner Item" />
              <MenuItem id="inner2" label="Inner Item" />
            </Menu>
          </Menu>
          <Menu label="Floating Item">
            <MenuItem id="inner1" label="Inner Item" />
            <MenuItem id="inner2" label="Inner Item" />
            <Menu label="Floating Item">
              <MenuItem id="inner1.1" label="Inner Item" />
              <MenuItem id="inner1.2" label="Inner Item" />
            </Menu>
          </Menu>
          <div className="flex-1" />
          <MenuItem id="delete" color="danger" label="Danger Item" />
        </Menu>
      </Fragment>;
  },
  args: {
    onClick: fn() as AnyObject
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Menu {...args as AnyObject} label={undefined} menuClassName={undefined} minimal className="outline rounded-capped">
          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <Fragment>
            <MenuItem id="collapsable1" label="Collapsable Item" disabled />
            <MenuItem id="collapsable2" label="Collapsable Item" active />
          </Fragment>
          <MenuItem id="sectionItem" label="Section Item" />
          <Menu label="Floating Item">
            <MenuItem id="inner1" label="Inner Item" />
            <MenuItem id="inner2" label="Inner Item" />
          </Menu>
          <MenuItem id="delete" icon="mdi mdi-trash-can-outline" color="danger" label="Danger Item" />
        </Menu>
      </Fragment>;
  },
  args: {
    onClick: fn() as AnyObject
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    const menu = useMemo(() => <Menu onClick={args.onClick}>
          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <MenuItem id="collapsable1" label="Collapsable Item" />
          <MenuItem id="collapsable2" label="Collapsable Item" />
          <MenuItem id="sectionItem" label="Section Item" />
          <Menu label="Floating Item" className="text-xs">
            <MenuItem id="inner1" label="Inner Item" />
            <MenuItem id="inner2" label="Inner Item" />
          </Menu>
        </Menu>, [args]);
    return <div className="w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center">
        <ContextMenu menu={menu} disabled={args.disabled}>
          <Title>Context menu for container</Title>
        </ContextMenu>
      </div>;
  },
  args: {
    onClick: fn() as AnyObject
  }
}`,...D.parameters?.docs?.source}}},O=[`_Menu`,`Minimal`,`_ContextMenu`]}));k();export{E as Minimal,D as _ContextMenu,T as _Menu,O as __namedExportsOrder,w as default,k as n,y as t};