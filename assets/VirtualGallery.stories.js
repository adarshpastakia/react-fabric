import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{r as n}from"./EmptyContent.js";import{At as r,Et as i,K as a,Lt as o,Mt as s,Pt as c,Yt as l,gt as u,it as d,mt as f,t as p}from"./src2.js";import{t as m}from"./jsx-runtime.js";import{n as h,t as g}from"./chunk-NAVWDHVN.js";import{i as _,t as v}from"./src5.js";var y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{p(),v(),h(),y=t(),b=m(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={component:_,title:`@data/Virtual/Gallery`,parameters:{layout:`fullscreen`,controls:{exclude:`data`}}},C=50,w=g.lorem.paragraph(),T={render:e=>{let t=(0,y.useRef)(null),[d,p]=(0,y.useState)(!1),[m,h]=(0,y.useState)(50),g=(0,y.useCallback)(()=>{p(!0),setTimeout(()=>{h(C+m),p(!1)},200)},[m,C]);return(0,b.jsx)(`div`,{className:`min-h-150`,children:(0,b.jsx)(i,{children:(0,b.jsxs)(c,{children:[(0,b.jsxs)(o,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,b.jsx)(n,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,b.jsx)(n,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,b.jsx)(n,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,b.jsx)(n,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,b.jsx)(_,{...e,galleryRef:t,defaultWidth:480,defaultHeight:176,items:Array(m).fill(!0),onLoadMore:g,loading:d,children:({item:e,index:t})=>e&&(0,b.jsxs)(`div`,{className:`w-120 flex flex-nowrap gap-1 py-2 px-4`,children:[(0,b.jsxs)(a,{classNames:{body:`p-2 flex-1`},children:[(0,b.jsx)(o,{children:(0,b.jsxs)(l,{children:[`List item `,t+1]})}),(0,b.jsxs)(s,{children:[(0,b.jsx)(r,{children:(0,b.jsx)(`img`,{loading:`lazy`,className:`border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32`,src:`https://picsum.photos/id/${t}/192/108`})}),(0,b.jsx)(r,{flex:`fill`,children:(0,b.jsx)(u,{clamp:3,children:w})})]})]}),(0,b.jsxs)(f,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,b.jsx)(n,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,b.jsx)(n,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]})})]})})})},args:{total:500,onScroll:x()}},E={render:e=>{let t=(0,y.useRef)(null),[p,m]=(0,y.useState)(!1),[h,g]=(0,y.useState)([]),v=(0,y.useCallback)(e=>{m(!0),setTimeout(()=>{if(e===void 0&&g([...h,...Array(C).fill(!0)]),e!==void 0){let t=Math.floor(e/C),n=Math.ceil(e/C),r=[...h];r.splice(t*C,C,...Array(C).fill(!0)),r[n*C]===null&&r.splice(n*C,C,...Array(C).fill(!0)),g(r)}m(!1)},200)},[h]);return(0,y.useEffect)(()=>{let e=Array(150).fill(null);for(var t=100;t<150;t++)e[t]=!0;g(e)},[]),(0,b.jsx)(`div`,{className:`min-h-150`,children:(0,b.jsx)(i,{children:(0,b.jsxs)(c,{children:[(0,b.jsxs)(o,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,b.jsx)(n,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,b.jsx)(n,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,b.jsx)(n,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,b.jsx)(n,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,b.jsx)(_,{...e,galleryRef:t,defaultHeight:80,defaultWidth:608,loading:p,items:h,initialScroll:100,onLoadMore:v,children:({item:e,index:t})=>(0,b.jsxs)(`div`,{className:`w-155 flex flex-nowrap gap-1 p-1`,children:[e&&(0,b.jsxs)(y.Fragment,{children:[(0,b.jsxs)(a,{classNames:{body:`p-2 flex-1`},children:[(0,b.jsx)(o,{children:(0,b.jsxs)(l,{children:[`List item `,t+1]})}),(0,b.jsxs)(s,{children:[(0,b.jsx)(r,{children:(0,b.jsx)(`img`,{loading:`lazy`,className:`border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32`,src:`https://picsum.photos/id/${t}/192/108`})}),(0,b.jsx)(r,{flex:`fill`,children:(0,b.jsx)(u,{clamp:3,children:w})})]})]}),(0,b.jsxs)(f,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,b.jsx)(n,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,b.jsx)(n,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]}),!e&&(0,b.jsx)(`div`,{className:`flex-1`,children:(0,b.jsx)(d,{})})]})})]})})})},args:{}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
          <Layout>
            <Header flex className="gap-2 p-2 bg-default">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>ScrollTo #9</Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>ScrollTo #13</Button>
              <Button onClick={() => listRef.current?.hilight(1)}>Hilight #2</Button>
              <Button onClick={() => listRef.current?.hilight(2)}>Hilight #3</Button>
            </Header>
            <VirtualGallery {...args} galleryRef={listRef} defaultWidth={480} defaultHeight={176} items={new Array(recordCount).fill(true)} onLoadMore={loadMore} loading={isLoading}>
              {({
              item,
              index
            }) => item && <div className="w-120 flex flex-nowrap gap-1 py-2 px-4">
                    <Card classNames={{
                body: "p-2 flex-1"
              }}>
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
          </Layout>
        </Viewport>
      </div>;
  },
  args: {
    total: 500,
    onScroll: fn()
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
          <Layout>
            <Header flex className="gap-2 p-2 bg-default">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>ScrollTo #9</Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>ScrollTo #13</Button>
              <Button onClick={() => listRef.current?.hilight(1)}>Hilight #2</Button>
              <Button onClick={() => listRef.current?.hilight(2)}>Hilight #3</Button>
            </Header>
            <VirtualGallery {...args} galleryRef={listRef} defaultHeight={80} defaultWidth={608} loading={isLoading} items={items} initialScroll={100} onLoadMore={loadMore}>
              {({
              item,
              index
            }) => <div className="w-155 flex flex-nowrap gap-1 p-1">
                  {item && <Fragment>
                      <Card classNames={{
                  body: "p-2 flex-1"
                }}>
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
          </Layout>
        </Viewport>
      </div>;
  },
  args: {}
}`,...E.parameters?.docs?.source}}},D=[`Gallery`,`LoadableList`]})))()}O();export{T as Gallery,E as LoadableList,D as __namedExportsOrder,S as default};