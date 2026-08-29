import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,r as i}from"./VisualVariablePassParameters.js";import{n as a,t as o}from"./Float3PassUniform.js";import{n as s,t as c}from"./Float4PassUniform.js";import{n as l,t as u}from"./Float4sPassUniform.js";import{n as d,t as f}from"./FloatsPassUniform.js";import{n as p,t as m}from"./Matrix3PassUniform.js";function h(e){e.code.add(t`struct MaskedColor {
vec4 color;
bvec4 mask;
};`)}function g(e){e.include(h),e.code.add(t`
    MaskedColor createMaskedFromUInt8NaNColor(vec4 color) {
      return MaskedColor(color * ${t.float(1/254)}, equal(color, vec4(255)));
    }
  `)}function _(e){e.include(h),e.code.add(t`vec4 maskedColorSelectOrOne(MaskedColor color) {
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
}`)}function v(e){e.include(h),e.code.add(t`MaskedColor createMaskedFromNaNColor(vec4 color) {
return MaskedColor(color, isnan(color));
}`)}function y(){return(y=e((()=>{n()})))()}function b(e,n){let{vertex:r,attributes:a}=e;n.hasVVInstancing&&(n.hasVVSize||n.hasVVColor)&&a.add(`instanceFeatureAttribute`,`vec4`),n.hasVVSize?(r.uniforms.add(new o(`vvSizeMinSize`,e=>e.vvSize.minSize)),r.uniforms.add(new o(`vvSizeMaxSize`,e=>e.vvSize.maxSize)),r.uniforms.add(new o(`vvSizeOffset`,e=>e.vvSize.offset)),r.uniforms.add(new o(`vvSizeFactor`,e=>e.vvSize.factor)),r.uniforms.add(new o(`vvSizeFallback`,e=>e.vvSize.fallback)),r.uniforms.add(new p(`vvSymbolRotationMatrix`,e=>e.vvSize.symbolRotationMatrix)),r.uniforms.add(new o(`vvSymbolAnchor`,e=>e.vvSize.symbolAnchor)),r.code.add(t`vec3 vvScale(vec4 _featureAttribute) {
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
        return vvTransformPosition(${r.inputs.get(`position`)}, instanceFeatureAttribute);
      }`:``}
    `)):r.code.add(t`
      vec4 localPosition() { return vec4(${r.inputs.get(`position`)}, 1.0); }
      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),e.vertex.include(h),n.hasVVColor?(r.constants.add(`vvColorNumber`,`int`,i),r.uniforms.add(new d(`vvColorValues`,i,e=>e.vvColor.values),new u(`vvColorColors`,i,e=>e.vvColor.colors),new c(`vvColorFallback`,e=>e.vvColor.fallback,{supportsNaN:!0})),n.hasVVInstancing&&(e.vertex.include(_),e.vertex.include(v)),r.code.add(t`
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
}`)}function x(){return(x=e((()=>{y(),a(),s(),l(),f(),n(),m(),r()})))()}export{y as a,g as i,b as n,v as o,_ as r,h as s,x as t};