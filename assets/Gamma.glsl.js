import{n as e}from"./rolldown-runtime.js";import{c as t,n,p as r}from"./colorUtils.js";import{r as i,t as a}from"./glsl.js";function o(e){e.constants.add(`GAMMA`,`float`,r).constants.add(`INV_GAMMA`,`float`,n).code.add(i`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}function s(){return(s=e((()=>{t(),a()})))()}export{s as n,o as t};