import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{E as r,P as i}from"./vec3.js";import{r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Float3PassUniform.js";function l(e){e.vertex.code.add(a`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(a`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`),e.vertex.code.add(a`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`),e.vertex.code.add(a`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function u(e){e.uniforms.add(new c(`screenSizePerspective`,e=>f(e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize)))}function d(e){e.uniforms.add(new c(`screenSizePerspectiveAlignment`,e=>f(e.screenSizePerspectiveAlignment||e.screenSizePerspective,e.screenSizePerspectiveAlignment?null:e.screenSizePerspectiveMinPixelReferenceSize)))}function f(e,t){let n=t!=null&&e!=null?Math.min(e.minPixelSize/t,1):0;return e?i(p,e.divisor,e.offset,n):i(p,0,0,0)}var p,m=e((()=>{r(),n(),s(),o(),p=t()}));export{u as i,m as n,l as r,d as t};