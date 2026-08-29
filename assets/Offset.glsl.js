import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";function r(e){e.vertex.code.add(t`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function i(){return(i=e((()=>{n()})))()}export{i as n,r as t};