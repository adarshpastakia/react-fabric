"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[247],{"./node_modules/@codemirror/legacy-modes/mode/sas.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{sas:()=>sas});var words={},isDoubleOperatorSym={eq:"operator",lt:"operator",le:"operator",gt:"operator",ge:"operator",in:"operator",ne:"operator",or:"operator"},isDoubleOperatorChar=/(<=|>=|!=|<>)/,isSingleOperatorChar=/[=\(:\),{}.*<>+\-\/^\[\]]/;function define(style,string,context){if(context)for(var split=string.split(" "),i=0;i<split.length;i++)words[split[i]]={style,state:context}}define("def","stack pgm view source debug nesting nolist",["inDataStep"]),define("def","if while until for do do; end end; then else cancel",["inDataStep"]),define("def","label format _n_ _error_",["inDataStep"]),define("def","ALTER BUFNO BUFSIZE CNTLLEV COMPRESS DLDMGACTION ENCRYPT ENCRYPTKEY EXTENDOBSCOUNTER GENMAX GENNUM INDEX LABEL OBSBUF OUTREP PW PWREQ READ REPEMPTY REPLACE REUSE ROLE SORTEDBY SPILL TOBSNO TYPE WRITE FILECLOSE FIRSTOBS IN OBS POINTOBS WHERE WHEREUP IDXNAME IDXWHERE DROP KEEP RENAME",["inDataStep"]),define("def","filevar finfo finv fipname fipnamel fipstate first firstobs floor",["inDataStep"]),define("def","varfmt varinfmt varlabel varlen varname varnum varray varrayx vartype verify vformat vformatd vformatdx vformatn vformatnx vformatw vformatwx vformatx vinarray vinarrayx vinformat vinformatd vinformatdx vinformatn vinformatnx vinformatw vinformatwx vinformatx vlabel vlabelx vlength vlengthx vname vnamex vnferr vtype vtypex weekday",["inDataStep"]),define("def","zipfips zipname zipnamel zipstate",["inDataStep"]),define("def","put putc putn",["inDataStep"]),define("builtin","data run",["inDataStep"]),define("def","data",["inProc"]),define("def","%if %end %end; %else %else; %do %do; %then",["inMacro"]),define("builtin","proc run; quit; libname filename %macro %mend option options",["ALL"]),define("def","footnote title libname ods",["ALL"]),define("def","%let %put %global %sysfunc %eval ",["ALL"]),define("variable","&sysbuffr &syscc &syscharwidth &syscmd &sysdate &sysdate9 &sysday &sysdevic &sysdmg &sysdsn &sysencoding &sysenv &syserr &syserrortext &sysfilrc &syshostname &sysindex &sysinfo &sysjobid &syslast &syslckrc &syslibrc &syslogapplname &sysmacroname &sysmenv &sysmsg &sysncpu &sysodspath &sysparm &syspbuff &sysprocessid &sysprocessname &sysprocname &sysrc &sysscp &sysscpl &sysscpl &syssite &sysstartid &sysstartname &systcpiphostname &systime &sysuserid &sysver &sysvlong &sysvlong4 &syswarningtext",["ALL"]),define("def","source2 nosource2 page pageno pagesize",["ALL"]),define("def","_all_ _character_ _cmd_ _freq_ _i_ _infile_ _last_ _msg_ _null_ _numeric_ _temporary_ _type_ abort abs addr adjrsq airy alpha alter altlog altprint and arcos array arsin as atan attrc attrib attrn authserver autoexec awscontrol awsdef awsmenu awsmenumerge awstitle backward band base betainv between blocksize blshift bnot bor brshift bufno bufsize bxor by byerr byline byte calculated call cards cards4 catcache cbufno cdf ceil center cexist change chisq cinv class cleanup close cnonct cntllev coalesce codegen col collate collin column comamid comaux1 comaux2 comdef compbl compound compress config continue convert cos cosh cpuid create cross crosstab css curobs cv daccdb daccdbsl daccsl daccsyd dacctab dairy datalines datalines4 datejul datepart datetime day dbcslang dbcstype dclose ddfm ddm delete delimiter depdb depdbsl depsl depsyd deptab dequote descending descript design= device dflang dhms dif digamma dim dinfo display distinct dkricond dkrocond dlm dnum do dopen doptname doptnum dread drop dropnote dsname dsnferr echo else emaildlg emailid emailpw emailserver emailsys encrypt end endsas engine eof eov erf erfc error errorcheck errors exist exp fappend fclose fcol fdelete feedback fetch fetchobs fexist fget file fileclose fileexist filefmt filename fileref  fmterr fmtsearch fnonct fnote font fontalias  fopen foptname foptnum force formatted formchar formdelim formdlim forward fpoint fpos fput fread frewind frlen from fsep fuzz fwrite gaminv gamma getoption getvarc getvarn go goto group gwindow hbar hbound helpenv helploc hms honorappearance hosthelp hostprint hour hpct html hvar ibessel ibr id if index indexc indexw initcmd initstmt inner input inputc inputn inr insert int intck intnx into intrr invaliddata irr is jbessel join juldate keep kentb kurtosis label lag last lbound leave left length levels lgamma lib  library libref line linesize link list log log10 log2 logpdf logpmf logsdf lostcard lowcase lrecl ls macro macrogen maps mautosource max maxdec maxr mdy mean measures median memtype merge merror min minute missing missover mlogic mod mode model modify month mopen mort mprint mrecall msglevel msymtabmax mvarsize myy n nest netpv new news nmiss no nobatch nobs nocaps nocardimage nocenter nocharcode nocmdmac nocol nocum nodate nodbcs nodetails nodmr nodms nodmsbatch nodup nodupkey noduplicates noechoauto noequals noerrorabend noexitwindows nofullstimer noicon noimplmac noint nolist noloadlist nomiss nomlogic nomprint nomrecall nomsgcase nomstored nomultenvappl nonotes nonumber noobs noovp nopad nopercent noprint noprintinit normal norow norsasuser nosetinit  nosplash nosymbolgen note notes notitle notitles notsorted noverbose noxsync noxwait npv null number numkeys nummousekeys nway obs  on open     order ordinal otherwise out outer outp= output over ovp p(1 5 10 25 50 75 90 95 99) pad pad2  paired parm parmcards path pathdll pathname pdf peek peekc pfkey pmf point poisson poke position printer probbeta probbnml probchi probf probgam probhypr probit probnegb probnorm probsig probt procleave prt ps  pw pwreq qtr quote r ranbin rancau random ranexp rangam range ranks rannor ranpoi rantbl rantri ranuni rcorr read recfm register regr remote remove rename repeat repeated replace resolve retain return reuse reverse rewind right round rsquare rtf rtrace rtraceloc s s2 samploc sasautos sascontrol sasfrscr sasmsg sasmstore sasscript sasuser saving scan sdf second select selection separated seq serror set setcomm setot sign simple sin sinh siteinfo skewness skip sle sls sortedby sortpgm sortseq sortsize soundex  spedis splashlocation split spool sqrt start std stderr stdin stfips stimer stname stnamel stop stopover sub subgroup subpopn substr sum sumwgt symbol symbolgen symget symput sysget sysin sysleave sysmsg sysparm sysprint sysprintfont sysprod sysrc system t table tables tan tanh tapeclose tbufsize terminal test then timepart tinv  tnonct to today tol tooldef totper transformout translate trantab tranwrd trigamma trim trimn trunc truncover type unformatted uniform union until upcase update user usericon uss validate value var  weight when where while wincharset window work workinit workterm write wsum xsync xwait yearcutoff yes yyq  min max",["inDataStep","inProc"]),define("operator","and not ",["inDataStep","inProc"]);const sas={name:"sas",startState:function(){return{inDataStep:!1,inProc:!1,inMacro:!1,nextword:!1,continueString:null,continueComment:!1}},token:function(stream,state){return stream.eatSpace()?null:function tokenize(stream,state){var ch=stream.next();if("/"===ch&&stream.eat("*"))return state.continueComment=!0,"comment";if(!0===state.continueComment)return"*"===ch&&"/"===stream.peek()?(stream.next(),state.continueComment=!1):stream.skipTo("*")?(stream.skipTo("*"),stream.next(),stream.eat("/")&&(state.continueComment=!1)):stream.skipToEnd(),"comment";if("*"==ch&&stream.column()==stream.indentation())return stream.skipToEnd(),"comment";var word,doubleOperator=ch+stream.peek();if(!('"'!==ch&&"'"!==ch||state.continueString))return state.continueString=ch,"string";if(state.continueString)return state.continueString==ch?state.continueString=null:stream.skipTo(state.continueString)?(stream.next(),state.continueString=null):stream.skipToEnd(),"string";if(null!==state.continueString&&stream.eol())return stream.skipTo(state.continueString)||stream.skipToEnd(),"string";if(/[\d\.]/.test(ch))return"."===ch?stream.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"===ch?stream.match(/^[xX][0-9a-fA-F]+/)||stream.match(/^0[0-7]+/):stream.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(isDoubleOperatorChar.test(ch+stream.peek()))return stream.next(),"operator";if(isDoubleOperatorSym.hasOwnProperty(doubleOperator)){if(stream.next()," "===stream.peek())return isDoubleOperatorSym[doubleOperator.toLowerCase()]}else if(isSingleOperatorChar.test(ch))return"operator";if(null!=stream.match(/[%&;\w]+/,!1)){if(word=ch+stream.match(/[%&;\w]+/,!0),/&/.test(word))return"variable"}else word=ch;if(state.nextword)return stream.match(/[\w]+/),"."===stream.peek()&&stream.skipTo(" "),state.nextword=!1,"variableName.special";if(word=word.toLowerCase(),state.inDataStep){if("run;"===word||stream.match(/run\s;/))return state.inDataStep=!1,"builtin";if(word&&"."===stream.next())return/\w/.test(stream.peek())?"variableName.special":"variable";if(word&&words.hasOwnProperty(word)&&(-1!==words[word].state.indexOf("inDataStep")||-1!==words[word].state.indexOf("ALL"))){stream.start<stream.pos&&stream.backUp(stream.pos-stream.start);for(var i=0;i<word.length;++i)stream.next();return words[word].style}}if(state.inProc){if("run;"===word||"quit;"===word)return state.inProc=!1,"builtin";if(word&&words.hasOwnProperty(word)&&(-1!==words[word].state.indexOf("inProc")||-1!==words[word].state.indexOf("ALL")))return stream.match(/[\w]+/),words[word].style}return state.inMacro?"%mend"===word?(";"===stream.peek()&&stream.next(),state.inMacro=!1,"builtin"):word&&words.hasOwnProperty(word)&&(-1!==words[word].state.indexOf("inMacro")||-1!==words[word].state.indexOf("ALL"))?(stream.match(/[\w]+/),words[word].style):"atom":word&&words.hasOwnProperty(word)?(stream.backUp(1),stream.match(/[\w]+/),"data"===word&&!1===/=/.test(stream.peek())?(state.inDataStep=!0,state.nextword=!0,"builtin"):"proc"===word?(state.inProc=!0,state.nextword=!0,"builtin"):"%macro"===word?(state.inMacro=!0,state.nextword=!0,"builtin"):/title[1-9]/.test(word)?"def":"footnote"===word?(stream.eat(/[1-9]/),"def"):!0===state.inDataStep&&-1!==words[word].state.indexOf("inDataStep")||!0===state.inProc&&-1!==words[word].state.indexOf("inProc")||!0===state.inMacro&&-1!==words[word].state.indexOf("inMacro")||-1!==words[word].state.indexOf("ALL")?words[word].style:null):null}(stream,state)},languageData:{commentTokens:{block:{open:"/*",close:"*/"}}}}}}]);