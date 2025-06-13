import{_ as ke,j as n,m as U,r as o,l as K,G as un,O as Nn,aP as ue,aM as pe,aS as ne,aT as Te,aV as H,aW as Re,bY as ye,bZ as dn,b_ as An,bo as Cn,s as $n,bi as Dn,aN as cn,bj as He,aQ as kn}from"./iframe-CVyMRGSP.js";import{D as Oe}from"./Dropdown-DQ3PjC0k.js";import{B as Y}from"./Button-DAqx1TyP.js";import{C as z,b as pn}from"./index-D3XXfjI1.js";import{D as ge}from"./Divider-CVDW6mjR.js";import{M as Qe,a as Q}from"./Menu-D-52EtQQ.js";import{I as Ie,_ as Ne,T as Fn}from"./Tooltip-D82JqM4y.js";import{a as mn,s as vn,f as bn,o as fn,i as Pn,j as Ln,b as Mn,c as yn,g as hn,k as Rn,d as Bn,e as Vn,F as Qn,h as _n,u as _e}from"./floating-ui.react-DNZDxEHZ.js";import{u as gn}from"./Global-BZCLuW51.js";import{C as Fe}from"./BasePanel-9ehr4Bks.js";import{u as Gn,O as Wn,F as qe,C as D,N as De,S as he,a as Pe,T as zn,b as Ce,R as Xn,E as Hn}from"./Select-CHCGNmHO.js";import{C as Ge}from"./Content-BDvcrf-C.js";import{D as ie,a as xe}from"./Google-DJpRc7c-.js";import"./ColorPicker-BwNyvkQX.js";import{R as Un,C as Le}from"./Responsive-DFRuVR1v.js";import{D as Kn}from"./DatePanel-CZSFYBtt.js";import{I as xn}from"./InputWrapper-DFXsbVS4.js";import{u as Yn}from"./eventHandlers-BD3d4itr.js";import{I as Be,C as Jn}from"./Input-DhhAZSLP.js";import{S as Ue}from"./Switch-Bd5f8rSz.js";import{T as Zn}from"./Textarea-DXZPjzA-.js";import{_ as ea}from"./toArray-DwQWYzJ7.js";import{u as jn}from"./useDebounce-Bpvok1Zz.js";import{u as na}from"./useResizeObserver-CzVPFDEQ.js";import{S as aa}from"./Section-BWnuMXLb.js";import{u as ra}from"./useIsDark-N6yzCbQb.js";import{M as ta}from"./editor-BnRwDV6k.js";import{u as la}from"./useStorage-D3i0Ot7K.js";import{d as sa}from"./_dedupe-Z-qx8K2g.js";import{m as Ke}from"./_isEqual-C0Ek68wL.js";import"./cloneElement-Ch-Lp1Ig.js";import"./zh-CN-FLa9i-pX.js";import"./getDay-Cl8EDKbu.js";import"./DropdownTool-CwJxuMgq.js";import"./endOfDay-CyHfuoBH.js";import"./EmptyContent-qLuxBqO2.js";import"./ErrorBoundary-1v1ksgaq.js";import"./createClass-eMtQ1dFD.js";import"./index-BJLwolNv.js";import"./index-iLbIT3XK.js";var oa=["children","color","legend","title","icon","border","onClose","className"];function Ye(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,r)}return t}function Je(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ye(Object(t),!0).forEach(function(r){Ne(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ia={none:"bg-base text-tint-900 border-tint-100",tint:"bg-tint-50/50 text-tint-800 border-tint-300",primary:"bg-primary-50/50 text-primary-800 border-primary-300",accent:"bg-accent-50/50 text-accent-800 border-accent-300",info:"bg-info-50/50 text-info-800 border-info-300",danger:"bg-danger-50/50 text-danger-800 border-danger-300",success:"bg-success-50/50 text-success-800 border-success-300",warning:"bg-warning-50/50 text-warning-800 border-warning-300"},ua=function(a){var t=a.children,r=a.color,p=r===void 0?"tint":r,m=a.legend,b=a.title,f=a.icon,s=a.border,y=a.onClose,l=a.className,v=ke(a,oa);return n.jsxs("fieldset",Je(Je({className:U("block rounded-capped border max-w-full relative overflow-hidden mb-4",ia[p],l,s==="dashed"&&"border-dashed",s==="dotted"&&"border-dotted")},v),{},{children:[m&&n.jsx("legend",{className:"px-2 mx-4 font-medium","data-ref":"calloutLegend",children:m}),n.jsxs("div",{className:U("break-words whitespace-break-spaces p-2"),children:[n.jsxs("div",{className:"flex flex-nowrap items-center text-xl pe-4 gap-2 mb-4 empty:mb-0",children:[f&&n.jsx(Ie,{icon:f,"data-ref":"calloutIcon"}),b&&n.jsx("p",{className:"flex-1","data-ref":"calloutTitle",children:b})]}),n.jsx("div",{className:"pe-4",children:t})]}),y&&n.jsx(Ie,{size:"md","data-ref":"calloutClose",className:U("absolute end-2",m?"top-0":"top-2"),icon:z.close,onClick:y})]}))},da=["ref","name","value","invalid","readOnly","disabled","required","placeholder","autoFocus","error","type","onBlur","onFocus","onChange","onEnterPressed","format","min","max"];function Ze(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,r)}return t}function fe(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ze(Object(t),!0).forEach(function(r){Ne(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Me=function(a){var t=a.ref,r=a.name,p=a.value,m=a.invalid,b=a.readOnly,f=a.disabled,s=a.required,y=a.placeholder,l=a.autoFocus,v=a.error,x=a.type,E=x===void 0?"date":x,u=a.onBlur,d=a.onFocus,c=a.onChange,h=a.onEnterPressed;a.format;var A=a.min,k=a.max,F=ke(a,da),T=o.useState(""),q=K(T,2),_=q[0],P=q[1],L=o.useState(""),g=K(L,2),i=g[0],M=g[1],R=o.useDeferredValue(p),j=o.useMemo(function(){return E==="datetime"?"yyyy-MM-dd HH:mm":"yyyy-MM-dd"},[E]);o.useEffect(function(){P(R??""),M(R?ie.format(R,j):"")},[R,j]);var I=Yn(h),ae=o.useCallback(function(de){var oe=de==null?void 0:de.currentTarget.value;if(oe){var W,B=ie.parseDate(oe);P(B==null||(W=B.toISOString)===null||W===void 0?void 0:W.call(B)),M(ie.format(B,j)),c!=null&&o.startTransition(function(){var Se;return c(B==null||(Se=B.toISOString)===null||Se===void 0?void 0:Se.call(B))})}else P(""),M(""),c!=null&&o.startTransition(function(){return c(null)})},[c,j]),G=o.useCallback(function(de){if(de){var oe,W=ie.parseDate(de);P(W==null||(oe=W.toISOString)===null||oe===void 0?void 0:oe.call(W)),M(ie.format(W,j)),c!=null&&o.startTransition(function(){var B;return c(W==null||(B=W.toISOString)===null||B===void 0?void 0:B.call(W))})}else P(""),M(""),c!=null&&o.startTransition(function(){return c(null)})},[c,j]),N=o.useRef(null),V=o.useState(!1),X=K(V,2),te=X[0],le=X[1],J=mn({open:te,onOpenChange:function(oe,W,B){console.log(B),B!=="reference-press"&&le(oe)},strategy:"fixed",placement:"bottom-start",whileElementsMounted:un,middleware:[vn({padding:8}),bn(),fn(9),Pn({element:N})]}),je=J.refs,se=J.floatingStyles,Z=J.context,we=Ln(Z,{enabled:!f}),Ee=Mn(Z,{enabled:!f,toggle:!1}),me=yn(Z,{referencePress:!0}),be=hn([me,Ee,we]),ve=be.getReferenceProps,Ae=be.getFloatingProps;return n.jsxs(xn,fe(fe({showClear:!!_&&!f&&!b,onClear:ae,invalid:m,readOnly:b,disabled:f,required:s,error:v},F),{},{children:[n.jsx("input",fe(fe({className:U("appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer",!p&&"empty"),"aria-invalid":m,"aria-disabled":f,"aria-readonly":b,"aria-errormessage":v,placeholder:y,disabled:f,readOnly:b,"data-testid":r,name:r,size:1,type:E==="datetime"?"datetime-local":"date",autoComplete:"off",autoFocus:l,value:i,ref:Nn(t,je.setReference)},ve({onBlur:u,onFocus:d})),{},{onChange:ae,onKeyDown:I})),te&&n.jsxs("div",fe(fe({ref:je.setFloating,style:fe({zIndex:"var(--z-popover)"},se),className:"shadow-lg bg-base ring-1 ring-tint-100","data-ref":"dropdownBody"},Ae()),{},{children:[n.jsx(Kn,{withTime:E==="datetime",value:_,max:k,min:A,onChange:G}),n.jsx(Rn,{ref:N,context:Z,strokeWidth:.5,className:"fill-base stroke-muted"})]}))]}))},ca=["ref","name","value","invalid","readOnly","disabled","required","placeholder","autoFocus","expandOnEdit","error","history","multiple","onChange","onSelect","onInput","onFocus","onBlur","onQuery","onEnterPressed"];function en(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,r)}return t}function ce(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?en(Object(t),!0).forEach(function(r){Ne(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):en(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var pa=function(a){var t,r=a.ref,p=a.name,m=a.value,b=a.invalid,f=a.readOnly,s=a.disabled,y=a.required,l=a.placeholder,v=a.autoFocus,x=a.expandOnEdit,E=a.error,u=a.history,d=a.multiple,c=a.onChange,h=a.onSelect,A=a.onInput,k=a.onFocus,F=a.onBlur,T=a.onQuery,q=a.onEnterPressed,_=ke(a,ca),P=o.useRef(u),L=o.useRef(null),g=Gn({value:m,autoComplete:!0,options:P.current,multiple:d,onChange:c,onSelect:h,onQuery:T}),i=g.state,M=g.listRef,R=g.listContentRef,j=g.setOpen,I=g.macthOption,ae=g.handleChange,G=g.handleRemove,N=g.handleQuery,V=g.setItemRef,X=g.setActiveIndex,te=o.useId(),le=mn({open:i.open,onOpenChange:function(O,S,ee){!O&&(M.current=[]),j(O)},strategy:"fixed",placement:"bottom",whileElementsMounted:un,middleware:[vn({padding:8}),bn(),fn(2)]}),J=le.context,je=le.floatingStyles,se=le.refs,Z=yn(J,{}),we=Bn(J,{listRef:M,activeIndex:i.activeIndex,selectedIndex:i.selectedIndex,loop:!0,virtual:!0,focusItemOnOpen:!1,onNavigate:X}),Ee=Vn(J,{listRef:R,activeIndex:i.activeIndex,selectedIndex:i.selectedIndex,findMatch:function(O,S){return O.find(function(ee){return I(ee,S)})},onMatch:function(O){i.open&&X(O)}}),me=hn([Z,we,Ee]),be=me.getReferenceProps,ve=me.getFloatingProps,Ae=me.getItemProps,de=o.useMemo(function(){var C=be();return ce(ce({},C),{},{onFocus:k,onBlur:function(S){var ee;if((ee=S.relatedTarget)!==null&&ee!==void 0&&ee.closest('[data-select-dropdown="'.concat(te,'"]'))){var re;(re=se.domReference.current)===null||re===void 0||(re=re.querySelector("input"))===null||re===void 0||re.focus();return}i.open&&ae(i.query),N(""),j(!1),F==null||F(S)},onKeyDown:function(S){if(S.key==="Enter"){if(S.preventDefault(),i.activeIndex!==null)return ae(R.current[i.activeIndex]),S.stopPropagation(),!1;if(i.query!==void 0)return ae(""),!1;var ee;q==null||q(S),(ee=L.current)===null||ee===void 0||ee.click()}else S.key==="Backspace"?!i.query&&d&&G():["ArrowUp","ArrowDown"].includes(S.key)&&(["ArrowUp","ArrowDown"].includes(S.key)&&i.activeIndex===null&&X(i.selectedIndex),setTimeout(function(){var re;(re=C.onKeyDown)===null||re===void 0||re.call(C,S)},50))}})},[be,q,N,k,F,d,se,i.query,i.activeIndex]),oe=o.useMemo(function(){return ve({"data-select-dropdown":te})},[ve]),W=o.useCallback(function(C){var O,S,ee=ue(i.value)?(O=i.value)===null||O===void 0||(S=O.includes)===null||S===void 0?void 0:S.call(O,C):i.value===C;return Ae({"data-selected":ee?!0:void 0,onClick:function(){ae(C)}})},[Ae,ae,i.value]),B=o.useMemo(function(){if(ue(i.value))return i.value.map(function(C,O){return n.jsx(Fe,{onRemove:function(){return G(O)},children:C},O)})},[i.value,i.query,l]);o.useLayoutEffect(function(){i.open&&setTimeout(function(){var C;i.selectedIndex&&((C=M.current[i.selectedIndex])===null||C===void 0||C.scrollIntoView({block:"center"}))},100)},[i.open]);var Se=o.useMemo(function(){var C,O,S;return d?(C=i.query)!==null&&C!==void 0?C:"":(O=(S=i.query)!==null&&S!==void 0?S:i.value)!==null&&O!==void 0?O:""},[d,i.query,i.value]);return n.jsxs(xn,ce(ce({showClear:!pe(i.value),onClear:ae,invalid:b,readOnly:f,disabled:s,required:y,error:E,wrapperRef:se.setReference,className:!d&&x&&i.open?"!z-[99]":"",floatingExpand:!d&&x&&i.open},_),{},{children:[n.jsxs("div",{role:"none","data-select-display":"true",className:U("group flex-1 py-1 px-2 truncate text-start flex gap-1 relative min-h-5 justify-start",d?"flex-wrap":"flex-nowrap overflow-hidden"),onMouseUp:function(O){var S;return(S=O.currentTarget.querySelector("input"))===null||S===void 0?void 0:S.focus()},children:[B,n.jsx("textarea",ce(ce({readOnly:f,disabled:s,value:Se,"aria-invalid":b,"data-testid":p,name:p,size:1,ref:r,onInput:A,autoFocus:v,rows:!d&&x&&i.open?5:1,className:U("appearance-none bg-transparent outline-none border-none ring-0 flex-1 resize-none",s&&"cursor-not-allowed pointer-events-none",d&&"min-w-24 overflow-hidden",!i.open&&"overflow-hidden whitespace-nowrap"),placeholder:pe(i.value)?l:""},de),{},{onChange:function(O){return N(O.target.value)}})),n.jsx("button",{type:"submit",ref:L,tabIndex:-1,className:"opacity-0 absolute"})]}),i.loading&&n.jsx(Ie,{animate:"spin",className:U("flex-content p-2 z-0 order-9 text-muted pointer-events-none"),icon:z.spinner}),i.open&&!i.loading&&n.jsx(Qn,{children:n.jsx(_n,{context:J,initialFocus:-1,visuallyHiddenDismiss:!0,children:n.jsx(Wn,ce(ce({ref:se.setFloating,className:"outline shadow-lg max-h-[40vh] z-(--z-popover)",style:ce({width:(t=se.reference.current)===null||t===void 0?void 0:t.getBoundingClientRect().width},je)},oe),{},{items:i.items,active:i.activeIndex,itemRef:V,itemProps:W,empty:n.jsx("div",{className:"text-muted text-sm px-2 py-1",children:"No history available"}),children:function(O){return O}}))})})]}))},ma=" ⇽ ",va={quick:"حدد مسرعا",relative:"نسبيا",events:"الأحداث",absolute:"مطلق",preset:"المسبقة",current:"تيار",previous:"السابق",from:"من عند",to:"إلى","+":"من الان","-":"منذ",apply:"يتقدم",$now:"الآن",$minute:"دقيقة",$hour:"ساعة",$day:"يوم",$week:"أسبوع",$month:"شهر",$quarter:"ربع",$year:"عام",$decade:"عقد"},ba={$day:"اليوم",$week:"هذا الاسبوع",$month:"هذا الشهر",$quarter:"هذا الربع",$year:"هذه السنة",$decade:"هذا العقد"},fa={$day:"غدا",$week:"الاسبوع القادم",$month:"الشهر القادم",$quarter:"الربع القادم",$year:"العام القادم",$decade:"العقد القادم",$minute:"بعد دقيقة",$hour:"بعد ساعة",$minute_plural:"بعد {{count}} دقائق",$hour_plural:"بعد {{count}} ساعات",$day_plural:"بعد {{count}} أيام",$week_plural:"بعد {{count}} أسابيع",$month_plural:"بعد {{count}} أشهر",$quarter_plural:"بعد {{count}} أرباع",$year_plural:"بعد {{count}} سنوات",$decade_plural:"بعد {{count}} عقود"},ya={$day:"في الامس",$week:"الاسبوع الماضي",$month:"الشهر الماضي",$quarter:"الربع الأخير",$year:"العام الماضي",$decade:"العقد الماضي",$minute:"منذ دقيقة",$hour:"منذ ساعة",$minute_plural:"منذ {{count}} دقيقة",$hour_plural:"منذ {{count}} ساعات",$day_plural:"منذ {{count}} أيام",$week_plural:"من {{count}} اسابيع",$month_plural:"قبل {{count}} أشهر",$quarter_plural:"منذ {{count}} أرباع",$year_plural:"منذ {{count}} سنوات",$decade_plural:"منذ {{count}} عقود"},ha={separator:ma,label:va,now:ba,next:fa,prev:ya},ga=" ⇾ ",xa={ramadan:"Ramadan",christmas:"Christmas",newYear:"New Year"},ja={quick:"Quick Select",relative:"Relative",absolute:"Absolute",events:"Events",preset:"Presets",current:"Current",previous:"Previous",from:"From",to:"To","+":"From now","-":"Ago",apply:"Apply",$now:"Now",$minute:"Minute",$hour:"Hour",$day:"Day",$week:"Week",$month:"Month",$quarter:"Quarter",$year:"Year",$decade:"Decade"},wa={$day:"Today",$week:"This week",$month:"This month",$quarter:"This quarter",$year:"This year",$decade:"This decade"},Ea={$day:"Tomorrow",$week:"Next week",$month:"Next month",$quarter:"Next quarter",$year:"Next year",$decade:"Next decade",$minute:"A minute later",$hour:"An hour later",$minute_other:"{{count}} minutes later",$hour_other:"{{count}} hours later",$day_other:"{{count}} days later",$week_other:"{{count}} weeks later",$month_other:"{{count}} months later",$quarter_other:"{{count}} quarters later",$year_other:"{{count}} years later",$decade_other:"{{count}} decades later"},Sa={$day:"Yesterday",$week:"Last week",$month:"Last month",$quarter:"Last quarter",$year:"Last year",$decade:"Last decade",$minute:"A minute ago",$hour:"An hour ago",$minute_other:"{{count}} minutes ago",$hour_other:"{{count}} hours ago",$day_other:"{{count}} days ago",$week_other:"{{count}} weeks ago",$month_other:"{{count}} months ago",$quarter_other:"{{count}} quarters ago",$year_other:"{{count}} years ago",$decade_other:"{{count}} decades ago"},Ta={separator:ga,event:xa,label:ja,now:wa,next:Ea,prev:Sa};pn("superdate",{en:Ta,ar:ha});var Ve=function(a){var t=a.label,r=a.prefix,p=a.showApply,m=ne("superdate"),b=m.t;return n.jsxs(qe,{label:t,className:"mb-2",children:[n.jsx(D,{name:"".concat(r,".diff"),children:n.jsx(De,{width:"5rem",min:1,max:99})}),n.jsx(D,{name:"".concat(r,".part"),children:n.jsx(he,{width:"6rem",options:Object.values(xe).slice(1).map(function(f){return{id:f,label:b("label.".concat(f))}})})}),n.jsx(D,{name:"".concat(r,".op"),children:n.jsx(he,{width:"7rem",options:[{id:"-",label:b("label.-")},{id:"+",label:b("label.+")}]})}),p&&n.jsx(Y,{variant:"solid",type:"submit",children:b("label.apply")})]})},qa=[{value:"$day",label:"superdate:now.$day"},{value:"$day-1",label:"superdate:prev.$day"},{value:"$day+1",label:"superdate:next.$day"},{value:"$week",label:"superdate:now.$week"},{value:"$week-1",label:"superdate:prev.$week"},{value:"$week+1",label:"superdate:next.$week"},{value:"$month",label:"superdate:now.$month"},{value:"$month-1",label:"superdate:prev.$month"},{value:"$month+1",label:"superdate:next.$month"},{value:"$quarter",label:"superdate:now.$quarter"},{value:"$quarter-1",label:"superdate:prev.$quarter"},{value:"$quarter+1",label:"superdate:next.$quarter"},{value:"$year",label:"superdate:now.$year"},{value:"$year-1",label:"superdate:prev.$year"},{value:"$year+1",label:"superdate:next.$year"}],Oa=Te({rel:Te({diff:Re().required().label("Difference"),op:H().required().oneOf(["+","-"]).label("Operator"),part:H().required().oneOf(Object.values(xe)).label("Date part")})}),Ia=function(a){var t=a.presets,r=t===void 0?qa:t,p=a.value,m=p===void 0?"":p,b=a.onChange,f=ne(),s=f.t,y=o.useCallback(function(v){var x=v.rel,E=x.part,u=x.diff,d=x.op;b("".concat(E).concat(d).concat(u,"|").concat(xe.NOW))},[]),l=o.useMemo(function(){if(m!=null&&m.endsWith(xe.NOW)){var v,x=(v=m.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&v!==void 0?v:[],E=K(x,4),u=E[1],d=E[2],c=E[3],h=c===void 0?"0":c;return{rel:{part:u,op:d,diff:h}}}},[m]);return n.jsxs(Ge,{children:[n.jsx("div",{className:"inline-block origin-left rtl:origin-right",style:{zoom:.85},children:n.jsx(Pe,{schema:Oa,onSubmit:y,defaultValues:l,children:n.jsx(Ve,{label:s("superdate:label.relative"),prefix:"rel",showApply:!0})})}),n.jsx(ge,{children:s("superdate:label.preset")}),n.jsx("div",{className:"grid grid-cols-3 flex-row text-sm gap-2",children:r.map(function(v){return n.jsx("button",{className:"link appearance-none text-start",onClick:function(){return b==null?void 0:b(v.value)},children:s(v.label,{defaultValue:v.label})},v.value)})})]})},Na=Te({from:Te({diff:Re().required().label("Difference"),op:H().required().oneOf(["+","-"]).label("Operator"),part:H().required().oneOf(Object.values(xe)).label("Date part")}),to:Te({diff:Re().required().label("Difference"),op:H().required().oneOf(["+","-"]).label("Operator"),part:H().required().oneOf(Object.values(xe)).label("Date part")})}),Aa=function(a){var t=a.value,r=t===void 0?"":t,p=a.onChange,m=ne("superdate"),b=m.t,f=o.useCallback(function(y){var l=y.to,v=y.from;p("".concat(v.part).concat(v.op).concat(v.diff,"|").concat(l.part).concat(l.op).concat(l.diff))},[]),s=o.useMemo(function(){if(r!=null&&r.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)){var y,l,v=(y=r.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&y!==void 0?y:[],x=K(v,4),E=x[1],u=x[2],d=x[3],c=d===void 0?"0":d,h=(l=r.split("|").pop().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&l!==void 0?l:[],A=K(h,4),k=A[1],F=A[2],T=A[3],q=T===void 0?"0":T;return{from:{part:E,op:u,diff:c},to:{part:k,op:F,diff:q}}}},[r]);return n.jsx(Ge,{children:n.jsx("div",{className:"scale-90",children:n.jsxs(Pe,{schema:Na,defaultValues:s,onSubmit:f,children:[n.jsx(Ve,{label:b("label.from"),prefix:"from"}),n.jsx(Ve,{label:b("label.to"),prefix:"to"}),n.jsx("div",{className:"flex justify-end",children:n.jsx(Y,{variant:"solid",type:"submit",children:b("label.apply")})})]})})})},Ca=["as","color","size","variant","disabled","fullWidth","onChange","value","data-test-value","data-testid"];function nn(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,r)}return t}function an(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?nn(Object(t),!0).forEach(function(r){Ne(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var $a=function(a){var t=a.events,r=a.value,p=a.presets,m=a.recurringEvents,b=a.onChange,f=ne("superdate"),s=f.t,y=_e(),l=gn(),v=l.currentCalendar,x=l.currentLocale,E=o.useMemo(function(){return v==="hijri"},[v]),u=o.useState(""),d=K(u,2),c=d[0],h=d[1],A=o.useState("quick"),k=K(A,2),F=k[0],T=k[1];o.useEffect(function(){r!=null&&r.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/)?T("relative"):r&&!(r!=null&&r.match(/^(\$\w+)/))?T("absolute"):T("quick"),r&&h(r)},[r]);var q=o.useCallback(function(_){var P,L,g,i,M=ie.parseRange(_);h(_),b==null||b(_,[(P=M[0])===null||P===void 0||(L=P.toISOString)===null||L===void 0?void 0:L.call(P),(g=M[1])===null||g===void 0||(i=g.toISOString)===null||i===void 0?void 0:i.call(g)]),y==null||y.events.emit("close")},[E,x]);return n.jsx("div",{className:U("rounded-capped outline select-none overflow-hidden grid","fabric-superDate"),children:n.jsxs(zn,{headerClassName:"border-b",onChange:T,activeTab:F,children:[n.jsx(Ce,{id:"quick",label:s("label.quick"),children:n.jsx(Ia,{value:c,onChange:q,presets:p})}),n.jsx(Ce,{id:"relative",label:s("label.relative"),children:n.jsx(Aa,{value:c,onChange:q})}),n.jsx(Ce,{id:"absolute",label:s("label.absolute"),children:n.jsx(Ge,{className:"p-0",children:n.jsx(Xn,{withTime:!0,showHijriToggle:!0,value:c?ie.parseRange(c):void 0,showApply:!0,onChange:function(P){var L=K(P,2),g=L[0],i=L[1];return q==null?void 0:q("".concat(g,"|").concat(i))}})})}),n.jsx(Ce,{id:"events",label:s("label.events"),children:n.jsx(Hn,{isHijri:E,onChange:q,events:t,recurringEvents:m})})]})})},Da=function(a){var t,r=a.as,p=r===void 0?"button":r,m=a.color,b=m===void 0?"primary":m,f=a.size,s=a.variant,y=a.disabled,l=a.fullWidth,v=a.onChange,x=a.value,E=a["data-test-value"],u=a["data-testid"],d=ke(a,Ca),c=gn(),h=c.currentCalendar,A=c.currentLocale,k=o.useMemo(function(){return h==="hijri"},[h]),F=o.useState(),T=K(F,2),q=T[0],_=T[1];o.useEffect(function(){_(x)},[x]);var P=o.useCallback(function(g){var i,M,R,j,I=ie.parseRange(g);_(g),v==null||v(g,[(i=I[0])===null||i===void 0||(M=i.toISOString)===null||M===void 0?void 0:M.call(i),(R=I[1])===null||R===void 0||(j=R.toISOString)===null||j===void 0?void 0:j.call(R)])},[k,A]),L=p==="button"?Y:Fe;return n.jsxs(Oe,{showArrow:!0,children:[n.jsx(Fn,{content:ie.relativeTooltip(q,k),children:n.jsx(L,{icon:z.clock,size:f,color:b,disabled:y,fullWidth:l,variant:s,"data-test-value":E,"data-testid":u,children:(t=ie.relativeLabel(q,k))!==null&&t!==void 0?t:""})}),n.jsx($a,an(an({},d),{},{value:q,onChange:P}))]})};const ka={add:"إضافة عامل تصفية",all_filters:"جميع المرشحات",apply:"يتقدم",basicFilter:"الفلتر الأساسي",cancel:"يلغي",customQuery:"استعلام مخصص",delete:"يمسح",disable:"إبطال",disableAll:"تعطيل الكل",edit:"يحرر",enable:"يُمكَِن",enableAll:"تمكين الكل",exclude:"استبعاد",excludeAll:"استبعاد الكل",field:"مجال",filters:"المرشحات",forAdvanced:"للمستخدمين المتقدمين فقط!",include:"يشمل",includeAll:"تضمين الكل",invertAll:"عكس التضمين/الاستبعاد",label:"ملصق",operator:"المشغل",optional:"خياري",pin:"مثبت",query:"استفسار",refresh:"ينعش",remove:"يزيل",removeAll:"إزالة الكل",toggleDisable:"عكس تعطيل/تمكين",unpin:"غير مثبت",update:"تحديث",value:"قيمة",view:"منظر",matchAll:"تطابق كل شيء",matchAny:"تطابق أي"},Fa={ALL:"كل",ANY:"أي من",BETWEEN:"بين هذا وذاك",ENDS:"ينتهي مع",EXISTS:"موجود",GT:">",GTE:"≥",IS:"يكون",LIKE:"يحب",LT:"<",LTE:"≤",STARTS:"ابدا ب",WITHIN:"في غضون"},Pa="مصطلح البحث...",La={BOOLEAN:"رقم",DATE:"منطقي",DATETIME:"تاريخ",DECIMAL:"يطفو",GEO:"GeoJSON",NUMBER:"كثافة العمليات",STRING:"سلسلة"},Ma={compare:"مقارنة الحقل المطلوب",field:"حقل مطلوب",label:"التصنيف مطلوب",operator:"عامل مطلوب",value:"القيمة المطلوبة"},Ra={label:ka,operator:Fa,placeholder:Pa,type:La,validate:Ma},Ba={add:"Add Filter",all_filters:"All Filters",apply:"Apply",basicFilter:"Basic Filter",cancel:"Cancel",customQuery:"Custom Query",delete:"Delete",disable:"Disable",disableAll:"Disable All",edit:"Edit",enable:"Enable",enableAll:"Enable All",exclude:"Exclude",excludeAll:"Exclude All",field:"Field",filters:"Filters",forAdvanced:"For advanced users only!",include:"Include",includeAll:"Include All",invertAll:"Invert Include/Exclude",label:"Label",matchAll:"Match All",matchAny:"Match Any",operator:"Operator",optional:"Optional",pin:"Pinned",query:"Query",refresh:"Refresh",remove:"Remove",removeAll:"Remove All",toggleDisable:"Invert Disable/Enable",unpin:"Unpinned",update:"Update",value:"Value",view:"View"},Va={ALL:"All of",ANY:"Any of",BETWEEN:"Between",ENDS:"Ends with",EQ:"=",EXISTS:"Exists",GT:">",GTE:"≥",IS:"Is",LIKE:"Like",LT:"<",LTE:"≤",STARTS:"Starts with",WITHIN:"Within"},Qa="Search term...",_a={BOOLEAN:"Bool",DATE:"Date",DATETIME:"Date Time",DECIMAL:"Decimal",GEO:"GeoJSON",NUMBER:"Number",STRING:"String"},Ga={compare:"Compare field required",field:"Field required",label:"Label required",operator:"Operator required",value:"Value required"},Wa={label:Ba,operator:Va,placeholder:Qa,type:_a,validate:Ga};pn("searchbar",{en:Wa,ar:Ra});const wn=o.createContext({}),We=()=>o.useContext(wn);var $=(e=>(e.ID="ID",e.STRING="STRING",e.TEXT="TEXT",e.NUMBER="NUMBER",e.DECIMAL="DECIMAL",e.BOOLEAN="BOOLEAN",e.DATE="DATE",e.DATETIME="DATETIME",e.NONE="NONE",e))($||{}),w=(e=>(e.EXISTS="EXISTS",e.IS="IS",e.ALL="ALL",e.ANY="ANY",e.EQ="EQ",e.LT="LT",e.GT="GT",e.LTE="LTE",e.GTE="GTE",e.LIKE="LIKE",e.STARTS="STARTS",e.ENDS="ENDS",e.WITHIN="WITHIN",e.BETWEEN="BETWEEN",e))(w||{});const rn={ID:["IS","ANY"],STRING:["EXISTS","IS","ANY","ALL"],TEXT:["EXISTS","LIKE","STARTS","ENDS"],NUMBER:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],DECIMAL:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],BOOLEAN:["EXISTS","EQ"],DATE:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],DATETIME:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],NONE:["EXISTS"]},za=new dn({id:H().required(),field:H().required(),operator:H().required().oneOf(Object.values(w)),negate:Cn(),label:H(),value:An().when("operator",{is:w.EXISTS,then:e=>e.optional(),otherwise:e=>e.required()}).when("operator",{is:w.ANY,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(a=[])=>(a==null?void 0:a.length)>0})}).when("operator",{is:w.ALL,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(a=[])=>(a==null?void 0:a.length)>0})}).when("operator",{is:w.BETWEEN,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(a=[])=>(a==null?void 0:a.length)>0&&a[0]&&a[1]})}).when("operator",{is:w.BETWEEN,then:e=>e.test({name:"array-check",message:"${path} min max",test:(a=[])=>(a==null?void 0:a.length)>0&&a[0]<a[1]})})}),En=({filter:e,onChange:a,onRemove:t})=>{const{t:r}=ne("searchbar"),p=_e(),{fields:m=[]}=We(),b=o.useRef(null),f=o.useRef(null),[s,y]=o.useState(e);o.useEffect(()=>{var u,d;e&&"field"in e&&e.field?(u=f.current)==null||u.setValues(e):(d=f.current)==null||d.setValues({id:ye(),field:"",operator:w.EXISTS})},[e]),o.useEffect(()=>{setTimeout(()=>{var u;(u=b.current)==null||u.focus()},100)},[]);const l=o.useMemo(()=>{if(s!=null&&s.field)return m.find(u=>u.field===(s==null?void 0:s.field))},[s]),v=o.useMemo(()=>{var u;return l==null?[w.EXISTS]:((u=f.current)==null||u.setValue("operator",rn[l.type][0]),[...rn[l.type]])},[l]),x=o.useMemo(()=>{var u,d,c,h,A,k,F;if((s==null?void 0:s.operator)===w.EXISTS&&(s==null?void 0:s.value)!==void 0&&((u=f.current)==null||u.setValue("value",void 0)),(l==null?void 0:l.type)===$.STRING&&([w.ALL,w.ANY].includes(s==null?void 0:s.operator)?!ue(s.value)&&((d=f.current)==null||d.setValue("value",[])):ue(s.value)&&((c=f.current)==null||c.setValue("value",void 0))),((l==null?void 0:l.type)===$.DATE||(l==null?void 0:l.type)===$.DATETIME||(l==null?void 0:l.type)===$.NUMBER||(l==null?void 0:l.type)===$.DECIMAL)&&((s==null?void 0:s.operator)===w.BETWEEN?!ue(s.value)&&((h=f.current)==null||h.setValue("value",[])):ue(s.value)&&((A=f.current)==null||A.setValue("value",void 0))),(l==null?void 0:l.type)===$.BOOLEAN&&[w.IS,w.EQ].includes(s==null?void 0:s.operator)&&(s==null?void 0:s.value)===void 0&&((k=f.current)==null||k.setValue("value",!1)),l==null||!(s!=null&&s.operator)||(s==null?void 0:s.operator)===w.EXISTS)return null;if((l==null?void 0:l.type)===$.BOOLEAN)return n.jsx(qe,{label:r("label.value"),"data-plain":"true",children:n.jsx(D,{name:"value",children:n.jsx(Ue,{})})});if((l==null?void 0:l.type)===$.STRING||(l==null?void 0:l.type)===$.ID)return[w.ALL,w.ANY].includes(s==null?void 0:s.operator)?n.jsx(D,{name:"value",children:n.jsx(he,{multiple:!0,searchable:!0,allowCreate:!0,allowClear:!0,options:l.values??[],label:r("label.value"),onQuery:l.onSearch})}):l.onSearch||(F=l.values)!=null&&F.length?n.jsx(D,{name:"value",children:n.jsx(he,{searchable:!0,allowCreate:!0,allowClear:!0,options:l.values??[],label:r("label.value"),onQuery:l.onSearch})}):n.jsx(D,{name:"value",children:n.jsx(Be,{label:r("label.value"),allowClear:!0})});if(l.type===$.TEXT)return n.jsx(D,{name:"value",children:n.jsx(Zn,{rows:3,label:r("label.value"),allowClear:!0})});if((l==null?void 0:l.type)===$.DECIMAL||(l==null?void 0:l.type)===$.NUMBER){const T=l.type===$.DECIMAL?.1:1;return(s==null?void 0:s.operator)===w.BETWEEN?n.jsx(D,{name:"value",children:n.jsxs(qe,{label:r("label.value"),children:[n.jsx(D,{name:"value[0]",children:n.jsx(De,{step:T,allowClear:!0})}),n.jsx("span",{className:"p-2 text-muted",children:"≷"}),n.jsx(D,{name:"value[1]",children:n.jsx(De,{step:T,allowClear:!0})})]})}):n.jsx(D,{name:"value",children:n.jsx(De,{label:r("label.value"),step:T,allowClear:!0})})}if((l==null?void 0:l.type)===$.DATE||(l==null?void 0:l.type)===$.DATETIME){const T=l.type===$.DATETIME?"datetime":"date";return(s==null?void 0:s.operator)===w.BETWEEN?n.jsx(D,{name:"value",children:n.jsxs(qe,{label:r("label.value"),children:[n.jsx(D,{name:"value[0]",children:n.jsx(Me,{type:T,allowClear:!0})}),n.jsx("span",{className:"p-2 text-muted",children:"≷"}),n.jsx(D,{name:"value[1]",children:n.jsx(Me,{type:T,allowClear:!0})})]})}):n.jsx(D,{name:"value",children:n.jsx(Me,{type:T,allowClear:!0})})}},[l,s==null?void 0:s.operator]),E=o.useCallback(u=>{const d={id:u.id,field:u.field,negate:u.negate,operator:u.operator,value:u.value,label:u.label,type:l==null?void 0:l.type};a==null||a(d),p==null||p.events.emit("close")},[l,a]);return n.jsx(Pe,{formRef:f,schema:za,defaultValues:s,onChange:y,onSubmit:E,children:n.jsxs("div",{className:"w-[32rem]",children:[n.jsxs(Un,{children:[n.jsx(Le,{flex:"fill",children:n.jsx(D,{name:"field",children:n.jsx(he,{required:!0,searchable:!0,ref:b,label:r("label.field"),options:m,labelProperty:"label",valueProperty:"field",groupProperty:"type"})})}),n.jsxs(Le,{flex:"auto",className:"text-center",children:[n.jsx("label",{className:"block py-0.5 text-sm",children:r("label.exclude")}),n.jsx(D,{name:"negate",children:n.jsx(Ue,{color:"danger"})})]}),n.jsx(Le,{flex:"auto",className:"basis-28",children:n.jsx(D,{name:"operator",children:n.jsx(he,{label:r("label.operator"),options:v,renderer:u=>r(`operator.${u}`)})})})]}),n.jsx("br",{}),x,n.jsx("br",{}),n.jsx(D,{name:"label",children:n.jsx(Be,{label:r("label.label"),placeholder:r("label.label"),decorateEnd:!(e!=null&&e.label)&&n.jsx("span",{className:"text-sm opacity-65 pe-4",children:"Optional"})})}),n.jsxs("div",{className:"flex mt-4 justify-end gap-1 sticky bottom-1 bg-base",children:[t&&n.jsx("div",{className:"flex-1",children:n.jsx(Y,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",color:"danger",onClick:t,children:r("label.remove")})}),n.jsx(Y,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",children:r("label.cancel")}),n.jsx(Y,{type:"submit",variant:"solid",size:"sm",children:r("label.apply")})]})]})})};En.__docgenInfo={description:"",methods:[],displayName:"FilterForm",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filter: FilterObject) => void",signature:{arguments:[{type:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};function tn(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,r)}return t}function Xa(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?tn(Object(t),!0).forEach(function(r){Ne(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ha=function(a){var t=a.ref,r=a.value,p=a.schema,m=a.handlebarSuggestions,b=a.required,f=a.readOnly,s=a.minimal,y=a.onChange,l=a.language,v=l===void 0?"json":l,x=o.useState(),E=K(x,2),u=E[0],d=E[1],c=o.useState(),h=K(c,2),A=h[0],k=h[1],F=ra(),T=o.useState(""),q=K(T,2),_=q[0],P=q[1];o.useLayoutEffect(function(){u&&P(F?"vs-dark":"light")},[F,u]);var L=o.useCallback(function(G){return u==null?void 0:u.layout(G)},[u]),g=na(L),i=o.useDeferredValue(r),M=o.useMemo(function(){return $n(i)?i:JSON.stringify(i,null,4)},[i]),R=jn(function(G){var N=u==null?void 0:u.getModel();if(N){var V=A==null?void 0:A.editor.getModelMarkers({owner:N.getLanguageId()});(V==null?void 0:V.filter(function(X){return X.severity>7}).length)===0&&(y==null||y(G))}},[y,u],1e3);o.useImperativeHandle(t,function(){return{getValue:function(){return u==null?void 0:u.getValue()},validate:function(){var N=u==null?void 0:u.getModel();if(N){var V=A==null?void 0:A.editor.getModelMarkers({owner:N.getLanguageId()});return(V==null?void 0:V.filter(function(te){return te.severity>8}).length)===0}try{var X=u==null?void 0:u.getValue();return v==="json"&&(X=JSON.parse(X)),b?!pe(X):!0}catch{return!1}}}},[b,v]);var j=o.useRef(null),I=o.useCallback(function(G){if(v==="json"&&p){var N,V=ea(p),X=V[0],te=V.slice(1);(N=G.languages)===null||N===void 0||(N=N.json)===null||N===void 0||N.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[Xa({fileMatch:["*"]},X)].concat(Dn(te))})}if(v==="html"&&m){var le,J;(le=j.current)===null||le===void 0||(J=le.dispose)===null||J===void 0||J.call(le),j.current=G.languages.registerCompletionItemProvider("html",{triggerCharacters:["{{"],provideCompletionItems:function(se,Z){var we=se.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:Z.lineNumber,endColumn:Z.column}),Ee=we.match(/\{\{(.*)([^}])?$/);if(!Ee)return{suggestions:[]};var me=se.getWordUntilPosition(Z),be={startLineNumber:Z.lineNumber,endLineNumber:Z.lineNumber,startColumn:me.startColumn,endColumn:me.endColumn};return{suggestions:m.map(function(ve){return{label:ve.text,kind:G.languages.CompletionItemKind.Text,documentation:ve.description,insertText:ve.text,range:be}})}}})}},[p,v]),ae=o.useCallback(function(G,N){N.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[]})},[]);return n.jsx(aa,{className:"relative",children:n.jsx("div",{ref:g,"data-ref":"codeEditor",className:U("fabric-codeEditor","absolute inset-0"),children:n.jsx(ta,{editorDidMount:function(N,V){return[!!N&&d(N),!!V&&k(V)]},editorWillMount:I,editorWillUnmount:ae,value:M,language:v,onChange:R,theme:_,className:"fabric-editor",options:{readOnly:f,minimap:{enabled:!s},scrollBeyondLastLine:!1,folding:!s,lineNumbers:s?"off":void 0,wordWrap:"on",fontFamily:'Menlo, Monaco, "Courier New", monospace'}})})})};const Ua=new dn({id:H().required(),label:H().required(),query:H().required().test(e=>{try{return!pe(JSON.parse(e))}catch{return!1}})}),Sn=({filter:e,onChange:a,onRemove:t})=>{const{t:r}=ne("searchbar"),p=_e(),{defaultQuery:m="",querySchema:b,queryLanguage:f}=We(),s=o.useRef(null),y=o.useMemo(()=>e&&"query"in e&&e.query?{id:e.id,query:JSON.stringify(JSON.parse(e.query??"{}"),null,4),label:e.label}:{id:ye(),label:"",query:m},[e]);o.useEffect(()=>{setTimeout(()=>{var v;(v=s.current)==null||v.focus()},100)},[]);const l=o.useCallback(v=>{const x={id:v.id,query:v.query,label:v.label};a==null||a(x),p==null||p.events.emit("close")},[a]);return n.jsxs(Pe,{schema:Ua,defaultValues:y,onSubmit:l,children:[n.jsx(ua,{color:"warning",children:"For advanced users only!"}),n.jsx(D,{name:"label",children:n.jsx(Be,{required:!0,ref:s,label:r("label.label"),placeholder:r("label.label")})}),n.jsx(D,{name:"query",children:({checked:v,error:x,invalid:E,ref:u,...d})=>n.jsxs("div",{className:"my-2",children:[n.jsx("label",{className:U("block px-2",E&&"text-danger-600"),children:r("label.query")}),n.jsx("div",{className:"h-[24rem] w-[36rem] grid outline place-content-start",style:{gridTemplate:'"content" 1fr/1fr'},children:n.jsx(Ha,{language:f??"text",minimal:!0,required:!0,...d,schema:b})})]})}),n.jsxs("div",{className:"flex mt-4 justify-end gap-1 sticky bottom-1 bg-base",children:[t&&n.jsx("div",{className:"flex-1",children:n.jsx(Y,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",color:"danger",onClick:t,children:r("label.remove")})}),n.jsx(Y,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",children:r("label.cancel")}),n.jsx(Y,{type:"submit",variant:"solid",size:"sm",children:r("label.apply")})]})]})};Sn.__docgenInfo={description:"",methods:[],displayName:"QueryForm",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filter: FilterObject) => void",signature:{arguments:[{type:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const ze=({filter:e,onRemove:a,onChange:t})=>{const{t:r}=ne("searchbar"),{fields:p}=We(),[m,b]=o.useState(pe(p));return o.useEffect(()=>{b(!!e&&"query"in e)},[e]),n.jsxs("div",{className:"px-2 py-1 bg-base outline min-w-[420px]",children:[!pe(p)&&n.jsx("div",{className:"pb-4 flex justify-end",children:n.jsx("span",{role:"none",className:"text-sm link",onClick:()=>b(!m),children:r(m?"label.basicFilter":"label.customQuery")})}),!m&&n.jsx(En,{filter:e,onRemove:a,onChange:t}),m&&n.jsx(Sn,{filter:e,onRemove:a,onChange:t})]})};ze.__docgenInfo={description:"",methods:[],displayName:"FilterEdit",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterObject) => void",signature:{arguments:[{type:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const Tn=({filter:e,onRemove:a})=>{const{t}=ne("searchbar"),r=o.useMemo(()=>{var p,m,b,f;if("query"in e)return JSON.stringify(JSON.parse(e.query??"{}"),null,2);if("field"in e){let s=(p=e.value)==null?void 0:p.toString();return e.operator===w.BETWEEN&&ue(e.value)&&(s=`[${(m=e.value)==null?void 0:m.join(" - ")}]`),e.operator===w.ANY&&ue(e.value)&&(s=`[${(b=e.value)==null?void 0:b.join(", ")}]`),e.operator===w.ALL&&ue(e.value)&&(s=`(${(f=e.value)==null?void 0:f.join(", ")})`),n.jsxs(o.Fragment,{children:[e.negate&&n.jsx("b",{children:"NOT "}),n.jsx("span",{children:e.field}),n.jsxs("b",{children:[" ",t(`operator.${e.operator}`)," "]}),n.jsx("div",{children:s})]})}return""},[e]);return n.jsxs("div",{className:"p-2 bg-base relative",children:["query"in e&&n.jsx("div",{className:"absolute top-2 end-2 z-10",children:n.jsx(Jn,{size:"sm",text:r})}),n.jsx("pre",{className:"overflow-auto bg-base outline text-sm p-2 max-h-[24rem] max-w-[48rem] min-w-[24rem]",children:r}),!e.required&&n.jsx(Y,{size:"sm",variant:"link",color:"danger","data-dropdown-dismiss":"true",onClick:a,children:t("label.remove")})]})};Tn.__docgenInfo={description:"",methods:[],displayName:"FilterView",props:{filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ka="M9,5C10.04,5 11.06,5.24 12,5.68C12.94,5.24 13.96,5 15,5A7,7 0 0,1 22,12A7,7 0 0,1 15,19C13.96,19 12.94,18.76 12,18.32C11.06,18.76 10.04,19 9,19A7,7 0 0,1 2,12A7,7 0 0,1 9,5M8.5,12C8.5,13.87 9.29,15.56 10.56,16.75L11.56,16.29C10.31,15.29 9.5,13.74 9.5,12C9.5,10.26 10.31,8.71 11.56,7.71L10.56,7.25C9.29,8.44 8.5,10.13 8.5,12M15.5,12C15.5,10.13 14.71,8.44 13.44,7.25L12.44,7.71C13.69,8.71 14.5,10.26 14.5,12C14.5,13.74 13.69,15.29 12.44,16.29L13.44,16.75C14.71,15.56 15.5,13.87 15.5,12Z",Ya="M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z",qn=({filter:e,fields:a,editable:t,onChange:r,onRemove:p})=>{const{t:m}=ne("searchbar"),[b,f]=o.useState();return b==="edit"?n.jsx(ze,{filter:e,onChange:r,onRemove:p}):b==="view"?n.jsx(Tn,{filter:e,onRemove:p}):n.jsxs(Qe,{className:"text-sm",children:[t&&e.canEdit!==!1?n.jsx(Q,{icon:z.edit,label:m("label.edit"),"data-dropdown-dismiss":"false",onClick:()=>{f("edit")}}):n.jsx(Q,{icon:z.eye,label:m("label.view"),"data-dropdown-dismiss":"false",onClick:()=>{f("view")}}),n.jsx(ge,{}),e.operator&&[w.ALL,w.ANY].includes(e.operator)&&n.jsx(Q,{label:m(e.operator===w.ALL?"label.matchAny":"label.matchAll"),icon:m(e.operator===w.ALL?Ya:Ka),onClick:()=>r({...e,operator:e.operator===w.ALL?w.ANY:w.ALL})}),e.canPin!==!1&&n.jsx(Q,{label:m(e.pinned?"label.unpin":"label.pin"),onClick:()=>r({...e,pinned:!e.pinned})}),e.canInvert!==!1&&e.field&&n.jsx(Q,{label:m(e.negate?"label.include":"label.exclude"),onClick:()=>r({...e,negate:!e.negate})}),e.canDisable!==!1&&n.jsx(Q,{label:m(e.disabled?"label.enable":"label.disable"),onClick:()=>r({...e,disabled:!e.disabled})}),!e.required&&n.jsx(ge,{}),!e.required&&n.jsx(Q,{color:"danger",icon:z.remove,label:m("label.remove"),onClick:()=>p()})]})};qn.__docgenInfo={description:"",methods:[],displayName:"FilterMenu",props:{fields:{required:!1,tsType:{name:"Array",elements:[{name:"FilterField"}],raw:"FilterField[]"},description:""},editable:{required:!1,tsType:{name:"boolean"},description:""},filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterObject) => void",signature:{arguments:[{type:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const On=({filter:e,fields:a,editable:t,includedColor:r="primary-500",excludedColor:p="danger-500",onChange:m,onRemove:b})=>{const{t:f}=ne("searchbar"),s=o.useMemo(()=>{var v;return e.label?n.jsxs(o.Fragment,{children:[e.field&&e.negate&&n.jsx("span",{className:"font-semibold",children:"NOT"}),n.jsx("span",{children:e.label})]}):n.jsxs(o.Fragment,{children:[e.field&&e.negate&&n.jsx("span",{className:"font-semibold",children:"NOT"}),n.jsx("span",{children:e.field}),n.jsx("span",{className:"font-semibold",children:f(`operator.${e.operator}`,{defaultValue:e.operator})}),"value"in e&&!cn(e.value)&&n.jsx("span",{className:"truncate block",children:(v=e.value)==null?void 0:v.toString().substring(0,24)})]})},[e]),y=o.useMemo(()=>e.color??(e.field&&e.negate?p:r),[e,r,p]),l=o.useMemo(()=>{if(e.canDisable!==!1)return e.disabled?z.checkboxOff:z.checkboxOn},[e]);return n.jsxs(Oe,{showArrow:!0,children:[n.jsx(Fe,{size:"sm",color:y,className:U("outline max-w-60",e.disabled&&"opacity-65"),variant:e.pinned?"solid":void 0,icon:l,iconColor:y,onIconClick:v=>[m({...e,disabled:!e.disabled}),v.stopPropagation()],"data-ref":"filterTag","data-test-value":e.id,stopPropagation:!0,onRemove:e.required?void 0:()=>b(),children:n.jsxs("div",{className:U("flex gap-1 items-center",e.disabled&&"line-through opacity-65"),children:[e.pinned&&n.jsx(Ie,{className:"flex-content",icon:e.icon??z.pin}),s]})}),n.jsx(qn,{filter:e,fields:a,editable:t,onChange:m,onRemove:b})]})};On.__docgenInfo={description:"",methods:[],displayName:"FilterTag",props:{filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},editable:{required:!1,tsType:{name:"boolean"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterObject) => void",signature:{arguments:[{type:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""},includedColor:{defaultValue:{value:'"primary-500"',computed:!1},required:!1},excludedColor:{defaultValue:{value:'"danger-500"',computed:!1},required:!1}}};const In=({filters:e=[],allowAdd:a,fields:t,editable:r,querySchema:p,queryLanguage:m,defaultQuery:b,includedColor:f,excludedColor:s,onFilterChanged:y})=>{const{t:l}=ne("searchbar"),v=o.useCallback(d=>{const c=[...e];c.splice(d,1),y==null||y(c)},[e]),x=o.useCallback((d,c)=>{const h=[...e];cn(c)?h.push(d):h.splice(c,1,d),y==null||y(h)},[e]),E=o.useCallback(d=>{const c=[];d==="removeAll"&&c.push(...e.filter(h=>h.required)),d!=="removeAll"&&c.push(...e.map(h=>(d==="disableAll"&&(h.disabled=!0),d==="enableAll"&&(h.disabled=!1),d==="toggleDisable"&&(h.disabled=!h.disabled),d==="excludeAll"&&h.field&&(h.negate=!0),d==="includeAll"&&h.field&&(h.negate=!1),d==="invertAll"&&h.field&&(h.negate=!h.negate),{...h}))),y==null||y(c)},[e]),u=o.useMemo(()=>{const d={someDisabled:!1,someEnabled:!1,someExcluded:!1,someIncluded:!1,canRemoveAll:!1};return e.forEach(c=>{c.disabled&&c.canDisable!==!1&&!d.someDisabled&&(d.someDisabled=!0),!c.disabled&&c.canDisable!==!1&&!d.someEnabled&&(d.someEnabled=!0),c.field&&c.negate&&c.canInvert!==!1&&!d.someExcluded&&(d.someExcluded=!0),c.field&&!c.negate&&c.canInvert!==!1&&!d.someIncluded&&(d.someIncluded=!0),!c.required&&!d.canRemoveAll&&(d.canRemoveAll=!0)}),d},[e]);return n.jsx(wn.Provider,{value:{defaultQuery:b,querySchema:p,queryLanguage:m,fields:t},children:n.jsxs("div",{className:"flex flex-wrap gap-1 items-center",children:[n.jsxs(Oe,{showArrow:!0,disabled:pe(e),children:[n.jsx(Ie,{icon:z.config,className:U(pe(e)&&"pointer-events-none opacity-30"),color:pe(e)?void 0:"primary"}),n.jsxs(Qe,{className:"text-sm",onClick:E,children:[u.someDisabled&&n.jsx(Q,{id:"enableAll",label:l("label.enableAll")}),u.someEnabled&&n.jsx(Q,{id:"disableAll",label:l("label.disableAll")}),n.jsx(Q,{icon:z.invertDisable,id:"toggleDisable",label:l("label.toggleDisable")}),n.jsx(ge,{}),u.someExcluded&&n.jsx(Q,{id:"includeAll",label:l("label.includeAll")}),u.someIncluded&&n.jsx(Q,{id:"excludeAll",label:l("label.excludeAll")}),n.jsx(Q,{id:"invertAll",icon:z.invertExclude,label:l("label.invertAll")}),n.jsx(ge,{}),n.jsx(Q,{id:"removeAll",color:"danger",icon:z.remove,label:l("label.removeAll"),disabled:!u.canRemoveAll})]})]}),e==null?void 0:e.map((d,c)=>n.jsx(On,{filter:d,editable:r,includedColor:f,excludedColor:s,onRemove:()=>v(c),onChange:h=>x(h,c)},c)),a&&n.jsxs(Oe,{showArrow:!0,children:[n.jsx(Fe,{size:"sm",className:"!outline-dashed !outline-tint-400",icon:z.insert,children:l("label.add")}),n.jsx(ze,{onChange:x})]})]})})};In.__docgenInfo={description:`FilterBar component allows users to manage a list of filters.
It provides options to add, remove, and modify filters,
as well as to enable or disable all filters at once.
It also supports toggling between included and excluded filters.

@param {FilterBarProps} props - The properties for the FilterBar component.
@returns {JSX.Element} The rendered FilterBar component.

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
@see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/searchbar-searchbar--search-bar} for more details on the properties.`,methods:[],displayName:"FilterBar",props:{filters:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]}],raw:"FilterObject[]"},description:`Filters list
@default []`,defaultValue:{value:"[]",computed:!1}},fields:{required:!1,tsType:{name:"Array",elements:[{name:"FilterField"}],raw:"FilterField[]"},description:`Field list
(Required when filter bar enabled)`},editable:{required:!1,tsType:{name:"boolean"},description:"Editable filters"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable component"},emptyFields:{required:!1,tsType:{name:"string"},description:"Message for empty field list"},includedColor:{required:!1,tsType:{name:"string"},description:"included filter chip color"},excludedColor:{required:!1,tsType:{name:"string"},description:"excluded filter chip color"},allowAdd:{required:!1,tsType:{name:"boolean"},description:""},queryLanguage:{required:!1,tsType:{name:"union",raw:'"text" | "json"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"json"'}]},description:""},querySchema:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ uri: string; schema: KeyValue }",signature:{properties:[{key:"uri",value:{name:"string",required:!0}},{key:"schema",value:{name:"KeyValue",required:!0}}]}}],raw:"Array<{ uri: string; schema: KeyValue }>"},description:""},defaultQuery:{required:!1,tsType:{name:"string"},description:""},onFilterChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: FilterObject[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]}],raw:"FilterObject[]"},name:"filters"}],return:{name:"void"}}},description:`On filters change, (add/update/delete)
@param filters`}}};const Xe=({historyKey:e="ruf:search",historyCount:a=20,defaultQueryList:t,prepend:r,append:p,decorateEnd:m,decorateStart:b,children:f,hideFilters:s,defaultCollapsed:y=!1,disabled:l,onCollapsed:v,onQuery:x,onSearch:E,query:u,ref:d,multiple:c,filters:h=He,...A})=>{const{t:k}=ne("searchbar"),[F,T]=la(e,t??[]),[q,_]=o.useState(y),P=o.useMemo(()=>c?He:"",[c]),L=jn((j,I)=>{i({type:"dirty",dirty:!1}),E==null||E({query:j,filters:I})},[]),[g,i]=o.useReducer((j,I)=>I.type==="reset"?{...j,dirty:!1,query:I.query,filters:I.filters}:I.type==="dirty"?{...j,dirty:I.dirty}:I.type==="query"?(!c&&L(I.query??P,j.filters),{...j,dirty:!1,query:I.query??P}):I.type==="filter"?(L(j.query,I.filters??[]),{...j,dirty:!1,filters:I.filters??[]}):j,{dirty:!1,query:u,filters:h});o.useEffect(()=>{i({type:"reset",filters:h,query:u})},[h,u]);const M=j=>{const I=ue(j)?j:[j];T(sa([...I,...F]).slice(0,a)),i({type:"query",query:j})},R=(j=[])=>{i({type:"filter",filters:j})};return n.jsxs("div",{children:[n.jsxs("div",{className:"flex flex-nowrap gap-1 mb-1",children:[n.jsxs(qe,{"data-inner":!0,className:"flex-1",children:[!s&&n.jsx(Y,{variant:"link",badge:h.length,onClick:()=>_(!q),children:k("label.filters")}),r,n.jsx(pa,{allowClear:!0,expandOnEdit:!0,ref:d,multiple:c,history:F,value:g.query,decorateEnd:m,decorateStart:b,onInput:()=>i({type:"dirty",dirty:!0}),onSelect:M,"data-ref":"searchbarInput",onEnterPressed:()=>L(g.query,g.filters)}),p,n.jsx(Y,{variant:"solid",color:g.dirty?"warning":"primary",onClick:()=>L(g.query,g.filters),children:k(g.dirty?"label.update":"label.refresh")})]}),f]}),!s&&!q&&n.jsx(In,{...A,filters:g.filters,onFilterChanged:R})]})};Xe.__docgenInfo={description:`This component provides a search input with autocomplete functionality,
a button to trigger search, and an optional filter bar.
It supports history of search queries, multiple selection, and custom decorations.
It can be collapsed to hide filters and has options for customization.

@param {SearchBarProps} props - The properties for the SearchBar component.
@returns {JSX.Element} The rendered SearchBar component.

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

@see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/searchbar-searchbar--search-bar} for more details on the properties.`,methods:[],displayName:"SearchBar",props:{query:{required:!1,tsType:{name:"AnyObject"},description:"Query string"},historyCount:{required:!1,tsType:{name:"number"},description:`Search history count
@default 20`,defaultValue:{value:"20",computed:!1}},historyKey:{required:!1,tsType:{name:"string"},description:`Search history storage key
@default: "ax:search"`,defaultValue:{value:'"ruf:search"',computed:!1}},defaultQueryList:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default query items for suggest"},prepend:{required:!1,tsType:{name:"ReactElement"},description:"Add-on before search input"},append:{required:!1,tsType:{name:"ReactElement"},description:"Add-on after search input"},hideFilters:{required:!1,tsType:{name:"boolean"},description:"Hide filter bar"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable component"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:`Collapse filters
@default true`,defaultValue:{value:"false",computed:!1}},decorateStart:{required:!1,tsType:{name:"union",raw:"JSX.Element | string | number | boolean",elements:[{name:"JSX.Element"},{name:"string"},{name:"number"},{name:"boolean"}]},description:""},decorateEnd:{required:!1,tsType:{name:"union",raw:"JSX.Element | string | number | boolean",elements:[{name:"JSX.Element"},{name:"string"},{name:"number"},{name:"boolean"}]},description:""},onCollapsed:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:`On filter collapsed
@param collapsed`},onQuery:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => Promise<string[]> | string[]",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"union",raw:"Promise<string[]> | string[]",elements:[{name:"Promise",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"Promise<string[]>"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}}},description:`On query string change event
@param query`},filters:{defaultValue:{value:"EMPTY_ARRAY",computed:!0},required:!1}},composes:["Partial","RefProp"]};const{fn:Ja}=__STORYBOOK_MODULE_TEST__,Br={component:Xe,title:"@searchbar/SearchBar",parameters:{layout:"padded",jest:["searchbar/tests/SearchBar.test.tsx"]}},Za=[{uri:"http://react-fabric/schema.json",schema:{type:"object",$ref:"http://react-fabric/base-schema.json"}},{uri:"http://react-fabric/base-schema.json",schema:{type:"object",properties:{bool:{$ref:"http://react-fabric/bool-schema.json"},exists:{$ref:"http://react-fabric/exists-schema.json"},query_string:{$ref:"http://react-fabric/query-schema.json"}}}},{uri:"http://react-fabric/exists-schema.json",schema:{type:"object",properties:{field:{type:"string"}},required:["field"]}},{uri:"http://react-fabric/query-schema.json",schema:{type:"object",properties:{fields:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},query:{type:"string"}},required:["query"]}},{uri:"http://react-fabric/bool-schema.json",schema:{type:"object",properties:{filter:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},must:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},should:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},must_not:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},should_not:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},minimum_should_match:{type:"number"}}}}],$e={render:e=>n.jsx(Xe,{...e,onSearch:Ja(),append:n.jsx(Da,{variant:"link",value:"$year-5|$now"}),children:n.jsxs(Oe,{placement:"bottom-end",children:[n.jsx(Y,{icon:z.menu,"aria-label":"menu",variant:"link"}),n.jsxs(Qe,{className:"text-sm",children:[n.jsx(Q,{label:"Open"}),n.jsx(Q,{label:"Save"}),n.jsx(ge,{}),n.jsx(Q,{label:"Share"})]})]})}),args:{allowAdd:!0,excludedColor:"#f00",query:"test AND query",querySchema:Za,queryLanguage:"json",defaultQuery:`{
	
}`,fields:[{field:"id",label:"ID",type:$.ID},{field:"name",label:"Name",type:$.STRING},{field:"age",label:"Age",type:$.NUMBER},{field:"dob",label:"DOB",type:$.DATE},{field:"extras",label:"Extras",type:$.NONE},{field:"country",label:"Country",type:$.STRING,onSearch(e){return new Promise(a=>{setTimeout(()=>{a(kn.list.filter(t=>Ke(t.name,e)||Ke(t.fullname,e)).map(t=>t.name))},1e3)})}}],filters:[{id:ye(),field:"name",operator:w.IS,value:"Smeghead",pinned:!0,canPin:!1,canDisable:!1,required:!0,canEdit:!1,color:"lilac",icon:"mdi mdi-tray-full"},{id:ye(),field:"name",operator:w.IS,value:"Smeghead"},{id:ye(),field:"name",negate:!0,operator:w.IS,value:"Smeghead",label:"New filter"},{id:ye(),query:JSON.stringify({query:"test"}),label:"Query filter"}]}};var ln,sn,on;$e.parameters={...$e.parameters,docs:{...(ln=$e.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  render: args => {
    return <SearchBar {...args} onSearch={fn()} append={<SuperDate variant="link" value="$year-5|$now" />}>
        <Dropdown placement="bottom-end">
          <Button icon={CoreIcons.menu} aria-label="menu" variant="link" />
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
    fields: [{
      field: "id",
      label: "ID",
      type: FIELD_TYPE.ID
    }, {
      field: "name",
      label: "Name",
      type: FIELD_TYPE.STRING
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
            resolve(Countries.list.filter(ctr => matchString(ctr.name, q) || matchString(ctr.fullname, q)).map(c => c.name));
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
}`,...(on=(sn=$e.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};const Vr=["_SearchBar"];export{$e as _SearchBar,Vr as __namedExportsOrder,Br as default};
