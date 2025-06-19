import{r as e,j as t}from"./iframe-DcfUrZ2L.js";import{f as n}from"./index-CaHJoDsz.js";import{B as f}from"./Button-7pM1lgGA.js";import"./index-Bl9sirez.js";import{P as p}from"./Panel-Gs9yXmgf.js";import{C as l}from"./WordBubble-DtB35QK2.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,C={component:l,title:"@charts/CountSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},a={render:c=>{const[m,d]=e.useState([]),r=e.useCallback(()=>{d(Array.from(Array(Math.ceil(24)),(_,u)=>({id:`key-${u}`,label:n.animal.cat(),count:n.number.int({min:99,max:12489})})))},[]);return e.useEffect(()=>{r()},[]),t.jsx(p,{width:"36rem",height:"36rem",title:"Count Series chart",actions:t.jsx(f,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:r}),children:t.jsx(l,{...c,data:m})})},args:{onClick:h()}};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  args: {
    onClick: fn()
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Example"],g=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{g as C,a as E};
