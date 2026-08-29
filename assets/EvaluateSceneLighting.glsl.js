const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SSAOBlur2.glsl.js","./rolldown-runtime.js","./glsl.js","./ScreenSpacePass.glsl.js","./ShaderBuilder.js","./Error.js","./typedArrayUtil.js","./arrayUtils.js","./ReadDepth.glsl.js","./vec2.js","./mathUtils.js","./common.js","./vec2f64.js","./Float2BindUniform.js","./Uniform.js","./SSAOBlur.glsl.js","./Float2DrawUniform.js","./FloatPassUniform.js","./Texture2DPassUniform.js","./Texture2DDrawUniform.js","./SSAO2.glsl.js","./Gamma.glsl.js","./colorUtils.js","./CameraSpace.glsl.js","./vec4.js","./vec4f64.js","./Float4BindUniform.js","./SSAO.glsl.js","./FloatBindUniform.js","./Float2PassUniform.js","./GlobalIlluminationBlur2.glsl.js","./NoParameters.js","./oitResolution.glsl.js","./tslib.es6.js","./ShaderTechniqueConfiguration.js","./GlobalIlluminationColorQuantization.glsl.js","./GlobalIlluminationWeights.glsl.js","./GlobalIlluminationBlur.glsl.js","./ditherNoise.glsl.js","./BooleanBindUniform.js","./GlobalIllumination2.glsl.js","./enums.js","./MainLighting.glsl.js","./Float3BindUniform.js","./GlobalIllumination.glsl.js","./Matrix4BindUniform.js","./Texture2DBindUniform.js","./ScreenSpaceRayMarching.glsl.js","./GlobalIlluminationUpscale2.glsl.js","./GlobalIlluminationUpscale.glsl.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./preload-helper.js";import{o as r,r as i}from"./tslib.es6.js";import{F as a,P as o}from"./promiseUtils.js";import{n as s,r as c,t as l}from"./decorators.js";import{r as u}from"./time.js";import{c as d,l as f,o as p}from"./reactiveUtils.js";import{E as m,y as h}from"./mathUtils.js";import{O as g,x as _}from"./vec2.js";import{o as v,s as y}from"./vec2f64.js";import{a as b,o as x}from"./webgl.js";import{_ as ee,g as S,n as C}from"./enums.js";import{n as w,s as T,u as E}from"./renderState.js";import{d as D,n as te,t as ne,u as re}from"./Texture.js";import{n as ie,t as ae}from"./RenderNode.js";import{d as O,n as k,t as A,u as j}from"./ShaderTechnique.js";import{n as M,r as N,t as P}from"./glsl.js";import{r as oe,t as se}from"./NoParameters.js";import{n as ce,r as le,t as ue}from"./ShaderTechniqueConfiguration.js";import{n as F,t as de}from"./FloatBindUniform.js";import{n as fe}from"./PiUtils.glsl.js";import{n as pe,t as me}from"./Gamma.glsl.js";import{n as I,t as he}from"./Texture2DBindUniform.js";import{n as ge,t as _e}from"./SceneLighting.js";import{n as ve,t as ye}from"./BooleanBindUniform.js";import{a as be,i as xe,o as L,r as Se,t as Ce}from"./PhysicallyBasedRendering.glsl.js";import{n as R,r as we,t as Te}from"./SSAO.glsl.js";import{r as Ee,t as De}from"./SSAOBlur.glsl.js";import{n as Oe,t as ke}from"./EvaluateAmbientLighting.glsl.js";import{i as z,n as Ae,r as B,t as je}from"./MainLighting.glsl.js";import{a as Me,c as Ne,s as Pe,u as V}from"./GlobalIllumination.glsl.js";import{i as Fe,n as Ie,r as Le}from"./GlobalIlluminationBlur.glsl.js";import{n as Re,r as ze,t as Be}from"./GlobalIlluminationUpscale.glsl.js";import{n as Ve,t as He}from"./ToneMapping.glsl.js";var H;function Ue(){return(Ue=e((()=>{r(),c(),j(),k(),Ee(),E(),t(),H=class extends A{constructor(){super(...arguments),this.shader=new O(De,()=>n(()=>import(`./SSAOBlur2.glsl.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url))}initializePipeline(){return w({colorWrite:T})}},H=i([s(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],H)})))()}var We;function Ge(){return(Ge=e((()=>{We=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`})))()}var U,Ke,qe,Je;function Ye(){return(Ye=e((()=>{v(),oe(),U=class extends se{constructor(){super(...arguments),this.projScale=1}},Ke=class extends U{constructor(){super(...arguments),this.intensity=1}},qe=class extends se{},Je=class extends qe{constructor(){super(...arguments),this.blurSize=y()}}})))()}var W;function Xe(){return(Xe=e((()=>{r(),c(),j(),k(),R(),E(),t(),W=class extends A{constructor(){super(...arguments),this.shader=new O(Te,()=>n(()=>import(`./SSAO2.glsl.js`),__vite__mapDeps([20,1,9,10,11,12,2,3,4,5,6,7,21,22,8,13,14,23,24,25,26,27,17,18,28,29]),import.meta.url))}initializePipeline(){return w({colorWrite:T})}},W=i([s(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],W)})))()}var G,Ze;function K(){return(K=e((()=>{r(),h(),p(),c(),_(),x(),ae(),be(),R(),Ue(),Ge(),Ye(),Xe(),S(),ne(),D(),G=class extends ie{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=b.AMBIENT_ILLUMINATION,this._enableTime=u(0),this._passParameters=new Ke,this._drawParameters=new Je}initialize(){let e=Uint8Array.from(atob(We),e=>e.charCodeAt(0)),t=new re(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new te(this.renderingContext,t,e),this.addHandles(d(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=u(0)))}destroy(){this._passParameters.noiseTexture=o(this._passParameters.noiseTexture)}render(e){let t=e.find(({name:e})=>e===`normals`),n=t?.getTexture(),r=t?.getTexture(ee);if(!n||!r)return;let i=this.techniques.getCompiled(W),a=this.techniques.getCompiled(H);if(!i||!a)return this._enableTime=u(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=u(performance.now()));let o=this.renderingContext,s=this.view.qualitySettings.fadeDuration,c=this.bindParameters,l=c.camera,d=l.relativeElevation,f=m((L-d)/(L-xe),0,1),p=s>0?Math.min(s,performance.now()-this._enableTime)/s:1,h=p*f;this._passParameters.normalTexture=n,this._passParameters.depthTexture=r,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ze/we(l)**6*h;let _=l.fullViewport[2],v=l.fullViewport[3],y=this.fboCache.acquire(_,v,`ssao input`,2);o.bindFramebuffer(y.fbo),o.setViewport(0,0,_,v),o.bindTechnique(i,c,this._passParameters,this._drawParameters),o.screen.draw();let x=Math.round(_/2),S=Math.round(v/2),C=this.fboCache.acquire(x,S,`ssao blur`,0);o.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=y.getTexture(),g(this._drawParameters.blurSize,0,2/v),o.bindTechnique(a,c,this._passParameters,this._drawParameters),o.setViewport(0,0,x,S),o.screen.draw(),y.release();let w=this.fboCache.acquire(x,S,b.AMBIENT_ILLUMINATION,0);return o.bindFramebuffer(w.fbo),o.setViewport(0,0,_,v),o.setClearColor(1,1,1,0),o.clear(16384),this._drawParameters.colorTexture=C.getTexture(),g(this._drawParameters.blurSize,2/_,0),o.bindTechnique(a,c,this._passParameters,this._drawParameters),o.setViewport(0,0,x,S),o.screen.draw(),o.setViewport4fv(l.fullViewport),C.release(),p<1&&this.requestRender(2),w}},i([l()],G.prototype,`consumes`,void 0),i([l()],G.prototype,`produces`,void 0),G=i([s(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],G),Ze=.5})))()}function Qe(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new he(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(N`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(N`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function q(){return(q=e((()=>{P(),I(),K()})))()}var J;function $e(){return($e=e((()=>{r(),c(),j(),k(),Le(),E(),t(),J=class extends A{constructor(){super(...arguments),this.shader=new O(Fe,()=>n(()=>import(`./GlobalIlluminationBlur2.glsl.js`),__vite__mapDeps([30,1,12,2,3,31,4,5,6,7,32,33,34,8,9,10,11,13,14,23,24,25,26,35,36,37,16,17,18,19,38,39]),import.meta.url))}initializePipeline(){return w({colorWrite:T})}},J=i([s(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique`)],J)})))()}var Y;function et(){return(et=e((()=>{r(),c(),j(),k(),V(),E(),t(),Y=class extends A{constructor(){super(...arguments),this.shader=new O(Ne,()=>n(()=>import(`./GlobalIllumination2.glsl.js`),__vite__mapDeps([40,1,41,2,3,31,4,5,6,7,21,22,23,9,10,11,24,25,12,13,14,26,42,43,44,17,18,45,46,8,47,28,35]),import.meta.url))}initializePipeline(){return w({colorWrite:T})}},Y=i([s(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique`)],Y)})))()}var X;function tt(){return(tt=e((()=>{r(),le(),V(),X=class extends ue{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=Pe,this.rayMarchMaxSteps=16,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}},i([ce()],X.prototype,`hasColor`,void 0),i([ce()],X.prototype,`hasEmission`,void 0)})))()}var Z;function nt(){return(nt=e((()=>{r(),c(),j(),k(),ze(),E(),t(),Z=class extends A{constructor(){super(...arguments),this.shader=new O(Be,()=>n(()=>import(`./GlobalIlluminationUpscale2.glsl.js`),__vite__mapDeps([48,1,2,3,31,4,5,6,7,8,9,10,11,12,13,14,23,24,25,26,35,36,49,17,18,19]),import.meta.url))}initializePipeline(){return w({colorWrite:T})}},Z=i([s(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique`)],Z)})))()}var Q;function $(){return($=e((()=>{r(),p(),c(),_(),x(),ae(),V(),Le(),$e(),et(),tt(),ze(),nt(),S(),Q=class extends ie{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=b.AMBIENT_ILLUMINATION,this._passParameters=new Me,this._drawParameters=new Ie,this._drawParametersUpscale=new Re,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new X,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles(d(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},f))}destroy(){this._globalIllumination=a(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;let t=e.find(({name:e})=>e===`normals`),n=t?.getTexture(),r=t?.getTexture(ee),i=this._mode;if(!n||!r)return this._emptyOutput;if(i===0)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;let a=this.bindParameters;this._configuration.hasEmission=!!a.reprojection.lastFrameEmission;let o=this.techniques.getCompiled(Y,this._configuration),s=this.techniques.getCompiled(J),c=i===1,l=c?this._lowQualityResolutionScale:1,u=c?this.techniques.getCompiled(Z):null;if(!o||!s||c&&!u)return this._requestRender(),this._emptyOutput;let d=this.renderingContext,{camera:f}=a;this._passParameters.normalTexture=n,this._passParameters.depthTexture=r,this._passParameters.projScale=1/f.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=l;let{fullWidth:p,fullHeight:m}=f,h=Math.max(1,Math.floor(p*l)),_=Math.max(1,Math.floor(m*l)),v=this.fboCache.acquire(h,_,`global illumination input`).acquireColor(C,0);d.bindFramebuffer(v.fbo),d.setViewport(0,0,h,_),d.bindTechnique(o,a,this._passParameters,this._drawParameters),d.screen.draw();let y=v.obtainAttachment(C),x=Math.max(1,Math.round(h/1)),S=Math.max(1,Math.round(_/1)),w=this.fboCache.acquire(x,S,`global illumination blur horizontal`);d.bindFramebuffer(w.fbo),this._drawParameters.texture=v.getTexture(),this._drawParameters.weightTexture=y.attachment,g(this._drawParameters.blurSize,0,1/_),d.bindTechnique(s,a,this._passParameters,this._drawParameters),d.setViewport(0,0,x,S),d.screen.draw(),v.release();let T=c?`global illumination blur vertical`:b.AMBIENT_ILLUMINATION,E=this.fboCache.acquire(x,S,T);d.bindFramebuffer(E.fbo),d.setViewport(0,0,x,S),d.setClearColor(1,1,1,0),d.clear(16384),this._drawParameters.texture=w.getTexture(),this._drawParameters.weightTexture=y.attachment,g(this._drawParameters.blurSize,1/x,0),d.bindTechnique(s,a,this._passParameters,this._drawParameters),d.setViewport(0,0,x,S),d.screen.draw(),w.release(),E.attachColor(y,C),y.release();let D=E;return u&&(D=this.fboCache.acquire(p,m,b.AMBIENT_ILLUMINATION).acquireColor(36065,0),d.bindFramebuffer(D.fbo),d.setViewport(0,0,p,m),d.setClearColor(1,1,1,0),d.clear(16384),this._drawParametersUpscale.colorTexture=E.getTexture(),this._drawParametersUpscale.weightTexture=E.getTexture(36065),d.bindTechnique(u,a,this._passParameters,this._drawParametersUpscale),d.screen.draw(),E.release()),d.setViewport4fv(f.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(D),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),D}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=a(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){let e=this.renderingContext,{fullWidth:t,fullHeight:n}=this.bindParameters.camera,r=this.fboCache.acquire(t,n,b.AMBIENT_ILLUMINATION).acquireColor(C,0);return e.bindFramebuffer(r.fbo),e.setViewport(0,0,t,n),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),r}get _canRender(){let{reprojection:e,hasEmission:t,globalIllumination:n}=this.bindParameters;return!(!e.lastFrameColor||t&&!e.lastFrameEmission||!e.lastFrameDepth||!n||this._resetBuffer)}get _mode(){let{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:t}=this.view.stage.renderer;return e?2:+!!t}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=a(this._globalIllumination)}get test(){let e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(t){e._maxFrames=t},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(t){e._lowQualityResolutionScale=t},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}},i([l()],Q.prototype,`consumes`,void 0),i([l()],Q.prototype,`produces`,void 0),Q=i([s(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination`)],Q)})))()}function rt(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new ve(`hasGlobalIlluminationTexture`,e=>e.globalIllumination!=null),new he(`globalIlluminationTexture`,e=>e.globalIllumination?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/1),e.code.add(N`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(N`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}function it(){return(it=e((()=>{ye(),P(),I(),$()})))()}function at(e){e.code.add(N`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(N`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function ot(){return(ot=e((()=>{P()})))()}function st(e){e.constants.add(`ambientBoostFactor`,`float`,_e)}function ct(e){e.uniforms.add(new F(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function lt(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i,receiveGlobalIllumination:a}=t;e.include(me),e.include(rt,t),e.include(Qe,t),n!==0&&e.include(Ce,t),e.include(ke,t),e.include(fe),e.include(He,t);let o=!(n===2&&!i);o&&e.include(at),st(e),ct(e),z(e),e.code.add(N`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?N`normalize(vPosWorld)`:N`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),B(e),e.code.add(N`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let s=a?`globalIlluminationOcclusion`:`ssao`,c=a?.75:1,l=a?1.5:1;switch(n){case 0:case 4:case 3:e.include(je),e.code.add(N`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{let n=a?.35:.2;e.code.add(N`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${N.float(n)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${M(a,N`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),t.useFillLights?e.uniforms.add(new ve(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(N`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${N.float(c)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${N.float(l)} * calculateAmbientIrradiance(normal) * (1.0 - ${s}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new F(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new F(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(N`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${s}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(N`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${M(a,N`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${o?N`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:N`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{let t=a?.35:.5,n=a?.75:1,r=a?1.5:1;z(e),B(e),e.code.add(N`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${N.float(t)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${M(a,N`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${N.float(n)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${N.float(r)} * calculateAmbientIrradiance(normal) * (1.0 - ${s}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${M(a,N`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}function ut(){return(ut=e((()=>{Oe(),q(),pe(),Ae(),Se(),it(),ye(),de(),P(),ge(),ot(),Ve()})))()}export{Q as a,Qe as c,lt as i,G as l,st as n,$ as o,ut as r,q as s,ct as t,K as u};