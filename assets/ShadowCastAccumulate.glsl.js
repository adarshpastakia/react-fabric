import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{n as a,t as o}from"./ScreenSpacePass.glsl.js";import{n as s,t as c}from"./Texture2DBindUniform.js";import{i as l,n as u,r as d,t as f}from"./Texture2DShadowBindUniform.js";import{n as p,t as m}from"./calculateUVZShadowFromDepth.glsl.js";function h(e){let n=new r,{fragment:i}=n;n.include(a),n.include(p),n.include(d),i.uniforms.add(new f(`shadowMap`,e=>e.shadowMap.depthTexture),new c(`depthMap`,e=>e.depth?.attachment)),i.constants.add(`sampleValue`,`float`,_);let o=e.index===1?`vec2`:`float`;return n.outputs.add(`sampleCount`,o),i.main.add(t`
    sampleCount = ${o}(0.0);

    vec3 uvzShadow = calculateUVZShadowFromDepth(uv, textureSize(shadowMap,0), depthMap);
    if (uvzShadow.z < 0.0) {
      return;
    }

    // The shadow map sampler returns a value between 0 and 1, we take the midpoint as we count discrete samples
    bool shadow = readShadowMapUVZ(uvzShadow, shadowMap) > 0.5;

    if (shadow) {
      sampleCount = ${o}(sampleValue); // Add 1 to the sample count
    }
  `),n}var g,_,v,y=e((()=>{o(),m(),l(),n(),s(),u(),i(),g=255,_=1/255,v=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastMaxSamples:255,build:h},Symbol.toStringTag,{value:`Module`}))}));export{v as i,h as n,g as r,y as t};