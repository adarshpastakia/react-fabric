import{r as e,j as t}from"./iframe-CVyMRGSP.js";import{f as n}from"./index-CaHJoDsz.js";import{B as p}from"./Button-DAqx1TyP.js";import"./index-D3XXfjI1.js";import{P as f}from"./Panel-DtlJ813n.js";import{C as l}from"./WordBubble-C-dwUiuU.js";const h={component:l,title:"@charts/CountSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},a={render:c=>{const[m,d]=e.useState([]),r=e.useCallback(()=>{d(Array.from(Array(Math.ceil(24)),(b,u)=>({id:`key-${u}`,label:n.animal.cat(),count:n.number.int({min:99,max:12489})})))},[]);return e.useEffect(()=>{r()},[]),t.jsx(f,{width:"36rem",height:"36rem",title:"Count Series chart",actions:t.jsx(p,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:r}),children:t.jsx(l,{...c,data:m})})},args:{}};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(Math.ceil(24)), (_, i) => ({
        id: \`key-\${i}\`,
        label: faker.animal.cat(),
        count: faker.number.int({
          min: 99,
          max: 12489
        })
      })));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="36rem" height="36rem" title="Count Series chart" actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <CountSeries {...args} data={data} />
      </Panel>;
  },
  args: {}
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Example"],j=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{j as C,a as E};
