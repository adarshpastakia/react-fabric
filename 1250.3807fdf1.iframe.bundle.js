"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[1250],{"./node_modules/@codemirror/lang-json/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{json:()=>json,jsonLanguage:()=>jsonLanguage,jsonParseLinter:()=>jsonParseLinter});var dist=__webpack_require__("./node_modules/@lezer/lr/dist/index.js"),highlight_dist=__webpack_require__("./node_modules/@lezer/highlight/dist/index.js");const jsonHighlighting=(0,highlight_dist.pn)({String:highlight_dist._A.string,Number:highlight_dist._A.number,"True False":highlight_dist._A.bool,PropertyName:highlight_dist._A.propertyName,Null:highlight_dist._A.null,",":highlight_dist._A.separator,"[ ]":highlight_dist._A.squareBracket,"{ }":highlight_dist._A.brace}),parser=dist.U1.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[jsonHighlighting],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0});var language_dist=__webpack_require__("./node_modules/@codemirror/language/dist/index.js");const jsonParseLinter=()=>view=>{try{JSON.parse(view.state.doc.toString())}catch(e){if(!(e instanceof SyntaxError))throw e;const pos=function getErrorPosition(error,doc){let m;return(m=error.message.match(/at position (\d+)/))?Math.min(+m[1],doc.length):(m=error.message.match(/at line (\d+) column (\d+)/))?Math.min(doc.line(+m[1]).from+ +m[2]-1,doc.length):0}(e,view.state.doc);return[{from:pos,message:e.message,severity:"error",to:pos}]}return[]};const jsonLanguage=language_dist.bj.define({name:"json",parser:parser.configure({props:[language_dist.Oh.add({Object:(0,language_dist.mz)({except:/^\s*\}/}),Array:(0,language_dist.mz)({except:/^\s*\]/})}),language_dist.b_.add({"Object Array":language_dist.yd})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function json(){return new language_dist.Yy(jsonLanguage)}}}]);