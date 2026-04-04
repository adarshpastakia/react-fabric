import{n as e}from"./chunk.js";import{n as t,t as n}from"./mat4f64.js";import{C as r,S as i,w as a}from"./mat4.js";import{r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./Matrix4BindUniform.js";import{n as u,t as d}from"./ReadDepth.glsl.js";import{n as f,t as p}from"./CameraSpace.glsl.js";import{a as m,o as h}from"./Texture2DShadowBindUniform.js";function g(e){e.include(m),_(e)}function _(e){e.fragment.include(d),e.include(p),e.fragment.uniforms.add(new c(`inverseViewMatrix`,({camera:e})=>i(v,r(v,e.viewMatrix,e.center)))).code.add(o`vec3 calculateUVZShadowAndPixelPosFromDepth(
in vec2 _uv,
ivec2 shadowMapSize,
in sampler2D _depthMap,
out vec4 currentPixelPos
) {
float depth = depthFromTexture(_depthMap, _uv);
if (depth >= 1.0 || depth <= 0.0) {
return invalidShadowmapUVZ;
}
float currentPixelDepth = linearizeDepth(depth);
currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
float linearDepth = -currentPixelDepth;
return calculateUVZShadow(worldSpacePos.xyz, linearDepth, shadowMapSize);
}
vec3 calculateUVZShadowFromDepth(
in vec2 _uv,
ivec2 shadowMapSize,
in sampler2D _depthMap
) {
vec4 currentPixelPos;
return calculateUVZShadowAndPixelPosFromDepth(_uv, shadowMapSize, _depthMap, currentPixelPos);
}`)}var v,y=e((()=>{a(),t(),u(),h(),f(),s(),l(),v=n()}));export{g as n,y as t};