import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";function r(e,n=!0){e.attributes.add(`position`,`vec2`),n&&e.varyings.add(`uv`,`vec2`),e.vertex.main.add(t`
      gl_Position = vec4(position, 0.0, 1.0);
      ${n?t`uv = position * 0.5 + vec2(0.5);`:``}
  `)}function i(){return(i=e((()=>{n()})))()}export{r as n,i as t};