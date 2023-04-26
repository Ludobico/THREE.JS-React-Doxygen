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
  useEffect(() => {
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        // console.log(node.geometry.attributes.position.array);
        const vertices = node.geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
          var point = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]);
          Points.push(point);
        }
      }
    });
  });

  useFrame(() => {
    positions = new Float32Array(Points.length * 3);
    for (let i = 0; i < Points.length; i++) {
      positions[i * 3] = Points[i].x;
      positions[i * 3 + 1] = Points[i].y;
      positions[i * 3 + 2] = Points[i].z;
    }
    // const time = Date.now() * 0.001;
    // for (let i; i < Points.length; i++) {
    //   var fpoint = Points[i];
    //   fpoint.x = Math.sin(time + i * 0.5) * 10;
    //   fpoint.y = Math.cos(time + i * 0.3) * 10;
    //   fpoint.z = Math.sin(time + i * 0.7) * 10;
    // }
    // ref.current.geometry.attributes.position.needUpdate = true;
    ref.current.needsUpdate = true;
    // console.log(ref.current.geometry.attributes.position);
    // console.log(ref.current);
    // console.log(Points.length);
    // console.log(positions);
  });

  //   useEffect(() => {
  //     action = mixer.clipAction(gltf.animations[0]);
  //     action.play();
  //   }, [action]);

  //   useFrame((state, delta) => {
  //     mixer.update(delta);
  //   });

  return (
    // <mesh position={[0, -1.161, 0]} receiveShadow>
    //   <primitive object={gltf.scene} scale={1.7} />
    // </mesh>
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" ref={ref} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.5} color={0x00aaff} sizeAttenuation transparent={false} alphaTest={0.5} opacity={1.0} />
    </points>
  );
};

const Light = () => {
  return (
    <>
      <spotLight intensity={2.5} color={"#FF7F27"} position={[0, 3.95, 6.46]} rotation-x={-6.12} angle={1.6} penumbra={0.5} castShadow />
    </>
  );
};
const DPmodel = () => {
  const deg2rad = (degrees) => degrees * (Math.PI / 180);
  const aspect_ratio = window.innerWidth / window.innerHeight;
  const cameraRef = useRef();
  const cameraHandler = () => {
    console.log(cameraRef.current);
  };
  return (
    <>
      <directionalLight intensity={1} />
      <OrbitControls enableRotate={true} />
      {/* <PerspectiveCamera makeDefault aspect={aspect_ratio} castShadow={true} far={1000} focus={10} fov={75} near={0.1} position={[2.9, 2.66, 3.07]} rotation={[-0.71, 0.62, 0.46]} /> */}
      <Light />
      <Runner />
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

export default DPmodel;
