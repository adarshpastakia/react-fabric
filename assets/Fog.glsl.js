import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./Gamma.glsl.js";import{n as c,t as l}from"./Float3PassUniform.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as p}from"./Texture2DPassUniform.js";import{n as m,t as h}from"./ShaderBuilder.js";import{n as g,t as _}from"./ReadDepth.glsl.js";import{n as v,t as y}from"./Texture2DBindUniform.js";import{n as b,t as x}from"./ToneMapping.glsl.js";import{n as S,t as C}from"./ScreenSpacePassAtmosphere.glsl.js";import{n as w,r as T,t as E}from"./RayDistanceFalloff.glsl.js";function D(e){let t=new m;t.include(C,{needUVs:!0,needEyeDirection:!0});let n=t.fragment,{hasEmissive:a}=e;return n.uniforms.add(new y(`depthTexture`,e=>e.mainDepth),new u(`fogStrength`,e=>e.strength),new u(`fogAmount`,e=>e.amount),new l(`fogColor`,e=>e.color),new u(`fogColorDistanceWeight`,e=>e.fogColorDistanceWeight)),a&&n.uniforms.add(new p(`emissionTexture`,e=>e.emission)),n.include(w),n.include(o),n.include(x),n.include(_),n.main.add(i`
    vec3 rayDir = normalize(worldRay);
    float terrainDepth = -1.0;

    float depthSample = depthFromTexture(depthTexture, uv);
    if(depthSample < 1.0 && depthSample > 0.0){
      vec3 cameraSpaceRay = normalize(eyeDir);
      cameraSpaceRay /= cameraSpaceRay.z;
      cameraSpaceRay *= linearizeDepth(depthSample);
      terrainDepth = max(0.0, length(cameraSpaceRay));
    }

    float fogAmount = fogAmount * getDistanceFalloff(terrainDepth, rayDir, fogStrength);

    ${r(a,i`vec3 emission = texture(emissionTexture, uv).rgb;
           vec3 emissionDistanceCorrected = mix(emission, vec3(0.0), fogAmount * fogColorDistanceWeight);
           vec3 finalFogColor = fogColor * fogAmount + emissionDistanceCorrected;
           vec4 fog = vec4(finalFogColor, fogAmount);`,i`vec4 fog = vec4(fogColor, 1.0) * fogAmount;`)}
    fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));`),t}var O,k,A=e((()=>{n(),g(),s(),c(),d(),a(),v(),f(),T(),S(),b(),h(),O=class extends E{constructor(){super(...arguments),this.color=t(),this.strength=4e-6,this.amount=0,this.fogColorDistanceWeight=.85}},k=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:O,build:D},Symbol.toStringTag,{value:`Module`}))}));export{D as i,A as n,O as r,k as t};