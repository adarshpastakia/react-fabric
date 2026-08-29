import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{r,t as i}from"./NoParameters.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,t as c}from"./Float3BindUniform.js";import{n as l,t as u}from"./SphereIntersect.glsl.js";function d(e){e.include(u),e.uniforms.add(new a(`atmosphereC`,e=>e.atmosphereC),new c(`cameraPosition`,e=>e.camera.eye)).code.add(t`float getDistanceFalloff(float dist, vec3 rayDir, float weight) {
if(dist == -1.0){
dist = 0.055 * sphereIntersect(cameraPosition, rayDir, atmosphereC).y;
}
return (1.0 - exp(-dist * weight));
}`)}var f;function p(){return(p=e((()=>{s(),o(),n(),l(),r(),f=class extends i{constructor(){super(...arguments),this.atmosphereC=1}}})))()}export{d as n,p as r,f as t};