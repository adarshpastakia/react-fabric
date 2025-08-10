/* istanbul ignore file */

// language=GLSL
const VERTEX_SHADER_SOURCE = /* glsl */ `
attribute vec4 a_id;
attribute vec4 a_fill;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;
attribute float a_colorMode;
attribute float a_opacity;
attribute vec4 a_texture;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_fill;
varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying float v_opacity;
varying vec4 v_texture;
varying float v_colorMode;

const float bias = 255.0 / 254.0;
const float marginRatio = 1.05;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector * marginRatio;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0 / marginRatio;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_fill = vec4(0.0, 0.0, 0.0, 0.0);
  v_color = vec4(a_color.rgb, a_opacity * bias);
  v_opacity = a_opacity;
  v_colorMode = a_colorMode;
  // Pass the texture coordinates:
  v_texture = a_texture;
  #endif
}
`;

export default VERTEX_SHADER_SOURCE;
