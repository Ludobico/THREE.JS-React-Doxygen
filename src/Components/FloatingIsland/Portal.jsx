import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import {
  AlwaysStencilFunc,
  DoubleSide,
  EquirectangularRefractionMapping,
  LinearEncoding,
  ReplaceStencilOp,
  Scene,
  TextureLoader,
  WebGLRenderTarget,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import FillQuad from "./FillQuad";

const Portal = () => {
  const scene = new Scene();
  scene.background = new TextureLoader().load(
    process.env.PUBLIC_URL + "texture/galaxy.jpg",
    (texture) => {
      texture.encoding = LinearEncoding;
      texture.mapping = EquirectangularRefractionMapping;
    }
  );

  const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight);

  window.addEventListener("resize", () => {
    target.setSize(window.innerWidth, window.innerHeight);
  });

  const model = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "texture/model/portal.glb"
  );

  const mask = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "texture/model/portal_mask.glb"
  );

  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  useEffect(() => {
    if (!model) return;

    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];
    maskMesh.material.transparent = false;
    maskMesh.material.side = DoubleSide;
    maskMesh.material.stencilFunc = AlwaysStencilFunc;
    maskMesh.material.stencilWrite = true;
    maskMesh.material.stencilRef = 1;
    maskMesh.material.stencilZPass = ReplaceStencilOp;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
      <FillQuad map={target.texture} maskId={1} />
    </>
  );
};

export default Portal;
