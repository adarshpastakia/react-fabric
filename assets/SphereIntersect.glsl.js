import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";function r(e){e.code.add(t`vec2 sphereIntersect(vec3 start, vec3 dir, float distance) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * distance;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`)}var i=e((()=>{n()}));export{i as n,r as t};