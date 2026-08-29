import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./mat4f64.js";import{w as r,y as i}from"./mat4.js";import{n as a,t as o}from"./Matrix4BindUniform.js";function s(e,t={needUVs:!0,needEyeDirection:!0}){e.attributes.add(`position`,`vec2`),e.varyings.add(`worldRay`,`vec3`);let{needUVs:n,needEyeDirection:r}=t;e.vertex.uniforms.add(new a(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new a(`inverseViewMatrix`,e=>i(c,e.camera.viewMatrix))).main.add(`
    gl_Position = vec4(position, 1, 1);

    vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
    worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
  `),n&&(e.varyings.add(`uv`,`vec2`),e.vertex.main.add(`uv = position * 0.5 + vec2(0.5);`)),r&&(e.varyings.add(`eyeDir`,`vec3`),e.vertex.main.add(`eyeDir = posViewNear;`))}var c;function l(){return(l=e((()=>{r(),t(),o(),c=n()})))()}export{s as n,l as t};