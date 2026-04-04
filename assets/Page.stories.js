import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{c as n,m as r,t as i}from"./src3.js";var a,o,s,c,l=e((()=>{i(),a=t(),o={component:r,title:`@core/Application`,parameters:{layout:`fullscreen`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Page.test.tsx`]}},s={render:e=>(0,a.jsx)(`div`,{className:`min-h-[600px]`,children:(0,a.jsx)(n,{children:(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(`h1`,{className:`area-head border-b text-center p-4`,children:`Page Header`}),(0,a.jsx)(`h6`,{className:`area-foot border-t text-center p-4`,children:`Page Footer`}),(0,a.jsx)(`h4`,{className:`area-side-s border-e bg-dimmed border-soft p-4`,children:`Page Aside start`}),(0,a.jsx)(`h4`,{className:`area-side-e border-s bg-dimmed border-soft p-4`,children:`Page Aside end`}),(0,a.jsx)(`h4`,{className:`area-content bg-default text-center p-4`,children:`Page Content`})]})})}),args:{paper:!0,title:`Page title`,icon:`mdi mdi-react`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <Page {...args}>
            <h1 className="area-head border-b text-center p-4">Page Header</h1>
            <h6 className="area-foot border-t text-center p-4">Page Footer</h6>
            <h4 className="area-side-s border-e bg-dimmed border-soft p-4">
              Page Aside start
            </h4>
            <h4 className="area-side-e border-s bg-dimmed border-soft p-4">
              Page Aside end
            </h4>
            <h4 className="area-content bg-default text-center p-4">
              Page Content
            </h4>
          </Page>
        </Viewport>
      </div>;
  },
  args: {
    paper: true,
    title: "Page title",
    icon: "mdi mdi-react"
  }
}`,...s.parameters?.docs?.source}}},c=[`_Page`]}));l();export{s as _Page,c as __namedExportsOrder,o as default,l as t};