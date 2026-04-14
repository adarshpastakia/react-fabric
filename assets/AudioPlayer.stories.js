import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{R as i,X as a}from"./ResizeObserver.es.js";import{t as o}from"./jsx-runtime.js";import{C as s,H as c,I as l,P as u,U as d,W as f,gt as p,mt as m,z as h}from"./iframe-Du5FrOxJ.js";import{a as g,c as _,o as v,t as y}from"./esm.js";import{a as b,t as x}from"./src7.js";import{r as S,t as C}from"./workaround.js";import{n as w,t as T}from"./large_video.js";var E,D=t((()=>{E=``+new URL(`sample-DOsI675H.mp3`,import.meta.url).href})),O,k=t((()=>{O=``+new URL(`sample-77PFpiGU.wav`,import.meta.url).href})),A=n({Playground:()=>F,__namedExportsOrder:()=>I,default:()=>P}),j,M,N,P,F,I,L=t((()=>{s(),y(),i(),j=e(r()),x(),S(),T(),D(),k(),M=o(),{fn:N}=__STORYBOOK_MODULE_TEST__,P={component:b,subcomponents:{AudioRegion:C},title:`@media/AudioPlayer`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},F={render:e=>{let t=(0,j.useRef)(null),[n,r]=(0,j.useState)(E),[i,o]=(0,j.useState)(!1),[s,y]=(0,j.useState)([{id:`1`,start:.2,end:15.5,color:`#ffcc00`,channel:0},{id:`2`,start:5.2,end:9.5,color:`#ff00cc`,channel:1},{id:`3`,start:12.2,end:18.5,color:`#ff00cc`,channel:1}]);return(0,M.jsx)(`div`,{className:`min-h-150`,children:(0,M.jsxs)(u,{children:[(0,M.jsxs)(l,{className:`relative`,children:[(0,M.jsx)(b,{src:n,ref:t,autoPlay:!0,editable:i,showVideo:n===w,regions:s,onRegionsChange:y,onTimeChange:e.onTimeChange}),(0,M.jsx)(h,{className:`text-sm`,children:s.sort(a(`asc`,`start`)).map(e=>(0,M.jsx)(m,{legend:`Region ${e.id}`,legendClassName:`text-xs text-primary-600`,children:(0,M.jsxs)(`div`,{className:`flex items-center`,children:[(0,M.jsxs)(`p`,{className:`flex-1`,children:[`Start: `,e.start.toFixed(2),`s, End: `,e.end.toFixed(2),`s, Channel: `,e.channel]}),(0,M.jsx)(p,{size:`sm`,onClick:()=>t.current?.playRegion(e.id),children:`Play`})]})},e.id))})]}),(0,M.jsx)(c,{align:`end`,children:(0,M.jsx)(d,{orientation:`end`,activeTab:`basic`,children:(0,M.jsx)(f,{id:`basic`,icon:`icon-[mdi--image]`,tooltip:`Basic options`,children:(0,M.jsx)(l,{className:`text-sm`,children:(0,M.jsxs)(h,{children:[(0,M.jsxs)(m,{legend:`Audio Source`,children:[(0,M.jsx)(`p`,{className:`break-all`,children:n}),(0,M.jsxs)(g,{onChange:r,name:`src`,value:n,vertical:!0,children:[(0,M.jsx)(v,{value:E,label:`Sample MP3`}),(0,M.jsx)(v,{value:O,label:`Sample 7.1`}),(0,M.jsx)(v,{value:w,label:`Sample Video`}),(0,M.jsx)(v,{value:`/assets/samples/sample1.aiff`,label:`Unsupported Format`})]})]}),(0,M.jsx)(`div`,{children:(0,M.jsx)(_,{label:`Editable Regions`,checked:i,onChange:e=>o(e)})})]})})})})})]})})},args:{onTimeChange:N()}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const audioRef = useRef<AudioPlayerRef>(null);
    const [src, setSrc] = useState(sampleAudio);
    const [editable, setEditable] = useState(false);
    const [regions, setRegions] = useState<AudioRegion[]>([{
      id: "1",
      start: 0.2,
      end: 15.5,
      color: "#ffcc00",
      channel: 0
    }, {
      id: "2",
      start: 5.2,
      end: 9.5,
      color: "#ff00cc",
      channel: 1
    }, {
      id: "3",
      start: 12.2,
      end: 18.5,
      color: "#ff00cc",
      channel: 1
    }]);
    return <div className="min-h-150">
        <Viewport>
          <Section className="relative">
            <AudioPlayer src={src} ref={audioRef} autoPlay editable={editable} showVideo={src === largeVideo} regions={regions} onRegionsChange={setRegions} onTimeChange={args.onTimeChange} />
            <Content className="text-sm">
              {regions.sort(compareValues("asc", "start")).map(r => <Callout key={r.id} legend={\`Region \${r.id}\`} legendClassName="text-xs text-primary-600">
                  <div className="flex items-center">
                    <p className="flex-1">
                      Start: {r.start.toFixed(2)}s, End: {r.end.toFixed(2)}s, Channel: {r.channel}
                    </p>
                    <Button size="sm" onClick={() => audioRef.current?.playRegion(r.id)}>
                      Play
                    </Button>
                  </div>
                </Callout>)}
            </Content>
          </Section>
          <Aside align="end">
            <TabPanel orientation="end" activeTab="basic">
              <Tab id="basic" icon="icon-[mdi--image]" tooltip="Basic options">
                <Section className="text-sm">
                  <Content>
                    <Callout legend="Audio Source">
                      <p className="break-all">{src}</p>
                      <RadioGroup onChange={setSrc} name="src" value={src} vertical>
                        <Radio value={sampleAudio} label="Sample MP3" />
                        <Radio value={sample7Audio} label="Sample 7.1" />
                        <Radio value={largeVideo} label="Sample Video" />
                        <Radio value={"/assets/samples/sample1.aiff"} label="Unsupported Format" />
                      </RadioGroup>
                    </Callout>
                    <div>
                      <Switch label="Editable Regions" checked={editable} onChange={e => setEditable(e)} />
                    </div>
                  </Content>
                </Section>
              </Tab>
            </TabPanel>
          </Aside>
        </Viewport>
      </div>;
  },
  args: {
    onTimeChange: fn()
  }
}`,...F.parameters?.docs?.source}}},I=[`Playground`]}));L();export{F as Playground,I as __namedExportsOrder,P as default,L as n,A as t};