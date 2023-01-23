import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import TwistBox from "./TwistBox";

const ParticleMain = () => {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-1, 2, 2]} intensity={4} />
      <TwistBox />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default ParticleMain;
