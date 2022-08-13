// @ts-nocheck
import { Mesh, MeshBasicMaterial, MeshPhongMaterial, Vector3 } from "three";
import { useSpring, animated } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import font from "./roboto.json";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const materials = [
  new MeshPhongMaterial({
    color: "#024769",
    shininess: 500,
    emissive: "black",
  }),
  new MeshBasicMaterial({ color: "#000" }),
];

const round = Math.PI * 2;

export default function Name({
  position = new Vector3(0, 0, 0),
}: {
  position?: Vector3;
}) {
  const textRef = useRef<Mesh>(null!);
  const size = useThree((state) => state.size);

  let textSize = 10;
  if (size.width < 640) {
    textSize = 3;
  } else if (size.width < 768) {
    textSize = 4;
  } else if (size.width < 1024) {
    textSize = 5;
  } else if (size.width < 1280) {
    textSize = 6;
  } else if (size.width < 1536) {
    textSize = 7;
  }

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, round, 0] },
    config: { duration: 10000 },
    loop: true,
  });

  useEffect(() => {
    textRef.current.geometry.computeBoundingBox();
    const offset =
      (textRef.current.geometry.boundingBox!.max.x -
        textRef.current.geometry.boundingBox!.min.x) /
      -2;
    textRef.current.position.set(offset, 0, 0);
  }, []);
  return (
    <animated.object3D position={position} castShadow rotation={rotation}>
      <Text3D
        font={font}
        bevelSegments={10}
        bevelEnabled
        bevelSize={0.5}
        bevelThickness={0.5}
        size={textSize}
        height={1}
        material={materials}
        ref={textRef}
        castShadow
      >
        Ernesto
      </Text3D>
    </animated.object3D>
  );
}
