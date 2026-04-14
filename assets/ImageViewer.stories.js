import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{ct as i}from"./index.esm.js";import{t as a}from"./jsx-runtime.js";import{A as o,C as s,D as c,H as l,I as u,P as d,T as f,Tt as p,U as m,W as h,X as g,Z as _,gt as v,mt as y,ot as b,z as x}from"./iframe-Du5FrOxJ.js";import{r as S,t as C}from"./dist28.js";import{_ as w,a as T,c as E,g as D,l as O,o as k,r as A,s as j,t as M,u as N,v as P}from"./esm.js";import{o as F,t as I}from"./src7.js";import{i as L,n as R,r as z}from"./workaround.js";var B=n({Playground:()=>K,__namedExportsOrder:()=>q,default:()=>W}),V,H,U,W,G,K,q,J=t((()=>{C(),s(),M(),V=e(i()),H=e(r()),I(),z(),U=a(),W={component:F,subcomponents:{ImageAnnotationShape:R,TextShape:L},title:`@media/ImageViewer`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},G=({width:e,height:t,value:n={type:`rect`,width:100,height:100,x:0,y:0},onClose:r})=>(0,U.jsx)(o,{onClose:r,children:(0,U.jsxs)(w,{defaultValues:n,onSubmit:e=>r(e),children:[(0,U.jsx)(x,{children:(0,U.jsxs)(`div`,{className:`flex flex-col flex-1`,children:[(0,U.jsx)(P,{name:`type`,children:(0,U.jsx)(N,{options:[`rect`,`ellipse`]})}),(0,U.jsx)(P,{name:`x`,children:(0,U.jsx)(A,{inline:!0,labelWidth:`2rem`,label:`X`,min:0,max:e,showValue:!0})}),(0,U.jsx)(P,{name:`y`,children:(0,U.jsx)(A,{inline:!0,labelWidth:`2rem`,label:`Y`,min:0,max:t,showValue:!0})}),(0,U.jsx)(P,{name:`width`,children:(0,U.jsx)(A,{inline:!0,labelWidth:`2rem`,label:`Width`,min:100,max:e,showValue:!0})}),(0,U.jsx)(P,{name:`height`,children:(0,U.jsx)(A,{inline:!0,labelWidth:`2rem`,label:`Height`,min:100,max:t,showValue:!0})}),(0,U.jsx)(P,{name:`fill`,children:(0,U.jsx)(O,{label:`Shape Fill`,allowClear:!0})}),(0,U.jsx)(P,{name:`stroke`,children:(0,U.jsx)(O,{label:`Shape Stroke`,allowClear:!0})}),(0,U.jsx)(P,{name:`strokeWidth`,children:(0,U.jsx)(A,{label:`Shape Stroke`,min:0,max:5,showValue:!0})})]})}),(0,U.jsx)(b,{flex:!0,justify:`end`,className:`px-2 py-1`,children:(0,U.jsx)(v,{size:`sm`,variant:`soft`,color:`primary`,type:`submit`,children:`Update`})})]})}),K={render:e=>{let t=(0,H.useRef)(null),[n,r]=(0,H.useState)(`https://fastly.picsum.photos/id/88/1265/896.jpg?hmac=kZSw_Rfdjsa7ZPOei0Votn89lvyD7lax3Uli_PegGYM`),[i,a]=(0,H.useState)(!1),[o,s]=(0,H.useState)(`This image is marked as NSFW`),[C,A]=(0,H.useState)(`hover`),[M,N]=(0,H.useState)(null),[I,L]=(0,H.useState)(``),[R,z]=c((0,U.jsxs)(g,{children:[(0,U.jsx)(_,{label:`Export Frame`,onClick:()=>L(t.current?.export()??null)}),(0,U.jsx)(_,{label:`Export Crop`,onClick:()=>L(t.current?.crop({x:10,y:10,width:100,height:100})??null)})]})),[B,W]=(0,H.useState)(!1),[K,q]=(0,H.useState)(S.image.url({width:S.number.int({min:800,max:1800}),height:S.number.int({min:600,max:1200})})),[J,Y]=(0,H.useState)(!1),[X,Z]=(0,H.useState)({fill:S.color.rgb({includeAlpha:!0}),shapes:S.helpers.uniqueArray(()=>({type:`rect`,x:S.number.int({min:0,max:100}),y:S.number.int({min:0,max:100}),width:S.number.int({min:100,max:250}),height:S.number.int({min:100,max:250}),fill:S.color.rgb({includeAlpha:!0}),stroke:S.color.rgb(),strokeWidth:S.number.int({min:1,max:5}),textTop:{text:S.word.sample(),fontSize:S.number.int({min:12,max:24}),color:S.color.rgb(),fill:S.color.rgb()},textBottom:{text:S.word.sample(),fontSize:S.number.int({min:12,max:24}),color:S.color.rgb(),fill:S.color.rgb()}}),1)}),[Q,$]=f(G);return(0,U.jsx)(`div`,{className:`min-h-150`,children:(0,U.jsxs)(d,{children:[(0,U.jsxs)(u,{className:`relative`,children:[(0,U.jsx)(F,{src:n,ref:t,compareWith:B?K:void 0,onDebug:N,onExport:L,onCrop:L,onContextMenu:z,nsfw:i&&{message:o??``,trigger:C},annotations:J?X:void 0}),I&&(0,U.jsx)(`div`,{className:`bg-black/50 backdrop-blur-sm absolute inset-0 overflow-hidden p-8 grid grid-cols-1 grid-rows-1 place-items-center`,onClick:()=>L(null),children:(0,U.jsx)(`img`,{className:`object-contain max-w-full max-h-full outline outline-tint-500 shadow-lg bg-black`,src:I,alt:`Exported`})}),R]}),(0,U.jsx)(l,{align:`end`,children:(0,U.jsxs)(m,{orientation:`end`,activeTab:`basic`,children:[(0,U.jsx)(h,{id:`basic`,icon:`icon-[mdi--image]`,tooltip:`Basic options`,children:(0,U.jsxs)(u,{className:`text-sm`,children:[(0,U.jsxs)(x,{children:[(0,U.jsxs)(y,{legend:`Image Source`,children:[(0,U.jsx)(`p`,{className:`break-all`,children:n}),(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(v,{size:`sm`,variant:`soft`,color:`primary`,onClick:()=>r(S.image.url({width:S.number.int({min:800,max:1800}),height:S.number.int({min:600,max:1200})})),children:`Refresh`})})]}),(0,U.jsxs)(y,{legend:`Toggle NSFW`,children:[(0,U.jsx)(E,{onChange:a,checked:i}),i&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(j,{allowClear:!0,label:`Message`,value:o,onChange:s}),(0,U.jsxs)(T,{value:C,onChange:A,children:[(0,U.jsx)(k,{value:`hover`,label:`Hover`}),(0,U.jsx)(k,{value:`click`,label:`Click`})]})]})]})]}),(0,U.jsxs)(b,{className:`p-4`,children:[(0,U.jsx)(`p`,{children:`Debug Info`}),(0,U.jsx)(`pre`,{className:`text-xs`,children:JSON.stringify(M,null,2)})]})]})}),(0,U.jsx)(h,{id:`overlay`,icon:`icon-[mdi--select-compare]`,tooltip:`Overlay options`,children:(0,U.jsx)(x,{children:(0,U.jsxs)(y,{legend:`Toggle Overlay`,children:[(0,U.jsx)(E,{onChange:W,checked:B}),B&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{className:`break-all`,children:K}),(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(v,{size:`sm`,variant:`soft`,color:`primary`,onClick:()=>q(S.image.url({width:S.number.int({min:800,max:1800}),height:S.number.int({min:600,max:1200})})),children:`Refresh`})})]})]})})}),(0,U.jsx)(h,{id:`annotate`,icon:`icon-[mdi--select-all]`,tooltip:`Annotate options`,children:(0,U.jsxs)(x,{className:`flex flex-col gap-2`,children:[(0,U.jsx)(E,{onChange:Y,checked:J,label:`Toggle Annotations`}),J&&(0,U.jsxs)(w,{defaultValues:X,onChange:Z,children:[(0,U.jsx)(P,{name:`fill`,children:(0,U.jsx)(O,{label:`Bg Fill`,allowClear:!0})}),(0,U.jsx)(D,{name:`shapes`,label:`Shapes`,onAdd:()=>$(),children:({item:e,index:t,onChange:n})=>(0,U.jsxs)(`div`,{className:`flex gap-1 items-center flex-1`,children:[(0,U.jsx)(`div`,{className:(0,V.default)(`w-16 h-6 border-2 flex items-center justify-center group cursor-pointer`,e.type===`ellipse`?`rounded-full`:``),style:{backgroundColor:e.fill,borderColor:e.stroke},onClick:()=>$({value:e}).then(n),children:(0,U.jsx)(p,{icon:`icon-[mdi--pencil]`,className:`hidden group-hover:inline-block`})}),(0,U.jsxs)(`span`,{children:[`Shape #`,t+1]})]})})]})]})}),(0,U.jsx)(h,{id:`editor`,icon:`icon-[mdi--draw]`,tooltip:`Editor options`,children:(0,U.jsx)(x,{children:`Editor options`})})]})}),(0,U.jsx)(Q,{width:M?.originalSize[0],height:M?.originalSize[1]})]})})},args:{}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    const imageRef = useRef<ImageViewerRef>(null);
    const [src, setSrc] = useState("https://fastly.picsum.photos/id/88/1265/896.jpg?hmac=kZSw_Rfdjsa7ZPOei0Votn89lvyD7lax3Uli_PegGYM"
    // faker.image.url({
    //   width: faker.number.int({ min: 800, max: 1800 }),
    //   height: faker.number.int({ min: 600, max: 1200 }),
    // }),
    );
    const [nsfw, setNsfw] = useState(false);
    const [nsfwMessage, setNsfwMessage] = useState<string | null>("This image is marked as NSFW");
    const [nsfwTrigger, setNsfwTrigger] = useState<"hover" | "click">("hover");
    const [debugInfo, setDebugInfo] = useState<any>(null);
    const [exportSrc, setExport] = useState<string | null>("");
    const [ContextMenu, onContextMenu] = useContextMenu(<Menu>
        <MenuItem label="Export Frame" onClick={() => setExport(imageRef.current?.export() ?? null)} />
        <MenuItem label="Export Crop" onClick={() => setExport(imageRef.current?.crop({
        x: 10,
        y: 10,
        width: 100,
        height: 100
      }) ?? null)} />
      </Menu>);
    const [overlay, setOverlay] = useState(false);
    const [overlaySrc, setOverlaySrc] = useState(faker.image.url({
      width: faker.number.int({
        min: 800,
        max: 1800
      }),
      height: faker.number.int({
        min: 600,
        max: 1200
      })
    }));
    const [annotate, setAnnotate] = useState(false);
    const [annotations, setAnnotations] = useState({
      fill: faker.color.rgb({
        includeAlpha: true
      }),
      shapes: faker.helpers.uniqueArray(() => ({
        type: "rect",
        x: faker.number.int({
          min: 0,
          max: 100
        }),
        y: faker.number.int({
          min: 0,
          max: 100
        }),
        width: faker.number.int({
          min: 100,
          max: 250
        }),
        height: faker.number.int({
          min: 100,
          max: 250
        }),
        fill: faker.color.rgb({
          includeAlpha: true
        }),
        stroke: faker.color.rgb(),
        strokeWidth: faker.number.int({
          min: 1,
          max: 5
        }),
        textTop: {
          text: faker.word.sample(),
          fontSize: faker.number.int({
            min: 12,
            max: 24
          }),
          color: faker.color.rgb(),
          fill: faker.color.rgb()
        },
        textBottom: {
          text: faker.word.sample(),
          fontSize: faker.number.int({
            min: 12,
            max: 24
          }),
          color: faker.color.rgb(),
          fill: faker.color.rgb()
        }
      }), 1)
    } as ImageAnnotations);
    const [ShapeEditorModal, openShapeEditor] = useOverlayService(ShapeEditor);
    return <div className="min-h-150">
        <Viewport>
          <Section className="relative">
            <ImageViewer src={src} ref={imageRef} compareWith={overlay ? overlaySrc : undefined} onDebug={setDebugInfo} onExport={setExport} onCrop={setExport} onContextMenu={onContextMenu} nsfw={nsfw && {
            message: nsfwMessage ?? "",
            trigger: nsfwTrigger
          }} annotations={annotate ? annotations : undefined} />

            {exportSrc && <div className="bg-black/50 backdrop-blur-sm absolute inset-0 overflow-hidden p-8 grid grid-cols-1 grid-rows-1 place-items-center" onClick={() => setExport(null)}>
                <img className="object-contain max-w-full max-h-full outline outline-tint-500 shadow-lg bg-black" src={exportSrc} alt="Exported" />
              </div>}
            {ContextMenu}
          </Section>
          <Aside align="end">
            <TabPanel orientation="end" activeTab="basic">
              <Tab id="basic" icon="icon-[mdi--image]" tooltip="Basic options">
                <Section className="text-sm">
                  <Content>
                    <Callout legend="Image Source">
                      <p className="break-all">{src}</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="soft" color="primary" onClick={() => setSrc(faker.image.url({
                        width: faker.number.int({
                          min: 800,
                          max: 1800
                        }),
                        height: faker.number.int({
                          min: 600,
                          max: 1200
                        })
                      }))}>
                          Refresh
                        </Button>
                      </div>
                    </Callout>
                    <Callout legend="Toggle NSFW">
                      <Switch onChange={setNsfw} checked={nsfw} />
                      {nsfw && <>
                          <Textarea allowClear label="Message" value={nsfwMessage} onChange={setNsfwMessage} />
                          <RadioGroup value={nsfwTrigger} onChange={setNsfwTrigger}>
                            <Radio value="hover" label="Hover" />
                            <Radio value="click" label="Click" />
                          </RadioGroup>
                        </>}
                    </Callout>
                  </Content>
                  <Footer className="p-4">
                    <p>Debug Info</p>
                    <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
                  </Footer>
                </Section>
              </Tab>
              <Tab id="overlay" icon="icon-[mdi--select-compare]" tooltip="Overlay options">
                <Content>
                  <Callout legend="Toggle Overlay">
                    <Switch onChange={setOverlay} checked={overlay} />
                    {overlay && <>
                        <p className="break-all">{overlaySrc}</p>
                        <div className="flex justify-end">
                          <Button size="sm" variant="soft" color="primary" onClick={() => setOverlaySrc(faker.image.url({
                        width: faker.number.int({
                          min: 800,
                          max: 1800
                        }),
                        height: faker.number.int({
                          min: 600,
                          max: 1200
                        })
                      }))}>
                            Refresh
                          </Button>
                        </div>
                      </>}
                  </Callout>
                </Content>
              </Tab>
              <Tab id="annotate" icon="icon-[mdi--select-all]" tooltip="Annotate options">
                <Content className="flex flex-col gap-2">
                  <Switch onChange={setAnnotate} checked={annotate} label="Toggle Annotations" />
                  {annotate && <Form defaultValues={annotations} onChange={setAnnotations}>
                      <Controller name="fill">
                        <ColorInput label="Bg Fill" allowClear />
                      </Controller>

                      <ArrayInput<ImageAnnotationShape> name="shapes" label="Shapes" onAdd={() => openShapeEditor()}>
                        {({
                      item,
                      index,
                      onChange
                    }) => <div className="flex gap-1 items-center flex-1">
                            <div className={classNames("w-16 h-6 border-2 flex items-center justify-center group cursor-pointer", item.type === "ellipse" ? "rounded-full" : "")} style={{
                        backgroundColor: item.fill,
                        borderColor: item.stroke
                      }} onClick={() => openShapeEditor({
                        value: item
                      }).then(onChange)}>
                              <Icon icon="icon-[mdi--pencil]" className="hidden group-hover:inline-block" />
                            </div>
                            <span>Shape #{index + 1}</span>
                          </div>}
                      </ArrayInput>
                    </Form>}
                </Content>
              </Tab>
              <Tab id="editor" icon="icon-[mdi--draw]" tooltip="Editor options">
                <Content>Editor options</Content>
              </Tab>
            </TabPanel>
          </Aside>

          <ShapeEditorModal width={debugInfo?.originalSize[0]} height={debugInfo?.originalSize[1]} />
        </Viewport>
      </div>;
  },
  args: {}
}`,...K.parameters?.docs?.source}}},q=[`Playground`]}));J();export{K as Playground,q as __namedExportsOrder,W as default,J as n,B as t};