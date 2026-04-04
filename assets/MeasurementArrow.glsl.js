import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatPassUniform.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./Float4PassUniform.js";import{n as l,r as u}from"./View.glsl.js";import{n as d,t as f}from"./AlphaCutoff.js";function p(e){let n=new a,{vertex:i,fragment:o}=n;l(i,e),i.uniforms.add(new r(`width`,e=>e.width)),n.attributes.add(`position`,`vec3`),n.attributes.add(`normal`,`vec3`),n.attributes.add(`uv0`,`vec2`),n.attributes.add(`length`,`float`),n.varyings.add(`vtc`,`vec2`),n.varyings.add(`vlength`,`float`),n.varyings.add(`vradius`,`float`),i.main.add(t`vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;`),o.uniforms.add(new r(`outlineSize`,e=>e.outlineSize),new c(`outlineColor`,e=>e.outlineColor),new r(`stripeLength`,e=>e.stripeLength),new c(`stripeEvenColor`,e=>e.stripeEvenColor),new c(`stripeOddColor`,e=>e.stripeOddColor));let s=1/Math.sqrt(2);return o.code.add(t`
    const float INV_SQRT2 = ${t.float(s)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      }
      if (d < outlineSize) {
        return outlineColor;
      }
      return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
    }`),o.main.add(t`
    vec2 ntc = vec2(vtc.x / vradius, vtc.y);
    vec4 color = arrowColor(ntc, vlength / vradius);
    if (color.a < ${t.float(d)}) {
      discard;
    }
    fragColor = color;`),n}var m,h=e((()=>{u(),s(),i(),n(),o(),f(),m=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:`Module`}))}));export{h as n,p as r,m as t};