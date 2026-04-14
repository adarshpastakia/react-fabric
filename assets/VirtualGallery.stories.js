import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{At as i,C as a,I as o,L as s,M as c,O as l,P as u,Pt as d,R as f,at as p,gt as m,st as h}from"./iframe-Du5FrOxJ.js";import{r as g,t as _}from"./dist28.js";import{r as v,t as y}from"./src4.js";var b,x,S,C,w,T,E,D,O;t((()=>{_(),a(),b=e(n()),y(),x=r(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={component:v,title:`@data/Virtual/Gallery`,parameters:{layout:`fullscreen`,controls:{exclude:`data`}}},w=50,T=g.lorem.paragraph(),E={render:e=>{let t=(0,b.useRef)(null),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(50),g=(0,b.useCallback)(()=>{r(!0),setTimeout(()=>{a(w+i),r(!1)},200)},[i,w]);return(0,x.jsx)(`div`,{className:`min-h-150`,children:(0,x.jsx)(u,{children:(0,x.jsxs)(o,{children:[(0,x.jsxs)(h,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,x.jsx)(m,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,x.jsx)(m,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,x.jsx)(m,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,x.jsx)(m,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,x.jsx)(v,{...e,galleryRef:t,defaultWidth:480,defaultHeight:176,items:Array(i).fill(!0),onLoadMore:g,loading:n,children:({item:e,index:t})=>e&&(0,x.jsxs)(`div`,{className:`w-120 flex flex-nowrap gap-1 py-2 px-4`,children:[(0,x.jsxs)(p,{bodyClassName:`p-2 flex-1`,children:[(0,x.jsx)(h,{children:(0,x.jsxs)(c,{children:[`List item `,t+1]})}),(0,x.jsxs)(f,{children:[(0,x.jsx)(s,{children:(0,x.jsx)(`img`,{loading:`lazy`,className:`border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32`,src:`https://picsum.photos/id/${t}/192/108`})}),(0,x.jsx)(s,{flex:`fill`,children:(0,x.jsx)(l,{clamp:3,children:T})})]})]}),(0,x.jsxs)(d,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,x.jsx)(m,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,x.jsx)(m,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]})})]})})})},args:{total:500,onScroll:S()}},D={render:e=>{let t=(0,b.useRef)(null),[n,r]=(0,b.useState)(!1),[a,g]=(0,b.useState)([]),_=(0,b.useCallback)(e=>{r(!0),setTimeout(()=>{if(e===void 0&&g([...a,...Array(w).fill(!0)]),e!==void 0){let t=Math.floor(e/w),n=Math.ceil(e/w),r=[...a];r.splice(t*w,w,...Array(w).fill(!0)),r[n*w]===null&&r.splice(n*w,w,...Array(w).fill(!0)),g(r)}r(!1)},200)},[a]);return(0,b.useEffect)(()=>{let e=Array(150).fill(null);for(var t=100;t<150;t++)e[t]=!0;g(e)},[]),(0,x.jsx)(`div`,{className:`min-h-150`,children:(0,x.jsx)(u,{children:(0,x.jsxs)(o,{children:[(0,x.jsxs)(h,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,x.jsx)(m,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,x.jsx)(m,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,x.jsx)(m,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,x.jsx)(m,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,x.jsx)(v,{...e,galleryRef:t,defaultHeight:80,defaultWidth:608,loading:n,items:a,initialScroll:100,onLoadMore:_,children:({item:e,index:t})=>(0,x.jsxs)(`div`,{className:`w-155 flex flex-nowrap gap-1 py-2 px-4`,children:[e&&(0,x.jsxs)(b.Fragment,{children:[(0,x.jsxs)(p,{bodyClassName:`p-2 flex-1`,children:[(0,x.jsx)(h,{children:(0,x.jsxs)(c,{children:[`List item `,t+1]})}),(0,x.jsxs)(f,{children:[(0,x.jsx)(s,{children:(0,x.jsx)(`img`,{loading:`lazy`,className:`border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32`,src:`https://picsum.photos/id/${t}/192/108`})}),(0,x.jsx)(s,{flex:`fill`,children:(0,x.jsx)(l,{clamp:3,children:T})})]})]}),(0,x.jsxs)(d,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,x.jsx)(m,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,x.jsx)(m,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]}),!e&&(0,x.jsx)(`div`,{className:`flex-1`,children:(0,x.jsx)(i,{})})]})})]})})})},args:{}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    return <div className="min-h-150">
        <Viewport>
          <Section>
            <Header flex className="gap-2 p-2 bg-default">
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
            }) => item && <div className="w-120 flex flex-nowrap gap-1 py-2 px-4">
                    <Card bodyClassName="p-2 flex-1">
                      <Header>
                        <Title>List item {index + 1}</Title>
                      </Header>
                      <Row>
                        <Col>
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    return <div className="min-h-150">
        <Viewport>
          <Section>
            <Header flex className="gap-2 p-2 bg-default">
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
            }) => <div className="w-155 flex flex-nowrap gap-1 py-2 px-4">
                  {item && <Fragment>
                      <Card bodyClassName="p-2 flex-1">
                        <Header>
                          <Title>List item {index + 1}</Title>
                        </Header>
                        <Row>
                          <Col>
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
}`,...D.parameters?.docs?.source}}},O=[`Gallery`,`LoadableList`]}))();export{E as Gallery,D as LoadableList,O as __namedExportsOrder,C as default};