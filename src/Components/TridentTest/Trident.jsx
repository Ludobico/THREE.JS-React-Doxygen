import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  // const computer = useGLTF("./testModel.glb");
  const gltf = useLoader(GLTFLoader, "/untitled.glb");

  return (
    <mesh>
      <hemisphereLight intensity={10.15} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={gltf.scene}
        scale={isMobile ? 0.6 : 0.7}
        position={isMobile ? [0, -3, -1.7] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.05]}
      />
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
      />
      <Computers isMobile={isMobile} />
    </Canvas>
  );
};

export default Trident;
