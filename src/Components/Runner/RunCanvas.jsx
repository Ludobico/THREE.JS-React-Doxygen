import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Runner = () => {
  const gltf = useLoader(GLTFLoader, "/texture/model/FastRun.glb");
  return <primitive object={gltf.scene} />;
};

const Ringmesh = () => {
  return (
    <>
      <mesh scale={4} position={[3, -1.161, -6.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringBufferGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[-3, -1.161, -5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringBufferGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
    </>
  );
};

const RunCanvas = () => {
  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      <PerspectiveCamera makeDefault />
      <Ringmesh />
    </>
  );
};

export default RunCanvas;
