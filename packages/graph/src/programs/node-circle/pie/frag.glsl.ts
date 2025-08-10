/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
precision highp float;

varying vec4 v_color;
${Array(10)
  .fill(0)
  .map((_, idx) => "varying vec4 v_colors_" + idx + ";")
  .join("\n")}
varying vec2 v_diffVector;
varying float v_radius;
varying float v_segmentAngle;
varying float v_opacity;

uniform float u_correctionRatio;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float border = u_correctionRatio * 2.0;
  float dist = length(v_diffVector) - v_radius + border;

  float angle = atan(v_diffVector.y / v_diffVector.x);
  if (v_diffVector.x < 0.0 && v_diffVector.y < 0.0) angle += ${Math.PI};
  else if (v_diffVector.x < 0.0) angle += ${Math.PI};
  else if (v_diffVector.y < 0.0) angle += ${2 * Math.PI};

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
    if (dist > border)
      gl_FragColor = transparent;
    else
      gl_FragColor = v_color;
  #else
    float t = 0.0;
    vec4 color = transparent;
    if(v_segmentAngle > 0.0) {
      float segment = angle / v_segmentAngle;
      ${Array(10)
        .fill(0)
        .map(
          (_, idx) =>
            "if(segment >= " + idx + ".0) { color = v_colors_" + idx + "; }",
        )
        .join("\n")}
    }
    color = mix(transparent, color, v_opacity);
    if (dist > border)
      gl_FragColor = transparent;
    else if (dist > 0.0) {
      t = dist / border;
      gl_FragColor = mix(color, transparent, t);
    }
    else {
      gl_FragColor = color;
    }
  #endif
}
`;

export default SHADER_SOURCE;
