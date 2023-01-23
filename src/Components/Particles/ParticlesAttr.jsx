import React, { useEffect, useRef } from "react";

const Particles = () => {
  const mesh = useRef();

  useEffect(() => {
    console.log(mesh.current.geometry.attributes);
  }, []);
  return <mesh ref={mesh}></mesh>;
};

export default Particles;
