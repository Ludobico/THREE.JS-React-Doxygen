import React from "react";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./SceneContainer.css";
import FloatingIsland from "./FloatingIsland";
import Rocks from "./Rocks";
import Portal from "./Portal";
import FloatingRocks from "./FloatingRocks";

const SceneContainer = () => {
  return (
    <div className="SC_Canvas">
      <Suspense fallback={null}>
        <Canvas>
          <Environment
            background={"only"}
            files={process.env.PUBLIC_URL + "texture/bg.hdr"}
          />
          <Environment
            background={false}
            files={process.env.PUBLIC_URL + "texture/envmap.hdr"}
          />

          <PerspectiveCamera
            makeDefault
            fov={50}
            position={[-1.75, 10.85, 20.35]}
          />
          <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
          <FloatingIsland />
          <Rocks />
          <Portal />
          <FloatingRocks />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SceneContainer;
