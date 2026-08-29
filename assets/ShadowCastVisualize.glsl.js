import{n as e}from"./rolldown-runtime.js";import{c as t,o as n,s as r,u as i}from"./vec4f64.js";import{o as a,s as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./IntegerPassUniform.js";import{n as f,t as p}from"./ScreenSpacePass.glsl.js";import{r as m,t as h}from"./NoParameters.js";import{n as g,t as _}from"./ShaderBuilder.js";import{n as v,t as y}from"./FloatPassUniform.js";import{n as b,t as x}from"./Texture2DPassUniform.js";import{n as S,t as C}from"./Float4PassUniform.js";import{n as w,t as T}from"./Float4sPassUniform.js";import{n as E,t as D}from"./FloatsPassUniform.js";import{n as O,t as k}from"./Float2PassUniform.js";import{r as A,t as j}from"./BlendColorsPremultiplied.glsl.js";import{n as M,t as N}from"./CameraSpace.glsl.js";import{n as P}from"./ShadowCastAccumulate.glsl.js";function F(e){let t=new g,n=t.fragment;t.include(N),t.include(f);let{rendersSunlight:r,visualization:i}=e;n.constants.add(`inverseSampleValue`,`float`,255),n.uniforms.add(new x(`shadowCastMap`,e=>e.shadowCastMap),new k(`sampleScale`,e=>e.sampleScale),new v(`opacityFromElevation`,e=>e.opacityFromElevation));let a=i===2,o=i===3,l=i===1;o&&n.include(j);let d=!a;switch(d&&n.code.add(c`vec4 evaluateColorRamp(float value) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < colorRampSize; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[colorRampSize - 1];
}`),i){case 0:n.uniforms.add(new T(`vvColorColors`,8,e=>e.gradientColorRamp.flatMap(([e,t])=>A(H,t))),new u(`colorRampSize`,e=>e.gradientColorRamp.length),new E(`vvColorValues`,8,e=>e.gradientColorRamp.map(([e,t])=>e)));break;case 1:n.uniforms.add(new T(`vvColorColors`,8,e=>e.bandedGradientColorRamp.flatMap(([e,t])=>A(H,t))),new u(`colorRampSize`,e=>e.bandedGradientColorRamp.length),new E(`vvColorValues`,8,e=>e.bandedGradientColorRamp.map(([e,t])=>e)),new v(`bandSize`,e=>e.bandSize));break;case 3:n.uniforms.add(new C(`uColor`,e=>A(H,e.thresholdColor)),new v(`threshold`,e=>e.threshold),new T(`vvColorColors`,8,e=>e.gradientColorRamp.flatMap(([e,t])=>A(H,t))),new u(`colorRampSize`,e=>e.gradientColorRamp.length),new E(`vvColorValues`,8,e=>e.gradientColorRamp.map(([e,t])=>e)));break;case 2:n.uniforms.add(new C(`uColor`,e=>A(H,e.thresholdColor)),new v(`threshold`,e=>e.threshold))}let{type:p,selector:m,thresholdStrengthSelector:h}=o?{type:`vec2`,selector:`rg`,thresholdStrengthSelector:`strength.x`}:{type:`float`,selector:`r`,thresholdStrengthSelector:`strength`},_=!r;return n.main.add(c`
    ${p} numSamples = texture(shadowCastMap, uv).${m} * inverseSampleValue;

    fragColor = vec4(0.0);

    // In shadow space, zero accumulated samples can be skipped when they would render fully transparent.
    // In sunlight space, zero shadow samples may map to full-strength sunlight, so we keep them.
    ${s(_,c`
    if (${s(d,c`vvColorColors[0].a == 0.0 && `,``)}dot(numSamples, ${p}(1)) < 1.0) {
      return;
    }
    `)}

    // sampleScale is the number of total samples taken, so this brings strength to a 0-1 range.
    // note that sampleScale is always a vec2 even if we have only the primary channel.
    ${p} strength = numSamples * sampleScale.${m};

    ${s(r,c`strength = 1.0 - strength;`)}

    // in threshold mode, step the strength to 0 if we are at or below the threshold, 1 otherwise.
    ${s(a||o,c`
      float thresholdStrength = ${h};
      ${h} = 1.0 - step(thresholdStrength, threshold);
    `)}

    // bail out if we are below the threshold
    ${s(a,c`if (${h} == 0.0) { return; }`)}

    ${s(l,c`
      strength = ceil(strength / bandSize) * bandSize;
      `)}

    ${p} attenuation = opacityFromElevation * strength;

    ${s(o,c`
        vec4 thresholdColor = uColor * attenuation.r;
        vec4 gradientColor = evaluateColorRamp(attenuation.g);
        fragColor = blendColorsPremultiplied(${s(r,c`gradientColor, thresholdColor`,c`thresholdColor, gradientColor`)});
      `,s(a,c`
        fragColor = uColor * attenuation;
      `,c`
        fragColor = evaluateColorRamp(attenuation);
      `))}
  `),t}var I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{a(),n(),p(),M(),O(),S(),w(),y(),D(),l(),d(),b(),P(),m(),_(),I=class extends h{constructor(e){super(),this._data=e,this.sampleScale=o(),this.opacityFromElevation=1,this.gradientColorRamp=z,this.thresholdColor=i(B),this.bandedGradientColorRamp=V,this.bandSize=.1,this.threshold=.5}get shadowCastMap(){return this._data.shadowCastTexture}},L=.7,R=50/255,z=[[0,t(0,0,1,0)],[1,t(0,0,1,L)]],B=t(1,0,0,L),V=[[0,t(R,R,R,0)],[1,t(R,R,R,L)]],H=r(),U=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:I,build:F},Symbol.toStringTag,{value:`Module`}))})))()}export{F as i,U as n,W as r,I as t};