import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{r as n}from"./EmptyContent.js";import{At as r,Et as i,K as a,Lt as o,Mt as s,Pt as c,Yt as l,gt as u,it as d,mt as f,nt as p,t as m}from"./src2.js";import{t as h}from"./jsx-runtime.js";import{n as g,t as _}from"./chunk-NAVWDHVN.js";import{n as v,t as y}from"./src5.js";import{i as b,t as x}from"./src6.js";import{t as S}from"./cn.js";var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{m(),y(),x(),g(),C=t(),w=h(),T={component:v,title:`@data/Virtual/List`,parameters:{layout:`fullscreen`,controls:{exclude:`items`}}},E={render:e=>{let t=(0,C.useRef)(null);return(0,w.jsx)(`div`,{className:`min-h-150`,children:(0,w.jsx)(i,{children:(0,w.jsxs)(c,{children:[(0,w.jsxs)(o,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,w.jsx)(n,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,w.jsx)(n,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,w.jsx)(n,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,w.jsx)(n,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,w.jsx)(v,{...e,listRef:t,defaultHeight:152,defaultWidth:608,children:({item:e,index:t,isLast:i})=>(0,w.jsxs)(`div`,{className:`flex flex-nowrap gap-4 p-2`,children:[(0,w.jsx)(`div`,{className:S(`flex-content relative`,!i&&`before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4`),children:(0,w.jsx)(p,{rounded:!0,name:e.cca3,fallbackIcon:`iconify-color circle-flags--${e.iconCode}`,size:`3rem`})}),(0,w.jsxs)(a,{classNames:{body:`p-2 grid w-120 flex-1`},children:[(0,w.jsxs)(s,{className:`text-lg font-semibold`,align:`center`,children:[(0,w.jsx)(r,{flex:`fill`,children:(0,w.jsxs)(u,{className:`flex-1 px-2`,children:[t,` `,e.name.common]})}),(0,w.jsx)(r,{children:(0,w.jsxs)(u,{children:[`\xA0`,e.flag]})})]}),(0,w.jsxs)(s,{justify:`between`,align:`center`,children:[(0,w.jsx)(r,{children:(0,w.jsx)(u,{children:e.name.official})}),(0,w.jsx)(r,{children:(0,w.jsx)(u,{className:`text-sm text-muted`,children:e.region})})]}),(0,w.jsxs)(s,{justify:`between`,align:`center`,children:[(0,w.jsx)(r,{children:(0,w.jsx)(u,{className:`text-sm text-muted`,children:e.capital})}),(0,w.jsx)(r,{children:(0,w.jsxs)(u,{className:`text-sm text-muted`,children:[e.cca2,`/`,e.cca3]})})]}),(0,w.jsxs)(s,{justify:`between`,align:`center`,children:[(0,w.jsx)(r,{children:(0,w.jsx)(u,{className:`text-sm text-muted`,children:e.phone})}),(0,w.jsx)(r,{children:(0,w.jsx)(u,{className:`text-sm text-muted`,children:e.currency.name})})]})]}),(0,w.jsxs)(f,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,w.jsx)(n,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,w.jsx)(n,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]})})]})})})},args:{items:b.list}},D=20,O=_.lorem.paragraph(),k={render:e=>{let t=(0,C.useRef)(null),[p,m]=(0,C.useState)(!1),[h,g]=(0,C.useState)([]),_=(0,C.useCallback)(e=>{m(!0),setTimeout(()=>{if(e===void 0&&g([...h,...Array(D).fill(!0)]),e!==void 0){let t=Math.floor(e/D),n=Math.ceil(e/D),r=[...h];r.splice(t*D,D,...Array(D).fill(!0)),r[n*D]===null&&r.splice(n*D,D,...Array(D).fill(!0)),g(r)}m(!1)},2e3)},[h]);return(0,C.useEffect)(()=>{let e=Array(150).fill(null);for(var t=100;t<150;t++)e[t]=!0;g(e)},[]),(0,w.jsx)(`div`,{className:`min-h-150`,children:(0,w.jsx)(i,{children:(0,w.jsxs)(c,{children:[(0,w.jsxs)(o,{flex:!0,className:`gap-2 p-2 bg-default`,children:[(0,w.jsx)(n,{onClick:()=>t.current?.scrollToItem(8),children:`ScrollTo #9`}),(0,w.jsx)(n,{onClick:()=>t.current?.scrollToItem(12),children:`ScrollTo #13`}),(0,w.jsx)(n,{onClick:()=>t.current?.hilight(1),children:`Hilight #2`}),(0,w.jsx)(n,{onClick:()=>t.current?.hilight(2),children:`Hilight #3`})]}),(0,w.jsx)(v,{...e,listRef:t,defaultHeight:152,defaultWidth:608,loading:p,items:h,initialScroll:105,onLoadMore:_,children:({item:e,index:t})=>(0,w.jsxs)(`div`,{className:`w-155 flex flex-nowrap gap-1 p-1`,children:[e&&(0,w.jsxs)(C.Fragment,{children:[(0,w.jsxs)(a,{classNames:{body:`p-2 flex-1`},children:[(0,w.jsx)(o,{children:(0,w.jsxs)(l,{children:[`List item `,t+1]})}),(0,w.jsxs)(s,{children:[(0,w.jsx)(r,{flex:`content`,children:(0,w.jsx)(`img`,{loading:`lazy`,className:`border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32`,src:`https://picsum.photos/id/${t}/192/108`})}),(0,w.jsx)(r,{flex:`fill`,children:(0,w.jsx)(u,{clamp:3,children:O})})]})]}),(0,w.jsxs)(f,{vertical:!0,variant:`link`,className:`self-start`,children:[(0,w.jsx)(n,{"aria-label":`plus`,variant:`link`,icon:`mdi mdi-plus`}),(0,w.jsx)(n,{"aria-label":`minus`,variant:`link`,icon:`mdi mdi-minus`})]})]}),!e&&(0,w.jsx)(`div`,{className:`flex-1`,children:(0,w.jsx)(d,{})})]})})]})})})},args:{total:500}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const listRef = useRef<VirtualListRef>(null);
    return <div className="min-h-150">
        <Viewport>
          <Layout>
            <Header flex className="gap-2 p-2 bg-default">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>ScrollTo #9</Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>ScrollTo #13</Button>
              <Button onClick={() => listRef.current?.hilight(1)}>Hilight #2</Button>
              <Button onClick={() => listRef.current?.hilight(2)}>Hilight #3</Button>
            </Header>
            <VirtualList<Country> {...args as any} listRef={listRef} defaultHeight={152} defaultWidth={608}>
              {({
              item,
              index,
              isLast
            }) => <div className="flex flex-nowrap gap-4 p-2">
                  <div className={cn("flex-content relative", !isLast && "before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4")}>
                    <Avatar rounded name={item.cca3} fallbackIcon={\`iconify-color circle-flags--\${item.iconCode}\`} size="3rem" />
                  </div>
                  <Card classNames={{
                body: "p-2 grid w-120 flex-1"
              }}>
                    <Row className="text-lg font-semibold" align="center">
                      <Col flex="fill">
                        <Text className="flex-1 px-2">
                          {index} {item.name.common}
                        </Text>
                      </Col>
                      <Col>
                        <Text>&nbsp;{item.flag}</Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text>{item.name.official}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">{item.region}</Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text className="text-sm text-muted">{item.capital}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">
                          {item.cca2}/{item.cca3}
                        </Text>
                      </Col>
                    </Row>
                    <Row justify="between" align="center">
                      <Col>
                        <Text className="text-sm text-muted">{item.phone}</Text>
                      </Col>
                      <Col>
                        <Text className="text-sm text-muted">{item.currency.name}</Text>
                      </Col>
                    </Row>
                  </Card>
                  <ButtonGroup vertical variant="link" className="self-start">
                    <Button aria-label="plus" variant="link" icon="mdi mdi-plus" />
                    <Button aria-label="minus" variant="link" icon="mdi mdi-minus" />
                  </ButtonGroup>
                </div>}
            </VirtualList>
          </Layout>
        </Viewport>
      </div>;
  },
  args: {
    items: Countries.list
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
          <Layout>
            <Header flex className="gap-2 p-2 bg-default">
              <Button onClick={() => listRef.current?.scrollToItem(8)}>ScrollTo #9</Button>
              <Button onClick={() => listRef.current?.scrollToItem(12)}>ScrollTo #13</Button>
              <Button onClick={() => listRef.current?.hilight(1)}>Hilight #2</Button>
              <Button onClick={() => listRef.current?.hilight(2)}>Hilight #3</Button>
            </Header>
            <VirtualList {...args} listRef={listRef} defaultHeight={152} defaultWidth={608} loading={isLoading} items={items} initialScroll={105} onLoadMore={loadMore}>
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
                          <Col flex="content">
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
          </Layout>
        </Viewport>
      </div>;
  },
  args: {
    total: 500
  }
}`,...k.parameters?.docs?.source}}},A=[`List`,`LoadableList`]})))()}j();export{E as List,k as LoadableList,A as __namedExportsOrder,T as default};