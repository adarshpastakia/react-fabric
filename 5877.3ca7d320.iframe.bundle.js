"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[5877],{"./node_modules/@codemirror/legacy-modes/mode/mscgen.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function mkParser(lang){return{name:"mscgen",startState:startStateFn,copyState:copyStateFn,token:(pConfig=lang,function(pStream,pState){if(pStream.match(wordRegexp(pConfig.brackets),!0,!0))return"bracket";if(!pState.inComment){if(pStream.match(/\/\*[^\*\/]*/,!0,!0))return pState.inComment=!0,"comment";if(pStream.match(wordRegexp(pConfig.singlecomment),!0,!0))return pStream.skipToEnd(),"comment"}if(pState.inComment)return pStream.match(/[^\*\/]*\*\//,!0,!0)?pState.inComment=!1:pStream.skipToEnd(),"comment";if(!pState.inString&&pStream.match(/\"(\\\"|[^\"])*/,!0,!0))return pState.inString=!0,"string";if(pState.inString)return pStream.match(/[^\"]*\"/,!0,!0)?pState.inString=!1:pStream.skipToEnd(),"string";if(pConfig.keywords&&pStream.match(wordRegexpBoundary(pConfig.keywords),!0,!0))return"keyword";if(pStream.match(wordRegexpBoundary(pConfig.options),!0,!0))return"keyword";if(pStream.match(wordRegexpBoundary(pConfig.arcsWords),!0,!0))return"keyword";if(pStream.match(wordRegexp(pConfig.arcsOthers),!0,!0))return"keyword";if(pConfig.operators&&pStream.match(wordRegexp(pConfig.operators),!0,!0))return"operator";if(pConfig.constants&&pStream.match(wordRegexp(pConfig.constants),!0,!0))return"variable";if(!pConfig.inAttributeList&&pConfig.attributes&&pStream.match("[",!0,!0))return pConfig.inAttributeList=!0,"bracket";if(pConfig.inAttributeList){if(null!==pConfig.attributes&&pStream.match(wordRegexpBoundary(pConfig.attributes),!0,!0))return"attribute";if(pStream.match("]",!0,!0))return pConfig.inAttributeList=!1,"bracket"}return pStream.next(),null}),languageData:{commentTokens:{line:"#",block:{open:"/*",close:"*/"}}}};var pConfig}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{mscgen:()=>mscgen,msgenny:()=>msgenny,xu:()=>xu});const mscgen=mkParser({keywords:["msc"],options:["hscale","width","arcgradient","wordwraparcs"],constants:["true","false","on","off"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}),msgenny=mkParser({keywords:null,options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:null,brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}),xu=mkParser({keywords:["msc","xu"],options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip","title","deactivate","activate","activation"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]});function wordRegexpBoundary(pWords){return new RegExp("^\\b("+pWords.join("|")+")\\b","i")}function wordRegexp(pWords){return new RegExp("^(?:"+pWords.join("|")+")","i")}function startStateFn(){return{inComment:!1,inString:!1,inAttributeList:!1,inScript:!1}}function copyStateFn(pState){return{inComment:pState.inComment,inString:pState.inString,inAttributeList:pState.inAttributeList,inScript:pState.inScript}}}}]);