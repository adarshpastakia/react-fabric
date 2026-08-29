import{n as e}from"./rolldown-runtime.js";import{i as t,n}from"./mat3f64.js";import{o as r,u as i}from"./vec2f64.js";import{r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Float2DrawUniform.js";import{n as l,t as u}from"./Texture2DPassUniform.js";import{n as d,t as f}from"./Texture2DDrawUniform.js";import{n as p,t as m}from"./Matrix3PassUniform.js";import{n as h,t as g}from"./Float2PassUniform.js";import{a as _,o as v}from"./Emissions.glsl.js";function y(e,t){return x(e,t)}function b(e,t){return x(e,t)}function x(e,n){let r=e.fragment,{hasVertexTangents:o,doubleSidedMode:s,hasNormalTexture:l,textureCoordinateType:d,bindType:m,hasNormalTextureTransform:h}=n;o?(e.attributes.add(`tangent`,`vec4`),e.varyings.add(`vTangent`,`vec4`),s===2?r.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),l&&d!==0&&(e.include(v,n),r.uniforms.add(m===1?new u(`normalTexture`,e=>e.textureNormal):new f(`normalTexture`,e=>e.textureNormal)),h&&(r.uniforms.add(m===1?new g(`scale`,e=>e.scale??i):new c(`scale`,e=>e.scale??i)),r.uniforms.add(new p(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??t))),r.code.add(a`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),h&&r.code.add(a`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(a`return tangentSpace * rawNormal;
}`))}function S(){return(S=e((()=>{n(),r(),_(),s(),h(),o(),m(),d(),l()})))()}export{S as n,y as r,b as t};