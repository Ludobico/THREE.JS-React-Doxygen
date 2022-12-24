import React from "react";
import { useEffect, useRef } from "react";
import { EqualStencilFunc } from "three";

const FillQuad = ({ map, maskId }) => {
  const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

  const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D map;
  void main() {
    vec3 col = texture2D(map, vUv).xyz;
    gl_FragColor = vec4(pow(col, vec3(1.75)) * 2.5, 1.0);
  }
`;

  const uniforms = {
    map: { type: "t", value: null },
  };

  const materialProperties = {
    uniforms,
    vertexShader,
    fragmentShader,
    deptWrite: false,
    stencilWrite: true,
    stencilFunc: EqualStencilFunc,
  };
  const materialRef = useRef();
  useEffect(() => {
    materialRef.current.uniforms.map.value = map;
  }, [map]);
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        {...materialProperties}
        stencilRef={maskId}
      />
    </mesh>
  );
};

export default FillQuad;
