import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./ShaderBuilder.js";import{n as o,t as s}from"./FloatPassUniform.js";import{n as c,t as l}from"./Float4PassUniform.js";import{n as u,r as d}from"./View.glsl.js";import{n as f,t as p}from"./ColorConversion.glsl.js";import{n as m,t as h}from"./alphaCutoff.glsl.js";import{n as g,t as _}from"./OutputColorHighlightOLID.glsl.js";function v(e){let r=new i,{vertex:a,fragment:s,attributes:c,varyings:d}=r;return u(a,e),r.include(g,e),s.include(h),s.include(p),c.add(`position`,`vec3`),c.add(`uv0`,`vec2`),d.add(`vUV`,`vec2`),a.main.add(n`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`),s.uniforms.add(new l(`backgroundColor`,e=>e.backgroundColor),new l(`gridColor`,e=>e.gridColor),new o(`gridWidth`,e=>e.gridWidth)).main.add(n`
    const float LINE_WIDTH = 1.0;

    vec2 uvScaled = vUV * gridWidth;
    vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
    vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);

    // mask aliasing along edges
    grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
    grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);

    float gridFade = max(grid.x, grid.y);
    float gridAlpha = gridColor.a * gridFade;

    // premultiply alpha in output
    vec4 finalColor =
      premultiplyAlpha(backgroundColor) * (1.0 - gridAlpha) +
      premultiplyAlpha(vec4(gridColor.rgb, gridAlpha));
    ${t(e.emissionDimmingPass,`if (finalColor.a > alphaCutoff) { finalColor.rgb /= finalColor.a; }`)}
    outputColorHighlightOLID(finalColor, finalColor.rgb);`),r}var y;function b(){return(b=e((()=>{f(),d(),c(),s(),r(),m(),_(),a(),y=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:`Module`}))})))()}export{y as n,v as r,b as t};