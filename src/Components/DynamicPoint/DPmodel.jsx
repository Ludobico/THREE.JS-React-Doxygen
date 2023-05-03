import { Environment, Lightformer, MeshReflectorMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
const Runner = () => {
  let mixer = null;
  let action = null;
  const gltf = useLoader(GLTFLoader, "/texture/model/FastRun.glb");
  mixer = new THREE.AnimationMixer(gltf.scene);

  const ref = useRef();
  let Points = [];
  let positions = new Float32Array(Points.length * 3);
  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      // console.log(node.geometry.attributes.position.array);
      let vertices = node.geometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i += 3) {
        var point = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]);
        Points.push(point);
      }
    }
  });
  positions = new Float32Array(Points.length * 3);

  useFrame(() => {
    const positions = ref.current.array;
    for (let i = 0; i < Points.length; i++) {
      positions[i * 3] = Points[i].x;
      positions[i * 3 + 1] = Points[i].y;
      positions[i * 3 + 2] = Points[i].z;
    }
    ref.current.needsUpdate = true;
  });

  // useEffect(() => {
  //   action = mixer.clipAction(gltf.animations[0]);
  //   action.play();
  // }, [action]);

  // useFrame((state, delta) => {
  //   mixer.update(delta);
  // });

  return (
    <>
      {/* <mesh position={[0, 0, 0]} receiveShadow>
        <primitive object={gltf.scene} scale={1.7} />
      </mesh> */}
      <points position={[0, 0, 0]}>
        <bufferGeometry attach="geometry">
          <bufferAttribute attach="attributes-position" itemSize={3} array={positions} ref={ref} count={positions.length / 3} />
        </bufferGeometry>
        <pointsMaterial attach="material" color={0x00aaff} size={0.003} sizeAttenuation transparent={false} alphaTest={0.5} opacity={1.0} />
      </points>
    </>
  );
};

const Light = () => {
  return (
    <>
      <ambientLight intensity={1} color={0xffffff} />
      <spotLight intensity={2.5} color={"#FF7F27"} position={[0, 3.95, 6.46]} rotation-x={-6.12} angle={1.6} penumbra={0.5} castShadow />
    </>
  );
};
const DPmodel = () => {
  const aspect_ratio = window.innerWidth / window.innerHeight;
  const cameraRef = useRef();
  return (
    <>
      <directionalLight intensity={5} />
      <OrbitControls enableRotate={true} />
      {/* <PerspectiveCamera makeDefault aspect={aspect_ratio} castShadow={true} far={1000} focus={10} fov={75} near={0.1} position={[2.9, 2.66, 3.07]} rotation={[-0.71, 0.62, 0.46]} /> */}
      <Light />
      <Runner />
    </>
  );
};

export default DPmodel;
