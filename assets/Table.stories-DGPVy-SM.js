import{j as e,r as n,aQ as u}from"./iframe-BcXNitKG.js";import{f}from"./index-CaHJoDsz.js";import{A as h}from"./Avatar-CTJ9ye12.js";import{I as x}from"./Tooltip-J_gHpl9C.js";import"./index-DUA9IMpG.js";import{T as g}from"./Title-C6-jD7DZ.js";import{a as o}from"./Menu-CIViNpVY.js";import{S as b}from"./Section-BAtoQgEv.js";import{V as j}from"./Viewport-y0mN7whU.js";import{b as p}from"./List-5a0r18Ni.js";import"./types-DXUe1Zpb.js";import"./cloneElement-Bgycha4-.js";import"./Button-7R_E-GE9.js";import"./ErrorBoundary-C8J7aorp.js";import"./createClass-B8xyeRfs.js";import"./Global-HPy1X0OU.js";import"./ButtonGroup-CZyLy_kH.js";import"./EmptyContent-CnA5ADIa.js";import"./_isEqual-JedAdon-.js";import"./Input-IeT5RECO.js";import"./InputWrapper-DVhr945a.js";import"./ColorPicker-0pYYboV3.js";import"./Google-DOYfq3v8.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./index-CqCs8NGq.js";import"./eventHandlers-JUcml5Fv.js";import"./floating-ui.react-CCZcFCqr.js";import"./useDebounce-rX8HuXnO.js";import"./Text-LNzV1gTO.js";import"./usePropToggle-Ck2VfQ2Q.js";import"./Dropdown-DUHKUE_z.js";import"./DateDisplay-CGmEnYvR.js";import"./_getByPath-ibQb353G.js";import"./Divider-DB8bkHxO.js";import"./DropdownTool-C8jg9dyY.js";import"./_dedupe-Dul_0PfE.js";import"./_debounce-BHO_GiD4.js";import"./HeadFoot-DLpVmsEq.js";const y=""+new URL("africa-mPTncsup.svg",import.meta.url).href,k=""+new URL("asia-BIhyJEFj.svg",import.meta.url).href,w=""+new URL("europe-Cb7l_mxG.svg",import.meta.url).href,S=""+new URL("north-america-CBiSxVWM.svg",import.meta.url).href,v=""+new URL("oceania-DORfwirA.svg",import.meta.url).href,A=""+new URL("south-america-CjvLaXXD.svg",import.meta.url).href,{fn:s}=__STORYBOOK_MODULE_TEST__,ue={component:p,title:"@data/Table",parameters:{layout:"fullscreen",controls:{exclude:/^(children|as)/}},decorators:[t=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(j,{children:e.jsx(b,{children:e.jsx(t,{})})})})]},N=[{id:"emoji",width:"3rem",align:"center",locked:"start",hideable:!1,renderer(t,i){return e.jsx(x,{icon:`flag ${i.iso2}`})}},{id:"iso2",width:"3rem",locked:"start",hideable:!1},{id:"name",label:"Name",locked:"start",width:"32rem",sortable:!0,hideable:!1,resizable:!0,filterable:!0,dataType:"string",actions:[e.jsx(o,{label:"Sort down"}),e.jsx(o,{label:"Sort up"})]},{id:"continent",label:"Continent",width:"12rem",hidden:!1,resizable:!0,filterable:!0,filter:["Asia","Europe"],filterOptions:["Asia","Africa","Europe","North America","South America","Oceania"]},{id:"fullname",label:"Fullname",width:"48rem",hidden:!0,resizable:!0,renderer(t){return e.jsxs("div",{children:[e.jsx("div",{children:t}),e.jsx("div",{className:"text-muted",children:f.lorem.paragraphs(2)})]})}},{id:"capital",label:"Capital",width:"48rem",hidden:!0},{id:"currency",label:"Currency",width:"8rem",hidden:!0},{id:"phone",label:"Phone",width:"8rem",hidden:!0},{id:"tld",label:"Domain",width:"8rem",hidden:!0}],a={render:t=>{const[i,d]=n.useState();return e.jsx(p,{...t,data:u.list,keyProperty:"iso2",groupProperty:"continent",groupRenderer:r=>e.jsxs(n.Fragment,{children:[r.key==="Asia"&&e.jsx("img",{src:k}),r.key==="Africa"&&e.jsx("img",{src:y}),r.key==="Europe"&&e.jsx("img",{src:w}),r.key==="Oceania"&&e.jsx("img",{src:v}),r.key==="North America"&&e.jsx("img",{src:S}),r.key==="South America"&&e.jsx("img",{src:A}),e.jsx("span",{className:"text-xl",children:r.key}),e.jsx("span",{className:"text-sm font-medium inline-block bg-tint-100 rounded-full px-1 border",children:r.itemCount})]}),onSort:r=>(d(r),s()(r)),onFilter:s(),sort:i,columns:N})},args:{initialScroll:18,canExpand:()=>!0,children:t=>e.jsxs("div",{className:"flex flex-nowrap p-4 gap-2",children:[e.jsx(h,{size:"2rem",name:"",fallbackIcon:`flag ${t.iso2}`}),e.jsx("div",{className:"flex-1",children:e.jsx(g,{children:t.fullname})})]})}};var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [sort, setSort] = useState<AnyObject>();
    return <Table {...args as any} data={Countries.list} keyProperty="iso2" groupProperty="continent" groupRenderer={grp => <Fragment>
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
          </Fragment>} onSort={o => (setSort(o), fn()(o))} onFilter={fn()} sort={sort} columns={columns} />;
  },
  args: {
    initialScroll: 18,
    canExpand: () => true,
    children: data => {
      return <div className="flex flex-nowrap p-4 gap-2">
          <Avatar size="2rem" name="" fallbackIcon={\`flag \${data.iso2}\`} />
          <div className="flex-1">
            <Title>{data.fullname}</Title>
          </div>
        </div>;
    }
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const fe=["_Table"];export{a as _Table,fe as __namedExportsOrder,ue as default};
