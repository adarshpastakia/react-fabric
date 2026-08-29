import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";function i(e){e.varyings.add(`linearDepth`,`float`,{invariant:!0})}function a(e,r){r&&i(e),e.vertex.code.add(n`
    void forwardLinearDepth(float _linearDepth) { ${t(r,`linearDepth = _linearDepth;`)} }
  `)}function o(){return(o=e((()=>{r()})))()}export{i as n,a as r,o as t};