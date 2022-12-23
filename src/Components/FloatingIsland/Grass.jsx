import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Color, DoubleSide } from "three";
import { useEffect } from "react";

const Grass = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "texture/model/grass.glb"
  );

  useEffect(() => {
    if (!gltf) return;

    gltf.scene.children[0].material.alphaToCoverage = true;
    gltf.scene.children[0].material.transparent = true;
    gltf.scene.children[0].material.map =
      gltf.scene.children[0].material.emissiveMap;
    gltf.scene.children[0].material.side = DoubleSide;
    gltf.scene.children[0].material.emissive = new Color(0.5, 0.5, 0.5);
  }, [gltf]);
  return <primitive object={gltf.scene} />;
};

export default Grass;
