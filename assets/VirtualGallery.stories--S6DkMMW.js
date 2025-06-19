import{r as o,j as e}from"./iframe-DcfUrZ2L.js";import{f as V}from"./index-CaHJoDsz.js";import{B as L}from"./ButtonGroup-87GcGUAF.js";import{B as i,S as I}from"./Button-7pM1lgGA.js";import"./index-Bl9sirez.js";import{C as S}from"./Card-CZJ0ddcV.js";import{T as R}from"./Title-YO6WK8jo.js";import{H as p}from"./HeadFoot-BdfsRs4J.js";import{R as B,C as f}from"./Responsive-B-3sWBW3.js";import{S as N}from"./Section-Dbs60dt2.js";import{V as H}from"./Viewport-CcMKmxve.js";import{T as G}from"./Text-BAk0flt3.js";import{V as b}from"./List-cGuqJBjF.js";import"./cloneElement-B4wm8_Ia.js";import"./Tooltip-Dv6V4Byx.js";import"./ErrorBoundary-CbzvQFF-.js";import"./createClass-D99gLwRj.js";import"./Global-CmkQSaMP.js";import"./Menu-BypgFP0F.js";import"./types-DXUe1Zpb.js";import"./usePropToggle-DoIYClWc.js";import"./EmptyContent-6xVjGj3J.js";import"./_isEqual-PxFgnGsO.js";import"./Input-DcUtB-oZ.js";import"./InputWrapper-Bmbugn7q.js";import"./ColorPicker-B2sfWfiP.js";import"./Google-DSP-6Nrb.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./index-Iz_3oi3Q.js";import"./eventHandlers-BDcAz1uA.js";import"./floating-ui.react-DaYvvi0U.js";import"./useDebounce-oR1dm03r.js";import"./Dropdown-Cqgvd0wk.js";import"./DateDisplay-D_9FGt-M.js";import"./_getByPath-DLgtPcy8.js";import"./Divider-DRJ3j7C2.js";import"./DropdownTool-CCLyIfh9.js";import"./_dedupe-BYXvNVJ3.js";import"./_debounce-BHO_GiD4.js";const{fn:A}=__STORYBOOK_MODULE_TEST__,Te={component:b,title:"@data/Virtual/Gallery",parameters:{layout:"fullscreen",controls:{exclude:"data"}}},t=50,M=V.lorem.paragraph(),m={render:x=>{const l=o.useRef(null),[h,a]=o.useState(!1),[s,c]=o.useState(50),g=o.useCallback(()=>{a(!0),setTimeout(()=>{c(t+s),a(!1)},200)},[s,t]);return e.jsx("div",{className:"min-h-[600px]",children:e.jsx(H,{children:e.jsxs(N,{children:[e.jsxs(p,{flex:!0,className:"gap-2 p-2 bg-base",children:[e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.scrollToItem(8)},children:"ScrollTo #9"}),e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.scrollToItem(12)},children:"ScrollTo #13"}),e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.hilight(1)},children:"Hilight #2"}),e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.hilight(2)},children:"Hilight #3"})]}),e.jsx(b,{...x,galleryRef:l,defaultWidth:480,defaultHeight:176,items:new Array(s).fill(!0),onLoadMore:g,loading:h,children:({item:n,index:r})=>n&&e.jsxs("div",{className:"w-[480px] flex flex-nowrap gap-1 py-2 px-4",children:[e.jsxs(S,{bodyClassName:"p-2 flex-1",children:[e.jsx(p,{children:e.jsxs(R,{children:["List item ",r+1]})}),e.jsxs(B,{children:[e.jsx(f,{flex:"auto",children:e.jsx("img",{loading:"lazy",className:"border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32",src:`https://picsum.photos/id/${r}/192/108`})}),e.jsx(f,{flex:"fill",children:e.jsx(G,{clamp:3,children:M})})]})]}),e.jsxs(L,{vertical:!0,variant:"link",className:"self-start",children:[e.jsx(i,{"aria-label":"plus",variant:"link",icon:"mdi mdi-plus"}),e.jsx(i,{"aria-label":"minus",variant:"link",icon:"mdi mdi-minus"})]})]})})]})})})},args:{total:500,onScroll:A()}},u={render:x=>{const l=o.useRef(null),[h,a]=o.useState(!1),[s,c]=o.useState([]),g=o.useCallback(n=>{a(!0),setTimeout(()=>{if(n===void 0&&c([...s,...new Array(t).fill(!0)]),n!==void 0){const r=Math.floor(n/t),j=Math.ceil(n/t),d=[...s];d.splice(r*t,t,...new Array(t).fill(!0)),d[j*t]===null&&d.splice(j*t,t,...new Array(t).fill(!0)),c(d)}a(!1)},200)},[s]);return o.useEffect(()=>{const n=new Array(150).fill(null);for(var r=100;r<150;r++)n[r]=!0;c(n)},[]),e.jsx("div",{className:"min-h-[600px]",children:e.jsx(H,{children:e.jsxs(N,{children:[e.jsxs(p,{flex:!0,className:"gap-2 p-2 bg-base",children:[e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.scrollToItem(8)},children:"ScrollTo #9"}),e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.scrollToItem(12)},children:"ScrollTo #13"}),e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.hilight(1)},children:"Hilight #2"}),e.jsx(i,{onClick:()=>{var n;return(n=l.current)==null?void 0:n.hilight(2)},children:"Hilight #3"})]}),e.jsx(b,{...x,galleryRef:l,defaultHeight:80,defaultWidth:608,loading:h,items:s,initialScroll:100,onLoadMore:g,children:({item:n,index:r})=>e.jsxs("div",{className:"w-[620px] flex flex-nowrap gap-1 py-2 px-4",children:[n&&e.jsxs(o.Fragment,{children:[e.jsxs(S,{bodyClassName:"p-2 flex-1",children:[e.jsx(p,{children:e.jsxs(R,{children:["List item ",r+1]})}),e.jsxs(B,{children:[e.jsx(f,{flex:"auto",children:e.jsx("img",{loading:"lazy",className:"border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32",src:`https://picsum.photos/id/${r}/192/108`})}),e.jsx(f,{flex:"fill",children:e.jsx(G,{clamp:3,children:M})})]})]}),e.jsxs(L,{vertical:!0,variant:"link",className:"self-start",children:[e.jsx(i,{"aria-label":"plus",variant:"link",icon:"mdi mdi-plus"}),e.jsx(i,{"aria-label":"minus",variant:"link",icon:"mdi mdi-minus"})]})]}),!n&&e.jsx("div",{className:"flex-1",children:e.jsx(I,{})})]})})]})})})},args:{}};var C,w,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const listRef = useRef<VirtualGalleryRef>(null);
    const [isLoading, setLoading] = useState(false);
    const [recordCount, setCount] = useState(50);
    const loadMore = useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        setCount(count + recordCount);
        setLoading(false);
      }, 200);
    }, [recordCount, count]);
    return <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header flex className="gap-2 p-2 bg-base">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>
                ScrollTo #9
              </Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>
                ScrollTo #13
              </Button>
              <Button onClick={() => listRef.current?.hilight(1)}>
                Hilight #2
              </Button>
              <Button onClick={() => listRef.current?.hilight(2)}>
                Hilight #3
              </Button>
            </Header>
            <VirtualGallery {...args} galleryRef={listRef} defaultWidth={480} defaultHeight={176} items={new Array(recordCount).fill(true)} onLoadMore={loadMore} loading={isLoading}>
              {({
              item,
              index
            }) => item && <div className="w-[480px] flex flex-nowrap gap-1 py-2 px-4">
                    <Card bodyClassName="p-2 flex-1">
                      <Header>
                        <Title>List item {index + 1}</Title>
                      </Header>
                      <Row>
                        <Col flex="auto">
                          <img loading="lazy" className="border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32" src={\`https://picsum.photos/id/\${index}/192/108\`} />
                        </Col>
                        <Col flex="fill">
                          <Text clamp={3}>{lorem}</Text>
                        </Col>
                      </Row>
                    </Card>
                    <ButtonGroup vertical variant="link" className="self-start">
                      <Button aria-label="plus" variant="link" icon="mdi mdi-plus" />
                      <Button aria-label="minus" variant="link" icon="mdi mdi-minus" />
                    </ButtonGroup>
                  </div>}
            </VirtualGallery>
          </Section>
        </Viewport>
      </div>;
  },
  args: {
    total: 500,
    onScroll: fn()
  }
}`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,T,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const listRef = useRef<VirtualGalleryRef>(null);
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState<AnyObject[]>([]);
    const loadMore = useCallback((idx?: number) => {
      setLoading(true);
      setTimeout(() => {
        if (idx === undefined) setItems([...items, ...new Array(count).fill(true)]);
        if (idx !== undefined) {
          const page = Math.floor(idx / count);
          const nextpage = Math.ceil(idx / count);
          const newList = [...items];
          newList.splice(page * count, count, ...new Array(count).fill(true));
          if (newList[nextpage * count] === null) newList.splice(nextpage * count, count, ...new Array(count).fill(true));
          setItems(newList);
        }
        setLoading(false);
      }, 200);
    }, [items]);
    useEffect(() => {
      const items = new Array(150).fill(null);
      for (var idx = 100; idx < 150; idx++) items[idx] = true;
      setItems(items);
    }, []);
    return <div className="min-h-[600px]">
        <Viewport>
          <Section>
            <Header flex className="gap-2 p-2 bg-base">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>
                ScrollTo #9
              </Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>
                ScrollTo #13
              </Button>
              <Button onClick={() => listRef.current?.hilight(1)}>
                Hilight #2
              </Button>
              <Button onClick={() => listRef.current?.hilight(2)}>
                Hilight #3
              </Button>
            </Header>
            <VirtualGallery {...args} galleryRef={listRef} defaultHeight={80} defaultWidth={608} loading={isLoading} items={items} initialScroll={100} onLoadMore={loadMore}>
              {({
              item,
              index
            }) => <div className="w-[620px] flex flex-nowrap gap-1 py-2 px-4">
                  {item && <Fragment>
                      <Card bodyClassName="p-2 flex-1">
                        <Header>
                          <Title>List item {index + 1}</Title>
                        </Header>
                        <Row>
                          <Col flex="auto">
                            <img loading="lazy" className="border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32" src={\`https://picsum.photos/id/\${index}/192/108\`} />
                          </Col>
                          <Col flex="fill">
                            <Text clamp={3}>{lorem}</Text>
                          </Col>
                        </Row>
                      </Card>
                      <ButtonGroup vertical variant="link" className="self-start">
                        <Button aria-label="plus" variant="link" icon="mdi mdi-plus" />
                        <Button aria-label="minus" variant="link" icon="mdi mdi-minus" />
                      </ButtonGroup>
                    </Fragment>}
                  {!item && <div className="flex-1">
                      <Skeleton />
                    </div>}
                </div>}
            </VirtualGallery>
          </Section>
        </Viewport>
      </div>;
  },
  args: {}
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ke=["Gallery","LoadableList"];export{m as Gallery,u as LoadableList,ke as __namedExportsOrder,Te as default};
