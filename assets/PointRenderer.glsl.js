import{n as e}from"./rolldown-runtime.js";import{t,y as n}from"./mathUtils.js";import{O as r,x as i}from"./vec2.js";import{l as a,o}from"./vec3f64.js";import{D as s,F as c}from"./vec3.js";import{n as l,t as u}from"./mat4f64.js";import{G as d,P as f,T as p}from"./aaBoundingBox.js";import{_ as m,j as h,w as g}from"./mat4.js";import{o as _,s as v}from"./vec2f64.js";import{n as y,r as b,t as x}from"./glsl.js";import{r as S,t as C}from"./NoParameters.js";import{n as w,t as T}from"./ShaderBuilder.js";import{n as E,t as D}from"./Float2DrawUniform.js";import{p as O}from"./ShaderOutput.js";import{a as k,n as A,r as j}from"./Slice.glsl.js";import{n as M,t as N}from"./Float3DrawUniform.js";import{n as P,t as F}from"./Matrix4BindUniform.js";import{n as I,t as L}from"./Matrix4DrawUniform.js";import{n as R,t as z}from"./PositionOutsideClipSpace.js";import{n as B,t as V}from"./Float2PassUniform.js";import{n as H,t as U}from"./OutputHighlight.glsl.js";function W(e){let n=new w,i=O(e.output),{attributes:a,vertex:o,fragment:s}=n;return a.add(`position`,`vec3`),a.add(`color`,`vec3`),o.include(A,e),o.uniforms.add(new I(`modelView`,(e,t)=>m(J,t.camera.viewMatrix,h(J,e.origin))),new P(`proj`,e=>e.camera.projectionMatrix),new D(`screenMinMaxSize`,(e,t,n)=>r(X,n.useFixedSizes?0:n.minSizePx*t.camera.pixelRatio,G(e.isLeaf)*t.camera.pixelRatio)),e.useFixedSizes?new V(`pointScale`,(e,t)=>r(X,e.fixedSize*t.camera.pixelRatio,t.camera.fullHeight)):new D(`pointScale`,(e,t,n)=>r(X,e.splatSize*n.scaleFactor*t.camera.pixelRatio,t.camera.fullHeight/t.camera.pixelRatio))),e.clippingEnabled?o.uniforms.add(new N(`clipMin`,(e,t,n)=>c(Y,n.clipBox[0]-e.origin[0],n.clipBox[1]-e.origin[1],n.clipBox[2]-e.origin[2])),new N(`clipMax`,(e,t,n)=>c(Y,n.clipBox[3]-e.origin[0],n.clipBox[4]-e.origin[1],n.clipBox[5]-e.origin[2]))):(o.constants.add(`clipMin`,`vec3`,[-t,-t,-t]),o.constants.add(`clipMax`,`vec3`,[t,t,t])),i&&n.varyings.add(`vColor`,`vec3`),o.main.add(b`
    // Move clipped points outside of clipspace
    if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
      position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
      gl_Position = ${R};
      gl_PointSize = 0.0;
      return;
    }

    if (rejectBySlice(position)) {
      gl_Position = ${R};
      gl_PointSize = 0.0;
      return;
    }

    // Position in camera space
    vec4 camera = modelView * vec4(position, 1.0);

    float pointSize = pointScale.x;
    vec4 position = proj * camera;
    ${e.drawScreenSize?b`float clampedScreenSize = pointSize;`:b`float pointRadius = 0.5 * pointSize;
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
    ${i?b`vColor = color;`:``}`),n.include(U,e),i&&(n.outputs.add(`fragColor`,`vec4`,0),e.hasEmission&&n.outputs.add(`fragEmission`,`vec4`,1)),s.main.add(b`
    vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
    float r2 = dot(vOffset, vOffset);

    if (r2 > 0.25) {
      discard;
    }
    calculateOcclusionAndOutputHighlight();
    ${y(i,`fragColor = vec4(vColor, 1.0);\n      ${y(e.hasEmission,`fragEmission = vec4(vec3(0.0), 1.0);`)}`)}
  `),n}function G(e){return e?256:64}var K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{n(),g(),l(),i(),_(),s(),o(),f(),k(),H(),z(),E(),B(),M(),x(),F(),L(),S(),T(),K=class extends C{constructor(){super(...arguments),this.clipBox=d(p),this.useFixedSizes=!1,this.useRealWorldSymbolSizes=!1,this.scaleFactor=1,this.minSizePx=0,this.size=0,this.sizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}},q=class extends j{constructor(e,t,n){super(e),this.origin=e,this.isLeaf=t,this.splatSize=n}},J=u(),Y=a(),X=v(),Z=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:q,PointRendererPassParameters:K,build:W,getMaxPointSizeScreenspace:G},Symbol.toStringTag,{value:`Module`}))})))()}export{K as a,Q as i,G as n,W as o,q as r,Z as t};