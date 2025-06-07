import{_ as ke,j as n,m as H,r as o,l as K,G as un,O as Nn,aP as ce,aM as pe,aS as ne,aT as Te,aV as X,aW as Be,bY as ye,bZ as dn,b_ as $n,bo as Cn,s as Dn,bi as An,aN as cn,bj as Xe,aQ as kn}from"./iframe-BcXNitKG.js";import{D as Oe}from"./Dropdown-DUHKUE_z.js";import{B as J}from"./Button-7R_E-GE9.js";import{C as U,b as pn}from"./index-DUA9IMpG.js";import{D as ge}from"./Divider-DB8bkHxO.js";import{M as Qe,a as W}from"./Menu-CIViNpVY.js";import{I as Ie,_ as Ne,T as Fn}from"./Tooltip-J_gHpl9C.js";import{a as mn,s as vn,f as bn,o as fn,i as Pn,j as Rn,b as Mn,c as yn,g as hn,k as Bn,d as Vn,e as Ln,F as Qn,h as _n,u as _e}from"./floating-ui.react-CCZcFCqr.js";import{u as gn}from"./Global-HPy1X0OU.js";import{C as Fe}from"./BasePanel-DkxgOkoR.js";import{u as Gn,O as Wn,F as qe,C as D,N as Ae,S as he,a as Pe,T as Un,b as Ce,R as zn,E as Xn}from"./Select-DKu2rxhM.js";import{C as Ge}from"./Content-BJKCk6Ue.js";import{D as ie,a as xe}from"./Google-DOYfq3v8.js";import"./ColorPicker-0pYYboV3.js";import{R as Hn,C as Re}from"./Responsive-Cmy9Pu9O.js";import{D as Kn}from"./DatePanel-DygvepWU.js";import{I as xn}from"./InputWrapper-DVhr945a.js";import{u as Jn}from"./eventHandlers-JUcml5Fv.js";import{I as Ve,C as Yn}from"./Input-IeT5RECO.js";import{S as He}from"./Switch-CMDZGUpu.js";import{T as Zn}from"./Textarea-FrvDVWtZ.js";import{_ as er}from"./toArray-DlTuwiZT.js";import{u as jn}from"./useDebounce-rX8HuXnO.js";import{u as nr}from"./useResizeObserver-Cq2Z_pjG.js";import{S as rr}from"./Section-BAtoQgEv.js";import{u as ar}from"./useIsDark-DTjt9LFI.js";import{M as tr}from"./editor-3z7Z2_Gm.js";import{u as lr}from"./useStorage-VRxlaZRS.js";import{d as sr}from"./_dedupe-Dul_0PfE.js";import{m as Ke}from"./_isEqual-JedAdon-.js";import"./cloneElement-Bgycha4-.js";import"./zh-CN-Bmeuy_N5.js";import"./getDay-G_5ar-z-.js";import"./DropdownTool-C8jg9dyY.js";import"./endOfDay-BHO0gGVd.js";import"./EmptyContent-CnA5ADIa.js";import"./ErrorBoundary-C8J7aorp.js";import"./createClass-B8xyeRfs.js";import"./index-Doar7ujF.js";import"./index-CqCs8NGq.js";var or=["children","color","legend","title","icon","border","onClose","className"];function Je(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,a)}return t}function Ye(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(t),!0).forEach(function(a){Ne(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var ir={none:"bg-base text-tint-900 border-tint-100",tint:"bg-tint-50/50 text-tint-800 border-tint-300",primary:"bg-primary-50/50 text-primary-800 border-primary-300",accent:"bg-accent-50/50 text-accent-800 border-accent-300",info:"bg-info-50/50 text-info-800 border-info-300",danger:"bg-danger-50/50 text-danger-800 border-danger-300",success:"bg-success-50/50 text-success-800 border-success-300",warning:"bg-warning-50/50 text-warning-800 border-warning-300"},ur=function(r){var t=r.children,a=r.color,p=a===void 0?"tint":a,b=r.legend,v=r.title,f=r.icon,s=r.border,y=r.onClose,l=r.className,m=ke(r,or);return n.jsxs("fieldset",Ye(Ye({className:H("block rounded-capped border max-w-full relative overflow-hidden mb-4",ir[p],l,s==="dashed"&&"border-dashed",s==="dotted"&&"border-dotted")},m),{},{children:[b&&n.jsx("legend",{className:"px-2 mx-4 font-medium","data-ref":"calloutLegend",children:b}),n.jsxs("div",{className:H("break-words whitespace-break-spaces p-2"),children:[n.jsxs("div",{className:"flex flex-nowrap items-center text-xl pe-4 gap-2 mb-4 empty:mb-0",children:[f&&n.jsx(Ie,{icon:f,"data-ref":"calloutIcon"}),v&&n.jsx("p",{className:"flex-1","data-ref":"calloutTitle",children:v})]}),n.jsx("div",{className:"pe-4",children:t})]}),y&&n.jsx(Ie,{size:"md","data-ref":"calloutClose",className:H("absolute end-2",b?"top-0":"top-2"),icon:U.close,onClick:y})]}))},dr=["ref","name","value","invalid","readOnly","disabled","required","placeholder","autoFocus","error","type","onBlur","onFocus","onChange","onEnterPressed","format","min","max"];function Ze(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,a)}return t}function fe(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ze(Object(t),!0).forEach(function(a){Ne(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Me=function(r){var t=r.ref,a=r.name,p=r.value,b=r.invalid,v=r.readOnly,f=r.disabled,s=r.required,y=r.placeholder,l=r.autoFocus,m=r.error,x=r.type,w=x===void 0?"date":x,u=r.onBlur,d=r.onFocus,c=r.onChange,h=r.onEnterPressed;r.format;var N=r.min,k=r.max,F=ke(r,dr),S=o.useState(""),T=K(S,2),Q=T[0],P=T[1],R=o.useState(""),g=K(R,2),i=g[0],M=g[1],B=o.useDeferredValue(p),j=o.useMemo(function(){return w==="datetime"?"yyyy-MM-dd HH:mm":"yyyy-MM-dd"},[w]);o.useEffect(function(){P(B??""),M(B?ie.format(B,j):"")},[B,j]);var O=Jn(h),re=o.useCallback(function(ue){var oe=ue==null?void 0:ue.currentTarget.value;if(oe){var G,V=ie.parseDate(oe);P(V==null||(G=V.toISOString)===null||G===void 0?void 0:G.call(V)),M(ie.format(V,j)),c!=null&&o.startTransition(function(){var Se;return c(V==null||(Se=V.toISOString)===null||Se===void 0?void 0:Se.call(V))})}else P(""),M(""),c!=null&&o.startTransition(function(){return c(null)})},[c,j]),_=o.useCallback(function(ue){if(ue){var oe,G=ie.parseDate(ue);P(G==null||(oe=G.toISOString)===null||oe===void 0?void 0:oe.call(G)),M(ie.format(G,j)),c!=null&&o.startTransition(function(){var V;return c(G==null||(V=G.toISOString)===null||V===void 0?void 0:V.call(G))})}else P(""),M(""),c!=null&&o.startTransition(function(){return c(null)})},[c,j]),I=o.useRef(null),L=o.useState(!1),z=K(L,2),te=z[0],le=z[1],Y=mn({open:te,onOpenChange:function(oe,G,V){console.log(V),V!=="reference-press"&&le(oe)},strategy:"fixed",placement:"bottom-start",whileElementsMounted:un,middleware:[vn({padding:8}),bn(),fn(9),Pn({element:I})]}),je=Y.refs,se=Y.floatingStyles,Z=Y.context,we=Rn(Z,{enabled:!f}),Ee=Mn(Z,{enabled:!f,toggle:!1}),me=yn(Z,{referencePress:!0}),be=hn([me,Ee,we]),ve=be.getReferenceProps,$e=be.getFloatingProps;return n.jsxs(xn,fe(fe({showClear:!!Q&&!f&&!v,onClear:re,invalid:b,readOnly:v,disabled:f,required:s,error:m},F),{},{children:[n.jsx("input",fe(fe({className:H("appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer",!p&&"empty"),"aria-invalid":b,"aria-disabled":f,"aria-readonly":v,"aria-errormessage":m,placeholder:y,disabled:f,readOnly:v,"data-testid":a,name:a,size:1,type:w==="datetime"?"datetime-local":"date",autoComplete:"off",autoFocus:l,value:i,ref:Nn(t,je.setReference)},ve({onBlur:u,onFocus:d})),{},{onChange:re,onKeyDown:O})),te&&n.jsxs("div",fe(fe({ref:je.setFloating,style:fe({zIndex:"var(--z-popover)"},se),className:"shadow-lg bg-base ring-1 ring-tint-100","data-ref":"dropdownBody"},$e()),{},{children:[n.jsx(Kn,{withTime:w==="datetime",value:Q,max:k,min:N,onChange:_}),n.jsx(Bn,{ref:I,context:Z,strokeWidth:.5,className:"fill-base stroke-muted"})]}))]}))},cr=["ref","name","value","invalid","readOnly","disabled","required","placeholder","autoFocus","expandOnEdit","error","history","multiple","onChange","onSelect","onInput","onFocus","onBlur","onQuery","onEnterPressed"];function en(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,a)}return t}function de(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?en(Object(t),!0).forEach(function(a){Ne(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):en(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var pr=function(r){var t,a=r.ref,p=r.name,b=r.value,v=r.invalid,f=r.readOnly,s=r.disabled,y=r.required,l=r.placeholder,m=r.autoFocus,x=r.expandOnEdit,w=r.error,u=r.history,d=r.multiple,c=r.onChange,h=r.onSelect,N=r.onInput,k=r.onFocus,F=r.onBlur,S=r.onQuery,T=r.onEnterPressed,Q=ke(r,cr),P=o.useRef(u),R=o.useRef(null),g=Gn({value:b,autoComplete:!0,options:P.current,multiple:d,onChange:c,onSelect:h,onQuery:S}),i=g.state,M=g.listRef,B=g.listContentRef,j=g.setOpen,O=g.macthOption,re=g.handleChange,_=g.handleRemove,I=g.handleQuery,L=g.setItemRef,z=g.setActiveIndex,te=o.useId(),le=mn({open:i.open,onOpenChange:function(q,E,ee){!q&&(M.current=[]),j(q)},strategy:"fixed",placement:"bottom",whileElementsMounted:un,middleware:[vn({padding:8}),bn(),fn(2)]}),Y=le.context,je=le.floatingStyles,se=le.refs,Z=yn(Y,{}),we=Vn(Y,{listRef:M,activeIndex:i.activeIndex,selectedIndex:i.selectedIndex,loop:!0,virtual:!0,focusItemOnOpen:!1,onNavigate:z}),Ee=Ln(Y,{listRef:B,activeIndex:i.activeIndex,selectedIndex:i.selectedIndex,findMatch:function(q,E){return q.find(function(ee){return O(ee,E)})},onMatch:function(q){i.open&&z(q)}}),me=hn([Z,we,Ee]),be=me.getReferenceProps,ve=me.getFloatingProps,$e=me.getItemProps,ue=o.useMemo(function(){var $=be();return de(de({},$),{},{onFocus:k,onBlur:function(E){var ee;if((ee=E.relatedTarget)!==null&&ee!==void 0&&ee.closest('[data-select-dropdown="'.concat(te,'"]'))){var ae;(ae=se.domReference.current)===null||ae===void 0||(ae=ae.querySelector("input"))===null||ae===void 0||ae.focus();return}i.open&&re(i.query),I(""),j(!1),F==null||F(E)},onKeyDown:function(E){if(E.key==="Enter"){if(E.preventDefault(),i.activeIndex!==null)return re(B.current[i.activeIndex]),E.stopPropagation(),!1;if(i.query!==void 0)return re(""),!1;var ee;T==null||T(E),(ee=R.current)===null||ee===void 0||ee.click()}else E.key==="Backspace"?!i.query&&d&&_():["ArrowUp","ArrowDown"].includes(E.key)&&(["ArrowUp","ArrowDown"].includes(E.key)&&i.activeIndex===null&&z(i.selectedIndex),setTimeout(function(){var ae;(ae=$.onKeyDown)===null||ae===void 0||ae.call($,E)},50))}})},[be,T,I,k,F,d,se,i.query,i.activeIndex]),oe=o.useMemo(function(){return ve({"data-select-dropdown":te})},[ve]),G=o.useCallback(function($){var q,E,ee=ce(i.value)?(q=i.value)===null||q===void 0||(E=q.includes)===null||E===void 0?void 0:E.call(q,$):i.value===$;return $e({"data-selected":ee?!0:void 0,onClick:function(){re($)}})},[$e,re,i.value]),V=o.useMemo(function(){if(ce(i.value))return i.value.map(function($,q){return n.jsx(Fe,{onRemove:function(){return _(q)},children:$},q)})},[i.value,i.query,l]);o.useLayoutEffect(function(){i.open&&setTimeout(function(){var $;i.selectedIndex&&(($=M.current[i.selectedIndex])===null||$===void 0||$.scrollIntoView({block:"center"}))},100)},[i.open]);var Se=o.useMemo(function(){var $,q,E;return d?($=i.query)!==null&&$!==void 0?$:"":(q=(E=i.query)!==null&&E!==void 0?E:i.value)!==null&&q!==void 0?q:""},[d,i.query,i.value]);return n.jsxs(xn,de(de({showClear:!pe(i.value),onClear:re,invalid:v,readOnly:f,disabled:s,required:y,error:w,wrapperRef:se.setReference,className:!d&&x&&i.open?"!z-[99]":"",floatingExpand:!d&&x&&i.open},Q),{},{children:[n.jsxs("div",{role:"none","data-select-display":"true",className:H("group flex-1 py-1 px-2 truncate text-start flex gap-1 relative min-h-5 justify-start",d?"flex-wrap":"flex-nowrap overflow-hidden"),onMouseUp:function(q){var E;return(E=q.currentTarget.querySelector("input"))===null||E===void 0?void 0:E.focus()},children:[V,n.jsx("textarea",de(de({readOnly:f,disabled:s,value:Se,"aria-invalid":v,"data-testid":p,name:p,size:1,ref:a,onInput:N,autoFocus:m,rows:!d&&x&&i.open?5:1,className:H("appearance-none bg-transparent outline-none border-none ring-0 flex-1 resize-none",s&&"cursor-not-allowed pointer-events-none",d&&"min-w-24 overflow-hidden",!i.open&&"overflow-hidden whitespace-nowrap"),placeholder:pe(i.value)?l:""},ue),{},{onChange:function(q){return I(q.target.value)}})),n.jsx("button",{type:"submit",ref:R,tabIndex:-1,className:"opacity-0 absolute"})]}),i.loading&&n.jsx(Ie,{animate:"spin",className:H("flex-content p-2 z-0 order-9 text-muted pointer-events-none"),icon:U.spinner}),i.open&&!i.loading&&n.jsx(Qn,{children:n.jsx(_n,{context:Y,initialFocus:-1,visuallyHiddenDismiss:!0,children:n.jsx(Wn,de(de({ref:se.setFloating,className:"outline shadow-lg max-h-[40vh] z-(--z-popover)",style:de({width:(t=se.reference.current)===null||t===void 0?void 0:t.getBoundingClientRect().width},je)},oe),{},{items:i.items,active:i.activeIndex,itemRef:L,itemProps:G,empty:n.jsx("div",{className:"text-muted text-sm px-2 py-1",children:"No history available"}),children:function(q){return q}}))})})]}))},mr=" ⇽ ",vr={quick:"حدد مسرعا",relative:"نسبيا",events:"الأحداث",absolute:"مطلق",preset:"المسبقة",current:"تيار",previous:"السابق",from:"من عند",to:"إلى","+":"من الان","-":"منذ",apply:"يتقدم",$now:"الآن",$minute:"دقيقة",$hour:"ساعة",$day:"يوم",$week:"أسبوع",$month:"شهر",$quarter:"ربع",$year:"عام",$decade:"عقد"},br={$day:"اليوم",$week:"هذا الاسبوع",$month:"هذا الشهر",$quarter:"هذا الربع",$year:"هذه السنة",$decade:"هذا العقد"},fr={$day:"غدا",$week:"الاسبوع القادم",$month:"الشهر القادم",$quarter:"الربع القادم",$year:"العام القادم",$decade:"العقد القادم",$minute:"بعد دقيقة",$hour:"بعد ساعة",$minute_plural:"بعد {{count}} دقائق",$hour_plural:"بعد {{count}} ساعات",$day_plural:"بعد {{count}} أيام",$week_plural:"بعد {{count}} أسابيع",$month_plural:"بعد {{count}} أشهر",$quarter_plural:"بعد {{count}} أرباع",$year_plural:"بعد {{count}} سنوات",$decade_plural:"بعد {{count}} عقود"},yr={$day:"في الامس",$week:"الاسبوع الماضي",$month:"الشهر الماضي",$quarter:"الربع الأخير",$year:"العام الماضي",$decade:"العقد الماضي",$minute:"منذ دقيقة",$hour:"منذ ساعة",$minute_plural:"منذ {{count}} دقيقة",$hour_plural:"منذ {{count}} ساعات",$day_plural:"منذ {{count}} أيام",$week_plural:"من {{count}} اسابيع",$month_plural:"قبل {{count}} أشهر",$quarter_plural:"منذ {{count}} أرباع",$year_plural:"منذ {{count}} سنوات",$decade_plural:"منذ {{count}} عقود"},hr={separator:mr,label:vr,now:br,next:fr,prev:yr},gr=" ⇾ ",xr={ramadan:"Ramadan",christmas:"Christmas",newYear:"New Year"},jr={quick:"Quick Select",relative:"Relative",absolute:"Absolute",events:"Events",preset:"Presets",current:"Current",previous:"Previous",from:"From",to:"To","+":"From now","-":"Ago",apply:"Apply",$now:"Now",$minute:"Minute",$hour:"Hour",$day:"Day",$week:"Week",$month:"Month",$quarter:"Quarter",$year:"Year",$decade:"Decade"},wr={$day:"Today",$week:"This week",$month:"This month",$quarter:"This quarter",$year:"This year",$decade:"This decade"},Er={$day:"Tomorrow",$week:"Next week",$month:"Next month",$quarter:"Next quarter",$year:"Next year",$decade:"Next decade",$minute:"A minute later",$hour:"An hour later",$minute_other:"{{count}} minutes later",$hour_other:"{{count}} hours later",$day_other:"{{count}} days later",$week_other:"{{count}} weeks later",$month_other:"{{count}} months later",$quarter_other:"{{count}} quarters later",$year_other:"{{count}} years later",$decade_other:"{{count}} decades later"},Sr={$day:"Yesterday",$week:"Last week",$month:"Last month",$quarter:"Last quarter",$year:"Last year",$decade:"Last decade",$minute:"A minute ago",$hour:"An hour ago",$minute_other:"{{count}} minutes ago",$hour_other:"{{count}} hours ago",$day_other:"{{count}} days ago",$week_other:"{{count}} weeks ago",$month_other:"{{count}} months ago",$quarter_other:"{{count}} quarters ago",$year_other:"{{count}} years ago",$decade_other:"{{count}} decades ago"},Tr={separator:gr,event:xr,label:jr,now:wr,next:Er,prev:Sr};pn("superdate",{en:Tr,ar:hr});var Le=function(r){var t=r.label,a=r.prefix,p=r.showApply,b=ne("superdate"),v=b.t;return n.jsxs(qe,{label:t,className:"mb-2",children:[n.jsx(D,{name:"".concat(a,".diff"),children:n.jsx(Ae,{width:"5rem",min:1,max:99})}),n.jsx(D,{name:"".concat(a,".part"),children:n.jsx(he,{width:"6rem",options:Object.values(xe).slice(1).map(function(f){return{id:f,label:v("label.".concat(f))}})})}),n.jsx(D,{name:"".concat(a,".op"),children:n.jsx(he,{width:"7rem",options:[{id:"-",label:v("label.-")},{id:"+",label:v("label.+")}]})}),p&&n.jsx(J,{variant:"solid",type:"submit",children:v("label.apply")})]})},qr=[{value:"$day",label:"superdate:now.$day"},{value:"$day-1",label:"superdate:prev.$day"},{value:"$day+1",label:"superdate:next.$day"},{value:"$week",label:"superdate:now.$week"},{value:"$week-1",label:"superdate:prev.$week"},{value:"$week+1",label:"superdate:next.$week"},{value:"$month",label:"superdate:now.$month"},{value:"$month-1",label:"superdate:prev.$month"},{value:"$month+1",label:"superdate:next.$month"},{value:"$quarter",label:"superdate:now.$quarter"},{value:"$quarter-1",label:"superdate:prev.$quarter"},{value:"$quarter+1",label:"superdate:next.$quarter"},{value:"$year",label:"superdate:now.$year"},{value:"$year-1",label:"superdate:prev.$year"},{value:"$year+1",label:"superdate:next.$year"}],Or=Te({rel:Te({diff:Be().required().label("Difference"),op:X().required().oneOf(["+","-"]).label("Operator"),part:X().required().oneOf(Object.values(xe)).label("Date part")})}),Ir=function(r){var t=r.presets,a=t===void 0?qr:t,p=r.value,b=p===void 0?"":p,v=r.onChange,f=ne(),s=f.t,y=o.useCallback(function(m){var x=m.rel,w=x.part,u=x.diff,d=x.op;v("".concat(w).concat(d).concat(u,"|").concat(xe.NOW))},[]),l=o.useMemo(function(){if(b!=null&&b.endsWith(xe.NOW)){var m,x=(m=b.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&m!==void 0?m:[],w=K(x,4),u=w[1],d=w[2],c=w[3],h=c===void 0?"0":c;return{rel:{part:u,op:d,diff:h}}}},[b]);return n.jsxs(Ge,{children:[n.jsx("div",{className:"inline-block origin-left rtl:origin-right",style:{zoom:.85},children:n.jsx(Pe,{schema:Or,onSubmit:y,defaultValues:l,children:n.jsx(Le,{label:s("superdate:label.relative"),prefix:"rel",showApply:!0})})}),n.jsx(ge,{children:s("superdate:label.preset")}),n.jsx("div",{className:"grid grid-cols-3 flex-row text-sm gap-2",children:a.map(function(m){return n.jsx("button",{className:"link appearance-none text-start",onClick:function(){return v==null?void 0:v(m.value)},children:s(m.label,{defaultValue:m.label})},m.value)})})]})},Nr=Te({from:Te({diff:Be().required().label("Difference"),op:X().required().oneOf(["+","-"]).label("Operator"),part:X().required().oneOf(Object.values(xe)).label("Date part")}),to:Te({diff:Be().required().label("Difference"),op:X().required().oneOf(["+","-"]).label("Operator"),part:X().required().oneOf(Object.values(xe)).label("Date part")})}),$r=function(r){var t=r.value,a=t===void 0?"":t,p=r.onChange,b=ne("superdate"),v=b.t,f=o.useCallback(function(y){var l=y.to,m=y.from;p("".concat(m.part).concat(m.op).concat(m.diff,"|").concat(l.part).concat(l.op).concat(l.diff))},[]),s=o.useMemo(function(){if(a!=null&&a.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)){var y,l,m=(y=a.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&y!==void 0?y:[],x=K(m,4),w=x[1],u=x[2],d=x[3],c=d===void 0?"0":d,h=(l=a.split("|").pop().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&l!==void 0?l:[],N=K(h,4),k=N[1],F=N[2],S=N[3],T=S===void 0?"0":S;return{from:{part:w,op:u,diff:c},to:{part:k,op:F,diff:T}}}},[a]);return n.jsx(Ge,{children:n.jsx("div",{className:"scale-90",children:n.jsxs(Pe,{schema:Nr,defaultValues:s,onSubmit:f,children:[n.jsx(Le,{label:v("label.from"),prefix:"from"}),n.jsx(Le,{label:v("label.to"),prefix:"to"}),n.jsx("div",{className:"flex justify-end",children:n.jsx(J,{variant:"solid",type:"submit",children:v("label.apply")})})]})})})},Cr=["as","color","size","variant","disabled","fullWidth","onChange","value","data-test-value","data-testid"];function nn(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,a)}return t}function rn(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?nn(Object(t),!0).forEach(function(a){Ne(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Dr=function(r){var t=r.events,a=r.value,p=r.presets,b=r.recurringEvents,v=r.onChange,f=ne("superdate"),s=f.t,y=_e(),l=gn(),m=l.currentCalendar,x=l.currentLocale,w=o.useMemo(function(){return m==="hijri"},[m]),u=o.useState(""),d=K(u,2),c=d[0],h=d[1],N=o.useState("quick"),k=K(N,2),F=k[0],S=k[1];o.useEffect(function(){a!=null&&a.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/)?S("relative"):a&&!(a!=null&&a.match(/^(\$\w+)/))?S("absolute"):S("quick"),a&&h(a)},[a]);var T=o.useCallback(function(Q){var P,R,g,i,M=ie.parseRange(Q);h(Q),v==null||v(Q,[(P=M[0])===null||P===void 0||(R=P.toISOString)===null||R===void 0?void 0:R.call(P),(g=M[1])===null||g===void 0||(i=g.toISOString)===null||i===void 0?void 0:i.call(g)]),y==null||y.events.emit("close")},[w,x]);return n.jsx("div",{className:H("rounded-capped outline select-none overflow-hidden grid","fabric-superDate"),children:n.jsxs(Un,{headerClassName:"border-b",onChange:S,activeTab:F,children:[n.jsx(Ce,{id:"quick",label:s("label.quick"),children:n.jsx(Ir,{value:c,onChange:T,presets:p})}),n.jsx(Ce,{id:"relative",label:s("label.relative"),children:n.jsx($r,{value:c,onChange:T})}),n.jsx(Ce,{id:"absolute",label:s("label.absolute"),children:n.jsx(Ge,{className:"p-0",children:n.jsx(zn,{withTime:!0,showHijriToggle:!0,value:c?ie.parseRange(c):void 0,showApply:!0,onChange:function(P){var R=K(P,2),g=R[0],i=R[1];return T==null?void 0:T("".concat(g,"|").concat(i))}})})}),n.jsx(Ce,{id:"events",label:s("label.events"),children:n.jsx(Xn,{isHijri:w,onChange:T,events:t,recurringEvents:b})})]})})},Ar=function(r){var t,a=r.as,p=a===void 0?"button":a,b=r.color,v=b===void 0?"primary":b,f=r.size,s=r.variant,y=r.disabled,l=r.fullWidth,m=r.onChange,x=r.value,w=r["data-test-value"],u=r["data-testid"],d=ke(r,Cr),c=gn(),h=c.currentCalendar,N=c.currentLocale,k=o.useMemo(function(){return h==="hijri"},[h]),F=o.useState(),S=K(F,2),T=S[0],Q=S[1];o.useEffect(function(){Q(x)},[x]);var P=o.useCallback(function(g){var i,M,B,j,O=ie.parseRange(g);Q(g),m==null||m(g,[(i=O[0])===null||i===void 0||(M=i.toISOString)===null||M===void 0?void 0:M.call(i),(B=O[1])===null||B===void 0||(j=B.toISOString)===null||j===void 0?void 0:j.call(B)])},[k,N]),R=p==="button"?J:Fe;return n.jsxs(Oe,{showArrow:!0,children:[n.jsx(Fn,{content:ie.relativeTooltip(T,k),children:n.jsx(R,{icon:U.clock,size:f,color:v,disabled:y,fullWidth:l,variant:s,"data-test-value":w,"data-testid":u,children:(t=ie.relativeLabel(T,k))!==null&&t!==void 0?t:""})}),n.jsx(Dr,rn(rn({},d),{},{value:T,onChange:P}))]})};const kr={filters:"المرشحات",all_filters:"جميع المرشحات",field:"مجال",operator:"المشغل",value:"قيمة",label:"ملصق",optional:"خياري",add:"إضافة عامل تصفية",edit:"يحرر",view:"منظر",pin:"مثبت",unpin:"غير مثبت",includeAll:"تضمين الكل",excludeAll:"استبعاد الكل",invertAll:"عكس التضمين/الاستبعاد",removeAll:"إزالة الكل",enableAll:"تمكين الكل",disableAll:"تعطيل الكل",toggleDisable:"عكس تعطيل/تمكين",remove:"يزيل",enable:"يُمكَِن",disable:"إبطال",exclude:"استبعاد",include:"يشمل",refresh:"ينعش",update:"تحديث",query:"استفسار",apply:"يتقدم",cancel:"يلغي",delete:"يمسح",basicFilter:"الفلتر الأساسي",customQuery:"استعلام مخصص",forAdvanced:"للمستخدمين المتقدمين فقط!"},Fr={EXISTS:"موجود",IS:"يكون",IN:"في",LT:"<",GT:">",LTE:"≤",GTE:"≥",INCLUDES:"يشمل",STARTS:"ابدا ب",ENDS:"ينتهي مع",WITHIN:"في غضون",BETWEEN:"بين هذا وذاك"},Pr="مصطلح البحث...",Rr={STRING:"سلسلة",NUMBER:"كثافة العمليات",DECIMAL:"يطفو",BOOLEAN:"رقم",DATE:"منطقي",DATETIME:"تاريخ",GEO:"GeoJSON"},Mr={field:"حقل مطلوب",operator:"عامل مطلوب",value:"القيمة المطلوبة",compare:"مقارنة الحقل المطلوب",label:"التصنيف مطلوب"},Br={label:kr,operator:Fr,placeholder:Pr,type:Rr,validate:Mr},Vr={filters:"Filters",all_filters:"All Filters",field:"Field",operator:"Operator",value:"Value",label:"Label",optional:"Optional",add:"Add Filter",edit:"Edit",view:"View",pin:"Pinned",unpin:"Unpinned",includeAll:"Include All",excludeAll:"Exclude All",invertAll:"Invert Include/Exclude",removeAll:"Remove All",enableAll:"Enable All",disableAll:"Disable All",toggleDisable:"Invert Disable/Enable",remove:"Remove",enable:"Enable",disable:"Disable",exclude:"Exclude",include:"Include",refresh:"Refresh",update:"Update",query:"Query",apply:"Apply",cancel:"Cancel",delete:"Delete",basicFilter:"Basic Filter",customQuery:"Custom Query",forAdvanced:"For advanced users only!"},Lr={EXISTS:"Exists",IS:"Is",IN:"In",EQ:"=",LT:"<",GT:">",LTE:"≤",GTE:"≥",INCLUDES:"Includes",STARTS:"Starts with",ENDS:"Ends with",WITHIN:"Within",BETWEEN:"Between"},Qr="Search term...",_r={STRING:"String",NUMBER:"Number",DECIMAL:"Decimal",BOOLEAN:"Bool",DATE:"Date",DATETIME:"Date Time",GEO:"GeoJSON"},Gr={field:"Field required",operator:"Operator required",value:"Value required",compare:"Compare field required",label:"Label required"},Wr={label:Vr,operator:Lr,placeholder:Qr,type:_r,validate:Gr};pn("searchbar",{en:Wr,ar:Br});const wn=o.createContext({}),We=()=>o.useContext(wn);var C=(e=>(e.ID="ID",e.STRING="STRING",e.TEXT="TEXT",e.NUMBER="NUMBER",e.DECIMAL="DECIMAL",e.BOOLEAN="BOOLEAN",e.DATE="DATE",e.DATETIME="DATETIME",e.NONE="NONE",e))(C||{}),A=(e=>(e.EXISTS="EXISTS",e.IS="IS",e.IN="IN",e.EQ="EQ",e.LT="LT",e.GT="GT",e.LTE="LTE",e.GTE="GTE",e.INCLUDES="INCLUDES",e.STARTS="STARTS",e.ENDS="ENDS",e.WITHIN="WITHIN",e.BETWEEN="BETWEEN",e))(A||{});const an={ID:["IS","IN"],STRING:["EXISTS","IS","IN"],TEXT:["EXISTS","INCLUDES","STARTS","ENDS"],NUMBER:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],DECIMAL:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],BOOLEAN:["EXISTS","EQ"],DATE:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],DATETIME:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],NONE:["EXISTS"]},Ur=new dn({id:X().required(),field:X().required(),operator:X().required().oneOf(Object.values(A)),negate:Cn(),label:X(),value:$n().when("operator",{is:A.EXISTS,then:e=>e.optional(),otherwise:e=>e.required()}).when("operator",{is:A.IN,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(r=[])=>(r==null?void 0:r.length)>0})}).when("operator",{is:A.BETWEEN,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(r=[])=>(r==null?void 0:r.length)>0&&r[0]&&r[1]})}).when("operator",{is:A.BETWEEN,then:e=>e.test({name:"array-check",message:"${path} min max",test:(r=[])=>(r==null?void 0:r.length)>0&&r[0]<r[1]})})}),En=({filter:e,onChange:r,onRemove:t})=>{const{t:a}=ne("searchbar"),p=_e(),{fields:b=[]}=We(),v=o.useRef(null),f=o.useRef(null),[s,y]=o.useState(e);o.useEffect(()=>{var u,d;e&&"field"in e&&e.field?(u=f.current)==null||u.setValues(e):(d=f.current)==null||d.setValues({id:ye(),field:"",operator:A.EXISTS})},[e]),o.useEffect(()=>{setTimeout(()=>{var u;(u=v.current)==null||u.focus()},100)},[]);const l=o.useMemo(()=>{if(s!=null&&s.field)return b.find(u=>u.field===(s==null?void 0:s.field))},[s]),m=o.useMemo(()=>{var u;return l==null?[A.EXISTS]:((u=f.current)==null||u.setValue("operator",an[l.type][0]),[...an[l.type]])},[l]),x=o.useMemo(()=>{var u,d,c,h,N,k,F;if((s==null?void 0:s.operator)===A.EXISTS&&(s==null?void 0:s.value)!==void 0&&((u=f.current)==null||u.setValue("value",void 0)),(l==null?void 0:l.type)===C.STRING&&((s==null?void 0:s.operator)===A.IN?!ce(s.value)&&((d=f.current)==null||d.setValue("value",[])):ce(s.value)&&((c=f.current)==null||c.setValue("value",void 0))),((l==null?void 0:l.type)===C.DATE||(l==null?void 0:l.type)===C.DATETIME||(l==null?void 0:l.type)===C.NUMBER||(l==null?void 0:l.type)===C.DECIMAL)&&((s==null?void 0:s.operator)===A.BETWEEN?!ce(s.value)&&((h=f.current)==null||h.setValue("value",[])):ce(s.value)&&((N=f.current)==null||N.setValue("value",void 0))),(l==null?void 0:l.type)===C.BOOLEAN&&[A.IS,A.EQ].includes(s==null?void 0:s.operator)&&(s==null?void 0:s.value)===void 0&&((k=f.current)==null||k.setValue("value",!1)),l==null||!(s!=null&&s.operator)||(s==null?void 0:s.operator)===A.EXISTS)return null;if((l==null?void 0:l.type)===C.BOOLEAN)return n.jsx(qe,{label:a("label.value"),"data-plain":"true",children:n.jsx(D,{name:"value",children:n.jsx(He,{})})});if((l==null?void 0:l.type)===C.STRING||(l==null?void 0:l.type)===C.ID)return(s==null?void 0:s.operator)===A.IN?n.jsx(D,{name:"value",children:n.jsx(he,{multiple:!0,searchable:!0,allowCreate:!0,allowClear:!0,options:l.values??[],label:a("label.value"),onQuery:l.onSearch})}):l.onSearch||(F=l.values)!=null&&F.length?n.jsx(D,{name:"value",children:n.jsx(he,{searchable:!0,allowCreate:!0,allowClear:!0,options:l.values??[],label:a("label.value"),onQuery:l.onSearch})}):n.jsx(D,{name:"value",children:n.jsx(Ve,{label:a("label.value"),allowClear:!0})});if(l.type===C.TEXT)return n.jsx(D,{name:"value",children:n.jsx(Zn,{rows:3,label:a("label.value"),allowClear:!0})});if((l==null?void 0:l.type)===C.DECIMAL||(l==null?void 0:l.type)===C.NUMBER){const S=l.type===C.DECIMAL?.1:1;return(s==null?void 0:s.operator)===A.BETWEEN?n.jsx(D,{name:"value",children:n.jsxs(qe,{label:a("label.value"),children:[n.jsx(D,{name:"value[0]",children:n.jsx(Ae,{step:S,allowClear:!0})}),n.jsx("span",{className:"p-2 text-muted",children:"≷"}),n.jsx(D,{name:"value[1]",children:n.jsx(Ae,{step:S,allowClear:!0})})]})}):n.jsx(D,{name:"value",children:n.jsx(Ae,{label:a("label.value"),step:S,allowClear:!0})})}if((l==null?void 0:l.type)===C.DATE||(l==null?void 0:l.type)===C.DATETIME){const S=l.type===C.DATETIME?"datetime":"date";return(s==null?void 0:s.operator)===A.BETWEEN?n.jsx(D,{name:"value",children:n.jsxs(qe,{label:a("label.value"),children:[n.jsx(D,{name:"value[0]",children:n.jsx(Me,{type:S,allowClear:!0})}),n.jsx("span",{className:"p-2 text-muted",children:"≷"}),n.jsx(D,{name:"value[1]",children:n.jsx(Me,{type:S,allowClear:!0})})]})}):n.jsx(D,{name:"value",children:n.jsx(Me,{type:S,allowClear:!0})})}},[l,s==null?void 0:s.operator]),w=o.useCallback(u=>{const d={id:u.id,field:u.field,negate:u.negate,operator:u.operator,value:u.value,label:u.label,type:l==null?void 0:l.type};r==null||r(d),p==null||p.events.emit("close")},[l,r]);return n.jsx(Pe,{formRef:f,schema:Ur,defaultValues:s,onChange:y,onSubmit:w,children:n.jsxs("div",{className:"w-[32rem]",children:[n.jsxs(Hn,{children:[n.jsx(Re,{flex:"fill",children:n.jsx(D,{name:"field",children:n.jsx(he,{required:!0,searchable:!0,ref:v,label:a("label.field"),options:b,labelProperty:"label",valueProperty:"field",groupProperty:"type"})})}),n.jsxs(Re,{flex:"auto",className:"text-center",children:[n.jsx("label",{className:"block py-0.5 text-sm",children:a("label.exclude")}),n.jsx(D,{name:"negate",children:n.jsx(He,{color:"danger"})})]}),n.jsx(Re,{flex:"auto",className:"basis-28",children:n.jsx(D,{name:"operator",children:n.jsx(he,{label:a("label.operator"),options:m,renderer:u=>a(`operator.${u}`)})})})]}),n.jsx("br",{}),x,n.jsx("br",{}),n.jsx(D,{name:"label",children:n.jsx(Ve,{label:a("label.label"),placeholder:a("label.label"),decorateEnd:!(e!=null&&e.label)&&n.jsx("span",{className:"text-sm opacity-65 pe-4",children:"Optional"})})}),n.jsxs("div",{className:"flex mt-4 justify-end gap-1 sticky bottom-1 bg-base",children:[t&&n.jsx("div",{className:"flex-1",children:n.jsx(J,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",color:"danger",onClick:t,children:a("label.remove")})}),n.jsx(J,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",children:a("label.cancel")}),n.jsx(J,{type:"submit",variant:"solid",size:"sm",children:a("label.apply")})]})]})})};En.__docgenInfo={description:"",methods:[],displayName:"FilterForm",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};function tn(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,a)}return t}function zr(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?tn(Object(t),!0).forEach(function(a){Ne(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Xr=function(r){var t=r.ref,a=r.value,p=r.schema,b=r.handlebarSuggestions,v=r.required,f=r.readOnly,s=r.minimal,y=r.onChange,l=r.language,m=l===void 0?"json":l,x=o.useState(),w=K(x,2),u=w[0],d=w[1],c=o.useState(),h=K(c,2),N=h[0],k=h[1],F=ar(),S=o.useState(""),T=K(S,2),Q=T[0],P=T[1];o.useLayoutEffect(function(){u&&P(F?"vs-dark":"light")},[F,u]);var R=o.useCallback(function(_){return u==null?void 0:u.layout(_)},[u]),g=nr(R),i=o.useDeferredValue(a),M=o.useMemo(function(){return Dn(i)?i:JSON.stringify(i,null,4)},[i]),B=jn(function(_){var I=u==null?void 0:u.getModel();if(I){var L=N==null?void 0:N.editor.getModelMarkers({owner:I.getLanguageId()});(L==null?void 0:L.filter(function(z){return z.severity>7}).length)===0&&(y==null||y(_))}},[y,u],1e3);o.useImperativeHandle(t,function(){return{getValue:function(){return u==null?void 0:u.getValue()},validate:function(){var I=u==null?void 0:u.getModel();if(I){var L=N==null?void 0:N.editor.getModelMarkers({owner:I.getLanguageId()});return(L==null?void 0:L.filter(function(te){return te.severity>8}).length)===0}try{var z=u==null?void 0:u.getValue();return m==="json"&&(z=JSON.parse(z)),v?!pe(z):!0}catch{return!1}}}},[v,m]);var j=o.useRef(null),O=o.useCallback(function(_){if(m==="json"&&p){var I,L=er(p),z=L[0],te=L.slice(1);(I=_.languages)===null||I===void 0||(I=I.json)===null||I===void 0||I.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[zr({fileMatch:["*"]},z)].concat(An(te))})}if(m==="html"&&b){var le,Y;(le=j.current)===null||le===void 0||(Y=le.dispose)===null||Y===void 0||Y.call(le),j.current=_.languages.registerCompletionItemProvider("html",{triggerCharacters:["{{"],provideCompletionItems:function(se,Z){var we=se.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:Z.lineNumber,endColumn:Z.column}),Ee=we.match(/\{\{(.*)([^}])?$/);if(!Ee)return{suggestions:[]};var me=se.getWordUntilPosition(Z),be={startLineNumber:Z.lineNumber,endLineNumber:Z.lineNumber,startColumn:me.startColumn,endColumn:me.endColumn};return{suggestions:b.map(function(ve){return{label:ve.text,kind:_.languages.CompletionItemKind.Text,documentation:ve.description,insertText:ve.text,range:be}})}}})}},[p,m]),re=o.useCallback(function(_,I){I.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[]})},[]);return n.jsx(rr,{className:"relative",children:n.jsx("div",{ref:g,"data-ref":"codeEditor",className:H("fabric-codeEditor","absolute inset-0"),children:n.jsx(tr,{editorDidMount:function(I,L){return[!!I&&d(I),!!L&&k(L)]},editorWillMount:O,editorWillUnmount:re,value:M,language:m,onChange:B,theme:Q,className:"fabric-editor",options:{readOnly:f,minimap:{enabled:!s},scrollBeyondLastLine:!1,folding:!s,lineNumbers:s?"off":void 0,wordWrap:"on",fontFamily:'Menlo, Monaco, "Courier New", monospace'}})})})};const Hr=new dn({id:X().required(),label:X().required(),query:X().required().test(e=>{try{return!pe(JSON.parse(e))}catch{return!1}})}),Sn=({filter:e,onChange:r,onRemove:t})=>{const{t:a}=ne("searchbar"),p=_e(),{defaultQuery:b="",querySchema:v,queryLanguage:f}=We(),s=o.useRef(null),y=o.useMemo(()=>e&&"query"in e&&e.query?{id:e.id,query:JSON.stringify(JSON.parse(e.query??"{}"),null,4),label:e.label}:{id:ye(),label:"",query:b},[e]);o.useEffect(()=>{setTimeout(()=>{var m;(m=s.current)==null||m.focus()},100)},[]);const l=o.useCallback(m=>{const x={id:m.id,query:m.query,label:m.label};r==null||r(x),p==null||p.events.emit("close")},[r]);return n.jsxs(Pe,{schema:Hr,defaultValues:y,onSubmit:l,children:[n.jsx(ur,{color:"warning",children:"For advanced users only!"}),n.jsx(D,{name:"label",children:n.jsx(Ve,{required:!0,ref:s,label:a("label.label"),placeholder:a("label.label")})}),n.jsx(D,{name:"query",children:({checked:m,error:x,invalid:w,ref:u,...d})=>n.jsxs("div",{className:"my-2",children:[n.jsx("label",{className:H("block px-2",w&&"text-danger-600"),children:a("label.query")}),n.jsx("div",{className:"h-[24rem] w-[36rem] grid outline place-content-start",style:{gridTemplate:'"content" 1fr/1fr'},children:n.jsx(Xr,{language:f??"text",minimal:!0,required:!0,...d,schema:v})})]})}),n.jsxs("div",{className:"flex mt-4 justify-end gap-1 sticky bottom-1 bg-base",children:[t&&n.jsx("div",{className:"flex-1",children:n.jsx(J,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",color:"danger",onClick:t,children:a("label.remove")})}),n.jsx(J,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",children:a("label.cancel")}),n.jsx(J,{type:"submit",variant:"solid",size:"sm",children:a("label.apply")})]})]})};Sn.__docgenInfo={description:"",methods:[],displayName:"QueryForm",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const Ue=({filter:e,onRemove:r,onChange:t})=>{const{t:a}=ne("searchbar"),{fields:p}=We(),[b,v]=o.useState(pe(p));return o.useEffect(()=>{v(!!e&&"query"in e)},[e]),n.jsxs("div",{className:"px-2 py-1 bg-base outline min-w-[420px]",children:[!pe(p)&&n.jsx("div",{className:"pb-4 flex justify-end",children:n.jsx("span",{role:"none",className:"text-sm link",onClick:()=>v(!b),children:a(b?"label.basicFilter":"label.customQuery")})}),!b&&n.jsx(En,{filter:e,onRemove:r,onChange:t}),b&&n.jsx(Sn,{filter:e,onRemove:r,onChange:t})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"FilterEdit",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const Tn=({filter:e,onRemove:r})=>{const{t}=ne("searchbar"),a=o.useMemo(()=>{var p,b,v;if("query"in e)return JSON.stringify(JSON.parse(e.query??"{}"),null,2);if("field"in e){let f=(p=e.value)==null?void 0:p.toString();return e.operator===A.BETWEEN&&ce(e.value)&&(f=`[${(b=e.value)==null?void 0:b.join(" - ")}]`),e.operator===A.IN&&ce(e.value)&&(f=`[${(v=e.value)==null?void 0:v.join(", ")}]`),n.jsxs(o.Fragment,{children:[e.negate&&n.jsx("b",{children:"NOT "}),n.jsx("span",{children:e.field}),n.jsxs("b",{children:[" ",t(`operator.${e.operator}`)," "]}),n.jsx("div",{children:f})]})}return""},[e]);return n.jsxs("div",{className:"p-2 bg-base relative",children:["query"in e&&n.jsx("div",{className:"absolute top-2 end-2 z-10",children:n.jsx(Yn,{size:"sm",text:a})}),n.jsx("pre",{className:"overflow-auto bg-base outline text-sm p-2 max-h-[24rem] max-w-[48rem] min-w-[24rem]",children:a}),!e.required&&n.jsx(J,{size:"sm",variant:"link",color:"danger","data-dropdown-dismiss":"true",onClick:r,children:t("label.remove")})]})};Tn.__docgenInfo={description:"",methods:[],displayName:"FilterView",props:{filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const qn=({filter:e,fields:r,editable:t,onChange:a,onRemove:p})=>{const{t:b}=ne("searchbar"),[v,f]=o.useState();return v==="edit"?n.jsx(Ue,{filter:e,onChange:a,onRemove:p}):v==="view"?n.jsx(Tn,{filter:e,onRemove:p}):n.jsxs(Qe,{className:"text-sm",children:[t&&e.canEdit!==!1?n.jsx(W,{icon:U.edit,label:b("label.edit"),"data-dropdown-dismiss":"false",onClick:()=>{f("edit")}}):n.jsx(W,{icon:U.eye,label:b("label.view"),"data-dropdown-dismiss":"false",onClick:()=>{f("view")}}),n.jsx(ge,{}),e.canPin!==!1&&n.jsx(W,{label:b(e.pinned?"label.unpin":"label.pin"),onClick:()=>a({...e,pinned:!e.pinned})}),e.canInvert!==!1&&e.field&&n.jsx(W,{label:b(e.negate?"label.include":"label.exclude"),onClick:()=>a({...e,negate:!e.negate})}),e.canDisable!==!1&&n.jsx(W,{label:b(e.disabled?"label.enable":"label.disable"),onClick:()=>a({...e,disabled:!e.disabled})}),!e.required&&n.jsx(ge,{}),!e.required&&n.jsx(W,{color:"danger",icon:U.remove,label:b("label.remove"),onClick:()=>p()})]})};qn.__docgenInfo={description:"",methods:[],displayName:"FilterMenu",props:{fields:{required:!1,tsType:{name:"Array",elements:[{name:"FilterField"}],raw:"FilterField[]"},description:""},editable:{required:!1,tsType:{name:"boolean"},description:""},filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const On=({filter:e,fields:r,editable:t,includedColor:a="primary-500",excludedColor:p="danger-500",onChange:b,onRemove:v})=>{const{t:f}=ne("searchbar"),s=o.useMemo(()=>{var m;return e.label?n.jsxs(o.Fragment,{children:[e.field&&e.negate&&n.jsx("span",{className:"font-semibold",children:"NOT"}),n.jsx("span",{children:e.label})]}):n.jsxs(o.Fragment,{children:[e.field&&e.negate&&n.jsx("span",{className:"font-semibold",children:"NOT"}),n.jsx("span",{children:e.field}),n.jsx("span",{className:"font-semibold",children:f(`operator.${e.operator}`,{defaultValue:e.operator})}),"value"in e&&!cn(e.value)&&n.jsx("span",{className:"truncate block",children:(m=e.value)==null?void 0:m.toString().substring(0,24)})]})},[e]),y=o.useMemo(()=>e.color??(e.field&&e.negate?p:a),[e,a,p]),l=o.useMemo(()=>{if(e.canDisable!==!1)return e.disabled?U.checkboxOff:U.checkboxOn},[e]);return n.jsxs(Oe,{showArrow:!0,children:[n.jsx(Fe,{size:"sm",color:y,className:H("outline max-w-60",e.disabled&&"opacity-65"),variant:e.pinned?"solid":void 0,icon:l,iconColor:y,onIconClick:m=>[b({...e,disabled:!e.disabled}),m.stopPropagation()],"data-ref":"filterTag","data-test-value":e.id,stopPropagation:!0,onRemove:e.required?void 0:()=>v(),children:n.jsxs("div",{className:H("flex gap-1 items-center",e.disabled&&"line-through opacity-65"),children:[e.pinned&&n.jsx(Ie,{className:"flex-content",icon:e.icon??U.pin}),s]})}),n.jsx(qn,{filter:e,fields:r,editable:t,onChange:b,onRemove:v})]})};On.__docgenInfo={description:"",methods:[],displayName:"FilterTag",props:{filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""},includedColor:{defaultValue:{value:'"primary-500"',computed:!1},required:!1},excludedColor:{defaultValue:{value:'"danger-500"',computed:!1},required:!1}}};const In=({filters:e=[],allowAdd:r,fields:t,editable:a,querySchema:p,queryLanguage:b,defaultQuery:v,includedColor:f,excludedColor:s,onFilterChanged:y})=>{const{t:l}=ne("searchbar"),m=o.useCallback(d=>{const c=[...e];c.splice(d,1),y==null||y(c)},[e]),x=o.useCallback((d,c)=>{const h=[...e];cn(c)?h.push(d):h.splice(c,1,d),y==null||y(h)},[e]),w=o.useCallback(d=>{const c=[];d==="removeAll"&&c.push(...e.filter(h=>h.required)),d!=="removeAll"&&c.push(...e.map(h=>(d==="disableAll"&&(h.disabled=!0),d==="enableAll"&&(h.disabled=!1),d==="toggleDisable"&&(h.disabled=!h.disabled),d==="excludeAll"&&h.field&&(h.negate=!0),d==="includeAll"&&h.field&&(h.negate=!1),d==="invertAll"&&h.field&&(h.negate=!h.negate),{...h}))),y==null||y(c)},[e]),u=o.useMemo(()=>{const d={someDisabled:!1,someEnabled:!1,someExcluded:!1,someIncluded:!1,canRemoveAll:!1};return e.forEach(c=>{c.disabled&&c.canDisable!==!1&&!d.someDisabled&&(d.someDisabled=!0),!c.disabled&&c.canDisable!==!1&&!d.someEnabled&&(d.someEnabled=!0),c.field&&c.negate&&c.canInvert!==!1&&!d.someExcluded&&(d.someExcluded=!0),c.field&&!c.negate&&c.canInvert!==!1&&!d.someIncluded&&(d.someIncluded=!0),!c.required&&!d.canRemoveAll&&(d.canRemoveAll=!0)}),d},[e]);return n.jsx(wn.Provider,{value:{defaultQuery:v,querySchema:p,queryLanguage:b,fields:t},children:n.jsxs("div",{className:"flex flex-wrap gap-1 items-center",children:[n.jsxs(Oe,{showArrow:!0,disabled:pe(e),children:[n.jsx(Ie,{icon:U.config,className:H(pe(e)&&"pointer-events-none opacity-30"),color:pe(e)?void 0:"primary"}),n.jsxs(Qe,{className:"text-sm",onClick:w,children:[u.someDisabled&&n.jsx(W,{id:"enableAll",label:l("label.enableAll")}),u.someEnabled&&n.jsx(W,{id:"disableAll",label:l("label.disableAll")}),n.jsx(W,{icon:U.invertDisable,id:"toggleDisable",label:l("label.toggleDisable")}),n.jsx(ge,{}),u.someExcluded&&n.jsx(W,{id:"includeAll",label:l("label.includeAll")}),u.someIncluded&&n.jsx(W,{id:"excludeAll",label:l("label.excludeAll")}),n.jsx(W,{id:"invertAll",icon:U.invertExclude,label:l("label.invertAll")}),n.jsx(ge,{}),n.jsx(W,{id:"removeAll",color:"danger",icon:U.remove,label:l("label.removeAll"),disabled:!u.canRemoveAll})]})]}),e==null?void 0:e.map((d,c)=>n.jsx(On,{filter:d,editable:a,includedColor:f,excludedColor:s,onRemove:()=>m(c),onChange:h=>x(h,c)},c)),r&&n.jsxs(Oe,{showArrow:!0,children:[n.jsx(Fe,{size:"sm",className:"!outline-dashed !outline-tint-400",icon:U.insert,children:l("label.add")}),n.jsx(Ue,{onChange:x})]})]})})};In.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{filters:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`BaseFilter &
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
@param filters`}}};const ze=({historyKey:e="ruf:search",historyCount:r=20,defaultQueryList:t,prepend:a,append:p,decorateEnd:b,decorateStart:v,children:f,hideFilters:s,defaultCollapsed:y=!1,disabled:l,onCollapsed:m,onQuery:x,onSearch:w,query:u,ref:d,multiple:c,filters:h=Xe,...N})=>{const{t:k}=ne("searchbar"),[F,S]=lr(e,t??[]),[T,Q]=o.useState(y),P=o.useMemo(()=>c?Xe:"",[c]),R=jn((j,O)=>{i({type:"dirty",dirty:!1}),w==null||w({query:j,filters:O})},[]),[g,i]=o.useReducer((j,O)=>O.type==="reset"?{...j,dirty:!1,query:O.query,filters:O.filters}:O.type==="dirty"?{...j,dirty:O.dirty}:O.type==="query"?(!c&&R(O.query??P,j.filters),{...j,dirty:!1,query:O.query??P}):O.type==="filter"?(R(j.query,O.filters??[]),{...j,dirty:!1,filters:O.filters??[]}):j,{dirty:!1,query:u,filters:h});o.useEffect(()=>{i({type:"reset",filters:h,query:u})},[h,u]);const M=j=>{const O=ce(j)?j:[j];S(sr([...O,...F]).slice(0,r)),i({type:"query",query:j})},B=(j=[])=>{i({type:"filter",filters:j})};return n.jsxs("div",{children:[n.jsxs("div",{className:"flex flex-nowrap gap-1 mb-1",children:[n.jsxs(qe,{"data-inner":!0,className:"flex-1",children:[!s&&n.jsx(J,{variant:"link",badge:h.length,onClick:()=>Q(!T),children:k("label.filters")}),a,n.jsx(pr,{allowClear:!0,expandOnEdit:!0,ref:d,multiple:c,history:F,value:g.query,decorateEnd:b,decorateStart:v,onInput:()=>i({type:"dirty",dirty:!0}),onSelect:M,"data-ref":"searchbarInput",onEnterPressed:()=>R(g.query,g.filters)}),p,n.jsx(J,{variant:"solid",color:g.dirty?"warning":"primary",onClick:()=>R(g.query,g.filters),children:k(g.dirty?"label.update":"label.refresh")})]}),f]}),!s&&!T&&n.jsx(In,{...N,filters:g.filters,onFilterChanged:B})]})};ze.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{query:{required:!1,tsType:{name:"AnyObject"},description:"Query string"},historyCount:{required:!1,tsType:{name:"number"},description:`Search history count
@default 20`,defaultValue:{value:"20",computed:!1}},historyKey:{required:!1,tsType:{name:"string"},description:`Search history storage key
@default: "ax:search"`,defaultValue:{value:'"ruf:search"',computed:!1}},defaultQueryList:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default query items for suggest"},prepend:{required:!1,tsType:{name:"ReactElement"},description:"Add-on before search input"},append:{required:!1,tsType:{name:"ReactElement"},description:"Add-on after search input"},hideFilters:{required:!1,tsType:{name:"boolean"},description:"Hide filter bar"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable component"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:`Collapse filters
@default true`,defaultValue:{value:"false",computed:!1}},decorateStart:{required:!1,tsType:{name:"union",raw:"JSX.Element | string | number | boolean",elements:[{name:"JSX.Element"},{name:"string"},{name:"number"},{name:"boolean"}]},description:""},decorateEnd:{required:!1,tsType:{name:"union",raw:"JSX.Element | string | number | boolean",elements:[{name:"JSX.Element"},{name:"string"},{name:"number"},{name:"boolean"}]},description:""},onCollapsed:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:`On filter collapsed
@param collapsed`},onQuery:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => Promise<string[]> | string[]",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"union",raw:"Promise<string[]> | string[]",elements:[{name:"Promise",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"Promise<string[]>"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}}},description:`On query string change event
@param query`},filters:{defaultValue:{value:"EMPTY_ARRAY",computed:!0},required:!1}},composes:["Partial","RefProp"]};const{fn:Kr}=__STORYBOOK_MODULE_TEST__,Ma={component:ze,title:"@searchbar/SearchBar",parameters:{layout:"padded",jest:["searchbar/tests/SearchBar.test.tsx"]}},Jr=[{uri:"http://react-fabric/schema.json",schema:{type:"object",$ref:"http://react-fabric/base-schema.json"}},{uri:"http://react-fabric/base-schema.json",schema:{type:"object",properties:{bool:{$ref:"http://react-fabric/bool-schema.json"},exists:{$ref:"http://react-fabric/exists-schema.json"},query_string:{$ref:"http://react-fabric/query-schema.json"}}}},{uri:"http://react-fabric/exists-schema.json",schema:{type:"object",properties:{field:{type:"string"}},required:["field"]}},{uri:"http://react-fabric/query-schema.json",schema:{type:"object",properties:{fields:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},query:{type:"string"}},required:["query"]}},{uri:"http://react-fabric/bool-schema.json",schema:{type:"object",properties:{filter:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},must:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},should:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},must_not:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},should_not:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},minimum_should_match:{type:"number"}}}}],De={render:e=>n.jsx(ze,{...e,onSearch:Kr(),append:n.jsx(Ar,{variant:"link",value:"$year-5|$now"}),children:n.jsxs(Oe,{placement:"bottom-end",children:[n.jsx(J,{icon:U.menu,"aria-label":"menu",variant:"link"}),n.jsxs(Qe,{className:"text-sm",children:[n.jsx(W,{label:"Open"}),n.jsx(W,{label:"Save"}),n.jsx(ge,{}),n.jsx(W,{label:"Share"})]})]})}),args:{allowAdd:!0,excludedColor:"#f00",query:"test AND query",querySchema:Jr,queryLanguage:"json",defaultQuery:`{
	
}`,fields:[{field:"id",label:"ID",type:C.ID},{field:"name",label:"Name",type:C.STRING},{field:"age",label:"Age",type:C.NUMBER},{field:"dob",label:"DOB",type:C.DATE},{field:"extras",label:"Extras",type:C.NONE},{field:"country",label:"Country",type:C.STRING,onSearch(e){return new Promise(r=>{setTimeout(()=>{r(kn.list.filter(t=>Ke(t.name,e)||Ke(t.fullname,e)).map(t=>t.name))},1e3)})}}],filters:[{id:ye(),field:"name",operator:A.IS,value:"Smeghead",pinned:!0,canPin:!1,canDisable:!1,required:!0,canEdit:!1,color:"lilac",icon:"mdi mdi-tray-full"},{id:ye(),field:"name",operator:A.IS,value:"Smeghead"},{id:ye(),field:"name",negate:!0,operator:A.IS,value:"Smeghead",label:"New filter"},{id:ye(),query:JSON.stringify({query:"test"}),label:"Query filter"}]}};var ln,sn,on;De.parameters={...De.parameters,docs:{...(ln=De.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(on=(sn=De.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};const Ba=["_SearchBar"];export{De as _SearchBar,Ba as __namedExportsOrder,Ma as default};
