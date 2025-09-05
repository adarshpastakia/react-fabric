import{j as e,aA as b,r as N,aT as i,aU as o,aV as t}from"./iframe-6XIGnDH8.js";import{B as u}from"./Button.js";import"./index2.js";import{a as m,F as h,C as n,I as s,b as y}from"./DualList.js";import"./Tooltip.js";import"./HeadFoot.js";import"./BasePanel.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./useDebounce.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./floating-ui.react.js";import"./index3.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./dedupe.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,X={component:m,title:"@form/Form",parameters:{layout:"centered",jest:["form/tests/ArrayInput.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},a={render:r=>{const{t:F}=b("form"),x=N.useRef(i({names:o(t().required().label("Name item")).min(1).label("Name list"),fullnames:o(i({firstName:t().required().label("First name"),lastName:t().required().label("Last name")})).min(1).label("Fullname list")}));return e.jsx(h,{onSubmit:j(),schema:x.current,defaultValues:{names:[new String("")]},children:e.jsxs("div",{className:"mx-auto w-96",children:[e.jsx(m,{...r,required:!0,minItems:10,name:"names",label:"Names list",addLabel:"Add Name",onAdd:()=>new String(""),children:e.jsx(n,{children:e.jsx(s,{autoFocus:!0,placeholder:"Name.."})})}),e.jsx(m,{...r,required:!0,name:"fullnames",label:"Fullnames list",addLabel:"Add Fullname",onAdd:()=>({firstName:"",lastName:""}),children:({index:f,name:l})=>e.jsxs(y,{children:[e.jsx(n,{name:`${l}.firstName`,children:e.jsx(s,{autoFocus:!0,placeholder:"First name.."})}),e.jsx(n,{name:`${l}.lastName`,children:e.jsx(s,{width:"96px",placeholder:"Last name.."})})]},f)}),e.jsxs("div",{className:"flex justify-end gap-2 mt-8",children:[e.jsx(u,{type:"reset",variant:"outline",children:"Reset"}),e.jsx(u,{type:"submit",variant:"solid",children:"Submit"})]})]})})},args:{}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("form");
    const schema = useRef(yup.object({
      names: yup.array(yup.string().required().label("Name item")).min(1).label("Name list"),
      fullnames: yup.array(yup.object({
        firstName: yup.string().required().label("First name"),
        lastName: yup.string().required().label("Last name")
      })).min(1).label("Fullname list")
    }));
    return <Form onSubmit={fn()} schema={schema.current} defaultValues={{
      // @ts-expect-error ignore
      names: [new String("")]
    }}>
        <div className="mx-auto w-96">
          <ArrayInput {...args} required minItems={10} name="names" label="Names list" addLabel="Add Name" onAdd={() => new String("")}>
            <Controller>
              <Input autoFocus placeholder="Name.." />
            </Controller>
          </ArrayInput>

          <ArrayInput {...args} required name="fullnames" label="Fullnames list" addLabel="Add Fullname" onAdd={() => ({
          firstName: "",
          lastName: ""
        })}>
            {({
            index,
            name
          }) => <Field key={index}>
                <Controller name={\`\${name}.firstName\`}>
                  <Input autoFocus placeholder="First name.." />
                </Controller>
                <Controller name={\`\${name}.lastName\`}>
                  <Input width="96px" placeholder="Last name.." />
                </Controller>
              </Field>}
          </ArrayInput>

          <div className="flex justify-end gap-2 mt-8">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit" variant="solid">
              Submit
            </Button>
          </div>
        </div>
      </Form>;
  },
  args: {}
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Z=["_ArrayInput"];export{a as _ArrayInput,Z as __namedExportsOrder,X as default};
