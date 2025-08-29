/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
precision highp float;

varying vec4 v_color;
varying vec4 v_stroke;
varying vec2 v_diffVector;
varying float v_border;
varying float v_segmentAngle;
varying vec4 v_colors_0;
varying vec4 v_colors_1;
varying vec4 v_colors_2;
varying vec4 v_colors_3;
varying vec4 v_colors_4;
varying vec4 v_colors_5;
varying vec4 v_colors_6;

uniform float u_sizeRatio;
uniform float u_correctionRatio;

void main(void) {
  float border = u_correctionRatio * 2.0;
  float dist = length(v_diffVector) + border;

  float angle = atan(v_diffVector.y / v_diffVector.x);
  if (v_diffVector.x < 0.0 && v_diffVector.y < 0.0) angle += ${Math.PI};
  else if (v_diffVector.x < 0.0) angle += ${Math.PI};
  else if (v_diffVector.y < 0.0) angle += ${2 * Math.PI};

  #ifdef PICKING_MODE
    gl_FragColor = v_color;
  #else
    vec4 color = v_color;
    vec4 piecolor = vec4(0.0);
    float pieSize = 4.0 * u_correctionRatio / u_sizeRatio * 4.0;
    
    if(v_segmentAngle > 0.0) {
      float segment = angle / v_segmentAngle;
      if(segment >= 0.0) { piecolor = v_colors_0; }
      if(segment >= 1.0) { piecolor = v_colors_1; }
      if(segment >= 2.0) { piecolor = v_colors_2; }
      if(segment >= 3.0) { piecolor = v_colors_3; }
      if(segment >= 4.0) { piecolor = v_colors_4; }
      if(segment >= 5.0) { piecolor = v_colors_5; }
      if(segment >= 6.0) { piecolor = v_colors_6; }
    }
    if(v_segmentAngle > 0.0) {
      float pieCheck = v_border - (pieSize / 2.0);
      if (v_diffVector.x > pieCheck || v_diffVector.y > pieCheck ||
        v_diffVector.x < -pieCheck || v_diffVector.y < -pieCheck) {
        color = piecolor;
      }
    }
    if(v_border > 0.0) {
      if (v_diffVector.x > v_border || v_diffVector.y > v_border ||
        v_diffVector.x < -v_border || v_diffVector.y < -v_border) {
        color = v_stroke;
      }
    }
    gl_FragColor = color;
  #endif
}
`;

export default SHADER_SOURCE;
