import{n as e}from"./chunk.js";import{o as t,r as n}from"./vec3f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./Float3PassUniform.js";import{n as s,t as c}from"./FloatPassUniform.js";import{n as l,t as u}from"./Texture2DPassUniform.js";import{n as d,t as f}from"./ShaderBuilder.js";import{n as p,t as m}from"./IntegerPassUniform.js";import{n as h,t as g}from"./FloatsPassUniform.js";import{n as _,t as v}from"./ColorConversion.glsl.js";import{n as y,t as b}from"./Float2PassUniform.js";import{n as x,t as S}from"./BooleanPassUniform.js";import{a as C,i as w,n as T,r as E,t as D}from"./TileBackground.glsl.js";function O(e){e.fragment.uniforms.add(new u(`u_colormap`,e=>e.u_colormap),new s(`u_colormapOffset`,e=>e.colormap.u_colormapOffset),new s(`u_colormapMaxIndex`,e=>e.colormap.u_colormapMaxIndex),new s(`u_opacity`,e=>e.common.u_opacity)),e.fragment.code.add(r`vec4 colormap(vec4 currentPixel, bool isFloat) {
float colorIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || colorIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 texelCoordinates = vec2((colorIndex + 0.5), 0.5);
result = texelFetch(u_colormap, ivec2(texelCoordinates), 0);
}
return result;
}`)}var k=e((()=>{c(),i(),l()}));function A(e){e.fragment.uniforms.add(new u(`u_transformGrid`,e=>e.u_transformGrid),new b(`u_transformSpacing`,e=>e.common.u_transformSpacing),new b(`u_targetImageSize`,e=>e.common.u_targetImageSize)),e.fragment.code.add(r`vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(4.0, 1.0);
vec2 index_transform = floor(index_image / u_transformSpacing) * oneTransformPixel;
vec2 pos = fract((index_image + 0.5) / u_transformSpacing);
vec2 transform_location = index_transform + 0.5;
vec2 srcLocation;
if (pos.s <= pos.t) {
vec3 ll_abc = texelFetch(u_transformGrid, ivec2(transform_location), 0).rgb;
vec3 ll_def = texelFetch(u_transformGrid, ivec2(transform_location.s + 1.0, transform_location.t), 0).rgb;
srcLocation.s = dot(ll_abc, vec3(pos, 1.0));
srcLocation.t = dot(ll_def, vec3(pos, 1.0));
} else {
vec3 ur_abc = texelFetch(u_transformGrid, ivec2(transform_location.s + 2.0, transform_location.t), 0).rgb;
vec3 ur_def = texelFetch(u_transformGrid, ivec2(transform_location.s + 3.0, transform_location.t), 0).rgb;
srcLocation.s = dot(ur_abc, vec3(pos, 1.0));
srcLocation.t = dot(ur_def, vec3(pos, 1.0));
}
return srcLocation;
}`)}var j=e((()=>{y(),i(),l()}));function M(e,t){e.include(A),e.fragment.uniforms.add(new u(`u_image`,e=>e.u_image),new x(`u_flipY`,e=>e.common.u_flipY),new x(`u_applyTransform`,e=>e.common.u_applyTransform));let{requireBilinearWithNN:n}=t;n&&e.fragment.uniforms.add(new b(`u_srcImageSize`,e=>e.common.u_srcImageSize)),e.fragment.code.add(r`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}`),n?e.fragment.code.add(r`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture(sampler, coord0);
vec4 color1 = texture(sampler, coord1);
vec4 color2 = texture(sampler, coord2);
vec4 color3 = texture(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture(sampler, coords);
return color;
}
vec4 getPixel(vec2 pixelLocation) {
return sampleBilinear(u_image, pixelLocation, u_srcImageSize);
}`):e.fragment.code.add(r`vec4 getPixel(vec2 pixelLocation) {
return texture(u_image, pixelLocation);
}`)}var N,P=e((()=>{j(),C(),S(),y(),i(),l(),N=class extends E{constructor(e,t,n){super(),this.common=e,this.u_image=t,this.u_transformGrid=n}}}));function F(e){let t=new d;return t.include(w),t.include(M,e),t.include(O,e),t.include(D,e),t.fragment.code.add(r`vec4 applyBackgroundBlend(vec4 layerColor) {
return blendLayers(vuv, layerColor, u_opacity);
}`),e.colorizerType===0?L(t,e):e.colorizerType===1?I(t):e.colorizerType===2&&R(t,e),t}function I(e){e.fragment.main.add(r`vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
fragColor = applyBackgroundBlend(colormap(currentPixel, true));`)}function L(e,t){e.fragment.uniforms.add(new p(`u_bandCount`,e=>e.symbolizer.u_bandCount),new o(`u_minCutOff`,e=>e.symbolizer.u_minCutOff),new o(`u_maxCutOff`,e=>e.symbolizer.u_maxCutOff),new o(`u_factor`,e=>e.symbolizer.u_factor),new s(`u_minOutput`,e=>e.symbolizer.u_minOutput),new s(`u_maxOutput`,e=>e.symbolizer.u_maxOutput),new x(`u_useGamma`,e=>e.symbolizer.u_useGamma),new o(`u_gamma`,e=>e.symbolizer.u_gamma),new o(`u_gammaCorrection`,e=>e.symbolizer.u_gammaCorrection),new s(`u_opacity`,e=>e.common.u_opacity)),e.fragment.code.add(r`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}`);let n=t.applyColormap?r`fragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));`:r`fragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;e.fragment.main.add(r`
    vec2 pixelLocation = getPixelLocation(uv);
    if (isOutside(pixelLocation)) {
      fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
      return;
    }

    vec4 currentPixel = getPixel(pixelLocation);
    ${t.stretchType===0?r`fragColor = applyBackgroundBlend(currentPixel);`:r`
    if (currentPixel.a == 0.0) {
      fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
      return;
    }
    if (u_bandCount == 1) {
      float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
      ${n}
    } else {
      float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
      float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
      float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
      fragColor = applyBackgroundBlend(vec4(redVal, greenVal, blueVal, currentPixel.a));
    }`}`)}function R(e,t){let n=e.fragment;n.uniforms.add(new u(`u_image`,e=>e.u_image),new p(`u_hillshadeType`,e=>e.symbolizer.u_hillshadeType),new h(`u_sinZcosAs`,6,e=>e.symbolizer.u_sinZcosAs),new h(`u_sinZsinAs`,6,e=>e.symbolizer.u_sinZsinAs),new h(`u_cosZs`,6,e=>e.symbolizer.u_cosZs),new h(`u_weights`,6,e=>e.symbolizer.u_weights),new b(`u_factor`,e=>e.symbolizer.u_factor),new s(`u_minValue`,e=>e.symbolizer.u_minValue),new s(`u_maxValue`,e=>e.symbolizer.u_maxValue),new b(`u_srcImageSize`,e=>e.common.u_srcImageSize)),n.include(v),n.code.add(r`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 color = colormap(vec4(val, val, val, 1.0), false);
vec3 hsv = rgb2hsv(color.rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * alpha * color.a;
}`),n.code.add(r`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);let i=t.applyColormap?r`fragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));`:r`hillshade *= alpha;
fragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;n.main.add(r`
      vec2 pixelLocation = getPixelLocation(uv);
      if (isOutside(pixelLocation)) {
        fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      vec4 currentPixel = getPixel(pixelLocation);
      if (currentPixel.a == 0.0) {
        fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      //mirror edge pixels
      vec2 axy = vec2(-1.0, -1.0);
      vec2 bxy = vec2(0.0, -1.0);
      vec2 cxy = vec2(1.0, -1.0);
      vec2 dxy = vec2(-1.0, 0.0);
      vec2 fxy = vec2(1.0, 0.0);
      vec2 gxy = vec2(-1.0, 1.0);
      vec2 hxy = vec2(0.0, 1.0);
      vec2 ixy = vec2(1.0, 1.0);
      vec2 onePixel = 1.0 / u_srcImageSize;
      if (pixelLocation.s < onePixel.s) {
        axy[0] = 1.0;
        dxy[0] = 1.0;
        gxy[0] = 1.0;
      }
      if (pixelLocation.t < onePixel.t) {
        axy[1] = 1.0;
        bxy[1] = 1.0;
        cxy[1] = 1.0;
      }
      if (pixelLocation.s > 1.0 - onePixel.s) {
        cxy[0] = -1.0;
        fxy[0] = -1.0;
        ixy[0] = -1.0;
      }
      if (pixelLocation.t > 1.0 - onePixel.t) {
        gxy[1] = -1.0;
        hxy[1] = -1.0;
        ixy[1] = -1.0;
      }

      // calculate hillshade
      vec4 va = texture(u_image, pixelLocation + onePixel * axy);
      vec4 vb = texture(u_image, pixelLocation + onePixel * bxy);
      vec4 vc = texture(u_image, pixelLocation + onePixel * cxy);
      vec4 vd = texture(u_image, pixelLocation + onePixel * dxy);
      vec4 ve = texture(u_image, pixelLocation);
      vec4 vf = texture(u_image, pixelLocation + onePixel * fxy);
      vec4 vg = texture(u_image, pixelLocation + onePixel * gxy);
      vec4 vh = texture(u_image, pixelLocation + onePixel * hxy);
      vec4 vi = texture(u_image, pixelLocation + onePixel * ixy);

      // calculate the rate of z change along the x, y, and diagonal direction
      float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
      float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
      float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
      float hillshade = 0.0;

      // traditional single light source
      if (u_hillshadeType == 0){
        float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
        float z = (u_cosZs[0] + cosDelta) / dzd;
        if (z < 0.0)  z = 0.0;
        hillshade = z;
      } else {
        // multi-directional with 6 light sources
        for (int k = 0; k < 6; k++) {
        float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
        float z = (u_cosZs[k] + cosDelta) / dzd;
        if (z < 0.0) z = 0.0;
        hillshade = hillshade + z * u_weights[k];
        if (k == 5) break;
        }
      }

      // set color
      float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
      alpha *= u_opacity;
      ${i}`)}var z,B,V,H,U=e((()=>{t(),k(),P(),T(),C(),_(),S(),y(),a(),c(),g(),i(),m(),l(),f(),z=class extends N{constructor(e,t,r,i,a,o){super(e,i,a),this.colormap=t,this.symbolizer=r,this.u_colormap=o,this.backgroundColor=n,this.fboTexture=null,this.baseOpacity=1}},B=class extends z{},V=class extends z{},H=Object.freeze(Object.defineProperty({__proto__:null,ColorizerHillshadeUniforms:V,ColorizerStretchUniforms:B,ColorizerUniforms:z,build:F},Symbol.toStringTag,{value:`Module`}))}));export{H as a,k as c,B as i,U as n,F as o,z as r,P as s,V as t};