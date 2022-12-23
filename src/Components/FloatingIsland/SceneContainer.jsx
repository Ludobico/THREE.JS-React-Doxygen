import React from "react";
import { Float, OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./SceneContainer.css";
import FloatingIsland from "./FloatingIsland";
import Rocks from "./Rocks";
import Portal from "./Portal";
import FloatingRocks from "./FloatingRocks";
import Trees from "./Trees";
import Grass from "./Grass";

/**
 * @author Ludobico <aqs450@gmail.com>
 * @copyright Floating portals with React Three Fiber and Three.js
 * @description 컴포넌트에서 불러온 모델들을 Scene으로 불러와주는 컴포넌트
 * @error Enviroment 컴포넌트의 텍스쳐모델들은 모드 public에 들어있어야함, 또한 HDR확장자가 아닌경우 에러메세지 출력
 */

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
          <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
            <FloatingIsland />
            <Rocks />
            <Portal />
            <FloatingRocks />
            <Trees />
            <Grass />
          </Float>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SceneContainer;
