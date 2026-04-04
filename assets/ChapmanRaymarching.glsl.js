import{n as e}from"./chunk.js";import{i as t,n}from"./Ellipsoid.js";import{v as r,w as i}from"./mathUtils.js";import{D as a,E as o}from"./vec3.js";import{a as s,r as c}from"./vec2f64.js";import{n as l,r as u,t as d}from"./glsl.js";import{a as f,i as p,r as m,t as h}from"./atmosphereUtils.js";import{r as g,t as _}from"./NoParameters.js";import{n as v,t as y}from"./FloatsPassUniform.js";import{n as b,t as x}from"./Float3BindUniform.js";import{n as S,t as C}from"./Float2PassUniform.js";import{n as w,t as T}from"./SphereIntersect.glsl.js";function E(e){e.code.add(u`float chapmanApproximation(float thickness, float height, float cosZenith) {
float c = sqrt(thickness + height);
float cExpH = c * exp(-height);
if (cosZenith >= 0.0) {
return cExpH / (c * cosZenith + 1.0);
} else {
float x0 = sqrt(1.0 - cosZenith * cosZenith) * (thickness + height);
float c0 = sqrt(x0);
return 2.0 * c0 * exp(thickness - x0) - cExpH / (1.0 - c * cosZenith);
}
}`),e.constants.add(`scaleHeight`,`float`,t.scaleHeight*t.atmosphereHeight).uniforms.add(new C(`radii`,e=>e.radii)).code.add(u`float getOpticalDepth(vec3 position, vec3 dir, float h) {
return scaleHeight * chapmanApproximation(radii[0] / scaleHeight, h, dot(normalize(position), dir));
}`),e.include(T),e.constants.add(`planetRadiusReduction`,`float`,k).uniforms.add(new v(`heightParameters`,5,(e,t)=>D(t,e)),new x(`cameraPosition`,e=>e.camera.eye)).code.add(u`vec4 planetIntersect(vec3 rayDir) {
float rayPlanetDistanceReduced = heightParameters[4];
vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, rayPlanetDistanceReduced);
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir, heightParameters[1]);
bool hitsAtmosphere = (rayAtmosphereIntersect.x <= rayAtmosphereIntersect.y) && rayAtmosphereIntersect.x > 0.0;
bool insideAtmosphere = heightParameters[0] < radii[1];
if (!hitsAtmosphere && !insideAtmosphere) {
return vec4(1.0, 0.0, 0.0, 0.0);
}
bool hitsPlanet = (rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.x > 0.0;
float start = insideAtmosphere ? 0.0 : rayAtmosphereIntersect.x;
if (heightParameters[0] < radii[0] - planetRadiusReduction) {
if (dot(rayDir, normalize(cameraPosition)) < -0.01) {
return vec4(1.0, 0.0, 0.0, 0.0);
}
start = rayPlanetIntersect.y;
}
float end = hitsPlanet ? rayPlanetIntersect.x : rayAtmosphereIntersect.y;
return vec4(0.0, hitsPlanet ? 1.0 : 0.0, start, end);
}`)}function D({camera:e},{radii:n}){let r=a(e.eye),o=Math.sqrt(r);return A[0]=o,A[1]=r-n[1]**2,A[2]=i((o-n[0])/t.atmosphereHeight,0,1),A[3]=r-n[0]**2,A[4]=r-(n[0]-k)**2,A}var O,k,A,j=e((()=>{r(),c(),o(),n(),S(),b(),y(),d(),w(),g(),O=class extends _{constructor(){super(...arguments),this.radii=s()}},k=2e4,A=[]}));function M(e,t){e.include(E),e.constants.add(`betaRayleigh`,`vec3`,p),e.constants.add(`betaCombined`,`vec3`,h),e.constants.add(`betaMie`,`float`,f),e.constants.add(`steps`,`int`,6),e.uniforms.add(new x(`cameraPosition`,e=>e.camera.eye)).code.add(u`
    vec3 raymarchAtmosphere(vec3 rayDir, vec3 lightDir, float terrainDepth) {
      vec4 ray = planetIntersect(rayDir);
      if(ray.x == 1.0) {
        return vec3(0);
      }
      ${l(t,`if (terrainDepth != -1.0) { ray.w = terrainDepth; }`)}

      vec3 samplePoint = cameraPosition + rayDir * ray.w;
      float multiplier = ray.y == 1.0 ? -1.0 : 1.0;

      vec3 scattering = vec3(0);
      float scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
      float lastOpticalDepth = getOpticalDepth(samplePoint, rayDir, scaleFract);
      float stepSize = (ray.w - ray.z) / float(steps);

      for (int i = 0; i < steps; i++) {
        samplePoint -= stepSize * rayDir;
        scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
        float opticalDepth = multiplier * getOpticalDepth(samplePoint, rayDir * multiplier, scaleFract);

        if (i > 0) {
          scattering *= exp(-(mix(betaCombined, betaRayleigh, 0.5) + betaMie) * max(0.0, (opticalDepth - lastOpticalDepth)));
          ${l(!t,`scattering *= mix(2.5, 1.0, clamp((length(cameraPosition) - radii[0]) / 50e3, 0.0, 1.0))`)};
        }

        if (dot(normalize(samplePoint), lightDir) > -0.3) {
          float scale = exp(-scaleFract);
          float lightDepth = getOpticalDepth(samplePoint, lightDir, scaleFract);
          scattering += scale * exp(-(betaCombined + betaMie) * lightDepth);
          ${l(!t,`scattering += scale * exp(-(0.25 * betaCombined ) * lightDepth);`)}
        }
        lastOpticalDepth = opticalDepth;
      }

      float mu = dot(rayDir, lightDir);
      float mumu = 1.0 + mu * mu;
      float phaseRayleigh = 0.0596831 * mumu;
      ${l(t,`return 3.0 * scattering * stepSize * phaseRayleigh * betaRayleigh;`,u`
          const float g = 0.8;
          const float gg = g * g;
          float phaseMie = 0.1193662 * ((1.0 - gg) * mumu) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg));
          phaseMie = clamp(phaseMie, 0.0, 128.0);
          return 3.0 * scattering * stepSize * (phaseRayleigh * betaRayleigh + 0.025 * phaseMie * betaMie);`)}
    }`)}var N=e((()=>{m(),j(),b(),d()}));export{O as a,j as i,M as n,D as r,N as t};