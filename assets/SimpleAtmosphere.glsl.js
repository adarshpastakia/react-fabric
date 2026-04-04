import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{a as r,r as i}from"./vec2f64.js";import{r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Float3PassUniform.js";import{n as l,t as u}from"./FloatPassUniform.js";import{n as d,t as f}from"./Texture2DPassUniform.js";import{n as p,t as m}from"./ShaderBuilder.js";import{r as h,t as g}from"./NoParameters.js";import{n as _,t as v}from"./Float3BindUniform.js";import{n as y,t as b}from"./Matrix4BindUniform.js";import{n as x,t as S}from"./Float2PassUniform.js";import{n as C,t as w}from"./Transform.glsl.js";import{i as T,n as E}from"./MainLighting.glsl.js";function D(e){let t=new p,{vertex:n,fragment:r}=t;if(T(n),e.geometry===2)t.attributes.add(`position`,`vec2`),t.varyings.add(`color`,`vec4`),n.uniforms.add(new v(`cameraPosition`,e=>e.camera.eye),new l(`undergroundFadeAlpha`,e=>e.undergroundFadeAlpha)),n.main.add(a`float ndotl = dot(normalize(cameraPosition), mainLightDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);`),r.main.add(a`fragColor = color;`);else{t.include(C),t.attributes.add(`position`,`vec3`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`falloff`,`float`);let i=e.geometry===1;n.uniforms.add(new y(`proj`,e=>e.camera.projectionMatrix),new y(`view`,e=>e.camera.viewMatrix)),i||(t.varyings.add(`innerFactor`,`float`),n.uniforms.add(new c(`silCircleCenter`,e=>e.silhouette.center)),n.uniforms.add(new c(`silCircleV1`,e=>e.silhouette.v1)),n.uniforms.add(new c(`silCircleV2`,e=>e.silhouette.v2)),n.uniforms.add(new S(`texV`,e=>e.texV)),n.uniforms.add(new l(`innerScale`,e=>e.innerScale)));let o=1/128;n.main.add(a`
      ${i?a`
      vec3 pos = position;
      float ndotl = mainLightDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:a`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${a.float(6.2831853*o)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), mainLightDirection);
      vtc.x = position.x  * ${a.float(o)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
	  `),r.uniforms.add(new f(`tex`,e=>e.texture)),i||r.uniforms.add(new l(`altitudeFade`,e=>e.altitudeFade)),r.main.add(a`
			vec4 atmosphereColor = texture(tex, vtc) * falloff;
      ${i?a`fragColor = atmosphereColor;`:a`
              vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
              fragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
            `}
    `)}return t}var O,k,A,j=e((()=>{i(),n(),w(),E(),x(),_(),s(),u(),o(),b(),d(),h(),m(),O=class extends g{constructor(){super(...arguments),this.texV=r(),this.altitudeFade=0,this.innerScale=0,this.undergroundFadeAlpha=0,this.silhouette=new k}},k=class{constructor(){this.center=t(),this.v1=t(),this.v2=t()}},A=Object.freeze(Object.defineProperty({__proto__:null,SilhouetteCircle:k,SimpleAtmospherePassParameters:O,build:D},Symbol.toStringTag,{value:`Module`}))}));export{D as a,k as i,A as n,j as r,O as t};