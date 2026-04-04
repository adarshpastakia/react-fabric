import{n as e}from"./chunk.js";import{m as t,v as n}from"./mathUtils.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./Gamma.glsl.js";import{n as s,t as c}from"./FloatPassUniform.js";import{n as l,t as u}from"./Texture2DPassUniform.js";import{n as d,t as f}from"./ShaderBuilder.js";import{n as p,t as m}from"./ScreenSpacePass.glsl.js";import{r as h,t as g}from"./NoParameters.js";function _(e){let n=new d,i=n.fragment;n.include(p),i.include(a),i.uniforms.add(new u(`colorTexture`,e=>e.emissionsToDownsample),new s(`blurRadius`,e=>e.blurRadius));let o=``;for(let e=0;e<7;e++)o+=`locations1D[${e}] = ${(e/6*2-1).toFixed(3).toString()};`;let c=``;for(let e=0;e<7;e++)c+=`locations1DWeights[${e}] = ${t(e-3,2).toFixed(7).toString()};`;let l=e.glowStage===0;return i.code.add(r`
    float locations1D[${r.int(7)}];
    float locations1DWeights[${r.int(7)}];

    vec3 blurUniformSamples(sampler2D toBlur) {
      vec3 res = vec3(0.0);
      vec2 size = vec2(textureSize(toBlur, 0));
      vec2 aspectCorrection = vec2(1.0, size.x / size.y);

      ${o}
      ${c}
      vec2 pixelCenterShift = 0.5 / size;

      for(int i=0;i < ${r.int(7)}; i++) {
        float uv1D = locations1D[i] + ${l?`pixelCenterShift.x`:`pixelCenterShift.y`};
        vec2 uvOffset = ${l?`vec2(uv1D, 0.0)`:`vec2(0.0, uv1D)`};

        vec2 uvDistorted = uv + uvOffset * blurRadius * aspectCorrection;
        vec3 sampleColor = texture(toBlur, uvDistorted).rgb;
        res += sampleColor * locations1DWeights[i];
      }
      return res;
    }
  `).main.add(r`fragColor = vec4(blurUniformSamples(colorTexture), 0.0);`),n}var v,y,b=e((()=>{n(),m(),o(),c(),i(),l(),h(),f(),v=class extends g{constructor(){super(...arguments),this.blurRadius=0}},y=Object.freeze(Object.defineProperty({__proto__:null,GlowBlurPassParameters:v,build:_},Symbol.toStringTag,{value:`Module`}))}));export{y as i,b as n,v as r,_ as t};