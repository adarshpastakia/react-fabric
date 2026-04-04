import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{L as i,lt as a}from"./ResizeObserver.es.js";import{H as o,O as s,d as c,it as l,ot as u,p as d,t as f}from"./iframe-B-Wcw5ev.js";import{r as p,t as m}from"./dist28.js";import{a as h,t as g}from"./src4.js";var _=t((()=>{``+new URL(`africa-mPTncsup.svg`,import.meta.url).href})),v=t((()=>{``+new URL(`asia-BIhyJEFj.svg`,import.meta.url).href})),y=t((()=>{``+new URL(`europe-Cb7l_mxG.svg`,import.meta.url).href})),b=t((()=>{``+new URL(`north-america-CBiSxVWM.svg`,import.meta.url).href})),x=t((()=>{``+new URL(`oceania-DORfwirA.svg`,import.meta.url).href})),S=t((()=>{``+new URL(`south-america-CjvLaXXD.svg`,import.meta.url).href})),C,w,T,E,D,O,k;t((()=>{m(),f(),i(),C=e(n()),g(),_(),v(),y(),b(),x(),S(),w=r(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={component:h,title:`@data/Table`,parameters:{layout:`fullscreen`,controls:{exclude:/^(children|as)/}},decorators:[e=>(0,w.jsx)(`div`,{className:`min-h-[600px]`,children:(0,w.jsx)(c,{children:(0,w.jsx)(d,{children:(0,w.jsx)(e,{})})})})]},D=[{id:`flag`,width:`3rem`,align:`center`,locked:`start`,hideable:!1,renderer(e,t){return console.log(t),(0,w.jsx)(l,{icon:`iconify-color circle-flags--${t?.iconCode}`})}},{id:`cca2`,width:`3rem`,locked:`start`,hideable:!1},{id:`name.common`,label:`Name`,locked:`start`,width:`32rem`,sortable:!0,hideable:!1,resizable:!0,filterable:!0,dataType:`string`,actions:[(0,w.jsx)(s,{label:`Sort down`}),(0,w.jsx)(s,{label:`Sort up`})]},{id:`region`,label:`Continent`,width:`12rem`,hidden:!1,resizable:!0,filterable:!0,filter:[`Asia`,`Europe`],filterOptions:[`Asia`,`Africa`,`Europe`,`North America`,`South America`,`Oceania`]},{id:`name.official`,label:`Fullname`,width:`48rem`,hidden:!0,resizable:!0,renderer(e){return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{children:e}),(0,w.jsx)(`div`,{className:`text-muted`,children:p.lorem.paragraphs(2)})]})}},{id:`capital`,label:`Capital`,width:`48rem`,hidden:!0},{id:`currency.code`,label:`Currency`,width:`8rem`,hidden:!0},{id:`phone`,label:`Phone`,width:`8rem`,hidden:!0},{id:`tld`,label:`Domain`,width:`8rem`,hidden:!0}],O={render:e=>{let[t,n]=(0,C.useState)();return(0,w.jsx)(h,{...e,data:a.list,keyProperty:`cca2`,groupProperty:`region`,groupRenderer:e=>(0,w.jsxs)(C.Fragment,{children:[e.key===`Asia`&&(0,w.jsx)(`img`,{src:``+new URL(`asia-BIhyJEFj.svg`,import.meta.url).href}),e.key===`Africa`&&(0,w.jsx)(`img`,{src:``+new URL(`africa-mPTncsup.svg`,import.meta.url).href}),e.key===`Europe`&&(0,w.jsx)(`img`,{src:``+new URL(`europe-Cb7l_mxG.svg`,import.meta.url).href}),e.key===`Oceania`&&(0,w.jsx)(`img`,{src:``+new URL(`oceania-DORfwirA.svg`,import.meta.url).href}),e.key===`North America`&&(0,w.jsx)(`img`,{src:``+new URL(`north-america-CBiSxVWM.svg`,import.meta.url).href}),e.key===`South America`&&(0,w.jsx)(`img`,{src:``+new URL(`south-america-CjvLaXXD.svg`,import.meta.url).href}),(0,w.jsx)(`span`,{className:`text-xl`,children:e.key}),(0,w.jsx)(`span`,{className:`text-sm font-medium inline-block bg-tint-100 rounded-full px-1 border`,children:e.itemCount})]}),onSort:e=>(n(e),T()(e)),onFilter:T(),sort:t,columns:D,children:e=>(0,w.jsxs)(`div`,{className:`flex flex-nowrap p-4 gap-2`,children:[(0,w.jsx)(u,{size:`2rem`,name:``,fallbackIcon:`iconify-color circle-flags--${e.cca2.toLowerCase()}`}),(0,w.jsx)(`div`,{className:`flex-1`,children:(0,w.jsx)(o,{children:e.name.official})})]})})},args:{initialScroll:18,canExpand:()=>!0}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sort, setSort] = useState<AnyObject>();
    return <Table<Country> {...args as any} data={Countries.list} keyProperty="cca2" groupProperty="region" groupRenderer={grp => <Fragment>
            {grp.key === "Asia" && <img src={asia} />}
            {grp.key === "Africa" && <img src={africa} />}
            {grp.key === "Europe" && <img src={europe} />}
            {grp.key === "Oceania" && <img src={oceania} />}
            {grp.key === "North America" && <img src={namerica} />}
            {grp.key === "South America" && <img src={samerica} />}
            <span className="text-xl">{grp.key}</span>
            <span className="text-sm font-medium inline-block bg-tint-100 rounded-full px-1 border">
              {grp.itemCount}
            </span>
          </Fragment>} onSort={o => (setSort(o), fn()(o))} onFilter={fn()} sort={sort} columns={columns} children={(data: Country) => {
      return <div className="flex flex-nowrap p-4 gap-2">
              <Avatar size="2rem" name="" fallbackIcon={\`iconify-color circle-flags--\${data.cca2.toLowerCase()}\`} />
              <div className="flex-1">
                <Title>{data.name.official}</Title>
              </div>
            </div>;
    }} />;
  },
  args: {
    initialScroll: 18,
    canExpand: () => true
  }
}`,...O.parameters?.docs?.source}}},k=[`_Table`]}))();export{O as _Table,k as __namedExportsOrder,E as default};