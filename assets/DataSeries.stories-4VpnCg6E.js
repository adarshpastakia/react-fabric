import{r as t,j as r}from"./iframe-DL5PLccW.js";import{f as a}from"./index-CaHJoDsz.js";import{B as p}from"./Button-B4MR9BdT.js";import"./index-DPKHNOa8.js";import{P as g}from"./Panel-xJsBWFXK.js";import{D as m}from"./WordBubble-CXwoSnOC.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,b={component:m,title:"@charts/DataSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:c=>{const[d,u]=t.useState({}),s=t.useCallback(()=>{const n=["Jan","Feb","Mar","Apr","May","Jun"];u({categoryAxisName:"Months",valueAxisName:"Items",categories:n,data:[{id:a.string.alpha(5),label:a.animal.dog(),values:n.map(()=>a.number.int({min:100,max:500}))},{id:a.string.alpha(5),label:a.animal.dog(),values:n.map(()=>a.number.int({min:100,max:500}))},{id:a.string.alpha(5),label:a.animal.dog(),values:n.map(()=>a.number.int({min:100,max:500}))}]})},[]);return t.useEffect(()=>{s()},[]),r.jsx(g,{width:"48rem",height:"24rem",title:"Data Series chart",expandable:!0,actions:r.jsx(p,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:s}),children:r.jsx(m,{...c,...d})})},args:{onClick:f()}};var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  args: {
    onClick: fn()
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const x=["Example"],E=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{E as D,e as E};
