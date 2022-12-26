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
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import {
  BrightnessContrast,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  GodRays,
  HueSaturation,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import SceneParticles from "./SceneParticles";

/**
 * @author Ludobico <aqs450@gmail.com>
 * @copyright Floating portals with React Three Fiber and Three.js
 * @description 컴포넌트에서 불러온 모델들을 Scene으로 불러와주는 컴포넌트
 * @error Enviroment 컴포넌트의 텍스쳐모델들은 모드 public에 들어있어야함, 또한 HDR확장자가 아닌경우 에러메세지 출력
 */

const SceneContainer = () => {
  let mesh = new Mesh(
    new CylinderGeometry(0.3, 0.3, 0.2, 20),
    new MeshBasicMaterial({
      color: new Color(1, 0.2, 0.1),
      transparent: true,
      opacity: 1,
    })
  );
  mesh.rotation.x = Math.Pi * 0.5;
  mesh.position.set(1.17, 10.7, -4.1);
  mesh.scale.set(1.5, 1, 1);
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
            <primitive object={mesh} />
            <spotLight
              penumbra={1}
              distance={500}
              angle={60.65}
              anglepower={3}
              intensity={1.5}
              color={new Color(1, 0.2, 0.1)}
              position={[1.19, 10.85, -4.45]}
            />
            <FloatingIsland />
            <Rocks />
            <Portal />
            <Trees />
            <Grass />
            <SceneParticles />
          </Float>
          <FloatingRocks />
          <EffectComposer stencilBuffer={true}>
            {/* <DepthOfField
              focusDistance={0.012}
              focalLength={0.015}
              bokehScale={7}
            /> */}
            <HueSaturation hue={0} saturation={-0.15} />
            <BrightnessContrast brightness={0.0} contrast={0.035} />
            <ChromaticAberration offset={[0.00175, 0.00175]} />
            <GodRays
              sun={mesh}
              blendFunction={BlendFunction.SCREEN}
              samples={40}
              density={0.97}
              decay={0.97}
              weight={0.6}
              exposure={0.3}
              clampMax={1}
              kernelSize={KernelSize.SMALL}
              blur={true}
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SceneContainer;
