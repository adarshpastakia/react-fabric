import{n as e}from"./chunk.js";import{n as t,t as n}from"./mat4f64.js";import{O as r,_ as i,w as a}from"./mat4.js";import{r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./ShaderBuilder.js";import{n as u,t as d}from"./FloatBindUniform.js";import{n as f,t as p}from"./Float4BindUniform.js";import{n as m,t as h}from"./Matrix4PassUniform.js";function g(){let e=new c;return e.attributes.add(`position`,`vec3`),e.attributes.add(`color`,`vec4`),e.attributes.add(`size`,`float`),e.varyings.add(`vcolor`,`vec4`),e.varyings.add(`vsize`,`float`),e.vertex.uniforms.add(new m(`transform`,(e,t)=>_(e,t)),new p(`viewport`,e=>e.camera.fullViewport),new u(`pixelRatio`,e=>e.camera.pixelRatio)),e.vertex.main.add(o`gl_Position = transform * vec4(position, 0);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;`),e.fragment.main.add(o`float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
fragColor = vec4(vcolor.xyz, intensity);`),e}function _(e,t){let n=24e-8;return r(v,t.camera.projectionMatrix),v[10]=n-1,v[11]=-1,v[14]=(n-2)*t.camera.near,i(v,v,t.camera.viewMatrix),i(v,v,e.modelMatrix)}var v,y,b=e((()=>{a(),t(),f(),d(),s(),h(),l(),v=n(),y=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:`Module`}))}));export{y as n,g as r,b as t};