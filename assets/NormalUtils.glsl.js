import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";function r(e,n){n.spherical?e.vertex.code.add(t`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):e.vertex.code.add(t`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),n.spherical?e.vertex.code.add(t`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.vertex.code.add(t`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}var i=e((()=>{n()}));export{r as n,i as t};