const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SSAOBlur2.glsl.js","./chunk.js","./SSAOBlur.glsl.js","./ScreenSpacePass.glsl.js","./glsl.js","./ReadDepth.glsl.js","./vec2f64.js","./vec2.js","./common.js","./Float2BindUniform.js","./Uniform.js","./Float2DrawUniform.js","./FloatPassUniform.js","./Texture2DDrawUniform.js","./Texture2DPassUniform.js","./ShaderBuilder.js","./Error.js","./typedArrayUtil.js","./compilerUtils.js","./SSAO2.glsl.js","./SSAO.glsl.js","./Gamma.glsl.js","./colorUtils.js","./CameraSpace.glsl.js","./vec4f64.js","./vec4.js","./Float4BindUniform.js","./Float2PassUniform.js","./FloatBindUniform.js"])))=>i.map(i=>d[i]);
import{n as e}from"./chunk.js";import{n as t,t as n}from"./preload-helper.js";import{i as r,l as i}from"./tslib.es6.js";import{A as a,P as o}from"./promiseUtils.js";import{n as s,r as c,t as l}from"./decorators.js";import{n as u,t as d}from"./time.js";import{c as f,o as p}from"./reactiveUtils.js";import{v as m,w as ee}from"./mathUtils.js";import{b as h,h as g}from"./vec2.js";import{a as _,r as v}from"./vec2f64.js";import{_ as te,g as y}from"./enums.js";import{n as b,r as x,t as S}from"./glsl.js";import{n as ne,t as re}from"./Gamma.glsl.js";import{l as ie,n as ae,t as oe,u as se}from"./Texture.js";import{g as C,h as w,l as T}from"./renderState.js";import{i as ce,r as E}from"./webgl.js";import{n as le,t as ue}from"./RenderNode.js";import{d as D,f as O,n as k,r as A}from"./ShaderTechnique.js";import{r as de,t as j}from"./NoParameters.js";import{n as M,t as fe}from"./FloatBindUniform.js";import{n as pe,t as me}from"./PiUtils.glsl.js";import{n as he,t as ge}from"./Texture2DBindUniform.js";import{n as _e,r as ve}from"./SceneLighting.js";import{n as ye,t as N}from"./BooleanBindUniform.js";import{a as P,i as be,n as xe,o as F,r as Se}from"./PhysicallyBasedRendering.glsl.js";import{n as I,r as Ce,t as we}from"./SSAO.glsl.js";import{r as Te,t as Ee}from"./SSAOBlur.glsl.js";import{n as De,t as Oe}from"./EvaluateAmbientLighting.glsl.js";import{i as L,n as ke,r as R,t as Ae}from"./MainLighting.glsl.js";import{n as je,t as z}from"./ToneMapping.glsl.js";var B,Me=e((()=>{i(),c(),D(),A(),Te(),T(),t(),B=class extends k{constructor(){super(...arguments),this.shader=new O(Ee,()=>n(()=>import(`./SSAOBlur2.glsl.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url))}initializePipeline(){return C({colorWrite:w})}},B=r([s(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],B)})),V,Ne=e((()=>{V=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`})),H,U,W,G,Pe=e((()=>{v(),de(),H=class extends j{constructor(){super(...arguments),this.projScale=1}},U=class extends H{constructor(){super(...arguments),this.intensity=1}},W=class extends j{},G=class extends W{constructor(){super(...arguments),this.blurSize=_()}}})),K,Fe=e((()=>{i(),c(),D(),A(),I(),T(),t(),K=class extends k{constructor(){super(...arguments),this.shader=new O(we,()=>n(()=>import(`./SSAO2.glsl.js`),__vite__mapDeps([19,1,20,6,7,8,3,4,5,9,10,21,22,23,24,25,26,27,28,12,14,15,16,17,18]),import.meta.url))}initializePipeline(){return C({colorWrite:w})}},K=r([s(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],K)})),q,J,Y=e((()=>{i(),m(),a(),p(),d(),c(),g(),ce(),le(),P(),I(),Me(),Ne(),Pe(),Fe(),y(),ae(),se(),q=class extends ue{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=E.SSAO,this.isEnabled=()=>!1,this._enableTime=u(0),this._passParameters=new U,this._drawParameters=new G}initialize(){let e=Uint8Array.from(atob(V),e=>e.charCodeAt(0)),t=new ie(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new oe(this.renderingContext,t,e),this.techniques.precompile(K),this.techniques.precompile(B),this.addHandles(f(()=>this.isEnabled(),()=>this._enableTime=u(0)))}destroy(){this._passParameters.noiseTexture=o(this._passParameters.noiseTexture)}render(e){let t=e.find(({name:e})=>e===`normals`),n=t?.getTexture(),r=t?.getTexture(te);if(!n||!r)return;let i=this.techniques.get(K),a=this.techniques.get(B);if(!i.compiled||!a.compiled)return this._enableTime=u(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=u(performance.now()));let o=this.renderingContext,s=this.view.qualitySettings.fadeDuration,c=this.bindParameters,l=c.camera,d=l.relativeElevation,f=ee((F-d)/(F-be),0,1),p=s>0?Math.min(s,performance.now()-this._enableTime)/s:1,m=p*f;this._passParameters.normalTexture=n,this._passParameters.depthTexture=r,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*J/Ce(l)**6*m;let g=l.fullViewport[2],_=l.fullViewport[3],v=this.fboCache.acquire(g,_,`ssao input`,2);o.bindFramebuffer(v.fbo),o.setViewport(0,0,g,_),o.bindTechnique(i,c,this._passParameters,this._drawParameters),o.screen.draw();let y=Math.round(g/2),b=Math.round(_/2),x=this.fboCache.acquire(y,b,`ssao blur`,0);o.bindFramebuffer(x.fbo),this._drawParameters.colorTexture=v.getTexture(),h(this._drawParameters.blurSize,0,2/_),o.bindTechnique(a,c,this._passParameters,this._drawParameters),o.setViewport(0,0,y,b),o.screen.draw(),v.release();let S=this.fboCache.acquire(y,b,E.SSAO,0);return o.bindFramebuffer(S.fbo),o.setViewport(0,0,g,_),o.setClearColor(1,1,1,0),o.clear(16384),this._drawParameters.colorTexture=x.getTexture(),h(this._drawParameters.blurSize,2/g,0),o.bindTechnique(a,c,this._passParameters,this._drawParameters),o.setViewport(0,0,y,b),o.screen.draw(),o.setViewport4fv(l.fullViewport),x.release(),p<1&&this.requestRender(2),S}},r([l()],q.prototype,`consumes`,void 0),r([l()],q.prototype,`produces`,void 0),r([l({constructOnly:!0})],q.prototype,`isEnabled`,void 0),q=r([s(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],q),J=.5}));function X(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new ge(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(x`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(x`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}var Z=e((()=>{S(),he(),Y()}));function Ie(e){e.code.add(x`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(x`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}var Le=e((()=>{S()}));function Q(e){e.constants.add(`ambientBoostFactor`,`float`,ve)}function $(e){e.uniforms.add(new M(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function Re(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i}=t;e.include(X,t),n!==0&&e.include(Se,t),e.include(De,t),e.include(pe),e.include(z,t),e.include(ne);let a=!(n===2&&!i);switch(a&&e.include(Ie),e.code.add(x`
    ${b(n!==0,`const float GROUND_REFLECTANCE = 0.2;`)}
  `),Q(e),$(e),L(e),e.code.add(x`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?x`normalize(vPosWorld)`:x`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),R(e),e.code.add(x`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),n){case 0:case 4:case 3:e.include(Ae),e.code.add(x`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:e.code.add(x`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),e.code.add(x`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?e.uniforms.add(new ye(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(x`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),e.uniforms.add(new M(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new M(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(x`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),e.code.add(x`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${a?x`vec3 outColor = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:x`vec3 outColor = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}
        return delinearizeGamma(outColor);
      }
    `);break;case 5:case 6:L(e),R(e),e.code.add(x`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = linearizeGamma(c);
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = delinearizeGamma(outColorLinear);
return outColor;
}`)}}var ze=e((()=>{Oe(),Z(),re(),ke(),xe(),me(),N(),fe(),S(),_e(),Le(),je()}));export{Z as a,Y as c,Re as i,ze as n,X as o,Q as r,q as s,$ as t};