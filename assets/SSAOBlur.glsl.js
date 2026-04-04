import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatPassUniform.js";import{n as a,t as o}from"./Texture2DDrawUniform.js";import{n as s,t as c}from"./Texture2DPassUniform.js";import{n as l,t as u}from"./ShaderBuilder.js";import{n as d,t as f}from"./ScreenSpacePass.glsl.js";import{n as p,t as m}from"./Float2DrawUniform.js";import{n as h,t as g}from"./ReadDepth.glsl.js";function _(){let e=new l,n=e.fragment;e.include(d);let i=(v+1)/2,a=1/(2*i*i);return n.include(g),n.uniforms.add(new c(`depthMap`,e=>e.depthTexture),new o(`tex`,e=>e.colorTexture),new m(`blurSize`,e=>e.blurSize),new r(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),n.code.add(t`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${t.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),n.main.add(t`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${t.int(v)}; r <= ${t.int(v)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var v,y,b=e((()=>{f(),h(),p(),i(),n(),a(),s(),u(),v=4,y=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:`Module`}))}));export{_ as n,b as r,y as t};