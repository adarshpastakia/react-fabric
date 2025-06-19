import{aS as C,j as e,r as i,aT as j,aV as g,aW as A,m as re}from"./iframe-DL5PLccW.js";import{b as ne,C as se}from"./index-DPKHNOa8.js";import{M as le,a as I}from"./Menu-CcUoW62j.js";import{a as S,D as x}from"./Google-B5-g4RDV.js";import{D as F}from"./DateDisplay-DV58skfQ.js";import{u as oe}from"./floating-ui.react-CT9AAP4P.js";import{D as ie}from"./Dropdown-BkPoAgTO.js";import{B as R}from"./Button-B4MR9BdT.js";import{u as Z}from"./Global-Dhvrkiym.js";import{C as ue}from"./BasePanel-CXQucVik.js";import{T as de}from"./Tooltip-BPKa3gaw.js";import{F as pe,C as E,N as ce,S as z,a as ee,T as me,b as D,R as $e,E as he}from"./Select-BO2EkAL7.js";import{C as M}from"./Content-BWk5dK7X.js";import{D as ye}from"./Divider-DeNf5KPC.js";import"./ColorPicker-Cc5ydKIF.js";import{b as H,c as Y,d as B}from"./zh-CN-FY2s-MwU.js";const ve=" ⇽ ",be={quick:"حدد مسرعا",relative:"نسبيا",events:"الأحداث",absolute:"مطلق",preset:"المسبقة",current:"تيار",previous:"السابق",from:"من عند",to:"إلى","+":"من الان","-":"منذ",apply:"يتقدم",$now:"الآن",$minute:"دقيقة",$hour:"ساعة",$day:"يوم",$week:"أسبوع",$month:"شهر",$quarter:"ربع",$year:"عام",$decade:"عقد"},fe={$day:"اليوم",$week:"هذا الاسبوع",$month:"هذا الشهر",$quarter:"هذا الربع",$year:"هذه السنة",$decade:"هذا العقد"},we={$day:"غدا",$week:"الاسبوع القادم",$month:"الشهر القادم",$quarter:"الربع القادم",$year:"العام القادم",$decade:"العقد القادم",$minute:"بعد دقيقة",$hour:"بعد ساعة",$minute_plural:"بعد {{count}} دقائق",$hour_plural:"بعد {{count}} ساعات",$day_plural:"بعد {{count}} أيام",$week_plural:"بعد {{count}} أسابيع",$month_plural:"بعد {{count}} أشهر",$quarter_plural:"بعد {{count}} أرباع",$year_plural:"بعد {{count}} سنوات",$decade_plural:"بعد {{count}} عقود"},ge={$day:"في الامس",$week:"الاسبوع الماضي",$month:"الشهر الماضي",$quarter:"الربع الأخير",$year:"العام الماضي",$decade:"العقد الماضي",$minute:"منذ دقيقة",$hour:"منذ ساعة",$minute_plural:"منذ {{count}} دقيقة",$hour_plural:"منذ {{count}} ساعات",$day_plural:"منذ {{count}} أيام",$week_plural:"من {{count}} اسابيع",$month_plural:"قبل {{count}} أشهر",$quarter_plural:"منذ {{count}} أرباع",$year_plural:"منذ {{count}} سنوات",$decade_plural:"منذ {{count}} عقود"},xe={separator:ve,label:be,now:fe,next:we,prev:ge},Se=" ⇾ ",ke={ramadan:"Ramadan",christmas:"Christmas",newYear:"New Year"},qe={quick:"Quick Select",relative:"Relative",absolute:"Absolute",events:"Events",preset:"Presets",current:"Current",previous:"Previous",from:"From",to:"To","+":"From now","-":"Ago",apply:"Apply",$now:"Now",$minute:"Minute",$hour:"Hour",$day:"Day",$week:"Week",$month:"Month",$quarter:"Quarter",$year:"Year",$decade:"Decade"},Te={$day:"Today",$week:"This week",$month:"This month",$quarter:"This quarter",$year:"This year",$decade:"This decade"},je={$day:"Tomorrow",$week:"Next week",$month:"Next month",$quarter:"Next quarter",$year:"Next year",$decade:"Next decade",$minute:"A minute later",$hour:"An hour later",$minute_other:"{{count}} minutes later",$hour_other:"{{count}} hours later",$day_other:"{{count}} days later",$week_other:"{{count}} weeks later",$month_other:"{{count}} months later",$quarter_other:"{{count}} quarters later",$year_other:"{{count}} years later",$decade_other:"{{count}} decades later"},_e={$day:"Yesterday",$week:"Last week",$month:"Last month",$quarter:"Last quarter",$year:"Last year",$decade:"Last decade",$minute:"A minute ago",$hour:"An hour ago",$minute_other:"{{count}} minutes ago",$hour_other:"{{count}} hours ago",$day_other:"{{count}} days ago",$week_other:"{{count}} weeks ago",$month_other:"{{count}} months ago",$quarter_other:"{{count}} quarters ago",$year_other:"{{count}} years ago",$decade_other:"{{count}} decades ago"},De={separator:Se,event:ke,label:qe,now:Te,next:je,prev:_e};ne("superdate",{en:De,ar:xe});const O=({label:n,prefix:a,showApply:s})=>{const{t:o}=C("superdate");return e.jsxs(pe,{label:n,className:"mb-2",children:[e.jsx(E,{name:`${a}.diff`,children:e.jsx(ce,{width:"5rem",min:1,max:99})}),e.jsx(E,{name:`${a}.part`,children:e.jsx(z,{width:"6rem",options:Object.values(S).slice(1).map(t=>({id:t,label:o(`label.${t}`)}))})}),e.jsx(E,{name:`${a}.op`,children:e.jsx(z,{width:"7rem",options:[{id:"-",label:o("label.-")},{id:"+",label:o("label.+")}]})}),s&&e.jsx(R,{variant:"solid",type:"submit",children:o("label.apply")})]})};O.__docgenInfo={description:"",methods:[],displayName:"RelativeInput"};const Oe=[{value:"$day",label:"superdate:now.$day"},{value:"$day-1",label:"superdate:prev.$day"},{value:"$day+1",label:"superdate:next.$day"},{value:"$week",label:"superdate:now.$week"},{value:"$week-1",label:"superdate:prev.$week"},{value:"$week+1",label:"superdate:next.$week"},{value:"$month",label:"superdate:now.$month"},{value:"$month-1",label:"superdate:prev.$month"},{value:"$month+1",label:"superdate:next.$month"},{value:"$quarter",label:"superdate:now.$quarter"},{value:"$quarter-1",label:"superdate:prev.$quarter"},{value:"$quarter+1",label:"superdate:next.$quarter"},{value:"$year",label:"superdate:now.$year"},{value:"$year-1",label:"superdate:prev.$year"},{value:"$year+1",label:"superdate:next.$year"}],Ce=j({rel:j({diff:A().required().label("Difference"),op:g().required().oneOf(["+","-"]).label("Operator"),part:g().required().oneOf(Object.values(S)).label("Date part")})}),ae=({presets:n=Oe,value:a="",onChange:s})=>{const{t:o}=C(),t=i.useCallback(({rel:{part:r,diff:u,op:p}})=>{s(`${r}${p}${u}|${S.NOW}`)},[]),l=i.useMemo(()=>{if(a!=null&&a.endsWith(S.NOW)){const[,r,u,p="0"]=a.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/)??[];return{rel:{part:r,op:u,diff:p}}}},[a]);return e.jsxs(M,{children:[e.jsx("div",{className:"inline-block origin-left rtl:origin-right",style:{zoom:.85},children:e.jsx(ee,{schema:Ce,onSubmit:t,defaultValues:l,children:e.jsx(O,{label:o("superdate:label.relative"),prefix:"rel",showApply:!0})})}),e.jsx(ye,{children:o("superdate:label.preset")}),e.jsx("div",{className:"grid grid-cols-3 flex-row text-sm gap-2",children:n.map(r=>e.jsx("button",{className:"link appearance-none text-start",onClick:()=>s==null?void 0:s(r.value),children:o(r.label,{defaultValue:r.label})},r.value))})]})};ae.__docgenInfo={description:"",methods:[],displayName:"QuickSelect",props:{presets:{defaultValue:{value:`[
  { value: "$day", label: "superdate:now.$day" },
  { value: "$day-1", label: "superdate:prev.$day" },
  { value: "$day+1", label: "superdate:next.$day" },
  { value: "$week", label: "superdate:now.$week" },
  { value: "$week-1", label: "superdate:prev.$week" },
  { value: "$week+1", label: "superdate:next.$week" },
  { value: "$month", label: "superdate:now.$month" },
  { value: "$month-1", label: "superdate:prev.$month" },
  { value: "$month+1", label: "superdate:next.$month" },
  { value: "$quarter", label: "superdate:now.$quarter" },
  { value: "$quarter-1", label: "superdate:prev.$quarter" },
  { value: "$quarter+1", label: "superdate:next.$quarter" },
  { value: "$year", label: "superdate:now.$year" },
  { value: "$year-1", label: "superdate:prev.$year" },
  { value: "$year+1", label: "superdate:next.$year" },
]`,computed:!1},required:!1},value:{defaultValue:{value:'""',computed:!1},required:!1}}};const Ne=j({from:j({diff:A().required().label("Difference"),op:g().required().oneOf(["+","-"]).label("Operator"),part:g().required().oneOf(Object.values(S)).label("Date part")}),to:j({diff:A().required().label("Difference"),op:g().required().oneOf(["+","-"]).label("Operator"),part:g().required().oneOf(Object.values(S)).label("Date part")})}),te=({value:n="",onChange:a})=>{const{t:s}=C("superdate"),o=i.useCallback(({to:l,from:r})=>{a(`${r.part}${r.op}${r.diff}|${l.part}${l.op}${l.diff}`)},[]),t=i.useMemo(()=>{if(n!=null&&n.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)){const[,l,r,u="0"]=n.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/)??[],[,p,v,c="0"]=n.split("|").pop().match(/^(\$\w+)([+-])(\d+)?$/)??[];return{from:{part:l,op:r,diff:u},to:{part:p,op:v,diff:c}}}},[n]);return e.jsx(M,{children:e.jsx("div",{className:"scale-90",children:e.jsxs(ee,{schema:Ne,defaultValues:t,onSubmit:o,children:[e.jsx(O,{label:s("label.from"),prefix:"from"}),e.jsx(O,{label:s("label.to"),prefix:"to"}),e.jsx("div",{className:"flex justify-end",children:e.jsx(R,{variant:"solid",type:"submit",children:s("label.apply")})})]})})})};te.__docgenInfo={description:"",methods:[],displayName:"RelativePanel",props:{value:{defaultValue:{value:'""',computed:!1},required:!1}}};const P=({events:n,value:a,presets:s,recurringEvents:o,onChange:t})=>{const{t:l}=C("superdate"),r=oe(),{currentCalendar:u,currentLocale:p}=Z(),v=i.useMemo(()=>u==="hijri",[u]),[c,k]=i.useState(""),[N,m]=i.useState("quick");i.useEffect(()=>{a!=null&&a.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/)?m("relative"):a&&!(a!=null&&a.match(/^(\$\w+)/))?m("absolute"):m("quick"),a&&k(a)},[a]);const d=i.useCallback($=>{var f,w,h,y;const b=x.parseRange($);k($),t==null||t($,[(w=(f=b[0])==null?void 0:f.toISOString)==null?void 0:w.call(f),(y=(h=b[1])==null?void 0:h.toISOString)==null?void 0:y.call(h)]),r==null||r.events.emit("close")},[v,p]);return e.jsx("div",{className:re("rounded-capped outline select-none overflow-hidden grid","fabric-superDate"),children:e.jsxs(me,{headerClassName:"border-b",onChange:m,activeTab:N,children:[e.jsx(D,{id:"quick",label:l("label.quick"),children:e.jsx(ae,{value:c,onChange:d,presets:s})}),e.jsx(D,{id:"relative",label:l("label.relative"),children:e.jsx(te,{value:c,onChange:d})}),e.jsx(D,{id:"absolute",label:l("label.absolute"),children:e.jsx(M,{className:"p-0",children:e.jsx($e,{withTime:!0,showHijriToggle:!0,value:c?x.parseRange(c):void 0,showApply:!0,onChange:([$,b])=>d==null?void 0:d(`${$}|${b}`)})})}),e.jsx(D,{id:"events",label:l("label.events"),children:e.jsx(he,{isHijri:v,onChange:d,events:n,recurringEvents:o})})]})})},V=({as:n="button",color:a="primary",size:s,variant:o,disabled:t,fullWidth:l,onChange:r,value:u,"data-test-value":p,"data-testid":v,...c})=>{const{currentCalendar:k,currentLocale:N}=Z(),m=i.useMemo(()=>k==="hijri",[k]),[d,$]=i.useState();i.useEffect(()=>{$(u)},[u]);const b=i.useCallback(w=>{var y,L,_,W;const h=x.parseRange(w);$(w),r==null||r(w,[(L=(y=h[0])==null?void 0:y.toISOString)==null?void 0:L.call(y),(W=(_=h[1])==null?void 0:_.toISOString)==null?void 0:W.call(_)])},[m,N]),f=n==="button"?R:ue;return e.jsxs(ie,{showArrow:!0,children:[e.jsx(de,{content:x.relativeTooltip(d,m),children:e.jsx(f,{icon:se.clock,size:s,color:a,disabled:t,fullWidth:l,variant:o,"data-test-value":p,"data-testid":v,children:x.relativeLabel(d,m)??""})}),e.jsx(P,{...c,value:d,onChange:b})]})};P.__docgenInfo={description:"",methods:[],displayName:"SuperDateTabs",props:{as:{required:!1,tsType:{name:"union",raw:'"button" | "chip"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"chip"'}]},description:""},color:{required:!1,tsType:{name:"ColorState"},description:""},size:{required:!1,tsType:{name:"SizeType"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "link"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"link"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:"relative date value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, dates: [string, string]) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},name:"dates"}],return:{name:"void"}}},description:"change handler"},events:{required:!1,tsType:{name:"Array",elements:[{name:"EventType"}],raw:"EventType[]"},description:"list of calendar events"},recurringEvents:{required:!1,tsType:{name:"Array",elements:[{name:"EventType"}],raw:"EventType[]"},description:"list of calendar events"},presets:{required:!1,tsType:{name:"Array",elements:[{name:"PresetType"}],raw:"PresetType[]"},description:`list of relative presets

{value:'$year-5|$year', label:'last 5 years'}`}},composes:["TestProps"]};V.__docgenInfo={description:`SuperDate component provides a date selection interface with quick, relative, and absolute date options.
It allows users to select dates using predefined presets, relative date calculations, or absolute date ranges.
It can be used in various applications where date selection is required, such as event scheduling, calendar applications, and date filtering.
The component supports both Gregorian and Hijri calendars, and it can display relative date labels and tooltips based on the selected calendar.
It is designed to be used as a button or a chip, depending on the \`as\` prop.
It also supports event selection and recurring events.

Date Keys:
- \`$now\`: Current date and time.
- \`$decade\`: Current decade.
- \`$year\`: Current year.
- \`$quarter\`: Current quarter.
- \`$month\`: Current month.
- \`$week\`: Current week.
- \`$day\`: Current day.
- \`$hour\`: Current hour.
- \`$minute\`: Current minute.

Relative Date Format:
- \`$now+1|$now+2\`: Represents a range from one day after now to two days after now.
- \`$now-1|$now+1\`: Represents a range from one day before now to one day after now.
- \`$week|$now\`: Represents the current week starting from the beginning of the week to now.
- \`$month|$week\`: Represents the current month starting from the beginning of the month to the end of current week.

@param {SuperDateProps} props - The properties for the SuperDate component.
@returns {JSX.Element} The rendered SuperDate component.

@example
\`\`\`jsx
<SuperDate
  as="button"
  color="primary"
  size="medium"
  variant="filled"
  disabled={false}
  fullWidth={true}
  onChange={(value, range) => console.log("Selected date:", value, range)}
  value="$now+1|$now+2"
  data-test-value="superdate-value"
  data-testid="superdate"
/>
\`\`\`

@see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/superdate-superdate--docs}`,methods:[],displayName:"SuperDate",props:{as:{required:!1,tsType:{name:"union",raw:'"button" | "chip"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"chip"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},color:{required:!1,tsType:{name:"ColorState"},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"SizeType"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "link"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"link"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:"relative date value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, dates: [string, string]) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},name:"dates"}],return:{name:"void"}}},description:"change handler"},events:{required:!1,tsType:{name:"Array",elements:[{name:"EventType"}],raw:"EventType[]"},description:"list of calendar events"},recurringEvents:{required:!1,tsType:{name:"Array",elements:[{name:"EventType"}],raw:"EventType[]"},description:"list of calendar events"},presets:{required:!1,tsType:{name:"Array",elements:[{name:"PresetType"}],raw:"PresetType[]"},description:`list of relative presets

{value:'$year-5|$year', label:'last 5 years'}`}},composes:["TestProps"]};const{action:Ie}=__STORYBOOK_MODULE_ACTIONS__,Ee={component:V,title:"@superdate/Superdate",parameters:{layout:"centered",controls:{exclude:"children"}}},q={render:n=>e.jsx(V,{...n}),args:{value:"$year-2|$now",recurringEvents:[{label:"National Day",start:"2000-11-30",end:"2000-12-03"}],presets:[{value:"$year-2|$now",label:"Last 2 years"},{value:"$year-5|$now",label:"Last 5 years"},{value:"$year-10|$now",label:"Last 10 years"}]}},T={render:n=>{const[a,s]=i.useState(n.value),[o,t]=i.useMemo(()=>a?x.parseRange(a):[],[a]);return e.jsxs("div",{children:[e.jsx("div",{className:"inline-block",children:e.jsx(P,{...n,value:a,onChange:(...l)=>{s(l[0]),Ie("onChange")(...l)}})}),e.jsxs("div",{className:"mt-8",children:[e.jsx("span",{className:"text-muted",children:"Relative value: "}),e.jsx("span",{className:"font-medium",children:a})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-muted",children:"Actual value: "}),e.jsx(F,{date:o,showAlternateDate:!0}),e.jsx("span",{children:" ⇾ "}),e.jsx(F,{date:t,showAlternateDate:!0,children:e.jsxs(le,{children:[e.jsx(I,{label:"± 1 Day",onClick:()=>t&&s(`${H(t,-1).toISOString()}|${H(t,1).toISOString()}`)}),e.jsx(I,{label:"± 1 Week",onClick:()=>t&&s(`${Y(t,-1).toISOString()}|${Y(t,1).toISOString()}`)}),e.jsx(I,{label:"± 1 Month",onClick:()=>t&&s(`${B(t,-1).toISOString()}|${B(t,1).toISOString()}`)})]})})]})]})},args:{value:"$year-2|$now"}};var Q,U,G;q.parameters={...q.parameters,docs:{...(Q=q.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    return <SuperDate {...args} />;
  },
  args: {
    value: "$year-2|$now",
    recurringEvents: [{
      label: "National Day",
      start: "2000-11-30",
      end: "2000-12-03"
    }],
    presets: [{
      value: "$year-2|$now",
      label: "Last 2 years"
    }, {
      value: "$year-5|$now",
      label: "Last 5 years"
    }, {
      value: "$year-10|$now",
      label: "Last 10 years"
    }]
  }
}`,...(G=(U=q.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,J,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    const [start, end] = useMemo(() => value ? DateUtil.parseRange(value) : [], [value]);
    return <div>
        <div className="inline-block">
          <SuperDateTabs {...args} value={value} onChange={(...args) => {
          setValue(args[0]);
          action("onChange")(...args);
        }} />
        </div>
        <div className="mt-8">
          <span className="text-muted">Relative value: </span>
          <span className="font-medium">{value}</span>
        </div>
        <div>
          <span className="text-muted">Actual value: </span>
          <DateDisplay date={start} showAlternateDate />
          <span> ⇾ </span>
          <DateDisplay date={end} showAlternateDate>
            <Menu>
              <MenuItem label="± 1 Day" onClick={() => end && setValue(\`\${addDays(end, -1).toISOString()}|\${addDays(end, 1).toISOString()}\`)} />
              <MenuItem label="± 1 Week" onClick={() => end && setValue(\`\${addWeeks(end, -1).toISOString()}|\${addWeeks(end, 1).toISOString()}\`)} />
              <MenuItem label="± 1 Month" onClick={() => end && setValue(\`\${addMonths(end, -1).toISOString()}|\${addMonths(end, 1).toISOString()}\`)} />
            </Menu>
          </DateDisplay>
        </div>
      </div>;
  },
  args: {
    value: "$year-2|$now"
  }
}`,...(X=(J=T.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const Ae=["_Superdate","Playground"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Playground:T,_Superdate:q,__namedExportsOrder:Ae,default:Ee},Symbol.toStringTag,{value:"Module"}));export{T as P,Xe as S,q as _,V as a};
