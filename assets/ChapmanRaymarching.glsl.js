import{n as e}from"./rolldown-runtime.js";import{i as t,n}from"./Ellipsoid.js";import{E as r,y as i}from"./mathUtils.js";import{D as a,O as o}from"./vec3.js";import{o as s,s as c}from"./vec2f64.js";import{a as l,i as u,r as d,t as f}from"./atmosphereUtils.js";import{n as p,r as m,t as h}from"./glsl.js";import{r as g,t as _}from"./NoParameters.js";import{n as v,t as y}from"./FloatsPassUniform.js";import{n as b,t as x}from"./Float3BindUniform.js";import{n as S,t as C}from"./Float2PassUniform.js";import{n as w,t as T}from"./SphereIntersect.glsl.js";function E(e){e.code.add(m`float chapmanApproximation(float thickness, float height, float cosZenith) {
float c = sqrt(thickness + height);
float cExpH = c * exp(-height);
if (cosZenith >= 0.0) {
return cExpH / (c * cosZenith + 1.0);
} else {
float x0 = sqrt(1.0 - cosZenith * cosZenith) * (thickness + height);
float c0 = sqrt(x0);
return 2.0 * c0 * exp(thickness - x0) - cExpH / (1.0 - c * cosZenith);
}
}`),e.constants.add(`scaleHeight`,`float`,t.scaleHeight*t.atmosphereHeight).uniforms.add(new C(`radii`,e=>e.radii)).code.add(m`float getOpticalDepth(vec3 position, vec3 dir, float h) {
return scaleHeight * chapmanApproximation(radii[0] / scaleHeight, h, dot(normalize(position), dir));
}`),e.include(T),e.constants.add(`planetRadiusReduction`,`float`,k).uniforms.add(new v(`heightParameters`,5,(e,t)=>D(t,e)),new x(`cameraPosition`,e=>e.camera.eye)).code.add(m`vec4 planetIntersect(vec3 rayDir) {
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
}`)}function D({camera:e},{radii:n}){let i=o(e.eye),a=Math.sqrt(i);return A[0]=a,A[1]=i-n[1]**2,A[2]=r((a-n[0])/t.atmosphereHeight,0,1),A[3]=i-n[0]**2,A[4]=i-(n[0]-k)**2,A}var O,k,A;function j(){return(j=e((()=>{i(),s(),a(),n(),S(),b(),y(),h(),w(),g(),O=class extends _{constructor(){super(...arguments),this.radii=c()}},k=2e4,A=[]})))()}function M(e,t){e.include(E),e.constants.add(`betaRayleigh`,`vec3`,u),e.constants.add(`betaCombined`,`vec3`,f),e.constants.add(`betaMie`,`float`,l),e.constants.add(`steps`,`int`,6),e.uniforms.add(new x(`cameraPosition`,e=>e.camera.eye)).code.add(m`
    vec3 raymarchAtmosphere(vec3 rayDir, vec3 lightDir, float terrainDepth) {
      vec4 ray = planetIntersect(rayDir);
      if(ray.x == 1.0) {
        return vec3(0);
      }
      ${p(t,`if (terrainDepth != -1.0) { ray.w = terrainDepth; }`)}

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
          ${p(!t,`scattering *= mix(2.5, 1.0, clamp((length(cameraPosition) - radii[0]) / 50e3, 0.0, 1.0))`)};
        }

        if (dot(normalize(samplePoint), lightDir) > -0.3) {
          float scale = exp(-scaleFract);
          float lightDepth = getOpticalDepth(samplePoint, lightDir, scaleFract);
          scattering += scale * exp(-(betaCombined + betaMie) * lightDepth);
          ${p(!t,`scattering += scale * exp(-(0.25 * betaCombined ) * lightDepth);`)}
        }
        lastOpticalDepth = opticalDepth;
      }

      float mu = dot(rayDir, lightDir);
      float mumu = 1.0 + mu * mu;
      float phaseRayleigh = 0.0596831 * mumu;
      ${p(t,`return 3.0 * scattering * stepSize * phaseRayleigh * betaRayleigh;`,m`
          const float g = 0.8;
          const float gg = g * g;
          float phaseMie = 0.1193662 * ((1.0 - gg) * mumu) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg));
          phaseMie = clamp(phaseMie, 0.0, 128.0);
          return 3.0 * scattering * stepSize * (phaseRayleigh * betaRayleigh + 0.025 * phaseMie * betaMie);`)}
    }`)}function N(){return(N=e((()=>{b(),h(),d(),j()})))()}export{O as a,j as i,M as n,D as r,N as t};