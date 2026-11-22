import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{n as i,t as a}from"./useTranslation.js";import{a as o,n as s,r as c}from"./index.esm.js";import{B as l,E as u,X as d,et as f,nt as p,t as m}from"./src.js";import{t as h}from"./jsx-runtime.js";import{t as g}from"./src2.js";import{n as _,t as v}from"./yup.js";import{t as y}from"./src6.js";var b=t({_ArrayInput:()=>T,__namedExportsOrder:()=>E,default:()=>w}),x,S,C,w,T,E;function D(){return(D=e((()=>{g(),m(),y(),v(),x=n(),a(),S=h(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={component:d,title:`@form/Form`,parameters:{layout:`centered`,jest:[`form/tests/ArrayInput.test.tsx`]},decorators:[e=>(0,S.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,S.jsx)(e,{})})]},T={render:e=>{let{t}=i(`form`),n=(0,x.useRef)(c({names:s(o().required().label(`Name item`)).min(1).label(`Name list`),fullnames:s(c({firstName:o().required().label(`First name`),lastName:o().required().label(`Last name`)})).required().min(1).label(`Fullname list`)}));return(0,S.jsx)(f,{onSubmit:C(),resolver:_(n.current),defaultValues:{names:[new String(`Tester`)]},children:(0,S.jsxs)(`div`,{className:`mx-auto w-96`,children:[(0,S.jsx)(d,{...e,required:!0,canRemove:`newonly`,name:`names`,label:`Names list`,addLabel:`Add Name`,onAdd:()=>new String(``),children:(0,S.jsx)(p,{children:(0,S.jsx)(l,{autoFocus:!0,placeholder:`Name..`})})}),(0,S.jsx)(d,{...e,required:!0,name:`fullnames`,label:`Fullnames list`,addLabel:`Add Fullname`,onAdd:()=>({firstName:``,lastName:``}),children:({index:e,name:t})=>(0,S.jsxs)(u,{children:[(0,S.jsx)(p,{name:`${t}.firstName`,children:(0,S.jsx)(l,{autoFocus:!0,placeholder:`First name..`})}),(0,S.jsx)(p,{name:`${t}.lastName`,children:(0,S.jsx)(l,{width:`96px`,placeholder:`Last name..`})})]},e)}),(0,S.jsxs)(`div`,{className:`flex justify-end gap-2 mt-8`,children:[(0,S.jsx)(r,{type:`reset`,variant:`outlined`,children:`Reset`}),(0,S.jsx)(r,{type:`submit`,variant:`solid`,children:`Submit`})]})]})})},args:{}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("form");
    const schema = useRef(yup.object({
      names: yup.array(yup.string().required().label("Name item")).min(1).label("Name list"),
      fullnames: yup.array(yup.object({
        firstName: yup.string().required().label("First name"),
        lastName: yup.string().required().label("Last name")
      })).required().min(1).label("Fullname list")
    }));
    return <Form onSubmit={fn()} resolver={yupResolver(schema.current)} defaultValues={{
      names: [new String("Tester")]
    }}>
        <div className="mx-auto w-96">
          <ArrayInput {...args} required canRemove="newonly"
        // minItems={10}
        name="names" label="Names list" addLabel="Add Name" onAdd={() => new String("")}>
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
            <Button type="reset" variant="outlined">
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
}`,...T.parameters?.docs?.source}}},E=[`_ArrayInput`]})))()}export{T as n,D as r,b as t};