import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{m as n,r}from"./esm.js";import{t as i}from"./jsx-runtime.js";import{C as a,E as o,T as s,_ as c,a as l,c as u,f as d,g as f,h as p,i as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S,v as C,w,x as T,y as E}from"./emoticon.js";var D;function O(){return(O=e((()=>{m(),g(),D={...x.reduce((e,t)=>(t.emoticons.forEach(n=>e[n]=t.emoji),t.tags.forEach(n=>e[n]=t.emoji),e),{}),...Object.entries(y).reduce((e,[t,n])=>(n.forEach(n=>e[n]=t),e),{})}})))()}function k({text:e,className:t}){let r=(0,A.useCallback)(e=>{e.dataset.show=`true`,setTimeout(()=>e.dataset.show=`false`,1e3)},[]),i=(0,A.useMemo)(()=>new a({html:!0,linkify:!0,typographer:!0,highlight:(e,t)=>{let n=e;if(t&&s.getLanguage(t))try{n=s.highlight(e,{language:t}).value}catch(e){console.error(`Syntax highlighting error:`,e)}return`<pre class="hljs language-${t}"><code>${n}</code><button class="hljs-copy">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg></button>
      <div class="hljs-copy-success">Copied!</div></pre>`}}).use(u).use(_).use(d).use(T).use(S).use(c).use(v).use(E,`tip`,{render:function(e,t){let n=e[t].info.trim().match(/^tip\s+(.*)$/);return e[t].nesting===1?`<div class="markdown-alert markdown-alert-${n?.[1]??`tip`}">\n`:`</div>
`}}).use(p,{defs:D}),[]),o=(0,A.useMemo)(()=>i.render(e),[i,e]);return(0,j.jsx)(`div`,{role:`none`,className:n(`fabric-mdx`,t),dangerouslySetInnerHTML:{__html:o},onClick:e=>{let t=e.target?.closest(`.hljs-copy`);t&&navigator.clipboard.writeText(t.previousElementSibling.innerText).then(()=>r(t.nextElementSibling))}})}var A,j;function M(){return(M=e((()=>{r(),o(),w(),C(),f(),h(),b(),l(),A=t(),O(),j=i(),k.__docgenInfo={description:``,methods:[],displayName:`Markdown`,props:{text:{required:!0,tsType:{name:`string`},description:``}},composes:[`CssProp`]}})))()}function N(){return(N=e((()=>{M()})))()}var P;function F(){return(F=e((()=>{P=`---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
i18n with plurals support and easy syntax.

You will like those projects!
---

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with \`+\`, \`-\`, or \`*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`tsx
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

With a reference later in the document defining the URL location:


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum: :red_apple:
>
> Shortcuts (emoticons): :-) :-( >:-( ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

:::tip warning
_here be dragons_
:::

:::tip
_here be dragons_
:::tip danger
_here be dragons_
:::
`})))()}var I,L,R,z;function B(){return(B=e((()=>{N(),F(),I=i(),L={component:k,title:`@markdown/Markdown`,parameters:{layout:`centered`,controls:{exclude:`children`,matchers:{date:/value|min|max/}}}},R={render:e=>(0,I.jsx)(k,{text:P})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Markdown text={md} />;
  }
}`,...R.parameters?.docs?.source}}},z=[`_Markdown`]})))()}B();export{R as _Markdown,z as __namedExportsOrder,L as default};