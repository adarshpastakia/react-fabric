import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatBindUniform.js";import{n as a,t as o}from"./Matrix4BindUniform.js";import{n as s,t as c}from"./Gamma.glsl.js";import{n as l,t as u}from"./Texture2DBindUniform.js";import{a as d,i as f,n as p,o as m,r as h}from"./PhysicallyBasedRendering.glsl.js";import{n as g,t as _}from"./ScreenSpaceRayMarching.glsl.js";import{n as v,t as y}from"./ToneMapping.glsl.js";import{n as b,t as x}from"./CloudsParallaxShading.glsl.js";function S(e){e.code.add(t`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function C(e){e.code.add(t`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function w(){return(w=e((()=>{n()})))()}function T(e,n){let i=e.fragment;i.include(p,n),i.include(c),i.include(C),n.cloudReflections&&e.include(b),n.screenSpaceReflections&&e.include(_,n),i.include(y,n),i.constants.add(`fresnelSky`,`vec3`,[.02,1,15]),i.constants.add(`fresnelMaterial`,`vec2`,[.02,.1]),i.constants.add(`roughness`,`float`,.015),i.constants.add(`foamIntensityExternal`,`float`,1.7),i.constants.add(`ssrIntensity`,`float`,.65),i.constants.add(`ssrHeightFadeStart`,`float`,f),i.constants.add(`ssrHeightFadeEnd`,`float`,m),i.constants.add(`waterDiffusion`,`float`,.92),i.constants.add(`waterSeaColorMod`,`float`,.8),i.constants.add(`correctionViewingPowerFactor`,`float`,.4),i.constants.add(`skyZenitColor`,`vec3`,[.52,.68,.9]),i.constants.add(`skyColor`,`vec3`,[.67,.79,.9]),i.constants.add(`cloudFresnelModifier`,`vec2`,[1.2,.01]),i.code.add(t`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),i.uniforms.add(new r(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new r(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)),i.code.add(t`vec3 getWaterColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),n.cloudReflections&&i.uniforms.add(new r(`cloudsOpacity`,e=>e.clouds.opacity)).code.add(t`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),n.screenSpaceReflections?i.uniforms.add(new a(`view`,e=>e.camera.viewMatrix),new u(`lastFrameColorTexture`,e=>e.reprojection.lastFrameColor?.getTexture()),new r(`fadeFactorSSR`,e=>e.screenSpaceReflections.fadeFactor)).code.add(t`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz, 0.0);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):i.code.add(t`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),n.cloudReflections?n.screenSpaceReflections?i.code.add(t`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):i.code.add(t`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):i.code.add(t`return waterRenderedColor;
}`)}function E(){return(E=e((()=>{w(),s(),h(),d(),g(),x(),i(),n(),o(),l(),v()})))()}export{S as i,T as n,w as r,E as t};