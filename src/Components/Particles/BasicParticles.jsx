import React from "react";
import { useRef } from "react";

const BasicParticles = () => {
  const points = useRef();

  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
  );
};

export default BasicParticles;
