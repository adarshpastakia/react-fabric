import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Uniform.js";import{n as a,t as o}from"./FloatBindUniform.js";function s({code:e,uniforms:n},r){n.add(new a(`dpDummy`,()=>1)),e.add(t`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}var c=e((()=>{o(),n()})),l,u=e((()=>{r(),l=class extends i{constructor(e,t,n){super(e,`mat3`,2,(r,i,a)=>r.setUniformMatrix3fv(e,t(i,a),n))}}}));export{c as i,l as n,s as r,u as t};