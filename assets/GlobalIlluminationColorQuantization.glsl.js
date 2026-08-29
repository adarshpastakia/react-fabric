import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";function r(e){e.code.add(t`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${t.float(i)} + 0.5) * ${t.float(1/i)};
    }
  `)}var i;function a(){return(a=e((()=>{n(),i=255})))()}export{a as n,r as t};