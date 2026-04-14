import{n as e,r as t}from"./chunk.js";import{R as n,nt as r}from"./ResizeObserver.es.js";import{t as i}from"./jsx-runtime.js";import{r as a,t as o}from"./dist28.js";import{c as s,t as c}from"./src4.js";var l=t({_JsonViewer:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=e((()=>{o(),n(),c(),u=i(),d={component:s,title:`@data/JsonViewer`,parameters:{controls:{exclude:`json`}},decorators:[e=>(0,u.jsx)(`div`,{className:`max-w-2xl max-h-96 overflow-auto p-4`,children:(0,u.jsx)(e,{})})]},f={a:1,b:{},c:[],d:`test`,e:{a:2,b:3,c:4},f:[1,2,3],f2:[{a:2,b:3},{a:2,b:3},{a:2,b:3}],g:void 0,h:33.45,i:`+99.18`,j:198267345,boolean:{_label_:!0,_score_:75.69},date:`2020-03-04T12:48:00.000`,time:`12:48:00.000`,temp:{_label_:`Any label`,_score_:45.69},lipsum:a.lorem.paragraphs(4)},p={render:e=>(0,u.jsx)(s,{...e,json:f,filters:!0}),args:{copy:!0,labeler(e){return e===`a`?`Property A`:e},formatter(e,t){if(e===`j`)return r.number(t)}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`_JsonViewer`]}));h();export{p as _JsonViewer,m as __namedExportsOrder,d as default,h as n,l as t};