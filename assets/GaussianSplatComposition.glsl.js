import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./ScreenSpacePass.glsl.js";import{r as o,t as s}from"./NoParameters.js";import{n as c,t as l}from"./ShaderBuilder.js";import{n as u,t as d}from"./Texture2DPassUniform.js";import{n as f,t as p}from"./EmissionDimming.glsl.js";function m(e){let r=new c;r.include(i);let{hasEmission:a}=e,o=r.fragment;return a&&o.include(f,e),o.uniforms.add(new d(`colorTexture`,e=>e.color),new d(`splatOutputColor`,e=>e.splatColor)),a&&o.uniforms.add(new d(`emissionTexture`,e=>e.emission)),r.outputs.add(`fragColor`,`vec4`,0),a&&r.outputs.add(`fragEmission`,`vec4`,1),r.fragment.main.add(n`
      vec4 color = texture(colorTexture, uv);
      vec4 splatColor = texture(splatOutputColor, uv);

      fragColor = splatColor + color * (1.0 - splatColor.a);
      ${t(a,n`
          vec4 emission = texture(emissionTexture, uv);
          float srcAlpha = splatColor.a;

          if (srcAlpha == 0.0) {
            fragEmission = emission;
            return;
          }

          vec3 oitDimming = emissionDimming(splatColor.rgb, 1.0 - srcAlpha);
          float opaqueSuppression = smoothstep(0.95, 1.0, srcAlpha);
          vec3 dimming = mix(oitDimming, vec3(0.0), opaqueSuppression);

          fragEmission = vec4(emission.rgb * dimming, emission.a);
        `)}
    `),r}var h,g;function _(){return(_=e((()=>{a(),p(),r(),u(),o(),l(),h=class extends s{},g=Object.freeze(Object.defineProperty({__proto__:null,GaussianSplatCompositionPassParameters:h,build:m},Symbol.toStringTag,{value:`Module`}))})))()}export{m as i,h as n,g as r,_ as t};