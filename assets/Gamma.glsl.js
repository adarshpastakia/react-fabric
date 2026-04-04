import{n as e}from"./chunk.js";import{f as t,s as n}from"./colorUtils.js";import{r,t as i}from"./glsl.js";function a(e){e.constants.add(`GAMMA`,`float`,t).constants.add(`INV_GAMMA`,`float`,1/t).code.add(r`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}var o=e((()=>{n(),i()}));export{a as n,o as t};