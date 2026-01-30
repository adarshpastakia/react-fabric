import{j as e,r as o,aO as u}from"./iframe-DpfJK_wQ.js";import{f}from"./index4.js";import{A as h}from"./Avatar2.js";import{I as x}from"./Tooltip.js";import"./index.js";import{T as g}from"./Title.js";import{a as n}from"./Menu.js";import{S as b}from"./Section.js";import{V as y}from"./Viewport.js";import{b as p}from"./List.js";import"./types.js";import"./cloneElement.js";import"./nodeCheck.js";import"./Button.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./memoize-one.esm.js";import"./Copy.js";import"./Text.js";import"./usePropToggle.js";import"./useDebounce.js";import"./Dropdown.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./DateDisplay.js";import"./getByPath.js";import"./Divider.js";import"./DropdownTool.js";import"./ColorPicker.js";import"./index2.js";import"./Checkbox.js";import"./ErrorIcon.js";import"./Input.js";import"./InputWrapper.js";import"./eventHandlers.js";import"./dedupe.js";import"./debounce.js";import"./HeadFoot.js";const j=""+new URL("africa-mPTncsup.svg",import.meta.url).href,k=""+new URL("asia-BIhyJEFj.svg",import.meta.url).href,w=""+new URL("europe-Cb7l_mxG.svg",import.meta.url).href,S=""+new URL("north-america-CBiSxVWM.svg",import.meta.url).href,v=""+new URL("oceania-DORfwirA.svg",import.meta.url).href,A=""+new URL("south-america-CjvLaXXD.svg",import.meta.url).href,{fn:s}=__STORYBOOK_MODULE_TEST__,ge={component:p,title:"@data/Table",parameters:{layout:"fullscreen",controls:{exclude:/^(children|as)/}},decorators:[i=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(y,{children:e.jsx(b,{children:e.jsx(i,{})})})})]},C=[{id:"flag",width:"3rem",align:"center",locked:"start",hideable:!1,renderer(i,t){return console.log(t),e.jsx(x,{icon:`iconify-color circle-flags--${t==null?void 0:t.iconCode}`})}},{id:"cca2",width:"3rem",locked:"start",hideable:!1},{id:"name.common",label:"Name",locked:"start",width:"32rem",sortable:!0,hideable:!1,resizable:!0,filterable:!0,dataType:"string",actions:[e.jsx(n,{label:"Sort down"}),e.jsx(n,{label:"Sort up"})]},{id:"region",label:"Continent",width:"12rem",hidden:!1,resizable:!0,filterable:!0,filter:["Asia","Europe"],filterOptions:["Asia","Africa","Europe","North America","South America","Oceania"]},{id:"name.official",label:"Fullname",width:"48rem",hidden:!0,resizable:!0,renderer(i){return e.jsxs("div",{children:[e.jsx("div",{children:i}),e.jsx("div",{className:"text-muted",children:f.lorem.paragraphs(2)})]})}},{id:"capital",label:"Capital",width:"48rem",hidden:!0},{id:"currency.code",label:"Currency",width:"8rem",hidden:!0},{id:"phone",label:"Phone",width:"8rem",hidden:!0},{id:"tld",label:"Domain",width:"8rem",hidden:!0}],a={render:i=>{const[t,d]=o.useState();return e.jsx(p,{...i,data:u.list,keyProperty:"cca2",groupProperty:"region",groupRenderer:r=>e.jsxs(o.Fragment,{children:[r.key==="Asia"&&e.jsx("img",{src:k}),r.key==="Africa"&&e.jsx("img",{src:j}),r.key==="Europe"&&e.jsx("img",{src:w}),r.key==="Oceania"&&e.jsx("img",{src:v}),r.key==="North America"&&e.jsx("img",{src:S}),r.key==="South America"&&e.jsx("img",{src:A}),e.jsx("span",{className:"text-xl",children:r.key}),e.jsx("span",{className:"text-sm font-medium inline-block bg-tint-100 rounded-full px-1 border",children:r.itemCount})]}),onSort:r=>(d(r),s()(r)),onFilter:s(),sort:t,columns:C,children:r=>e.jsxs("div",{className:"flex flex-nowrap p-4 gap-2",children:[e.jsx(h,{size:"2rem",name:"",fallbackIcon:`iconify-color circle-flags--${r.cca2.toLowerCase()}`}),e.jsx("div",{className:"flex-1",children:e.jsx(g,{children:r.name.official})})]})})},args:{initialScroll:18,canExpand:()=>!0}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const be=["_Table"];export{a as _Table,be as __namedExportsOrder,ge as default};
