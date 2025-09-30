import{r as a,j as t}from"./iframe-Ctw5u0Cj.js";import{f as n}from"./index4.js";import{B as f}from"./Button.js";import"./index2.js";import{P as p}from"./Panel.js";import{C as c}from"./WordBubble.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,C={component:c,title:"@charts/CountSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:l=>{const[m,d]=a.useState([]),r=a.useCallback(()=>{d(Array.from(Array(Math.ceil(24)),(_,u)=>({id:`key-${u}`,name:n.animal.cat(),count:n.number.int({min:99,max:12489})})))},[]);return a.useEffect(()=>{r()},[]),t.jsx(p,{width:"36rem",height:"36rem",title:"Count Series chart",actions:t.jsx(f,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:r}),children:t.jsx(c,{...l,series:m})})},args:{onClick:h()}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(Math.ceil(24)), (_, i) => ({
        id: \`key-\${i}\`,
        name: faker.animal.cat(),
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
        <CountSeries {...args} series={data} />
      </Panel>;
  },
  args: {
    onClick: fn()
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Example"],g=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{g as C,e as E};
