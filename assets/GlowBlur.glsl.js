import{n as e}from"./rolldown-runtime.js";import{M as t,x as n}from"./arrayUtils.js";import{D as r,y as i}from"./mathUtils.js";import{o as a,s as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./ScreenSpacePass.glsl.js";import{r as f,t as p}from"./NoParameters.js";import{n as m,t as h}from"./ShaderBuilder.js";import{n as g,t as _}from"./FloatPassUniform.js";import{n as v,t as y}from"./Texture2DPassUniform.js";import{n as b,t as x}from"./Float2PassUniform.js";import{n as S,t as C}from"./Gamma.glsl.js";function w({glowStage:e,useFloatBlend:n}){let i=new m,a=i.fragment;i.include(u),a.include(C);let o=e===0;a.uniforms.add(new y(`colorTexture`,e=>e.input),new g(`blurRadius`,({blurRadius:e})=>e),new g(`level`,({level:e})=>e),new g(`inputScale`,({inputScale:e})=>n?1:e),new x(`size`,({size:e})=>e));let l=`float locations1D[7] = float[7](`;for(let e=0;e<7;e++)l+=`${e===0?``:`,`} ${(e/6*2-1).toFixed(15)}`;l+=`);`;let d=Array(7).fill(0).map((e,t)=>r(t-3,2));t(d);let f=d.reduce((e,t,n)=>`${e}${n===0?``:`,`} ${t.toFixed(15)}`,`float locations1DWeights[7] = float[7](`)+`);`;return a.code.add(c`
    ${l}
    ${f}

    vec3 blurUniformSamples() {
      int textureLevel = int(${o?`level`:`0.0`});
      vec2 aspectCorrection = vec2(1.0, size.x / size.y);

      ${s(o,`float viewportScale = 1.0;`,`float viewportScale = 1.0 / pow(2.0, level);`)}
      vec2 uv = uv * viewportScale;
      vec2 pixelCenterShift = 0.5 / size;

      vec3 res = vec3(0.0);
      for(int i = 0; i < ${c.int(7)}; ++i) {
        float uv1D = locations1D[i] * viewportScale + ${o?`pixelCenterShift.x`:`pixelCenterShift.y`};
        vec2 uvOffset = ${o?`vec2(uv1D, 0.0)`:`vec2(0.0, uv1D)`};
        vec2 uvDistorted = uv + uvOffset * blurRadius * aspectCorrection;
        vec3 sampleColor = texture(colorTexture, uvDistorted, -1.0).rgb * inputScale;
        res += sampleColor * locations1DWeights[i];
      }
      return res;
    }
  `).main.add(c`fragColor = vec4(blurUniformSamples(), 0.0);`),i}var T,E;function D(){return(D=e((()=>{n(),i(),a(),d(),S(),b(),_(),l(),v(),f(),h(),T=class extends p{constructor(){super(...arguments),this.blurRadius=0,this.level=0,this.inputScale=1,this.size=o()}},E=Object.freeze(Object.defineProperty({__proto__:null,GlowBlurPassParameters:T,build:w},Symbol.toStringTag,{value:`Module`}))})))()}export{E as i,w as n,D as r,T as t};