import{j as t,aR as m}from"./iframe-wCO-hNtP.js";import{f as i}from"./index4.js";import{J as s}from"./List.js";import"./index2.js";const p={component:s,title:"@data/JsonViewer",parameters:{controls:{exclude:"json"}},decorators:[e=>t.jsx("div",{className:"max-w-2xl max-h-96 overflow-auto p-4",children:t.jsx(e,{})})]},u={a:1,b:{},c:[],d:"test",e:{a:2,b:3,c:4},f:[1,2,3],f2:[{a:2,b:3},{a:2,b:3},{a:2,b:3}],g:void 0,h:33.45,i:"+99.18",j:198267345,boolean:{_label_:!0,_score_:75.69},date:"2020-03-04T12:48:00.000",time:"12:48:00.000",temp:{_label_:"Any label",_score_:45.69},lipsum:i.lorem.paragraphs(4)},r={render:e=>t.jsx(s,{...e,json:u,filters:!0}),args:{copy:!0,labeler(e){return e==="a"?"Property A":e},formatter(e,l){if(e==="j")return m.number(l)}}};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <JsonViewer {...args} json={json} filters />;
  },
  args: {
    copy: true,
    labeler(path) {
      if (path === "a") return "Property A";
      return path;
    },
    formatter(path, value) {
      if (path === "j") return Format.number(value);
    }
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["_JsonViewer"],j=Object.freeze(Object.defineProperty({__proto__:null,_JsonViewer:r,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{j as J,r as _};
