import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Float3PassUniform.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,t as c}from"./Texture2DPassUniform.js";import{n as l,t as u}from"./ReadDepth.glsl.js";import{n as d,t as f}from"./Texture2DBindUniform.js";import{n as p,t as m}from"./BlendColorsPremultiplied.glsl.js";import{n as h,t as g}from"./CameraSpace.glsl.js";function _(e,n){let r=e.fragment;r.include(u),e.include(g),r.include(m),r.uniforms.add(new a(`globalAlpha`,e=>e.globalAlpha),new i(`glowColor`,e=>e.glowColor),new a(`glowWidth`,(e,t)=>e.glowWidth*t.camera.pixelRatio),new a(`glowFalloff`,e=>e.glowFalloff),new i(`innerColor`,e=>e.innerColor),new a(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio),new f(`depthMap`,e=>e.depth?.attachment),new c(`normalMap`,e=>e.normals)),r.code.add(t`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),r.code.add(t`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendColorsPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),r.code.add(t`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
vec3 normalReconstructed = normalize(cross(dFdx(pos), dFdy(pos)));
vec3 normalFromTexture = normalize(texture(normalMap, uv).xyz * 2.0 - 1.0);
float blendFactor = smoothstep(0.15, 0.2, depthError);
normal = normalize(mix(normalReconstructed, normalFromTexture, blendFactor));
angleCutoffAdjust = mix(0.0, 0.004, blendFactor);
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),n.contrastControlEnabled?r.uniforms.add(new c(`frameColor`,(e,t)=>e.colors),new a(`globalAlphaContrastBoost`,e=>e.globalAlphaContrastBoost)).code.add(t`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):r.code.add(t`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}var v=e((()=>{l(),p(),h(),r(),o(),n(),d(),s()}));export{_ as n,v as t};