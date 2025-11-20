/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
precision mediump float;

varying vec4 v_color;
varying float v_opacity;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  gl_FragColor = v_color;
  gl_FragColor = mix(transparent, gl_FragColor, v_opacity);
}
`;

export default SHADER_SOURCE;
