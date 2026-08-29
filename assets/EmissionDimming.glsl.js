import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./ColorConversion.glsl.js";import{r,t as i}from"./oitResolution.glsl.js";function a(e,t){e.include(n),e.include(r,t),e.code.add(`
    vec3 emissionDimming(in vec3 srcColor, float srcAlpha) {
      vec3 color = min(srcColor + vec3(1.0 - srcAlpha), 1.0);
      float m = max(color.r, max(color.g, color.b));
      return m > 0.0 ? color / m : vec3(1.0);
    }
  `)}function o(){return(o=e((()=>{t(),i()})))()}export{a as n,o as t};