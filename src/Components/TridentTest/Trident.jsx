import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { MeshPhongMaterial, SpotLightHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  // const computer = useGLTF("./testModel.glb");
  const gltf = useLoader(GLTFLoader, "texture/model/untitled.glb");
  console.log(gltf);
  useEffect(() => {
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        // console.log(node);
        node.castShadow = true;
        // node.receiveShadow = true;
      }
    });
  }, []);

  return (
    <>
      <mesh receiveShadow>
        <primitive
          object={gltf.scene}
          scale={isMobile ? 0.6 : 0.7}
          position={isMobile ? [0, -0, -1.7] : [0, -3.5, -1.5]}
          rotation={[-0.01, -0.2, -0.05]}
        />
      </mesh>
    </>
  );
};

const Ground = () => {
  return (
    <mesh position={[0, -4, -1.7]} rotation-x={-Math.PI * 0.5} receiveShadow>
      <meshPhongMaterial
        attach="material"
        reflectivity={1}
        receiveShadow
        // color={0xffffff}
        // emissive="white"
        // shininess={100}
        transparent={true}
        opacity={1}
      />
      {/* <planeGeometry args={[20, 20, 20]} receiveShadow /> */}
      <circleGeometry args={[20, 20, 20]} receiveShadow />
    </mesh>
  );
};

const Light = () => {
  const spotlightref = useRef();
  useHelper(spotlightref, SpotLightHelper, "red");
  return (
    <mesh castShadow>
      <spotLight
        position={[0, 20, 10]}
        angle={0.1}
        penumbra={1}
        intensity={10}
        color={0xffffff}
        castShadow
        shadow-mapSize={1024}
        ref={spotlightref}
      />
      {/* <directionalLight position={[0, 20, 20]} /> */}
    </mesh>
  );
};
const Trident = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        // 특정한 최적화 수행을 막지만 WebGL이 캔버스를 지우지 않도록 하는 작업
      >
        <OrbitControls
          // enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
          autoRotate
        />
        <Computers isMobile={isMobile} />
        <Ground />
        <Light />
      </Canvas>
    </>
  );
};

export default Trident;
