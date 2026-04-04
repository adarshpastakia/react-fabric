import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{L as n,nt as r,tt as i}from"./ResizeObserver.es.js";import{C as a,Y as o,it as s,t as c}from"./iframe-B-Wcw5ev.js";import{a as l,i as u,n as d,r as f,t as p}from"./core2.js";import{g as m,t as h,u as g}from"./src6.js";var _,v,y,b,x,S,C,w=e((()=>{c(),n(),u(),p(),_=t(),h(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={component:g,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/File.test.tsx`],msw:{handlers:[f.post(`/api/upload`,()=>d.json({path:`xyz`}))]}},decorators:[e=>(0,v.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,v.jsx)(e,{})})]},x={render:e=>(0,v.jsx)(g,{...e}),args:{label:`File input`,placeholder:`File input...`,allowClear:!0,onChange:y(),onEnterPressed:y()}},S={render:()=>{let e=l.create({}),{pending:t,files:n,upload:c,remove:u}=m((t,n)=>e.postForm(`/api/upload`,t,n).then(e=>e.data?.path??`pathfor file`),void 0,{multiple:!0,onChange:e=>(y()(e),console.log(e))});return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`div`,{className:`inline-block`,children:(0,v.jsx)(o,{badge:t>0?`${t}`:void 0,children:(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(`span`,{children:`Add file`}),(0,v.jsx)(`input`,{type:`file`,multiple:!0,className:`absolute inset-0 opacity-0 z-5`,onChange:e=>[c(e.target.files),e.target.value=``]})]})})}),(0,v.jsx)(`br`,{}),(0,v.jsx)(`div`,{children:n.map((e,t)=>(0,v.jsxs)(`div`,{className:`w-96 mb-4`,children:[(0,v.jsxs)(`div`,{className:`flex flex-nowrap gap-1 items-center`,children:[(0,v.jsxs)(`div`,{className:`flex-1 truncate`,children:[e.file?.name??e.filename,(0,v.jsx)(`br`,{}),(0,v.jsx)(`span`,{className:`text-xs`,children:r.mime(e.mime)})]}),(0,v.jsx)(`div`,{children:i.bytes(e.size)}),e.progress&&(0,v.jsx)(s,{icon:`mdi mdi-stop-circle`,bg:`danger`,color:`white`,size:`sm`,className:`p-0.5`,"aria-label":`abort`,onClick:()=>e.abort?.()}),!e.progress&&(0,v.jsx)(s,{icon:`mdi mdi-trash-can`,color:`danger`,size:`sm`,"aria-label":`remove`,onClick:()=>u(e.key)})]}),e.progress&&(0,v.jsx)(a,{animate:!0,value:e.progress*100,size:`xxs`})]},t))})]})},args:{}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <FileInput {...args} />;
  },
  args: {
    label: "File input",
    placeholder: "File input...",
    allowClear: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const http = axios.create({});
    const {
      pending,
      files,
      upload,
      remove
    } = useFileUploader((data, config) => http.postForm("/api/upload", data, config).then(resp => resp.data?.path ?? "pathfor file"), undefined, {
      multiple: true,
      onChange: v => (fn()(v), console.log(v))
    });
    return <div>
        <div className="inline-block">
          <Button badge={pending > 0 ? \`\${pending}\` : undefined}>
            <Fragment>
              <span>Add file</span>
              <input type="file" multiple className="absolute inset-0 opacity-0 z-5" onChange={e => [upload(e.target.files), e.target.value = ""]} />
            </Fragment>
          </Button>
        </div>
        <br />
        <div>
          {files.map((file, idx) => <div key={idx} className="w-96 mb-4">
              <div className="flex flex-nowrap gap-1 items-center">
                <div className="flex-1 truncate">
                  {file.file?.name ?? file.filename}
                  <br />
                  <span className="text-xs">{FileUtil.mime(file.mime)}</span>
                </div>
                <div>{Format.bytes(file.size)}</div>
                {file.progress && <Icon icon="mdi mdi-stop-circle" bg="danger" color="white" size="sm" className="p-0.5" aria-label="abort" onClick={() => file.abort?.()} />}
                {!file.progress && <Icon icon="mdi mdi-trash-can" color="danger" size="sm" aria-label="remove" onClick={() => remove(file.key)} />}
              </div>
              {file.progress && <ProgressBar animate value={file.progress * 100} size="xxs" />}
            </div>)}
        </div>
      </div>;
  },
  args: {}
}`,...S.parameters?.docs?.source}}},C=[`_FileInput`,`FileUploader`]}));w();export{S as FileUploader,x as _FileInput,C as __namedExportsOrder,b as default,w as t};