import{j as e,ax as f,ar as n,aq as l,an as m,al as c,a6 as t,ag as d,e as u,as as b,at as I,r as F,a4 as v}from"./iframe-BmpICDQJ.js";import"./ColorPicker.js";import"./index.js";import"./Google.js";import{S}from"./Switch.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,_={component:l,subcomponents:{MenuItem:n,ContextMenu:f},title:"@core/components/Menu",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Menu.test.tsx"]},decorators:[a=>e.jsx("div",{className:"p-4",children:e.jsx(a,{})})]},i={render:a=>e.jsx(e.Fragment,{children:e.jsxs(l,{...a,className:"outline rounded-capped min-h-80",children:[e.jsx(n,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),e.jsx(n,{id:"newItem",label:"New Menu Item",badge:45}),e.jsx(m,{}),e.jsx(n,{id:"collapsable1",label:"Collapsable Item",disabled:!0}),e.jsx(n,{id:"collapsable2",label:"Collapsable Item",active:!0}),e.jsx(m,{}),e.jsx(n,{id:"sectionItem",label:"Section Item",appendLabel:e.jsxs(c,{children:[e.jsx(t,{variant:"link",icon:"...","aria-label":"options"}),e.jsxs(l,{forDropdown:!0,children:[e.jsx(n,{label:"Clone..."}),e.jsx(l,{label:"Delete",children:e.jsxs(d,{children:[e.jsx(u,{children:"Are you sure?"}),e.jsx(b,{flex:!0,justify:"end",children:e.jsxs(I,{children:[e.jsx(t,{variant:"link",children:"No"}),e.jsx(t,{children:"Yes"})]})})]})})]})]})}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(l,{id:"inner1",label:"Dropdown",children:e.jsxs(d,{children:[e.jsx(u,{children:e.jsx(S,{})}),e.jsx(b,{flex:!0,justify:"end",children:e.jsx(I,{children:e.jsx(t,{children:"Dismiss Child"})})})]})}),e.jsx(n,{id:"inner2",label:"Inner Item",appendLabel:e.jsxs(c,{children:[e.jsx(t,{icon:"...","aria-label":"dropdown"}),e.jsx(d,{children:"Tester"})]})}),e.jsxs(l,{label:"Floating Item",disabled:!0,children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"})]})]}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1.1",label:"Inner Item"}),e.jsx(n,{id:"inner1.2",label:"Inner Item"})]})]}),e.jsx("div",{className:"flex-1"}),e.jsx(n,{id:"delete",color:"danger",label:"Danger Item"})]})}),args:{onClick:o()}},s={render:a=>e.jsx(e.Fragment,{children:e.jsxs(l,{...a,label:void 0,menuClassName:void 0,minimal:!0,className:"outline rounded-capped",children:[e.jsx(n,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),e.jsx(n,{id:"newItem",label:"New Menu Item",badge:45}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"collapsable1",label:"Collapsable Item",disabled:!0}),e.jsx(n,{id:"collapsable2",label:"Collapsable Item",active:!0})]}),e.jsx(n,{id:"sectionItem",label:"Section Item"}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"})]}),e.jsx(n,{id:"delete",icon:"mdi mdi-trash-can-outline",color:"danger",label:"Danger Item"})]})}),args:{onClick:o()}},r={render:a=>{const N=F.useMemo(()=>e.jsxs(l,{onClick:o(),children:[e.jsx(n,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),e.jsx(n,{id:"newItem",label:"New Menu Item",badge:45}),e.jsx(n,{id:"collapsable1",label:"Collapsable Item"}),e.jsx(n,{id:"collapsable2",label:"Collapsable Item"}),e.jsx(n,{id:"sectionItem",label:"Section Item"}),e.jsxs(l,{label:"Floating Item",className:"text-xs",children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"})]})]}),[a]);return e.jsx("div",{className:"w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center",children:e.jsx(f,{menu:N,disabled:a.disabled,children:e.jsx(v,{children:"Context menu for container"})})})},args:{onClick:o()}};var p,x,j;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var M,g,C;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,w,D;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    const menu = useMemo(() => <Menu onClick={fn()}>
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
}`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const y=["_Menu","Minimal","_ContextMenu"],B=Object.freeze(Object.defineProperty({__proto__:null,Minimal:s,_ContextMenu:r,_Menu:i,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{B as M,i as _,s as a,r as b};
