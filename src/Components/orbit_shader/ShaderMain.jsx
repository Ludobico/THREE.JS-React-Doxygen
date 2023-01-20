import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import state from "./store";

const ShaderMain = () => {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas orthographic>{/* 컴포넌트 들어갈곳 */}</Canvas>
      <div ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
};

export default ShaderMain;
