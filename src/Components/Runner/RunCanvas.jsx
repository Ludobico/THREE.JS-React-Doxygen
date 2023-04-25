import { Environment, Lightformer, MeshReflectorMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import GroundEffect from "./GroundEffect";

const Runner = () => {
  let mixer = null;
  let action = null;
  const gltf = useLoader(GLTFLoader, "/texture/model/FastRun.glb");
  mixer = new THREE.AnimationMixer(gltf.scene);
  useEffect(() => {
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
      }
    });
  }, []);

  useEffect(() => {
    action = mixer.clipAction(gltf.animations[0]);
    action.play();
  }, [action]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh position={[0, -1.161, 0]} receiveShadow>
      <primitive object={gltf.scene} scale={1.7} />
    </mesh>
  );
};

const Ringmesh = () => {
  return (
    <>
      <mesh scale={4} position={[3, -1.161, -2.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringBufferGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringBufferGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
    </>
  );
};

const Light = () => {
  return (
    <>
      <spotLight intensity={2.5} color={"#FF7F27"} position={[0, 3.95, 6.46]} rotation-x={-6.12} angle={1.6} penumbra={0.5} castShadow />
    </>
  );
};

const RunCanvas = () => {
  const deg2rad = (degrees) => degrees * (Math.PI / 180);
  const aspect_ratio = window.innerWidth / window.innerHeight;
  const cameraRef = useRef();
  const cameraHandler = () => {
    console.log(cameraRef.current);
  };
  return (
    <>
      {/* <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} ref={cameraRef} onChange={cameraHandler} /> */}
      <directionalLight intensity={1} />
      <PerspectiveCamera makeDefault aspect={aspect_ratio} castShadow={true} far={1000} focus={10} fov={75} near={0.1} position={[2.9, 2.66, 3.07]} rotation={[-0.71, 0.62, 0.46]} />
      {/* <Ringmesh /> */}
      <Light />
      {/* <Floor /> */}
      <Runner />
      <GroundEffect />
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
    </>
  );
};

export default RunCanvas;
