import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{m as i}from"./ShaderOutput.js";import{n as a,t as o}from"./Float2BindUniform.js";import{r as s,t as c}from"./ForwardLinearDepth.glsl.js";import{n as l,r as u}from"./VertexPosition.glsl.js";function d(e){e.vertex.uniforms.add(new o(`nearFar`,e=>e.camera.nearFar))}function f(e){e.vertex.code.add(n`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function p(e,r){let{vertex:a}=e,o=i(r.output);o&&(e.include(l,r),s(e,!0),d(e),f(e)),a.code.add(n`
    void forwardLinearDepthToWriteShadowMap() {
      ${t(o,`forwardLinearDepth(calculateLinearDepth(nearFar, vPosition_view.z));`)}
    }
  `)}function m(){return(m=e((()=>{c(),u(),a(),r()})))()}export{p as i,d as n,m as r,f as t};