import{n as e}from"./rolldown-runtime.js";import{O as t,x as n}from"./vec2.js";import{o as r,s as i}from"./vec2f64.js";import{r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Float2BindUniform.js";function l(e){e.uniforms.add(new c(`zProjectionMap`,e=>u(e.camera))),e.code.add(a`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(a`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),e.code.add(a`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(a`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function u(e){let n=e.projectionMatrix;return t(d,n[14],n[10])}var d;function f(){return(f=e((()=>{n(),r(),s(),o(),d=i()})))()}export{u as n,f as r,l as t};