import{n as e}from"./chunk.js";import{o as t}from"./vec3f64.js";import{r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Uniform.js";import{r as o}from"./NoParameters.js";import{n as s,t as c}from"./Float4BindUniform.js";import{n as l,t as u}from"./IntegerBindUniform.js";import{n as d,t as f}from"./Matrix4sPassUniform.js";var p,m=e((()=>{i(),p=class extends a{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}}}));function h(e){e.fragment.uniforms.add(new d(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),_(e)}function g(e){e.fragment.uniforms.add(new p(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),_(e)}function _(e){let{fragment:t}=e;t.uniforms.add(new c(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new l(`numCascades`,e=>e.shadowMap.numCascades)),t.code.add(n`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}var v=e((()=>{t(),s(),r(),u(),m(),f(),o()}));function y(e){e.fragment.code.add(n`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var b=e((()=>{v(),r()})),x,S=e((()=>{i(),x=class extends a{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}}}));export{h as a,b as i,S as n,v as o,y as r,g as s,x as t};