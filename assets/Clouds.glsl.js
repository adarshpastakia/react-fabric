import{n as e}from"./chunk.js";import{L as t,R as n}from"./Error.js";import{S as r,v as i}from"./mathUtils.js";import{b as a,h as o}from"./vec2.js";import{n as s,t as c}from"./mat3f64.js";import{a as l,r as u}from"./vec2f64.js";import{r as d,t as f}from"./glsl.js";import{n as p,t as m}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{n as _,t as v}from"./ShaderBuilder.js";import{n as y,t as b}from"./ScreenSpacePass.glsl.js";import{r as x,t as S}from"./NoParameters.js";import{n as C,t as w}from"./Matrix3PassUniform.js";import{n as T,t as E}from"./Float2PassUniform.js";import{n as D,t as O}from"./SphereIntersect.glsl.js";import{a as k,i as A,n as j,r as M,s as N,t as P}from"./NoiseTextureAtlasDimensions.js";import{n as F,t as I}from"./BooleanPassUniform.js";function L(e){let t=new _;t.include(y,!1);let n=t.fragment;return n.include(O),n.uniforms.add(new p(`cloudRadius`,e=>e.cloudRadius),new p(`power`,e=>r(35,120,e.absorption)),new p(`sigmaE`,e=>1+e.absorption),new p(`density`,e=>r(0,.3,e.density)),new p(`cloudSize`,e=>r(0,.02,Math.max(.01,1-e.cloudSize))),new p(`detailSize`,e=>r(0,.2,Math.max(.01,1-e.detailSize))),new p(`smoothness`,e=>r(0,.5,1-e.smoothness)),new p(`cloudHeight`,e=>r(0,1500,e.cloudHeight)),new p(`coverage`,e=>e.coverage),new C(`view`,e=>e.viewMatrix),new g(`cloudShapeTexture`,e=>e.noiseTexture==null?null:e.noiseTexture.textureAtlas),new E(`cloudVariables`,e=>a(B,e.coverage,e.absorption)),new F(`lastSlice`,e=>e.lastSlice)),n.constants.add(`halfCubeMapSize`,`float`,.5*z),n.code.add(d`
    const int STEPS = ${e.steps===0?d`16`:e.steps===1?d`100`:d`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);
    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord;
      xy.x -= halfCubeMapSize;
      xy.y = lastSlice ? fragCoord.y - halfCubeMapSize : fragCoord.y;

      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`),n.code.add(d`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${d.float(N)};
      const float dataWidth = ${d.float(N)};
      const float tileRows = ${d.float(k)};
      const vec3 atlasDimensions = vec3(${d.float(j)}, ${d.float(j)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${d.float(A)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }

    float getCloudMap(vec2 p){
      // Shift the texture center to origin to avoid seam artifacts
      vec2 uv = (${d.float(P)} * p) / ${d.float(N)} + 0.5;

      return texture(cloudShapeTexture, uv).a;
    }
    `),n.code.add(d`float clouds(vec3 p) {
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
if (cloud <= 0.0) {
return 0.0;
}
float cloudMap = getCloudMap(cloudSize * p.xy);
cloud = mix(cloud, min(2.0 * (coverage), 1.0) * cloudMap, min(2.0 * (1.0 - coverage), 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float shape = getCloudShape(8.0 * cloudSize * p, 0.0);
cloud = saturate(remap(cloud, smoothness * shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * smoothstep(1.0, 0.25, heightFraction);
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, 0.35 * smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`),n.code.add(d`float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}
float multipleOctaves(float extinction, float mu, float stepL) {
float attenuation = 1.0;
float contribution = 1.0;
float phaseAttenuation = 1.0;
float luminance = 0.0;
for (int i = 0; i < 4; i++) {
float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);
luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);
attenuation *= 0.2;
contribution *= 0.6;
phaseAttenuation *= 0.5;
}
return luminance;
}`),n.code.add(d`float lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
float beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`),n.code.add(d`float mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return 0.0;
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
float shading = 0.0;
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
float luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
shading += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return shading;
}`),n.main.add(d`if (coverage ==  0.0) {
fragColor = vec4(0.0, 1.0, 0.0, 1.0);
return;
}
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(dot(rayDir, vec3(0, 0, 1))));
float totalTransmittance = 1.0;
float shading = 0.0;
float cloudDistance = cloudRadius + cloudStart;
float rayStartDistance = dot(viewPos, viewPos) - (cloudDistance * cloudDistance);
vec2 rayStartIntersect = sphereIntersect(viewPos, rayDir, rayStartDistance);
float rayEndDistance = dot(viewPos, viewPos) - ((cloudDistance + cloudHeight) * (cloudDistance + cloudHeight));
vec2 rayEndIntersect = sphereIntersect(viewPos, rayDir, rayEndDistance);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
vec3 sunDirection = normalize(vec3(0, 0, 1));
shading = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance);
shading = mix(clamp(1.0 - cloudVariables.y, 0.6, 1.0), shading, hazeFactor);
totalTransmittance = mix(0.0, totalTransmittance, hazeFactor);
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);`),t}var R,z,B,V,H=e((()=>{n(),i(),s(),o(),u(),M(),b(),I(),T(),m(),f(),w(),h(),D(),x(),v(),R=class extends S{constructor(){super(...arguments),this.cloudRadius=0,this.cloudSize=0,this.detailSize=0,this.absorption=0,this.density=0,this.smoothness=0,this.cloudHeight=0,this.coverage=0,this.lastSlice=!1,this.viewMatrix=c()}},z=t(`esri-mobile`)?1024:2048,B=l(),V=Object.freeze(Object.defineProperty({__proto__:null,CloudsPassParameters:R,build:L,cubeMapSize:z},Symbol.toStringTag,{value:`Module`}))}));export{L as a,R as i,V as n,H as r,z as t};