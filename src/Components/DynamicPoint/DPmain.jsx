import React, { Suspense } from "react";
import DPmodel from "./DPmodel";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";

const DPmain = () => {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true, autoClear: false }} shadows>
      <Suspense fallback={<Loader />}>
        <color attach="background" args={["#15151a"]} />
        <DPmodel />
      </Suspense>
    </Canvas>
  );
};

export default DPmain;
