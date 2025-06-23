import{r as a,j as r}from"./iframe-wCO-hNtP.js";import{f as t}from"./index4.js";import{B as b}from"./Button.js";import"./index2.js";import{P as p}from"./Panel.js";import{W as i}from"./WordBubble.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,x={component:i,title:"@charts/WordBubble",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:m=>{const[c,d]=a.useState([]),n=a.useCallback(()=>{d(Array.from(Array(t.number.int({min:12,max:48})),(h,u)=>({id:u,label:t.commerce.product(),count:t.number.int({min:99,max:499})})))},[]);return a.useEffect(()=>{n()},[]),r.jsx(p,{width:"36rem",height:"36rem",title:"Word Bubble chart",expandable:!0,actions:r.jsx(b,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:n}),children:r.jsx(i,{...m,series:c})})},args:{onClick:f()}};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(faker.number.int({
        min: 12,
        max: 48
      })), (_, key) => ({
        id: key,
        label: faker.commerce.product(),
        count: faker.number.int({
          min: 99,
          max: 499
        })
      })));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="36rem" height="36rem" title="Word Bubble chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <WordBubble {...args} series={data} />
      </Panel>;
  },
  args: {
    onClick: fn()
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const _=["Example"],j=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:_,default:x},Symbol.toStringTag,{value:"Module"}));export{e as E,j as W};
