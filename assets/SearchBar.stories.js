import{_ as $e,j as n,m as X,n as Oe,r as o,l as H,x as un,y as dn,z as cn,B as pn,G as Nn,I as mn,bS as An,K as Cn,N as vn,O as bn,Q as $n,Y as Dn,bg as kn,bh as Fn,aN as se,aL as ce,U as Ln,X as Pn,ax as J,aQ as Ee,aS as z,aT as Me,w as Qe,bT as he,bU as fn,bV as Rn,br as Mn,u as Bn,b8 as Vn,aM as yn,b9 as He,aO as Qn}from"./iframe-DpfJK_wQ.js";import{D as Te}from"./Dropdown.js";import{B as U}from"./Button.js";import{b as hn}from"./index.js";import{D as xe}from"./Divider.js";import{M as _e,a as V}from"./Menu.js";import{u as gn}from"./Global.js";import{C as De,o as ke}from"./BasePanel.js";import{I as qe,T as _n}from"./Tooltip.js";import{u as Gn,O as Wn,F as Se,C as k,N as Ce,S as ge,a as Fe,T as zn,b as Ne,R as Xn,E as Hn}from"./Select2.js";import{C as Ge}from"./Content.js";import{D as le,a as je}from"./Google.js";import"./ColorPicker.js";import{R as Un,C as Pe}from"./Responsive.js";import{D as Kn}from"./DatePanel.js";import{I as xn}from"./InputWrapper.js";import{u as Yn}from"./eventHandlers.js";import{I as Be}from"./Input.js";import{S as Ue}from"./Switch.js";import{T as Jn}from"./Textarea.js";import{_ as Zn}from"./toArray.js";import{u as jn}from"./useDebounce.js";import{u as er}from"./useResizeObserver.js";import{S as nr}from"./Section.js";import{u as rr}from"./useIsDark.js";import{M as ar}from"./editor.js";import{C as tr}from"./Copy.js";import{u as lr}from"./useStorage.js";import{d as sr}from"./dedupe.js";import{m as Ke}from"./isEqual.js";import"./cloneElement.js";import"./nodeCheck.js";import"./zh-CN.js";import"./getDay.js";import"./DropdownTool.js";import"./endOfDay.js";import"./EmptyContent.js";import"./ErrorBoundary.js";import"./createClass.js";import"./index5.js";import"./index2.js";import"./ErrorIcon.js";var or=["children","color","legend","title","icon","border","onClose","className"];function Ye(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),l.push.apply(l,a)}return l}function Je(e){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?Ye(Object(l),!0).forEach(function(a){Oe(e,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):Ye(Object(l)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))})}return e}var ir={none:"bg-base text-tint-900 border-tint-100",default:"bg-tint-50/50 text-tint-800 border-tint-300",muted:"bg-tint-50/50 text-muted border-muted",primary:"bg-primary-50/50 text-primary-800 border-primary-300",accent:"bg-accent-50/50 text-accent-800 border-accent-300",info:"bg-info-50/50 text-info-800 border-info-300",danger:"bg-danger-50/50 text-danger-800 border-danger-300",success:"bg-success-50/50 text-success-800 border-success-300",warning:"bg-warning-50/50 text-warning-800 border-warning-300"},ur=function(r){var l=r.children,a=r.color,c=a===void 0?"default":a,p=r.legend,m=r.title,y=r.icon,s=r.border,h=r.onClose,t=r.className,v=$e(r,or);return n.jsxs("fieldset",Je(Je({className:X("block rounded-capped border max-w-full relative overflow-hidden mb-4",ir[c],t,s==="dashed"&&"border-dashed",s==="dotted"&&"border-dotted")},v),{},{children:[p&&n.jsx("legend",{className:"px-2 mx-4 font-medium","data-ref":"calloutLegend",children:p}),n.jsxs("div",{className:X("break-words whitespace-break-spaces p-2"),children:[n.jsxs("div",{className:"flex flex-nowrap items-center text-xl pe-4 gap-2 mb-4 empty:mb-0",children:[y&&n.jsx(qe,{icon:y,"data-ref":"calloutIcon"}),m&&n.jsx("p",{className:"flex-1","data-ref":"calloutTitle",children:m})]}),n.jsx("div",{className:"pe-4",children:l})]}),h&&n.jsx(qe,{size:"md","data-ref":"calloutClose",className:X("absolute end-2",p?"top-0":"top-2"),icon:"icon-[mdi--close]",onClick:h})]}))},dr=["ref","name","value","invalid","readOnly","disabled","required","placeholder","defaultValue","autoFocus","error","type","onBlur","onFocus","onChange","onEnterPressed","format","min","max"];function Ze(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),l.push.apply(l,a)}return l}function be(e){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?Ze(Object(l),!0).forEach(function(a){Oe(e,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):Ze(Object(l)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))})}return e}var Re=function(r){var l=r.ref,a=r.name,c=r.value,p=r.invalid,m=r.readOnly,y=r.disabled,s=r.required,h=r.placeholder,t=r.defaultValue,v=r.autoFocus,j=r.error,S=r.type,i=S===void 0?"date":S,d=r.onBlur,b=r.onFocus,f=r.onChange,C=r.onEnterPressed;r.format;var F=r.min,L=r.max,I=$e(r,dr),N=o.useState(""),Q=H(N,2),P=Q[0],$=Q[1],g=o.useState(""),u=H(g,2),_=u[0],M=u[1],x=o.useDeferredValue(c??t),q=o.useMemo(function(){return i==="datetime"?"yyyy-MM-dd HH:mm":"yyyy-MM-dd"},[i]);o.useEffect(function(){$(x??""),M(x?le.format(x,q):"")},[x,q]);var re=Yn(C),B=o.useCallback(function(ue){var ne,G=(ne=ue==null?void 0:ue.currentTarget.value)!==null&&ne!==void 0?ne:t;if(G){var K,w=le.parseDate(G);$(w==null||(K=w.toISOString)===null||K===void 0?void 0:K.call(w)),M(le.format(w,q)),f!=null&&o.startTransition(function(){var T;return f(w==null||(T=w.toISOString)===null||T===void 0?void 0:T.call(w))})}else $(""),M(""),f!=null&&o.startTransition(function(){return f(null)})},[f,q,t]),D=o.useCallback(function(ue){if(ue){var ne,G=le.parseDate(ue);$(G==null||(ne=G.toISOString)===null||ne===void 0?void 0:ne.call(G)),M(le.format(G,q)),f!=null&&o.startTransition(function(){var K;return f(G==null||(K=G.toISOString)===null||K===void 0?void 0:K.call(G))})}else $(""),M(""),f!=null&&o.startTransition(function(){return f(null)})},[f,q]),R=o.useRef(null),W=o.useState(!1),ae=H(W,2),Z=ae[0],te=ae[1],fe=un({open:Z,onOpenChange:function(ne,G,K){console.log(K),K!=="reference-press"&&te(ne)},strategy:"fixed",placement:"bottom-start",whileElementsMounted:mn,middleware:[dn({padding:8}),cn(),pn(9),Nn({element:R})]}),ee=fe.refs,oe=fe.floatingStyles,pe=fe.context,we=An(pe,{enabled:!y}),me=Cn(pe,{enabled:!y,toggle:!1}),ye=vn(pe,{referencePress:!0}),ie=bn([ye,me,we]),Ie=ie.getReferenceProps,Le=ie.getFloatingProps;return n.jsxs(xn,be(be({showClear:!!P&&!y&&!m,onClear:B,invalid:p,readOnly:m,disabled:y,required:s,error:j},I),{},{children:[n.jsx("input",be(be({className:X("appearance-none bg-transparent py-1 px-2 flex-1 border-none outline-none ring-0 peer",!c&&"empty"),"aria-invalid":p,"aria-disabled":y,"aria-readonly":m,"aria-errormessage":j,placeholder:h,disabled:y,readOnly:m,"data-testid":a,name:a,size:1,type:i==="datetime"?"datetime-local":"date",autoComplete:"off",autoFocus:v,value:_,ref:$n(l,ee.setReference)},Ie({onBlur:d,onFocus:b})),{},{onChange:B,onKeyDown:re})),Z&&n.jsxs("div",be(be({ref:ee.setFloating,style:be({zIndex:"var(--z-popover)"},oe),className:"shadow-lg bg-base ring-1 ring-tint-100","data-ref":"dropdownBody"},Le()),{},{children:[n.jsx(Kn,{withTime:i==="datetime",value:P,max:L,min:F,onChange:D}),n.jsx(Dn,{ref:R,context:pe,strokeWidth:.5,className:"fill-base stroke-muted"})]}))]}))},cr=["ref","name","value","invalid","readOnly","disabled","required","placeholder","autoFocus","expandOnEdit","error","history","multiple","onChange","onSelect","onInput","onFocus","onBlur","onQuery","onEnterPressed"];function en(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),l.push.apply(l,a)}return l}function de(e){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?en(Object(l),!0).forEach(function(a){Oe(e,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):en(Object(l)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))})}return e}var pr=function(r){var l,a=r.ref,c=r.name,p=r.value,m=r.invalid,y=r.readOnly,s=r.disabled,h=r.required,t=r.placeholder,v=r.autoFocus,j=r.expandOnEdit,S=r.error,i=r.history,d=r.multiple,b=r.onChange,f=r.onSelect,C=r.onInput,F=r.onFocus,L=r.onBlur,I=r.onQuery,N=r.onEnterPressed,Q=$e(r,cr),P=o.useRef(i),$=o.useRef(null),g=Gn({value:p,autoComplete:!0,options:P.current,multiple:d,onChange:b,onSelect:f,onQuery:I}),u=g.state,_=g.listRef,M=g.listContentRef,x=g.setOpen,q=g.macthOption,re=g.handleChange,B=g.handleRemove,D=g.handleQuery,R=g.setItemRef,W=g.setActiveIndex,ae=o.useId(),Z=un({open:u.open,onOpenChange:function(T,O,Y){!T&&(_.current=[]),x(T)},strategy:"fixed",placement:"bottom",whileElementsMounted:mn,middleware:[dn({padding:8}),cn(),pn(2)]}),te=Z.context,fe=Z.floatingStyles,ee=Z.refs,oe=vn(te,{}),pe=kn(te,{listRef:_,activeIndex:u.activeIndex,selectedIndex:u.selectedIndex,loop:!0,virtual:!0,focusItemOnOpen:!1,onNavigate:W}),we=Fn(te,{listRef:M,activeIndex:u.activeIndex,selectedIndex:u.selectedIndex,findMatch:function(T,O){return T.find(function(Y){return q(Y,O)})},onMatch:function(T){u.open&&W(T)}}),me=bn([oe,pe,we]),ye=me.getReferenceProps,ie=me.getFloatingProps,Ie=me.getItemProps,Le=o.useMemo(function(){var w=ye();return de(de({},w),{},{onFocus:F,onBlur:function(O){var Y;if((Y=O.relatedTarget)!==null&&Y!==void 0&&Y.closest('[data-select-dropdown="'.concat(ae,'"]'))){var ve;(ve=ee.domReference.current)===null||ve===void 0||(ve=ve.querySelector("input"))===null||ve===void 0||ve.focus();return}u.open&&re(u.query),D(""),x(!1),L==null||L(O)},onKeyDown:function(O){if(O.key==="Enter"){if(O.preventDefault(),u.activeIndex!==null)return re(M.current[u.activeIndex]),O.stopPropagation(),!1;if(u.query!==void 0)return re(""),!1;N==null||N(O),x(!1)}else O.key==="Backspace"?!u.query&&d&&B():["ArrowUp","ArrowDown"].includes(O.key)&&(["ArrowUp","ArrowDown"].includes(O.key)&&u.activeIndex===null&&W(u.selectedIndex),setTimeout(function(){var Y;(Y=w.onKeyDown)===null||Y===void 0||Y.call(w,O)},50))}})},[ye,N,D,F,L,d,ee,u.query,u.activeIndex]),ue=o.useMemo(function(){return ie({"data-select-dropdown":ae})},[ie]),ne=o.useCallback(function(w){var T,O,Y=se(u.value)?(T=u.value)===null||T===void 0||(O=T.includes)===null||O===void 0?void 0:O.call(T,w):u.value===w;return Ie({"data-selected":Y?!0:void 0,onClick:function(){re(w)}})},[Ie,re,u.value]),G=o.useMemo(function(){if(se(u.value))return u.value.map(function(w,T){return n.jsx(De,{onRemove:function(){return B(T)},children:w},T)})},[u.value,u.query,t]);o.useLayoutEffect(function(){u.open&&setTimeout(function(){var w;u.selectedIndex&&((w=_.current[u.selectedIndex])===null||w===void 0||w.scrollIntoView({block:"center"}))},100)},[u.open]);var K=o.useMemo(function(){var w,T,O;return d?(w=u.query)!==null&&w!==void 0?w:"":(T=(O=u.query)!==null&&O!==void 0?O:u.value)!==null&&T!==void 0?T:""},[d,u.query,u.value]);return n.jsxs(xn,de(de({showClear:!ce(u.value),onClear:re,invalid:m,readOnly:y,disabled:s,required:h,error:S,wrapperRef:ee.setReference,className:!d&&j&&u.open?"z-99!":"",floatingExpand:!d&&j&&u.open},Q),{},{children:[n.jsxs("div",{role:"none","data-select-display":"true",className:X("group flex-1 py-1 px-2 truncate text-start flex gap-1 relative min-h-5 justify-start",d?"flex-wrap":"flex-nowrap overflow-hidden"),onMouseUp:function(T){var O;return(O=T.currentTarget.querySelector("input"))===null||O===void 0?void 0:O.focus()},children:[G,n.jsx("textarea",de(de({readOnly:y,disabled:s,value:K,"aria-invalid":m,"data-testid":c,name:c,size:1,ref:a,onInput:C,autoFocus:v,rows:!d&&j&&u.open?5:1,className:X("appearance-none bg-transparent outline-none border-none ring-0 flex-1 resize-none",s&&"cursor-not-allowed pointer-events-none",d&&"min-w-24 overflow-hidden",!u.open&&"overflow-hidden whitespace-nowrap"),placeholder:ce(u.value)?t:""},Le),{},{onChange:function(T){return D(T.target.value)}})),n.jsx("button",{type:"submit",ref:$,tabIndex:-1,className:"opacity-0 absolute"})]}),u.loading&&n.jsx(qe,{className:X("flex-content p-2 z-0 order-9 text-muted pointer-events-none"),icon:"icon-[svg-spinners--eclipse]"}),u.open&&!u.loading&&n.jsx(Ln,{children:n.jsx(Pn,{context:te,initialFocus:-1,visuallyHiddenDismiss:!0,children:n.jsx(Wn,de(de({ref:ee.setFloating,className:"outline shadow-lg max-h-[40vh] z-(--z-popover)",style:de({width:(l=ee.reference.current)===null||l===void 0?void 0:l.getBoundingClientRect().width},fe)},ue),{},{items:u.items,active:u.activeIndex,itemRef:R,itemProps:ne,empty:n.jsx("div",{className:"text-muted text-sm px-2 py-1",children:"No history available"}),children:function(T){return T}}))})})]}))},mr=" ⇽ ",vr={quick:"حدد مسرعا",relative:"نسبيا",events:"الأحداث",absolute:"مطلق",preset:"المسبقة",current:"تيار",previous:"السابق",from:"من عند",to:"إلى","+":"من الان","-":"منذ",apply:"يتقدم",$now:"الآن",$minute:"دقيقة",$hour:"ساعة",$day:"يوم",$week:"أسبوع",$month:"شهر",$quarter:"ربع",$year:"عام",$decade:"عقد"},br={$day:"اليوم",$week:"هذا الاسبوع",$month:"هذا الشهر",$quarter:"هذا الربع",$year:"هذه السنة",$decade:"هذا العقد"},fr={$day:"غدا",$week:"الاسبوع القادم",$month:"الشهر القادم",$quarter:"الربع القادم",$year:"العام القادم",$decade:"العقد القادم",$minute:"بعد دقيقة",$hour:"بعد ساعة",$minute_plural:"بعد {{count}} دقائق",$hour_plural:"بعد {{count}} ساعات",$day_plural:"بعد {{count}} أيام",$week_plural:"بعد {{count}} أسابيع",$month_plural:"بعد {{count}} أشهر",$quarter_plural:"بعد {{count}} أرباع",$year_plural:"بعد {{count}} سنوات",$decade_plural:"بعد {{count}} عقود"},yr={$day:"في الامس",$week:"الاسبوع الماضي",$month:"الشهر الماضي",$quarter:"الربع الأخير",$year:"العام الماضي",$decade:"العقد الماضي",$minute:"منذ دقيقة",$hour:"منذ ساعة",$minute_plural:"منذ {{count}} دقيقة",$hour_plural:"منذ {{count}} ساعات",$day_plural:"منذ {{count}} أيام",$week_plural:"من {{count}} اسابيع",$month_plural:"قبل {{count}} أشهر",$quarter_plural:"منذ {{count}} أرباع",$year_plural:"منذ {{count}} سنوات",$decade_plural:"منذ {{count}} عقود"},hr={separator:mr,label:vr,now:br,next:fr,prev:yr},gr=" ⇾ ",xr={ramadan:"Ramadan",christmas:"Christmas",newYear:"New Year"},jr={quick:"Quick Select",relative:"Relative",absolute:"Absolute",events:"Events",preset:"Presets",current:"Current",previous:"Previous",from:"From",to:"To","+":"From now","-":"Ago",apply:"Apply",$now:"Now",$minute:"Minute",$hour:"Hour",$day:"Day",$week:"Week",$month:"Month",$quarter:"Quarter",$year:"Year",$decade:"Decade"},wr={$day:"Today",$week:"This week",$month:"This month",$quarter:"This quarter",$year:"This year",$decade:"This decade"},Er={$day:"Tomorrow",$week:"Next week",$month:"Next month",$quarter:"Next quarter",$year:"Next year",$decade:"Next decade",$minute:"A minute later",$hour:"An hour later",$minute_other:"{{count}} minutes later",$hour_other:"{{count}} hours later",$day_other:"{{count}} days later",$week_other:"{{count}} weeks later",$month_other:"{{count}} months later",$quarter_other:"{{count}} quarters later",$year_other:"{{count}} years later",$decade_other:"{{count}} decades later"},Sr={$day:"Yesterday",$week:"Last week",$month:"Last month",$quarter:"Last quarter",$year:"Last year",$decade:"Last decade",$minute:"A minute ago",$hour:"An hour ago",$minute_other:"{{count}} minutes ago",$hour_other:"{{count}} hours ago",$day_other:"{{count}} days ago",$week_other:"{{count}} weeks ago",$month_other:"{{count}} months ago",$quarter_other:"{{count}} quarters ago",$year_other:"{{count}} years ago",$decade_other:"{{count}} decades ago"},Tr={separator:gr,event:xr,label:jr,now:wr,next:Er,prev:Sr};hn("superdate",{en:Tr,ar:hr});var Ve=function(r){var l=r.label,a=r.prefix,c=r.showApply,p=J("superdate"),m=p.t;return n.jsxs(Se,{label:l,className:"mb-2",children:[n.jsx(k,{name:"".concat(a,".diff"),children:n.jsx(Ce,{width:"5rem",min:1,max:99})}),n.jsx(k,{name:"".concat(a,".part"),children:n.jsx(ge,{options:Object.values(je).slice(1).map(function(y){return{id:y,label:m("label.".concat(y))}})})}),n.jsx(k,{name:"".concat(a,".op"),children:n.jsx(ge,{width:"7rem",options:[{id:"-",label:m("label.-")},{id:"+",label:m("label.+")}]})}),c&&n.jsx(U,{variant:"solid",color:"primary",size:"sm",type:"submit","data-dropdown-dismiss":"true",children:m("label.apply")})]})},qr=[{value:"$day",label:"superdate:now.$day"},{value:"$day-1",label:"superdate:prev.$day"},{value:"$day+1",label:"superdate:next.$day"},{value:"$week",label:"superdate:now.$week"},{value:"$week-1",label:"superdate:prev.$week"},{value:"$week+1",label:"superdate:next.$week"},{value:"$month",label:"superdate:now.$month"},{value:"$month-1",label:"superdate:prev.$month"},{value:"$month+1",label:"superdate:next.$month"},{value:"$quarter",label:"superdate:now.$quarter"},{value:"$quarter-1",label:"superdate:prev.$quarter"},{value:"$quarter+1",label:"superdate:next.$quarter"},{value:"$year",label:"superdate:now.$year"},{value:"$year-1",label:"superdate:prev.$year"},{value:"$year+1",label:"superdate:next.$year"}],Or=Ee({rel:Ee({diff:Me().required().label("Difference"),op:z().required().oneOf(["+","-"]).label("Operator"),part:z().required().oneOf(Object.values(je)).label("Date part")})}),Ir=function(r){var l=r.presets,a=l===void 0?qr:l,c=r.value,p=c===void 0?"":c,m=r.onChange,y=J(),s=y.t,h=o.useCallback(function(v){var j=v.rel,S=j.part,i=j.diff,d=j.op;m("".concat(S).concat(d).concat(i,"|").concat(je.NOW))},[]),t=o.useMemo(function(){if(p!=null&&p.endsWith(je.NOW)){var v,j=(v=p.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&v!==void 0?v:[],S=H(j,4),i=S[1],d=S[2],b=S[3],f=b===void 0?"0":b;return{rel:{part:i,op:d,diff:f}}}},[p]);return n.jsxs(Ge,{children:[n.jsx("div",{className:"inline-block origin-left rtl:origin-right",style:{zoom:.85},children:n.jsx(Fe,{resolver:ke(Or),onSubmit:h,defaultValues:t,children:n.jsx(Ve,{label:s("superdate:label.relative"),prefix:"rel",showApply:!0})})}),n.jsx(xe,{children:s("superdate:label.preset")}),n.jsx("div",{"data-dropdown-dismiss":"true",className:"grid grid-cols-3 flex-row text-sm gap-2",children:a.map(function(v){return n.jsx("button",{className:"link appearance-none text-start",onClick:function(){return m==null?void 0:m(v.value)},children:s(v.label,{defaultValue:v.label})},v.value)})})]})},Nr=Ee({from:Ee({diff:Me().required().label("Difference"),op:z().required().oneOf(["+","-"]).label("Operator"),part:z().required().oneOf(Object.values(je)).label("Date part")}),to:Ee({diff:Me().required().label("Difference"),op:z().required().oneOf(["+","-"]).label("Operator"),part:z().required().oneOf(Object.values(je)).label("Date part")})}),Ar=function(r){var l=r.value,a=l===void 0?"":l,c=r.onChange,p=J("superdate"),m=p.t,y=o.useCallback(function(h){var t=h.to,v=h.from;c("".concat(v.part).concat(v.op).concat(v.diff,"|").concat(t.part).concat(t.op).concat(t.diff))},[]),s=o.useMemo(function(){if(a!=null&&a.match(/^(\$\w+)([+-])(\d+)?\|(\$\w+)([+-])(\d+)?$/)){var h,t,v=(h=a.split("|").shift().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&h!==void 0?h:[],j=H(v,4),S=j[1],i=j[2],d=j[3],b=d===void 0?"0":d,f=(t=a.split("|").pop().match(/^(\$\w+)([+-])(\d+)?$/))!==null&&t!==void 0?t:[],C=H(f,4),F=C[1],L=C[2],I=C[3],N=I===void 0?"0":I;return{from:{part:S,op:i,diff:b},to:{part:F,op:L,diff:N}}}},[a]);return n.jsx(Ge,{children:n.jsx("div",{className:"scale-90",children:n.jsxs(Fe,{resolver:ke(Nr),defaultValues:s,onSubmit:y,children:[n.jsx(Ve,{label:m("label.from"),prefix:"from"}),n.jsx(Ve,{label:m("label.to"),prefix:"to"}),n.jsx("div",{className:"flex justify-end",children:n.jsx(U,{variant:"solid",color:"primary",size:"sm",type:"submit","data-dropdown-dismiss":"true",children:m("label.apply")})})]})})})},Cr=["as","color","size","variant","disabled","fullWidth","onChange","value","data-test-value","data-testid"];function nn(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),l.push.apply(l,a)}return l}function rn(e){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?nn(Object(l),!0).forEach(function(a){Oe(e,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):nn(Object(l)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))})}return e}var $r=function(r){var l=r.events,a=r.value,c=r.presets,p=r.recurringEvents,m=r.onChange,y=J("superdate"),s=y.t,h=Qe(),t=gn(),v=t.currentCalendar,j=t.currentLocale,S=o.useMemo(function(){return v==="hijri"},[v]),i=o.useState(""),d=H(i,2),b=d[0],f=d[1],C=o.useState("quick"),F=H(C,2),L=F[0],I=F[1];o.useEffect(function(){a!=null&&a.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/)?I("relative"):a&&!(a!=null&&a.match(/^(\$\w+)/))?I("absolute"):I("quick"),a&&f(a)},[a]);var N=o.useCallback(function(Q){var P,$,g,u,_=le.parseRange(Q);f(Q),m==null||m(Q,[(P=_[0])===null||P===void 0||($=P.toISOString)===null||$===void 0?void 0:$.call(P),(g=_[1])===null||g===void 0||(u=g.toISOString)===null||u===void 0?void 0:u.call(g)]),h==null||h.events.emit("close")},[S,j]);return n.jsx("div",{className:X("rounded-capped outline select-none overflow-hidden grid","fabric-superDate"),children:n.jsxs(zn,{headerClassName:"border-b",onChange:I,activeTab:L,children:[n.jsx(Ne,{id:"quick",label:s("label.quick"),children:n.jsx(Ir,{value:b,onChange:N,presets:c})}),n.jsx(Ne,{id:"relative",label:s("label.relative"),children:n.jsx(Ar,{value:b,onChange:N})}),n.jsx(Ne,{id:"absolute",label:s("label.absolute"),children:n.jsx(Ge,{className:"p-0",children:n.jsx(Xn,{withTime:!0,showHijriToggle:!0,value:b?le.parseRange(b):void 0,showApply:!0,onChange:function(P){var $=H(P,2),g=$[0],u=$[1];return N==null?void 0:N("".concat(g,"|").concat(u))}})})}),n.jsx(Ne,{id:"events",label:s("label.events"),children:n.jsx(Hn,{isHijri:S,onChange:N,events:l,recurringEvents:p})})]})})},Dr=function(r){var l,a=r.as,c=a===void 0?"button":a,p=r.color,m=p===void 0?"primary":p,y=r.size,s=r.variant,h=r.disabled,t=r.fullWidth,v=r.onChange,j=r.value,S=r["data-test-value"],i=r["data-testid"],d=$e(r,Cr),b=gn(),f=b.currentCalendar,C=b.currentLocale,F=o.useMemo(function(){return f==="hijri"},[f]),L=o.useState(),I=H(L,2),N=I[0],Q=I[1];o.useEffect(function(){Q(j)},[j]);var P=o.useCallback(function(g){var u,_,M,x,q=le.parseRange(g);Q(g),v==null||v(g,[(u=q[0])===null||u===void 0||(_=u.toISOString)===null||_===void 0?void 0:_.call(u),(M=q[1])===null||M===void 0||(x=M.toISOString)===null||x===void 0?void 0:x.call(M)])},[F,C]),$=c==="button"?U:De;return n.jsxs(Te,{showArrow:!0,children:[n.jsx(_n,{content:le.relativeTooltip(N,F),children:n.jsx($,{icon:"icon-[mdi--clock-outline]",size:y,color:m,disabled:h,fullWidth:t,variant:s,"data-test-value":S,"data-testid":i,children:(l=le.relativeLabel(N,F))!==null&&l!==void 0?l:""})}),n.jsx($r,rn(rn({},d),{},{value:N,onChange:P}))]})};const kr={add:"إضافة عامل تصفية",all_filters:"جميع المرشحات",apply:"يتقدم",basicFilter:"الفلتر الأساسي",cancel:"يلغي",customQuery:"استعلام مخصص",delete:"يمسح",disable:"إبطال",disableAll:"تعطيل الكل",edit:"يحرر",enable:"يُمكَِن",enableAll:"تمكين الكل",exclude:"استبعاد",excludeAll:"استبعاد الكل",field:"مجال",filters:"المرشحات",forAdvanced:"للمستخدمين المتقدمين فقط!",include:"يشمل",includeAll:"تضمين الكل",invertAll:"عكس التضمين/الاستبعاد",label:"ملصق",operator:"المشغل",optional:"خياري",pin:"مثبت",query:"استفسار",refresh:"ينعش",remove:"يزيل",removeAll:"إزالة الكل",toggleDisable:"عكس تعطيل/تمكين",unpin:"غير مثبت",update:"تحديث",value:"قيمة",view:"منظر",matchAll:"تطابق كل شيء",matchAny:"تطابق أي"},Fr={ALL:"كل",ANY:"أي من",BETWEEN:"بين هذا وذاك",ENDS:"ينتهي مع",EXISTS:"موجود",GT:">",GTE:"≥",IS:"يكون",LIKE:"يحب",LT:"<",LTE:"≤",STARTS:"ابدا ب",WITHIN:"في غضون"},Lr="مصطلح البحث...",Pr={BOOLEAN:"رقم",DATE:"منطقي",DATETIME:"تاريخ",DECIMAL:"يطفو",GEO:"GeoJSON",NUMBER:"كثافة العمليات",STRING:"سلسلة"},Rr={compare:"مقارنة الحقل المطلوب",field:"حقل مطلوب",label:"التصنيف مطلوب",operator:"عامل مطلوب",value:"القيمة المطلوبة"},Mr={label:kr,operator:Fr,placeholder:Lr,type:Pr,validate:Rr},Br={add:"Add Filter",all_filters:"All Filters",apply:"Apply",basicFilter:"Basic Filter",cancel:"Cancel",customQuery:"Custom Query",delete:"Delete",disable:"Disable",disableAll:"Disable All",edit:"Edit",enable:"Enable",enableAll:"Enable All",exclude:"Exclude",excludeAll:"Exclude All",field:"Field",filters:"Filters",forAdvanced:"For advanced users only!",include:"Include",includeAll:"Include All",invertAll:"Invert Include/Exclude",label:"Label",matchAll:"Match All",matchAny:"Match Any",operator:"Operator",optional:"Optional",pin:"Pinned",query:"Query",refresh:"Refresh",remove:"Remove",removeAll:"Remove All",toggleDisable:"Invert Disable/Enable",unpin:"Unpinned",update:"Update",value:"Value",view:"View"},Vr={ALL:"All of",ANY:"Any of",BETWEEN:"Between",ENDS:"Ends with",EQ:"=",EXISTS:"Exists",GT:">",GTE:"≥",IS:"Is",LIKE:"Like",LT:"<",LTE:"≤",STARTS:"Starts with",WITHIN:"Within"},Qr="Search term...",_r={BOOLEAN:"Bool",DATE:"Date",DATETIME:"Date Time",DECIMAL:"Decimal",GEO:"GeoJSON",NUMBER:"Number",STRING:"String"},Gr={compare:"Compare field required",field:"Field required",label:"Label required",operator:"Operator required",value:"Value required"},Wr={label:Br,operator:Vr,placeholder:Qr,type:_r,validate:Gr};hn("searchbar",{en:Wr,ar:Mr});const wn=o.createContext({}),We=()=>o.useContext(wn);var A=(e=>(e.ID="ID",e.STRING="STRING",e.TEXT="TEXT",e.NUMBER="NUMBER",e.DECIMAL="DECIMAL",e.BOOLEAN="BOOLEAN",e.DATE="DATE",e.DATETIME="DATETIME",e.NONE="NONE",e))(A||{}),E=(e=>(e.EXISTS="EXISTS",e.IS="IS",e.ALL="ALL",e.ANY="ANY",e.EQ="EQ",e.LT="LT",e.GT="GT",e.LTE="LTE",e.GTE="GTE",e.LIKE="LIKE",e.STARTS="STARTS",e.ENDS="ENDS",e.WITHIN="WITHIN",e.BETWEEN="BETWEEN",e))(E||{});const an={ID:["IS","ANY"],STRING:["EXISTS","IS","ANY","ALL"],TEXT:["EXISTS","LIKE","STARTS","ENDS"],NUMBER:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],DECIMAL:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],BOOLEAN:["EXISTS","EQ"],DATE:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],DATETIME:["EXISTS","EQ","BETWEEN","LT","GT","LTE","GTE"],NONE:["EXISTS"]},zr=new fn({id:z().required(),field:z().required(),operator:z().required().oneOf(Object.values(E)),negate:Mn().optional(),label:z(),value:Rn().when("operator",{is:E.EXISTS,then:e=>e.optional(),otherwise:e=>e.required()}).when("operator",{is:E.ANY,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(r=[])=>(r==null?void 0:r.length)>0})}).when("operator",{is:E.ALL,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(r=[])=>(r==null?void 0:r.length)>0})}).when("operator",{is:E.BETWEEN,then:e=>e.test({name:"array-check",message:"${path} is a required field",test:(r=[])=>(r==null?void 0:r.length)>0&&r[0]&&r[1]})}).when("operator",{is:E.BETWEEN,then:e=>e.test({name:"array-check",message:"${path} min max",test:(r=[])=>(r==null?void 0:r.length)>0&&r[0]<r[1]})})}),En=({filter:e,onChange:r,onRemove:l})=>{const{t:a}=J("searchbar"),c=Qe(),{fields:p=[]}=We(),m=o.useRef(null),y=o.useRef(null),[s,h]=o.useState(e);o.useEffect(()=>{var i,d;e&&"field"in e&&e.field?(i=y.current)==null||i.setValues(e):(d=y.current)==null||d.setValues({id:he(),field:"",operator:E.EXISTS})},[e]),o.useEffect(()=>{setTimeout(()=>{var i;(i=m.current)==null||i.focus()},100)},[]);const t=o.useMemo(()=>{if(s!=null&&s.field)return p.find(i=>i.field===(s==null?void 0:s.field))},[s]),v=o.useMemo(()=>{var i;return t==null?[E.EXISTS]:((i=y.current)==null||i.setValue("operator",an[t.type][0]),[...an[t.type]])},[t]),j=o.useMemo(()=>{var i,d,b,f,C,F,L;if((s==null?void 0:s.operator)===E.EXISTS&&(s==null?void 0:s.value)!==void 0&&((i=y.current)==null||i.setValue("value",void 0)),(t==null?void 0:t.type)===A.STRING&&([E.ALL,E.ANY].includes(s==null?void 0:s.operator)?!se(s.value)&&((d=y.current)==null||d.setValue("value",[])):se(s.value)&&((b=y.current)==null||b.setValue("value",void 0))),((t==null?void 0:t.type)===A.DATE||(t==null?void 0:t.type)===A.DATETIME||(t==null?void 0:t.type)===A.NUMBER||(t==null?void 0:t.type)===A.DECIMAL)&&((s==null?void 0:s.operator)===E.BETWEEN?!se(s.value)&&((f=y.current)==null||f.setValue("value",[])):se(s.value)&&((C=y.current)==null||C.setValue("value",void 0))),(t==null?void 0:t.type)===A.BOOLEAN&&[E.IS,E.EQ].includes(s==null?void 0:s.operator)&&(s==null?void 0:s.value)===void 0&&((F=y.current)==null||F.setValue("value",!1)),t==null||!(s!=null&&s.operator)||(s==null?void 0:s.operator)===E.EXISTS)return null;if((t==null?void 0:t.type)===A.BOOLEAN)return n.jsx(Se,{label:a("label.value"),"data-plain":"true",children:n.jsx(k,{name:"value",children:n.jsx(Ue,{})})});if((t==null?void 0:t.type)===A.STRING||(t==null?void 0:t.type)===A.ID)return[E.ALL,E.ANY].includes(s==null?void 0:s.operator)?n.jsx(k,{name:"value",children:n.jsx(ge,{multiple:!0,searchable:!0,allowCreate:!0,allowClear:!0,options:t.values??[],label:a("label.value"),onQuery:t.onSearch})}):t.onSearch||(L=t.values)!=null&&L.length?n.jsx(k,{name:"value",children:n.jsx(ge,{searchable:!0,allowCreate:!0,allowClear:!0,options:t.values??[],label:a("label.value"),onQuery:t.onSearch})}):n.jsx(k,{name:"value",children:n.jsx(Be,{label:a("label.value"),allowClear:!0})});if(t.type===A.TEXT)return n.jsx(k,{name:"value",children:n.jsx(Jn,{rows:3,label:a("label.value"),allowClear:!0})});if((t==null?void 0:t.type)===A.DECIMAL||(t==null?void 0:t.type)===A.NUMBER){const I=t.type===A.DECIMAL?.1:1;return(s==null?void 0:s.operator)===E.BETWEEN?n.jsx(k,{name:"value",children:n.jsxs(Se,{label:a("label.value"),children:[n.jsx(k,{name:"value[0]",children:n.jsx(Ce,{step:I,allowClear:!0})}),n.jsx("span",{className:"p-2 text-muted",children:"≷"}),n.jsx(k,{name:"value[1]",children:n.jsx(Ce,{step:I,allowClear:!0})})]})}):n.jsx(k,{name:"value",children:n.jsx(Ce,{label:a("label.value"),step:I,allowClear:!0})})}if((t==null?void 0:t.type)===A.DATE||(t==null?void 0:t.type)===A.DATETIME){const I=t.type===A.DATETIME?"datetime":"date";return(s==null?void 0:s.operator)===E.BETWEEN?n.jsx(k,{name:"value",children:n.jsxs(Se,{label:a("label.value"),children:[n.jsx(k,{name:"value[0]",children:n.jsx(Re,{type:I,allowClear:!0})}),n.jsx("span",{className:"p-2 text-muted",children:"≷"}),n.jsx(k,{name:"value[1]",children:n.jsx(Re,{type:I,allowClear:!0})})]})}):n.jsx(k,{name:"value",children:n.jsx(Re,{type:I,allowClear:!0})})}},[t,s==null?void 0:s.operator]),S=o.useCallback(i=>{const d={id:i.id,field:i.field,negate:i.negate,operator:i.operator,value:i.value,label:i.label,type:t==null?void 0:t.type};r==null||r(d),c==null||c.events.emit("close")},[t,r]);return n.jsx(Fe,{formRef:y,resolver:ke(zr),defaultValues:s,onChange:h,onSubmit:S,children:n.jsxs("div",{className:"w-lg",children:[n.jsxs(Un,{children:[n.jsx(Pe,{flex:"fill",children:n.jsx(k,{name:"field",children:n.jsx(ge,{required:!0,searchable:!0,ref:m,label:a("label.field"),options:p,labelProperty:"label",valueProperty:"field",groupProperty:"type"})})}),n.jsxs(Pe,{flex:"content",className:"text-center",children:[n.jsx("label",{className:"block py-0.5 text-sm",children:a("label.exclude")}),n.jsx(k,{name:"negate",children:n.jsx(Ue,{color:"danger"})})]}),n.jsx(Pe,{flex:"content",className:"basis-28",children:n.jsx(k,{name:"operator",children:n.jsx(ge,{label:a("label.operator"),options:v,renderer:i=>a(`operator.${i}`)})})})]}),n.jsx("br",{}),j,n.jsx("br",{}),n.jsx(k,{name:"label",children:n.jsx(Be,{label:a("label.label"),placeholder:a("label.label"),decorateEnd:!(e!=null&&e.label)&&n.jsx("span",{className:"text-sm opacity-65 pe-4",children:"Optional"})})}),n.jsxs("div",{className:"flex mt-4 justify-end gap-1 sticky bottom-1 bg-base",children:[l&&n.jsx("div",{className:"flex-1",children:n.jsx(U,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",color:"danger",onClick:l,children:a("label.remove")})}),n.jsx(U,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",children:a("label.cancel")}),n.jsx(U,{type:"submit",variant:"solid",size:"sm",children:a("label.apply")})]})]})})};En.__docgenInfo={description:"",methods:[],displayName:"FilterForm",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};function tn(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),l.push.apply(l,a)}return l}function Xr(e){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?tn(Object(l),!0).forEach(function(a){Oe(e,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):tn(Object(l)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))})}return e}var Hr=function(r){var l=r.ref,a=r.value,c=r.schema,p=r.handlebarSuggestions,m=r.required,y=r.readOnly,s=r.minimal,h=r.onChange,t=r.language,v=t===void 0?"json":t,j=o.useState(),S=H(j,2),i=S[0],d=S[1],b=o.useState(),f=H(b,2),C=f[0],F=f[1],L=rr(),I=o.useState(""),N=H(I,2),Q=N[0],P=N[1];o.useLayoutEffect(function(){i&&P(L?"vs-dark":"light")},[L,i]);var $=o.useCallback(function(B){return i==null?void 0:i.layout(B)},[i]),g=er($),u=o.useDeferredValue(a),_=o.useMemo(function(){return Bn(u)?u:JSON.stringify(u,null,4)},[u]),M=jn(function(B){var D=i==null?void 0:i.getModel();if(D){var R=C==null?void 0:C.editor.getModelMarkers({owner:D.getLanguageId()});(R==null?void 0:R.filter(function(W){return W.severity>7}).length)===0&&(h==null||h(B))}},[h,i],1e3);o.useImperativeHandle(l,function(){return{getValue:function(){return i==null?void 0:i.getValue()},validate:function(){var D=i==null?void 0:i.getModel();if(D){var R=C==null?void 0:C.editor.getModelMarkers({owner:D.getLanguageId()});return(R==null?void 0:R.filter(function(ae){return ae.severity>8}).length)===0}try{var W=i==null?void 0:i.getValue();return v==="json"&&(W=JSON.parse(W)),m?!ce(W):!0}catch{return!1}}}},[m,v]);var x=o.useRef(null),q=o.useCallback(function(B){if(v==="json"&&c){var D,R=Zn(c),W=R[0],ae=R.slice(1);(D=B.languages)===null||D===void 0||(D=D.json)===null||D===void 0||D.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[Xr({fileMatch:["*"]},W)].concat(Vn(ae))})}if(v==="html"&&p){var Z,te;(Z=x.current)===null||Z===void 0||(te=Z.dispose)===null||te===void 0||te.call(Z),x.current=B.languages.registerCompletionItemProvider("html",{triggerCharacters:["{{"],provideCompletionItems:function(ee,oe){var pe=ee.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:oe.lineNumber,endColumn:oe.column}),we=pe.match(/\{\{(.*)([^}])?$/);if(!we)return{suggestions:[]};var me=ee.getWordUntilPosition(oe),ye={startLineNumber:oe.lineNumber,endLineNumber:oe.lineNumber,startColumn:me.startColumn,endColumn:me.endColumn};return{suggestions:p.map(function(ie){return{label:ie.text,kind:B.languages.CompletionItemKind.Text,documentation:ie.description,insertText:ie.text,range:ye}})}}})}},[c,v]),re=o.useCallback(function(B,D){D.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,schemas:[]})},[]);return n.jsx(nr,{className:"relative",children:n.jsx("div",{ref:g,"data-ref":"codeEditor",className:X("fabric-codeEditor","absolute inset-0"),children:n.jsx(ar,{editorDidMount:function(D,R){return[!!D&&d(D),!!R&&F(R)]},editorWillMount:q,editorWillUnmount:re,value:_,language:v,onChange:M,theme:Q,className:"fabric-editor",options:{readOnly:y,minimap:{enabled:!s},scrollBeyondLastLine:!1,folding:!s,lineNumbers:s?"off":void 0,wordWrap:"on",fontFamily:'Menlo, Monaco, "Courier New", monospace'}})})})};const Ur=new fn({id:z().required(),label:z().required(),query:z().required().test(e=>{try{return!ce(JSON.parse(e))}catch{return!1}})}),Sn=({filter:e,onChange:r,onRemove:l})=>{const{t:a}=J("searchbar"),c=Qe(),{defaultQuery:p="",querySchema:m,queryLanguage:y}=We(),s=o.useRef(null),h=o.useMemo(()=>e&&"query"in e&&e.query?{id:e.id,query:JSON.stringify(JSON.parse(e.query??"{}"),null,4),label:e.label}:{id:he(),label:"",query:p},[e]);o.useEffect(()=>{setTimeout(()=>{var v;(v=s.current)==null||v.focus()},100)},[]);const t=o.useCallback(v=>{const j={id:v.id,query:v.query,label:v.label};r==null||r(j),c==null||c.events.emit("close")},[r]);return n.jsxs(Fe,{resolver:ke(Ur),defaultValues:h,onSubmit:t,children:[n.jsx(ur,{color:"warning",children:"For advanced users only!"}),n.jsx(k,{name:"label",children:n.jsx(Be,{required:!0,ref:s,label:a("label.label"),placeholder:a("label.label")})}),n.jsx(k,{name:"query",children:({checked:v,error:j,invalid:S,ref:i,...d})=>n.jsxs("div",{className:"my-2",children:[n.jsx("label",{className:X("block px-2",S&&"text-danger-600"),children:a("label.query")}),n.jsx("div",{className:"h-96 w-xl grid outline place-content-start",style:{gridTemplate:'"content" 1fr/1fr'},children:n.jsx(Hr,{language:y??"text",minimal:!0,required:!0,...d,schema:m})})]})}),n.jsxs("div",{className:"flex mt-4 justify-end gap-1 sticky bottom-1 bg-base",children:[l&&n.jsx("div",{className:"flex-1",children:n.jsx(U,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",color:"danger",onClick:l,children:a("label.remove")})}),n.jsx(U,{"data-dropdown-dismiss":"true",variant:"link",size:"sm",children:a("label.cancel")}),n.jsx(U,{type:"submit",variant:"solid",size:"sm",children:a("label.apply")})]})]})};Sn.__docgenInfo={description:"",methods:[],displayName:"QueryForm",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const ze=({filter:e,onRemove:r,onChange:l})=>{const{t:a}=J("searchbar"),{fields:c}=We(),[p,m]=o.useState(ce(c));return o.useEffect(()=>{m(!!e&&"query"in e)},[e]),n.jsxs("div",{className:"px-2 py-1 bg-base outline min-w-[420px]",children:[!ce(c)&&n.jsx("div",{className:"pb-4 flex justify-end",children:n.jsx("span",{role:"none",className:"text-sm link",onClick:()=>m(!p),children:a(p?"label.basicFilter":"label.customQuery")})}),!p&&n.jsx(En,{filter:e,onRemove:r,onChange:l}),p&&n.jsx(Sn,{filter:e,onRemove:r,onChange:l})]})};ze.__docgenInfo={description:"",methods:[],displayName:"FilterEdit",props:{filter:{required:!1,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const Tn=({filter:e,onRemove:r})=>{const{t:l}=J("searchbar"),a=o.useMemo(()=>{var c,p,m,y;if("query"in e)return JSON.stringify(JSON.parse(e.query??"{}"),null,2);if("field"in e){let s=(c=e.value)==null?void 0:c.toString();return e.operator===E.BETWEEN&&se(e.value)&&(s=`[${(p=e.value)==null?void 0:p.join(" - ")}]`),e.operator===E.ANY&&se(e.value)&&(s=`[${(m=e.value)==null?void 0:m.join(", ")}]`),e.operator===E.ALL&&se(e.value)&&(s=`(${(y=e.value)==null?void 0:y.join(", ")})`),n.jsxs(o.Fragment,{children:[e.negate&&n.jsx("b",{children:"NOT "}),n.jsx("span",{children:e.field}),n.jsxs("b",{children:[" ",l(`operator.${e.operator}`)," "]}),n.jsx("div",{children:s})]})}return""},[e]);return n.jsxs("div",{className:"p-2 bg-base relative",children:["query"in e&&n.jsx("div",{className:"absolute top-2 end-2 z-10",children:n.jsx(tr,{size:"sm",text:a})}),n.jsx("pre",{className:"overflow-auto bg-base outline text-sm p-2 max-h-96 max-w-3xl min-w-[24rem]",children:a}),!e.required&&n.jsx(U,{size:"sm",variant:"link",color:"danger","data-dropdown-dismiss":"true",onClick:r,children:l("label.remove")})]})};Tn.__docgenInfo={description:"",methods:[],displayName:"FilterView",props:{filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Kr="M9,5C10.04,5 11.06,5.24 12,5.68C12.94,5.24 13.96,5 15,5A7,7 0 0,1 22,12A7,7 0 0,1 15,19C13.96,19 12.94,18.76 12,18.32C11.06,18.76 10.04,19 9,19A7,7 0 0,1 2,12A7,7 0 0,1 9,5M8.5,12C8.5,13.87 9.29,15.56 10.56,16.75L11.56,16.29C10.31,15.29 9.5,13.74 9.5,12C9.5,10.26 10.31,8.71 11.56,7.71L10.56,7.25C9.29,8.44 8.5,10.13 8.5,12M15.5,12C15.5,10.13 14.71,8.44 13.44,7.25L12.44,7.71C13.69,8.71 14.5,10.26 14.5,12C14.5,13.74 13.69,15.29 12.44,16.29L13.44,16.75C14.71,15.56 15.5,13.87 15.5,12Z",Yr="M9,5A7,7 0 0,0 2,12A7,7 0 0,0 9,19C10.04,19 11.06,18.76 12,18.32C12.94,18.76 13.96,19 15,19A7,7 0 0,0 22,12A7,7 0 0,0 15,5C13.96,5 12.94,5.24 12,5.68C11.06,5.24 10.04,5 9,5M9,7C9.34,7 9.67,7.03 10,7.1C8.72,8.41 8,10.17 8,12C8,13.83 8.72,15.59 10,16.89C9.67,16.96 9.34,17 9,17A5,5 0 0,1 4,12A5,5 0 0,1 9,7M15,7A5,5 0 0,1 20,12A5,5 0 0,1 15,17C14.66,17 14.33,16.97 14,16.9C15.28,15.59 16,13.83 16,12C16,10.17 15.28,8.41 14,7.11C14.33,7.04 14.66,7 15,7Z",qn=({filter:e,fields:r,editable:l,onChange:a,onRemove:c})=>{const{t:p}=J("searchbar"),[m,y]=o.useState();return m==="edit"?n.jsx(ze,{filter:e,onChange:a,onRemove:c}):m==="view"?n.jsx(Tn,{filter:e,onRemove:c}):n.jsxs(_e,{className:"text-sm",children:[l&&e.canEdit!==!1?n.jsx(V,{icon:"icon-[mdi--lead-pencil]",label:p("label.edit"),"data-dropdown-dismiss":"false",onClick:()=>{y("edit")}}):n.jsx(V,{icon:"icon-[mdi--eye]",label:p("label.view"),"data-dropdown-dismiss":"false",onClick:()=>{y("view")}}),n.jsx(xe,{}),e.operator&&[E.ALL,E.ANY].includes(e.operator)&&n.jsx(V,{label:p(e.operator===E.ALL?"label.matchAny":"label.matchAll"),icon:p(e.operator===E.ALL?Yr:Kr),onClick:()=>a({...e,operator:e.operator===E.ALL?E.ANY:E.ALL})}),e.canPin!==!1&&n.jsx(V,{label:p(e.pinned?"label.unpin":"label.pin"),onClick:()=>a({...e,pinned:!e.pinned})}),e.canInvert!==!1&&e.field&&n.jsx(V,{label:p(e.negate?"label.include":"label.exclude"),onClick:()=>a({...e,negate:!e.negate})}),e.canDisable!==!1&&n.jsx(V,{label:p(e.disabled?"label.enable":"label.disable"),onClick:()=>a({...e,disabled:!e.disabled})}),!e.required&&n.jsx(xe,{}),!e.required&&n.jsx(V,{color:"danger",icon:"icon-[mdi--minus-circle-outline]",label:p("label.remove"),onClick:()=>c()})]})};qn.__docgenInfo={description:"",methods:[],displayName:"FilterMenu",props:{fields:{required:!1,tsType:{name:"Array",elements:[{name:"FilterField"}],raw:"FilterField[]"},description:""},editable:{required:!1,tsType:{name:"boolean"},description:""},filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""}}};const On=({filter:e,fields:r,editable:l,includedColor:a="primary-500",excludedColor:c="danger-500",onChange:p,onRemove:m})=>{const{t:y}=J("searchbar"),s=o.useMemo(()=>{var v;return e.label?n.jsxs(o.Fragment,{children:[e.field&&e.negate&&n.jsx("span",{className:"font-semibold",children:"NOT"}),n.jsx("span",{children:e.label})]}):n.jsxs(o.Fragment,{children:[e.field&&e.negate&&n.jsx("span",{className:"font-semibold",children:"NOT"}),n.jsx("span",{children:e.field}),n.jsx("span",{className:"font-semibold",children:y(`operator.${e.operator}`,{defaultValue:e.operator})}),"value"in e&&!yn(e.value)&&n.jsx("span",{className:"truncate block",children:(v=e.value)==null?void 0:v.toString().substring(0,24)})]})},[e]),h=o.useMemo(()=>e.color??(e.field&&e.negate?c:a),[e,a,c]),t=o.useMemo(()=>{if(e.canDisable!==!1)return e.disabled?"icon-[mdi--checkbox-blank-outline]":"icon-[mdi--checkbox-marked]"},[e]);return n.jsxs(Te,{showArrow:!0,children:[n.jsx(De,{size:"sm",color:h,className:X("outline max-w-60",e.disabled&&"opacity-65"),variant:e.pinned?"solid":void 0,icon:t&&{icon:t,color:h},onIconClick:v=>[p({...e,disabled:!e.disabled}),v.stopPropagation()],"data-ref":"filterTag","data-test-value":e.id,stopPropagation:!0,onRemove:e.required?void 0:()=>m(),children:n.jsxs("div",{className:X("flex gap-1 items-center",e.disabled&&"line-through opacity-65"),children:[e.pinned&&n.jsx(qe,{className:"flex-content",icon:e.icon??"icon-[mdi--pin]"}),n.jsx("div",{className:"truncate flex gap-x-0.5 flex-nowrap",children:s})]})}),n.jsx(qn,{filter:e,fields:r,editable:l,onChange:p,onRemove:m})]})};On.__docgenInfo={description:"",methods:[],displayName:"FilterTag",props:{filter:{required:!0,tsType:{name:"intersection",raw:`BaseFilter &
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
)`,elements:[{name:"BaseFilter"},{name:"unknown"}]},name:"filter"}],return:{name:"void"}}},description:""},includedColor:{defaultValue:{value:'"primary-500"',computed:!1},required:!1},excludedColor:{defaultValue:{value:'"danger-500"',computed:!1},required:!1}}};const In=({filters:e=[],allowAdd:r,fields:l,editable:a,querySchema:c,queryLanguage:p,defaultQuery:m,includedColor:y,excludedColor:s,onFilterChanged:h})=>{const{t}=J("searchbar"),v=o.useCallback(d=>{const b=[...e];b.splice(d,1),h==null||h(b)},[e]),j=o.useCallback((d,b)=>{const f=[...e];yn(b)?f.push(d):f.splice(b,1,d),h==null||h(f)},[e]),S=o.useCallback(d=>{const b=[];d==="removeAll"&&b.push(...e.filter(f=>f.required)),d!=="removeAll"&&b.push(...e.map(f=>(d==="disableAll"&&(f.disabled=!0),d==="enableAll"&&(f.disabled=!1),d==="toggleDisable"&&(f.disabled=!f.disabled),d==="excludeAll"&&f.field&&(f.negate=!0),d==="includeAll"&&f.field&&(f.negate=!1),d==="invertAll"&&f.field&&(f.negate=!f.negate),{...f}))),h==null||h(b)},[e]),i=o.useMemo(()=>{const d={someDisabled:!1,someEnabled:!1,someExcluded:!1,someIncluded:!1,canRemoveAll:!1};return e.forEach(b=>{b.disabled&&b.canDisable!==!1&&!d.someDisabled&&(d.someDisabled=!0),!b.disabled&&b.canDisable!==!1&&!d.someEnabled&&(d.someEnabled=!0),b.field&&b.negate&&b.canInvert!==!1&&!d.someExcluded&&(d.someExcluded=!0),b.field&&!b.negate&&b.canInvert!==!1&&!d.someIncluded&&(d.someIncluded=!0),!b.required&&!d.canRemoveAll&&(d.canRemoveAll=!0)}),d},[e]);return n.jsx(wn.Provider,{value:{defaultQuery:m,querySchema:c,queryLanguage:p,fields:l},children:n.jsxs("div",{className:"flex flex-wrap gap-1 items-center",children:[n.jsxs(Te,{showArrow:!0,disabled:ce(e),children:[n.jsx(qe,{icon:"icon-[mdi--cog-outline]",className:X(ce(e)&&"pointer-events-none opacity-30"),color:ce(e)?void 0:"primary"}),n.jsxs(_e,{className:"text-sm",onClick:S,children:[i.someDisabled&&n.jsx(V,{id:"enableAll",label:t("label.enableAll")}),i.someEnabled&&n.jsx(V,{id:"disableAll",label:t("label.disableAll")}),n.jsx(V,{icon:"icon-[mdi--checkbox-intermediate-variant]",id:"toggleDisable",label:t("label.toggleDisable")}),n.jsx(xe,{}),i.someExcluded&&n.jsx(V,{id:"includeAll",label:t("label.includeAll")}),i.someIncluded&&n.jsx(V,{id:"excludeAll",label:t("label.excludeAll")}),n.jsx(V,{id:"invertAll",icon:"icon-[mdi--set-left]",label:t("label.invertAll")}),n.jsx(xe,{}),n.jsx(V,{id:"removeAll",color:"danger",icon:"icon-[mdi--minus-circle-outline]",label:t("label.removeAll"),disabled:!i.canRemoveAll})]})]}),e==null?void 0:e.map((d,b)=>n.jsx(On,{filter:d,editable:a,includedColor:y,excludedColor:s,onRemove:()=>v(b),onChange:f=>j(f,b)},b)),r&&n.jsxs(Te,{showArrow:!0,children:[n.jsx(De,{size:"sm",className:"outline-dashed! outline-tint-400!",icon:"icon-[mdi--plus-circle-outline]",children:t("label.add")}),n.jsx(ze,{onChange:j})]})]})})};In.__docgenInfo={description:`FilterBar component allows users to manage a list of filters.
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
@param filters`}}};const Xe=({historyKey:e="ruf:search",historyCount:r=20,defaultQueryList:l,prepend:a,append:c,decorateEnd:p,decorateStart:m,children:y,hideFilters:s,defaultCollapsed:h=!1,disabled:t,onCollapsed:v,onQuery:j,onSearch:S,query:i,ref:d,multiple:b,filters:f=He,...C})=>{const{t:F}=J("searchbar"),[L,I]=lr(e,l??[]),[N,Q]=o.useState(h),P=o.useMemo(()=>b?He:"",[b]),$=jn((x,q)=>{u({type:"dirty",dirty:!1}),S==null||S({query:x,filters:q})},[]),[g,u]=o.useReducer((x,q)=>q.type==="reset"?{...x,dirty:!1,query:q.query,filters:q.filters}:q.type==="dirty"?{...x,dirty:q.dirty}:q.type==="query"?(!b&&$(q.query??P,x.filters),{...x,dirty:!!b,query:q.query??P}):q.type==="filter"?($(x.query,q.filters??[]),{...x,dirty:!1,filters:q.filters??[]}):x,{dirty:!1,query:i,filters:f});o.useEffect(()=>{u({type:"reset",filters:f,query:i})},[f,i]);const _=x=>{const q=se(x)?x:[x];I(sr([...q,...L]).slice(0,r)),u({type:"query",query:x})},M=(x=[])=>{u({type:"filter",filters:x})};return n.jsxs("div",{children:[n.jsxs("div",{className:"flex flex-nowrap gap-1 mb-1",children:[n.jsxs(Se,{"data-inner":!0,className:"flex-1",children:[!s&&n.jsx(U,{variant:"link",badge:f.length,onClick:()=>Q(!N),children:F("label.filters")}),a,n.jsx(pr,{allowClear:!0,expandOnEdit:!0,ref:d,multiple:b,history:L,value:g.query,decorateEnd:p,decorateStart:m,onInput:()=>u({type:"dirty",dirty:!b}),onSelect:_,"data-ref":"searchbarInput",onEnterPressed:()=>$(g.query,g.filters)}),c,n.jsx(U,{variant:"solid",color:g.dirty?"warning":"primary",onClick:()=>$(g.query,g.filters),children:F(g.dirty?"label.update":"label.refresh")})]}),y]}),!s&&!N&&n.jsx(In,{...C,filters:g.filters,onFilterChanged:M})]})};Xe.__docgenInfo={description:`This component provides a search input with autocomplete functionality,
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
@param query`},filters:{defaultValue:{value:"EMPTY_ARRAY",computed:!0},required:!1}},composes:["Partial","RefProp"]};const{fn:Jr}=__STORYBOOK_MODULE_TEST__,Qa={component:Xe,title:"@searchbar/SearchBar",parameters:{layout:"padded",jest:["searchbar/tests/SearchBar.test.tsx"]}},Zr=[{uri:"http://react-fabric/schema.json",schema:{type:"object",$ref:"http://react-fabric/base-schema.json"}},{uri:"http://react-fabric/base-schema.json",schema:{type:"object",properties:{bool:{$ref:"http://react-fabric/bool-schema.json"},exists:{$ref:"http://react-fabric/exists-schema.json"},query_string:{$ref:"http://react-fabric/query-schema.json"}}}},{uri:"http://react-fabric/exists-schema.json",schema:{type:"object",properties:{field:{type:"string"}},required:["field"]}},{uri:"http://react-fabric/query-schema.json",schema:{type:"object",properties:{fields:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},query:{type:"string"}},required:["query"]}},{uri:"http://react-fabric/bool-schema.json",schema:{type:"object",properties:{filter:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},must:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},should:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},must_not:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},should_not:{type:"array",items:{$ref:"http://react-fabric/base-schema.json"}},minimum_should_match:{type:"number"}}}}],Ae={render:e=>n.jsx(Xe,{...e,append:n.jsx(Dr,{variant:"link",value:"$year-5|$now"}),children:n.jsxs(Te,{placement:"bottom-end",children:[n.jsx(U,{icon:"icon-[mdi--menu]","aria-label":"menu",variant:"link"}),n.jsxs(_e,{className:"text-sm",children:[n.jsx(V,{label:"Open"}),n.jsx(V,{label:"Save"}),n.jsx(xe,{}),n.jsx(V,{label:"Share"})]})]})}),args:{allowAdd:!0,excludedColor:"#f00",query:"test AND query",querySchema:Zr,queryLanguage:"json",defaultQuery:`{
	
}`,editable:!0,onSearch:Jr(),fields:[{field:"id",label:"ID",type:A.ID},{field:"name",label:"Name",type:A.STRING},{field:"notes",label:"Notes",type:A.TEXT},{field:"age",label:"Age",type:A.NUMBER},{field:"dob",label:"DOB",type:A.DATE},{field:"extras",label:"Extras",type:A.NONE},{field:"country",label:"Country",type:A.STRING,onSearch(e){return new Promise(r=>{setTimeout(()=>{r(Qn.list.filter(l=>Ke(l.name,e)||Ke(l.fullname,e)).map(l=>l.name))},1e3)})}}],filters:[{id:he(),field:"name",operator:E.IS,value:"Smeghead",pinned:!0,canPin:!1,canDisable:!1,required:!0,canEdit:!1,color:"lilac",icon:"mdi mdi-tray-full"},{id:he(),field:"name",operator:E.IS,value:"Smeghead"},{id:he(),field:"name",negate:!0,operator:E.IS,value:"Smeghead",label:"New filter"},{id:he(),query:JSON.stringify({query:"test"}),label:"Query filter"}]}};var ln,sn,on;Ae.parameters={...Ae.parameters,docs:{...(ln=Ae.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(on=(sn=Ae.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};const _a=["_SearchBar"];export{Ae as _SearchBar,_a as __namedExportsOrder,Qa as default};
