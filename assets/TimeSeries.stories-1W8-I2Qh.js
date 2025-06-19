import{r as t,j as i}from"./iframe-DL5PLccW.js";import{f as a}from"./index-CaHJoDsz.js";import{B as g}from"./Button-B4MR9BdT.js";import"./index-DPKHNOa8.js";import{P as h}from"./Panel-xJsBWFXK.js";import{T as u}from"./WordBubble-CXwoSnOC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={component:u,title:"@charts/TimeSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},n={render:d=>{const[p,f]=t.useState({}),s=t.useCallback(()=>{const r=Array.from(Array(24),(e,b)=>new Date(2021,b,1));f({categoryAxisName:"Months",valueAxisName:"Items",categories:r,data:[{id:a.string.alphanumeric(5),label:a.animal.bear(),values:r.map(e=>[e,a.number.int({min:100,max:500})])},{id:a.string.alphanumeric(5),label:a.animal.cat(),values:r.map(e=>[e,a.number.int({min:100,max:500})])},{id:a.string.alphanumeric(5),label:a.animal.bird(),values:r.map(e=>[e,a.number.int({min:100,max:500})])}]})},[]);return t.useEffect(()=>{s()},[]),i.jsx(h,{width:"48rem",height:"24rem",title:"Time Series chart",expandable:!0,actions:i.jsx(g,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:s}),children:i.jsx(u,{...d,...p})})},args:{onBrush:m(),onClick:m()}};var o,l,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = Array.from(Array(24), (_, i) => new Date(2021, i, 1));
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        data: [{
          id: faker.string.alphanumeric(5),
          label: faker.animal.bear(),
          values: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }, {
          id: faker.string.alphanumeric(5),
          label: faker.animal.cat(),
          values: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }, {
          id: faker.string.alphanumeric(5),
          label: faker.animal.bird(),
          values: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }]
      });
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="24rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <TimeSeries {...args} {...data} />
      </Panel>;
  },
  args: {
    onBrush: fn(),
    onClick: fn()
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const k=["Example"],E=Object.freeze(Object.defineProperty({__proto__:null,Example:n,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{n as E,E as T};
