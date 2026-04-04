import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Gamma.glsl.js";import{n as o,t as s}from"./FloatPassUniform.js";import{n as c,t as l}from"./Texture2DPassUniform.js";import{n as u,t as d}from"./ShaderBuilder.js";import{n as f,t as p}from"./IntegerPassUniform.js";import{n as m,t as h}from"./FloatsPassUniform.js";import{n as g,t as _}from"./ReadDepth.glsl.js";import{n as v,t as y}from"./Texture2DBindUniform.js";import{n as b,t as x}from"./ToneMapping.glsl.js";import{n as S,t as C}from"./ScreenSpacePassAtmosphere.glsl.js";import{n as w,r as T,t as E}from"./RayDistanceFalloff.glsl.js";function D(e){let r=new u,a=r.fragment,{blurEnabled:s,tonemappingEnabled:c}=e;return r.include(C,{needUVs:!0,needEyeDirection:!0}),a.include(i),a.include(w),a.include(_),r.outputs.add(`fragColor`,`vec4`,0),r.outputs.add(`fragEmission`,`vec3`,1),a.include(x),a.uniforms.add(new l(`colorTexture`,e=>e.color),new l(`emissionTexture`,e=>e.emission)),s?(a.uniforms.add(new y(`depthTexture`,e=>e.mainDepth),new o(`distanceModifier`,e=>e.distanceModifier),new l(`lodTexture0`,e=>e.lodTexture0),new l(`lodTexture1`,e=>e.lodTexture1),new l(`lodTexture2`,e=>e.lodTexture2),new l(`lodTexture3`,e=>e.lodTexture3),new l(`lodTexture4`,e=>e.lodTexture4),new f(`glowLod`,e=>e.glowLod),new m(`minDisperse`,6,e=>e.minDisperse.presets),new m(`maxDisperse`,6,e=>e.maxDisperse.presets),new o(`dispersionWeight`,e=>e.dispersionWeight)).main.add(n`
    vec4 color = texture(colorTexture, uv);
    color = vec4(linearizeGamma(color.rgb), color.a);

    vec3 lod0 = texture(emissionTexture, uv).rgb;
    vec3 lod1 = texture(lodTexture0, uv).rgb;
    vec3 lod2 = texture(lodTexture1, uv).rgb;
    vec3 lod3 = texture(lodTexture2, uv).rgb;
    vec3 lod4 = texture(lodTexture3, uv).rgb;
    vec3 lod5 = texture(lodTexture4, uv).rgb;

    float terrainDepth = -1.0;
    float depthSample = depthFromTexture(depthTexture, uv);
    if(depthSample < 1.0 && depthSample > 0.0){
      vec3 cameraSpaceRay = normalize(eyeDir);
      cameraSpaceRay /= cameraSpaceRay.z;
      cameraSpaceRay *= linearizeDepth(depthSample);
      terrainDepth = max(0.0, length(cameraSpaceRay));
    }
    vec3 rayDir = normalize(worldRay);
    float dispersionByDistance = getDistanceFalloff(terrainDepth, rayDir, distanceModifier);
    float dispersionPerPixel = dispersionWeight * dispersionByDistance;

    float lodFactor0 = mix(minDisperse[0], maxDisperse[0], dispersionPerPixel);
    float lodFactor1 = mix(minDisperse[1], maxDisperse[1], dispersionPerPixel);
    float lodFactor2 = mix(minDisperse[2], maxDisperse[2], dispersionPerPixel);
    float lodFactor3 = mix(minDisperse[3], maxDisperse[3], dispersionPerPixel);
    float lodFactor4 = mix(minDisperse[4], maxDisperse[4], dispersionPerPixel);
    float lodFactor5 = mix(minDisperse[5], maxDisperse[5], dispersionPerPixel);

    vec3 emission = lodFactor0 * lod0;
    emission += lodFactor1 * lod1;
    emission += lodFactor2 * lod2;
    emission += lodFactor3 * lod3;
    emission += lodFactor4 * lod4;
    emission += lodFactor5 * lod5;

    // only for glow editor lod debugging
    emission = glowLod == 0 ? lodFactor0 * lod0 : glowLod == 1 ? lodFactor1 * lod1 : glowLod == 2 ? lodFactor2 * lod2 : glowLod == 3 ? lodFactor3 * lod3 : glowLod == 4 ? lodFactor4 * lod4 : glowLod == 5 ? lodFactor5 * lod5 : emission;

    fragEmission = emission;
    // tonemapping is only applied to the emissive part since main color values are not in HDR.
    ${t(c,`emission = tonemapKhronosNeutral(emission, 1.0);`)}

    fragColor = delinearizeGamma(vec4(color.rgb + emission.rgb, color.w));
  `),r):(a.main.add(n`
      vec4 color = texture(colorTexture, uv);
      color = vec4(linearizeGamma(color.rgb), color.a);

      // emission is already in linear color space here.
      vec3 emission = texture(emissionTexture, uv).rgb;

      ${t(c,`emission = tonemapKhronosNeutral(emission, 1.0);`)}
      fragColor = delinearizeGamma(vec4(color.rgb + emission, color.w));
    `),r)}function O(e,t,n=1){let r=e[0]+e[1]+e[2]+e[3]+e[4]+e[5];return!t||r<=n?e:[e[0]/r,e[1]/r,e[2]/r,e[3]/r,e[4]/r,e[5]/r]}function k(e,t,n=1){return[e[0]*(1-n)+t[0]*n,e[1]*(1-n)+t[1]*n,e[2]*(1-n)+t[2]*n,e[3]*(1-n)+t[3]*n,e[4]*(1-n)+t[4]*n,e[5]*(1-n)+t[5]*n]}var A,j,M,N=e((()=>{g(),a(),s(),h(),r(),p(),v(),c(),T(),S(),b(),d(),A=class extends E{constructor(){super(...arguments),this.glowLod=-1,this.dispersionWeight=1,this.distanceModifier=1e-4}},j=class{constructor(e,t=!0){this.presets=e,this.presets=O(e,t)}},M=Object.freeze(Object.defineProperty({__proto__:null,GlowCompositionPassParameters:A,GlowLodFactors:j,build:D,mixPreset:k},Symbol.toStringTag,{value:`Module`}))}));export{j as a,k as i,M as n,D as o,N as r,A as t};