import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Gamma.glsl.js";import{n as o,t as s}from"./Float3PassUniform.js";import{n as c,t as l}from"./FloatPassUniform.js";import{n as u,t as d}from"./ShaderBuilder.js";import{n as f,t as p}from"./Float4PassUniform.js";import{n as m,t as h}from"./FloatsPassUniform.js";import{n as g,t as _}from"./Float3BindUniform.js";import{n as v,t as y}from"./Texture2DBindUniform.js";import{n as b,t as x}from"./Float2PassUniform.js";import{i as S,n as C}from"./MainLighting.glsl.js";import{n as w,t as T}from"./ToneMapping.glsl.js";import{n as E,t as D}from"./SphereIntersect.glsl.js";import{i as O,n as k,r as A,t as j}from"./ChapmanRaymarching.glsl.js";import{n as M,t as N}from"./ScreenSpacePassAtmosphere.glsl.js";function P(e){let r=new u;r.include(N);let{reduced:a}=e,{fragment:o}=r;return S(o),o.include(i),o.include(D),o.include(T),o.include(k,!1),o.uniforms.add(new m(`heightParameters`,5,(e,t)=>A(t,e)),new x(`radii`,e=>e.radii),new _(`cameraPosition`,e=>e.camera.eye),new c(`innerFadeDistance`,e=>e.innerFadeDistance),new p(`undergroundColor`,e=>e.undergroundColor),new c(`altitudeFade`,e=>e.altitudeFade)).code.add(n`vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
float rayPlanetDistance = heightParameters[3];
vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, rayPlanetDistance);
if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
return fragColor;
}
float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
float surfaceShade = max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)));
vec4 color = vec4(undergroundColor.rgb * surfaceShade, undergroundColor.a * (1.0 - altitudeFade));
float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
if (relDist > 1.0) {
return color;
}
return mix(fragColor, color, smoothstep(0.0, 1.0, relDist * relDist));
}
float getGlow(float dist, float radius, float intensity) {
return pow(radius / max(dist, 1e-6), intensity);
}
vec3 getSun(vec3 rayDir, vec3 lightDir){
float scaleFract = (length(cameraPosition) - radii[0]) / scaleHeight;
float sunOpticalDepth = getOpticalDepth(cameraPosition, rayDir, max(scaleFract, 0.0));
vec3 sunTransmittance = exp(-(mix(betaCombined, betaRayleigh, 0.5)) * max(0.0, sunOpticalDepth));
float mu = clamp(dot(rayDir, lightDir), 0.0, 1.0);
float sunDisc = 256.0 * smoothstep(0.0, 128.0, clamp(getGlow(1.0 - mu, 3e-5, 3.0), 0.0, 128.0));
return normalize(sunTransmittance) * sunDisc;
}`),o.uniforms.add(new s(`backgroundColor`,e=>e.backgroundColor),new y(`depthTexture`,e=>e.mainDepth)).main.add(n`
    vec3 rayDir = normalize(worldRay);
    ${t(!a,n`
        float depthSample = texture(depthTexture, uv).r;
        if (depthSample != 1.0) {
          fragColor = vec4(0.0);
          return;
        }`)}

    vec3 color = linearizeGamma(backgroundColor) +
                 raymarchAtmosphere(rayDir, mainLightDirection, -1.0) +
                 getSun(rayDir, mainLightDirection);
    float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[2]), length(color));

    color = tonemapACES(color);
    fragColor = delinearizeGamma(vec4(color, alpha));
    fragColor = applyUndergroundAtmosphere(rayDir, mainLightDirection, fragColor);
  `),r}var F,I=e((()=>{O(),j(),a(),C(),b(),g(),o(),f(),l(),h(),r(),v(),M(),E(),w(),d(),F=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:`Module`}))}));export{F as n,P as r,I as t};