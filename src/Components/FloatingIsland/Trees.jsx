import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";

const Trees = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "texture/model/trees.glb"
  );
  useEffect(() => {
    if (!gltf) return;

    let mesh = gltf.scene.children[0];
    mesh.material.envMapIntensity = 2.5;
  }, [gltf]);
  return <primitive object={gltf.scene} />;
};

export default Trees;
