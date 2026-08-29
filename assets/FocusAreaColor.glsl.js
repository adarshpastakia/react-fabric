import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./signal.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./IntegerPassUniform.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";import{r as l,t as u}from"./NoParameters.js";import{n as d,t as f}from"./ShaderBuilder.js";import{n as p,t as m}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";function _(){let e=new d;return e.include(s),e.outputs.add(`fragColor`,`vec4`,0),e.fragment.uniforms.add(new g(`colorTexture`,e=>e.color),new g(`focusArea`,e=>e.focusArea),new a(`focusAreaEffectMode`,e=>e.effect),new p(`fadeFactor`,e=>e.fadeFactor.value)).main.add(r`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${r.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),e}var v,y;function b(){return(b=e((()=>{n(),c(),m(),i(),o(),h(),l(),f(),v=class extends u{constructor(){super(...arguments),this.effect=0,this.fadeFactor=t(1)}},y=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:v,build:_},Symbol.toStringTag,{value:`Module`}))})))()}export{y as i,_ as n,b as r,v as t};