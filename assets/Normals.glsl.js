import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";function r(e,n){let r=e.fragment;switch(r.code.add(t`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),n.doubleSidedMode){case 0:r.code.add(t`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:r.code.add(t`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:r.code.add(t`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n.doubleSidedMode;case 3:}}var i=e((()=>{n()}));export{r as n,i as t};