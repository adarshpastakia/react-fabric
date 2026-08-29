import{n as e}from"./rolldown-runtime.js";import{l as t,o as n}from"./vec3f64.js";import{n as r,r as i,t as a}from"./glsl.js";import{r as o,t as s}from"./NoParameters.js";import{p as c}from"./ShaderOutput.js";import{n as l,t as u}from"./FloatBindUniform.js";import{n as d,t as f}from"./Texture2DBindUniform.js";import{r as p,t as m}from"./ForwardLinearDepth.glsl.js";import{a as h,c as g,i as _,n as v,r as y,s as b,t as x}from"./Texture2DShadowBindUniform.js";function S(e,t){let n=c(t.output)&&t.receiveShadows;n&&p(e,!0),e.vertex.code.add(i`
    void forwardLinearDepthToReadShadowMap() { ${r(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}function C(){return(C=e((()=>{m(),a()})))()}function w(e,t){t.receiveShadows&&e.fragment.include(h),E(e,t)}function T(e,t){t.receiveShadows&&e.fragment.include(g),E(e,t)}function E(e,t){e.fragment.uniforms.add(new l(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{hasShadowHighlights:n,receiveShadows:a,spherical:o}=t;e.include(S,t),a&&D(e.fragment,n),e.fragment.code.add(i`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${a?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:r(o,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function D(e,t){k(e,t),O(e)}function O(e){e.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}function k(e,t){e.include(_),e.uniforms.add(A()),t&&e.uniforms.add(new f(`shadowHighlight`,({shadowHighlight:e})=>e?.getTexture())),e.code.add(i`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${r(t,`float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}function A(){return new x(`shadowMap`,({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))}var j;function M(){return(M=e((()=>{n(),C(),b(),y(),u(),a(),d(),v(),o(),j=class extends s{constructor(){super(...arguments),this.origin=t()}}})))()}export{j as a,k as i,M as n,T as r,w as t};