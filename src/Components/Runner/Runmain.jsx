import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import RunCanvas from "./RunCanvas";
import Loader from "./Loader";

const Runmain = () => {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true }} shadows>
      <Suspense fallback={<Loader />}>
        <color attach="background" args={["#15151a"]} />
        <RunCanvas />
      </Suspense>
    </Canvas>
  );
};

export default Runmain;
