import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{a,i as o}from"./Slice.glsl.js";import{n as s,t as c}from"./Float4PassUniform.js";import{n as l,r as u}from"./View.glsl.js";import{n as d,t as f}from"./ColorConversion.glsl.js";import{n as p,t as m}from"./Float2PassUniform.js";import{n as h,t as g}from"./OutputColorHighlightOLID.glsl.js";function _(e){let n=new r,{vertex:i,fragment:a,varyings:s}=n;return n.fragment.include(o,e),n.include(h,e),l(i,e),n.attributes.add(`position`,`vec3`),n.attributes.add(`uv0`,`vec2`),s.add(`vUV`,`vec2`),s.add(`vpos`,`vec3`),i.main.add(t`vUV = uv0;
vpos = position;
gl_Position = proj * view * vec4(position, 1.0);`),a.uniforms.add(new m(`size`,e=>e.size)),a.uniforms.add(new c(`color1`,e=>e.color1)),a.uniforms.add(new c(`color2`,e=>e.color2)),a.include(f),a.main.add(t`vec2 uvScaled = vUV / (2.0 * size);
vec2 uv = fract(uvScaled - 0.25);
vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
float t = mix(abs(ab.x + ab.y), 0.5, fade);
fragColor = mix(color2, color1, t);
outputColorHighlightOLID(applySlice(fragColor, vpos), fragColor.rgb);`),n}var v;function y(){return(y=e((()=>{a(),d(),u(),p(),s(),n(),g(),i(),v=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:`Module`}))})))()}export{v as n,_ as r,y as t};