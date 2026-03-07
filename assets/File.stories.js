import{j as e,aO as F}from"./iframe-BmpICDQJ.js";import{I as m}from"./Tooltip.js";import{B as N}from"./useDebounce.js";import"./index.js";import{e as h,u as y,_ as C,f as _}from"./DualList.js";import{h as w,H as z,a as k}from"./index6.js";import"./HeadFoot.js";import"./BasePanel.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./useOverlayService2.js";import"./asyncToGenerator.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./index2.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./dedupe.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,te={component:h,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/File.test.tsx"],msw:{handlers:[w.post("/api/upload",()=>z.json({path:"xyz"}))]}},decorators:[s=>e.jsx("div",{className:"max-w-lg w-screen",children:e.jsx(s,{})})]},i={render:s=>e.jsx(h,{...s}),args:{label:"File input",placeholder:"File input...",allowClear:!0,onChange:l(),onEnterPressed:l()}},t={render:()=>{const s=k.create({}),{pending:p,files:v,upload:b,remove:j}=y((r,o)=>s.postForm("/api/upload",r,o).then(n=>{var a;return((a=n.data)==null?void 0:a.path)??"pathfor file"}),void 0,{multiple:!0,onChange:r=>(l()(r),console.log(r))});return e.jsxs("div",{children:[e.jsx("div",{className:"inline-block",children:e.jsx(N,{badge:p>0?`${p}`:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Add file"}),e.jsx("input",{type:"file",multiple:!0,className:"absolute inset-0 opacity-0 z-5",onChange:r=>[b(r.target.files),r.target.value=""]})]})})}),e.jsx("br",{}),e.jsx("div",{children:v.map((r,o)=>{var n;return e.jsxs("div",{className:"w-96 mb-4",children:[e.jsxs("div",{className:"flex flex-nowrap gap-1 items-center",children:[e.jsxs("div",{className:"flex-1 truncate",children:[((n=r.file)==null?void 0:n.name)??r.filename,e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:C.mime(r.mime)})]}),e.jsx("div",{children:F.bytes(r.size)}),r.progress&&e.jsx(m,{icon:"mdi mdi-stop-circle",bg:"danger",color:"white",size:"sm",className:"p-0.5","aria-label":"abort",onClick:()=>{var a;return(a=r.abort)==null?void 0:a.call(r)}}),!r.progress&&e.jsx(m,{icon:"mdi mdi-trash-can",color:"danger",size:"sm","aria-label":"remove",onClick:()=>j(r.key)})]}),r.progress&&e.jsx(_,{animate:!0,value:r.progress*100,size:"xxs"})]},o)})})]})},args:{}};var d,c,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,x,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const oe=["_FileInput","FileUploader"];export{t as FileUploader,i as _FileInput,oe as __namedExportsOrder,te as default};
