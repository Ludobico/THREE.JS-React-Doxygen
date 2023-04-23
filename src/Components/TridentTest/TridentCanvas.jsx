import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  BakeShadows,
  ContactShadows,
  Environment,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper, SpotLightHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import TridentModel from "./TridentModel";

const Light = () => {
  const lightRef = useRef();
  const spotlightref = useRef();
  useHelper(lightRef, DirectionalLightHelper, "red");
  useHelper(spotlightref, SpotLightHelper, "red");

  return (
    <mesh>
      <directionalLight
        intensity={1.5}
        position={[0, 100, 50]}
        ref={lightRef}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      {/* <spotLight
        position={[0, 100, 50]}
        angle={0.1}
        penumbra={1}
        intensity={10}
        color={0xffffff}
        castShadow
        shadow-mapSize={1024}
        ref={spotlightref}
      /> */}
      {/* <directionalLight intensity={1.5} position={[-20, -12, 0]} castShadow />
      <directionalLight intensity={1.5} position={[0, -5, -30]} castShadow />
      <directionalLight intensity={1.5} position={[0, -5, 30]} castShadow /> */}
    </mesh>
  );
};

function TridentCanvas() {
  return (
    // Auto Rotate View
    <Canvas
      style={{ height: "524px" }}
      frameloop="demand"
      camera={{ position: [200, 70, 0], fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
      shadows
    >
      <OrbitControls
        enableZoom={true}
        // 좌/우로만 회전할 수 있도록 고정시키는 방식
        maxPolarAngle={Math.PI / 2.3}
        minPolarAngle={Math.PI / 2.3}
        autoRotate={true}
        autoRotateSpeed={1}
        rotateSpeed={0.3}
        enablePan={false}
      />

      <Suspense>
        <mesh position={[0, 15, 0]} scale={1.2}>
          <Light />
          <TridentModel />
          <Environment preset="city" />
        </mesh>
      </Suspense>
    </Canvas>
  );
}

export default TridentCanvas;
