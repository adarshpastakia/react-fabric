import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{i,t as a}from"./es.js";import{R as o,_ as s,u as c}from"./ResizeObserver.es.js";import{Q as l,a as u,at as d,ct as f,i as p,it as m,p as h,r as g}from"./index.esm.js";import{t as _}from"./jsx-runtime.js";import{C as v,N as ee,St as te,U as ne,W as y,X as re,Z as b,et as ie,gt as x,it as ae,lt as oe,vt as se,z as S}from"./iframe-BBjx9o_X.js";import{_ as ce,d as le,f as ue,t as C,u as de,v as w}from"./esm.js";import{a as fe,d as T,f as pe,i as E,l as me,o as he,p as ge,u as D}from"./es2.js";var _e,ve,ye,O,k,A,be=t((()=>{_e=` ⇽ `,ve={quick:`حدد مسرعا`,relative:`نسبيا`,events:`الأحداث`,absolute:`مطلق`,preset:`المسبقة`,current:`تيار`,previous:`السابق`,from:`من عند`,to:`إلى`,"+":`من الان`,"-":`منذ`,apply:`يتقدم`,$now:`الآن`,$minute:`دقيقة`,$hour:`ساعة`,$day:`يوم`,$week:`أسبوع`,$month:`شهر`,$quarter:`ربع`,$year:`عام`,$decade:`عقد`},ye={$day:`اليوم`,$week:`هذا الاسبوع`,$month:`هذا الشهر`,$quarter:`هذا الربع`,$year:`هذه السنة`,$decade:`هذا العقد`},O={$day:`غدا`,$week:`الاسبوع القادم`,$month:`الشهر القادم`,$quarter:`الربع القادم`,$year:`العام القادم`,$decade:`العقد القادم`,$minute:`بعد دقيقة`,$hour:`بعد ساعة`,$minute_plural:`بعد {{count}} دقائق`,$hour_plural:`بعد {{count}} ساعات`,$day_plural:`بعد {{count}} أيام`,$week_plural:`بعد {{count}} أسابيع`,$month_plural:`بعد {{count}} أشهر`,$quarter_plural:`بعد {{count}} أرباع`,$year_plural:`بعد {{count}} سنوات`,$decade_plural:`بعد {{count}} عقود`},k={$day:`في الامس`,$week:`الاسبوع الماضي`,$month:`الشهر الماضي`,$quarter:`الربع الأخير`,$year:`العام الماضي`,$decade:`العقد الماضي`,$minute:`منذ دقيقة`,$hour:`منذ ساعة`,$minute_plural:`منذ {{count}} دقيقة`,$hour_plural:`منذ {{count}} ساعات`,$day_plural:`منذ {{count}} أيام`,$week_plural:`من {{count}} اسابيع`,$month_plural:`قبل {{count}} أشهر`,$quarter_plural:`منذ {{count}} أرباع`,$year_plural:`منذ {{count}} سنوات`,$decade_plural:`منذ {{count}} عقود`},A={separator:_e,label:ve,now:ye,next:O,prev:k}})),j,M,N,P,xe,Se,Ce,we=t((()=>{j=` ⇾ `,M={ramadan:`Ramadan`,christmas:`Christmas`,newYear:`New Year`},N={quick:`Quick Select`,relative:`Relative`,absolute:`Absolute`,events:`Events`,preset:`Presets`,current:`Current`,previous:`Previous`,from:`From`,to:`To`,"+":`From now`,"-":`Ago`,apply:`Apply`,$now:`Now`,$minute:`Minute`,$hour:`Hour`,$day:`Day`,$week:`Week`,$month:`Month`,$quarter:`Quarter`,$year:`Year`,$decade:`Decade`},P={$day:`Today`,$week:`This week`,$month:`This month`,$quarter:`This quarter`,$year:`This year`,$decade:`This decade`},xe={$day:`Tomorrow`,$week:`Next week`,$month:`Next month`,$quarter:`Next quarter`,$year:`Next year`,$decade:`Next decade`,$minute:`A minute later`,$hour:`An hour later`,$minute_other:`{{count}} minutes later`,$hour_other:`{{count}} hours later`,$day_other:`{{count}} days later`,$week_other:`{{count}} weeks later`,$month_other:`{{count}} months later`,$quarter_other:`{{count}} quarters later`,$year_other:`{{count}} years later`,$decade_other:`{{count}} decades later`},Se={$day:`Yesterday`,$week:`Last week`,$month:`Last month`,$quarter:`Last quarter`,$year:`Last year`,$decade:`Last decade`,$minute:`A minute ago`,$hour:`An hour ago`,$minute_other:`{{count}} minutes ago`,$hour_other:`{{count}} hours ago`,$day_other:`{{count}} days ago`,$week_other:`{{count}} weeks ago`,$month_other:`{{count}} months ago`,$quarter_other:`{{count}} quarters ago`,$year_other:`{{count}} years ago`,$decade_other:`{{count}} decades ago`},Ce={separator:j,event:M,label:N,now:P,next:xe,prev:Se}})),Te=t((()=>{v(),be(),we(),ee(`superdate`,{en:Ce,ar:A})})),F,I,Ee=t((()=>{v(),E(),C(),a(),F=_(),I=({label:e,prefix:t,showApply:n})=>{let{t:r}=i(`superdate`);return(0,F.jsxs)(ue,{label:e,className:`mb-2`,children:[(0,F.jsx)(w,{name:`${t}.diff`,children:(0,F.jsx)(le,{width:`5rem`,min:1,max:99})}),(0,F.jsx)(w,{name:`${t}.part`,children:(0,F.jsx)(de,{options:Object.values(T).slice(1).map(e=>({id:e,label:r(`label.${e}`)}))})}),(0,F.jsx)(w,{name:`${t}.op`,children:(0,F.jsx)(de,{width:`7rem`,options:[{id:`-`,label:r(`label.-`)},{id:`+`,label:r(`label.+`)}]})}),n&&(0,F.jsx)(x,{variant:`solid`,color:`primary`,size:`sm`,type:`submit`,"data-dropdown-dismiss":`true`,children:r(`label.apply`)})]})},I.__docgenInfo={description:``,methods:[],displayName:`RelativeInput`}})),L,R,z,De,B,Oe=t((()=>{pe(),v(),E(),C(),o(),L=e(r()),a(),Ee(),R=_(),z=[{value:`$day`,label:`superdate:now.$day`},{value:`$day-1`,label:`superdate:prev.$day`},{value:`$day+1`,label:`superdate:next.$day`},{value:`$week`,label:`superdate:now.$week`},{value:`$week-1`,label:`superdate:prev.$week`},{value:`$week+1`,label:`superdate:next.$week`},{value:`$month`,label:`superdate:now.$month`},{value:`$month-1`,label:`superdate:prev.$month`},{value:`$month+1`,label:`superdate:next.$month`},{value:`$quarter`,label:`superdate:now.$quarter`},{value:`$quarter-1`,label:`superdate:prev.$quarter`},{value:`$quarter+1`,label:`superdate:next.$quarter`},{value:`$year`,label:`superdate:now.$year`},{value:`$year-1`,label:`superdate:prev.$year`},{value:`$year+1`,label:`superdate:next.$year`}],De=g({rel:g({diff:p().required().label(`Difference`),op:u().required().oneOf([`+`,`-`]).label(`Operator`),part:u().required().oneOf(Object.values(T)).label(`Date part`)})}),B=({presets:e=z,value:t=``,onChange:n})=>{let{t:r}=i(),a=(0,L.useCallback)(({rel:{part:e,diff:t,op:r}})=>{n(`${e}${r}${t}|${T.NOW}`)},[]),o=(0,L.useMemo)(()=>{if(t?.endsWith(T.NOW)){let[,e,n,r=`0`]=t.split(`|`).shift().match(/^(\$\w+)([+-])(\d+)?$/)??[];return{rel:{part:e,op:n,diff:r}}}},[t]);return(0,R.jsxs)(S,{children:[(0,R.jsx)(`div`,{className:`inline-block origin-left rtl:origin-right`,style:{zoom:.85},children:(0,R.jsx)(ce,{resolver:ge(De),onSubmit:a,defaultValues:o,children:(0,R.jsx)(I,{label:r(`superdate:label.relative`),prefix:`rel`,showApply:!0})})}),(0,R.jsx)(ie,{children:r(`superdate:label.preset`)}),(0,R.jsx)(`div`,{"data-dropdown-dismiss":`true`,className:`grid grid-cols-3 flex-row text-sm gap-2`,children:e.map(e=>(0,R.jsx)(`button`,{className:`link appearance-none text-start`,onClick:()=>n?.(e.value),children:r(e.label,{defaultValue:e.label})},e.value))})]})},B.__docgenInfo={description:``,methods:[],displayName:`QuickSelect`,props:{presets:{defaultValue:{value:`[
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
]`,computed:!1},required:!1},value:{defaultValue:{value:`""`,computed:!1},required:!1}}}})),V,H,ke,U,Ae=t((()=>{pe(),v(),E(),C(),o(),V=e(r()),a(),Ee(),H=_(),ke=g({from:g({diff:p().required().label(`Difference`),op:u().required().oneOf([`+`,`-`]).label(`Operator`),part:u().required().oneOf(Object.values(T)).label(`Date part`)}),to:g({diff:p().required().label(`Difference`),op:u().required().oneOf([`+`,`-`]).label(`Operator`),part:u().required().oneOf(Object.values(T)).label(`Date part`)})}),U=({value:e=``,onChange:t})=>{let{t:n}=i(`superdate`),r=(0,V.useCallback)(({to:e,from:n})=>{t(`${n.part}${n.op}${n.diff}|${e.part}${e.op}${e.diff}`)},[]),a=(0,V.useMemo)(()=>{if(e?.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)){let[,t,n,r=`0`]=e.split(`|`).shift().match(/^(\$\w+)([+-])(\d+)?$/)??[],[,i,a,o=`0`]=e.split(`|`).pop().match(/^(\$\w+)([+-])(\d+)?$/)??[];return{from:{part:t,op:n,diff:r},to:{part:i,op:a,diff:o}}}},[e]);return(0,H.jsx)(S,{children:(0,H.jsx)(`div`,{className:`scale-90`,children:(0,H.jsxs)(ce,{resolver:ge(ke),defaultValues:a,onSubmit:r,children:[(0,H.jsx)(I,{label:n(`label.from`),prefix:`from`}),(0,H.jsx)(I,{label:n(`label.to`),prefix:`to`}),(0,H.jsx)(`div`,{className:`flex justify-end`,children:(0,H.jsx)(x,{variant:`solid`,color:`primary`,size:`sm`,type:`submit`,"data-dropdown-dismiss":`true`,children:n(`label.apply`)})})]})})})},U.__docgenInfo={description:``,methods:[],displayName:`RelativePanel`,props:{value:{defaultValue:{value:`""`,computed:!1},required:!1}}}})),je,W,G,K,q,Me=t((()=>{c(),v(),E(),je=e(f()),W=e(r()),a(),Oe(),Ae(),G=_(),K=({events:e,value:t,presets:n,recurringEvents:r,onChange:a})=>{let{t:o}=i(`superdate`),c=s(),{currentCalendar:l,currentLocale:u}=oe(),d=(0,W.useMemo)(()=>l===`hijri`,[l]),[f,p]=(0,W.useState)(``),[m,h]=(0,W.useState)(`quick`);(0,W.useEffect)(()=>{t?.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/)?h(`relative`):t&&!t?.match(/^(\$\w+)/)?h(`absolute`):h(`quick`),t&&p(t)},[t]);let g=(0,W.useCallback)(e=>{let t=D.parseRange(e);p(e),a?.(e,[t[0]?.toISOString?.(),t[1]?.toISOString?.()]),c?.events.emit(`close`)},[d,u]);return(0,G.jsx)(`div`,{className:(0,je.default)(`rounded-capped outline select-none overflow-hidden grid`,`fabric-superDate`),children:(0,G.jsxs)(ne,{headerClassName:`border-b`,onChange:h,activeTab:m,children:[(0,G.jsx)(y,{id:`quick`,label:o(`label.quick`),children:(0,G.jsx)(B,{value:f,onChange:g,presets:n})}),(0,G.jsx)(y,{id:`relative`,label:o(`label.relative`),children:(0,G.jsx)(U,{value:f,onChange:g})}),(0,G.jsx)(y,{id:`absolute`,label:o(`label.absolute`),children:(0,G.jsx)(S,{className:`p-0`,children:(0,G.jsx)(fe,{withTime:!0,showHijriToggle:!0,value:f?D.parseRange(f):void 0,showApply:!0,onChange:([e,t])=>g?.(`${e}|${t}`)})})}),(0,G.jsx)(y,{id:`events`,label:o(`label.events`),children:(0,G.jsx)(he,{isHijri:d,onChange:g,events:e,recurringEvents:r})})]})})},q=({as:e=`button`,color:t=`primary`,size:n,variant:r,disabled:i,fullWidth:a,onChange:o,value:s,"data-test-value":c,"data-testid":l,...u})=>{let{currentCalendar:d,currentLocale:f}=oe(),p=(0,W.useMemo)(()=>d===`hijri`,[d]),[m,h]=(0,W.useState)();(0,W.useEffect)(()=>{h(s)},[s]);let g=(0,W.useCallback)(e=>{let t=D.parseRange(e);h(e),o?.(e,[t[0]?.toISOString?.(),t[1]?.toISOString?.()])},[p,f]),_=e===`button`?x:ae;return(0,G.jsxs)(te,{showArrow:!0,children:[(0,G.jsx)(se,{content:D.relativeTooltip(m,p),children:(0,G.jsx)(_,{icon:`icon-[mdi--clock-outline]`,size:n,color:t,disabled:i,fullWidth:a,variant:r,"data-test-value":c,"data-testid":l,children:D.relativeLabel(m,p)??``})}),(0,G.jsx)(K,{...u,value:m,onChange:g})]})},K.__docgenInfo={description:``,methods:[],displayName:`SuperDateTabs`,props:{as:{required:!1,tsType:{name:`union`,raw:`"button" | "chip"`,elements:[{name:`literal`,value:`"button"`},{name:`literal`,value:`"chip"`}]},description:``},color:{required:!1,tsType:{name:`ColorState`},description:``},size:{required:!1,tsType:{name:`SizeType`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"solid" | "outline" | "link"`,elements:[{name:`literal`,value:`"solid"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"link"`}]},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!1,tsType:{name:`string`},description:`relative date value`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, dates: [string, string]) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]},name:`dates`}],return:{name:`void`}}},description:`change handler`},events:{required:!1,tsType:{name:`Array`,elements:[{name:`EventType`}],raw:`EventType[]`},description:`list of calendar events`},recurringEvents:{required:!1,tsType:{name:`Array`,elements:[{name:`EventType`}],raw:`EventType[]`},description:`list of calendar events`},presets:{required:!1,tsType:{name:`Array`,elements:[{name:`PresetType`}],raw:`PresetType[]`},description:`list of relative presets

{value:'$year-5|$year', label:'last 5 years'}`}},composes:[`TestProps`]},q.__docgenInfo={description:`SuperDate component provides a date selection interface with quick, relative, and absolute date options.
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
@returns {React.ReactElement} The rendered SuperDate component.

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

@see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/superdate-superdate--docs}`,methods:[],displayName:`SuperDate`,props:{as:{required:!1,tsType:{name:`union`,raw:`"button" | "chip"`,elements:[{name:`literal`,value:`"button"`},{name:`literal`,value:`"chip"`}]},description:``,defaultValue:{value:`"button"`,computed:!1}},color:{required:!1,tsType:{name:`ColorState`},description:``,defaultValue:{value:`"primary"`,computed:!1}},size:{required:!1,tsType:{name:`SizeType`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"solid" | "outline" | "link"`,elements:[{name:`literal`,value:`"solid"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"link"`}]},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!1,tsType:{name:`string`},description:`relative date value`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, dates: [string, string]) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]},name:`dates`}],return:{name:`void`}}},description:`change handler`},events:{required:!1,tsType:{name:`Array`,elements:[{name:`EventType`}],raw:`EventType[]`},description:`list of calendar events`},recurringEvents:{required:!1,tsType:{name:`Array`,elements:[{name:`EventType`}],raw:`EventType[]`},description:`list of calendar events`},presets:{required:!1,tsType:{name:`Array`,elements:[{name:`PresetType`}],raw:`PresetType[]`},description:`list of relative presets

{value:'$year-5|$year', label:'last 5 years'}`}},composes:[`TestProps`]}})),Ne=t((()=>{Te(),Me()})),Pe=n({Playground:()=>Q,_Superdate:()=>Z,__namedExportsOrder:()=>$,default:()=>X}),J,Y,Fe,X,Z,Q,$,Ie=t((()=>{v(),E(),h(),J=e(r()),Ne(),Me(),Y=_(),{action:Fe}=__STORYBOOK_MODULE_ACTIONS__,X={component:q,title:`@superdate/Superdate`,parameters:{layout:`centered`,controls:{exclude:`children`}}},Z={render:e=>(0,Y.jsx)(q,{...e}),args:{value:`$year-2|$now`,recurringEvents:[{label:`National Day`,start:`2000-11-30`,end:`2000-12-03`}],presets:[{value:`$year-2|$now`,label:`Last 2 years`},{value:`$year-5|$now`,label:`Last 5 years`},{value:`$year-10|$now`,label:`Last 10 years`}]}},Q={render:e=>{let[t,n]=(0,J.useState)(e.value),[r,i]=(0,J.useMemo)(()=>t?D.parseRange(t):[],[t]);return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`div`,{className:`inline-block`,children:(0,Y.jsx)(K,{...e,value:t,onChange:(...e)=>{n(e[0]),Fe(`onChange`)(...e)}})}),(0,Y.jsxs)(`div`,{className:`mt-8`,children:[(0,Y.jsx)(`span`,{className:`text-muted`,children:`Relative value: `}),(0,Y.jsx)(`span`,{className:`font-medium`,children:t})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`span`,{className:`text-muted`,children:`Actual value: `}),(0,Y.jsx)(me,{date:r,showAlternateDate:!0}),(0,Y.jsx)(`span`,{children:` ⇾ `}),(0,Y.jsx)(me,{date:i,showAlternateDate:!0,children:(0,Y.jsxs)(re,{children:[(0,Y.jsx)(b,{label:`± 1 Day`,onClick:()=>i&&n(`${d(i,-1).toISOString()}|${d(i,1).toISOString()}`)}),(0,Y.jsx)(b,{label:`± 1 Week`,onClick:()=>i&&n(`${l(i,-1).toISOString()}|${l(i,1).toISOString()}`)}),(0,Y.jsx)(b,{label:`± 1 Month`,onClick:()=>i&&n(`${m(i,-1).toISOString()}|${m(i,1).toISOString()}`)})]})})]})]})},args:{value:`$year-2|$now`}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`_Superdate`,`Playground`]}));Ie();export{Q as Playground,Z as _Superdate,$ as __namedExportsOrder,X as default,q as i,Ie as n,Ne as r,Pe as t};