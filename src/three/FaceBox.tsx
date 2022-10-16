/// @ts-nocheck
import { useSpring, animated as a } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import ErrorHandler from "./ErrorHandler";
import FaceTexture from "./textures/FaceTexture";
import font from "./roboto.json";
import { MeshBasicMaterial } from "three";
import { useState } from "react";

const materials = [new MeshBasicMaterial({ color: "#000" })];

export default function FaceBox() {
  const [spinning, setSpinning] = useState(false);

  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));

  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [0, 0.5, 0] },
    config: { mass: 5, tension: 180, friction: 40 },
    loop: { reverse: true },
    cancel: spinning,
  });

  const bind = useDrag(({ offset: [x, y], active }) => {
    setSpinning(active);
    api.start({ rotation: [y * 0.1, x * 0.1, 0] });
  });

  return (
    <Canvas shadows className="touch-none">
      <ErrorHandler
        fallback={
          <object3D>
            <Text3D font={font} size={0.2} material={materials}>
              No se pudo cargar
            </Text3D>
          </object3D>
        }
      >
        <a.mesh
          {...bind()}
          rotation={rotation as unknown as [x: number, y: number, z: number]}
          position={position}
          castShadow
        >
          <boxGeometry args={[2, 2, 2]}></boxGeometry>
          <meshPhongMaterial shininess={5} specular="#ffffff">
            <FaceTexture></FaceTexture>
          </meshPhongMaterial>
        </a.mesh>
        <mesh position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]}></planeGeometry>
          <shadowMaterial></shadowMaterial>
        </mesh>
        <directionalLight position={[20, 10, 15]} castShadow></directionalLight>
      </ErrorHandler>
    </Canvas>
  );
}
