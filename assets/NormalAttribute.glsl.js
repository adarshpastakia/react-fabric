import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";function r(e,n){switch(e.fragment.code.add(t`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),n.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(t`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(t`vec3 normalModel() {
return normal;
}`);break;default:n.normalType;case 2:case 3:}}var i=e((()=>{n()}));export{r as n,i as t};