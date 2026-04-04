import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{r,t as i}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";function a(e){i(e),e.vertex.code.add(t`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(t`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}var o=e((()=>{r(),n()}));export{a as n,o as t};