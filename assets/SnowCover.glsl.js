import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{i,r as a}from"./Emissions.glsl.js";import{n as o,t as s}from"./Float3DrawUniform.js";import{n as c,t as l}from"./Float3PassUniform.js";import{n as u,t as d}from"./Texture2DDrawUniform.js";import{n as f,t as p}from"./Texture2DPassUniform.js";import{r as m}from"./NoParameters.js";import{n as h,t as g}from"./FloatBindUniform.js";import{n as _}from"./pbrUtils.js";function v(e,r){let a=r.pbrMode,o=e.fragment;if(a!==2&&a!==0&&a!==1)return void o.code.add(n`void applyPBRFactors() {}`);if(a===0)return void o.code.add(n`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(a===2)return void o.code.add(n`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:c,hasMetallicRoughnessTextureTransform:u,hasOcclusionTexture:f,hasOcclusionTextureTransform:m,bindType:h}=r;(c||f)&&e.include(i,r),o.code.add(n`vec3 mrr;
float occlusion;`),c&&o.uniforms.add(h===1?new p(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new d(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),f&&o.uniforms.add(h===1?new p(`texOcclusion`,e=>e.textureOcclusion):new d(`texOcclusion`,e=>e.textureOcclusion)),o.uniforms.add(h===1?new l(`mrrFactors`,e=>e.mrrFactors):new s(`mrrFactors`,e=>e.mrrFactors)),o.code.add(n`
    ${t(c,n`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${t(f,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${f?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${t(c,`applyMetallicRoughness(${u?`metallicRoughnessUV`:`vuv0`});`)}
      ${t(f,`applyOcclusion(${m?`occlusionUV`:`vuv0`});`)}
    }
  `)}var y=e((()=>{a(),o(),c(),r(),u(),f(),_(),m()}));function b(e,t){t.snowCover&&(e.uniforms.add(new h(`snowCover`,e=>e.snowCover)).code.add(n`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(n`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}var x=e((()=>{g(),r()}));export{v as i,x as n,y as r,b as t};