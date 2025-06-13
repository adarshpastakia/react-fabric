import{j as e,ay as j,aq as n,ap as l,al as d,ae as C,e as h,ar as f,au as F,a3 as w,r as N,a1 as v}from"./iframe-CVyMRGSP.js";import"./ColorPicker-BwNyvkQX.js";import"./index-D3XXfjI1.js";import"./Google-DJpRc7c-.js";import{S as D}from"./Switch-Bd5f8rSz.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,S={component:l,subcomponents:{MenuItem:n,ContextMenu:j},title:"@core/components/Menu",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Menu.test.tsx"]},decorators:[a=>e.jsx("div",{className:"p-4",children:e.jsx(a,{})})]},t={render:a=>e.jsx(e.Fragment,{children:e.jsxs(l,{...a,className:"outline rounded-capped min-h-80",children:[e.jsx(n,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),e.jsx(n,{id:"newItem",label:"New Menu Item",badge:45}),e.jsx(d,{}),e.jsx(n,{id:"collapsable1",label:"Collapsable Item",disabled:!0}),e.jsx(n,{id:"collapsable2",label:"Collapsable Item",active:!0}),e.jsx(d,{}),e.jsx(n,{id:"sectionItem",label:"Section Item"}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(l,{id:"inner1",label:"Dropdown",children:e.jsxs(C,{children:[e.jsx(h,{children:e.jsx(D,{})}),e.jsx(f,{flex:!0,justify:"end",children:e.jsx(F,{children:e.jsx(w,{children:"Dismiss Child"})})})]})}),e.jsx(n,{id:"inner2",label:"Inner Item"}),e.jsxs(l,{label:"Floating Item",disabled:!0,children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"})]})]}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1.1",label:"Inner Item"}),e.jsx(n,{id:"inner1.2",label:"Inner Item"})]})]}),e.jsx("div",{className:"flex-1"}),e.jsx(n,{id:"delete",color:"danger",label:"Danger Item"})]})}),args:{onClick:r()}},i={render:a=>e.jsx(e.Fragment,{children:e.jsxs(l,{...a,label:void 0,menuClassName:void 0,minimal:!0,className:"outline rounded-capped",children:[e.jsx(n,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),e.jsx(n,{id:"newItem",label:"New Menu Item",badge:45}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"collapsable1",label:"Collapsable Item",disabled:!0}),e.jsx(n,{id:"collapsable2",label:"Collapsable Item",active:!0})]}),e.jsx(n,{id:"sectionItem",label:"Section Item"}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"})]}),e.jsx(n,{id:"delete",icon:"mdi mdi-trash-can-outline",color:"danger",label:"Danger Item"})]})}),args:{onClick:r()}},s={render:a=>{const g=N.useMemo(()=>e.jsxs(l,{onClick:r(),children:[e.jsx(n,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),e.jsx(n,{id:"newItem",label:"New Menu Item",badge:45}),e.jsx(n,{id:"collapsable1",label:"Collapsable Item"}),e.jsx(n,{id:"collapsable2",label:"Collapsable Item"}),e.jsx(n,{id:"sectionItem",label:"Section Item"}),e.jsxs(l,{label:"Floating Item",children:[e.jsx(n,{id:"inner1",label:"Inner Item"}),e.jsx(n,{id:"inner2",label:"Inner Item"})]})]}),[a]);return e.jsx("div",{className:"w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center",children:e.jsx(j,{menu:g,disabled:a.disabled,children:e.jsx(v,{children:"Context menu for container"})})})},args:{onClick:r()}};var m,o,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Menu {...args} className="outline rounded-capped min-h-80">
          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <Divider />
          <MenuItem id="collapsable1" label="Collapsable Item" disabled />
          <MenuItem id="collapsable2" label="Collapsable Item" active />
          <Divider />
          <MenuItem id="sectionItem" label="Section Item" />
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
            <MenuItem id="inner2" label="Inner Item" />
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
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,I,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(I=i.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var p,M,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: AnyObject) => {
    const menu = useMemo(() => <Menu onClick={fn()}>
          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />
          <MenuItem id="newItem" label="New Menu Item" badge={45} />
          <MenuItem id="collapsable1" label="Collapsable Item" />
          <MenuItem id="collapsable2" label="Collapsable Item" />
          <MenuItem id="sectionItem" label="Section Item" />
          <Menu label="Floating Item">
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
}`,...(x=(M=s.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const _=["_Menu","Minimal","_ContextMenu"],L=Object.freeze(Object.defineProperty({__proto__:null,Minimal:i,_ContextMenu:s,_Menu:t,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{L as M,t as _,i as a,s as b};
