import{r as o,j as e}from"./iframe-DvMcemLF.js";import{f as V}from"./index4.js";import{B as L}from"./ButtonGroup2.js";import{B as i,S as I}from"./Button.js";import"./index2.js";import{C as S}from"./Card2.js";import{T as R}from"./Title.js";import{H as p}from"./HeadFoot.js";import{R as B,C as f}from"./Responsive.js";import{S as N}from"./Section.js";import{V as H}from"./Viewport.js";import{T as G}from"./Text.js";import{V as b}from"./List.js";import"./cloneElement.js";import"./Tooltip.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./nodeCheck.js";import"./types.js";import"./usePropToggle.js";import"./EmptyContent.js";import"./isEqual.js";import"./memoize-one.esm.js";import"./Copy.js";import"./useDebounce.js";import"./Dropdown.js";import"./Menu.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./DateDisplay.js";import"./getByPath.js";import"./Divider.js";import"./DropdownTool.js";import"./ColorPicker.js";import"./index3.js";import"./ErrorIcon.js";import"./Input.js";import"./InputWrapper.js";import"./eventHandlers.js";import"./floating-ui.react.js";import"./dedupe.js";import"./debounce.js";const{fn:A}=__STORYBOOK_MODULE_TEST__,Re={component:b,title:"@data/Virtual/Gallery",parameters:{layout:"fullscreen",controls:{exclude:"data"}}},n=50,M=V.lorem.paragraph(),d={render:x=>{const l=o.useRef(null),[h,a]=o.useState(!1),[s,c]=o.useState(50),g=o.useCallback(()=>{a(!0),setTimeout(()=>{c(n+s),a(!1)},200)},[s,n]);return e.jsx("div",{className:"min-h-[600px]",children:e.jsx(H,{children:e.jsxs(N,{children:[e.jsxs(p,{flex:!0,className:"gap-2 p-2 bg-base",children:[e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.scrollToItem(8)},children:"ScrollTo #9"}),e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.scrollToItem(12)},children:"ScrollTo #13"}),e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.hilight(1)},children:"Hilight #2"}),e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.hilight(2)},children:"Hilight #3"})]}),e.jsx(b,{...x,galleryRef:l,defaultWidth:480,defaultHeight:176,items:new Array(s).fill(!0),onLoadMore:g,loading:h,children:({item:t,index:r})=>t&&e.jsxs("div",{className:"w-[480px] flex flex-nowrap gap-1 py-2 px-4",children:[e.jsxs(S,{bodyClassName:"p-2 flex-1",children:[e.jsx(p,{children:e.jsxs(R,{children:["List item ",r+1]})}),e.jsxs(B,{children:[e.jsx(f,{flex:"auto",children:e.jsx("img",{loading:"lazy",className:"border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32",src:`https://picsum.photos/id/${r}/192/108`})}),e.jsx(f,{flex:"fill",children:e.jsx(G,{clamp:3,children:M})})]})]}),e.jsxs(L,{vertical:!0,variant:"link",className:"self-start",children:[e.jsx(i,{"aria-label":"plus",variant:"link",icon:"mdi mdi-plus"}),e.jsx(i,{"aria-label":"minus",variant:"link",icon:"mdi mdi-minus"})]})]})})]})})})},args:{total:500,onScroll:A()}},u={render:x=>{const l=o.useRef(null),[h,a]=o.useState(!1),[s,c]=o.useState([]),g=o.useCallback(t=>{a(!0),setTimeout(()=>{if(t===void 0&&c([...s,...new Array(n).fill(!0)]),t!==void 0){const r=Math.floor(t/n),j=Math.ceil(t/n),m=[...s];m.splice(r*n,n,...new Array(n).fill(!0)),m[j*n]===null&&m.splice(j*n,n,...new Array(n).fill(!0)),c(m)}a(!1)},200)},[s]);return o.useEffect(()=>{const t=new Array(150).fill(null);for(var r=100;r<150;r++)t[r]=!0;c(t)},[]),e.jsx("div",{className:"min-h-[600px]",children:e.jsx(H,{children:e.jsxs(N,{children:[e.jsxs(p,{flex:!0,className:"gap-2 p-2 bg-base",children:[e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.scrollToItem(8)},children:"ScrollTo #9"}),e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.scrollToItem(12)},children:"ScrollTo #13"}),e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.hilight(1)},children:"Hilight #2"}),e.jsx(i,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.hilight(2)},children:"Hilight #3"})]}),e.jsx(b,{...x,galleryRef:l,defaultHeight:80,defaultWidth:608,loading:h,items:s,initialScroll:100,onLoadMore:g,children:({item:t,index:r})=>e.jsxs("div",{className:"w-[620px] flex flex-nowrap gap-1 py-2 px-4",children:[t&&e.jsxs(o.Fragment,{children:[e.jsxs(S,{bodyClassName:"p-2 flex-1",children:[e.jsx(p,{children:e.jsxs(R,{children:["List item ",r+1]})}),e.jsxs(B,{children:[e.jsx(f,{flex:"auto",children:e.jsx("img",{loading:"lazy",className:"border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32",src:`https://picsum.photos/id/${r}/192/108`})}),e.jsx(f,{flex:"fill",children:e.jsx(G,{clamp:3,children:M})})]})]}),e.jsxs(L,{vertical:!0,variant:"link",className:"self-start",children:[e.jsx(i,{"aria-label":"plus",variant:"link",icon:"mdi mdi-plus"}),e.jsx(i,{"aria-label":"minus",variant:"link",icon:"mdi mdi-minus"})]})]}),!t&&e.jsx("div",{className:"flex-1",children:e.jsx(I,{})})]})})]})})})},args:{}};var C,w,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,T,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Be=["Gallery","LoadableList"];export{d as Gallery,u as LoadableList,Be as __namedExportsOrder,Re as default};
