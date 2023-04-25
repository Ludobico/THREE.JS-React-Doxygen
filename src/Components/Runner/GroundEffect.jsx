import { Box, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const GroundEffect = () => {
  const rain_count = 500;
  const rain_geometry = new THREE.BufferGeometry();

  const rainPositions = new Float32Array(rain_count * 3);

  for (let i = 0; i < rain_count; i++) {
    rainPositions[i * 3] = Math.random() * 400 - 200;
    rainPositions[i * 3 + 1] = Math.random() * 500 - 250;
    rainPositions[i * 3 + 2] = Math.random() * 400 - 200;
  }

  rain_geometry.setAttribute("position", new THREE.BufferAttribute(rainPositions, 3));

  return (
    <points>
      <bufferGeometry attach="geometry" {...rain_geometry} />
      <pointsMaterial attach="material" size={1} sizeAttenuation color="#ffffff" fog={false} />
    </points>
  );
};

export default GroundEffect;
