import{j as e,aS as b,r as N,aT as i,aU as o,aV as t}from"./iframe-DL5PLccW.js";import{B as u}from"./Button-B4MR9BdT.js";import"./index-DPKHNOa8.js";import{a as m,F as h,C as n,I as s,b as y}from"./DualList-BWd_coxF.js";import"./Tooltip-BPKa3gaw.js";import"./HeadFoot-BOKBTLfn.js";import"./BasePanel-CXQucVik.js";import"./Google-B5-g4RDV.js";import"./createClass-DjEsl4fx.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./getDay-wNg2b-WG.js";import"./useDebounce-DUBqCfh2.js";import"./Content-BWk5dK7X.js";import"./useResizeObserver-Bn-Pa1XM.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./Global-Dhvrkiym.js";import"./ToggleButtonGroup-D0cpnvS6.js";import"./cloneElement-_d6a3Gjs.js";import"./Collapsable-DQ_FQmYr.js";import"./toArray-CuTPFbH_.js";import"./Avatar-2qoU-_h2.js";import"./floating-ui.react-CT9AAP4P.js";import"./index-HqHJXvHv.js";import"./DatePanel-DQBUsAH4.js";import"./ButtonGroup-CcmBan6Y.js";import"./EmptyContent-1ZSnSbmB.js";import"./_isEqual-Q02tGGHK.js";import"./_dedupe-SnwC8TxO.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,X={component:m,title:"@form/Form",parameters:{layout:"centered",jest:["form/tests/ArrayInput.test.tsx"]},decorators:[r=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(r,{})})]},a={render:r=>{const{t:F}=b("form"),x=N.useRef(i({names:o(t().required().label("Name item")).min(1).label("Name list"),fullnames:o(i({firstName:t().required().label("First name"),lastName:t().required().label("Last name")})).min(1).label("Fullname list")}));return e.jsx(h,{onSubmit:j(),schema:x.current,defaultValues:{names:[new String("")]},children:e.jsxs("div",{className:"mx-auto w-96",children:[e.jsx(m,{...r,required:!0,minItems:10,name:"names",label:"Names list",addLabel:"Add Name",onAdd:()=>new String(""),children:e.jsx(n,{children:e.jsx(s,{autoFocus:!0,placeholder:"Name.."})})}),e.jsx(m,{...r,required:!0,name:"fullnames",label:"Fullnames list",addLabel:"Add Fullname",onAdd:()=>({firstName:"",lastName:""}),children:({index:f,name:l})=>e.jsxs(y,{children:[e.jsx(n,{name:`${l}.firstName`,children:e.jsx(s,{autoFocus:!0,placeholder:"First name.."})}),e.jsx(n,{name:`${l}.lastName`,children:e.jsx(s,{width:"96px",placeholder:"Last name.."})})]},f)}),e.jsxs("div",{className:"flex justify-end gap-2 mt-8",children:[e.jsx(u,{type:"reset",variant:"outline",children:"Reset"}),e.jsx(u,{type:"submit",variant:"solid",children:"Submit"})]})]})})},args:{}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
