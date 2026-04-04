import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{L as i,lt as a}from"./ResizeObserver.es.js";import{ct as o}from"./index.esm.js";import{H as s,I as c,R as l,Y as u,d,h as f,m as p,mt as m,o as h,ot as g,p as _,t as v,ut as y}from"./iframe-B-Wcw5ev.js";import{r as b,t as x}from"./dist28.js";import{n as S,t as C}from"./src4.js";var w,T,E,D,O,k,A,j,M;t((()=>{x(),v(),i(),w=e(o()),T=e(n()),C(),E=r(),D={component:S,title:`@data/Virtual/List`,parameters:{layout:`fullscreen`,controls:{exclude:`items`}}},O={render:e=>{let t=(0,T.useRef)(null);return(0,E.jsx)(`div`,{className:`min-h-150`,children:(0,E.jsx)(d,{children:(0,E.jsxs)(_,{children:[(0,E.jsxs)(l,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,E.jsx)(u,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,E.jsx)(u,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,E.jsx)(u,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,E.jsx)(u,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,E.jsx)(S,{...e,listRef:t,defaultHeight:152,defaultWidth:608,children:({item:e,index:t,isLast:n})=>(0,E.jsxs)(`div`,{className:`flex flex-nowrap gap-4 p-2`,children:[(0,E.jsx)(`div`,{className:(0,w.default)(`flex-content relative`,!n&&`before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4`),children:(0,E.jsx)(g,{rounded:!0,name:e.iso3,fallbackIcon:`icon-[circle-flags--${e.iso3}`,size:`3rem`})}),(0,E.jsxs)(c,{bodyClassName:`p-2 grid w-120 flex-1`,children:[(0,E.jsxs)(f,{className:`text-lg font-semibold`,align:`center`,children:[(0,E.jsx)(p,{flex:`fill`,children:(0,E.jsxs)(h,{className:`flex-1 px-2`,children:[t,` `,e.name]})}),(0,E.jsx)(p,{children:(0,E.jsxs)(h,{children:[`\xA0`,e.emoji]})})]}),(0,E.jsxs)(f,{justify:`between`,align:`center`,children:[(0,E.jsx)(p,{children:(0,E.jsx)(h,{children:e.fullname})}),(0,E.jsx)(p,{children:(0,E.jsx)(h,{className:`text-sm text-muted`,children:e.continent})})]}),(0,E.jsxs)(f,{justify:`between`,align:`center`,children:[(0,E.jsx)(p,{children:(0,E.jsx)(h,{className:`text-sm text-muted`,children:e.capital})}),(0,E.jsx)(p,{children:(0,E.jsxs)(h,{className:`text-sm text-muted`,children:[e.iso2,`/`,e.iso3]})})]}),(0,E.jsxs)(f,{justify:`between`,align:`center`,children:[(0,E.jsx)(p,{children:(0,E.jsx)(h,{className:`text-sm text-muted`,children:e.phone})}),(0,E.jsx)(p,{children:(0,E.jsx)(h,{className:`text-sm text-muted`,children:e.currency})})]})]}),(0,E.jsxs)(m,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,E.jsx)(u,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,E.jsx)(u,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]})})]})})})},args:{items:a.list}},k=20,A=b.lorem.paragraph(),j={render:e=>{let t=(0,T.useRef)(null),[n,r]=(0,T.useState)(!1),[i,a]=(0,T.useState)([]),o=(0,T.useCallback)(e=>{r(!0),setTimeout(()=>{if(e===void 0&&a([...i,...Array(k).fill(!0)]),e!==void 0){let t=Math.floor(e/k),n=Math.ceil(e/k),r=[...i];r.splice(t*k,k,...Array(k).fill(!0)),r[n*k]===null&&r.splice(n*k,k,...Array(k).fill(!0)),a(r)}r(!1)},2e3)},[i]);return(0,T.useEffect)(()=>{let e=Array(150).fill(null);for(var t=100;t<150;t++)e[t]=!0;a(e)},[]),(0,E.jsx)(`div`,{className:`min-h-150`,children:(0,E.jsx)(d,{children:(0,E.jsxs)(_,{children:[(0,E.jsxs)(l,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,E.jsx)(u,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,E.jsx)(u,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,E.jsx)(u,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,E.jsx)(u,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,E.jsx)(S,{...e,listRef:t,defaultHeight:152,defaultWidth:608,loading:n,items:i,initialScroll:105,onLoadMore:o,children:({item:e,index:t})=>(0,E.jsxs)(`div`,{className:`w-155 flex flex-nowrap gap-1 py-2 px-4`,children:[e&&(0,E.jsxs)(T.Fragment,{children:[(0,E.jsxs)(c,{bodyClassName:`p-2 flex-1`,children:[(0,E.jsx)(l,{children:(0,E.jsxs)(s,{children:[`List item `,t+1]})}),(0,E.jsxs)(f,{children:[(0,E.jsx)(p,{flex:`auto`,children:(0,E.jsx)(`img`,{loading:`lazy`,className:`border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32`,src:`https://picsum.photos/id/${t}/192/108`})}),(0,E.jsx)(p,{flex:`fill`,children:(0,E.jsx)(h,{clamp:3,children:A})})]})]}),(0,E.jsxs)(m,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,E.jsx)(u,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,E.jsx)(u,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]}),!e&&(0,E.jsx)(`div`,{className:`flex-1`,children:(0,E.jsx)(y,{})})]})})]})})})},args:{total:500}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const listRef = useRef<VirtualListRef>(null);
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
            <VirtualList {...args as any} listRef={listRef} defaultHeight={152} defaultWidth={608}>
              {({
              item,
              index,
              isLast
            }: any) => <div className="flex flex-nowrap gap-4 p-2">
                  <div className={classNames("flex-content relative", !isLast && "before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4")}>
                    <Avatar rounded name={item.iso3} fallbackIcon={\`icon-[circle-flags--\${item.iso3}\`} size="3rem" />
                  </div>
                  <Card bodyClassName="p-2 grid w-120 flex-1">
                    <Row className="text-lg font-semibold" align="center">
                      <Col flex="fill">
                        <Text className="flex-1 px-2">
                          {index} {item.name}
                        </Text>
                      </Col>
                      <Col>
                        <Text>&nbsp;{item.emoji}</Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text>{item.fullname}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">
                          {item.continent}
                        </Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text className="text-sm text-muted">
                          {item.capital}
                        </Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">
                          {item.iso2}/{item.iso3}
                        </Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text className="text-sm text-muted">{item.phone}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">
                          {item.currency}
                        </Text>
                      </Col>
                    </Row>
                  </Card>
                  <ButtonGroup vertical variant="link" className="self-start">
                    <Button aria-label="plus" variant="link" icon="mdi mdi-plus" />
                    <Button aria-label="minus" variant="link" icon="mdi mdi-minus" />
                  </ButtonGroup>
                </div>}
            </VirtualList>
          </Section>
        </Viewport>
      </div>;
  },
  args: {
    items: Countries.list
  }
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const listRef = useRef<VirtualListRef>(null);
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
      }, 2000);
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
            <VirtualList {...args} listRef={listRef} defaultHeight={152} defaultWidth={608} loading={isLoading} items={items} initialScroll={105} onLoadMore={loadMore}>
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
            </VirtualList>
          </Section>
        </Viewport>
      </div>;
  },
  args: {
    total: 500
  }
}`,...j.parameters?.docs?.source}}},M=[`List`,`LoadableList`]}))();export{O as List,j as LoadableList,M as __namedExportsOrder,D as default};