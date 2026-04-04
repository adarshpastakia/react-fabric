import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";function r(e,n){if(n.output!==9)return e.vertex.code.add(t`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(t`void outputObjectAndLayerIdColor() {}`);let r=n.instanced;e.varyings.add(`objectAndLayerIdColorVarying`,`vec4`);let i=r?`instanceOlidColor`:`olidColor`;e.attributes.add(i,`vec4`),e.vertex.code.add(t`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${i} * 0.003921568627451;
    }`),e.fragment.code.add(t`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}var i=e((()=>{n()}));export{i as n,r as t};