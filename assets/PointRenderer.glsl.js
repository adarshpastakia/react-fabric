import{n as e}from"./chunk.js";import{C as t,v as n}from"./mathUtils.js";import{b as r,h as i}from"./vec2.js";import{l as a,o}from"./vec3f64.js";import{n as s,t as c}from"./mat4f64.js";import{A as l,d as u,k as d}from"./aaBoundingBox.js";import{_ as f,j as p,w as m}from"./mat4.js";import{E as h,P as g}from"./vec3.js";import{a as _,r as v}from"./vec2f64.js";import{a as y,s as b}from"./ShaderOutput.js";import{n as x,r as S,t as C}from"./glsl.js";import{n as w,t as T}from"./Float3DrawUniform.js";import{n as E,t as D}from"./ShaderBuilder.js";import{r as O,t as k}from"./NoParameters.js";import{n as A,t as j}from"./Float2DrawUniform.js";import{o as M,r as N,t as P}from"./Slice.glsl.js";import{n as F,t as I}from"./Matrix4BindUniform.js";import{n as L,t as R}from"./Matrix4DrawUniform.js";import{n as z,t as B}from"./PositionOutsideClipSpace.js";import{n as V,t as H}from"./Float2PassUniform.js";import{n as U,t as W}from"./OutputHighlight.glsl.js";function G(e){let n=new E,i=b(e.output),{vertex:a,fragment:o}=n;n.vertex.include(M,e),n.attributes.add(`position`,`vec3`),n.attributes.add(`color`,`vec3`),a.uniforms.add(new L(`modelView`,(e,t)=>f(Y,t.camera.viewMatrix,p(Y,e.origin))),new F(`proj`,e=>e.camera.projectionMatrix),new j(`screenMinMaxSize`,(e,t,n)=>r(Z,n.useFixedSizes?0:n.minSizePx*t.camera.pixelRatio,K(e.isLeaf)*t.camera.pixelRatio)),e.useFixedSizes?new H(`pointScale`,(e,t)=>r(Z,e.fixedSize*t.camera.pixelRatio,t.camera.fullHeight)):new j(`pointScale`,(e,t,n)=>r(Z,e.splatSize*n.scaleFactor*t.camera.pixelRatio,t.camera.fullHeight/t.camera.pixelRatio))),e.clippingEnabled?a.uniforms.add(new T(`clipMin`,(e,t,n)=>g(X,n.clipBox[0]-e.origin[0],n.clipBox[1]-e.origin[1],n.clipBox[2]-e.origin[2])),new T(`clipMax`,(e,t,n)=>g(X,n.clipBox[3]-e.origin[0],n.clipBox[4]-e.origin[1],n.clipBox[5]-e.origin[2]))):(a.constants.add(`clipMin`,`vec3`,[-t,-t,-t]),a.constants.add(`clipMax`,`vec3`,[t,t,t])),i&&n.varyings.add(`vColor`,`vec3`),a.main.add(S`
    // Move clipped points outside of clipspace
    if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
      position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
      gl_Position = ${z};
      gl_PointSize = 0.0;
      return;
    }

    if (rejectBySlice(position)) {
      gl_Position = ${z};
      gl_PointSize = 0.0;
      return;
    }

    // Position in camera space
    vec4 camera = modelView * vec4(position, 1.0);

    float pointSize = pointScale.x;
    vec4 position = proj * camera;
    ${e.drawScreenSize?S`float clampedScreenSize = pointSize;`:S`float pointRadius = 0.5 * pointSize;
           vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
           vec4 positionOffset = proj * cameraOffset;
           float radius = abs(positionOffset.y - position.y);
           float viewHeight = pointScale.y;
           // screen diameter = (2 * r / w) * (h / 2)
           float screenPointSize = (radius / position.w) * viewHeight;
           float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
           // Shift towards camera, to move rendered point out of terrain i.e. to
           // the camera-facing end of the virtual point when considering it as a
           // 3D sphere.
           camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
           position = proj * camera;`}

    gl_PointSize = clampedScreenSize;
    gl_Position = position;
    ${i?S`vColor = color;`:``}`),n.include(W,e);let s=0;return i&&e.hasEmission&&(n.outputs.add(`fragColor`,`vec4`,s++),n.outputs.add(`fragEmission`,`vec4`,s++)),o.main.add(S`
    vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
    float r2 = dot(vOffset, vOffset);

    if (r2 > 0.25) {
      discard;
    }
    calculateOcclusionAndOutputHighlight();
    ${x(i,`fragColor = vec4(vColor, 1.0);\n      ${x(e.hasEmission,`fragEmission = vec4(vec3(0.0), 1.0);`)}`)}
  `),n}function K(e){return e?256:64}var q,J,Y,X,Z,Q,$=e((()=>{n(),m(),s(),i(),v(),h(),o(),l(),y(),N(),U(),B(),A(),V(),w(),C(),I(),R(),O(),D(),q=class extends k{constructor(){super(...arguments),this.clipBox=d(u),this.useFixedSizes=!1,this.useRealWorldSymbolSizes=!1,this.scaleFactor=1,this.minSizePx=0,this.size=0,this.sizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}},J=class extends P{constructor(e,t,n){super(e),this.origin=e,this.isLeaf=t,this.splatSize=n}},Y=c(),X=a(),Z=_(),Q=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:J,PointRendererPassParameters:q,build:G,getMaxPointSizeScreenspace:K},Symbol.toStringTag,{value:`Module`}))}));export{q as a,$ as i,K as n,G as o,J as r,Q as t};