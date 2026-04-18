import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{i as r,t as i}from"./es.js";import{R as a}from"./ResizeObserver.es.js";import{a as o,n as s,r as c}from"./index.esm.js";import{t as l}from"./jsx-runtime.js";import{C as u,gt as d}from"./iframe-BBjx9o_X.js";import{f,p}from"./es2.js";import{O as m,T as h,k as g,t as _,w as v,x as y}from"./src6.js";var b,x,S,C,w,T,E=t((()=>{f(),u(),a(),b=e(n()),i(),_(),x=l(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={component:h,title:`@form/Form`,parameters:{layout:`centered`,jest:[`form/tests/ArrayInput.test.tsx`]},decorators:[e=>(0,x.jsx)(`div`,{className:`max-w-[32rem] w-screen`,children:(0,x.jsx)(e,{})})]},w={render:e=>{let{t}=r(`form`),n=(0,b.useRef)(c({names:s(o().required().label(`Name item`)).min(1).label(`Name list`),fullnames:s(c({firstName:o().required().label(`First name`),lastName:o().required().label(`Last name`)})).min(1).label(`Fullname list`)}));return(0,x.jsx)(m,{onSubmit:S(),resolver:p(n.current),defaultValues:{names:[new String(`Tester`)]},children:(0,x.jsxs)(`div`,{className:`mx-auto w-96`,children:[(0,x.jsx)(h,{...e,required:!0,canRemove:`newonly`,name:`names`,label:`Names list`,addLabel:`Add Name`,onAdd:()=>new String(``),children:(0,x.jsx)(g,{children:(0,x.jsx)(v,{autoFocus:!0,placeholder:`Name..`})})}),(0,x.jsx)(h,{...e,required:!0,name:`fullnames`,label:`Fullnames list`,addLabel:`Add Fullname`,onAdd:()=>({firstName:``,lastName:``}),children:({index:e,name:t})=>(0,x.jsxs)(y,{children:[(0,x.jsx)(g,{name:`${t}.firstName`,children:(0,x.jsx)(v,{autoFocus:!0,placeholder:`First name..`})}),(0,x.jsx)(g,{name:`${t}.lastName`,children:(0,x.jsx)(v,{width:`96px`,placeholder:`Last name..`})})]},e)}),(0,x.jsxs)(`div`,{className:`flex justify-end gap-2 mt-8`,children:[(0,x.jsx)(d,{type:`reset`,variant:`outline`,children:`Reset`}),(0,x.jsx)(d,{type:`submit`,variant:`solid`,children:`Submit`})]})]})})},args:{}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`_ArrayInput`]}));E();export{w as _ArrayInput,T as __namedExportsOrder,C as default,E as t};