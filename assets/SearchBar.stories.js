const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./esm5.js","./rolldown-runtime.js","./react.js","./editor.api.js","./preload-helper.js","./editor-B8GMDV7_.css","./dist.js","./react-dom.js","./useHotkeySequence.js","./esm.js","./index.esm.js","./chroma-js.js","./jsx-runtime.js","./floating-ui.dom.js","./index2.esm.js","./esm3.js","./useTranslation.js","./shim.js","./iframe.js","./components.js","./chunk-DRQKCCAG.js","./chunk-W22LQPXL.js","./theming.js","./chunk-242VQQM5.js","./blocks.js","./chunk-QQBDHPVZ.js","./react2.js","./chunk-UAWMPV5J.js","./EmptyContent.js","./src2.js","./iframe-BRZu4inh.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./preload-helper.js";import{t as r}from"./react.js";import{r as i}from"./EmptyContent.js";import{n as a,t as o}from"./useTranslation.js";import{T as s,v as c}from"./dist.js";import{N as l,P as u,j as d}from"./useHotkeySequence.js";import{_ as f,b as p,g as m,m as h,r as g,t as _,y as v}from"./esm.js";import{a as y,o as ee,s as te,t as ne}from"./index.esm.js";import{K as re,q as b}from"./esm2.js";import{t as x}from"./jsx-runtime.js";import{I as ie,N as S,S as C,t as w,w as T}from"./src2.js";import{F as E,G as ae,Gt as D,It as oe,M as se,N as ce,S as O,V as le,Y as ue,b as de,bt as fe,dt as pe,hn as me,rn as he,t as k,yn as ge,yt as _e}from"./esm3.js";import{E as ve,M as ye,P as A,S as be,b as xe,g as j,m as M,n as Se,t as Ce,v as we,w as Te}from"./esm4.js";import{n as Ee,t as De}from"./yup.js";import{i as Oe,t as ke}from"./src6.js";import{n as Ae,t as je}from"./matchString.js";import{n as Me,t as Ne}from"./src9.js";function N(){return(new Date().getTime()*Math.random()).toString(36)}var Pe,Fe,Ie,Le,Re,ze;function Be(){return(Be=e((()=>{Pe={add:`إضافة عامل تصفية`,all_filters:`جميع المرشحات`,apply:`يتقدم`,basicFilter:`الفلتر الأساسي`,cancel:`يلغي`,customQuery:`استعلام مخصص`,delete:`يمسح`,disable:`إبطال`,disableAll:`تعطيل الكل`,edit:`يحرر`,enable:`يُمكَِن`,enableAll:`تمكين الكل`,exclude:`استبعاد`,excludeAll:`استبعاد الكل`,field:`مجال`,filters:`المرشحات`,forAdvanced:`للمستخدمين المتقدمين فقط!`,include:`يشمل`,includeAll:`تضمين الكل`,invertAll:`عكس التضمين/الاستبعاد`,label:`ملصق`,operator:`المشغل`,optional:`خياري`,pin:`مثبت`,query:`استفسار`,refresh:`ينعش`,remove:`يزيل`,removeAll:`إزالة الكل`,toggleDisable:`عكس تعطيل/تمكين`,unpin:`غير مثبت`,update:`تحديث`,value:`قيمة`,view:`منظر`,matchAll:`تطابق كل شيء`,matchAny:`تطابق أي`},Fe={ALL:`كل`,ANY:`أي من`,BETWEEN:`بين هذا وذاك`,ENDS:`ينتهي مع`,EQ:`=`,EXISTS:`موجود`,GT:`>`,GTE:`≥`,IS:`يكون`,LIKE:`يحب`,LT:`<`,LTE:`≤`,STARTS:`ابدا ب`,WITHIN:`في غضون`},Ie=`مصطلح البحث...`,Le={BOOLEAN:`رقم`,DATE:`منطقي`,DATETIME:`تاريخ`,DECIMAL:`يطفو`,GEO:`GeoJSON`,NUMBER:`كثافة العمليات`,STRING:`سلسلة`},Re={compare:`مقارنة الحقل المطلوب`,field:`حقل مطلوب`,label:`التصنيف مطلوب`,operator:`عامل مطلوب`,value:`القيمة المطلوبة`},ze={label:Pe,operator:Fe,placeholder:Ie,type:Le,validate:Re}})))()}var Ve,He,Ue,We,Ge,Ke;function qe(){return(qe=e((()=>{Ve={add:`Add Filter`,all_filters:`All Filters`,apply:`Apply`,basicFilter:`Basic Filter`,cancel:`Cancel`,customQuery:`Custom Query`,delete:`Delete`,disable:`Disable`,disableAll:`Disable All`,edit:`Edit`,enable:`Enable`,enableAll:`Enable All`,exclude:`Exclude`,excludeAll:`Exclude All`,field:`Field`,filters:`Filters`,forAdvanced:`For advanced users only!`,include:`Include`,includeAll:`Include All`,invertAll:`Invert Include/Exclude`,label:`Label`,matchAll:`Match All`,matchAny:`Match Any`,operator:`Operator`,optional:`Optional`,pin:`Pinned`,query:`Query`,refresh:`Refresh`,remove:`Remove`,removeAll:`Remove All`,toggleDisable:`Invert Disable/Enable`,unpin:`Unpinned`,update:`Update`,value:`Value`,view:`View`},He={ALL:`All of`,ANY:`Any of`,BETWEEN:`Between`,ENDS:`Ends with`,EQ:`=`,EXISTS:`Exists`,GT:`>`,GTE:`≥`,IS:`Is`,LIKE:`Like`,LT:`<`,LTE:`≤`,STARTS:`Starts with`,WITHIN:`Within`},Ue=`Search term...`,We={BOOLEAN:`Bool`,DATE:`Date`,DATETIME:`Date Time`,DECIMAL:`Decimal`,GEO:`GeoJSON`,NUMBER:`Number`,STRING:`String`},Ge={compare:`Compare field required`,field:`Field required`,label:`Label required`,operator:`Operator required`,value:`Value required`},Ke={label:Ve,operator:He,placeholder:Ue,type:We,validate:Ge}})))()}function Je(){return(Je=e((()=>{k(),Be(),qe(),me(`searchbar`,{en:Ke,ar:ze})})))()}var Ye,Xe,P;function F(){return(F=e((()=>{Ye=r(),Xe=(0,Ye.createContext)({}),P=()=>(0,Ye.use)(Xe)})))()}var I,L,Ze;function R(){return(R=e((()=>{I=function(e){return e.ID=`ID`,e.STRING=`STRING`,e.TEXT=`TEXT`,e.NUMBER=`NUMBER`,e.DECIMAL=`DECIMAL`,e.BOOLEAN=`BOOLEAN`,e.DATE=`DATE`,e.DATETIME=`DATETIME`,e.NONE=`NONE`,e}({}),L=function(e){return e.EXISTS=`EXISTS`,e.IS=`IS`,e.ALL=`ALL`,e.ANY=`ANY`,e.EQ=`EQ`,e.LT=`LT`,e.GT=`GT`,e.LTE=`LTE`,e.GTE=`GTE`,e.LIKE=`LIKE`,e.STARTS=`STARTS`,e.ENDS=`ENDS`,e.WITHIN=`WITHIN`,e.BETWEEN=`BETWEEN`,e}({}),Ze={ID:[`IS`,`ANY`],STRING:[`EXISTS`,`IS`,`ANY`,`ALL`],TEXT:[`EXISTS`,`LIKE`,`STARTS`,`ENDS`],NUMBER:[`EXISTS`,`EQ`,`BETWEEN`,`LT`,`GT`,`LTE`,`GTE`],DECIMAL:[`EXISTS`,`EQ`,`BETWEEN`,`LT`,`GT`,`LTE`,`GTE`],BOOLEAN:[`EXISTS`,`EQ`],DATE:[`EXISTS`,`EQ`,`BETWEEN`,`LT`,`GT`,`LTE`,`GTE`],DATETIME:[`EXISTS`,`EQ`,`BETWEEN`,`LT`,`GT`,`LTE`,`GTE`],NONE:[`EXISTS`]}})))()}function Qe({filter:e,onChange:t,onRemove:n}){let{t:r}=a(`searchbar`),i=s(),{fields:o=[]}=P(),c=(0,z.useRef)(null),l=(0,z.useRef)(null),[f,p]=(0,z.useState)(()=>e);console.log(f),(0,z.useEffect)(()=>{e&&`field`in e&&e.field?l.current?.setValues(e):l.current?.setValues({id:d(),field:``,operator:L.EXISTS})},[e]),(0,z.useEffect)(()=>{let e=setTimeout(()=>{c.current?.focus()},100);return()=>{clearTimeout(e)}},[]);let m=(0,z.useMemo)(()=>{if(f?.field)return o.find(e=>e.field===f?.field)},[f]),h=(0,z.useMemo)(()=>m==null?[L.EXISTS]:(l.current?.setValue(`operator`,Ze[m.type][0]),[...Ze[m.type]]),[m]),g=(0,z.useMemo)(()=>{if(f?.operator===L.EXISTS&&f?.value!==void 0&&l.current?.setValue(`value`,void 0),m?.type===I.STRING&&(f?.operator&&[L.ALL,L.ANY].includes(f.operator)?u(f?.value)||l.current?.setValue(`value`,[]):u(f?.value)&&l.current?.setValue(`value`,void 0)),(m?.type===I.DATE||m?.type===I.DATETIME||m?.type===I.NUMBER||m?.type===I.DECIMAL)&&(f?.operator===L.BETWEEN?u(f.value)||l.current?.setValue(`value`,[]):u(f?.value)&&l.current?.setValue(`value`,void 0)),m?.type===I.BOOLEAN&&f?.operator&&[L.IS,L.EQ].includes(f.operator)&&f?.value===void 0&&l.current?.setValue(`value`,!1),m==null||!f?.operator||f?.operator===L.EXISTS)return null;if(m?.type===I.BOOLEAN)return(0,B.jsx)(M,{label:r(`label.value`),"data-plain":`true`,children:(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(xe,{})})});if(m?.type===I.STRING||m?.type===I.ID)return[L.ALL,L.ANY].includes(f?.operator)?(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(j,{multiple:!0,searchable:!0,allowCreate:!0,allowClear:!0,options:m.values??[],label:r(`label.value`),onQuery:m.onSearch})}):m.onSearch||m.values?.length?(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(j,{searchable:!0,allowCreate:!0,allowClear:!0,options:m.values??[],label:r(`label.value`),onQuery:m.onSearch})}):(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(Te,{label:r(`label.value`),allowClear:!0})});if(m.type===I.TEXT)return(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(we,{rows:3,label:r(`label.value`),allowClear:!0})});if(m?.type===I.DECIMAL||m?.type===I.NUMBER){let e=m.type===I.DECIMAL?.1:1;return f?.operator===L.BETWEEN?(0,B.jsx)(A,{name:`value`,children:(0,B.jsxs)(M,{label:r(`label.value`),children:[(0,B.jsx)(A,{name:`value[0]`,children:(0,B.jsx)(be,{step:e,allowClear:!0})}),(0,B.jsx)(`span`,{className:`p-2 text-muted`,children:`≷`}),(0,B.jsx)(A,{name:`value[1]`,children:(0,B.jsx)(be,{step:e,allowClear:!0})})]})}):(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(be,{label:r(`label.value`),step:e,allowClear:!0})})}if(m?.type===I.DATE||m?.type===I.DATETIME){let e=m.type===I.DATETIME?`datetime`:`date`;return f?.operator===L.BETWEEN?(0,B.jsx)(A,{name:`value`,children:(0,B.jsxs)(M,{label:r(`label.value`),children:[(0,B.jsx)(A,{name:`value[0]`,children:(0,B.jsx)(ve,{type:e,allowClear:!0})}),(0,B.jsx)(`span`,{className:`p-2 text-muted`,children:`≷`}),(0,B.jsx)(A,{name:`value[1]`,children:(0,B.jsx)(ve,{type:e,allowClear:!0})})]})}):(0,B.jsx)(A,{name:`value`,children:(0,B.jsx)(ve,{type:e,allowClear:!0})})}},[m,f]),_=(0,z.useCallback)(e=>{let n={id:e.id,field:e.field,negate:e.negate,operator:e.operator,value:e.value,label:e.label,type:m?.type};t?.(n),i?.events.emit(`close`)},[m,t]);return(0,B.jsx)(ye,{formRef:l,resolver:Ee($e),defaultValues:f,onChange:p,onSubmit:_,children:(0,B.jsxs)(`div`,{className:`w-lg`,children:[(0,B.jsxs)(fe,{children:[(0,B.jsx)(_e,{flex:`fill`,children:(0,B.jsx)(A,{name:`field`,children:(0,B.jsx)(j,{required:!0,searchable:!0,ref:c,label:r(`label.field`),options:o,labelProperty:`label`,valueProperty:`field`,groupProperty:`type`})})}),(0,B.jsxs)(_e,{flex:`content`,className:`text-center`,children:[(0,B.jsx)(`label`,{className:`block py-0.5 text-sm`,children:r(`label.exclude`)}),(0,B.jsx)(A,{name:`negate`,children:(0,B.jsx)(xe,{color:`danger`})})]}),(0,B.jsx)(_e,{flex:`content`,className:`basis-28`,children:(0,B.jsx)(A,{name:`operator`,children:(0,B.jsx)(j,{label:r(`label.operator`),options:h,renderer:e=>r(`operator.${e}`)})})})]}),(0,B.jsx)(`br`,{}),g,(0,B.jsx)(`br`,{}),(0,B.jsx)(A,{name:`label`,children:(0,B.jsx)(Te,{label:r(`label.label`),placeholder:r(`label.label`),decorateEnd:!e?.label&&(0,B.jsx)(`span`,{className:`text-sm opacity-65 pe-4`,children:`Optional`})})}),(0,B.jsxs)(`div`,{className:`flex mt-4 justify-end gap-1 sticky bottom-1 bg-default`,children:[n&&(0,B.jsx)(`div`,{className:`flex-1`,children:(0,B.jsx)(ce,{children:(0,B.jsx)(D,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,color:`danger`,onClick:n,children:r(`label.remove`)})})}),(0,B.jsx)(ce,{children:(0,B.jsx)(D,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,children:r(`label.cancel`)})}),(0,B.jsx)(D,{type:`submit`,variant:`solid`,size:`sm`,children:r(`label.apply`)})]})]})})}var z,B,$e;function et(){return(et=e((()=>{c(),De(),k(),Ce(),l(),g(),z=r(),o(),R(),F(),B=x(),$e=new ne({id:y().required(),field:y().required(),operator:y().required().oneOf(Object.values(L)),negate:ee().optional(),label:y(),value:te().when(`operator`,{is:L.EXISTS,then:e=>e.optional(),otherwise:e=>e.required()}).when(`operator`,{is:L.ANY,then:e=>e.test({name:`array-check`,message:"${path} is a required field",test:(e=[])=>e.length>0})}).when(`operator`,{is:L.ALL,then:e=>e.test({name:`array-check`,message:"${path} is a required field",test:(e=[])=>e.length>0})}).when(`operator`,{is:L.BETWEEN,then:e=>e.test({name:`array-check`,message:"${path} is a required field",test:(e=[])=>e.length>0&&v(e[0])&&v(e[1])})}).when(`operator`,{is:L.BETWEEN,then:e=>e.test({name:`array-check`,message:"${path} min max",test:(e=[])=>e.length>0&&e[0]<e[1]})})}),Qe.__docgenInfo={description:``,methods:[],displayName:`FilterForm`,props:{filter:{required:!1,tsType:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filter: FilterObject) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})))()}function tt({filter:e,onChange:t,onRemove:n}){let{t:r}=a(`searchbar`),i=s(),{defaultQuery:o=``,querySchema:c,queryLanguage:l}=P(),u=(0,V.useRef)(null),f=(0,V.useMemo)(()=>e&&`query`in e&&e.query?{id:e.id,query:JSON.stringify(JSON.parse(e.query??`{}`),null,4),label:e.label}:{id:d(),label:``,query:o},[o,e]);(0,V.useEffect)(()=>{let e=setTimeout(()=>{u.current?.focus()},100);return()=>{clearTimeout(e)}},[]);let p=(0,V.useCallback)(e=>{let n={id:e.id,query:e.query,label:e.label};t?.(n),i?.events.emit(`close`)},[t]);return(0,H.jsxs)(ye,{resolver:Ee(rt),defaultValues:f,onSubmit:p,children:[(0,H.jsx)(ae,{color:`warning`,children:`For advanced users only!`}),(0,H.jsx)(A,{name:`label`,children:(0,H.jsx)(Te,{required:!0,ref:u,label:r(`label.label`),placeholder:r(`label.label`)})}),(0,H.jsx)(A,{name:`query`,children:({invalid:e,...t})=>(0,H.jsxs)(`div`,{className:`my-2`,children:[(0,H.jsx)(`label`,{className:h(`block px-2`,e&&`text-danger-600`),children:r(`label.query`)}),(0,H.jsx)(`div`,{className:h(`h-96 w-xl grid outline place-content-start`,e&&`[&_.fabric-codeEditor]:border-danger-500!`),style:{gridTemplate:`"content" 1fr/1fr`},children:(0,H.jsx)(nt,{language:l??`text`,minimal:!0,required:!0,...t,schema:c})})]})}),(0,H.jsxs)(`div`,{className:`flex mt-4 justify-end gap-1 sticky bottom-1 bg-default`,children:[n&&(0,H.jsx)(`div`,{className:`flex-1`,children:(0,H.jsx)(D,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,color:`danger`,onClick:n,children:r(`label.remove`)})}),(0,H.jsx)(D,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,children:r(`label.cancel`)}),(0,H.jsx)(D,{type:`submit`,variant:`solid`,size:`sm`,children:r(`label.apply`)})]})]})}var V,H,nt,rt;function it(){return(it=e((()=>{c(),De(),k(),Ce(),m(),g(),V=r(),o(),F(),H=x(),t(),nt=(0,V.lazy)(async()=>await n(()=>import(`./esm5.js`).then(e=>({default:e.CodeEditor})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url)),rt=new ne({id:y().required(),label:y().required(),query:y().required().test(e=>{try{return!f(JSON.parse(e))}catch{return!1}})}),tt.__docgenInfo={description:``,methods:[],displayName:`QueryForm`,props:{filter:{required:!1,tsType:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filter: FilterObject) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})))()}function at({filter:e,onRemove:t,onChange:n}){let{t:r}=a(`searchbar`),{fields:i}=P(),[o,s]=(0,ot.useState)(()=>f(i));return(0,ot.useEffect)(()=>{s(!!e&&`query`in e)},[e]),(0,U.jsxs)(`div`,{className:`px-2 py-1 bg-default outline min-w-108 rounded-capped`,children:[!f(i)&&(0,U.jsx)(`div`,{className:`pb-4 flex justify-end`,children:(0,U.jsx)(`span`,{role:`none`,className:`text-sm link`,onClick:()=>s(!o),children:r(o?`label.basicFilter`:`label.customQuery`)})}),!o&&(0,U.jsx)(Qe,{filter:e,onRemove:t,onChange:n}),o&&(0,U.jsx)(tt,{filter:e,onRemove:t,onChange:n})]})}var ot,U;function st(){return(st=e((()=>{m(),g(),ot=r(),o(),F(),et(),it(),U=x(),at.__docgenInfo={description:``,methods:[],displayName:`FilterEdit`,props:{filter:{required:!1,tsType:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(filter: FilterObject) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})))()}function ct({filter:e,onRemove:t}){let{t:n}=a(`searchbar`),r=(0,lt.useMemo)(()=>{if(`query`in e)return JSON.stringify(JSON.parse(e.query??`{}`),null,2);if(`field`in e){let t=e.value?.toString();return e.operator===L.BETWEEN&&u(e.value)&&(t=`[${e.value?.join(` - `)}]`),e.operator===L.ANY&&u(e.value)&&(t=`[${e.value?.join(`, `)}]`),e.operator===L.ALL&&u(e.value)&&(t=`(${e.value?.join(`, `)})`),(0,W.jsxs)(lt.Fragment,{children:[e.negate&&(0,W.jsx)(`b`,{children:`NOT\xA0`}),(0,W.jsx)(`span`,{children:e.field}),(0,W.jsxs)(`b`,{children:[`\xA0`,n(`operator.${e.operator}`),`\xA0`]}),(0,W.jsx)(`div`,{children:t})]})}return``},[e]);return(0,W.jsxs)(`div`,{className:`p-2 bg-default relative rounded-capped`,children:[`query`in e&&(0,W.jsx)(`div`,{className:`absolute top-2 inset-e-2 z-10`,children:(0,W.jsx)(pe,{size:`sm`,text:r})}),(0,W.jsx)(`pre`,{className:`overflow-auto bg-default outline text-sm p-2 max-h-96 max-w-3xl min-w-[24rem]`,children:r}),!e.required&&(0,W.jsx)(D,{size:`sm`,variant:`link`,color:`danger`,"data-dropdown-dismiss":`true`,onClick:t,children:n(`label.remove`)})]})}var lt,W;function ut(){return(ut=e((()=>{k(),l(),g(),lt=r(),o(),R(),W=x(),ct.__docgenInfo={description:``,methods:[],displayName:`FilterView`,props:{filter:{required:!0,tsType:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},onRemove:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}function dt({filter:e,editable:t,onChange:n,onRemove:r}){let{t:i}=a(`searchbar`),[o,s]=(0,ft.useState)();return o===`edit`?(0,G.jsx)(at,{filter:e,onChange:n,onRemove:r}):o===`view`?(0,G.jsx)(ct,{filter:e,onRemove:r}):(0,G.jsxs)(de,{className:`text-sm`,children:[t&&e.canEdit!==!1?(0,G.jsx)(O,{icon:`icon-[mdi--lead-pencil]`,label:i(`label.edit`),"data-dropdown-dismiss":`false`,onClick:()=>{s(`edit`)}}):(0,G.jsx)(O,{icon:`icon-[mdi--eye]`,label:i(`label.view`),"data-dropdown-dismiss":`false`,onClick:()=>{s(`view`)}}),(0,G.jsx)(E,{}),e.operator&&[L.ALL,L.ANY].includes(e.operator)&&(0,G.jsx)(O,{label:i(e.operator===L.ALL?`label.matchAny`:`label.matchAll`),icon:i(e.operator===L.ALL?mt:pt),onClick:()=>n({...e,operator:e.operator===L.ALL?L.ANY:L.ALL})}),e.canPin!==!1&&(0,G.jsx)(O,{label:i(e.pinned?`label.unpin`:`label.pin`),onClick:()=>n({...e,pinned:!e.pinned})}),e.canInvert!==!1&&e.field&&(0,G.jsx)(O,{label:i(e.negate?`label.include`:`label.exclude`),onClick:()=>n({...e,negate:!e.negate})}),e.canDisable!==!1&&(0,G.jsx)(O,{label:i(e.disabled?`label.enable`:`label.disable`),onClick:()=>n({...e,disabled:!e.disabled})}),!e.required&&(0,G.jsx)(E,{}),!e.required&&(0,G.jsx)(O,{color:`danger`,icon:`icon-[mdi--minus-circle-outline]`,label:i(`label.remove`),onClick:()=>r()})]})}var ft,G,pt,mt;function ht(){return(ht=e((()=>{k(),ft=r(),o(),R(),st(),ut(),G=x(),pt=`M9,5C10.04,5 11.06,5.24 12,5.68C12.94,5.24 13.96,5 15,5A7,7 0 0,1 22,12A7,7 0 0,1 15,19C13.96,19 12.94,18.76 12,18.32C11.06,18.76 10.04,19 9,19A7,7 0 0,1 2,12A7,7 0 0,1 9,5M8.5,12C8.5,13.87 9.29,15.56 10.56,16.75L11.56,16.29C10.31,15.29 9.5,13.74 9.5,12C9.5,10.26 10.31,8.71 11.56,7.71L10.56,7.25C9.29,8.44 8.5,10.13 8.5,12M15.5,12C15.5,10.13 14.71,8.44 13.44,7.25L12.44,7.71C13.69,8.71 14.5,10.26 14.5,12C14.5,13.74 13.69,15.29 12.44,16.29L13.44,16.75C14.71,15.56 15.5,13.87 15.5,12Z`,mt=`M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z`,dt.__docgenInfo={description:``,methods:[],displayName:`FilterMenu`,props:{fields:{required:!1,tsType:{name:`Array`,elements:[{name:`FilterField`}],raw:`FilterField[]`},description:``},editable:{required:!1,tsType:{name:`boolean`},description:``},filter:{required:!0,tsType:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},onRemove:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(filter: FilterObject) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})))()}function gt({filter:e,fields:t,editable:n,includedColor:r=`primary-500`,excludedColor:i=`danger-500`,onChange:o,onRemove:s}){let{t:c}=a(`searchbar`),l=(0,K.useMemo)(()=>e.label?(0,q.jsxs)(K.Fragment,{children:[e.field&&e.negate&&(0,q.jsx)(`span`,{className:`font-semibold`,children:`NOT`}),(0,q.jsx)(`span`,{children:e.label})]}):(0,q.jsxs)(K.Fragment,{children:[e.field&&e.negate&&(0,q.jsx)(`span`,{className:`font-semibold`,children:`NOT`}),(0,q.jsx)(`span`,{children:e.field}),(0,q.jsx)(`span`,{className:`font-semibold`,children:c(`operator.${e.operator}`,{defaultValue:e.operator})}),`value`in e&&!p(e.value)&&(0,q.jsx)(`span`,{className:`truncate block`,children:e.value?.toString().substring(0,24)})]}),[e]),u=(0,K.useMemo)(()=>e.color??(e.field&&e.negate?i:r),[e,r,i]),d=(0,K.useMemo)(()=>{if(e.canDisable!==!1)return e.disabled?`icon-[mdi--checkbox-blank-outline]`:`icon-[mdi--checkbox-marked]`},[e]);return(0,q.jsxs)(se,{showArrow:!0,children:[(0,q.jsx)(le,{size:`sm`,color:u,className:h(`outline max-w-60`,e.disabled&&`opacity-65`),variant:e.pinned?`solid`:void 0,icon:d&&(0,q.jsx)(`button`,{className:`size-fit cursor-pointer`,onClick:t=>[o({...e,disabled:!e.disabled}),t.stopPropagation()],children:(0,q.jsx)(ge,{icon:d,color:u})}),"data-ref":`filterTag`,"data-test-value":e.id,stopPropagation:!0,onRemove:e.required?void 0:()=>s(),children:(0,q.jsxs)(`div`,{className:h(`flex gap-1 items-center`,e.disabled&&`line-through opacity-65`),children:[e.pinned&&(0,q.jsx)(ge,{className:`flex-content`,icon:e.icon??`icon-[mdi--pin]`}),(0,q.jsx)(`div`,{className:`truncate flex gap-x-0.5 flex-nowrap`,children:l})]})}),(0,q.jsx)(dt,{filter:e,fields:t,editable:n,onChange:o,onRemove:s})]})}var K,q;function _t(){return(_t=e((()=>{k(),g(),K=r(),o(),ht(),q=x(),gt.__docgenInfo={description:``,methods:[],displayName:`FilterTag`,props:{filter:{required:!0,tsType:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},editable:{required:!1,tsType:{name:`boolean`},description:``},onRemove:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(filter: FilterObject) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``},includedColor:{defaultValue:{value:`"primary-500"`,computed:!1},required:!1},excludedColor:{defaultValue:{value:`"danger-500"`,computed:!1},required:!1}}}})))()}function vt({filters:e=[],allowAdd:t,fields:n,editable:r,querySchema:i,queryLanguage:o,defaultQuery:s,includedColor:c,excludedColor:l,onFilterChanged:u}){let{t:d}=a(`searchbar`),m=(0,J.useCallback)(t=>{let n=[...e];n.splice(t,1),u?.(n)},[e,u]),g=(0,J.useCallback)((t,n)=>{let r=[...e];p(n)?r.push(t):r.splice(n,1,t),u?.(r)},[e,u]),_=(0,J.useCallback)(t=>{let n=[];t===`removeAll`&&n.push(...e.filter(e=>e.required)),t!==`removeAll`&&n.push(...e.map(e=>(t===`disableAll`&&(e.disabled=!0),t===`enableAll`&&(e.disabled=!1),t===`toggleDisable`&&(e.disabled=!e.disabled),t===`excludeAll`&&e.field&&(e.negate=!0),t===`includeAll`&&e.field&&(e.negate=!1),t===`invertAll`&&e.field&&(e.negate=!e.negate),{...e}))),u?.(n)},[e,u]),v=(0,J.useMemo)(()=>{let t={someDisabled:!1,someEnabled:!1,someExcluded:!1,someIncluded:!1,canRemoveAll:!1};return e.forEach(e=>{e.disabled&&e.canDisable!==!1&&!t.someDisabled&&(t.someDisabled=!0),!e.disabled&&e.canDisable!==!1&&!t.someEnabled&&(t.someEnabled=!0),e.field&&e.negate&&e.canInvert!==!1&&!t.someExcluded&&(t.someExcluded=!0),e.field&&!e.negate&&e.canInvert!==!1&&!t.someIncluded&&(t.someIncluded=!0),!e.required&&!t.canRemoveAll&&(t.canRemoveAll=!0)}),t},[e]);return(0,Y.jsx)(Xe,{value:{defaultQuery:s,querySchema:i,queryLanguage:o,fields:n},children:(0,Y.jsxs)(`div`,{className:`flex flex-wrap gap-1 items-center`,children:[(0,Y.jsxs)(se,{showArrow:!0,disabled:f(e),children:[(0,Y.jsx)(ge,{icon:`icon-[mdi--cog-outline]`,className:h(f(e)&&`pointer-events-none opacity-30`),color:f(e)?void 0:`primary`}),(0,Y.jsxs)(de,{className:`text-sm`,onClick:_,children:[v.someDisabled&&(0,Y.jsx)(O,{id:`enableAll`,label:d(`label.enableAll`)}),v.someEnabled&&(0,Y.jsx)(O,{id:`disableAll`,label:d(`label.disableAll`)}),(0,Y.jsx)(O,{icon:`icon-[mdi--checkbox-intermediate-variant]`,id:`toggleDisable`,label:d(`label.toggleDisable`)}),(0,Y.jsx)(E,{}),v.someExcluded&&(0,Y.jsx)(O,{id:`includeAll`,label:d(`label.includeAll`)}),v.someIncluded&&(0,Y.jsx)(O,{id:`excludeAll`,label:d(`label.excludeAll`)}),(0,Y.jsx)(O,{id:`invertAll`,icon:`icon-[mdi--set-left]`,label:d(`label.invertAll`)}),(0,Y.jsx)(E,{}),(0,Y.jsx)(O,{id:`removeAll`,color:`danger`,icon:`icon-[mdi--minus-circle-outline]`,label:d(`label.removeAll`),disabled:!v.canRemoveAll})]})]}),e?.map((e,t)=>(0,Y.jsx)(gt,{filter:e,editable:r,includedColor:c,excludedColor:l,onRemove:()=>m(t),onChange:e=>g(e,t)},t)),t&&(0,Y.jsxs)(se,{showArrow:!0,children:[(0,Y.jsx)(le,{size:`sm`,className:`outline-dashed! outline-tint-400!`,icon:`icon-[mdi--plus-circle-outline]`,children:d(`label.add`)}),(0,Y.jsx)(at,{onChange:g})]})]})})}var J,Y;function yt(){return(yt=e((()=>{k(),m(),g(),J=r(),o(),F(),st(),_t(),Y=x(),vt.__docgenInfo={description:`FilterBar component allows users to manage a list of filters.
It provides options to add, remove, and modify filters,
as well as to enable or disable all filters at once.
It also supports toggling between included and excluded filters.

