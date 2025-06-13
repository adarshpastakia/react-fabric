import{r as t,j as i}from"./iframe-CVyMRGSP.js";import{f as a}from"./index-CaHJoDsz.js";import{B as f}from"./Button-DAqx1TyP.js";import"./index-D3XXfjI1.js";import{P as g}from"./Panel-DtlJ813n.js";import{T as c}from"./WordBubble-C-dwUiuU.js";const x={component:c,title:"@charts/TimeSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},r={render:d=>{const[u,p]=t.useState({}),s=t.useCallback(()=>{const n=Array.from(Array(24),(e,b)=>new Date(2021,b,1));p({categoryAxisName:"Months",valueAxisName:"Items",categories:n,data:[{id:a.string.alphanumeric(5),label:a.animal.bear(),values:n.map(e=>[e,a.number.int({min:100,max:500})])},{id:a.string.alphanumeric(5),label:a.animal.cat(),values:n.map(e=>[e,a.number.int({min:100,max:500})])},{id:a.string.alphanumeric(5),label:a.animal.bird(),values:n.map(e=>[e,a.number.int({min:100,max:500})])}]})},[]);return t.useEffect(()=>{s()},[]),i.jsx(g,{width:"48rem",height:"24rem",title:"Time Series chart",expandable:!0,actions:i.jsx(f,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:s}),children:i.jsx(c,{...d,...u})})},args:{}};var m,l,o;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  args: {}
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const h=["Example"],T=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{r as E,T};
