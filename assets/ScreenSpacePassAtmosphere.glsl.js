import{n as e}from"./chunk.js";import{n as t,t as n}from"./mat4f64.js";import{w as r,y as i}from"./mat4.js";import{n as a,r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./Matrix4BindUniform.js";function u(e,t={needUVs:!0,needEyeDirection:!0}){e.attributes.add(`position`,`vec2`),e.varyings.add(`worldRay`,`vec3`);let{needUVs:n,needEyeDirection:r}=t;n&&e.varyings.add(`uv`,`vec2`),r&&e.varyings.add(`eyeDir`,`vec3`),e.vertex.uniforms.add(new c(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new c(`inverseViewMatrix`,e=>i(d,e.camera.viewMatrix))),e.vertex.main.add(o`
    vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
    ${a(r,`eyeDir = posViewNear;`)}
    worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
    ${a(n,`uv = position * 0.5 + vec2(0.5);`)}
    gl_Position = vec4(position, 1, 1);
  `)}var d,f=e((()=>{r(),t(),s(),l(),d=n()}));export{f as n,u as t};