@example
\`\`\`jsx
<FilterBar
  filters={filters}
  allowAdd={true}
  fields={fields}
  editable={true}
  querySchema={querySchema}
  queryLanguage="lucene"
  defaultQuery="*"
  includedColor="green"
  excludedColor="red"
  onFilterChanged={(newFilters) => console.log(newFilters)}
/>
\`\`\``,methods:[],displayName:`FilterBar`,props:{filters:{required:!1,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]}],raw:`FilterObject[]`},description:`Filters list
@default []`,defaultValue:{value:`[]`,computed:!1}},fields:{required:!1,tsType:{name:`Array`,elements:[{name:`FilterField`}],raw:`FilterField[]`},description:`Field list
(Required when filter bar enabled)`},editable:{required:!1,tsType:{name:`boolean`},description:`Editable filters`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable component`},emptyFields:{required:!1,tsType:{name:`string`},description:`Message for empty field list`},includedColor:{required:!1,tsType:{name:`string`},description:`included filter chip color`},excludedColor:{required:!1,tsType:{name:`string`},description:`excluded filter chip color`},allowAdd:{required:!1,tsType:{name:`boolean`},description:``},queryLanguage:{required:!1,tsType:{name:`union`,raw:`"text" | "json"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"json"`}]},description:``},querySchema:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ uri: string; schema: KeyValue }`,signature:{properties:[{key:`uri`,value:{name:`string`,required:!0}},{key:`schema`,value:{name:`KeyValue`,required:!0}}]}}],raw:`Array<{ uri: string; schema: KeyValue }>`},description:``},defaultQuery:{required:!1,tsType:{name:`string`},description:``},onFilterChanged:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filters: FilterObject[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`intersection`,raw:`BaseFilter &
(
  | {
      field: string;
      operator: OPERATOR;
      value?: FilterValue;
      negate?: boolean;
      canInvert?: boolean;
      query?: never;
      type?: string;
    }
  | {
      field?: never;
      operator?: never;
      label: string;
      canInvert?: false;
      query: string;
    }
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]}],raw:`FilterObject[]`},name:`filters`}],return:{name:`void`}}},description:`On filters change, (add/update/delete)
@param filters`}}}})))()}function bt({historyKey:e=`ruf:search`,historyCount:t=20,defaultQueryList:n,prepend:r,append:i,decorateEnd:o,decorateStart:s,children:c,hideFilters:l,defaultCollapsed:d=!1,disabled:f,onSearch:p,query:m,ref:h,multiple:g,filters:v=_,...y}){let{t:ee}=a(`searchbar`),[te,ne]=oe(e,n??[]),[b,x]=(0,X.useState)(()=>d),ie=(0,X.useMemo)(()=>g?_:``,[g]),S=he((e,t)=>{w({type:`dirty`,dirty:!1}),p?.({query:e,filters:t})},[]),[C,w]=(0,X.useReducer)((e,t)=>t.type===`reset`?{...e,dirty:!1,query:t.query,filters:t.filters}:t.type===`dirty`?{...e,dirty:t.dirty}:t.type===`query`?(g||S(t.query??ie,e.filters),{...e,dirty:!!g,query:t.query??ie}):t.type===`filter`?(S(e.query,t.filters??[]),{...e,dirty:!1,filters:t.filters??[]}):e,{dirty:!1,query:m,filters:v});(0,X.useEffect)(()=>{w({type:`reset`,filters:v,query:m})},[v,m]);let T=e=>{let n=u(e)?e:[e];ne(re([...n,...te]).slice(0,t)),w({type:`query`,query:e})},E=(e=[])=>{w({type:`filter`,filters:e})};return(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`flex flex-nowrap gap-1 mb-1`,children:[(0,Z.jsxs)(M,{"data-inner":!0,className:`flex-1`,children:[!l&&(0,Z.jsx)(D,{color:`primary`,variant:b?`soft`:`link`,altIcon:(0,Z.jsx)(ue,{inline:!0,value:v.length}),onClick:()=>x(!b),children:ee(`label.filters`)}),r,(0,Z.jsx)(Se,{allowClear:!0,expandOnEdit:!0,ref:h,disabled:f,multiple:g,history:te,value:C.query,decorateEnd:o,decorateStart:s,onInput:()=>w({type:`dirty`,dirty:!g}),onSelect:T,"data-ref":`searchbarInput`,onEnterPressed:()=>S(C.query,C.filters)}),i,(0,Z.jsx)(D,{variant:`solid`,color:C.dirty?`warning`:`primary`,onClick:()=>S(C.query,C.filters),children:ee(C.dirty?`label.update`:`label.refresh`)})]}),c]}),!l&&!b&&(0,Z.jsx)(vt,{...y,disabled:f,filters:C.filters,onFilterChanged:E})]})}var X,Z;function xt(){return(xt=e((()=>{k(),Ce(),b(),l(),g(),X=r(),o(),yt(),Z=x(),bt.__docgenInfo={description:`This component provides a search input with autocomplete functionality,
a button to trigger search, and an optional filter bar.
It supports history of search queries, multiple selection, and custom decorations.
It can be collapsed to hide filters and has options for customization.

@example
\`\`\`jsx
<SearchBar
  historyKey="myApp:searchHistory"
  historyCount={10}
  defaultQueryList={["example", "test"]}
  prepend={<span>Prepend</span>}
  append={<span>Append</span>}
  decorateEnd={<span>End Decoration</span>}
  decorateStart={<span>Start Decoration</span>}
  hideFilters={false}
  defaultCollapsed={false}
  disabled={false}
  onCollapsed={(collapsed) => console.log("Collapsed:", collapsed)}
  onQuery={(query) => console.log("Query:", query)}
  onSearch={({ query, filters }) => console.log("Search:", query, filters)}
  query={""}
  ref={searchInputRef}
  multiple={false}
  filters={[{ name: "filter1", value: "value1" }]}
/>
\`\`\``,methods:[],displayName:`SearchBar`,props:{query:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Query string`},historyCount:{required:!1,tsType:{name:`number`},description:`Search history count
@default 20`,defaultValue:{value:`20`,computed:!1}},historyKey:{required:!1,tsType:{name:`string`},description:`Search history storage key
@default: "ax:search"`,defaultValue:{value:`"ruf:search"`,computed:!1}},defaultQueryList:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Default query items for suggest`},prepend:{required:!1,tsType:{name:`ReactElement`},description:`Add-on before search input`},append:{required:!1,tsType:{name:`ReactElement`},description:`Add-on after search input`},hideFilters:{required:!1,tsType:{name:`boolean`},description:`Hide filter bar`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable component`},defaultCollapsed:{required:!1,tsType:{name:`boolean`},description:`Collapse filters
@default true`,defaultValue:{value:`false`,computed:!1}},decorateStart:{required:!1,tsType:{name:`union`,raw:`React.ReactElement | string | number | boolean`,elements:[{name:`ReactReactElement`,raw:`React.ReactElement`},{name:`string`},{name:`number`},{name:`boolean`}]},description:``},decorateEnd:{required:!1,tsType:{name:`union`,raw:`React.ReactElement | string | number | boolean`,elements:[{name:`ReactReactElement`,raw:`React.ReactElement`},{name:`string`},{name:`number`},{name:`boolean`}]},description:``},onCollapsed:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(collapsed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`collapsed`}],return:{name:`void`}}},description:`On filter collapsed
@param collapsed`},onQuery:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(query: string) => Promise<string[]> | string[]`,signature:{arguments:[{type:{name:`string`},name:`query`}],return:{name:`union`,raw:`Promise<string[]> | string[]`,elements:[{name:`Promise`,elements:[{name:`Array`,elements:[{name:`string`}],raw:`string[]`}],raw:`Promise<string[]>`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]}}},description:`On query string change event
@param query`},filters:{defaultValue:{value:`EMPTY_ARRAY`,computed:!0},required:!1}},composes:[`Partial`,`RefProp`]}})))()}function St(){return(St=e((()=>{Je(),yt(),xt(),R()})))()}var Q,Ct,wt,Tt,$,Et;function Dt(){return(Dt=e((()=>{w(),St(),Ne(),je(),ke(),Q=x(),{fn:Ct}=__STORYBOOK_MODULE_TEST__,wt={component:bt,title:`@searchbar/SearchBar`,parameters:{layout:`padded`,jest:[`searchbar/tests/SearchBar.test.tsx`]}},Tt=[{uri:`http://react-fabric/schema.json`,schema:{type:`object`,$ref:`http://react-fabric/base-schema.json`}},{uri:`http://react-fabric/base-schema.json`,schema:{type:`object`,properties:{bool:{$ref:`http://react-fabric/bool-schema.json`},exists:{$ref:`http://react-fabric/exists-schema.json`},query_string:{$ref:`http://react-fabric/query-schema.json`}}}},{uri:`http://react-fabric/exists-schema.json`,schema:{type:`object`,properties:{field:{type:`string`}},required:[`field`]}},{uri:`http://react-fabric/query-schema.json`,schema:{type:`object`,properties:{fields:{type:`array`,items:{type:`string`},minItems:1,uniqueItems:!0},query:{type:`string`}},required:[`query`]}},{uri:`http://react-fabric/bool-schema.json`,schema:{type:`object`,properties:{filter:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},must:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},should:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},must_not:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},should_not:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},minimum_should_match:{type:`number`}}}}],$={render:e=>(0,Q.jsx)(bt,{...e,append:(0,Q.jsx)(Me,{variant:`link`,value:`$year-5|$now`}),children:(0,Q.jsxs)(S,{placement:`bottom-end`,children:[(0,Q.jsx)(i,{icon:`icon-[mdi--menu]`,"aria-label":`menu`,variant:`link`}),(0,Q.jsxs)(C,{className:`text-sm`,children:[(0,Q.jsx)(T,{label:`Open`}),(0,Q.jsx)(T,{label:`Save`}),(0,Q.jsx)(ie,{}),(0,Q.jsx)(T,{label:`Share`})]})]})}),args:{allowAdd:!0,excludedColor:`#f00`,query:`test AND query`,querySchema:Tt,queryLanguage:`json`,defaultQuery:`{
	
}`,editable:!0,onSearch:Ct(),fields:[{field:`id`,label:`ID`,type:I.ID},{field:`name`,label:`Name`,type:I.STRING},{field:`notes`,label:`Notes`,type:I.TEXT},{field:`age`,label:`Age`,type:I.NUMBER},{field:`dob`,label:`DOB`,type:I.DATE},{field:`extras`,label:`Extras`,type:I.NONE},{field:`country`,label:`Country`,type:I.STRING,onSearch(e){return new Promise(t=>{setTimeout(()=>{t(Oe.list.filter(t=>Ae(t.name.common,e)||Ae(t.name.official,e)).map(e=>e.name.common))},1e3)})}}],filters:[{id:N(),field:`name`,operator:L.IS,value:`Smeghead`,pinned:!0,canPin:!1,canDisable:!1,required:!0,canEdit:!1,color:`lilac`,icon:`mdi mdi-tray-full`},{id:N(),field:`name`,operator:L.IS,value:`Smeghead`},{id:N(),field:`name`,negate:!0,operator:L.IS,value:`Smeghead`,label:`New filter`},{id:N(),query:JSON.stringify({query:`test`}),label:`Query filter`}]}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <SearchBar {...args} append={<SuperDate variant="link" value="$year-5|$now" />}>
        <Dropdown placement="bottom-end">
          <Button icon="icon-[mdi--menu]" aria-label="menu" variant="link" />
          <Menu className="text-sm">
            <MenuItem label="Open" />
            <MenuItem label="Save" />
            <Divider />
            <MenuItem label="Share" />
          </Menu>
        </Dropdown>
      </SearchBar>;
  },
  args: {
    allowAdd: true,
    excludedColor: "#f00",
    query: "test AND query",
    querySchema: schema,
    queryLanguage: "json",
    defaultQuery: "{\\n\\t\\n}",
    editable: true,
    onSearch: fn(),
    fields: [{
      field: "id",
      label: "ID",
      type: FIELD_TYPE.ID
    }, {
      field: "name",
      label: "Name",
      type: FIELD_TYPE.STRING
    }, {
      field: "notes",
      label: "Notes",
      type: FIELD_TYPE.TEXT
    }, {
      field: "age",
      label: "Age",
      type: FIELD_TYPE.NUMBER
    }, {
      field: "dob",
      label: "DOB",
      type: FIELD_TYPE.DATE
    }, {
      field: "extras",
      label: "Extras",
      type: FIELD_TYPE.NONE
    }, {
      field: "country",
      label: "Country",
      type: FIELD_TYPE.STRING,
      onSearch(q) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(Countries.list.filter(ctr => matchString(ctr.name.common, q) || matchString(ctr.name.official, q)).map(c => c.name.common));
          }, 1000);
        });
      }
    }],
    filters: [{
      id: shortHash(),
      field: "name",
      operator: OPERATOR.IS,
      value: "Smeghead",
      pinned: true,
      canPin: false,
      canDisable: false,
      required: true,
      canEdit: false,
      color: "lilac",
      icon: "mdi mdi-tray-full"
    }, {
      id: shortHash(),
      field: "name",
      operator: OPERATOR.IS,
      value: "Smeghead"
    }, {
      id: shortHash(),
      field: "name",
      negate: true,
      operator: OPERATOR.IS,
      value: "Smeghead",
      label: "New filter"
    }, {
      id: shortHash(),
      query: JSON.stringify({
        query: "test"
      }),
      label: "Query filter"
    }]
  }
}`,...$.parameters?.docs?.source}}},Et=[`_SearchBar`]})))()}Dt();export{$ as _SearchBar,Et as __namedExportsOrder,wt as default};