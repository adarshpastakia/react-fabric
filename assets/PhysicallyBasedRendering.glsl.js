import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r}from"./PiUtils.glsl.js";import{n as i,t as a}from"./Gamma.glsl.js";var o,s;function c(){return(c=e((()=>{o=3e5,s=5e5})))()}function l(e){e.code.add(t`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(t`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(t`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function u(){return(u=e((()=>{n()})))()}function d(e,n){e.include(a),e.include(r),n.pbrMode!==1&&n.pbrMode!==2&&n.pbrMode!==5&&n.pbrMode!==6||(e.code.add(t`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(t`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),e.code.add(t`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(t`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`)),n.pbrMode!==1&&n.pbrMode!==2||(e.include(l),e.code.add(t`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.code.add(t`void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo, vec3 mrr) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)),n.pbrMode!==5&&n.pbrMode!==6||e.code.add(t`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function f(e,n){e.include(r),e.code.add(t`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(t`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(t`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(t`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(t`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function p(){return(p=e((()=>{u(),i(),n()})))()}export{c as a,o as i,f as n,s as o,p as r,d as t};