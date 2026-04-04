import{n as e}from"./chunk.js";import{a as t,l as n,o as r,s as i}from"./vec4f64.js";import{a,r as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as p}from"./Texture2DPassUniform.js";import{n as m,t as h}from"./ShaderBuilder.js";import{n as g,t as _}from"./ScreenSpacePass.glsl.js";import{r as v,t as y}from"./NoParameters.js";import{n as b,t as x}from"./Float4PassUniform.js";import{n as S,t as C}from"./Float2PassUniform.js";import{n as w,r as T,t as E}from"./BlendColorsPremultiplied.glsl.js";import{n as D,t as O}from"./CameraSpace.glsl.js";import{t as k}from"./ShadowCastAccumulate.glsl.js";function A(e){let t=new m,n=t.fragment;t.include(O),t.include(g);let{visualization:r}=e;n.constants.add(`inverseSampleValue`,`float`,255),n.uniforms.add(new p(`shadowCastMap`,e=>e.shadowCastMap),new C(`sampleScale`,e=>e.sampleScale),new u(`opacityFromElevation`,e=>e.opacityFromElevation));let i=r===2,a=r===3,o=r===1;switch(a&&n.include(E),r){case 0:n.uniforms.add(new x(`uColor`,e=>T(L,e.gradientColor)));break;case 1:n.uniforms.add(new x(`uColor`,e=>T(L,e.bandedGradientColor)),new u(`bandSize`,e=>e.bandSize));break;case 3:n.uniforms.add(new x(`uColor`,e=>T(L,e.thresholdColor)),new x(`gradientColor`,e=>T(L,e.gradientColor)),new u(`threshold`,e=>e.threshold));break;case 2:n.uniforms.add(new x(`uColor`,e=>T(L,e.thresholdColor)),new u(`threshold`,e=>e.threshold))}let{type:l,selector:d,thresholdStrengthSelector:f}=a?{type:`vec2`,selector:`rg`,thresholdStrengthSelector:`strength.x`}:{type:`float`,selector:`r`,thresholdStrengthSelector:`strength`};return n.main.add(c`
    ${l} numSamples = texture(shadowCastMap, uv).${d} * inverseSampleValue;

    fragColor = vec4(0.0);

    // early out if we do not have any samples in one or more channels
    if (dot(numSamples, ${l}(1)) < 1.0) {
      return;
    }

    // sampleScale is the number of total samples taken, so this brings strength to a 0-1 range.
    // note that sampleScale is always a vec2 even if we have only the primary channel.
    ${l} strength = numSamples * sampleScale.${d};

    // in threshold mode, step the strength to 0 if we are at or below the threshold, 1 otherwise.
    ${s(i||a,c`
      ${f} = 1.0 - step(${f}, threshold);
    `)}

    // bail out if we are below the threshold
    ${s(i,c`if (${f} == 0.0) { return; }`)}

    ${s(o,c`strength = ceil(strength / bandSize) * bandSize;`)}

    ${l} attenuation = opacityFromElevation * strength;

    // in ThresholdAndGradient mode we blend the threshold color on top of the gradient color
    fragColor = ${s(a,c`blendColorsPremultiplied(uColor * attenuation.r, gradientColor * attenuation.g)`,c`uColor * attenuation`)};
  `),t}var j,M,N,P,F,I,L,R,z=e((()=>{o(),t(),_(),w(),D(),S(),b(),d(),l(),f(),k(),v(),h(),j=class extends y{constructor(e){super(),this._data=e,this.sampleScale=a(),this.opacityFromElevation=1,this.gradientColor=n(P),this.thresholdColor=n(F),this.bandedGradientColor=n(I),this.bandSize=.1,this.threshold=.5}get shadowCastMap(){return this._data.shadowCastTexture}},M=.7,N=50/255,P=i(0,0,1,M),F=i(1,0,0,M),I=i(N,N,N,M),L=r(),R=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:j,build:A},Symbol.toStringTag,{value:`Module`}))}));export{A as i,j as n,z as r,R as t};