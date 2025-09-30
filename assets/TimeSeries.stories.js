import{r as t,j as i}from"./iframe-Ctw5u0Cj.js";import{f as a}from"./index4.js";import{B as h}from"./Button.js";import"./index2.js";import{P as x}from"./Panel.js";import{T as d}from"./WordBubble.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,b={component:d,title:"@charts/TimeSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},n={render:u=>{const[p,f]=t.useState({}),m=t.useCallback(()=>{const r=Array.from(Array(24),(e,g)=>new Date(2021,g,1));f({categoryAxisName:"Months",valueAxisName:"Items",categories:r,series:[{id:a.string.alphanumeric(5),name:a.animal.bear(),data:r.map(e=>[e,a.number.int({min:100,max:500})])},{id:a.string.alphanumeric(5),name:a.animal.cat(),data:r.map(e=>[e,a.number.int({min:100,max:500})])},{id:a.string.alphanumeric(5),name:a.animal.bird(),data:r.map(e=>[e,a.number.int({min:100,max:500})])}]})},[]);return t.useEffect(()=>{m()},[]),i.jsx(x,{width:"48rem",height:"24rem",title:"Time Series chart",expandable:!0,actions:i.jsx(h,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:m}),children:i.jsx(d,{...u,...p})})},args:{onBrush:s(),onClick:s()}};var o,c,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = Array.from(Array(24), (_, i) => new Date(2021, i, 1));
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        series: [{
          id: faker.string.alphanumeric(5),
          name: faker.animal.bear(),
          data: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }, {
          id: faker.string.alphanumeric(5),
          name: faker.animal.cat(),
          data: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }, {
          id: faker.string.alphanumeric(5),
          name: faker.animal.bird(),
          data: categories.map(c => [c, faker.number.int({
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
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Example"],A=Object.freeze(Object.defineProperty({__proto__:null,Example:n,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{n as E,A as T};
