import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Float3BindUniform.js";function a(e){e.uniforms.add(new i(`mainLightDirection`,e=>e.lighting.mainLight.direction))}function o(e){e.uniforms.add(new i(`mainLightIntensity`,e=>e.lighting.mainLight.intensity))}function s(e){a(e),o(e),e.code.add(t`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}var c=e((()=>{r(),n()}));export{a as i,c as n,o as r,s as t};