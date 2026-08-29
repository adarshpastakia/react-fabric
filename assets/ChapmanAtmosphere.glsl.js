import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,t as c}from"./Float3PassUniform.js";import{n as l,t as u}from"./Float4PassUniform.js";import{n as d,t as f}from"./FloatsPassUniform.js";import{n as p,t as m}from"./Float3BindUniform.js";import{n as h,t as g}from"./Float2PassUniform.js";import{n as _,t as v}from"./Gamma.glsl.js";import{n as y,t as b}from"./Texture2DBindUniform.js";import{i as x,n as S}from"./MainLighting.glsl.js";import{n as C,t as w}from"./ToneMapping.glsl.js";import{n as T,t as E}from"./BooleanPassUniform.js";import{n as D,t as O}from"./SphereIntersect.glsl.js";import{i as k,n as A,r as j,t as M}from"./ChapmanRaymarching.glsl.js";import{n as N,t as P}from"./ScreenSpacePassAtmosphere.glsl.js";function F(){let e=new r;e.include(N);let{fragment:n}=e;return x(n),n.include(v),n.include(O),n.include(w),n.include(A,!1),n.uniforms.add(new T(`reduced`,({reduced:e})=>e),new d(`heightParameters`,5,(e,t)=>j(t,e)),new g(`radii`,e=>e.radii),new m(`cameraPosition`,e=>e.camera.eye),new a(`innerFadeDistance`,e=>e.innerFadeDistance),new u(`undergroundColor`,e=>e.undergroundColor),new a(`altitudeFade`,e=>e.altitudeFade)).code.add(t`vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
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
}`),n.uniforms.add(new c(`backgroundColor`,e=>e.backgroundColor),new b(`depthTexture`,e=>e.mainDepth)).main.add(t`vec3 rayDir = normalize(worldRay);
float depthSample = reduced ? 1.0 : texture(depthTexture, uv).r;
if (depthSample != 1.0) {
fragColor = vec4(0.0);
return;
}
vec3 color = linearizeGamma(backgroundColor) +
raymarchAtmosphere(rayDir, mainLightDirection, -1.0) +
getSun(rayDir, mainLightDirection);
float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[2]), length(color));
color = tonemapACES(color);
fragColor = delinearizeGamma(vec4(color, alpha));
fragColor = applyUndergroundAtmosphere(rayDir, mainLightDirection, fragColor);`),e}var I;function L(){return(L=e((()=>{_(),S(),E(),h(),p(),s(),l(),o(),f(),n(),y(),k(),M(),P(),D(),C(),i(),I=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:`Module`}))})))()}export{F as n,I as r,L as t};