import{n as e}from"./chunk.js";import{A as t,P as n}from"./promiseUtils.js";import{g as r,h as i,s as a}from"./enums.js";import{n as o,r as s}from"./FramebufferObject.js";import{l as c,n as l,t as u,u as d}from"./Texture.js";import{n as f,t as p}from"./VertexArrayObject.js";import{n as m,t as h}from"./VertexBuffer.js";import{i as g,n as _,t as v}from"./VertexAttributeLayouts.js";var y,b=e((()=>{t(),y=class{constructor(){this._result=!1}dispose(){this._program=n(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}})),x,S,C=e((()=>{r(),o(),l(),d(),f(),_(),h(),b(),x=class extends y{constructor(e){super(),this._rctx=e,this._program=e.programCache.acquire(`
    precision highp float;

    attribute vec2 position;
    varying vec2 v_uv;

    void main() {
      v_uv = position;
      gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
    }
    `,`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `,v)}dispose(){super.dispose()}_test(e){let t=this._rctx;if(!t.gl)return e.dispose(),!0;let n=new c(1);n.wrapMode=33071,n.samplingMode=9728;let r=new s(t,n),o=new p(t,new m(t,g,new Uint16Array([0,0,1,0,0,1,1,1]))),l=new c;l.samplingMode=9729,l.wrapMode=33071;let d=new u(t,l,S);t.useProgram(e),t.bindTexture(d,0),e.setUniform1i(`u_texture`,0);let f=t.getBoundFramebufferObject(),{x:h,y:_,width:v,height:y}=t.getViewport();t.bindFramebuffer(r),t.setViewport(0,0,1,1),t.setClearColor(0,0,0,0),t.setBlendingEnabled(!1),t.clear(16384),t.bindVAO(o),t.drawArrays(i.TRIANGLE_STRIP,0,4);let b=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,a.UNSIGNED_BYTE,b),o.dispose(),r.dispose(),d.dispose(),t.setViewport(h,_,v,y),t.bindFramebuffer(f),b[0]!==255}},S=new Image,S.src=`data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A`,S.width=5,S.height=5,S.decode()}));function w(e,t){if(t.disjointTimerQuery)return null;let n=e.getExtension(`EXT_disjoint_timer_query_webgl2`);return n?new T(()=>e.createQuery(),t=>{e.deleteQuery(t),E=!1},t=>e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE),t=>e.getQueryParameter(t,e.QUERY_RESULT),()=>e.getParameter(n.GPU_DISJOINT_EXT),t=>{E||(E=!0,e.beginQuery(n.TIME_ELAPSED_EXT,t))},()=>{e.endQuery(n.TIME_ELAPSED_EXT),E=!1},e=>n.queryCounterEXT(e,n.TIMESTAMP_EXT),()=>e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)):(n=e.getExtension(`EXT_disjoint_timer_query`),n?new T(()=>n.createQueryEXT(),e=>{n.deleteQueryEXT(e),E=!1},e=>n.getQueryObjectEXT(e,n.QUERY_RESULT_AVAILABLE_EXT),e=>n.getQueryObjectEXT(e,n.QUERY_RESULT_EXT),()=>e.getParameter(n.GPU_DISJOINT_EXT),e=>{E||(E=!0,n.beginQueryEXT(n.TIME_ELAPSED_EXT,e))},()=>{n.endQueryEXT(n.TIME_ELAPSED_EXT),E=!1},e=>n.queryCounterEXT(e,n.TIMESTAMP_EXT),()=>n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)):null)}var T,E,D=e((()=>{T=class{constructor(e,t,n,r,i,a,o,s,c){this.createQuery=e,this.deleteQuery=t,this.resultAvailable=n,this.getResult=r,this.disjoint=i,this.beginTimeElapsed=a,this.endTimeElapsed=o,this.createTimestamp=s,this.timestampBits=c}},E=!1}));export{x as a,C as i,D as n,b as o,w as r,y as s,E as t};