import React from "react";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Portal = () => {
  const model = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "texture/model/portal.glb"
  );
  const mask = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "texture/model/portal_mask.glb"
  );

  useEffect(() => {
    if (!model) return;

    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = model.scene.children[0];
    maskMesh.material.side = DoubleSide;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
    </>
  );
};

export default Portal;
