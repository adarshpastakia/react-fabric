import{r as t,j as r}from"./iframe-BcXNitKG.js";import{f as a}from"./index-CaHJoDsz.js";import{B as p}from"./Button-7R_E-GE9.js";import"./index-DUA9IMpG.js";import{P as g}from"./Panel-C49a1LM8.js";import{D as m}from"./WordBubble-t_czKrTj.js";const b={component:m,title:"@charts/DataSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:c=>{const[d,u]=t.useState({}),s=t.useCallback(()=>{const n=["Jan","Feb","Mar","Apr","May","Jun"];u({categoryAxisName:"Months",valueAxisName:"Items",categories:n,data:[{id:a.string.alpha(5),label:a.animal.dog(),values:n.map(()=>a.number.int({min:100,max:500}))},{id:a.string.alpha(5),label:a.animal.dog(),values:n.map(()=>a.number.int({min:100,max:500}))},{id:a.string.alpha(5),label:a.animal.dog(),values:n.map(()=>a.number.int({min:100,max:500}))}]})},[]);return t.useEffect(()=>{s()},[]),r.jsx(g,{width:"48rem",height:"24rem",title:"Data Series chart",expandable:!0,actions:r.jsx(p,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:s}),children:r.jsx(m,{...c,...d})})},args:{}};var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        data: [{
          id: faker.string.alpha(5),
          label: faker.animal.dog(),
          values: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }, {
          id: faker.string.alpha(5),
          label: faker.animal.dog(),
          values: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }, {
          id: faker.string.alpha(5),
          label: faker.animal.dog(),
          values: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }]
      });
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="24rem" title="Data Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <DataSeries {...args} {...data} />
      </Panel>;
  },
  args: {}
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const f=["Example"],j=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{j as D,e as E};
