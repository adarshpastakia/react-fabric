"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[4372],{"./node_modules/@codemirror/legacy-modes/mode/verilog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function mkVerilog(parserConfig){var statementIndentUnit=parserConfig.statementIndentUnit,dontAlignCalls=parserConfig.dontAlignCalls,noIndentKeywords=parserConfig.noIndentKeywords||[],multiLineStrings=parserConfig.multiLineStrings,hooks=parserConfig.hooks||{};function words(str){for(var obj={},words=str.split(" "),i=0;i<words.length;++i)obj[words[i]]=!0;return obj}var curPunc,curKeyword,keywords=words("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),isOperatorChar=/[\+\-\*\/!~&|^%=?:]/,isBracketChar=/[\[\]{}()]/,unsignedNumber=/\d[0-9_]*/,decimalLiteral=/\d*\s*'s?d\s*\d[0-9_]*/i,binaryLiteral=/\d*\s*'s?b\s*[xz01][xz01_]*/i,octLiteral=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,hexLiteral=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,realLiteral=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,closingBracketOrWord=/^((\w+)|[)}\]])/,closingBracket=/[)}\]]/,blockKeywords=words("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),openClose={};for(var keyword in blockKeywords)openClose[keyword]="end"+keyword;for(var i in openClose.begin="end",openClose.casex="endcase",openClose.casez="endcase",openClose.do="while",openClose.fork="join;join_any;join_none",openClose.covergroup="endgroup",noIndentKeywords){keyword=noIndentKeywords[i];openClose[keyword]&&(openClose[keyword]=void 0)}var statementKeywords=words("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function tokenBase(stream,state){var style,ch=stream.peek();if(hooks[ch]&&0!=(style=hooks[ch](stream,state)))return style;if(hooks.tokenBase&&0!=(style=hooks.tokenBase(stream,state)))return style;if(/[,;:\.]/.test(ch))return curPunc=stream.next(),null;if(isBracketChar.test(ch))return curPunc=stream.next(),"bracket";if("`"==ch)return stream.next(),stream.eatWhile(/[\w\$_]/)?"def":null;if("$"==ch)return stream.next(),stream.eatWhile(/[\w\$_]/)?"meta":null;if("#"==ch)return stream.next(),stream.eatWhile(/[\d_.]/),"def";if('"'==ch)return stream.next(),state.tokenize=function tokenString(quote){return function(stream,state){for(var next,escaped=!1,end=!1;null!=(next=stream.next());){if(next==quote&&!escaped){end=!0;break}escaped=!escaped&&"\\"==next}return(end||!escaped&&!multiLineStrings)&&(state.tokenize=tokenBase),"string"}}(ch),state.tokenize(stream,state);if("/"==ch){if(stream.next(),stream.eat("*"))return state.tokenize=tokenComment,tokenComment(stream,state);if(stream.eat("/"))return stream.skipToEnd(),"comment";stream.backUp(1)}if(stream.match(realLiteral)||stream.match(decimalLiteral)||stream.match(binaryLiteral)||stream.match(octLiteral)||stream.match(hexLiteral)||stream.match(unsignedNumber)||stream.match(realLiteral))return"number";if(stream.eatWhile(isOperatorChar))return"meta";if(stream.eatWhile(/[\w\$_]/)){var cur=stream.current();return keywords[cur]?(openClose[cur]&&(curPunc="newblock"),statementKeywords[cur]&&(curPunc="newstatement"),curKeyword=cur,"keyword"):"variable"}return stream.next(),null}function tokenComment(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("/"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="*"==ch}return"comment"}function Context(indented,column,type,align,prev){this.indented=indented,this.column=column,this.type=type,this.align=align,this.prev=prev}function pushContext(state,col,type){var c=new Context(state.indented,col,type,null,state.context);return state.context=c}function popContext(state){var t=state.context.type;return")"!=t&&"]"!=t&&"}"!=t||(state.indented=state.context.indented),state.context=state.context.prev}function isClosing(text,contextClosing){if(text==contextClosing)return!0;var closingKeywords=contextClosing.split(";");for(var i in closingKeywords)if(text==closingKeywords[i])return!0;return!1}return{name:"verilog",startState:function(indentUnit){var state={tokenize:null,context:new Context(-indentUnit,0,"top",!1),indented:0,startOfLine:!0};return hooks.startState&&hooks.startState(state),state},token:function(stream,state){var style,ctx=state.context;if((stream.sol()&&(null==ctx.align&&(ctx.align=!1),state.indented=stream.indentation(),state.startOfLine=!0),hooks.token)&&void 0!==(style=hooks.token(stream,state)))return style;if(stream.eatSpace())return null;if(curPunc=null,curKeyword=null,"comment"==(style=(state.tokenize||tokenBase)(stream,state))||"meta"==style||"variable"==style)return style;if(null==ctx.align&&(ctx.align=!0),curPunc==ctx.type)popContext(state);else if(";"==curPunc&&"statement"==ctx.type||ctx.type&&isClosing(curKeyword,ctx.type))for(ctx=popContext(state);ctx&&"statement"==ctx.type;)ctx=popContext(state);else if("{"==curPunc)pushContext(state,stream.column(),"}");else if("["==curPunc)pushContext(state,stream.column(),"]");else if("("==curPunc)pushContext(state,stream.column(),")");else if(ctx&&"endcase"==ctx.type&&":"==curPunc)pushContext(state,stream.column(),"statement");else if("newstatement"==curPunc)pushContext(state,stream.column(),"statement");else if("newblock"==curPunc)if("function"!=curKeyword||!ctx||"statement"!=ctx.type&&"endgroup"!=ctx.type)if("task"==curKeyword&&ctx&&"statement"==ctx.type);else{var close=openClose[curKeyword];pushContext(state,stream.column(),close)}else;return state.startOfLine=!1,style},indent:function(state,textAfter,cx){if(state.tokenize!=tokenBase&&null!=state.tokenize)return null;if(hooks.indent){var fromHook=hooks.indent(state);if(fromHook>=0)return fromHook}var ctx=state.context,firstChar=textAfter&&textAfter.charAt(0);"statement"==ctx.type&&"}"==firstChar&&(ctx=ctx.prev);var closing=!1,possibleClosing=textAfter.match(closingBracketOrWord);return possibleClosing&&(closing=isClosing(possibleClosing[0],ctx.type)),"statement"==ctx.type?ctx.indented+("{"==firstChar?0:statementIndentUnit||cx.unit):closingBracket.test(ctx.type)&&ctx.align&&!dontAlignCalls?ctx.column+(closing?0:1):")"!=ctx.type||closing?ctx.indented+(closing?0:cx.unit):ctx.indented+(statementIndentUnit||cx.unit)},languageData:{indentOnInput:function buildElectricInputRegEx(){var allClosings=[];for(var i in openClose)if(openClose[i]){var closings=openClose[i].split(";");for(var j in closings)allClosings.push(closings[j])}return new RegExp("[{}()\\[\\]]|("+allClosings.join("|")+")$")}(),commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{tlv:()=>tlv,verilog:()=>verilog});const verilog=mkVerilog({});var tlvIdentifierStyle={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"contentSeparator","/":"property","/-":"property","@":"variableName.special","@-":"variableName.special","@++":"variableName.special","@+=":"variableName.special","@+=-":"variableName.special","@--":"variableName.special","@-=":"variableName.special","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable","**":"variable","\\":"keyword",'"':"comment"},tlvScopePrefixChars={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},tlvIdentMatch=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,tlvLineIndentationMatch=/^[! ] */,tlvCommentMatch=/^\/[\/\*]/;const tlv=mkVerilog({hooks:{electricInput:!1,token:function(stream,state){var style=void 0;if(stream.sol()&&!state.tlvInBlockComment){"\\"==stream.peek()&&(style="def",stream.skipToEnd(),stream.string.match(/\\SV/)?state.tlvCodeActive=!1:stream.string.match(/\\TLV/)&&(state.tlvCodeActive=!0)),state.tlvCodeActive&&0==stream.pos&&0==state.indented&&(match=stream.match(tlvLineIndentationMatch,!1))&&(state.indented=match[0].length);var indented=state.indented,depth=indented/3;if(depth<=state.tlvIndentationStyle.length){var blankline=stream.string.length==indented,chPos=3*depth;if(chPos<stream.string.length){var bodyString=stream.string.slice(chPos),ch=bodyString[0];tlvScopePrefixChars[ch]&&(match=bodyString.match(tlvIdentMatch))&&tlvIdentifierStyle[match[1]]&&(indented+=3,"\\"==ch&&chPos>0||(state.tlvIndentationStyle[depth]=tlvScopePrefixChars[ch],depth++))}if(!blankline)for(;state.tlvIndentationStyle.length>depth;)state.tlvIndentationStyle.pop()}state.tlvNextIndent=indented}if(state.tlvCodeActive){var match;if(void 0!==style);else if(state.tlvInBlockComment)stream.match(/^.*?\*\//)?state.tlvInBlockComment=!1:stream.skipToEnd(),style="comment";else if((match=stream.match(tlvCommentMatch))&&!state.tlvInBlockComment)"//"==match[0]?stream.skipToEnd():state.tlvInBlockComment=!0,style="comment";else if(match=stream.match(tlvIdentMatch)){var prefix=match[1],mnemonic=match[2];tlvIdentifierStyle.hasOwnProperty(prefix)&&(mnemonic.length>0||stream.eol())?style=tlvIdentifierStyle[prefix]:stream.backUp(stream.current().length-1)}else stream.match(/^\t+/)?style="invalid":stream.match(/^[\[\]{}\(\);\:]+/)?style="meta":(match=stream.match(/^[mM]4([\+_])?[\w\d_]*/))?style="+"==match[1]?"keyword.special":"keyword":stream.match(/^ +/)?stream.eol()&&(style="error"):stream.match(/^[\w\d_]+/)?style="number":stream.next()}else stream.match(/^[mM]4([\w\d_]*)/)&&(style="keyword");return style},indent:function(state){return 1==state.tlvCodeActive?state.tlvNextIndent:-1},startState:function(state){state.tlvIndentationStyle=[],state.tlvCodeActive=!0,state.tlvNextIndent=-1,state.tlvInBlockComment=!1}}})}}]);