import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{a as r,s as i}from"./ShaderOutput.js";import{n as a,r as o,t as s}from"./glsl.js";import{r as c,t as l}from"./NoParameters.js";import{n as u,t as d}from"./FloatBindUniform.js";import{a as f,s as p}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{a as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./Texture2DShadowBindUniform.js";function x(e,t){let n=i(t.output)&&t.receiveShadows;n&&p(e,!0),e.vertex.code.add(o`
    void forwardLinearDepthToReadShadowMap() { ${a(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var S=e((()=>{f(),r(),s()}));function C(e,t){t.receiveShadows&&e.include(m),T(e,t)}function w(e,t){t.receiveShadows&&e.include(y),T(e,t)}function T(e,t){e.fragment.uniforms.add(new u(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{receiveShadows:n,spherical:r}=t;e.include(x,t),n&&E(e),e.fragment.code.add(o`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${n?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:a(r,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function E(e){e.include(v),e.fragment.uniforms.add(new b(`shadowMap`,({shadowMap:e})=>e.depthTexture)).code.add(o`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}var D,O=e((()=>{n(),S(),_(),h(),d(),s(),g(),c(),D=class extends l{constructor(){super(...arguments),this.origin=t()}}}));export{C as i,O as n,D as r,w as t};