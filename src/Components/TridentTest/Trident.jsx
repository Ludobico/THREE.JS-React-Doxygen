import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Gltfmodel = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "texture/model/trident.glb");
  console.log(gltf);
  return <primitive object={gltf.scene} scale={1.0} />;
};

const Scene = () => {
  <>
    <OrbitControls />
    <directionalLight intensity={1.2} color={0xffffff} castShadow />
    <Gltfmodel />
  </>;
};
const Trident = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default Trident;
