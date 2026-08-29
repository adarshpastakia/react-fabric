import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ScreenSpacePass.glsl.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./Texture2DBindUniform.js";import{i as l,n as u}from"./ReadShadowMap.glsl.js";import{n as d,t as f}from"./calculateUVZShadowFromDepth.glsl.js";function p(e){let n=new a,{fragment:i}=n;n.include(r),n.include(d),i.include(l,!1),i.constants.add(`sampleValue`,`float`,h);let o=e.index===1?`vec2`:`float`;return n.outputs.add(`sampleCount`,o),i.uniforms.add(new c(`depthMap`,e=>e.depth?.attachment)).main.add(t`
    sampleCount = ${o}(0.0);

    vec3 uvzShadow = calculateUVZShadowFromDepth(uv, textureSize(shadowMap,0), depthMap);
    // The shadow map sampler returns a value between 0 and 1, we take the midpoint as we count discrete samples
    bool shadow = readShadowMaps(uvzShadow) > 0.5;
    if (shadow) {
      sampleCount = ${o}(sampleValue); // Add 1 to the sample count
    }
  `),n}var m,h,g;function _(){return(_=e((()=>{i(),f(),u(),n(),s(),o(),m=255,h=1/255,g=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastMaxSamples:255,build:p},Symbol.toStringTag,{value:`Module`}))})))()}export{m as i,_ as n,p as r,g as t};