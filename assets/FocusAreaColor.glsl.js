import{n as e}from"./chunk.js";import{n as t,t as n}from"./signal.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,t as c}from"./Texture2DPassUniform.js";import{n as l,t as u}from"./ShaderBuilder.js";import{n as d,t as f}from"./IntegerPassUniform.js";import{n as p,t as m}from"./ScreenSpacePass.glsl.js";import{r as h,t as g}from"./NoParameters.js";function _(){let e=new l;return e.include(p),e.outputs.add(`fragColor`,`vec4`,0),e.fragment.uniforms.add(new c(`colorTexture`,e=>e.color),new c(`focusArea`,e=>e.focusArea),new d(`focusAreaEffectMode`,e=>e.effect),new a(`fadeFactor`,e=>e.fadeFactor.value)).main.add(r`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${r.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),e}var v,y,b=e((()=>{n(),m(),o(),i(),f(),s(),h(),u(),v=class extends g{constructor(){super(...arguments),this.effect=0,this.fadeFactor=t(1)}},y=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:v,build:_},Symbol.toStringTag,{value:`Module`}))}));export{y as i,_ as n,b as r,v as t};