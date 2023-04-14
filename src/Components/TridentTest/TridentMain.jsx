import { Canvas } from "@react-three/fiber";
import React from "react";
import Trident from "./Trident";
import "./Trident.css";

const TridentMain = () => {
  return (
    <Canvas>
      <Trident />
    </Canvas>
  );
};

export default TridentMain;
