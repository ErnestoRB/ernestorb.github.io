import { useSpring, animated as a } from "@react-spring/three";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMove } from "@use-gesture/react";
import { Vector3 } from "three";
import Name from "./Name";

const defaultPos = new Vector3(0, 0, 100);

const AnimatedCamera = a(PerspectiveCamera);

export default function NameCanvas() {
  const [{ position }, api] = useSpring(() => ({
    position: defaultPos.toArray(),
  }));

  const bind = useMove(
    ({ offset: [x, y] }) => {
      const newPos = new Vector3().copy(defaultPos);
      newPos.add(new Vector3(-x, y));
      api.start({ position: newPos.toArray() });
    },
    { bounds: { top: -3, left: -3, bottom: 3, right: 3 }, axis: "lock" }
  );

  return (
    <Canvas {...bind()} className="touch-none">
      <Name></Name>
      <AnimatedCamera position={position} makeDefault></AnimatedCamera>
    </Canvas>
  );
}
