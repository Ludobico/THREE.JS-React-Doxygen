import React, { Suspense } from "react";
import DPmodel from "./DPmodel";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";
import DPmodel_mixer from "./DPmodel_mixer";
import DPtest from "./DPtest";

const DPmain = () => {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true }} shadows>
      <Suspense fallback={<Loader />}>
        <color attach="background" args={["#15151a"]} />
        <DPtest />
      </Suspense>
    </Canvas>
  );
};

export default DPmain;
