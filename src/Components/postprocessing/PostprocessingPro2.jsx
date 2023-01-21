import {
  Box,
  Text,
  Image,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import "./Postprocessing.css";
import SecondTester from "./Static/second.png";
import Alex from "./Static/Alex.png";
import PostEffectComposer from "./EffectComposer";

const PostprocessingPro2 = () => {
  const charState = useState(0);
  const Loader = () => {
    const loaderRef = useRef();
    return <group ref={loaderRef}></group>;
  };
  const characters = [
    {
      mugshot: SecondTester,
      id: "14M-RFT13",
      name: "Irina1",
      class: "Human",
      occupation: "Agent",
      employer: "erebus",
      bio: `They are fluent in 6 languages and are proficient in handling all types of weapons. They seem to enjoy playing Tetris, however their physical health appears to be not so good, separate from their physical abilities. Beyond that, nothing else is known`,
    },
  ];
  return (
    <>
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Image
          url={characters[0].mugshot}
          scale={[2, 4]}
          position={[3, -7, 0]}
        />
        <Text position={[-2, -5, 0]} fontSize={0.2} anchorX="left">
          {characters[0].name}
        </Text>
        <Text position={[-2, -5.4, 0]} fontSize={0.17} anchorX="left">
          Classification: {characters[0].class}
        </Text>
        <Text position={[-2, -5.8, 0]} fontSize={0.17} anchorX="left">
          Employer: {characters[0].employer}
        </Text>
        <Text position={[-2, -6.2, 0]} fontSize={0.17} anchorX="left">
          occupation: {characters[0].occupation}
        </Text>
        <Text
          position={[-2, -6.6, 0]}
          fontSize={0.17}
          anchorX="left"
          anchorY="top"
          maxWidth={3}
        >
          {characters[0].bio}
        </Text>
        <Text position={[-2, -8.3, 0]} fontSize={0.2} anchorX="left">
          Index Key
        </Text>
        <Text
          position={[-2, -8.5, 0]}
          fontSize={0.14}
          anchorX="left"
          color="red"
        >
          {characters[0].id}
        </Text>
      </Suspense>
    </>
  );
};

export default PostprocessingPro2;
