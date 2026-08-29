import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatPassUniform.js";import{n as a,t as o}from"./Texture2DPassUniform.js";import{n as s,t as c}from"./Float3PassUniform.js";import{n as l,t as u}from"./Texture2DBindUniform.js";import{r as d,t as f}from"./ReadDepth.glsl.js";import{t as p}from"./BlendColorsPremultiplied.glsl.js";import{n as m,t as h}from"./CameraSpace.glsl.js";function g(e,n){let i=e.fragment;i.include(f),e.include(h),i.include(p),i.uniforms.add(new r(`globalAlpha`,e=>e.globalAlpha),new c(`glowColor`,e=>e.glowColor),new r(`glowWidth`,(e,t)=>e.glowWidth*t.camera.pixelRatio),new r(`glowFalloff`,e=>e.glowFalloff),new c(`innerColor`,e=>e.innerColor),new r(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio),new u(`depthMap`,e=>e.depth?.attachment),new o(`normalMap`,e=>e.normals)),i.code.add(t`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(t`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendColorsPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(t`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
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
}`),n.contrastControlEnabled?i.uniforms.add(new o(`frameColor`,(e,t)=>e.colors),new r(`globalAlphaContrastBoost`,e=>e.globalAlphaContrastBoost)).code.add(t`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):i.code.add(t`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function _(){return(_=e((()=>{d(),m(),s(),i(),n(),l(),a()})))()}export{g as n,_ as t};