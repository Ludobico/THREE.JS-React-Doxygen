import { useFrame } from "@react-three/fiber";
import React from "react";
import { useMemo } from "react";
import { useRef } from "react";
import * as THREE from "three";

import fragmentShader from "./FragmentShader";
import VertexShader from "./VertexShader";

const CustomGeometryParticles = (props) => {
  const { count, shape } = props;
  const radius = 2;

  const points = useRef();

  const ParticlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      const distance = 1;
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
    }),
    []
  );

  //   useFrame((state) => {
  //     const { clock } = state;

  //     for (let i = 0; i < count; i++) {
  //       const i3 = i * 3;

  //       points.current.geometry.attributes.position.array[i3] +=
  //         Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;

  //       points.current.geometry.attributes.position.array[i3 + 1] +=
  //         Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;

  //       points.current.geometry.attributes.position.array[i3 + 2] +=
  //         Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //     }

  //     points.current.geometry.attributes.position.needsUpdate = true;
  //   });
  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={ParticlesPosition.length / 3}
          array={ParticlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      {/* <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      /> */}
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={VertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default CustomGeometryParticles;
