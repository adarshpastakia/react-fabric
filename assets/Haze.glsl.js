import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Gamma.glsl.js";import{n as o,t as s}from"./FloatPassUniform.js";import{n as c,t as l}from"./ShaderBuilder.js";import{n as u,t as d}from"./FloatsPassUniform.js";import{n as f,t as p}from"./ReadDepth.glsl.js";import{n as m,t as h}from"./Texture2DBindUniform.js";import{i as g,n as _}from"./MainLighting.glsl.js";import{n as v,t as y}from"./ToneMapping.glsl.js";import{n as b,t as x}from"./SphereIntersect.glsl.js";import{i as S,n as C,r as w,t as T}from"./ChapmanRaymarching.glsl.js";import{n as E,t as D}from"./ScreenSpacePassAtmosphere.glsl.js";function O(e){let r=new c,{fragment:a}=r;r.include(D),g(a),a.include(i),a.include(p),a.include(x),a.include(y),a.include(C,!0),a.uniforms.add(new h(`depthTexture`,e=>e.mainDepth));let{reduced:s}=e;return s&&a.code.add(n`float getDepth(vec2 uv){
return linearDepthFromTexture(depthTexture, uv);
}
float textureBilinear(vec2 uv) {
vec2 depthTextureSize = vec2(textureSize(depthTexture, 0));
vec2 texelSize = 1.0 / depthTextureSize;
vec2 depthUV = (uv * depthTextureSize) - vec2(0.5);
vec2 f = fract(depthUV);
vec2 snapUV = (floor(depthUV) + vec2(0.5)) / depthTextureSize;
float d0 = getDepth(snapUV);
float d1 = getDepth(snapUV + vec2(texelSize.x, 0.0));
float d2 = getDepth(snapUV + vec2(0.0, texelSize.y));
float d3 = getDepth(snapUV + texelSize);
return mix(mix(d0, d1, f.x), mix(d2, d3, f.x), f.y);
}`),a.uniforms.add(new o(`hazeStrength`,e=>e.hazeStrength),new u(`heightParameters`,5,(e,t)=>w(t,e))).main.add(n`
    float depthSample = depthFromTexture(depthTexture, uv);
    if (depthSample == 1.0) {
      discard;
    }

    vec3 rayDir = normalize(worldRay);
    vec3 cameraSpaceRay = normalize(eyeDir);
    cameraSpaceRay /= cameraSpaceRay.z;

    cameraSpaceRay *= ${t(s,`-textureBilinear(uv)`,`-linearizeDepth(depthSample)`)};
    float terrainDepth = max(0.0, length(cameraSpaceRay));

    // Alpha is ignored for haze blending
    float fadeOut = smoothstep(-10000.0, -15000.0, heightParameters[0] - radii[0]);
    vec3 color = (1.0 - fadeOut) * hazeStrength * raymarchAtmosphere(rayDir, mainLightDirection, terrainDepth);

    color = tonemapACES(color);
    fragColor = delinearizeGamma(vec4(color, 1.0));
  `),r}var k,A=e((()=>{S(),T(),f(),a(),_(),s(),d(),r(),m(),E(),b(),v(),l(),k=Object.freeze(Object.defineProperty({__proto__:null,build:O},Symbol.toStringTag,{value:`Module`}))}));export{A as n,k as r,O as t};