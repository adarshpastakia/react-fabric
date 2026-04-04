import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Float3PassUniform.js";import{n as a,r as o,t as s}from"./Float4sPassUniform.js";import{n as c,t as l}from"./Float4PassUniform.js";import{n as u,t as d}from"./FloatsPassUniform.js";import{n as f,t as p}from"./Matrix3PassUniform.js";function m(e){e.code.add(t`struct MaskedColor {
vec4 color;
bvec4 mask;
};`)}function h(e){e.include(m),e.code.add(t`
    MaskedColor createMaskedFromUInt8NaNColor(vec4 color) {
      return MaskedColor(color * ${t.float(1/254)}, equal(color, vec4(255)));
    }
  `)}function g(e){e.include(m),e.code.add(t`vec4 maskedColorSelectOrOne(MaskedColor color) {
return vec4(
color.mask.r ? 1.0 : color.color.r,
color.mask.g ? 1.0 : color.color.g,
color.mask.b ? 1.0 : color.color.b,
color.mask.a ? 1.0 : color.color.a
);
}
MaskedColor multiplyMaskedColors(MaskedColor color1, MaskedColor color2) {
vec4 masked1 = maskedColorSelectOrOne(color1);
vec4 masked2 = maskedColorSelectOrOne(color2);
return MaskedColor(masked1 * masked2, bvec4(ivec4(color1.mask) & ivec4(color2.mask)));
}`)}function _(e){e.include(m),e.code.add(t`MaskedColor createMaskedFromNaNColor(vec4 color) {
return MaskedColor(color, isnan(color));
}`)}var v=e((()=>{n()}));function y(e,n){let{vertex:r,attributes:a}=e;n.hasVVInstancing&&(n.hasVVSize||n.hasVVColor)&&a.add(`instanceFeatureAttribute`,`vec4`),n.hasVVSize?(r.uniforms.add(new i(`vvSizeMinSize`,e=>e.vvSize.minSize)),r.uniforms.add(new i(`vvSizeMaxSize`,e=>e.vvSize.maxSize)),r.uniforms.add(new i(`vvSizeOffset`,e=>e.vvSize.offset)),r.uniforms.add(new i(`vvSizeFactor`,e=>e.vvSize.factor)),r.uniforms.add(new i(`vvSizeFallback`,e=>e.vvSize.fallback)),r.uniforms.add(new f(`vvSymbolRotationMatrix`,e=>e.vvSymbolRotationMatrix)),r.uniforms.add(new i(`vvSymbolAnchor`,e=>e.vvSymbolAnchor)),r.code.add(t`vec3 vvScale(vec4 _featureAttribute) {
if (isnan(_featureAttribute.x)) {
return vvSizeFallback;
}
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(t`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 scale = max(vvScale(_featureAttribute), eps);
        return vec4(vvSymbolRotationMatrix * _normal / scale, 1.0);
      }

      ${n.hasVVInstancing?t`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:``}
    `)):r.code.add(t`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vertex.include(m),n.hasVVColor?(r.constants.add(`vvColorNumber`,`int`,8),r.uniforms.add(new u(`vvColorValues`,8,e=>e.vvColor.values),new s(`vvColorColors`,8,e=>e.vvColor.colors),new l(`vvColorFallback`,e=>e.vvColor.fallback,{supportsNaN:!0})),n.hasVVInstancing&&(e.vertex.include(g),e.vertex.include(_)),r.code.add(t`
      vec4 interpolateVVColor(float value) {
        if (isnan(value)) {
          return vvColorFallback;
        }

        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVVInstancing?t`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return multiplyMaskedColors(color, createMaskedFromNaNColor(vvColor()));
            }
            `:t`
            vec4 vvColor() {
              return vec4(1.0);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return color;
            }
            `}
    `)):r.code.add(t`vec4 vvColor() {
return vec4(1.0);
}
MaskedColor applyVVColor(MaskedColor color) {
return color;
}`)}var b=e((()=>{v(),r(),c(),a(),d(),n(),p(),o()}));export{v as a,h as i,y as n,_ as o,g as r,m as s,b as t};