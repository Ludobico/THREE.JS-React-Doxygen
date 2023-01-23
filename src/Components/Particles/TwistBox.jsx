import React, { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";

const TwistBox = () => {
  const mesh = useRef();
  const quaternion = new Quaternion();

  useEffect(() => {
    const currentPositions = mesh.current.geometry.attributes.position;

    const originalPositions = currentPositions.clone();
    const originalPositionsArray = originalPositions?.array || [];

    for (let i = 0; i < originalPositionsArray.length; i = i + 3) {
      const modifiedPositionVector = new Vector3(
        originalPositionsArray[i],
        originalPositionsArray[i + 1],
        originalPositionsArray[i + 3]
      );
      const upVector = new Vector3(0, 1, 0);

      quaternion.setFromAxisAngle(
        upVector,
        (Math.PI / 180) * (modifiedPositionVector.y + 10) * 100
      );
      modifiedPositionVector.applyQuaternion(quaternion);

      currentPositions.array[i] = modifiedPositionVector.x;
      currentPositions.array[i + 1] = modifiedPositionVector.y;
      currentPositions.array[i + 2] = modifiedPositionVector.z;
    }
    currentPositions.needsUpdate = true;
  }, []);
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1, 10, 10, 10]} />
      <meshLambertMaterial color="hotpink" emissive="hotpink" />
    </mesh>
  );
};

export default TwistBox;
