import{n as e}from"./chunk.js";import{b as t,h as n}from"./vec2.js";import{a as r,r as i}from"./vec2f64.js";import{r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Gamma.glsl.js";import{n as l,t as u}from"./FloatPassUniform.js";import{n as d,t as f}from"./Texture2DPassUniform.js";import{n as p,t as m}from"./ShaderBuilder.js";import{n as h,t as g}from"./ScreenSpacePass.glsl.js";import{n as _,t as v}from"./FloatBindUniform.js";import{n as y,t as b}from"./Float2BindUniform.js";import{n as x,t as S}from"./ReadDepth.glsl.js";import{n as C,t as w}from"./Float2PassUniform.js";import{n as T,t as E}from"./CameraSpace.glsl.js";function D(){let e=new p,n=e.fragment;return e.include(h),e.include(E),n.include(S),n.include(s),n.uniforms.add(new _(`radius`,e=>O(e.camera))).code.add(a`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),n.code.add(a`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add(`fragOcclusion`,`float`),n.uniforms.add(new f(`normalMap`,e=>e.normalTexture),new f(`depthMap`,e=>e.depthTexture),new l(`projScale`,e=>e.projScale),new f(`rnm`,e=>e.noiseTexture),new w(`rnmScale`,(e,n)=>t(A,n.camera.fullWidth/e.noiseTexture.descriptor.width,n.camera.fullHeight/e.noiseTexture.descriptor.height)),new l(`intensity`,e=>e.intensity),new b(`screenSize`,e=>t(A,e.camera.fullWidth,e.camera.fullHeight))).main.add(a`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${a.int(k)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${a.int(k)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function O(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}var k,A,j,M=e((()=>{n(),i(),g(),x(),c(),T(),y(),C(),v(),u(),o(),d(),m(),k=16,A=r(),j=Object.freeze(Object.defineProperty({__proto__:null,build:D,getRadius:O},Symbol.toStringTag,{value:`Module`}))}));export{D as i,M as n,O as r,j as t};