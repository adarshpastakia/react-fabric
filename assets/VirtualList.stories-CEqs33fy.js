import{aQ as I,r as c,j as e,m as V}from"./iframe-DL5PLccW.js";import{f as A}from"./index-CaHJoDsz.js";import{B as L}from"./ButtonGroup-CcmBan6Y.js";import{B as i,S as M}from"./Button-B4MR9BdT.js";import{A as E}from"./Avatar-2qoU-_h2.js";import"./index-DPKHNOa8.js";import{C as y}from"./Card-C61MeKDX.js";import{T as G}from"./Title-B0hOC-55.js";import{H as j}from"./HeadFoot-BOKBTLfn.js";import{R as d,C as r}from"./Responsive-Cwq5K4EN.js";import{S as B}from"./Section-m1pcBAPK.js";import{V as S}from"./Viewport-v3RQO1q4.js";import{T as o}from"./Text-CwzsJ7bo.js";import{a as b}from"./List-CyyUMcj7.js";import"./cloneElement-_d6a3Gjs.js";import"./Tooltip-BPKa3gaw.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./createClass-DjEsl4fx.js";import"./Global-Dhvrkiym.js";import"./Menu-CcUoW62j.js";import"./types-DXUe1Zpb.js";import"./usePropToggle-D4M8sFrj.js";import"./EmptyContent-1ZSnSbmB.js";import"./_isEqual-Q02tGGHK.js";import"./Input-C2J8r03n.js";import"./InputWrapper-M6su9Q9e.js";import"./ColorPicker-Cc5ydKIF.js";import"./Google-B5-g4RDV.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./index-HqHJXvHv.js";import"./eventHandlers-CcecLcKh.js";import"./floating-ui.react-CT9AAP4P.js";import"./useDebounce-DUBqCfh2.js";import"./Dropdown-BkPoAgTO.js";import"./DateDisplay-DV58skfQ.js";import"./_getByPath-TSIqsuP9.js";import"./Divider-DeNf5KPC.js";import"./DropdownTool-DuZpCV3J.js";import"./_dedupe-SnwC8TxO.js";import"./_debounce-BHO_GiD4.js";const Le={component:b,title:"@data/Virtual/List",parameters:{layout:"fullscreen",controls:{exclude:"items"}}},p={render:h=>{const s=c.useRef(null);return e.jsx("div",{className:"min-h-[600px]",children:e.jsx(S,{children:e.jsxs(B,{children:[e.jsxs(j,{flex:!0,className:"gap-2 p-2 bg-base",children:[e.jsx(i,{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToItem(8)},children:"ScrollTo #9"}),e.jsx(i,{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToItem(12)},children:"ScrollTo #13"}),e.jsx(i,{onClick:()=>{var t;return(t=s.current)==null?void 0:t.hilight(1)},children:"Hilight #2"}),e.jsx(i,{onClick:()=>{var t;return(t=s.current)==null?void 0:t.hilight(2)},children:"Hilight #3"})]}),e.jsx(b,{...h,listRef:s,defaultHeight:152,defaultWidth:608,children:({item:t,index:u,isLast:m})=>e.jsxs("div",{className:"flex flex-nowrap gap-4 p-2",children:[e.jsx("div",{className:V("flex-content relative",!m&&"before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4"),children:e.jsx(E,{rounded:!0,name:t.iso3,fallbackIcon:`flag ${t.iso3}`,size:"3rem"})}),e.jsxs(y,{bodyClassName:"p-2 grid w-[480px] flex-1",children:[e.jsxs(d,{className:"text-lg font-semibold",align:"center",children:[e.jsx(r,{flex:"fill",children:e.jsxs(o,{className:"flex-1 px-2",children:[u," ",t.name]})}),e.jsx(r,{children:e.jsxs(o,{children:[" ",t.emoji]})})]}),e.jsxs(d,{justify:"between",align:"center",children:[e.jsx(r,{children:e.jsx(o,{children:t.fullname})}),e.jsx(r,{children:e.jsx(o,{className:"text-sm text-muted",children:t.continent})})]}),e.jsxs(d,{justify:"between",align:"center",children:[e.jsx(r,{children:e.jsx(o,{className:"text-sm text-muted",children:t.capital})}),e.jsx(r,{children:e.jsxs(o,{className:"text-sm text-muted",children:[t.iso2,"/",t.iso3]})})]}),e.jsxs(d,{justify:"between",align:"center",children:[e.jsx(r,{children:e.jsx(o,{className:"text-sm text-muted",children:t.phone})}),e.jsx(r,{children:e.jsx(o,{className:"text-sm text-muted",children:t.currency})})]})]}),e.jsxs(L,{vertical:!0,variant:"link",className:"self-start",children:[e.jsx(i,{"aria-label":"plus",variant:"link",icon:"mdi mdi-plus"}),e.jsx(i,{"aria-label":"minus",variant:"link",icon:"mdi mdi-minus"})]})]})})]})})})},args:{items:I.list}},l=20,z=A.lorem.paragraph(),f={render:h=>{const s=c.useRef(null),[t,u]=c.useState(!1),[m,g]=c.useState([]),H=c.useCallback(n=>{u(!0),setTimeout(()=>{if(n===void 0&&g([...m,...new Array(l).fill(!0)]),n!==void 0){const a=Math.floor(n/l),w=Math.ceil(n/l),x=[...m];x.splice(a*l,l,...new Array(l).fill(!0)),x[w*l]===null&&x.splice(w*l,l,...new Array(l).fill(!0)),g(x)}u(!1)},2e3)},[m]);return c.useEffect(()=>{const n=new Array(150).fill(null);for(var a=100;a<150;a++)n[a]=!0;g(n)},[]),e.jsx("div",{className:"min-h-[600px]",children:e.jsx(S,{children:e.jsxs(B,{children:[e.jsxs(j,{flex:!0,className:"gap-2 p-2 bg-base",children:[e.jsx(i,{onClick:()=>{var n;return(n=s.current)==null?void 0:n.scrollToItem(8)},children:"ScrollTo #9"}),e.jsx(i,{onClick:()=>{var n;return(n=s.current)==null?void 0:n.scrollToItem(12)},children:"ScrollTo #13"}),e.jsx(i,{onClick:()=>{var n;return(n=s.current)==null?void 0:n.hilight(1)},children:"Hilight #2"}),e.jsx(i,{onClick:()=>{var n;return(n=s.current)==null?void 0:n.hilight(2)},children:"Hilight #3"})]}),e.jsx(b,{...h,listRef:s,defaultHeight:152,defaultWidth:608,loading:t,items:m,initialScroll:105,onLoadMore:H,children:({item:n,index:a})=>e.jsxs("div",{className:"w-[620px] flex flex-nowrap gap-1 py-2 px-4",children:[n&&e.jsxs(c.Fragment,{children:[e.jsxs(y,{bodyClassName:"p-2 flex-1",children:[e.jsx(j,{children:e.jsxs(G,{children:["List item ",a+1]})}),e.jsxs(d,{children:[e.jsx(r,{flex:"auto",children:e.jsx("img",{loading:"lazy",className:"border-4 bg-bw-500/50 border-bw-500 object-contain h-24 w-32",src:`https://picsum.photos/id/${a}/192/108`})}),e.jsx(r,{flex:"fill",children:e.jsx(o,{clamp:3,children:z})})]})]}),e.jsxs(L,{vertical:!0,variant:"link",className:"self-start",children:[e.jsx(i,{"aria-label":"plus",variant:"link",icon:"mdi mdi-plus"}),e.jsx(i,{"aria-label":"minus",variant:"link",icon:"mdi mdi-minus"})]})]}),!n&&e.jsx("div",{className:"flex-1",children:e.jsx(M,{})})]})})]})})})},args:{total:500}};var C,v,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const listRef = useRef<VirtualListRef>(null);
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
            <VirtualList {...args as any} listRef={listRef} defaultHeight={152} defaultWidth={608}>
              {({
              item,
              index,
              isLast
            }: any) => <div className="flex flex-nowrap gap-4 p-2">
                  <div className={classNames("flex-content relative", !isLast && "before:absolute before:w-px before:bg-tint-100 before:left-1/2 before:top-4 before:-bottom-4")}>
                    <Avatar rounded name={item.iso3} fallbackIcon={\`flag \${item.iso3}\`} size="3rem" />
                  </div>
                  <Card bodyClassName="p-2 grid w-[480px] flex-1">
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
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,R,k;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <VirtualList {...args} listRef={listRef} defaultHeight={152} defaultWidth={608} loading={isLoading} items={items} initialScroll={105} onLoadMore={loadMore}>
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
            </VirtualList>
          </Section>
        </Viewport>
      </div>;
  },
  args: {
    total: 500
  }
}`,...(k=(R=f.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const ye=["List","LoadableList"];export{p as List,f as LoadableList,ye as __namedExportsOrder,Le as default};
