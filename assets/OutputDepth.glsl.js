import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";function r(e,n){switch(n.output){case 5:case 6:case 7:case 8:e.fragment.code.add(t`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(t`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function i(){return(i=e((()=>{n()})))()}export{i as n,r as t};