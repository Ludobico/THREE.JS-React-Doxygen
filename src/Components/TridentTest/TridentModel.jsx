import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
// import { useLoader } from "@react-three/fiber";
// import { Rhino3dmLoader } from "three-stdlib";

const TridentModel = () => {
  // const model = useLoader(Rhino3dmLoader, url, (loader) =>
  //   loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.0.0/")
  // );
  const model = useLoader(GLTFLoader, "texture/model/untitled.glb");

  useEffect(() => {
    model.scene.traverse((node) => {
      if (node.isMesh) {
        console.log(node);
        node.castShadow = true;
      }
    });
  }, []);

  return (
    <>
      <mesh receiveShadow>
        <primitive
          object={model.scene}
          scale={30}
          position={[0, -5, 0]}
          rotation={[0, 0.8, 0]}
        />
      </mesh>
      <mesh position={[0, -18, -1.7]} rotation-x={-Math.PI * 0.5} receiveShadow>
        <meshPhongMaterial
          attach="material"
          reflectivity={1}
          receiveShadow
          transparent={true}
          opacity={1}
        />
        <circleGeometry args={[60, 60, 60]} receiveShadow />
      </mesh>
    </>
  );
};

export default TridentModel;
