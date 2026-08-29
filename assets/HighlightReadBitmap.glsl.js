import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";function r(e){let{fragment:n}=e;n.code.add(t`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(uvec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return texel[lic];
}
uint readLevelBits(uvec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}function i(){return(i=e((()=>{n()})))()}export{r as n,i as t};