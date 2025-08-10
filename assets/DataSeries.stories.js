import{r as t,j as r}from"./iframe-BTaJxP5y.js";import{f as a}from"./index4.js";import{B as u}from"./Button.js";import"./index2.js";import{P as g}from"./Panel.js";import{D as l}from"./WordBubble.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,x={component:l,title:"@charts/DataSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:c=>{const[d,p]=t.useState({}),i=t.useCallback(()=>{const n=["Jan","Feb","Mar","Apr","May","Jun"];p({categoryAxisName:"Months",valueAxisName:"Items",categories:n,series:[{id:a.string.alpha(5),name:a.animal.dog(),data:n.map(()=>a.number.int({min:100,max:500}))},{id:a.string.alpha(5),name:a.animal.dog(),data:n.map(()=>a.number.int({min:100,max:500}))},{id:a.string.alpha(5),name:a.animal.dog(),data:n.map(()=>a.number.int({min:100,max:500}))}]})},[]);return t.useEffect(()=>{i()},[]),r.jsx(g,{width:"48rem",height:"24rem",title:"Data Series chart",expandable:!0,actions:r.jsx(u,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:i}),children:r.jsx(l,{...c,...d})})},args:{onClick:f()}};var s,o,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        series: [{
          id: faker.string.alpha(5),
          name: faker.animal.dog(),
          data: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }, {
          id: faker.string.alpha(5),
          name: faker.animal.dog(),
          data: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }, {
          id: faker.string.alpha(5),
          name: faker.animal.dog(),
          data: categories.map(() => faker.number.int({
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
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const h=["Example"],j=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{j as D,e as E};
