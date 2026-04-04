import{n as e}from"./chunk.js";import{a as t,l as n}from"./ShaderOutput.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./Float2BindUniform.js";import{n as c,r as l}from"./VertexPosition.glsl.js";function u(e){e.varyings.add(`linearDepth`,`float`,{invariant:!0})}function d(e,t){t&&u(e),e.vertex.code.add(i`
    void forwardLinearDepth(float _linearDepth) { ${r(t,`linearDepth = _linearDepth;`)} }
  `)}var f=e((()=>{a()}));function p(e){e.vertex.uniforms.add(new s(`nearFar`,e=>e.camera.nearFar))}function m(e){e.vertex.code.add(i`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function h(e,t){let{vertex:a}=e,o=n(t.output);o&&(e.include(c,t),d(e,!0),p(e),m(e)),a.code.add(i`
    void forwardLinearDepthToWriteShadowMap() {
      ${r(o,`forwardLinearDepth(calculateLinearDepth(nearFar, vPosition_view.z));`)}
    }
  `)}var g=e((()=>{f(),t(),l(),o(),a()}));export{f as a,h as i,p as n,u as o,g as r,d as s,m as t};