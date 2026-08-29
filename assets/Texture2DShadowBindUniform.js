import{n as e}from"./rolldown-runtime.js";import{l as t,o as n}from"./vec3f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./Uniform.js";import{r as s,t as c}from"./NoParameters.js";import{n as l,t as u}from"./Float4BindUniform.js";import{n as d,t as f}from"./IntegerBindUniform.js";import{n as p,t as m}from"./Matrix4sPassUniform.js";var h;function g(){return(g=e((()=>{a(),h=class extends o{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}}})))()}function _(e){e.uniforms.add(new p(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(y)}function v(e){e.uniforms.add(new h(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(y)}function y(e){e.uniforms.add(new u(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new d(`numCascades`,e=>e.shadowMap.numCascades)),e.code.add(x)}var b,x;function S(){return(S=e((()=>{n(),l(),i(),f(),g(),m(),s(),b=class extends c{constructor(){super(...arguments),this.origin=t()}},x=r`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`})))()}function C(e){e.code.add(r`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}function w(){return(w=e((()=>{i()})))()}var T;function E(){return(E=e((()=>{a(),T=class extends o{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}}})))()}export{_ as a,v as c,C as i,E as n,b as o,w as r,S as s,T as t};