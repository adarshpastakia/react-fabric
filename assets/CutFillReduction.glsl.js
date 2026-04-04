import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Texture2DPassUniform.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./ScreenSpacePass.glsl.js";import{r as u,t as d}from"./NoParameters.js";function f(e){let{reductionPass:r}=e,i=new o;return i.include(c),i.fragment.uniforms.add(new a(`cutFillDepthTexture`,e=>e.depthTexture)),i.fragment.main.add(n`
    ivec2 iuv = ivec2(gl_FragCoord.xy) * 2;

    vec2 t0 = texelFetch(cutFillDepthTexture, iuv + ivec2(0, 0), 0).rg;
    vec2 t1 = texelFetch(cutFillDepthTexture, iuv + ivec2(1, 0), 0).rg;
    vec2 t2 = texelFetch(cutFillDepthTexture, iuv + ivec2(0, 1), 0).rg;
    vec2 t3 = texelFetch(cutFillDepthTexture, iuv + ivec2(1, 1), 0).rg;

    ${t(r===0,`
        vec2 totalDepth = t0 + t1 + t2 + t3;

        fragColor = vec4(totalDepth, 0.0, 0.0);
      `)}

    ${t(r===1,`       
        float min01 = min(t0.r, t1.r);
        float minCoordsPacked01 = mix(t0.g, t1.g, float(t1.r < t0.r));

        float min23 = min(t2.r, t3.r);
        float minCoordsPacked23 = mix(t2.g, t3.g, float(t3.r < t2.r));

        float minValue = min(min01, min23);
        float minCoordsPacked = mix(minCoordsPacked01, minCoordsPacked23, float(min23 < min01));

        fragColor = vec4(minValue, minCoordsPacked, 0.0, 0.0);
      `)}

    ${t(r===2,`
        float max01 = max(t0.r, t1.r);
        float maxCoordsPacked01 = mix(t0.g, t1.g, float(t1.r > t0.r));

        float max23 = max(t2.r, t3.r);
        float maxCoordsPacked23 = mix(t2.g, t3.g, float(t3.r > t2.r));

        float maxValue = max(max01, max23);
        float maxCoordsPacked = mix(maxCoordsPacked01, maxCoordsPacked23, float(max23 > max01));

        fragColor = vec4(maxValue, maxCoordsPacked, 0.0, 0.0);
      `)}
  `),i}var p,m,h=e((()=>{l(),r(),i(),u(),s(),p=class extends d{},m=Object.freeze(Object.defineProperty({__proto__:null,CutFillReductionParameters:p,build:f},Symbol.toStringTag,{value:`Module`}))}));export{m as i,h as n,f as r,p as t};