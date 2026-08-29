import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{r as i}from"./NoParameters.js";import{n as a,t as o}from"./Texture2DPassUniform.js";import{n as s,t as c}from"./Texture2DDrawUniform.js";import{n as l,t as u}from"./Float3DrawUniform.js";import{n as d,t as f}from"./Float3PassUniform.js";import{n as p,t as m}from"./FloatBindUniform.js";import{a as h,o as g}from"./Emissions.glsl.js";import{n as _}from"./pbrUtils.js";function v(e,r){let i=r.pbrMode,a=e.fragment;if(i!==2&&i!==0&&i!==1)return void a.code.add(n`void applyPBRFactors() {}`);if(i===0)return void a.code.add(n`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(i===2)return void a.code.add(n`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:s,hasMetallicRoughnessTextureTransform:l,hasOcclusionTexture:d,hasOcclusionTextureTransform:p,bindType:m}=r;(s||d)&&e.include(g,r),a.code.add(n`vec3 mrr;
float occlusion;`),s&&a.uniforms.add(m===1?new o(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new c(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),d&&a.uniforms.add(m===1?new o(`texOcclusion`,e=>e.textureOcclusion):new c(`texOcclusion`,e=>e.textureOcclusion)),a.uniforms.add(m===1?new f(`mrrFactors`,e=>e.mrrFactors):new u(`mrrFactors`,e=>e.mrrFactors)),a.code.add(n`
    ${t(s,n`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${t(d,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${d?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${t(s,`applyMetallicRoughness(${l?`metallicRoughnessUV`:`vuv0`});`)}
      ${t(d,`applyOcclusion(${p?`occlusionUV`:`vuv0`});`)}
    }
  `)}function y(){return(y=e((()=>{h(),l(),d(),r(),s(),a(),_(),i()})))()}function b(e,t){t.snowCover&&(e.uniforms.add(new p(`snowCover`,e=>e.snowCover)).code.add(n`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(n`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function x(){return(x=e((()=>{m(),r()})))()}export{v as i,x as n,y as r,b as t};