import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{p as r}from"./editor.api2.js";import{i,t as a}from"./es.js";import{At as o,B as s,Dt as c,F as l,Ft as u,Pt as d,Q as f,R as p,St as m,V as h,Z as g,_,dt as v,ft as y,jt as b,st as x,u as S,ut as ee,wt as te,yt as C}from"./ResizeObserver.es.js";import{a as w,ct as T,i as ne,o as E,r as D,s as O,t as re}from"./index.esm.js";import{t as k}from"./jsx-runtime.js";import{B as ie,C as A,E as ae,I as oe,L as se,N as ce,R as le,St as ue,Tt as de,U as fe,V as pe,W as me,X as he,Z as j,et as ge,gt as M,it as _e,k as ve,lt as ye,mt as be,nt as xe,rn as Se,rt as Ce,vt as we,w as Te,z as Ee}from"./iframe-BBjx9o_X.js";import{_ as De,c as Oe,d as ke,f as Ae,h as je,n as Me,p as Ne,s as Pe,t as N,u as P,v as F}from"./esm.js";import{a as Fe,d as I,f as Ie,i as Le,o as Re,p as ze,u as Be}from"./es2.js";import{n as Ve,t as He}from"./lib.js";var Ue,We,Ge,Ke,qe,Je,Ye=t((()=>{Ue=` ⇽ `,We={quick:`حدد مسرعا`,relative:`نسبيا`,events:`الأحداث`,absolute:`مطلق`,preset:`المسبقة`,current:`تيار`,previous:`السابق`,from:`من عند`,to:`إلى`,"+":`من الان`,"-":`منذ`,apply:`يتقدم`,$now:`الآن`,$minute:`دقيقة`,$hour:`ساعة`,$day:`يوم`,$week:`أسبوع`,$month:`شهر`,$quarter:`ربع`,$year:`عام`,$decade:`عقد`},Ge={$day:`اليوم`,$week:`هذا الاسبوع`,$month:`هذا الشهر`,$quarter:`هذا الربع`,$year:`هذه السنة`,$decade:`هذا العقد`},Ke={$day:`غدا`,$week:`الاسبوع القادم`,$month:`الشهر القادم`,$quarter:`الربع القادم`,$year:`العام القادم`,$decade:`العقد القادم`,$minute:`بعد دقيقة`,$hour:`بعد ساعة`,$minute_plural:`بعد {{count}} دقائق`,$hour_plural:`بعد {{count}} ساعات`,$day_plural:`بعد {{count}} أيام`,$week_plural:`بعد {{count}} أسابيع`,$month_plural:`بعد {{count}} أشهر`,$quarter_plural:`بعد {{count}} أرباع`,$year_plural:`بعد {{count}} سنوات`,$decade_plural:`بعد {{count}} عقود`},qe={$day:`في الامس`,$week:`الاسبوع الماضي`,$month:`الشهر الماضي`,$quarter:`الربع الأخير`,$year:`العام الماضي`,$decade:`العقد الماضي`,$minute:`منذ دقيقة`,$hour:`منذ ساعة`,$minute_plural:`منذ {{count}} دقيقة`,$hour_plural:`منذ {{count}} ساعات`,$day_plural:`منذ {{count}} أيام`,$week_plural:`من {{count}} اسابيع`,$month_plural:`قبل {{count}} أشهر`,$quarter_plural:`منذ {{count}} أرباع`,$year_plural:`منذ {{count}} سنوات`,$decade_plural:`منذ {{count}} عقود`},Je={separator:Ue,label:We,now:Ge,next:Ke,prev:qe}})),Xe,Ze,Qe,$e,et,tt,nt,rt=t((()=>{Xe=` ⇾ `,Ze={ramadan:`Ramadan`,christmas:`Christmas`,newYear:`New Year`},Qe={quick:`Quick Select`,relative:`Relative`,absolute:`Absolute`,events:`Events`,preset:`Presets`,current:`Current`,previous:`Previous`,from:`From`,to:`To`,"+":`From now`,"-":`Ago`,apply:`Apply`,$now:`Now`,$minute:`Minute`,$hour:`Hour`,$day:`Day`,$week:`Week`,$month:`Month`,$quarter:`Quarter`,$year:`Year`,$decade:`Decade`},$e={$day:`Today`,$week:`This week`,$month:`This month`,$quarter:`This quarter`,$year:`This year`,$decade:`This decade`},et={$day:`Tomorrow`,$week:`Next week`,$month:`Next month`,$quarter:`Next quarter`,$year:`Next year`,$decade:`Next decade`,$minute:`A minute later`,$hour:`An hour later`,$minute_other:`{{count}} minutes later`,$hour_other:`{{count}} hours later`,$day_other:`{{count}} days later`,$week_other:`{{count}} weeks later`,$month_other:`{{count}} months later`,$quarter_other:`{{count}} quarters later`,$year_other:`{{count}} years later`,$decade_other:`{{count}} decades later`},tt={$day:`Yesterday`,$week:`Last week`,$month:`Last month`,$quarter:`Last quarter`,$year:`Last year`,$decade:`Last decade`,$minute:`A minute ago`,$hour:`An hour ago`,$minute_other:`{{count}} minutes ago`,$hour_other:`{{count}} hours ago`,$day_other:`{{count}} days ago`,$week_other:`{{count}} weeks ago`,$month_other:`{{count}} months ago`,$quarter_other:`{{count}} quarters ago`,$year_other:`{{count}} years ago`,$decade_other:`{{count}} decades ago`},nt={separator:Xe,event:Ze,label:Qe,now:$e,next:et,prev:tt}})),it=t((()=>{A(),Ye(),rt(),ce(`superdate`,{en:nt,ar:Je})})),L,at,ot=t((()=>{A(),Le(),N(),a(),L=k(),at=function(e){var t=e.label,n=e.prefix,r=e.showApply,a=i(`superdate`).t;return(0,L.jsxs)(Ae,{label:t,className:`mb-2`,children:[(0,L.jsx)(F,{name:`${n}.diff`,children:(0,L.jsx)(ke,{width:`5rem`,min:1,max:99})}),(0,L.jsx)(F,{name:`${n}.part`,children:(0,L.jsx)(P,{options:Object.values(I).slice(1).map(function(e){return{id:e,label:a(`label.${e}`)}})})}),(0,L.jsx)(F,{name:`${n}.op`,children:(0,L.jsx)(P,{width:`7rem`,options:[{id:`-`,label:a(`label.-`)},{id:`+`,label:a(`label.+`)}]})}),r&&(0,L.jsx)(M,{variant:`solid`,color:`primary`,size:`sm`,type:`submit`,"data-dropdown-dismiss":`true`,children:a(`label.apply`)})]})}})),st,R,ct,lt,ut,dt=t((()=>{y(),Ie(),A(),Le(),N(),p(),st=e(n()),a(),ot(),R=k(),ct=[{value:`$day`,label:`superdate:now.$day`},{value:`$day-1`,label:`superdate:prev.$day`},{value:`$day+1`,label:`superdate:next.$day`},{value:`$week`,label:`superdate:now.$week`},{value:`$week-1`,label:`superdate:prev.$week`},{value:`$week+1`,label:`superdate:next.$week`},{value:`$month`,label:`superdate:now.$month`},{value:`$month-1`,label:`superdate:prev.$month`},{value:`$month+1`,label:`superdate:next.$month`},{value:`$quarter`,label:`superdate:now.$quarter`},{value:`$quarter-1`,label:`superdate:prev.$quarter`},{value:`$quarter+1`,label:`superdate:next.$quarter`},{value:`$year`,label:`superdate:now.$year`},{value:`$year-1`,label:`superdate:prev.$year`},{value:`$year+1`,label:`superdate:next.$year`}],lt=D({rel:D({diff:ne().required().label(`Difference`),op:w().required().oneOf([`+`,`-`]).label(`Operator`),part:w().required().oneOf(Object.values(I)).label(`Date part`)})}),ut=function(e){var t=e.presets,n=t===void 0?ct:t,r=e.value,a=r===void 0?``:r,o=e.onChange,s=i().t,c=(0,st.useCallback)(function(e){var t=e.rel,n=t.part,r=t.diff,i=t.op;o(`${n}${i}${r}|${I.NOW}`)},[]),l=(0,st.useMemo)(function(){if(a!=null&&a.endsWith(I.NOW)){var e=v(a.split(`|`).shift().match(/^(\$\w+)([+-])(\d+)?$/)??[],4),t=e[1],n=e[2],r=e[3];return{rel:{part:t,op:n,diff:r===void 0?`0`:r}}}},[a]);return(0,R.jsxs)(Ee,{children:[(0,R.jsx)(`div`,{className:`inline-block origin-left rtl:origin-right`,style:{zoom:.85},children:(0,R.jsx)(De,{resolver:ze(lt),onSubmit:c,defaultValues:l,children:(0,R.jsx)(at,{label:s(`superdate:label.relative`),prefix:`rel`,showApply:!0})})}),(0,R.jsx)(ge,{children:s(`superdate:label.preset`)}),(0,R.jsx)(`div`,{"data-dropdown-dismiss":`true`,className:`grid grid-cols-3 flex-row text-sm gap-2`,children:n.map(function(e){return(0,R.jsx)(`button`,{className:`link appearance-none text-start`,onClick:function(){return o?.(e.value)},children:s(e.label,{defaultValue:e.label})},e.value)})})]})}})),ft,z,pt,mt,ht=t((()=>{y(),Ie(),A(),Le(),N(),p(),ft=e(n()),a(),ot(),z=k(),pt=D({from:D({diff:ne().required().label(`Difference`),op:w().required().oneOf([`+`,`-`]).label(`Operator`),part:w().required().oneOf(Object.values(I)).label(`Date part`)}),to:D({diff:ne().required().label(`Difference`),op:w().required().oneOf([`+`,`-`]).label(`Operator`),part:w().required().oneOf(Object.values(I)).label(`Date part`)})}),mt=function(e){var t=e.value,n=t===void 0?``:t,r=e.onChange,a=i(`superdate`).t,o=(0,ft.useCallback)(function(e){var t=e.to,n=e.from;r(`${n.part}${n.op}${n.diff}|${t.part}${t.op}${t.diff}`)},[]),s=(0,ft.useMemo)(function(){if(n!=null&&n.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)){var e=v(n.split(`|`).shift().match(/^(\$\w+)([+-])(\d+)?$/)??[],4),t=e[1],r=e[2],i=e[3],a=i===void 0?`0`:i,o=v(n.split(`|`).pop().match(/^(\$\w+)([+-])(\d+)?$/)??[],4),s=o[1],c=o[2],l=o[3];return{from:{part:t,op:r,diff:a},to:{part:s,op:c,diff:l===void 0?`0`:l}}}},[n]);return(0,z.jsx)(Ee,{children:(0,z.jsx)(`div`,{className:`scale-90`,children:(0,z.jsxs)(De,{resolver:ze(pt),defaultValues:s,onSubmit:o,children:[(0,z.jsx)(at,{label:a(`label.from`),prefix:`from`}),(0,z.jsx)(at,{label:a(`label.to`),prefix:`to`}),(0,z.jsx)(`div`,{className:`flex justify-end`,children:(0,z.jsx)(M,{variant:`solid`,color:`primary`,size:`sm`,type:`submit`,"data-dropdown-dismiss":`true`,children:a(`label.apply`)})})]})})})}}));function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?gt(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var vt,B,V,yt,bt,xt,St=t((()=>{u(),b(),y(),S(),A(),Le(),vt=e(T()),B=e(n()),a(),dt(),ht(),V=k(),yt=[`as`,`color`,`size`,`variant`,`disabled`,`fullWidth`,`onChange`,`value`,`data-test-value`,`data-testid`],bt=function(e){var t=e.events,n=e.value,r=e.presets,a=e.recurringEvents,o=e.onChange,s=i(`superdate`).t,c=_(),l=ye(),u=l.currentCalendar,d=l.currentLocale,f=(0,B.useMemo)(function(){return u===`hijri`},[u]),p=v((0,B.useState)(``),2),m=p[0],h=p[1],g=v((0,B.useState)(`quick`),2),y=g[0],b=g[1];(0,B.useEffect)(function(){n!=null&&n.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/)?b(`relative`):n&&!(n!=null&&n.match(/^(\$\w+)/))?b(`absolute`):b(`quick`),n&&h(n)},[n]);var x=(0,B.useCallback)(function(e){var t,n,r,i,a=Be.parseRange(e);h(e),o?.(e,[(t=a[0])==null||(n=t.toISOString)==null?void 0:n.call(t),(r=a[1])==null||(i=r.toISOString)==null?void 0:i.call(r)]),c?.events.emit(`close`)},[f,d]);return(0,V.jsx)(`div`,{className:(0,vt.default)(`rounded-capped outline select-none overflow-hidden grid`,`fabric-superDate`),children:(0,V.jsxs)(fe,{headerClassName:`border-b`,onChange:b,activeTab:y,children:[(0,V.jsx)(me,{id:`quick`,label:s(`label.quick`),children:(0,V.jsx)(ut,{value:m,onChange:x,presets:r})}),(0,V.jsx)(me,{id:`relative`,label:s(`label.relative`),children:(0,V.jsx)(mt,{value:m,onChange:x})}),(0,V.jsx)(me,{id:`absolute`,label:s(`label.absolute`),children:(0,V.jsx)(Ee,{className:`p-0`,children:(0,V.jsx)(Fe,{withTime:!0,showHijriToggle:!0,value:m?Be.parseRange(m):void 0,showApply:!0,onChange:function(e){var t=v(e,2),n=t[0],r=t[1];return x?.(`${n}|${r}`)}})})}),(0,V.jsx)(me,{id:`events`,label:s(`label.events`),children:(0,V.jsx)(Re,{isHijri:f,onChange:x,events:t,recurringEvents:a})})]})})},xt=function(e){var t=e.as,n=t===void 0?`button`:t,r=e.color,i=r===void 0?`primary`:r,a=e.size,s=e.variant,c=e.disabled,l=e.fullWidth,u=e.onChange,d=e.value,f=e[`data-test-value`],p=e[`data-testid`],m=o(e,yt),h=ye(),g=h.currentCalendar,_=h.currentLocale,y=(0,B.useMemo)(function(){return g===`hijri`},[g]),b=v((0,B.useState)(),2),x=b[0],S=b[1];(0,B.useEffect)(function(){S(d)},[d]);var ee=(0,B.useCallback)(function(e){var t,n,r,i,a=Be.parseRange(e);S(e),u?.(e,[(t=a[0])==null||(n=t.toISOString)==null?void 0:n.call(t),(r=a[1])==null||(i=r.toISOString)==null?void 0:i.call(r)])},[y,_]),te=n===`button`?M:_e;return(0,V.jsxs)(ue,{showArrow:!0,children:[(0,V.jsx)(we,{content:Be.relativeTooltip(x,y),children:(0,V.jsx)(te,{icon:`icon-[mdi--clock-outline]`,size:a,color:i,disabled:c,fullWidth:l,variant:s,"data-test-value":f,"data-testid":p,children:Be.relativeLabel(x,y)??``})}),(0,V.jsx)(bt,_t(_t({},m),{},{value:x,onChange:ee}))]})}})),Ct=t((()=>{it(),St()})),wt,Tt,Et,Dt,Ot,kt,At=t((()=>{wt={add:`إضافة عامل تصفية`,all_filters:`جميع المرشحات`,apply:`يتقدم`,basicFilter:`الفلتر الأساسي`,cancel:`يلغي`,customQuery:`استعلام مخصص`,delete:`يمسح`,disable:`إبطال`,disableAll:`تعطيل الكل`,edit:`يحرر`,enable:`يُمكَِن`,enableAll:`تمكين الكل`,exclude:`استبعاد`,excludeAll:`استبعاد الكل`,field:`مجال`,filters:`المرشحات`,forAdvanced:`للمستخدمين المتقدمين فقط!`,include:`يشمل`,includeAll:`تضمين الكل`,invertAll:`عكس التضمين/الاستبعاد`,label:`ملصق`,operator:`المشغل`,optional:`خياري`,pin:`مثبت`,query:`استفسار`,refresh:`ينعش`,remove:`يزيل`,removeAll:`إزالة الكل`,toggleDisable:`عكس تعطيل/تمكين`,unpin:`غير مثبت`,update:`تحديث`,value:`قيمة`,view:`منظر`,matchAll:`تطابق كل شيء`,matchAny:`تطابق أي`},Tt={ALL:`كل`,ANY:`أي من`,BETWEEN:`بين هذا وذاك`,ENDS:`ينتهي مع`,EQ:`=`,EXISTS:`موجود`,GT:`>`,GTE:`≥`,IS:`يكون`,LIKE:`يحب`,LT:`<`,LTE:`≤`,STARTS:`ابدا ب`,WITHIN:`في غضون`},Et=`مصطلح البحث...`,Dt={BOOLEAN:`رقم`,DATE:`منطقي`,DATETIME:`تاريخ`,DECIMAL:`يطفو`,GEO:`GeoJSON`,NUMBER:`كثافة العمليات`,STRING:`سلسلة`},Ot={compare:`مقارنة الحقل المطلوب`,field:`حقل مطلوب`,label:`التصنيف مطلوب`,operator:`عامل مطلوب`,value:`القيمة المطلوبة`},kt={label:wt,operator:Tt,placeholder:Et,type:Dt,validate:Ot}})),jt,Mt,Nt,Pt,Ft,It,Lt=t((()=>{jt={add:`Add Filter`,all_filters:`All Filters`,apply:`Apply`,basicFilter:`Basic Filter`,cancel:`Cancel`,customQuery:`Custom Query`,delete:`Delete`,disable:`Disable`,disableAll:`Disable All`,edit:`Edit`,enable:`Enable`,enableAll:`Enable All`,exclude:`Exclude`,excludeAll:`Exclude All`,field:`Field`,filters:`Filters`,forAdvanced:`For advanced users only!`,include:`Include`,includeAll:`Include All`,invertAll:`Invert Include/Exclude`,label:`Label`,matchAll:`Match All`,matchAny:`Match Any`,operator:`Operator`,optional:`Optional`,pin:`Pinned`,query:`Query`,refresh:`Refresh`,remove:`Remove`,removeAll:`Remove All`,toggleDisable:`Invert Disable/Enable`,unpin:`Unpinned`,update:`Update`,value:`Value`,view:`View`},Mt={ALL:`All of`,ANY:`Any of`,BETWEEN:`Between`,ENDS:`Ends with`,EQ:`=`,EXISTS:`Exists`,GT:`>`,GTE:`≥`,IS:`Is`,LIKE:`Like`,LT:`<`,LTE:`≤`,STARTS:`Starts with`,WITHIN:`Within`},Nt=`Search term...`,Pt={BOOLEAN:`Bool`,DATE:`Date`,DATETIME:`Date Time`,DECIMAL:`Decimal`,GEO:`GeoJSON`,NUMBER:`Number`,STRING:`String`},Ft={compare:`Compare field required`,field:`Field required`,label:`Label required`,operator:`Operator required`,value:`Value required`},It={label:jt,operator:Mt,placeholder:Nt,type:Pt,validate:Ft}})),Rt=t((()=>{A(),At(),Lt(),ce(`searchbar`,{en:It,ar:kt})})),zt,Bt,Vt,Ht=t((()=>{zt=e(n()),Bt=(0,zt.createContext)({}),Vt=()=>(0,zt.useContext)(Bt)})),H,U,Ut,Wt=t((()=>{H=function(e){return e.ID=`ID`,e.STRING=`STRING`,e.TEXT=`TEXT`,e.NUMBER=`NUMBER`,e.DECIMAL=`DECIMAL`,e.BOOLEAN=`BOOLEAN`,e.DATE=`DATE`,e.DATETIME=`DATETIME`,e.NONE=`NONE`,e}({}),U=function(e){return e.EXISTS=`EXISTS`,e.IS=`IS`,e.ALL=`ALL`,e.ANY=`ANY`,e.EQ=`EQ`,e.LT=`LT`,e.GT=`GT`,e.LTE=`LTE`,e.GTE=`GTE`,e.LIKE=`LIKE`,e.STARTS=`STARTS`,e.ENDS=`ENDS`,e.WITHIN=`WITHIN`,e.BETWEEN=`BETWEEN`,e}({}),Ut={[H.ID]:[U.IS,U.ANY],[H.STRING]:[U.EXISTS,U.IS,U.ANY,U.ALL],[H.TEXT]:[U.EXISTS,U.LIKE,U.STARTS,U.ENDS],[H.NUMBER]:[U.EXISTS,U.EQ,U.BETWEEN,U.LT,U.GT,U.LTE,U.GTE],[H.DECIMAL]:[U.EXISTS,U.EQ,U.BETWEEN,U.LT,U.GT,U.LTE,U.GTE],[H.BOOLEAN]:[U.EXISTS,U.EQ],[H.DATE]:[U.EXISTS,U.EQ,U.BETWEEN,U.LT,U.GT,U.LTE,U.GTE],[H.DATETIME]:[U.EXISTS,U.EQ,U.BETWEEN,U.LT,U.GT,U.LTE,U.GTE],[H.NONE]:[U.EXISTS]},U.EXISTS,U.IS,U.ANY,U.ALL,U.BETWEEN,U.WITHIN,U.STARTS,U.ENDS,U.LIKE,U.EQ,U.LT,U.GT,U.LTE,U.GTE})),W,G,Gt,Kt,qt=t((()=>{S(),Ie(),A(),N(),p(),W=e(n()),a(),Wt(),Ht(),G=k(),Gt=new re({id:w().required(),field:w().required(),operator:w().required().oneOf(Object.values(U)),negate:E().optional(),label:w(),value:O().when(`operator`,{is:U.EXISTS,then:e=>e.optional(),otherwise:e=>e.required()}).when(`operator`,{is:U.ANY,then:e=>e.test({name:`array-check`,message:"${path} is a required field",test:(e=[])=>e?.length>0})}).when(`operator`,{is:U.ALL,then:e=>e.test({name:`array-check`,message:"${path} is a required field",test:(e=[])=>e?.length>0})}).when(`operator`,{is:U.BETWEEN,then:e=>e.test({name:`array-check`,message:"${path} is a required field",test:(e=[])=>e?.length>0&&e[0]&&e[1]})}).when(`operator`,{is:U.BETWEEN,then:e=>e.test({name:`array-check`,message:"${path} min max",test:(e=[])=>e?.length>0&&e[0]<e[1]})})}),Kt=({filter:e,onChange:t,onRemove:n})=>{let{t:r}=i(`searchbar`),a=_(),{fields:o=[]}=Vt(),s=(0,W.useRef)(null),c=(0,W.useRef)(null),[l,u]=(0,W.useState)(e);(0,W.useEffect)(()=>{e&&`field`in e&&e.field?c.current?.setValues(e):c.current?.setValues({id:f(),field:``,operator:U.EXISTS})},[e]),(0,W.useEffect)(()=>{setTimeout(()=>{s.current?.focus()},100)},[]);let d=(0,W.useMemo)(()=>{if(l?.field)return o.find(e=>e.field===l?.field)},[l]),p=(0,W.useMemo)(()=>d==null?[U.EXISTS]:(c.current?.setValue(`operator`,Ut[d.type][0]),[...Ut[d.type]]),[d]),m=(0,W.useMemo)(()=>{if(l?.operator===U.EXISTS&&l?.value!==void 0&&c.current?.setValue(`value`,void 0),d?.type===H.STRING&&([U.ALL,U.ANY].includes(l?.operator)?!C(l.value)&&c.current?.setValue(`value`,[]):C(l.value)&&c.current?.setValue(`value`,void 0)),(d?.type===H.DATE||d?.type===H.DATETIME||d?.type===H.NUMBER||d?.type===H.DECIMAL)&&(l?.operator===U.BETWEEN?!C(l.value)&&c.current?.setValue(`value`,[]):C(l.value)&&c.current?.setValue(`value`,void 0)),d?.type===H.BOOLEAN&&[U.IS,U.EQ].includes(l?.operator)&&l?.value===void 0&&c.current?.setValue(`value`,!1),d==null||!l?.operator||l?.operator===U.EXISTS)return null;if(d?.type===H.BOOLEAN)return(0,G.jsx)(Ae,{label:r(`label.value`),"data-plain":`true`,children:(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(Oe,{})})});if(d?.type===H.STRING||d?.type===H.ID)return[U.ALL,U.ANY].includes(l?.operator)?(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(P,{multiple:!0,searchable:!0,allowCreate:!0,allowClear:!0,options:d.values??[],label:r(`label.value`),onQuery:d.onSearch})}):d.onSearch||d.values?.length?(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(P,{searchable:!0,allowCreate:!0,allowClear:!0,options:d.values??[],label:r(`label.value`),onQuery:d.onSearch})}):(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(je,{label:r(`label.value`),allowClear:!0})});if(d.type===H.TEXT)return(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(Pe,{rows:3,label:r(`label.value`),allowClear:!0})});if(d?.type===H.DECIMAL||d?.type===H.NUMBER){let e=d.type===H.DECIMAL?.1:1;return l?.operator===U.BETWEEN?(0,G.jsx)(F,{name:`value`,children:(0,G.jsxs)(Ae,{label:r(`label.value`),children:[(0,G.jsx)(F,{name:`value[0]`,children:(0,G.jsx)(ke,{step:e,allowClear:!0})}),(0,G.jsx)(`span`,{className:`p-2 text-muted`,children:`≷`}),(0,G.jsx)(F,{name:`value[1]`,children:(0,G.jsx)(ke,{step:e,allowClear:!0})})]})}):(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(ke,{label:r(`label.value`),step:e,allowClear:!0})})}if(d?.type===H.DATE||d?.type===H.DATETIME){let e=d.type===H.DATETIME?`datetime`:`date`;return l?.operator===U.BETWEEN?(0,G.jsx)(F,{name:`value`,children:(0,G.jsxs)(Ae,{label:r(`label.value`),children:[(0,G.jsx)(F,{name:`value[0]`,children:(0,G.jsx)(Ne,{type:e,allowClear:!0})}),(0,G.jsx)(`span`,{className:`p-2 text-muted`,children:`≷`}),(0,G.jsx)(F,{name:`value[1]`,children:(0,G.jsx)(Ne,{type:e,allowClear:!0})})]})}):(0,G.jsx)(F,{name:`value`,children:(0,G.jsx)(Ne,{type:e,allowClear:!0})})}},[d,l?.operator]),h=(0,W.useCallback)(e=>{let n={id:e.id,field:e.field,negate:e.negate,operator:e.operator,value:e.value,label:e.label,type:d?.type};t?.(n),a?.events.emit(`close`)},[d,t]);return(0,G.jsx)(De,{formRef:c,resolver:ze(Gt),defaultValues:l,onChange:u,onSubmit:h,children:(0,G.jsxs)(`div`,{className:`w-lg`,children:[(0,G.jsxs)(le,{children:[(0,G.jsx)(se,{flex:`fill`,children:(0,G.jsx)(F,{name:`field`,children:(0,G.jsx)(P,{required:!0,searchable:!0,ref:s,label:r(`label.field`),options:o,labelProperty:`label`,valueProperty:`field`,groupProperty:`type`})})}),(0,G.jsxs)(se,{flex:`content`,className:`text-center`,children:[(0,G.jsx)(`label`,{className:`block py-0.5 text-sm`,children:r(`label.exclude`)}),(0,G.jsx)(F,{name:`negate`,children:(0,G.jsx)(Oe,{color:`danger`})})]}),(0,G.jsx)(se,{flex:`content`,className:`basis-28`,children:(0,G.jsx)(F,{name:`operator`,children:(0,G.jsx)(P,{label:r(`label.operator`),options:p,renderer:e=>r(`operator.${e}`)})})})]}),(0,G.jsx)(`br`,{}),m,(0,G.jsx)(`br`,{}),(0,G.jsx)(F,{name:`label`,children:(0,G.jsx)(je,{label:r(`label.label`),placeholder:r(`label.label`),decorateEnd:!e?.label&&(0,G.jsx)(`span`,{className:`text-sm opacity-65 pe-4`,children:`Optional`})})}),(0,G.jsxs)(`div`,{className:`flex mt-4 justify-end gap-1 sticky bottom-1 bg-default`,children:[n&&(0,G.jsx)(`div`,{className:`flex-1`,children:(0,G.jsx)(M,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,color:`danger`,onClick:n,children:r(`label.remove`)})}),(0,G.jsx)(M,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,children:r(`label.cancel`)}),(0,G.jsx)(M,{type:`submit`,variant:`solid`,size:`sm`,children:r(`label.apply`)})]})]})})},Kt.__docgenInfo={description:``,methods:[],displayName:`FilterForm`,props:{filter:{required:!1,tsType:{name:`intersection`,raw:`BaseFilter &
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
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}}));function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Jt(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Xt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Zt,K,Qt,$t,en=t((()=>{u(),h(),Ce(),y(),A(),p(),Zt=e(T()),Se(),K=e(n()),He(),Qt=k(),r.defineTheme(`my-light`,{base:`vs`,inherit:!0,rules:[],colors:{"minimap.background":`#8881`}}),r.defineTheme(`my-dark`,{base:`vs-dark`,inherit:!0,rules:[],colors:{"minimap.background":`#8881`}}),$t=function(e){var t=e.ref,n=e.value,r=e.schema,i=e.handlebarSuggestions,a=e.required,o=e.readOnly,l=e.minimal,u=e.onChange,d=e.language,f=d===void 0?`json`:d,p=v((0,K.useState)(),2),h=p[0],g=p[1],_=v((0,K.useState)(),2),y=_[0],b=_[1],x=ae(),S=v((0,K.useState)(``),2),ee=S[0],te=S[1];(0,K.useLayoutEffect)(function(){h&&te(x?`my-dark`:`my-light`)},[x,h]);var C=ie((0,K.useCallback)(function(e){return h?.layout(e)},[h])),w=(0,K.useDeferredValue)(n),T=(0,K.useMemo)(function(){return c(w)?w:JSON.stringify(w,null,4)},[w]),ne=pe(function(e){var t=h?.getModel();t&&(y?.editor.getModelMarkers({owner:t.getLanguageId()}))?.filter(function(e){return e.severity>7}).length===0&&u?.(e)},[u,h],1e3);(0,K.useImperativeHandle)(t,function(){return{addAction:h?.addAction.bind(h),addCommand:h?.addCommand.bind(h),executeCommand:h?.executeCommand.bind(h),setModel:h?.setModel.bind(h),focus:function(){h?.focus()},getValue:function(){return h?.getValue()},validate:function(){var e=h?.getModel();if(e)return(y?.editor.getModelMarkers({owner:e.getLanguageId()}))?.filter(function(e){return e.severity>8}).length===0;try{var t=h?.getValue();return f===`json`&&(t=JSON.parse(t??`{}`)),a?!m(t):!0}catch{return!1}}}},[a,f,h]);var E=(0,K.useRef)(null),D=(0,K.useCallback)(function(e){if(f===`json`&&r){var t,n=xe(r),a=n[0],o=Xt(n).slice(1);e==null||(t=e.json)==null||t.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[Yt({fileMatch:[`*`]},a)].concat(s(o))})}if(f===`html`&&i){var c,l;(c=E.current)==null||(l=c.dispose)==null||l.call(c),E.current=e.languages.registerCompletionItemProvider(`html`,{triggerCharacters:[`{{`],provideCompletionItems:function(t,n){if(!t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column}).match(/\{\{(.*)([^}])?$/))return{suggestions:[]};var r=t.getWordUntilPosition(n),a={startLineNumber:n.lineNumber,endLineNumber:n.lineNumber,startColumn:r.startColumn,endColumn:r.endColumn};return{suggestions:i.map(function(t){return{label:t.text,kind:e.languages.CompletionItemKind.Text,documentation:t.description,insertText:t.text,range:a}})}}})}},[r,f]),O=(0,K.useCallback)(function(e,t){var n;t==null||(n=t.json)==null||n.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[]})},[]);return(0,Qt.jsx)(oe,{className:`relative`,children:(0,Qt.jsx)(`div`,{ref:C,"data-ref":`codeEditor`,className:(0,Zt.default)(`fabric-codeEditor`,`absolute inset-0`),children:(0,Qt.jsx)(Ve,{editorDidMount:function(e,t){return[!!e&&g(e),!!t&&b(t)]},editorWillMount:D,editorWillUnmount:O,value:T,language:f,onChange:ne,theme:ee,className:`fabric-editor`,options:{readOnly:o,minimap:{enabled:!l},scrollBeyondLastLine:!1,folding:!l,lineNumbers:l?`off`:void 0,wordWrap:`on`,fontFamily:`Menlo, Monaco, "Courier New", monospace`}})})})}})),tn=t((()=>{en()})),nn,rn,q,an,on,sn=t((()=>{S(),Ie(),A(),N(),tn(),p(),nn=e(T()),rn=e(n()),a(),Ht(),q=k(),an=new re({id:w().required(),label:w().required(),query:w().required().test(e=>{try{return!m(JSON.parse(e))}catch{return!1}})}),on=({filter:e,onChange:t,onRemove:n})=>{let{t:r}=i(`searchbar`),a=_(),{defaultQuery:o=``,querySchema:s,queryLanguage:c}=Vt(),l=(0,rn.useRef)(null),u=(0,rn.useMemo)(()=>e&&`query`in e&&e.query?{id:e.id,query:JSON.stringify(JSON.parse(e.query??`{}`),null,4),label:e.label}:{id:f(),label:``,query:o},[e]);(0,rn.useEffect)(()=>{setTimeout(()=>{l.current?.focus()},100)},[]);let d=(0,rn.useCallback)(e=>{let n={id:e.id,query:e.query,label:e.label};t?.(n),a?.events.emit(`close`)},[t]);return(0,q.jsxs)(De,{resolver:ze(an),defaultValues:u,onSubmit:d,children:[(0,q.jsx)(be,{color:`warning`,children:`For advanced users only!`}),(0,q.jsx)(F,{name:`label`,children:(0,q.jsx)(je,{required:!0,ref:l,label:r(`label.label`),placeholder:r(`label.label`)})}),(0,q.jsx)(F,{name:`query`,children:({checked:e,error:t,invalid:n,ref:i,...a})=>(0,q.jsxs)(`div`,{className:`my-2`,children:[(0,q.jsx)(`label`,{className:(0,nn.default)(`block px-2`,n&&`text-danger-600`),children:r(`label.query`)}),(0,q.jsx)(`div`,{className:`h-96 w-xl grid outline place-content-start`,style:{gridTemplate:`"content" 1fr/1fr`},children:(0,q.jsx)($t,{language:c??`text`,minimal:!0,required:!0,...a,schema:s})})]})}),(0,q.jsxs)(`div`,{className:`flex mt-4 justify-end gap-1 sticky bottom-1 bg-default`,children:[n&&(0,q.jsx)(`div`,{className:`flex-1`,children:(0,q.jsx)(M,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,color:`danger`,onClick:n,children:r(`label.remove`)})}),(0,q.jsx)(M,{"data-dropdown-dismiss":`true`,variant:`link`,size:`sm`,children:r(`label.cancel`)}),(0,q.jsx)(M,{type:`submit`,variant:`solid`,size:`sm`,children:r(`label.apply`)})]})]})},on.__docgenInfo={description:``,methods:[],displayName:`QueryForm`,props:{filter:{required:!1,tsType:{name:`intersection`,raw:`BaseFilter &
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
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})),cn,ln,un,dn=t((()=>{p(),cn=e(n()),a(),Ht(),qt(),sn(),ln=k(),un=({filter:e,onRemove:t,onChange:n})=>{let{t:r}=i(`searchbar`),{fields:a}=Vt(),[o,s]=(0,cn.useState)(m(a));return(0,cn.useEffect)(()=>{s(!!e&&`query`in e)},[e]),(0,ln.jsxs)(`div`,{className:`px-2 py-1 bg-default outline min-w-[420px]`,children:[!m(a)&&(0,ln.jsx)(`div`,{className:`pb-4 flex justify-end`,children:(0,ln.jsx)(`span`,{role:`none`,className:`text-sm link`,onClick:()=>s(!o),children:r(o?`label.basicFilter`:`label.customQuery`)})}),!o&&(0,ln.jsx)(Kt,{filter:e,onRemove:t,onChange:n}),o&&(0,ln.jsx)(on,{filter:e,onRemove:t,onChange:n})]})},un.__docgenInfo={description:``,methods:[],displayName:`FilterEdit`,props:{filter:{required:!1,tsType:{name:`intersection`,raw:`BaseFilter &
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
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})),fn,J,pn,mn=t((()=>{A(),p(),fn=e(n()),a(),Wt(),J=k(),pn=({filter:e,onRemove:t})=>{let{t:n}=i(`searchbar`),r=(0,fn.useMemo)(()=>{if(`query`in e)return JSON.stringify(JSON.parse(e.query??`{}`),null,2);if(`field`in e){let t=e.value?.toString();return e.operator===U.BETWEEN&&C(e.value)&&(t=`[${e.value?.join(` - `)}]`),e.operator===U.ANY&&C(e.value)&&(t=`[${e.value?.join(`, `)}]`),e.operator===U.ALL&&C(e.value)&&(t=`(${e.value?.join(`, `)})`),(0,J.jsxs)(fn.Fragment,{children:[e.negate&&(0,J.jsx)(`b`,{children:`NOT\xA0`}),(0,J.jsx)(`span`,{children:e.field}),(0,J.jsxs)(`b`,{children:[`\xA0`,n(`operator.${e.operator}`),`\xA0`]}),(0,J.jsx)(`div`,{children:t})]})}return``},[e]);return(0,J.jsxs)(`div`,{className:`p-2 bg-default relative`,children:[`query`in e&&(0,J.jsx)(`div`,{className:`absolute top-2 end-2 z-10`,children:(0,J.jsx)(ve,{size:`sm`,text:r})}),(0,J.jsx)(`pre`,{className:`overflow-auto bg-default outline text-sm p-2 max-h-96 max-w-3xl min-w-[24rem]`,children:r}),!e.required&&(0,J.jsx)(M,{size:`sm`,variant:`link`,color:`danger`,"data-dropdown-dismiss":`true`,onClick:t,children:n(`label.remove`)})]})},pn.__docgenInfo={description:``,methods:[],displayName:`FilterView`,props:{filter:{required:!0,tsType:{name:`intersection`,raw:`BaseFilter &
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
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},description:``},onRemove:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),hn,Y,gn,_n,vn,yn=t((()=>{A(),hn=e(n()),a(),Wt(),dn(),mn(),Y=k(),gn=`M9,5C10.04,5 11.06,5.24 12,5.68C12.94,5.24 13.96,5 15,5A7,7 0 0,1 22,12A7,7 0 0,1 15,19C13.96,19 12.94,18.76 12,18.32C11.06,18.76 10.04,19 9,19A7,7 0 0,1 2,12A7,7 0 0,1 9,5M8.5,12C8.5,13.87 9.29,15.56 10.56,16.75L11.56,16.29C10.31,15.29 9.5,13.74 9.5,12C9.5,10.26 10.31,8.71 11.56,7.71L10.56,7.25C9.29,8.44 8.5,10.13 8.5,12M15.5,12C15.5,10.13 14.71,8.44 13.44,7.25L12.44,7.71C13.69,8.71 14.5,10.26 14.5,12C14.5,13.74 13.69,15.29 12.44,16.29L13.44,16.75C14.71,15.56 15.5,13.87 15.5,12Z`,_n=`M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z`,vn=({filter:e,fields:t,editable:n,onChange:r,onRemove:a})=>{let{t:o}=i(`searchbar`),[s,c]=(0,hn.useState)();return s===`edit`?(0,Y.jsx)(un,{filter:e,onChange:r,onRemove:a}):s===`view`?(0,Y.jsx)(pn,{filter:e,onRemove:a}):(0,Y.jsxs)(he,{className:`text-sm`,children:[n&&e.canEdit!==!1?(0,Y.jsx)(j,{icon:`icon-[mdi--lead-pencil]`,label:o(`label.edit`),"data-dropdown-dismiss":`false`,onClick:()=>{c(`edit`)}}):(0,Y.jsx)(j,{icon:`icon-[mdi--eye]`,label:o(`label.view`),"data-dropdown-dismiss":`false`,onClick:()=>{c(`view`)}}),(0,Y.jsx)(ge,{}),e.operator&&[U.ALL,U.ANY].includes(e.operator)&&(0,Y.jsx)(j,{label:o(e.operator===U.ALL?`label.matchAny`:`label.matchAll`),icon:o(e.operator===U.ALL?_n:gn),onClick:()=>r({...e,operator:e.operator===U.ALL?U.ANY:U.ALL})}),e.canPin!==!1&&(0,Y.jsx)(j,{label:o(e.pinned?`label.unpin`:`label.pin`),onClick:()=>r({...e,pinned:!e.pinned})}),e.canInvert!==!1&&e.field&&(0,Y.jsx)(j,{label:o(e.negate?`label.include`:`label.exclude`),onClick:()=>r({...e,negate:!e.negate})}),e.canDisable!==!1&&(0,Y.jsx)(j,{label:o(e.disabled?`label.enable`:`label.disable`),onClick:()=>r({...e,disabled:!e.disabled})}),!e.required&&(0,Y.jsx)(ge,{}),!e.required&&(0,Y.jsx)(j,{color:`danger`,icon:`icon-[mdi--minus-circle-outline]`,label:o(`label.remove`),onClick:()=>a()})]})},vn.__docgenInfo={description:``,methods:[],displayName:`FilterMenu`,props:{fields:{required:!1,tsType:{name:`Array`,elements:[{name:`FilterField`}],raw:`FilterField[]`},description:``},editable:{required:!1,tsType:{name:`boolean`},description:``},filter:{required:!0,tsType:{name:`intersection`,raw:`BaseFilter &
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
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``}}}})),bn,xn,X,Sn,Cn=t((()=>{A(),p(),bn=e(T()),xn=e(n()),a(),yn(),X=k(),Sn=({filter:e,fields:t,editable:n,includedColor:r=`primary-500`,excludedColor:a=`danger-500`,onChange:o,onRemove:s})=>{let{t:c}=i(`searchbar`),l=(0,xn.useMemo)(()=>e.label?(0,X.jsxs)(xn.Fragment,{children:[e.field&&e.negate&&(0,X.jsx)(`span`,{className:`font-semibold`,children:`NOT`}),(0,X.jsx)(`span`,{children:e.label})]}):(0,X.jsxs)(xn.Fragment,{children:[e.field&&e.negate&&(0,X.jsx)(`span`,{className:`font-semibold`,children:`NOT`}),(0,X.jsx)(`span`,{children:e.field}),(0,X.jsx)(`span`,{className:`font-semibold`,children:c(`operator.${e.operator}`,{defaultValue:e.operator})}),`value`in e&&!te(e.value)&&(0,X.jsx)(`span`,{className:`truncate block`,children:e.value?.toString().substring(0,24)})]}),[e]),u=(0,xn.useMemo)(()=>e.color??(e.field&&e.negate?a:r),[e,r,a]),d=(0,xn.useMemo)(()=>{if(e.canDisable!==!1)return e.disabled?`icon-[mdi--checkbox-blank-outline]`:`icon-[mdi--checkbox-marked]`},[e]);return(0,X.jsxs)(ue,{showArrow:!0,children:[(0,X.jsx)(_e,{size:`sm`,color:u,className:(0,bn.default)(`outline max-w-60`,e.disabled&&`opacity-65`),variant:e.pinned?`solid`:void 0,icon:d&&{icon:d,color:u},onIconClick:t=>[o({...e,disabled:!e.disabled}),t.stopPropagation()],"data-ref":`filterTag`,"data-test-value":e.id,stopPropagation:!0,onRemove:e.required?void 0:()=>s(),children:(0,X.jsxs)(`div`,{className:(0,bn.default)(`flex gap-1 items-center`,e.disabled&&`line-through opacity-65`),children:[e.pinned&&(0,X.jsx)(de,{className:`flex-content`,icon:e.icon??`icon-[mdi--pin]`}),(0,X.jsx)(`div`,{className:`truncate flex gap-x-0.5 flex-nowrap`,children:l})]})}),(0,X.jsx)(vn,{filter:e,fields:t,editable:n,onChange:o,onRemove:s})]})},Sn.__docgenInfo={description:``,methods:[],displayName:`FilterTag`,props:{filter:{required:!0,tsType:{name:`intersection`,raw:`BaseFilter &
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
)`,elements:[{name:`BaseFilter`},{name:`unknown`}]},name:`filter`}],return:{name:`void`}}},description:``},includedColor:{defaultValue:{value:`"primary-500"`,computed:!1},required:!1},excludedColor:{defaultValue:{value:`"danger-500"`,computed:!1},required:!1}}}})),wn,Tn,Z,En,Dn=t((()=>{A(),p(),wn=e(T()),Tn=e(n()),a(),Ht(),dn(),Cn(),Z=k(),En=({filters:e=[],allowAdd:t,fields:n,editable:r,querySchema:a,queryLanguage:o,defaultQuery:s,includedColor:c,excludedColor:l,onFilterChanged:u})=>{let{t:d}=i(`searchbar`),f=(0,Tn.useCallback)(t=>{let n=[...e];n.splice(t,1),u?.(n)},[e]),p=(0,Tn.useCallback)((t,n)=>{let r=[...e];te(n)?r.push(t):r.splice(n,1,t),u?.(r)},[e]),h=(0,Tn.useCallback)(t=>{let n=[];t===`removeAll`&&n.push(...e.filter(e=>e.required)),t!==`removeAll`&&n.push(...e.map(e=>(t===`disableAll`&&(e.disabled=!0),t===`enableAll`&&(e.disabled=!1),t===`toggleDisable`&&(e.disabled=!e.disabled),t===`excludeAll`&&e.field&&(e.negate=!0),t===`includeAll`&&e.field&&(e.negate=!1),t===`invertAll`&&e.field&&(e.negate=!e.negate),{...e}))),u?.(n)},[e]),g=(0,Tn.useMemo)(()=>{let t={someDisabled:!1,someEnabled:!1,someExcluded:!1,someIncluded:!1,canRemoveAll:!1};return e.forEach(e=>{e.disabled&&e.canDisable!==!1&&!t.someDisabled&&(t.someDisabled=!0),!e.disabled&&e.canDisable!==!1&&!t.someEnabled&&(t.someEnabled=!0),e.field&&e.negate&&e.canInvert!==!1&&!t.someExcluded&&(t.someExcluded=!0),e.field&&!e.negate&&e.canInvert!==!1&&!t.someIncluded&&(t.someIncluded=!0),!e.required&&!t.canRemoveAll&&(t.canRemoveAll=!0)}),t},[e]);return(0,Z.jsx)(Bt.Provider,{value:{defaultQuery:s,querySchema:a,queryLanguage:o,fields:n},children:(0,Z.jsxs)(`div`,{className:`flex flex-wrap gap-1 items-center`,children:[(0,Z.jsxs)(ue,{showArrow:!0,disabled:m(e),children:[(0,Z.jsx)(de,{icon:`icon-[mdi--cog-outline]`,className:(0,wn.default)(m(e)&&`pointer-events-none opacity-30`),color:m(e)?void 0:`primary`}),(0,Z.jsxs)(he,{className:`text-sm`,onClick:h,children:[g.someDisabled&&(0,Z.jsx)(j,{id:`enableAll`,label:d(`label.enableAll`)}),g.someEnabled&&(0,Z.jsx)(j,{id:`disableAll`,label:d(`label.disableAll`)}),(0,Z.jsx)(j,{icon:`icon-[mdi--checkbox-intermediate-variant]`,id:`toggleDisable`,label:d(`label.toggleDisable`)}),(0,Z.jsx)(ge,{}),g.someExcluded&&(0,Z.jsx)(j,{id:`includeAll`,label:d(`label.includeAll`)}),g.someIncluded&&(0,Z.jsx)(j,{id:`excludeAll`,label:d(`label.excludeAll`)}),(0,Z.jsx)(j,{id:`invertAll`,icon:`icon-[mdi--set-left]`,label:d(`label.invertAll`)}),(0,Z.jsx)(ge,{}),(0,Z.jsx)(j,{id:`removeAll`,color:`danger`,icon:`icon-[mdi--minus-circle-outline]`,label:d(`label.removeAll`),disabled:!g.canRemoveAll})]})]}),e?.map((e,t)=>(0,Z.jsx)(Sn,{filter:e,editable:r,includedColor:c,excludedColor:l,onRemove:()=>f(t),onChange:e=>p(e,t)},t)),t&&(0,Z.jsxs)(ue,{showArrow:!0,children:[(0,Z.jsx)(_e,{size:`sm`,className:`outline-dashed! outline-tint-400!`,icon:`icon-[mdi--plus-circle-outline]`,children:d(`label.add`)}),(0,Z.jsx)(un,{onChange:p})]})]})})},En.__docgenInfo={description:`FilterBar component allows users to manage a list of filters.
It provides options to add, remove, and modify filters,
as well as to enable or disable all filters at once.
It also supports toggling between included and excluded filters.

@param {FilterBarProps} props - The properties for the FilterBar component.
@returns {React.ReactElement} The rendered FilterBar component.

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
\`\`\`
@see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/searchbar-searchbar--search-bar} for more details on the properties.`,methods:[],displayName:`FilterBar`,props:{filters:{required:!1,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`BaseFilter &
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
@param filters`}}}})),On,Q,kn,An=t((()=>{A(),N(),p(),On=e(n()),a(),Dn(),Q=k(),kn=({historyKey:e=`ruf:search`,historyCount:t=20,defaultQueryList:n,prepend:r,append:a,decorateEnd:o,decorateStart:s,children:c,hideFilters:u,defaultCollapsed:d=!1,disabled:f,onCollapsed:p,onQuery:m,onSearch:h,query:g,ref:_,multiple:v,filters:y=l,...b})=>{let{t:S}=i(`searchbar`),[ee,te]=Te(e,n??[]),[w,T]=(0,On.useState)(d),ne=(0,On.useMemo)(()=>v?l:``,[v]),E=pe((e,t)=>{O({type:`dirty`,dirty:!1}),h?.({query:e,filters:t})},[]),[D,O]=(0,On.useReducer)((e,t)=>t.type===`reset`?{...e,dirty:!1,query:t.query,filters:t.filters}:t.type===`dirty`?{...e,dirty:t.dirty}:t.type===`query`?(!v&&E(t.query??ne,e.filters),{...e,dirty:!!v,query:t.query??ne}):t.type===`filter`?(E(e.query,t.filters??[]),{...e,dirty:!1,filters:t.filters??[]}):e,{dirty:!1,query:g,filters:y});(0,On.useEffect)(()=>{O({type:`reset`,filters:y,query:g})},[y,g]);let re=e=>{te(x([...C(e)?e:[e],...ee]).slice(0,t)),O({type:`query`,query:e})},k=(e=[])=>{O({type:`filter`,filters:e})};return(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`div`,{className:`flex flex-nowrap gap-1 mb-1`,children:[(0,Q.jsxs)(Ae,{"data-inner":!0,className:`flex-1`,children:[!u&&(0,Q.jsx)(M,{variant:`link`,badge:y.length,onClick:()=>T(!w),children:S(`label.filters`)}),r,(0,Q.jsx)(Me,{allowClear:!0,expandOnEdit:!0,ref:_,multiple:v,history:ee,value:D.query,decorateEnd:o,decorateStart:s,onInput:()=>O({type:`dirty`,dirty:!v}),onSelect:re,"data-ref":`searchbarInput`,onEnterPressed:()=>E(D.query,D.filters)}),a,(0,Q.jsx)(M,{variant:`solid`,color:D.dirty?`warning`:`primary`,onClick:()=>E(D.query,D.filters),children:S(D.dirty?`label.update`:`label.refresh`)})]}),c]}),!u&&!w&&(0,Q.jsx)(En,{...b,filters:D.filters,onFilterChanged:k})]})},kn.__docgenInfo={description:`This component provides a search input with autocomplete functionality,
a button to trigger search, and an optional filter bar.
It supports history of search queries, multiple selection, and custom decorations.
It can be collapsed to hide filters and has options for customization.

@param {SearchBarProps} props - The properties for the SearchBar component.
@returns {React.ReactElement} The rendered SearchBar component.

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
\`\`\`

@see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/searchbar-searchbar--search-bar} for more details on the properties.`,methods:[],displayName:`SearchBar`,props:{query:{required:!1,tsType:{name:`AnyObject`},description:`Query string`},historyCount:{required:!1,tsType:{name:`number`},description:`Search history count
@default 20`,defaultValue:{value:`20`,computed:!1}},historyKey:{required:!1,tsType:{name:`string`},description:`Search history storage key
@default: "ax:search"`,defaultValue:{value:`"ruf:search"`,computed:!1}},defaultQueryList:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Default query items for suggest`},prepend:{required:!1,tsType:{name:`ReactElement`},description:`Add-on before search input`},append:{required:!1,tsType:{name:`ReactElement`},description:`Add-on after search input`},hideFilters:{required:!1,tsType:{name:`boolean`},description:`Hide filter bar`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable component`},defaultCollapsed:{required:!1,tsType:{name:`boolean`},description:`Collapse filters
@default true`,defaultValue:{value:`false`,computed:!1}},decorateStart:{required:!1,tsType:{name:`union`,raw:`React.ReactElement | string | number | boolean`,elements:[{name:`ReactReactElement`,raw:`React.ReactElement`},{name:`string`},{name:`number`},{name:`boolean`}]},description:``},decorateEnd:{required:!1,tsType:{name:`union`,raw:`React.ReactElement | string | number | boolean`,elements:[{name:`ReactReactElement`,raw:`React.ReactElement`},{name:`string`},{name:`number`},{name:`boolean`}]},description:``},onCollapsed:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(collapsed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`collapsed`}],return:{name:`void`}}},description:`On filter collapsed
@param collapsed`},onQuery:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(query: string) => Promise<string[]> | string[]`,signature:{arguments:[{type:{name:`string`},name:`query`}],return:{name:`union`,raw:`Promise<string[]> | string[]`,elements:[{name:`Promise`,elements:[{name:`Array`,elements:[{name:`string`}],raw:`string[]`}],raw:`Promise<string[]>`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]}}},description:`On query string change event
@param query`},filters:{defaultValue:{value:`EMPTY_ARRAY`,computed:!0},required:!1}},composes:[`Partial`,`RefProp`]}})),jn=t((()=>{Rt(),Dn(),An(),Wt()})),$,Mn,Nn,Pn,Fn,In;t((()=>{A(),Ct(),p(),jn(),$=k(),{fn:Mn}=__STORYBOOK_MODULE_TEST__,Nn={component:kn,title:`@searchbar/SearchBar`,parameters:{layout:`padded`,jest:[`searchbar/tests/SearchBar.test.tsx`]}},Pn=[{uri:`http://react-fabric/schema.json`,schema:{type:`object`,$ref:`http://react-fabric/base-schema.json`}},{uri:`http://react-fabric/base-schema.json`,schema:{type:`object`,properties:{bool:{$ref:`http://react-fabric/bool-schema.json`},exists:{$ref:`http://react-fabric/exists-schema.json`},query_string:{$ref:`http://react-fabric/query-schema.json`}}}},{uri:`http://react-fabric/exists-schema.json`,schema:{type:`object`,properties:{field:{type:`string`}},required:[`field`]}},{uri:`http://react-fabric/query-schema.json`,schema:{type:`object`,properties:{fields:{type:`array`,items:{type:`string`},minItems:1,uniqueItems:!0},query:{type:`string`}},required:[`query`]}},{uri:`http://react-fabric/bool-schema.json`,schema:{type:`object`,properties:{filter:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},must:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},should:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},must_not:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},should_not:{type:`array`,items:{$ref:`http://react-fabric/base-schema.json`}},minimum_should_match:{type:`number`}}}}],Fn={render:e=>(0,$.jsx)(kn,{...e,append:(0,$.jsx)(xt,{variant:`link`,value:`$year-5|$now`}),children:(0,$.jsxs)(ue,{placement:`bottom-end`,children:[(0,$.jsx)(M,{icon:`icon-[mdi--menu]`,"aria-label":`menu`,variant:`link`}),(0,$.jsxs)(he,{className:`text-sm`,children:[(0,$.jsx)(j,{label:`Open`}),(0,$.jsx)(j,{label:`Save`}),(0,$.jsx)(ge,{}),(0,$.jsx)(j,{label:`Share`})]})]})}),args:{allowAdd:!0,excludedColor:`#f00`,query:`test AND query`,querySchema:Pn,queryLanguage:`json`,defaultQuery:`{
	
}`,editable:!0,onSearch:Mn(),fields:[{field:`id`,label:`ID`,type:H.ID},{field:`name`,label:`Name`,type:H.STRING},{field:`notes`,label:`Notes`,type:H.TEXT},{field:`age`,label:`Age`,type:H.NUMBER},{field:`dob`,label:`DOB`,type:H.DATE},{field:`extras`,label:`Extras`,type:H.NONE},{field:`country`,label:`Country`,type:H.STRING,onSearch(e){return new Promise(t=>{setTimeout(()=>{t(ee.list.filter(t=>g(t.name.common,e)||g(t.name.official,e)).map(e=>e.name.common))},1e3)})}}],filters:[{id:f(),field:`name`,operator:U.IS,value:`Smeghead`,pinned:!0,canPin:!1,canDisable:!1,required:!0,canEdit:!1,color:`lilac`,icon:`mdi mdi-tray-full`},{id:f(),field:`name`,operator:U.IS,value:`Smeghead`},{id:f(),field:`name`,negate:!0,operator:U.IS,value:`Smeghead`,label:`New filter`},{id:f(),query:JSON.stringify({query:`test`}),label:`Query filter`}]}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
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
}`,...Fn.parameters?.docs?.source}}},In=[`_SearchBar`]}))();export{Fn as _SearchBar,In as __namedExportsOrder,Nn as default};