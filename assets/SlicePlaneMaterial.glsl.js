import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatPassUniform.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./Float4PassUniform.js";import{n as l,r as u}from"./View.glsl.js";function d(e){let n=new a,{vertex:i,fragment:o,attributes:s,varyings:u}=n;return l(i,e),s.add(`position`,`vec3`),s.add(`uv0`,`vec2`),u.add(`vUV`,`vec2`),i.main.add(t`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`),o.uniforms.add(new c(`backgroundColor`,e=>e.backgroundColor),new c(`gridColor`,e=>e.gridColor),new r(`gridWidth`,e=>e.gridWidth)).main.add(t`const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;`),n}var f,p=e((()=>{u(),s(),i(),n(),o(),f=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:`Module`}))}));export{f as n,p as r,d as t};