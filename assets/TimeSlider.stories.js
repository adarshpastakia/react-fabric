import{r as a,j as t}from"./iframe-DC4r-n7i.js";import{f}from"./index4.js";import{B as D}from"./Button.js";import"./index2.js";import{P as h}from"./Panel.js";import{a as m}from"./WordBubble.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,g={component:m,title:"@charts/TimeSlider",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:c=>{const[l,d]=a.useState([]),r=a.useCallback(()=>{const u=Array.from(Array(1095),(n,p)=>new Date(2022,0,p+1));d(u.map(n=>[n,f.number.int({min:100,max:500})]))},[]);return a.useEffect(()=>{r()},[]),t.jsx(h,{width:"48rem",height:"8rem",title:"Time Series chart",expandable:!0,actions:t.jsx(D,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:r}),children:t.jsx(m,{...c,data:l,range:{start:new Date(2022,9,1),end:new Date(2023,9,1)}})})},args:{onBrush:x()}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      const categories = Array.from(Array(365 * 3), (_, i) => new Date(2022, 0, i + 1));
      setData(categories.map(c => [c, faker.number.int({
        min: 100,
        max: 500
      })]));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="8rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <TimeSlider {...args} data={data} range={{
        start: new Date(2022, 9, 1),
        end: new Date(2023, 9, 1)
      }} />
      </Panel>;
  },
  args: {
    onBrush: fn()
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Example"],y=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{e as E,y as T};
