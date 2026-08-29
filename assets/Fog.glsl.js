import{n as e}from"./rolldown-runtime.js";import{l as t,o as n}from"./vec3f64.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./FloatPassUniform.js";import{n as u,t as d}from"./Texture2DPassUniform.js";import{n as f,t as p}from"./Float3PassUniform.js";import{n as m,t as h}from"./Gamma.glsl.js";import{r as g,t as _}from"./oitResolution.glsl.js";import{n as v,t as y}from"./Texture2DBindUniform.js";import{r as b,t as x}from"./ReadDepth.glsl.js";import{n as S,t as C}from"./ToneMapping.glsl.js";import{n as w,t as T}from"./ScreenSpacePassAtmosphere.glsl.js";import{n as E,r as D,t as O}from"./DistanceFalloff.glsl.js";function k(e){let t=new o;t.include(w,{needUVs:!0,needEyeDirection:!0});let n=t.fragment,{hasEmissive:a}=e;return n.uniforms.add(new y(`depthTexture`,e=>e.mainDepth),new c(`fogStrength`,e=>e.strength),new c(`fogAmount`,e=>e.amount),new p(`fogColor`,e=>e.color),new c(`fogColorDistanceWeight`,e=>e.fogColorDistanceWeight)),a&&n.uniforms.add(new d(`emissionTexture`,e=>e.emission?.attachment)),n.include(E),n.include(h),n.include(C),n.include(x),n.include(g,e),n.main.add(i`
    vec3 rayDir = normalize(worldRay);
    float mainDepth = -1.0;

    float depthSample = depthFromTexture(depthTexture, uv);
    if(depthSample < 1.0 && depthSample > 0.0){
      vec3 cameraSpaceRay = normalize(eyeDir);
      cameraSpaceRay /= cameraSpaceRay.z;
      cameraSpaceRay *= linearizeDepth(depthSample);
      mainDepth = max(0.0, length(cameraSpaceRay));
    }

    float fogAmount = fogAmount * getDistanceFalloff(mainDepth, rayDir, fogStrength);

    ${r(a,i`vec3 emission = texture(emissionTexture, uv).rgb * floatBlendInputScale;
           vec3 emissionDistanceCorrected = mix(emission, vec3(0.0), fogAmount * fogColorDistanceWeight);
           vec3 finalFogColor = fogColor * fogAmount + emissionDistanceCorrected;
           vec4 fog = vec4(finalFogColor, fogAmount);`,i`vec4 fog = vec4(fogColor, 1.0) * fogAmount;`)}
    fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
  `),t}var A,j;function M(){return(M=e((()=>{n(),b(),m(),f(),l(),a(),v(),u(),D(),_(),T(),S(),s(),A=class extends O{constructor(){super(...arguments),this.color=t(),this.strength=0,this.amount=0,this.fogColorDistanceWeight=.85}},j=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:A,build:k},Symbol.toStringTag,{value:`Module`}))})))()}export{j as i,M as n,A as r,k as t};