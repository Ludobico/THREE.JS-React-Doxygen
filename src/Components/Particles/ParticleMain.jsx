import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import TwistBox from "./TwistBox";
import "./ParticleMain.css";
import BasicParticles from "./BasicParticles";
import CustomGeometryParticles from "./CustomGeometryParticles";

const ParticleMain = () => {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-1, 2, 2]} intensity={4} />
      {/* step 1 */}
      {/* <TwistBox /> */}

      {/* step 2 */}
      {/* <BasicParticles /> */}

      {/* stel3 */}
      <CustomGeometryParticles count={2000} shape="sphere" />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default ParticleMain;
