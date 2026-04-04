import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{o as r,u as i}from"./vec4.js";import{a,o}from"./vec4f64.js";import{E as s,P as c}from"./vec3.js";import{r as l,t as u}from"./glsl.js";import{n as d,t as f}from"./Float3BindUniform.js";import{n as p,t as m}from"./Float4BindUniform.js";function h(e,t){let n=t.lightingSphericalHarmonicsOrder===void 0?2:t.lightingSphericalHarmonicsOrder;n===0?(e.uniforms.add(new f(`lightingAmbientSH0`,({lighting:e})=>c(g,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),e.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===1?(e.uniforms.add(new m(`lightingAmbientSH_R`,({lighting:e})=>i(_,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3])),new m(`lightingAmbientSH_G`,({lighting:e})=>i(_,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3])),new m(`lightingAmbientSH_B`,({lighting:e})=>i(_,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3]))),e.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===2&&(e.uniforms.add(new f(`lightingAmbientSH0`,({lighting:e})=>c(g,e.sh.r[0],e.sh.g[0],e.sh.b[0])),new m(`lightingAmbientSH_R1`,({lighting:e})=>i(_,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4])),new m(`lightingAmbientSH_G1`,({lighting:e})=>i(_,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4])),new m(`lightingAmbientSH_B1`,({lighting:e})=>i(_,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4])),new m(`lightingAmbientSH_R2`,({lighting:e})=>i(_,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8])),new m(`lightingAmbientSH_G2`,({lighting:e})=>i(_,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8])),new m(`lightingAmbientSH_B2`,({lighting:e})=>i(_,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8]))),e.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(l`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var g,_,v=e((()=>{s(),n(),r(),a(),d(),p(),u(),g=t(),_=o()}));export{h as n,v as t};