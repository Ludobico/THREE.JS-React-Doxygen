import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./Postprocessing.css";
import PostprocessingPro1 from "./PostprocessingPro1";
import PostprocessingPro2 from "./PostprocessingPro2";
import PostEffectComposer from "./EffectComposer";

const PostprocessingMain = () => {
  return (
    <div className="postcanvas">
      <Canvas>
        <ScrollControls pages={2} distance={0.05}>
          <Scroll>
            <PostEffectComposer />
            <PostprocessingPro1 />
          </Scroll>
          <Scroll>
            <PostprocessingPro2 />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default PostprocessingMain;
