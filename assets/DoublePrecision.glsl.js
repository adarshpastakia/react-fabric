import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatBindUniform.js";function a(e){e.uniforms.add(new r(`dpDummy`,()=>1)).code.add(t`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}function o(){return(o=e((()=>{i(),n()})))()}export{o as n,a as t};