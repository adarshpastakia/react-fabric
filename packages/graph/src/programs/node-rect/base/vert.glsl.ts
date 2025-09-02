/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
attribute vec4 a_id;
attribute vec4 a_base;
attribute vec4 a_color;
attribute vec4 a_stroke;
attribute vec2 a_position;
attribute float a_size;
attribute float a_border;
attribute float a_angle;
attribute float a_opacity;
attribute float a_segments;
attribute vec4 a_colors_0;
attribute vec4 a_colors_1;
attribute vec4 a_colors_2;
attribute vec4 a_colors_3;
attribute vec4 a_colors_4;
attribute vec4 a_colors_5;
attribute vec4 a_colors_6;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_cameraAngle;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec4 v_stroke;
varying float v_border;
varying vec2 v_diffVector;
varying float v_segmentAngle;
varying vec4 v_colors_0;
varying vec4 v_colors_1;
varying vec4 v_colors_2;
varying vec4 v_colors_3;
varying vec4 v_colors_4;
varying vec4 v_colors_5;
varying vec4 v_colors_6;

const float bias = 255.0 / 254.0;
const float sqrt_8 = sqrt(8.0);

void main() {
  float angle = a_angle + u_cameraAngle; 

  float size = a_size * u_correctionRatio / u_sizeRatio * sqrt_8;
  vec2 diffVector = size * vec2(cos(angle), sin(angle));
  vec2 position = a_position + diffVector;

  float borderLessSize = (a_size - a_border) * u_correctionRatio / u_sizeRatio * sqrt_8;

  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_border = a_border * u_correctionRatio / u_sizeRatio * sqrt_8;
  v_border = borderLessSize / ${Math.PI / 2.2};

  #ifdef PICKING_MODE
    v_color = a_id;
  #else
    v_color = mix(a_base, a_color, a_opacity * bias);
    v_stroke = mix(a_base, a_stroke, a_opacity * bias);

    // pie colors
    v_segmentAngle = 0.0;
    if(a_segments > 0.0) {
      v_segmentAngle = ${Math.PI * 2} / a_segments;
      v_colors_0 = mix(a_base, a_colors_0, a_opacity * bias);
      v_colors_1 = mix(a_base, a_colors_1, a_opacity * bias);
      v_colors_2 = mix(a_base, a_colors_2, a_opacity * bias);
      v_colors_3 = mix(a_base, a_colors_3, a_opacity * bias);
      v_colors_4 = mix(a_base, a_colors_4, a_opacity * bias);
      v_colors_5 = mix(a_base, a_colors_5, a_opacity * bias);
      v_colors_6 = mix(a_base, a_colors_6, a_opacity * bias);
    }
  #endif

  v_color.a *= bias;
}
`;

export default SHADER_SOURCE;
