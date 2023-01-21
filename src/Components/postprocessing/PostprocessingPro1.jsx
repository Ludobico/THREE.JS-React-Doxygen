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
import FirstTester from "./Static/first.png";
import Alex from "./Static/Alex.png";
import PostEffectComposer from "./EffectComposer";

const PostprocessingPro1 = () => {
  const charState = useState(0);
  const Loader = () => {
    const loaderRef = useRef();
    return <group ref={loaderRef}></group>;
  };
  const characters = [
    {
      mugshot: FirstTester,
      id: "14M-RFT13",
      name: "Irina",
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
        <Text
          position={[0, 3, 0]}
          anchorX="center"
          anchorY="middle"
          textAlign="center"
          fontSize={0.4}
        >
          Profile
        </Text>
        <Image
          url={characters[0].mugshot}
          scale={[2, 4]}
          position={[3, 0, 0]}
        />
        <Text position={[-2, 2, 0]} fontSize={0.2} anchorX="left">
          {characters[0].name}
        </Text>
        <Text position={[-2, 1.6, 0]} fontSize={0.17} anchorX="left">
          Classification: {characters[0].class}
        </Text>
        <Text position={[-2, 1.2, 0]} fontSize={0.17} anchorX="left">
          Employer: {characters[0].employer}
        </Text>
        <Text position={[-2, 0.8, 0]} fontSize={0.17} anchorX="left">
          occupation: {characters[0].occupation}
        </Text>
        <Text
          position={[-2, 0.4, 0]}
          fontSize={0.17}
          anchorX="left"
          anchorY="top"
          maxWidth={3}
        >
          {characters[0].bio}
        </Text>
        <Text position={[-2, -1.3, 0]} fontSize={0.2} anchorX="left">
          Index Key
        </Text>
        <Text
          position={[-2, -1.5, 0]}
          fontSize={0.14}
          anchorX="left"
          color="red"
        >
          {characters[0].id}
        </Text>
        {/* <Text
          position={[-2, -3, 0]}
          fontSize={0.14}
          anchorX="left"
          anchorY="top"
          color="#39ff14"
        >
          MENU OPTIONS:
        </Text>
        <Text
          position={[0, -3, 0]}
          fontSize={0.14}
          anchorX="left"
          anchorY="top"
          color="#39ff14"
        >
          PREV
        </Text>
        <Text
          position={[1.5, -3, 0]}
          fontSize={0.14}
          anchorX="left"
          anchorY="top"
          color="#39ff14"
        >
          NEXT
        </Text> */}
        <PostEffectComposer />
      </Suspense>
    </>
  );
};

export default PostprocessingPro1;
