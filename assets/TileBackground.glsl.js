import{n as e}from"./chunk.js";import{o as t}from"./vec3f64.js";import{i as n,r}from"./vec2f64.js";import{n as i,r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Float3PassUniform.js";import{n as l,t as u}from"./FloatPassUniform.js";import{n as d,t as f}from"./Texture2DPassUniform.js";import{r as p,t as m}from"./NoParameters.js";import{n as h,t as g}from"./Float2PassUniform.js";import{n as _,t as v}from"./BackgroundGrid.glsl.js";function y(e){e.attributes.add(`position`,`vec2`),e.attributes.add(`uv0`,`vec2`),e.varyings.add(`uv`,`vec2`),e.varyings.add(`vuv`,`vec2`),e.vertex.uniforms.add(new l(`scale`,e=>e.scale),new g(`offset`,e=>e.offset)).main.add(a`gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;`)}var b,x=e((()=>{r(),h(),u(),o(),p(),b=class extends m{constructor(){super(...arguments),this.scale=1,this.offset=n}}}));function S(e,t){let n=t.blendMode;switch(n){case 0:return;case 30:e.code.add(a`float reflectBlend(in float cb, in float cl) {
return (cl == 1.0) ? cl : min(cb * cb / (1.0 - cl), 1.0);
}`);break;case 6:case 9:case 13:e.code.add(a`float colorDodge(in float cb, in float cl) {
return (cb == 0.0) ? 0.0 : (cl == 1.0) ? 1.0 : min(1.0, cb / (1.0 - cl));
}
float colorBurn(in float cb, in float cl) {
return (cb == 1.0) ? 1.0 : (cl == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - cb) / cl);
}
float vividLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * colorBurn(cb, 2.0 * cl) + step(0.5, cl) * colorDodge(cb, (2.0 * (cl - 0.5)));
}`);break;case 10:e.code.add(a`float overlay(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (1.0 - 2.0 * (1.0 - cl ) * (1.0 - cb)) + step(0.5, cl) * (2.0 * cl * cb);
}`);break;case 12:e.code.add(a`float hardLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (2.0 * cl * cb) + step(0.5, cl) * (1.0 - 2.0 * (1.0 - cl) * (1.0 - cb));
}`);break;case 11:e.code.add(a`float softLight(in float cb, in float cl) {
if (cl <= 0.5) {
return cb - (1.0 - 2.0 * cl) * cb * (1.0 - cb);
}
if (cb <= 0.25) {
return cb + (2.0 * cl - 1.0) * cb * ((16.0 * cb - 12.0) * cb + 3.0);
}
return cb + (2.0 * cl - 1.0) * (sqrt(cb) - cb);
}`);break;case 14:case 15:case 17:case 16:e.code.add(a`float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
return clipColor(cbase + vec3(lumv3(clum) - lumv3(cbase)));
}
float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
return setLum(sbase > 0.0 ? (cbase - minbase) * ssat / sbase : vec3(0.0), clum);
}`)}e.code.add(a`
    vec4 applyBlendMode(vec3 cl, float ol, vec3 cb, float ob) {
      ${C(n)}
    }
  `)}function C(e){switch(e){case 8:return`return vec4(cl * ol * cb * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 1:return`return vec4((cb + cl) * 0.5 * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 2:return`return vec4(max(cb, cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 7:return`return vec4(min(cl, cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 3:return`return vec4(cl * ol + cb * ob, ol + ob);`;case 4:return`return clamp(vec4(cl.rgb + cb.rgb, ol + ob), 0.0, 1.0);`;case 28:return`return vec4(clamp(vec3(cb.rgb - cl.rgb), 0.0, 1.0), ob * ol);`;case 5:return`return vec4((cl + cb - cl * cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 26:return`return vec4(abs(cb - cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 29:return`return vec4((1.0 - cb) * ol * ob + cb * ob * (1.0 - ol), ob);`;case 18:return`return vec4(cl * ol * (1.0 - ob) + cb * ob, ol + ob - ol * ob);`;case 19:return`return vec4(cl * ol * (1.0 - ob) + cb * ob * ol, ol);`;case 21:return`return vec4(cb * ob * (1.0 - ol), ob * (1.0 - ol));`;case 22:return`return vec4(cl * ol * ob + cb * ob * (1.0 - ol), ob);`;case 24:return`return vec4(cl * ol * (1.0 - ob), ol * (1.0 - ob));`;case 25:return`return vec4(cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), ol * (1.0 - ob) + ob * (1.0 - ol));`;case 20:return`return vec4(cb * ob * ol, ol * ob);`;case 23:return`return vec4(cl * ol * ob, ol * ob);`;case 14:return`
          vec3 f = setLumSat(cl, cb, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 15:return`
          vec3 f = setLumSat(cb, cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 17:return`
          vec3 f = setLum(cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 16:return`
          vec3 f = setLum(cb, cl);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 27:return`
          vec3 f = cl + cb - 2.0 * cl * cb;
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 30:return`
          vec3 f = vec3(reflectBlend(cb.r, cl.r), reflectBlend(cb.g, cl.g), reflectBlend(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 6:return`
          vec3 f = vec3(colorDodge(cb.r, cl.r), colorDodge(cb.g, cl.g), colorDodge(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 9:return`
          vec3 f = vec3(colorBurn(cb.r, cl.r), colorBurn(cb.g, cl.g), colorBurn(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 10:return`
          vec3 f = vec3(overlay(cb.r, cl.r), overlay(cb.g, cl.g), overlay(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 11:return`
          vec3 f = vec3(softLight(cb.r, cl.r), softLight(cb.g, cl.g), softLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 12:return`
          vec3 f = vec3(hardLight(cb.r, cl.r), hardLight(cb.g, cl.g), hardLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`;case 13:return`
          vec3 f = vec3(vividLight(cb.r, cl.r), vividLight(cb.g, cl.g), vividLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`}return`return cl * ol + cb * ob`}var w=e((()=>{o()}));function T(e,t){let{output:n,blendMode:r,applyBaseOpacity:o,premultipliedAlphaSource:s}=t,u=e.fragment;o&&u.uniforms.add(new l(`baseOpacity`,e=>e.baseOpacity));let d=r!==0,p=!d&&!s&&(n===1&&!o||n===4);u.include(S,t);let m=``;switch(n){case 4:case 0:m=a`vec4(0.0)`;break;case 2:u.uniforms.add(new c(`backgroundColor`,e=>e.backgroundColor)),m=a`vec4(backgroundColor, 1.0)`;break;case 3:u.include(_),m=a`vec4(gridColor(uv), 1.0)`;break;case 1:u.uniforms.add(new f(`fboColor`,e=>e.fboTexture)),m=a`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`}u.code.add(a`
    vec4 getBackground(vec2 uv) {
      return ${i(o,a`baseOpacity *`)} ${m};
    }`),d?u.code.add(a`vec4 blendLayers(vec2 bgUV, vec4 colorLayer, float opacity) {
vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
vec4 bgColor = getBackground(bgUV);
vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);
}`):u.code.add(a`
      vec4 blendLayers(vec2 bgUV, vec4 colorLayer, float opacity) {
        float composeAlpha = colorLayer.a * opacity;
        ${i(p,a`return colorLayer * opacity;`,a`
            vec4 bgColor = getBackground(bgUV);
            return bgColor * (1.0 - composeAlpha) + colorLayer * opacity;
          `)}
      }`)}var E=e((()=>{t(),v(),w(),s(),u(),o(),d(),p()}));export{x as a,y as i,E as n,b as r,T as t};