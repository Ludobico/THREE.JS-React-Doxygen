import { Canvas } from "@react-three/fiber";
import React from "react";
import RunCanvas from "./RunCanvas";

const Runmain = () => {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true }}>
      <color attach="background" args={["#15151a"]} />
      <RunCanvas />
    </Canvas>
  );
};

export default Runmain;
